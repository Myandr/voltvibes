"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Footer from "../components/Footer"
import PageHero from "../components/PageHero"
import { products, categories, type Product } from "@/lib/products"
import { SlidersHorizontal, X, Star, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const SORT_OPTIONS = [
  { value: "empfohlen",  label: "Empfohlen" },
  { value: "price-asc", label: "Preis aufsteigend" },
  { value: "price-desc",label: "Preis absteigend" },
  { value: "rating",    label: "Beste Bewertung" },
  { value: "neu",       label: "Neu eingetroffen" },
]

const PRICE_RANGES = [
  { label: "Bis 50 €",          min: 0,    max: 50    },
  { label: "50 € – 200 €",      min: 50,   max: 200   },
  { label: "200 € – 500 €",     min: 200,  max: 500   },
  { label: "500 € – 1.000 €",   min: 500,  max: 1000  },
  { label: "Über 1.000 €",      min: 1000, max: Infinity },
]

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={cn(
              "h-3 w-3",
              i <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "fill-[#e5e5e5] text-[#e5e5e5]"
            )}
          />
        ))}
      </div>
      <span className="text-xs text-[#888]">({count})</span>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden bg-[#f5f5f5] rounded-sm">
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            "h-full w-full object-cover transition-all duration-500",
            hovered && product.images[1] ? "opacity-0" : "opacity-100"
          )}
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-400",
              hovered ? "opacity-100" : "opacity-0"
            )}
          />
        )}
        {product.badge && (
          <span
            className={cn(
              "absolute top-2 left-2 text-white text-[11px] font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wide",
              product.badge === "Sale"       && "bg-red-600",
              product.badge === "Neu"        && "bg-[#0C1523]",
              product.badge === "Bestseller" && "bg-amber-500",
            )}
          >
            {product.badge}
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="text-sm font-medium text-[#888]">Ausverkauft</span>
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-col gap-1">
        <p className="text-[11px] uppercase tracking-widest text-[#888]">{product.brand}</p>
        <h3
          className="text-sm font-medium text-[#0e0e0e] leading-snug group-hover:text-[#8BBDE8] transition-colors"
          style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
        >
          {product.name}
        </h3>
        <StarRating rating={product.rating} count={product.reviewCount} />
        <div className="flex items-baseline gap-2 mt-1">
          <span className="font-bold text-base text-[#0e0e0e]">
            {product.price.toLocaleString("de-DE")} €
          </span>
          {product.originalPrice && (
            <span className="text-sm text-[#888] line-through">
              {product.originalPrice.toLocaleString("de-DE")} €
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default function ShopPage() {
  const [search, setSearch]             = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null)
  const [sort, setSort]                 = useState("empfohlen")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortOpen, setSortOpen]         = useState(false)

  const toggleCategory = (value: string) => {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    )
  }

  const activeFilterCount = selectedCategories.length + (selectedPriceRange !== null ? 1 : 0)

  const filteredProducts = useMemo(() => {
    let list = [...products]
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q)
      )
    }
    if (selectedCategories.length > 0) list = list.filter((p) => selectedCategories.includes(p.category))
    if (selectedPriceRange !== null) {
      const range = PRICE_RANGES[selectedPriceRange]
      list = list.filter((p) => p.price >= range.min && p.price <= range.max)
    }
    switch (sort) {
      case "price-asc":  list.sort((a, b) => a.price - b.price); break
      case "price-desc": list.sort((a, b) => b.price - a.price); break
      case "rating":     list.sort((a, b) => b.rating - a.rating); break
      case "neu":        list = list.filter((p) => p.badge === "Neu").concat(list.filter((p) => p.badge !== "Neu")); break
    }
    return list
  }, [search, selectedCategories, selectedPriceRange, sort])

  return (
    <main className="flex flex-col flex-1 min-h-screen bg-white">

      <PageHero
        eyebrow="VoltVibes Dorsten"
        title="Unser"
        titleAccent="Shop"
        subtitle="E-Scooter, Stunt Scooter, Helme und Elektromobile — direkt in der Dorstener Innenstadt."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex gap-8">

          {/* Filter Sidebar (desktop) */}
          <aside className="hidden lg:flex flex-col gap-8 w-56 shrink-0">
            <div className="flex items-center justify-between">
              <span
                className="text-sm font-semibold uppercase tracking-wider text-[#0e0e0e]"
                style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
              >
                Filter
              </span>
              {activeFilterCount > 0 && (
                <button
                  onClick={() => { setSelectedCategories([]); setSelectedPriceRange(null) }}
                  className="text-xs text-[#8BBDE8] hover:underline"
                >
                  Zurücksetzen
                </button>
              )}
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#888] mb-3">Kategorie</p>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.value}>
                    <label className="flex items-center gap-2.5 cursor-pointer group">
                      <div
                        onClick={() => toggleCategory(cat.value)}
                        className={cn(
                          "h-4 w-4 rounded-sm border flex items-center justify-center shrink-0 transition-colors cursor-pointer",
                          selectedCategories.includes(cat.value)
                            ? "bg-[#0C1523] border-[#0C1523]"
                            : "border-[#d0d0d0] group-hover:border-[#0e0e0e]"
                        )}
                      >
                        {selectedCategories.includes(cat.value) && (
                          <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 10 10" fill="none">
                            <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <span
                        onClick={() => toggleCategory(cat.value)}
                        className="text-sm text-[#555] group-hover:text-[#0e0e0e] transition-colors cursor-pointer select-none"
                      >
                        {cat.label}
                      </span>
                      <span className="ml-auto text-xs text-[#aaa]">{cat.count}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#888] mb-3">Preisbereich</p>
              <ul className="space-y-2">
                {PRICE_RANGES.map((range, idx) => (
                  <li key={idx}>
                    <label className="flex items-center gap-2.5 cursor-pointer group">
                      <div
                        onClick={() => setSelectedPriceRange(selectedPriceRange === idx ? null : idx)}
                        className={cn(
                          "h-4 w-4 rounded-full border flex items-center justify-center shrink-0 transition-colors cursor-pointer",
                          selectedPriceRange === idx
                            ? "border-[#0C1523]"
                            : "border-[#d0d0d0] group-hover:border-[#0e0e0e]"
                        )}
                      >
                        {selectedPriceRange === idx && <div className="h-2 w-2 rounded-full bg-[#0C1523]" />}
                      </div>
                      <span
                        onClick={() => setSelectedPriceRange(selectedPriceRange === idx ? null : idx)}
                        className="text-sm text-[#555] group-hover:text-[#0e0e0e] transition-colors cursor-pointer select-none"
                      >
                        {range.label}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6 gap-4">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm font-medium border border-[#e5e5e5] rounded-sm px-3 py-2 text-[#0e0e0e] hover:bg-[#f5f5f5] transition-colors"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filter
                {activeFilterCount > 0 && (
                  <span className="bg-[#0C1523] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              <div className="relative ml-auto">
                <button
                  onClick={() => setSortOpen((v) => !v)}
                  className="flex items-center gap-2 text-sm border border-[#e5e5e5] rounded-sm px-3 py-2 text-[#0e0e0e] hover:bg-[#f5f5f5] transition-colors"
                >
                  <span className="text-[#888]">Sortieren:</span>
                  <span className="font-medium text-[#0e0e0e]">{SORT_OPTIONS.find((s) => s.value === sort)?.label}</span>
                  <ChevronDown className={cn("h-4 w-4 text-[#888] transition-transform", sortOpen && "rotate-180")} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-1 z-10 bg-white border border-[#e5e5e5] rounded-sm shadow-lg w-48 overflow-hidden">
                    {SORT_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => { setSort(option.value); setSortOpen(false) }}
                        className={cn(
                          "w-full text-left px-4 py-2.5 text-sm hover:bg-[#f5f5f5] transition-colors text-[#0e0e0e]",
                          sort === option.value && "font-semibold text-[#8BBDE8]"
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {selectedCategories.map((cat) => {
                  const c = categories.find((c) => c.value === cat)
                  return (
                    <button
                      key={cat}
                      onClick={() => toggleCategory(cat)}
                      className="flex items-center gap-1.5 text-xs bg-[#0C1523] text-white rounded-full px-3 py-1 hover:bg-[#8BBDE8] hover:text-[#0C1523] transition-colors"
                    >
                      {c?.label}
                      <X className="h-3 w-3" />
                    </button>
                  )
                })}
                {selectedPriceRange !== null && (
                  <button
                    onClick={() => setSelectedPriceRange(null)}
                    className="flex items-center gap-1.5 text-xs bg-[#0C1523] text-white rounded-full px-3 py-1 hover:bg-[#8BBDE8] hover:text-[#0C1523] transition-colors"
                  >
                    {PRICE_RANGES[selectedPriceRange].label}
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
            )}

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="text-lg font-medium text-[#0e0e0e]">Keine Produkte gefunden</p>
                <p className="text-[#888] text-sm mt-1">Passe deine Filter oder Suche an.</p>
                <button
                  onClick={() => { setSearch(""); setSelectedCategories([]); setSelectedPriceRange(null) }}
                  className="mt-4 text-sm text-[#8BBDE8] hover:underline"
                >
                  Filter zurücksetzen
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e5e5]">
              <span className="font-semibold text-[#0e0e0e]">Filter</span>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="h-5 w-5 text-[#0e0e0e]" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#888] mb-3">Kategorie</p>
                <ul className="space-y-3">
                  {categories.map((cat) => (
                    <li key={cat.value}>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <div
                          onClick={() => toggleCategory(cat.value)}
                          className={cn(
                            "h-4 w-4 rounded-sm border flex items-center justify-center shrink-0 transition-colors cursor-pointer",
                            selectedCategories.includes(cat.value) ? "bg-[#0C1523] border-[#0C1523]" : "border-[#d0d0d0]"
                          )}
                        >
                          {selectedCategories.includes(cat.value) && (
                            <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 10 10" fill="none">
                              <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                        <span onClick={() => toggleCategory(cat.value)} className="text-sm text-[#0e0e0e] cursor-pointer select-none">
                          {cat.label} ({cat.count})
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#888] mb-3">Preis</p>
                <ul className="space-y-3">
                  {PRICE_RANGES.map((range, idx) => (
                    <li key={idx}>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <div
                          onClick={() => setSelectedPriceRange(selectedPriceRange === idx ? null : idx)}
                          className={cn(
                            "h-4 w-4 rounded-full border flex items-center justify-center shrink-0 cursor-pointer",
                            selectedPriceRange === idx ? "border-[#0C1523]" : "border-[#d0d0d0]"
                          )}
                        >
                          {selectedPriceRange === idx && <div className="h-2 w-2 rounded-full bg-[#0C1523]" />}
                        </div>
                        <span onClick={() => setSelectedPriceRange(selectedPriceRange === idx ? null : idx)} className="text-sm text-[#0e0e0e] cursor-pointer select-none">
                          {range.label}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="px-5 py-4 border-t border-[#e5e5e5] flex gap-3">
              <button
                onClick={() => { setSelectedCategories([]); setSelectedPriceRange(null) }}
                className="flex-1 py-2.5 text-sm border border-[#e5e5e5] rounded-sm text-[#0e0e0e] hover:bg-[#f5f5f5] transition-colors"
              >
                Zurücksetzen
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 py-2.5 text-sm bg-[#0C1523] text-white rounded-sm font-medium hover:bg-[#8BBDE8] hover:text-[#0C1523] transition-colors"
              >
                Anwenden ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
