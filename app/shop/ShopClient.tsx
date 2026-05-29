"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { type ShopifyProduct, type CategoryInfo } from "@/lib/shopify"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const QUICK_CATEGORIES = [
  { label: "E-Scooter",                value: "e-scooter"    },
  { label: "Stunt Scooter",            value: "stunt"        },
  { label: "Elektromobil für Senioren",value: "elektromobil" },
  { label: "Helme & Schoner",          value: "helm"         },
]

const SORT_OPTIONS = [
  { value: "empfohlen",  label: "Empfohlen" },
  { value: "price-asc", label: "Preis aufsteigend" },
  { value: "price-desc",label: "Preis absteigend" },
  { value: "neu",       label: "Neu eingetroffen" },
]

const PRICE_RANGES = [
  { label: "Bis 50 €",          min: 0,    max: 50    },
  { label: "50 € – 200 €",      min: 50,   max: 200   },
  { label: "200 € – 500 €",     min: 200,  max: 500   },
  { label: "500 € – 1.000 €",   min: 500,  max: 1000  },
  { label: "Über 1.000 €",      min: 1000, max: Infinity },
]

function ProductCard({ product }: { product: ShopifyProduct }) {
  const [hovered, setHovered] = useState(false)
  const isRemote = product.images[0]?.startsWith('https://')

  return (
    <Link
      href={`/shop/${product.handle}`}
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden bg-[#f5f5f5] rounded-sm">
        {isRemote ? (
          <>
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className={cn("object-cover transition-all duration-500", hovered && product.images[1] ? "opacity-0" : "opacity-100")}
            />
            {product.images[1] && (
              <Image
                src={product.images[1]}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className={cn("object-cover transition-opacity duration-400", hovered ? "opacity-100" : "opacity-0")}
              />
            )}
          </>
        ) : (
          <>
            <img src={product.images[0]} alt={product.title} className={cn("h-full w-full object-cover transition-all duration-500", hovered && product.images[1] ? "opacity-0" : "opacity-100")} />
            {product.images[1] && (
              <img src={product.images[1]} alt={product.title} className={cn("absolute inset-0 h-full w-full object-cover transition-opacity duration-400", hovered ? "opacity-100" : "opacity-0")} />
            )}
          </>
        )}

        {product.badge && (
          <span className={cn(
            "absolute top-2 left-2 text-white text-[11px] font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wide",
            product.badge === "Sale" && "bg-red-600",
            product.badge === "Neu" && "bg-[#0C1523]",
            product.badge === "Bestseller" && "bg-amber-500",
          )}>
            {product.badge}
          </span>
        )}
        {!product.availableForSale && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="text-sm font-medium text-[#888]">Ausverkauft</span>
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-col gap-1">
        <p className="text-[11px] uppercase tracking-widest text-[#888]">{product.vendor}</p>
        <h3 className="text-sm font-medium text-[#0e0e0e] leading-snug group-hover:text-[#8BBDE8] transition-colors" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
          {product.title}
        </h3>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="font-bold text-base text-[#0e0e0e]">
            {product.price.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-[#888] line-through">
              {product.compareAtPrice.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
            </span>
          )}
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
  const [mobileFiltersOpen, setMobileFiltersOpen]   = useState(false)
  const [sortOpen, setSortOpen]                     = useState(false)

  const toggleCategory = (value: string) =>
    setSelectedCategories((prev) => prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value])

  const activeFilterCount = selectedCategories.length + (selectedPriceRange !== null ? 1 : 0)

  const filtered = useMemo(() => {
    let list = [...initialProducts]
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter((p) => p.title.toLowerCase().includes(q) || p.vendor.toLowerCase().includes(q) || p.categoryLabel.toLowerCase().includes(q))
    }
    if (selectedCategories.length > 0) list = list.filter((p) => selectedCategories.includes(p.category))
    if (selectedPriceRange !== null) {
      const { min, max } = PRICE_RANGES[selectedPriceRange]
      list = list.filter((p) => p.price >= min && p.price <= max)
    }
    switch (sort) {
      case "price-asc":  list.sort((a, b) => a.price - b.price); break
      case "price-desc": list.sort((a, b) => b.price - a.price); break
      case "neu":        list = list.filter((p) => p.badge === "Neu").concat(list.filter((p) => p.badge !== "Neu")); break
    }
    return list
  }, [search, selectedCategories, selectedPriceRange, sort, initialProducts])

  const FilterSidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={cn("flex flex-col gap-8", !mobile && "w-56 shrink-0")}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#0e0e0e]">Filter</span>
        {activeFilterCount > 0 && (
          <button onClick={() => { setSelectedCategories([]); setSelectedPriceRange(null) }} className="text-xs text-[#8BBDE8] hover:underline">
            Zurücksetzen
          </button>
        )}
      </div>

      {categories.length > 0 && (
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
                      selectedCategories.includes(cat.value) ? "bg-[#0C1523] border-[#0C1523]" : "border-[#d0d0d0] group-hover:border-[#0e0e0e]"
                    )}
                  >
                    {selectedCategories.includes(cat.value) && (
                      <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span onClick={() => toggleCategory(cat.value)} className="text-sm text-[#555] group-hover:text-[#0e0e0e] transition-colors cursor-pointer select-none">
                    {cat.label}
                  </span>
                  <span className="ml-auto text-xs text-[#aaa]">{cat.count}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-[#888] mb-3">Preisbereich</p>
        <ul className="space-y-2">
          {PRICE_RANGES.map((range, idx) => (
            <li key={idx}>
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <div
                  onClick={() => setSelectedPriceRange(selectedPriceRange === idx ? null : idx)}
                  className={cn("h-4 w-4 rounded-full border flex items-center justify-center shrink-0 transition-colors cursor-pointer", selectedPriceRange === idx ? "border-[#0C1523]" : "border-[#d0d0d0] group-hover:border-[#0e0e0e]")}
                >
                  {selectedPriceRange === idx && <div className="h-2 w-2 rounded-full bg-[#0C1523]" />}
                </div>
                <span onClick={() => setSelectedPriceRange(selectedPriceRange === idx ? null : idx)} className="text-sm text-[#555] group-hover:text-[#0e0e0e] transition-colors cursor-pointer select-none">
                  {range.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  const toggleQuick = (value: string) => {
    if (selectedCategories.length === 1 && selectedCategories[0] === value) {
      setSelectedCategories([])
    } else {
      setSelectedCategories([value])
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">

      {/* Quick category chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {QUICK_CATEGORIES.map((cat) => {
          const active = selectedCategories.length === 1 && selectedCategories[0] === cat.value
          return (
            <button
              key={cat.value}
              onClick={() => toggleQuick(cat.value)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-sm border transition-colors duration-150",
                active
                  ? "bg-[#0C1523] border-[#0C1523] text-white"
                  : "bg-white border-[#e5e5e5] text-[#555] hover:border-[#0C1523] hover:text-[#0e0e0e]"
              )}
            >
              {cat.label}
            </button>
          )
        })}
        {selectedCategories.length > 0 && (
          <button
            onClick={() => setSelectedCategories([])}
            className="px-4 py-2 text-sm text-[#8BBDE8] hover:underline"
          >
            Alle anzeigen
          </button>
        )}
      </div>

      <div className="flex gap-8">
        {/* Desktop filter sidebar */}
        <aside className="hidden lg:block">
          <FilterSidebar />
        </aside>

        {/* Product grid */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 text-sm font-medium border border-[#e5e5e5] rounded-sm px-3 py-2 text-[#0e0e0e] hover:bg-[#f5f5f5] transition-colors"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filter
              {activeFilterCount > 0 && (
                <span className="bg-[#0C1523] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">{activeFilterCount}</span>
              )}
            </button>

            <input
              type="search"
              placeholder="Produkte suchen…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="hidden sm:block flex-1 max-w-xs text-sm border border-[#e5e5e5] rounded-sm px-3 py-2 text-[#0e0e0e] placeholder:text-[#bbb] focus:outline-none focus:border-[#0C1523] transition-colors"
            />

            <div className="relative ml-auto">
              <button
                onClick={() => setSortOpen((v) => !v)}
                className="flex items-center gap-2 text-sm border border-[#e5e5e5] rounded-sm px-3 py-2 text-[#0e0e0e] hover:bg-[#f5f5f5] transition-colors"
              >
                <span className="text-[#888]">Sortieren:</span>
                <span className="font-medium">{SORT_OPTIONS.find((s) => s.value === sort)?.label}</span>
                <ChevronDown className={cn("h-4 w-4 text-[#888] transition-transform", sortOpen && "rotate-180")} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-1 z-10 bg-white border border-[#e5e5e5] rounded-sm shadow-lg w-48 overflow-hidden">
                  {SORT_OPTIONS.map((o) => (
                    <button key={o.value} onClick={() => { setSort(o.value); setSortOpen(false) }}
                      className={cn("w-full text-left px-4 py-2.5 text-sm hover:bg-[#f5f5f5] transition-colors text-[#0e0e0e]", sort === o.value && "font-semibold text-[#8BBDE8]")}
                    >
                      {o.label}
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
                  <button key={cat} onClick={() => toggleCategory(cat)}
                    className="flex items-center gap-1.5 text-xs bg-[#0C1523] text-white rounded-full px-3 py-1 hover:bg-[#8BBDE8] hover:text-[#0C1523] transition-colors"
                  >
                    {c?.label}<X className="h-3 w-3" />
                  </button>
                )
              })}
              {selectedPriceRange !== null && (
                <button onClick={() => setSelectedPriceRange(null)}
                  className="flex items-center gap-1.5 text-xs bg-[#0C1523] text-white rounded-full px-3 py-1 hover:bg-[#8BBDE8] hover:text-[#0C1523] transition-colors"
                >
                  {PRICE_RANGES[selectedPriceRange].label}<X className="h-3 w-3" />
                </button>
              )}
            </div>
          )}

          <p className="text-xs text-[#aaa] mb-5">{filtered.length} {filtered.length === 1 ? 'Produkt' : 'Produkte'}</p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10">
              {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-lg font-medium text-[#0e0e0e]">Keine Produkte gefunden</p>
              <p className="text-[#888] text-sm mt-1">Passe deine Filter oder Suche an.</p>
              <button onClick={() => { setSearch(""); setSelectedCategories([]); setSelectedPriceRange(null) }} className="mt-4 text-sm text-[#8BBDE8] hover:underline">
                Filter zurücksetzen
              </button>
            </div>
          )}
        </div>
      </div>

      {/* SEO description */}
      <div className="mt-16 pt-10 border-t border-[#e5e5e5]">
        <p className="text-sm text-[#888] leading-relaxed max-w-3xl">
          Im VoltVibes Onlineshop finden Sie alles rund um moderne Mobilität – von E-Scootern über Stunt-Scooter für Kinder bis hin zu komfortablen Senioren-Mobilen. Entdecken Sie eine große Auswahl an Zubehör und Ersatzteilen für Ihr Fahrzeug sowie zuverlässige Serviceleistungen. VoltVibes bietet Ihnen innovative Produkte, kompetente Beratung und erstklassigen Kundensupport – damit Sie jederzeit sicher und flexibel unterwegs sind. Egal ob für Alltag, Freizeit oder spezielle Mobilitätsbedürfnisse: VoltVibes ist Ihr zuverlässiger Partner.
        </p>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e5e5]">
              <span className="font-semibold text-[#0e0e0e]">Filter</span>
              <button onClick={() => setMobileFiltersOpen(false)}><X className="h-5 w-5 text-[#0e0e0e]" /></button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-6">
              <FilterSidebar mobile />
            </div>
            <div className="px-5 py-4 border-t border-[#e5e5e5] flex gap-3">
              <button onClick={() => { setSelectedCategories([]); setSelectedPriceRange(null) }} className="flex-1 py-2.5 text-sm border border-[#e5e5e5] rounded-sm text-[#0e0e0e] hover:bg-[#f5f5f5] transition-colors">
                Zurücksetzen
              </button>
              <button onClick={() => setMobileFiltersOpen(false)} className="flex-1 py-2.5 text-sm bg-[#0C1523] text-white rounded-sm font-medium hover:bg-[#8BBDE8] hover:text-[#0C1523] transition-colors">
                Anwenden ({filtered.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
