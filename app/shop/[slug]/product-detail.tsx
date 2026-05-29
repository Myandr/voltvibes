"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { type ShopifyProduct, type ShopifyVariant } from "@/lib/shopify"
import { useCart } from "@/lib/cart-context"
import { ShoppingCart, Check, ChevronRight, Minus, Plus, Truck, MapPin, RotateCcw, AlertCircle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

function RelatedCard({ product }: { product: ShopifyProduct }) {
  const isRemote = product.images[0]?.startsWith('https://')
  return (
    <Link href={`/shop/${product.handle}`} className="group flex flex-col">
      <div className="aspect-square overflow-hidden bg-[#f5f5f5] rounded-sm relative">
        {isRemote ? (
          <Image src={product.images[0]} alt={product.title} fill sizes="25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <img src={product.images[0]} alt={product.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        )}
      </div>
      <div className="mt-3">
        <p className="text-[11px] uppercase tracking-widest text-[#888]">{product.vendor}</p>
        <h4 className="text-sm font-medium mt-0.5 text-[#0e0e0e] group-hover:text-[#8BBDE8] transition-colors">{product.title}</h4>
        <p className="text-sm font-bold mt-1 text-[#0e0e0e]">{product.price.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
      </div>
    </Link>
  )
}

function findVariant(variants: ShopifyVariant[], selectedColor: string | null, selectedSize: string | null): ShopifyVariant | undefined {
  if (variants.length === 1) return variants[0]
  return variants.find((v) => {
    const opts = v.selectedOptions
    const colorMatch = !selectedColor || opts.some((o) => ['farbe','color','colour'].includes(o.name.toLowerCase()) && o.value === selectedColor)
    const sizeMatch = !selectedSize || opts.some((o) => ['größe','size','gr','grösse','groesse'].includes(o.name.toLowerCase()) && o.value === selectedSize)
    return colorMatch && sizeMatch
  }) ?? variants[0]
}

export default function ProductDetailClient({ product, relatedProducts = [] }: { product: ShopifyProduct; relatedProducts?: ShopifyProduct[] }) {
  const { addToCart, loading } = useCart()

  const colorOption = product.options.find((o) => ['farbe','color','colour'].includes(o.name.toLowerCase()))
  const sizeOption  = product.options.find((o) => ['größe','size','gr','grösse','groesse'].includes(o.name.toLowerCase()))

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState<string | null>(colorOption?.values[0] ?? null)
  const [selectedSize, setSelectedSize]   = useState<string | null>(sizeOption?.values[0] ?? null)
  const [quantity, setQuantity]           = useState(1)
  const [addedToCart, setAddedToCart]     = useState(false)
  const [addError, setAddError]           = useState<string | null>(null)
  const [activeTab, setActiveTab]         = useState<"beschreibung" | "technik">("beschreibung")

  const activeVariant = findVariant(product.variants, selectedColor, selectedSize)
  const inStock = activeVariant?.availableForSale ?? product.availableForSale
  const variantPrice = activeVariant ? parseFloat(activeVariant.price) : product.price

  const isRemote = product.images[0]?.startsWith('https://')

  const handleAddToCart = async () => {
    if (!activeVariant) return
    setAddError(null)
    try {
      await addToCart(activeVariant.id, quantity)
      setAddedToCart(true)
      setTimeout(() => setAddedToCart(false), 2500)
    } catch {
      setAddError('Fehler beim Hinzufügen. Bitte versuche es erneut.')
    }
  }

  return (
    <div style={{ background: '#fff' }}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <nav className="flex items-center gap-1.5 text-xs text-[#888]">
          <Link href="/" className="hover:text-[#0e0e0e] transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/shop" className="hover:text-[#0e0e0e] transition-colors">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#888]">{product.categoryLabel}</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#0e0e0e] truncate max-w-[180px]">{product.title}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Image Gallery */}
          <div className="flex flex-col gap-3">
            <div className="relative aspect-square overflow-hidden bg-[#f5f5f5] rounded-sm">
              {isRemote ? (
                <Image
                  key={selectedImage}
                  src={product.images[selectedImage]}
                  alt={product.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-opacity duration-300"
                  priority
                />
              ) : (
                <img
                  key={selectedImage}
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="h-full w-full object-cover transition-opacity duration-300"
                />
              )}
              {product.badge && (
                <span className={cn(
                  "absolute top-4 left-4 text-white text-xs font-semibold px-2.5 py-1 rounded-sm uppercase tracking-wide",
                  product.badge === "Sale" && "bg-red-600",
                  product.badge === "Neu" && "bg-[#0C1523]",
                  product.badge === "Bestseller" && "bg-amber-500",
                )}>
                  {product.badge}
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {product.images.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={cn("relative h-20 w-20 shrink-0 overflow-hidden rounded-sm border-2 transition-colors", selectedImage === idx ? "border-[#0C1523]" : "border-transparent hover:border-[#888]")}
                  >
                    {isRemote ? (
                      <Image src={src} alt="" fill sizes="80px" className="object-cover" />
                    ) : (
                      <img src={src} alt="" className="h-full w-full object-cover" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-widest text-[#888] font-medium">{product.vendor}</p>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-[#0e0e0e]">
                {variantPrice.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
              </span>
              {product.compareAtPrice && (
                <>
                  <span className="text-lg text-[#888] line-through">
                    {product.compareAtPrice.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
                  </span>
                  <span className="text-sm font-semibold text-[#8BBDE8]">
                    −{Math.round((1 - product.price / product.compareAtPrice) * 100)} %
                  </span>
                </>
              )}
            </div>
            <p className="text-xs text-[#888] mt-1">Inkl. MwSt. — zzgl. Versand</p>

            {product.description && (
              <p className="mt-4 text-sm text-[#555] leading-relaxed">{product.description.slice(0, 200)}{product.description.length > 200 && '…'}</p>
            )}

            <div className="border-t border-[#e5e5e5] mt-6 pt-6 flex flex-col gap-5">

              {/* Color selection */}
              {colorOption && (
                <div>
                  <p className="text-sm font-medium text-[#0e0e0e] mb-2.5">
                    {colorOption.name}: <span className="font-normal text-[#888]">{selectedColor}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {colorOption.values.map((val) => (
                      <button
                        key={val}
                        onClick={() => setSelectedColor(val)}
                        className={cn(
                          "px-3 py-1.5 text-xs border rounded-sm transition-colors",
                          selectedColor === val ? "border-[#0C1523] bg-[#0C1523] text-white font-medium" : "border-[#e5e5e5] text-[#0e0e0e] hover:border-[#0e0e0e]"
                        )}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size selection */}
              {sizeOption && (
                <div>
                  <p className="text-sm font-medium text-[#0e0e0e] mb-2.5">
                    {sizeOption.name}: <span className="font-normal text-[#888]">{selectedSize}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {sizeOption.values.map((val) => (
                      <button
                        key={val}
                        onClick={() => setSelectedSize(val)}
                        className={cn(
                          "px-3 py-2 text-sm border rounded-sm transition-colors",
                          selectedSize === val ? "border-[#0C1523] bg-[#0C1523] text-white font-medium" : "border-[#e5e5e5] text-[#0e0e0e] hover:border-[#0e0e0e]"
                        )}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <p className="text-sm font-medium text-[#0e0e0e] mb-2.5">Menge</p>
                <div className="flex items-center w-fit border border-[#e5e5e5] rounded-sm overflow-hidden">
                  <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-3 py-2 hover:bg-[#f5f5f5] transition-colors text-[#0e0e0e]">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-5 py-2 text-sm font-medium border-x border-[#e5e5e5] min-w-[3rem] text-center text-[#0e0e0e]">{quantity}</span>
                  <button onClick={() => setQuantity((q) => q + 1)} className="px-3 py-2 hover:bg-[#f5f5f5] transition-colors text-[#0e0e0e]">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                disabled={!inStock || loading || !activeVariant}
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-3.5 rounded-sm font-semibold text-sm transition-all duration-200",
                  addedToCart
                    ? "bg-green-600 text-white"
                    : !inStock
                    ? "bg-[#e5e5e5] text-[#888] cursor-not-allowed"
                    : "bg-[#0C1523] hover:bg-[#8BBDE8] hover:text-[#0C1523] text-white"
                )}
              >
                {loading ? (
                  <><Loader2 className="h-4 w-4 animate-spin" />Wird hinzugefügt…</>
                ) : addedToCart ? (
                  <><Check className="h-4 w-4" />In den Warenkorb gelegt!</>
                ) : !inStock ? (
                  'Nicht verfügbar'
                ) : (
                  <><ShoppingCart className="h-4 w-4" />In den Warenkorb</>
                )}
              </button>

              {addedToCart && (
                <Link href="/shop/warenkorb" className="w-full flex items-center justify-center gap-2 py-3 rounded-sm text-sm font-medium border border-[#0C1523] text-[#0C1523] hover:bg-[#0C1523] hover:text-white transition-colors">
                  Zum Warenkorb →
                </Link>
              )}

              {addError && (
                <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-sm px-3 py-2">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {addError}
                </div>
              )}

              {/* Trust signals */}
              <div className="border-t border-[#e5e5e5] pt-5 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-[#888]">
                  <Truck className="h-4 w-4 shrink-0" />
                  <span>Kostenloser Versand ab <strong className="text-[#0e0e0e]">99 €</strong></span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#888]">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>Abholung in Dorsten (Lippestraße 34) möglich</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#888]">
                  <RotateCcw className="h-4 w-4 shrink-0" />
                  <span>30 Tage kostenfreies Rückgaberecht</span>
                </div>
              </div>

              {/* Tags */}
              {product.tags.length > 0 && (
                <div className="border-t border-[#e5e5e5] pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {product.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 bg-[#f5f5f5] text-[#888] rounded-sm">{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tabs: description */}
        <div className="mt-16 border-t border-[#e5e5e5]">
          <div className="flex gap-0 border-b border-[#e5e5e5]">
            {(["beschreibung", "technik"] as const).map((tab) => {
              const label = { beschreibung: "Beschreibung", technik: "Varianten" }[tab]
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-4 text-sm font-medium border-b-2 transition-colors",
                    activeTab === tab ? "border-[#0C1523] text-[#0e0e0e]" : "border-transparent text-[#888] hover:text-[#0e0e0e]"
                  )}
                >
                  {label}
                </button>
              )
            })}
          </div>

          <div className="py-8 max-w-3xl">
            {activeTab === "beschreibung" && (
              <p className="text-[#555] leading-relaxed whitespace-pre-line">{product.description || 'Keine Beschreibung verfügbar.'}</p>
            )}
            {activeTab === "technik" && (
              <div>
                <table className="w-full text-sm">
                  <tbody>
                    {product.variants.map((v, i) => (
                      <tr key={v.id} className={cn("border-b border-[#e5e5e5]", i % 2 === 0 && "bg-[#fafafa]")}>
                        <td className="py-3 px-4 font-medium text-[#888] w-40">
                          {v.title === 'Default Title' ? 'Standard' : v.title}
                        </td>
                        <td className="py-3 px-4 text-[#0e0e0e]">
                          {parseFloat(v.price).toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span className={cn("text-xs px-2 py-0.5 rounded-sm", v.availableForSale ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600")}>
                            {v.availableForSale ? 'Verfügbar' : 'Ausverkauft'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 border-t border-[#e5e5e5] pt-10">
            <h2 className="mb-8 text-[#0e0e0e]" style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: '2rem', letterSpacing: '0.02em' }}>
              Das könnte dir auch gefallen
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => <RelatedCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
