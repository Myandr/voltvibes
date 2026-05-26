"use client"

import { useState } from "react"
import Link from "next/link"
import { type Product, getRelatedProducts } from "@/lib/products"
import { ShoppingCart, Heart, Star, Check, ChevronRight, Minus, Plus, Truck, MapPin, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "fill-[#e5e5e5] text-[#e5e5e5]"
            )}
          />
        ))}
      </div>
      <span className="text-sm text-[#888]">{rating.toFixed(1)} ({count} Bewertungen)</span>
    </div>
  )
}

function RelatedProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group flex flex-col">
      <div className="aspect-square overflow-hidden bg-[#f5f5f5] rounded-sm">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-3">
        <p className="text-[11px] uppercase tracking-widest text-[#888]">{product.brand}</p>
        <h4 className="text-sm font-medium mt-0.5 text-[#0e0e0e] group-hover:text-[#8BBDE8] transition-colors">{product.name}</h4>
        <p className="text-sm font-bold mt-1 text-[#0e0e0e]">{product.price.toLocaleString("de-DE")} €</p>
      </div>
    </Link>
  )
}

export function ProductDetail({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name ?? null)
  const [selectedSize, setSelectedSize]   = useState(product.sizes?.[0] ?? null)
  const [quantity, setQuantity]           = useState(1)
  const [addedToCart, setAddedToCart]     = useState(false)
  const [activeTab, setActiveTab]         = useState<"beschreibung" | "technik" | "bewertungen">("beschreibung")

  const related = getRelatedProducts(product, 4)

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div style={{ background: '#fff' }}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <nav className="flex items-center gap-1.5 text-xs text-[#888]">
          <Link href="/" className="hover:text-[#0e0e0e] transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/shop" className="hover:text-[#0e0e0e] transition-colors">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#888]">{product.categoryLabel}</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#0e0e0e] truncate max-w-[180px]">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Image Gallery */}
          <div className="flex flex-col gap-3">
            <div className="relative aspect-square overflow-hidden bg-[#f5f5f5] rounded-sm">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover transition-opacity duration-300"
                key={selectedImage}
              />
              {product.badge && (
                <span
                  className={cn(
                    "absolute top-4 left-4 text-white text-xs font-semibold px-2.5 py-1 rounded-sm uppercase tracking-wide",
                    product.badge === "Sale"       && "bg-red-600",
                    product.badge === "Neu"        && "bg-[#0C1523]",
                    product.badge === "Bestseller" && "bg-amber-500",
                  )}
                >
                  {product.badge}
                </span>
              )}
            </div>

            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={cn(
                      "relative h-20 w-20 shrink-0 overflow-hidden rounded-sm border-2 transition-colors",
                      selectedImage === idx ? "border-[#0C1523]" : "border-transparent hover:border-[#888]"
                    )}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-widest text-[#888] font-medium">{product.brand}</p>
            <h1
              className="mt-2 leading-tight text-[#0e0e0e]"
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                letterSpacing: '0.02em',
              }}
            >
              {product.name}
            </h1>

            <div className="mt-3">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-[#0e0e0e]">
                {product.price.toLocaleString("de-DE")} €
              </span>
              {product.originalPrice && (
                <span className="text-lg text-[#888] line-through">
                  {product.originalPrice.toLocaleString("de-DE")} €
                </span>
              )}
              {product.originalPrice && (
                <span className="text-sm font-semibold text-[#8BBDE8]">
                  −{Math.round((1 - product.price / product.originalPrice) * 100)} %
                </span>
              )}
            </div>
            <p className="text-xs text-[#888] mt-1">Inkl. MwSt. — zzgl. Versand</p>

            <div className="border-t border-[#e5e5e5] mt-6 pt-6 flex flex-col gap-5">

              {product.colors && product.colors.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-[#0e0e0e] mb-2.5">
                    Farbe: <span className="font-normal text-[#888]">{selectedColor}</span>
                  </p>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        title={color.name}
                        className={cn(
                          "h-8 w-8 rounded-full border-2 transition-all",
                          selectedColor === color.name
                            ? "border-[#0C1523] scale-110 shadow-md"
                            : "border-transparent hover:border-[#888]"
                        )}
                        style={{ backgroundColor: color.hex }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-[#0e0e0e] mb-2.5">
                    {product.category === "helm" ? "Größe" : "Variante"}:{" "}
                    <span className="font-normal text-[#888]">{selectedSize}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "px-3 py-2 text-sm border rounded-sm transition-colors",
                          selectedSize === size
                            ? "border-[#0C1523] bg-[#0C1523] text-white font-medium"
                            : "border-[#e5e5e5] text-[#0e0e0e] hover:border-[#0e0e0e]"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <p className="text-sm font-medium text-[#0e0e0e] mb-2.5">Menge</p>
                <div className="flex items-center gap-0 w-fit border border-[#e5e5e5] rounded-sm overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-2 hover:bg-[#f5f5f5] transition-colors text-[#0e0e0e]"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-5 py-2 text-sm font-medium border-x border-[#e5e5e5] min-w-[3rem] text-center text-[#0e0e0e]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-2 hover:bg-[#f5f5f5] transition-colors text-[#0e0e0e]"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-3.5 rounded-sm font-semibold text-sm transition-all duration-200",
                    addedToCart
                      ? "bg-green-600 text-white"
                      : "bg-[#0C1523] hover:bg-[#8BBDE8] hover:text-[#0C1523] text-white"
                  )}
                >
                  {addedToCart ? (
                    <><Check className="h-4 w-4" />In den Warenkorb gelegt</>
                  ) : (
                    <><ShoppingCart className="h-4 w-4" />In den Warenkorb</>
                  )}
                </button>
                <button className="p-3.5 border border-[#e5e5e5] rounded-sm hover:bg-[#f5f5f5] transition-colors text-[#0e0e0e]">
                  <Heart className="h-4 w-4" />
                </button>
              </div>

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

              {product.features.length > 0 && (
                <div className="border-t border-[#e5e5e5] pt-5">
                  <p className="text-sm font-semibold text-[#0e0e0e] mb-3">Highlights</p>
                  <ul className="flex flex-col gap-2">
                    {product.features.slice(0, 5).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#888]">
                        <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16 border-t border-[#e5e5e5]">
          <div className="flex gap-0 border-b border-[#e5e5e5]">
            {(["beschreibung", "technik", "bewertungen"] as const).map((tab) => {
              const label = { beschreibung: "Beschreibung", technik: "Technische Daten", bewertungen: "Bewertungen" }[tab]
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-4 text-sm font-medium border-b-2 transition-colors",
                    activeTab === tab
                      ? "border-[#0C1523] text-[#0e0e0e]"
                      : "border-transparent text-[#888] hover:text-[#0e0e0e]"
                  )}
                >
                  {label}
                </button>
              )
            })}
          </div>

          <div className="py-8 max-w-3xl">
            {activeTab === "beschreibung" && (
              <div className="flex flex-col gap-6">
                <p className="text-[#555] leading-relaxed">{product.description}</p>
                {product.features.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-[#0e0e0e] mb-3">Produktmerkmale</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#888]">
                          <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === "technik" && (
              <div>
                <h3 className="font-semibold text-[#0e0e0e] mb-4">Technische Daten</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr key={i} className={cn("border-b border-[#e5e5e5]", i % 2 === 0 && "bg-[#fafafa]")}>
                        <td className="py-3 px-4 font-medium text-[#888] w-40 shrink-0">{spec.label}</td>
                        <td className="py-3 px-4 text-[#0e0e0e]">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "bewertungen" && (
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p
                      className="text-[#0e0e0e]"
                      style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: '4rem', lineHeight: 1 }}
                    >
                      {product.rating.toFixed(1)}
                    </p>
                    <StarRating rating={product.rating} count={product.reviewCount} />
                    <p className="text-xs text-[#888] mt-1">{product.reviewCount} Bewertungen</p>
                  </div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    {[5, 4, 3, 2, 1].map((stars) => {
                      const pct = stars === 5 ? 65 : stars === 4 ? 22 : stars === 3 ? 8 : stars === 2 ? 3 : 2
                      return (
                        <div key={stars} className="flex items-center gap-2 text-xs">
                          <span className="w-4 text-right text-[#888]">{stars}</span>
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                          <div className="flex-1 h-1.5 bg-[#f0f0f0] rounded-full overflow-hidden">
                            <div className="h-full bg-amber-400 rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="text-[#888] w-8">{pct} %</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="border border-[#e5e5e5] rounded-sm p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-[#0C1523] flex items-center justify-center text-xs font-bold text-white">M</div>
                    <div>
                      <p className="text-sm font-medium text-[#0e0e0e]">Max K.</p>
                      <div className="flex">
                        {[1,2,3,4,5].map((i) => <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
                      </div>
                    </div>
                    <span className="ml-auto text-xs text-[#888]">vor 2 Wochen</span>
                  </div>
                  <p className="text-sm text-[#555]">
                    Super Qualität und schnelle Lieferung. Das Team vor Ort in Dorsten hat mir bei der Einrichtung geholfen — top Service!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16 border-t border-[#e5e5e5] pt-10">
            <h2
              className="mb-8 text-[#0e0e0e]"
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: '2rem',
                letterSpacing: '0.02em',
              }}
            >
              Das könnte dir auch gefallen
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <RelatedProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
