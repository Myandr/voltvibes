"use client"

import React, { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, MessageCircle, Check, Send } from "lucide-react"
import Footer from "../components/Footer"
import { BlurTextEffect } from "../components/BlurTextEffect"
import CustomerStoriesSection from "../components/CustomerStoriesSection"
import { cn } from "@/lib/utils"

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

const italicStyle = {
  fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif',
  color: "#8BBDE8",
  fontStyle: "italic" as const,
  fontWeight: 400,
}

export default function KontaktPage() {
  const heroSub = useFadeIn()
  const formSection = useFadeIn(0.1)
  const infoSection = useFadeIn(0.1)
  const mapSection = useFadeIn(0.1)

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    betreff: "",
    nachricht: "",
  })
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  const inputClass =
    "w-full rounded-xl bg-white border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#8BBDE8]/40 focus:border-transparent transition-all"

  return (
    <main className="flex flex-col flex-1 bg-white">

      {/* ── Hero Title ── */}
      <div className="w-full pt-40 pb-16 px-4 text-center">
        <div className="relative inline-block">
          <h1 style={{ lineHeight: 0.9 }}>
            <span style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(2.4rem, 6vw, 7rem)', letterSpacing: '0.02em', color: '#0C1523' }}>
              <BlurTextEffect scrollTrigger delay={0}>Kontakt </BlurTextEffect>
            </span>
            <em style={{ fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif', fontSize: 'clamp(2.1rem, 5.6vw, 6.6rem)', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.01em' }}>
              <BlurTextEffect scrollTrigger delay={0.15}>aufnehmen</BlurTextEffect>
            </em>
          </h1>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.45) 0%, transparent 32%)' }} />
        </div>
        <div ref={heroSub.ref} style={fadeStyle(heroSub.visible, 0.35)}>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-xs sm:max-w-sm mx-auto leading-relaxed mt-4">
            Frage, Reparaturanfrage oder einfach hallo sagen — wir freuen uns auf deine Nachricht.
          </p>
        </div>
      </div>

      {/* ── Form + Info ── */}
      <div className="px-4">
        <div className="max-w-6xl mx-auto w-full py-8 sm:py-12">
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">

            {/* Form — 3/5 */}
            <div ref={formSection.ref} style={fadeStyle(formSection.visible, 0.1, 24)} className="lg:col-span-3">
              <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight mb-2" style={{ lineHeight: 0.95 }}>
                <BlurTextEffect scrollTrigger delay={0}>Schreib uns </BlurTextEffect>
                <em style={italicStyle} className="text-4xl sm:text-5xl">
                  <BlurTextEffect scrollTrigger delay={0.2}>eine Nachricht</BlurTextEffect>
                </em>
              </h2>
              <p className="text-sm text-zinc-500 leading-relaxed mb-8 mt-3 max-w-sm">
                Wir melden uns so schnell wie möglich bei dir — persönlich und kompetent.
              </p>

              {submitted ? (
                <div className="flex flex-col items-start gap-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8BBDE8]/10">
                      <Check className="h-4 w-4 text-[#8BBDE8]" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">Nachricht gesendet!</p>
                      <p className="text-sm text-zinc-500">
                        Danke, {form.name}! Wir melden uns so schnell wie möglich bei dir.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", betreff: "", nachricht: "" }) }}
                    className="text-sm text-[#8BBDE8] hover:underline underline-offset-2 transition-colors mt-2"
                  >
                    Weitere Nachricht senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        Name <span className="text-[#8BBDE8]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Dein Name"
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        E-Mail <span className="text-[#8BBDE8]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="deine@email.de"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="betreff" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Betreff
                    </label>
                    <input
                      id="betreff"
                      name="betreff"
                      type="text"
                      value={form.betreff}
                      onChange={handleChange}
                      placeholder="Worum geht es?"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="nachricht" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Nachricht <span className="text-[#8BBDE8]">*</span>
                    </label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      rows={6}
                      required
                      value={form.nachricht}
                      onChange={handleChange}
                      placeholder="Deine Nachricht an uns..."
                      className={cn(inputClass, "resize-none")}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-700 disabled:opacity-60 text-white text-sm font-medium px-7 py-3 rounded-full transition-all duration-200 hover:gap-3"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Wird gesendet…
                        </>
                      ) : (
                        <>
                          Nachricht senden
                          <Send className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-zinc-400">
                      Mit dem Absenden stimmst du unserer{" "}
                      <Link href="/datenschutzerklarung" className="text-[#8BBDE8] hover:underline underline-offset-2 transition-colors">
                        Datenschutzerklärung
                      </Link>{" "}
                      zu.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Info — 2/5 */}
            <div ref={infoSection.ref} style={fadeStyle(infoSection.visible, 0.2, 24)} className="lg:col-span-2 flex flex-col gap-6">

              <div className="rounded-2xl border border-zinc-200 p-6 sm:p-7 space-y-6">
                <h2 className="text-lg font-semibold tracking-tight text-zinc-900">Kontaktdaten</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-0.5">Telefon</p>
                      <a href="tel:02362-9747100" className="text-sm font-medium text-zinc-900 hover:text-[#8BBDE8] transition-colors">
                        02362-9747100
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-0.5">E-Mail</p>
                      <a href="mailto:info@voltvibes-dorsten.de" className="text-sm font-medium text-zinc-900 hover:text-[#8BBDE8] transition-colors break-all">
                        info@voltvibes-dorsten.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-0.5">Adresse</p>
                      <p className="text-sm font-medium text-zinc-900">Lippestraße 34</p>
                      <p className="text-sm text-zinc-500">46282 Dorsten</p>
                      <p className="text-xs text-zinc-400 mt-0.5">Fußgängerzone Innenstadt</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle className="h-4 w-4 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-0.5">WhatsApp</p>
                      <a
                        href="https://wa.me/4923629747100"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-zinc-900 hover:text-[#8BBDE8] transition-colors"
                      >
                        WhatsApp verfügbar
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-100 pt-5">
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
                    <div className="w-full">
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Öffnungszeiten</p>
                      <table className="w-full text-sm">
                        <tbody className="divide-y divide-zinc-100">
                          <tr>
                            <td className="py-1.5 text-zinc-500">Mo – Fr</td>
                            <td className="py-1.5 text-right font-medium text-zinc-900">12:00 – 18:00</td>
                          </tr>
                          <tr>
                            <td className="py-1.5 text-zinc-500">Samstag</td>
                            <td className="py-1.5 text-right font-medium text-zinc-900">10:30 – 14:00</td>
                          </tr>
                          <tr>
                            <td className="py-1.5 text-zinc-500">Sonntag</td>
                            <td className="py-1.5 text-right text-zinc-400">Geschlossen</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://maps.google.com/?q=Lippestraße+34,+46282+Dorsten"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium bg-zinc-900 text-white px-5 py-3 rounded-full hover:bg-zinc-700 transition-colors w-fit"
                >
                  <MapPin className="h-4 w-4" />
                  In Google Maps öffnen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Map ── */}
      <div className="px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto w-full">
          <div ref={mapSection.ref} style={fadeStyle(mapSection.visible, 0.1, 24)} className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[380px]">
            <iframe
              src="https://maps.google.com/maps?q=Lippestraße+34,+46282+Dorsten&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(20%) contrast(1.05)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VoltVibes Dorsten"
            />
          </div>
        </div>
      </div>

      <CustomerStoriesSection />
      <Footer />
    </main>
  )
}
