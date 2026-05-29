"use client"

import Link from "next/link"
import Image from "next/image"
import Footer from "../../components/Footer"
import { useCart } from "@/lib/cart-context"
import { Minus, Plus, X, ShoppingBag, ChevronRight, ArrowLeft, ShieldCheck, Truck, RotateCcw, Loader2 } from "lucide-react"

export default function WarenkorbPage() {
  const { lines, totalQuantity, totalAmount, checkoutUrl, updateQuantity, removeItem, loading } = useCart()

  const shipping = totalAmount >= 99 ? 0 : 4.99
  const total    = totalAmount + shipping

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
          style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.02em' }}
        >
          Warenkorb
        </h1>
        <p className="text-[#888] text-sm mb-10">{totalQuantity} {totalQuantity === 1 ? "Artikel" : "Artikel"}</p>

        {lines.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <ShoppingBag className="h-16 w-16 text-[#ccc] mb-4" />
            <p className="text-lg font-medium text-[#0e0e0e]">Dein Warenkorb ist leer</p>
            <p className="text-[#888] text-sm mt-1 mb-6">Entdecke unsere Produkte und füge sie hier hinzu.</p>
            <Link href="/shop" className="px-6 py-3 bg-[#0C1523] text-white text-sm font-semibold rounded-sm hover:bg-[#8BBDE8] hover:text-[#0C1523] transition-colors">
              Zum Shop
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Cart items */}
            <div className="lg:col-span-2 flex flex-col">
              <div className="hidden md:grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 pb-3 border-b border-[#e5e5e5] text-xs font-semibold uppercase tracking-wider text-[#888]">
                <span className="col-span-2">Produkt</span>
                <span className="text-center">Preis</span>
                <span className="text-center">Menge</span>
                <span className="text-right">Gesamt</span>
              </div>

              {lines.map((item, idx) => {
                const isRemote = item.image?.startsWith('https://')
                return (
                  <div key={item.id} className={`py-6 ${idx < lines.length - 1 ? 'border-b border-[#e5e5e5]' : ''}`}>
                    <div className="flex gap-4">
                      <Link href={`/shop/${item.productHandle}`} className="shrink-0">
                        <div className="relative h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-sm bg-[#f5f5f5]">
                          {isRemote ? (
                            <Image src={item.image} alt={item.productTitle} fill sizes="112px" className="object-cover hover:scale-105 transition-transform duration-300" />
                          ) : (
                            <img src={item.image} alt={item.productTitle} className="h-full w-full object-cover hover:scale-105 transition-transform duration-300" />
                          )}
                        </div>
                      </Link>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-[11px] uppercase tracking-widest text-[#888]">{item.vendor}</p>
                            <Link href={`/shop/${item.productHandle}`}>
                              <h3 className="font-medium text-sm mt-0.5 text-[#0e0e0e] hover:text-[#8BBDE8] transition-colors">{item.productTitle}</h3>
                            </Link>
                            {item.variantTitle && (
                              <p className="text-xs text-[#888] mt-1">{item.variantTitle}</p>
                            )}
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            disabled={loading}
                            className="text-[#bbb] hover:text-[#8BBDE8] transition-colors shrink-0 disabled:opacity-40"
                            aria-label="Entfernen"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Mobile qty + price */}
                        <div className="flex items-center justify-between mt-4 md:hidden">
                          <div className="flex items-center border border-[#e5e5e5] rounded-sm overflow-hidden">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={loading || item.quantity <= 1} className="px-2.5 py-1.5 hover:bg-[#f5f5f5] transition-colors text-[#0e0e0e] disabled:opacity-40">
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="px-3 py-1.5 text-sm font-medium border-x border-[#e5e5e5] text-[#0e0e0e]">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} disabled={loading} className="px-2.5 py-1.5 hover:bg-[#f5f5f5] transition-colors text-[#0e0e0e] disabled:opacity-40">
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <p className="font-bold text-[#0e0e0e]">{(item.price * item.quantity).toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
                        </div>

                        {/* Desktop qty + price */}
                        <div className="hidden md:grid grid-cols-[auto_auto_auto] gap-8 mt-4 items-center">
                          <p className="text-sm text-[#888]">{item.price.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
                          <div className="flex items-center border border-[#e5e5e5] rounded-sm overflow-hidden">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={loading || item.quantity <= 1} className="px-2.5 py-1.5 hover:bg-[#f5f5f5] transition-colors text-[#0e0e0e] disabled:opacity-40">
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="px-4 py-1.5 text-sm font-medium border-x border-[#e5e5e5] text-[#0e0e0e]">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} disabled={loading} className="px-2.5 py-1.5 hover:bg-[#f5f5f5] transition-colors text-[#0e0e0e] disabled:opacity-40">
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <p className="font-bold text-right text-[#0e0e0e]">{(item.price * item.quantity).toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

              <div className="pt-4">
                <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-[#888] hover:text-[#0e0e0e] transition-colors">
                  <ArrowLeft className="h-4 w-4" />
                  Weiter einkaufen
                </Link>
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="border border-[#e5e5e5] rounded-sm p-6 sticky top-24">
                <h2 className="text-base font-semibold text-[#0e0e0e] mb-5">Bestellübersicht</h2>

                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#888]">Zwischensumme ({totalQuantity} Artikel)</span>
                    <span className="text-[#0e0e0e]">{totalAmount.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888]">Versand</span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-medium">Kostenlos</span>
                    ) : (
                      <span className="text-[#0e0e0e]">{shipping.toFixed(2).replace(".", ",")} €</span>
                    )}
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-[#888]">
                      Noch {(99 - totalAmount).toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} € bis zur kostenlosen Lieferung
                    </p>
                  )}
                </div>

                <div className="border-t border-[#e5e5e5] my-5" />

                <div className="flex justify-between font-bold text-base text-[#0e0e0e] mb-1">
                  <span>Gesamt</span>
                  <span>{total.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</span>
                </div>
                <p className="text-xs text-[#888] mb-6">Inkl. MwSt.</p>

                {/* Checkout button → Shopify hosted checkout */}
                {checkoutUrl ? (
                  <a
                    href={checkoutUrl}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#0C1523] hover:bg-[#8BBDE8] hover:text-[#0C1523] text-white font-semibold text-sm rounded-sm transition-colors"
                  >
                    {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                    Zur Kasse →
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full py-3.5 bg-[#e5e5e5] text-[#888] font-semibold text-sm rounded-sm cursor-not-allowed"
                  >
                    Warenkorb wird geladen…
                  </button>
                )}

                <div className="mt-5 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5 text-xs text-[#888]">
                    <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-green-600" />
                    SSL-verschlüsselte Zahlung via Shopify
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
