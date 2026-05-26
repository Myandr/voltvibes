"use client"

import { useState } from "react"
import Link from "next/link"
import Footer from "../../components/Footer"
import { Minus, Plus, X, ShoppingBag, ChevronRight, ArrowLeft, ShieldCheck, Truck, RotateCcw } from "lucide-react"

const INITIAL_CART = [
  {
    id: "1",
    slug: "voltvibes-pro-x1",
    name: "VoltVibes Pro X1",
    brand: "VoltVibes",
    image: "/images/gallery-1.jpg",
    price: 849,
    color: "Schwarz",
    size: null as string | null,
    quantity: 1,
  },
  {
    id: "7",
    slug: "helm-urban-shield",
    name: "Helm Urban Shield",
    brand: "SafeRide",
    image: "/images/news-2.jpg",
    price: 89,
    color: "Schwarz Matt",
    size: "M (55–58 cm)",
    quantity: 1,
  },
  {
    id: "8",
    slug: "faltschloss-titan-180",
    name: "Faltschloss Titan 180",
    brand: "LockPro",
    image: "/images/news-1.jpg",
    price: 49,
    color: null as string | null,
    size: "Zahlencode",
    quantity: 2,
  },
]

type CartItem = (typeof INITIAL_CART)[number]

export default function WarenkorbPage() {
  const [items, setItems] = useState<CartItem[]>(INITIAL_CART)

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping  = subtotal >= 99 ? 0 : 4.99
  const total     = subtotal + shipping

  return (
    <main className="flex flex-col flex-1 min-h-screen" style={{ background: '#fff' }}>
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <nav className="flex items-center gap-1.5 text-xs text-[#888] mb-8">
          <Link href="/" className="hover:text-[#0e0e0e] transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/shop" className="hover:text-[#0e0e0e] transition-colors">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#0e0e0e]">Warenkorb</span>
        </nav>

        <h1
          className="mb-2 leading-none text-[#0e0e0e]"
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            letterSpacing: '0.02em',
          }}
        >
          Warenkorb
        </h1>
        <p className="text-[#888] text-sm mb-10">
          {items.length} {items.length === 1 ? "Artikel" : "Artikel"}
        </p>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <ShoppingBag className="h-16 w-16 text-[#ccc] mb-4" />
            <p className="text-lg font-medium text-[#0e0e0e]">Dein Warenkorb ist leer</p>
            <p className="text-[#888] text-sm mt-1 mb-6">Entdecke unsere Produkte und füge sie hier hinzu.</p>
            <Link
              href="/shop"
              className="px-6 py-3 bg-[#0C1523] text-white text-sm font-semibold rounded-sm hover:bg-[#8BBDE8] hover:text-[#0C1523] transition-colors"
            >
              Zum Shop
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Cart Items */}
            <div className="lg:col-span-2 flex flex-col gap-0">
              <div className="hidden md:grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 pb-3 border-b border-[#e5e5e5] text-xs font-semibold uppercase tracking-wider text-[#888]">
                <span className="col-span-2">Produkt</span>
                <span className="text-center">Preis</span>
                <span className="text-center">Menge</span>
                <span className="text-right">Gesamt</span>
              </div>

              {items.map((item, idx) => (
                <div key={item.id} className={`py-6 ${idx < items.length - 1 ? "border-b border-[#e5e5e5]" : ""}`}>
                  <div className="flex gap-4">
                    <Link href={`/shop/${item.slug}`} className="shrink-0">
                      <div className="h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-sm bg-[#f5f5f5]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[11px] uppercase tracking-widest text-[#888]">{item.brand}</p>
                          <Link href={`/shop/${item.slug}`}>
                            <h3 className="font-medium text-sm mt-0.5 text-[#0e0e0e] hover:text-[#8BBDE8] transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                          <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-1.5">
                            {item.color && <p className="text-xs text-[#888]">Farbe: {item.color}</p>}
                            {item.size && (
                              <p className="text-xs text-[#888]">
                                {item.color ? "Größe" : "Variante"}: {item.size}
                              </p>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#bbb] hover:text-[#8BBDE8] transition-colors shrink-0"
                          aria-label="Entfernen"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Mobile */}
                      <div className="flex items-center justify-between mt-4 md:hidden">
                        <div className="flex items-center gap-0 border border-[#e5e5e5] rounded-sm overflow-hidden">
                          <button onClick={() => updateQty(item.id, -1)} className="px-2.5 py-1.5 hover:bg-[#f5f5f5] transition-colors text-[#0e0e0e]">
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="px-3 py-1.5 text-sm font-medium border-x border-[#e5e5e5] text-[#0e0e0e]">{item.quantity}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="px-2.5 py-1.5 hover:bg-[#f5f5f5] transition-colors text-[#0e0e0e]">
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <p className="font-bold text-[#0e0e0e]">{(item.price * item.quantity).toLocaleString("de-DE")} €</p>
                      </div>

                      {/* Desktop */}
                      <div className="hidden md:grid grid-cols-[auto_auto_auto] gap-8 mt-4 items-center">
                        <p className="text-sm text-[#888]">{item.price.toLocaleString("de-DE")} €</p>
                        <div className="flex items-center gap-0 border border-[#e5e5e5] rounded-sm overflow-hidden">
                          <button onClick={() => updateQty(item.id, -1)} className="px-2.5 py-1.5 hover:bg-[#f5f5f5] transition-colors text-[#0e0e0e]">
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="px-4 py-1.5 text-sm font-medium border-x border-[#e5e5e5] text-[#0e0e0e]">{item.quantity}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="px-2.5 py-1.5 hover:bg-[#f5f5f5] transition-colors text-[#0e0e0e]">
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <p className="font-bold text-right text-[#0e0e0e]">{(item.price * item.quantity).toLocaleString("de-DE")} €</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-[#888] hover:text-[#0e0e0e] transition-colors">
                  <ArrowLeft className="h-4 w-4" />
                  Weiter einkaufen
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="border border-[#e5e5e5] rounded-sm p-6 sticky top-24">
                <h2 className="text-base font-semibold text-[#0e0e0e] mb-5">Bestellübersicht</h2>

                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#888]">
                      Zwischensumme ({items.reduce((s, i) => s + i.quantity, 0)} Artikel)
                    </span>
                    <span className="text-[#0e0e0e]">{subtotal.toLocaleString("de-DE")} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888]">Versand</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600 font-medium">Kostenlos</span>
                      ) : (
                        <span className="text-[#0e0e0e]">{shipping.toFixed(2).replace(".", ",")} €</span>
                      )}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-[#888]">
                      Noch {(99 - subtotal).toLocaleString("de-DE")} € bis zur kostenlosen Lieferung
                    </p>
                  )}
                </div>

                <div className="border-t border-[#e5e5e5] my-5" />

                <div className="flex justify-between font-bold text-base text-[#0e0e0e] mb-1">
                  <span>Gesamt</span>
                  <span>{total.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(".", ",")} €</span>
                </div>
                <p className="text-xs text-[#888] mb-6">Inkl. MwSt.</p>

                <div className="flex gap-2 mb-6">
                  <input
                    type="text"
                    placeholder="Gutscheincode"
                    className="flex-1 px-3 py-2 text-sm border border-[#e5e5e5] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8BBDE8] focus:border-[#8BBDE8] placeholder:text-[#aaa] text-[#0e0e0e] bg-white"
                  />
                  <button className="px-4 py-2 text-sm border border-[#e5e5e5] rounded-sm text-[#0e0e0e] hover:bg-[#f5f5f5] transition-colors font-medium">
                    Einlösen
                  </button>
                </div>

                <button className="w-full py-3.5 bg-[#0C1523] hover:bg-[#8BBDE8] hover:text-[#0C1523] text-white font-semibold text-sm rounded-sm transition-colors">
                  Zur Kasse →
                </button>

                <div className="mt-5 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5 text-xs text-[#888]">
                    <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-green-600" />
                    SSL-verschlüsselte Zahlung
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#888]">
                    <Truck className="h-3.5 w-3.5 shrink-0 text-[#aaa]" />
                    Lieferung in 2–4 Werktagen
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#888]">
                    <RotateCcw className="h-3.5 w-3.5 shrink-0 text-[#aaa]" />
                    30 Tage kostenfreie Rückgabe
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
