"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { type ShopifyProduct, type CategoryInfo } from "@/lib/shopify"
import { Search, X, SlidersHorizontal, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { BlurTextEffect } from "../components/BlurTextEffect"

const SORT_OPTIONS = [
  { value: "empfohlen",  label: "Empfohlen" },
  { value: "price-asc", label: "Preis aufsteigend" },
  { value: "price-desc",label: "Preis absteigend" },
  { value: "neu",       label: "Neu eingetroffen" },
]

const PRICE_RANGES = [
  { label: "Bis 50 €",        min: 0,    max: 50       },
  { label: "50 € – 200 €",    min: 50,   max: 200      },
  { label: "200 € – 500 €",   min: 200,  max: 500      },
  { label: "500 € – 1.000 €", min: 500,  max: 1000     },
  { label: "Über 1.000 €",    min: 1000, max: Infinity  },
]

function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

function fadeStyle(visible: boolean, delay = 0, y = 16): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : `translateY(${y}px)`,
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  }
}

function ProductCard({ product }: { product: ShopifyProduct }) {
  const isRemote = product.images[0]?.startsWith("https://")

  return (
    <Link href={`/shop/${product.handle}`} className="group block">
      <div className="relative overflow-hidden rounded-sm aspect-[3/2] bg-[#f0f0f0]">
        {product.images[0] && (
          isRemote ? (
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <img
              src={product.images[0]}
              alt={product.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        {product.badge && (
          <span className={cn(
            "absolute top-3 left-3 text-white text-[10px] font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wider",
            product.badge === "Sale"       && "bg-red-600",
            product.badge === "Neu"        && "bg-[#0C1523]",
            product.badge === "Bestseller" && "bg-amber-500",
          )}>
            {product.badge}
          </span>
        )}

        {!product.availableForSale && (
          <div className="absolute inset-0 bg-white/40 flex items-center justify-center">
            <span className="text-xs font-medium text-zinc-600 bg-white/90 px-3 py-1 rounded-sm">
              Ausverkauft
            </span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <p className="text-white/60 text-xs mb-0.5">
            {product.price.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
            {product.compareAtPrice && (
              <span className="line-through ml-2 text-white/35">
                {product.compareAtPrice.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
              </span>
            )}
          </p>
          <h3
            className="text-white font-medium text-sm sm:text-base leading-tight"
            style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
          >
            {product.title}
          </h3>
        </div>
      </div>
    </Link>
  )
}

interface Props {
  initialProducts: ShopifyProduct[]
  categories: CategoryInfo[]
}

export default function ShopClient({ initialProducts, categories }: Props) {
  const [search, setSearch]                         = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null)
  const [sort, setSort]                             = useState("empfohlen")
  const [sortOpen, setSortOpen]                     = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen]   = useState(false)

  const heroSub   = useFadeIn()
  const searchFade = useFadeIn()
  const contentFade = useFadeIn(0.1)

  const toggleCategory = (value: string) =>
    setSelectedCategories(prev =>
      prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value]
    )

  const filtered = useMemo(() => {
    let list = [...initialProducts]
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.vendor.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q)
      )
    }
    if (selectedCategories.length > 0)
      list = list.filter(p => selectedCategories.includes(p.category))
    if (selectedPriceRange !== null) {
      const { min, max } = PRICE_RANGES[selectedPriceRange]
      list = list.filter(p => p.price >= min && p.price <= max)
    }
    switch (sort) {
      case "price-asc":  list.sort((a, b) => a.price - b.price); break
      case "price-desc": list.sort((a, b) => b.price - a.price); break
      case "neu":        list = list.filter(p => p.badge === "Neu").concat(list.filter(p => p.badge !== "Neu")); break
    }
    return list
  }, [search, selectedCategories, selectedPriceRange, sort, initialProducts])

  const activeFilterCount = selectedCategories.length + (selectedPriceRange !== null ? 1 : 0)

  return (
    <>
      {/* ── Hero Title ── */}
      <div className="w-full pt-40 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-8">
            <div>
              <h1 style={{ lineHeight: 0.9 }}>
                <span style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(2.4rem, 6vw, 7rem)', letterSpacing: '0.02em', color: '#0C1523' }}>
                  <BlurTextEffect delay={0}>Unser </BlurTextEffect>
                </span>
                <em style={{ fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif', fontSize: 'clamp(2.1rem, 5.6vw, 6.6rem)', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.01em' }}>
                  <BlurTextEffect delay={0.15}>Shop</BlurTextEffect>
                </em>
              </h1>
            </div>
            <div ref={heroSub.ref} style={fadeStyle(heroSub.visible, 0.35)}>
              <p className="text-xs sm:text-sm text-zinc-500 max-w-[200px] sm:max-w-xs leading-relaxed sm:text-right">
                E-Scooter, Stunt Scooter, Helme und Elektromobile — direkt in der Dorstener Innenstadt.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Quick filters ── */}
      <div ref={searchFade.ref} style={fadeStyle(searchFade.visible, 0.2)} className="px-4 mb-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {([
              { value: "helm",        label: "Helme & Schoner" },
              { value: "stunt",       label: "Stunt Scooter" },
              { value: "e-scooter",   label: "E-Scooter" },
              { value: "elektromobil",label: "Elektromobil für Senioren" },
            ] as const).map(f => (
              <button
                key={f.value}
                onClick={() => toggleCategory(f.value)}
                className={cn(
                  "px-4 py-2 text-sm rounded-sm border transition-colors font-medium",
                  selectedCategories.includes(f.value)
                    ? "bg-[#0C1523] text-white border-[#0C1523]"
                    : "bg-white text-[#0e0e0e] border-[#e5e5e5] hover:border-[#0C1523] hover:text-[#0C1523]"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Search bar ── */}
      <div className="px-4 mb-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 pointer-events-none" />
            <input
              type="search"
              placeholder="Dein Traumscooter suchen..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-4 text-sm border border-[#e5e5e5] rounded-sm bg-white text-[#0e0e0e] placeholder:text-zinc-400 focus:outline-none focus:border-[#0C1523] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div ref={contentFade.ref} style={fadeStyle(contentFade.visible, 0.1, 24)} className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-8 lg:gap-12">

            {/* ── Sidebar ── */}
            <aside className="w-44 shrink-0 hidden lg:block">
              <button
                onClick={() => { setSelectedCategories([]); setSelectedPriceRange(null) }}
                className={cn(
                  "w-full text-left py-2 text-sm font-semibold transition-colors",
                  selectedCategories.length === 0 && selectedPriceRange === null
                    ? "text-[#0C1523]"
                    : "text-zinc-400 hover:text-[#0C1523]"
                )}
              >
                Alle Produkte
              </button>

              {categories.length > 0 && (
                <div className="mt-5 space-y-0.5 border-t border-[#f0f0f0] pt-4">
                  {categories.map(cat => (
                    <button
                      key={cat.value}
                      onClick={() => toggleCategory(cat.value)}
                      className={cn(
                        "w-full text-left py-2 px-2 text-sm flex items-center gap-2.5 rounded-sm transition-colors",
                        selectedCategories.includes(cat.value)
                          ? "text-[#0C1523] font-medium"
                          : "text-zinc-400 hover:text-[#0C1523]"
                      )}
                    >
                      <span className={cn(
                        "h-1.5 w-1.5 rounded-full shrink-0 transition-colors",
                        selectedCategories.includes(cat.value) ? "bg-[#8BBDE8]" : "bg-zinc-300"
                      )} />
                      {cat.label}
                    </button>
                  ))}
                </div>
              )}

              <div className="mt-8 border-t border-[#f0f0f0] pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">Preis</p>
                <div className="space-y-0.5">
                  {PRICE_RANGES.map((range, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPriceRange(selectedPriceRange === idx ? null : idx)}
                      className={cn(
                        "w-full text-left py-2 px-2 text-sm flex items-center gap-2.5 rounded-sm transition-colors",
                        selectedPriceRange === idx
                          ? "text-[#0C1523] font-medium"
                          : "text-zinc-400 hover:text-[#0C1523]"
                      )}
                    >
                      <span className={cn(
                        "h-1.5 w-1.5 rounded-full shrink-0 transition-colors",
                        selectedPriceRange === idx ? "bg-[#8BBDE8]" : "bg-zinc-300"
                      )} />
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* ── Product grid ── */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-6">
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

                <p className="text-xs text-zinc-400 hidden lg:block">
                  {filtered.length} {filtered.length === 1 ? "Produkt" : "Produkte"}
                </p>

                <div className="relative ml-auto">
                  <button
                    onClick={() => setSortOpen(v => !v)}
                    className="flex items-center gap-2 text-sm border border-[#e5e5e5] rounded-sm px-3 py-2 text-[#0e0e0e] hover:bg-[#f5f5f5] transition-colors"
                  >
                    <span className="text-zinc-400">Sortieren:</span>
                    <span className="font-medium">{SORT_OPTIONS.find(s => s.value === sort)?.label}</span>
                    <ChevronDown className={cn("h-4 w-4 text-zinc-400 transition-transform", sortOpen && "rotate-180")} />
                  </button>
                  {sortOpen && (
                    <div className="absolute right-0 top-full mt-1 z-10 bg-white border border-[#e5e5e5] rounded-sm shadow-lg w-48 overflow-hidden">
                      {SORT_OPTIONS.map(o => (
                        <button
                          key={o.value}
                          onClick={() => { setSort(o.value); setSortOpen(false) }}
                          className={cn(
                            "w-full text-left px-4 py-2.5 text-sm hover:bg-[#f5f5f5] transition-colors text-[#0e0e0e]",
                            sort === o.value && "font-semibold text-[#8BBDE8]"
                          )}
                        >
                          {o.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <p className="text-xs text-zinc-400 mb-5 lg:hidden">
                {filtered.length} {filtered.length === 1 ? "Produkt" : "Produkte"}
              </p>

              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {filtered.map(product => <ProductCard key={product.id} product={product} />)}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <p className="text-lg font-medium text-[#0e0e0e]">Keine Produkte gefunden</p>
                  <p className="text-zinc-500 text-sm mt-1">Passe deine Filter oder Suche an.</p>
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
      </div>

      {/* ── SEO text ── */}
      <div className="px-4 pb-10">
        <div className="max-w-6xl mx-auto pt-10 border-t border-[#e5e5e5]">
          <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
            Im VoltVibes Onlineshop finden Sie alles rund um moderne Mobilität – von E-Scootern über Stunt-Scooter für Kinder bis hin zu komfortablen Senioren-Mobilen. Entdecken Sie eine große Auswahl an Zubehör und Ersatzteilen für Ihr Fahrzeug sowie zuverlässige Serviceleistungen. VoltVibes bietet Ihnen innovative Produkte, kompetente Beratung und erstklassigen Kundensupport – damit Sie jederzeit sicher und flexibel unterwegs sind. Egal ob für Alltag, Freizeit oder spezielle Mobilitätsbedürfnisse: VoltVibes ist Ihr zuverlässiger Partner.
          </p>
        </div>
      </div>

      {/* ── Mobile filter drawer ── */}
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
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-8">
              {categories.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">Kategorie</p>
                  <div className="space-y-0.5">
                    {categories.map(cat => (
                      <button
                        key={cat.value}
                        onClick={() => toggleCategory(cat.value)}
                        className={cn(
                          "w-full text-left py-2 px-2 text-sm flex items-center gap-2.5 rounded-sm transition-colors",
                          selectedCategories.includes(cat.value) ? "text-[#0C1523] font-medium" : "text-zinc-400"
                        )}
                      >
                        <span className={cn(
                          "h-1.5 w-1.5 rounded-full shrink-0",
                          selectedCategories.includes(cat.value) ? "bg-[#8BBDE8]" : "bg-zinc-300"
                        )} />
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">Preis</p>
                <div className="space-y-0.5">
                  {PRICE_RANGES.map((range, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPriceRange(selectedPriceRange === idx ? null : idx)}
                      className={cn(
                        "w-full text-left py-2 px-2 text-sm flex items-center gap-2.5 rounded-sm transition-colors",
                        selectedPriceRange === idx ? "text-[#0C1523] font-medium" : "text-zinc-400"
                      )}
                    >
                      <span className={cn(
                        "h-1.5 w-1.5 rounded-full shrink-0",
                        selectedPriceRange === idx ? "bg-[#8BBDE8]" : "bg-zinc-300"
                      )} />
                      {range.label}
                    </button>
                  ))}
                </div>
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
                Anwenden ({filtered.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
