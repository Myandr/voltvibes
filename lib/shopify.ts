// ─── Shopify Storefront API 2025-04 ─────────────────────────────────────────

const DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ?? ''
const TOKEN  = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN ?? ''
const API_VERSION = '2025-04'

function endpoint() {
  return `https://${DOMAIN}/api/${API_VERSION}/graphql.json`
}
function headers() {
  return {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': TOKEN,
  }
}

// ─── Error ───────────────────────────────────────────────────────────────────

export type ShopifyFetchError = {
  type: 'missing_config' | 'unauthorized' | 'api_error' | 'network_error'
  message: string
  details: string
}

function missingConfigError(): ShopifyFetchError {
  return {
    type: 'missing_config',
    message: 'Shopify nicht konfiguriert',
    details:
      'Trage NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN und NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN in die .env.local ein. ' +
      'Den Storefront API Token (32-stelliger Hex-String, NICHT der shpat_... Admin-Token) findest du in: ' +
      'Shopify Admin → Einstellungen → Apps → Deine Custom App → Storefront API Access Token.',
  }
}

// ─── Raw GraphQL fetch ────────────────────────────────────────────────────────

async function shopifyFetch<T>(
  query: string,
  variables: Record<string, unknown> = {},
  cacheOpts?: RequestInit['next']
): Promise<T> {
  const res = await fetch(endpoint(), {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ query, variables }),
    next: cacheOpts,
  })
  const json = await res.json()
  if (json.errors?.length) throw new Error(json.errors[0].message)
  return json.data as T
}

// ─── Types ───────────────────────────────────────────────────────────────────

export type ShopifyVariant = {
  id: string
  title: string
  availableForSale: boolean
  selectedOptions: { name: string; value: string }[]
  price: string
  compareAtPrice: string | null
}

export type ShopifyProduct = {
  id: string
  handle: string
  title: string
  vendor: string
  productType: string
  tags: string[]
  description: string
  availableForSale: boolean
  images: string[]
  price: number
  compareAtPrice: number | undefined
  options: { name: string; values: string[] }[]
  variants: ShopifyVariant[]
  badge: string | undefined
  category: string
  categoryLabel: string
}

export type CategoryInfo = { value: string; label: string; count: number }

export type ProductsResult =
  | { ok: true; products: ShopifyProduct[]; categories: CategoryInfo[] }
  | { ok: false; error: ShopifyFetchError }

export type ProductResult =
  | { ok: true; product: ShopifyProduct }
  | { ok: false; error: ShopifyFetchError }

// ─── Cart types ───────────────────────────────────────────────────────────────

export type CartLine = {
  id: string
  quantity: number
  variantId: string
  variantTitle: string
  productTitle: string
  productHandle: string
  vendor: string
  image: string
  price: number
}

export type Cart = {
  id: string
  checkoutUrl: string
  totalQuantity: number
  totalAmount: number
  lines: CartLine[]
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function detectBadge(tags: string[]): string | undefined {
  const lower = tags.map((t) => t.toLowerCase())
  if (lower.some((t) => t === 'sale')) return 'Sale'
  if (lower.some((t) => t === 'neu' || t === 'new')) return 'Neu'
  if (lower.some((t) => t === 'bestseller')) return 'Bestseller'
  return undefined
}

function mapCategory(productType: string): { category: string; categoryLabel: string } {
  const t = productType.toLowerCase()
  if (t.includes('e-scooter') || t.includes('escooter') || t.includes('elektroroller'))
    return { category: 'e-scooter', categoryLabel: 'E-Scooter' }
  if (t.includes('stunt')) return { category: 'stunt', categoryLabel: 'Stunt Scooter' }
  if (t.includes('elektromobil') || t.includes('seniorenmobil') || t.includes('mobility'))
    return { category: 'elektromobil', categoryLabel: 'Elektromobil' }
  if (t.includes('helm') || t.includes('helmet') || t.includes('schutz'))
    return { category: 'helm', categoryLabel: 'Helme & Schutz' }
  if (t.includes('schloss') || t.includes('lock') || t.includes('sicherheit'))
    return { category: 'schloss', categoryLabel: 'Schlösser & Sicherheit' }
  if (t.includes('tasche') || t.includes('bag') || t.includes('transport'))
    return { category: 'tasche', categoryLabel: 'Taschen & Transport' }
  return { category: 'ersatzteil', categoryLabel: 'Ersatzteile & Zubehör' }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapNode(node: any): ShopifyProduct {
  const price = parseFloat(node.priceRange?.minVariantPrice?.amount ?? node.variants?.edges?.[0]?.node?.price?.amount ?? '0')
  const compareAmt = parseFloat(node.compareAtPriceRange?.minVariantPrice?.amount ?? '0')
  const images: string[] = (node.images?.edges ?? []).map((e: any) => e.node.url)
  const { category, categoryLabel } = mapCategory(node.productType ?? '')
  const variants: ShopifyVariant[] = (node.variants?.edges ?? []).map((e: any) => ({
    id: e.node.id,
    title: e.node.title,
    availableForSale: e.node.availableForSale,
    selectedOptions: e.node.selectedOptions ?? [],
    price: e.node.price?.amount ?? '0',
    compareAtPrice: e.node.compareAtPrice?.amount ?? null,
  }))
  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    vendor: node.vendor || 'VoltVibes',
    productType: node.productType ?? '',
    tags: node.tags ?? [],
    description: node.description ?? '',
    availableForSale: node.availableForSale ?? true,
    images,
    price,
    compareAtPrice: compareAmt > price && compareAmt > 0 ? compareAmt : undefined,
    options: node.options ?? [],
    variants,
    badge: detectBadge(node.tags ?? []),
    category,
    categoryLabel,
  }
}

function mapCart(cartData: any): Cart {
  return {
    id: cartData.id,
    checkoutUrl: cartData.checkoutUrl,
    totalQuantity: cartData.totalQuantity ?? 0,
    totalAmount: parseFloat(cartData.cost?.totalAmount?.amount ?? '0'),
    lines: (cartData.lines?.edges ?? []).map((e: any): CartLine => {
      const m = e.node.merchandise
      return {
        id: e.node.id,
        quantity: e.node.quantity,
        variantId: m.id,
        variantTitle: m.title === 'Default Title' ? '' : (m.title ?? ''),
        productTitle: m.product?.title ?? '',
        productHandle: m.product?.handle ?? '',
        vendor: m.product?.vendor ?? '',
        image: m.image?.url ?? '/images/gallery-1.jpg',
        price: parseFloat(m.price?.amount ?? '0'),
      }
    }),
  }
}

// ─── GraphQL Queries ──────────────────────────────────────────────────────────

const VARIANT_FIELDS = `
  id
  title
  availableForSale
  selectedOptions { name value }
  price { amount currencyCode }
  compareAtPrice { amount currencyCode }
`

const PRODUCTS_QUERY = `
  query getProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id handle title vendor productType tags description availableForSale
          images(first: 1) { edges { node { url altText } } }
          priceRange { minVariantPrice { amount currencyCode } }
          compareAtPriceRange { minVariantPrice { amount currencyCode } }
          options { name values }
          variants(first: 1) { edges { node { ${VARIANT_FIELDS} } } }
        }
      }
    }
  }
`

const PRODUCT_QUERY = `
  query getProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id handle title vendor productType tags description availableForSale
      images(first: 8) { edges { node { url altText } } }
      priceRange { minVariantPrice { amount currencyCode } }
      compareAtPriceRange { minVariantPrice { amount currencyCode } }
      options { name values }
      variants(first: 100) { edges { node { ${VARIANT_FIELDS} } } }
    }
  }
`

const CART_FIELDS = `
  id
  checkoutUrl
  totalQuantity
  cost { totalAmount { amount currencyCode } }
  lines(first: 100) {
    edges {
      node {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id title
            product { title handle vendor }
            image { url altText }
            price { amount currencyCode }
          }
        }
      }
    }
  }
`

const CART_CREATE = `
  mutation cartCreate($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart { ${CART_FIELDS} }
      userErrors { field message }
    }
  }
`

const CART_LINES_ADD = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart { ${CART_FIELDS} }
      userErrors { field message }
    }
  }
`

const CART_LINES_UPDATE = `
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart { ${CART_FIELDS} }
      userErrors { field message }
    }
  }
`

const CART_LINES_REMOVE = `
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart { ${CART_FIELDS} }
      userErrors { field message }
    }
  }
`

const CART_QUERY = `
  query getCart($cartId: ID!) {
    cart(id: $cartId) { ${CART_FIELDS} }
  }
`

// ─── Server-side product fetching ─────────────────────────────────────────────

export async function fetchProducts(): Promise<ProductsResult> {
  if (!DOMAIN || !TOKEN) return { ok: false, error: missingConfigError() }

  try {
    const data = await shopifyFetch<{ products: { edges: { node: unknown }[] } }>(
      PRODUCTS_QUERY,
      { first: 250 },
      { revalidate: 300 }
    )
    const products = (data.products?.edges ?? []).map((e) => mapNode(e.node))

    const catMap = new Map<string, { label: string; count: number }>()
    for (const p of products) {
      const ex = catMap.get(p.category)
      if (ex) ex.count++
      else catMap.set(p.category, { label: p.categoryLabel, count: 1 })
    }
    const categories: CategoryInfo[] = Array.from(catMap.entries()).map(
      ([value, { label, count }]) => ({ value, label, count })
    )
    return { ok: true, products, categories }
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Unbekannter Fehler'
    return {
      ok: false,
      error: {
        type: msg.includes('401') || msg.includes('403') ? 'unauthorized' : 'api_error',
        message: 'Shopify API Fehler',
        details: msg,
      },
    }
  }
}

export async function fetchProductByHandle(handle: string): Promise<ProductResult> {
  if (!DOMAIN || !TOKEN) return { ok: false, error: missingConfigError() }

  try {
    const data = await shopifyFetch<{ productByHandle: unknown }>(
      PRODUCT_QUERY,
      { handle },
      { revalidate: 60 }
    )
    if (!data.productByHandle) {
      return {
        ok: false,
        error: { type: 'api_error', message: 'Produkt nicht gefunden', details: `Handle: ${handle}` },
      }
    }
    return { ok: true, product: mapNode(data.productByHandle) }
  } catch (e) {
    return {
      ok: false,
      error: {
        type: 'api_error',
        message: 'Shopify API Fehler',
        details: e instanceof Error ? e.message : 'Unbekannter Fehler',
      },
    }
  }
}

// ─── Client-side cart operations ──────────────────────────────────────────────
// These are called from the browser — no `next` cache options needed.

export async function cartCreate(variantId: string, quantity: number): Promise<Cart> {
  const data = await shopifyFetch<{ cartCreate: { cart: unknown } }>(CART_CREATE, {
    lines: [{ merchandiseId: variantId, quantity }],
  })
  return mapCart(data.cartCreate.cart)
}

export async function cartLinesAdd(cartId: string, variantId: string, quantity: number): Promise<Cart> {
  const data = await shopifyFetch<{ cartLinesAdd: { cart: unknown } }>(CART_LINES_ADD, {
    cartId,
    lines: [{ merchandiseId: variantId, quantity }],
  })
  return mapCart(data.cartLinesAdd.cart)
}

export async function cartLinesUpdate(cartId: string, lineId: string, quantity: number): Promise<Cart> {
  const data = await shopifyFetch<{ cartLinesUpdate: { cart: unknown } }>(CART_LINES_UPDATE, {
    cartId,
    lines: [{ id: lineId, quantity }],
  })
  return mapCart(data.cartLinesUpdate.cart)
}

export async function cartLinesRemove(cartId: string, lineId: string): Promise<Cart> {
  const data = await shopifyFetch<{ cartLinesRemove: { cart: unknown } }>(CART_LINES_REMOVE, {
    cartId,
    lineIds: [lineId],
  })
  return mapCart(data.cartLinesRemove.cart)
}

export async function getCart(cartId: string): Promise<Cart | null> {
  const data = await shopifyFetch<{ cart: unknown | null }>(CART_QUERY, { cartId })
  if (!data.cart) return null
  return mapCart(data.cart)
}
