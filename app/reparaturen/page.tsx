'use client'

import { useRef, useEffect, useState } from "react"
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink, Wrench, Building2 } from "lucide-react"
import Footer from "../components/Footer"
import CustomerStoriesSection from "../components/CustomerStoriesSection"
import { BlurTextEffect } from "../components/BlurTextEffect"
import ConsentMap from "../components/ConsentMap"

const italicStyle = {
  fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif',
  color: "#5CC987",
  fontStyle: "italic" as const,
  fontWeight: 400,
}

const contactIcons  = { whatsapp: MessageCircle, phone: Phone, email: Mail } as const
const contactColors = { whatsapp: '#25D366', phone: '#5CC987', email: '#5CC987' } as const

const locations = [
  {
    id: "dorsten",
    badge: "Hauptfiliale",
    Icon: Wrench,
    accent: true,
    name: "VoltVibes Dorsten",
    street: "Essener Straße 24",
    city: "46282 Dorsten",
    hours: [
      { days: "Mo – Fr", time: "12:00 – 18:00" },
      { days: "Samstag", time: "10:30 – 14:00" },
      { days: "Sonntag", time: "Geschlossen", closed: true },
    ],
    contacts: [
      { type: "whatsapp" as const, label: "WhatsApp", href: "https://wa.me/4923629747100" },
      { type: "phone"    as const, label: "Anrufen",  href: "tel:023629747100" },
      { type: "email"    as const, label: "E-Mail",   href: "mailto:info@voltvibes-dorsten.de" },
    ],
    mapsEmbed: "https://maps.google.com/maps?q=Essener+Stra%C3%9Fe+24,+46282+Dorsten&output=embed&hl=de&z=16",
    mapsLink:  "https://maps.google.com/?q=Essener+Straße+24,+46282+Dorsten",
    description: "Unsere Hauptwerkstatt — hier reparieren wir deinen E-Scooter fachgerecht mit Originalteilen und persönlichem Service. Oder du kommst selbst zu uns vorbei.",
  },
  {
    id: "bottrop",
    badge: "Reparaturannahme",
    Icon: Building2,
    accent: false,
    name: "AWK Smart Repair",
    street: "Boschstraße 9",
    city: "46244 Bottrop",
    hours: [
      { days: "Mo – Fr", time: "08:00 – 18:00" },
      { days: "Sa – So", time: "Geschlossen", closed: true },
    ],
    contacts: [
      { type: "whatsapp" as const, label: "WhatsApp", href: "https://wa.me/4923629747100" },
      { type: "phone"    as const, label: "Anrufen",  href: "tel:023629747100" },
    ],
    mapsEmbed: "https://maps.google.com/maps?q=Boschstra%C3%9Fe+9,+46244+Bottrop&output=embed&hl=de&z=16",
    mapsLink:  "https://maps.google.com/?q=Boschstraße+9,+46244+Bottrop",
    description: "Du kannst deinen E-Scooter dort zur Reparatur abgeben. Unser Servicemobil sammelt diesen dann dort ein.",
  },
  {
    id: "recklinghausen",
    badge: "Reparaturannahme",
    Icon: Building2,
    accent: false,
    name: "Automaufaktur57",
    street: "Westring 57",
    city: "45659 Recklinghausen",
    hours: [
      { days: "Mo – Do", time: "08:00 – 18:00" },
      { days: "Fr – So", time: "Geschlossen", closed: true },
    ],
    contacts: [
      { type: "whatsapp" as const, label: "WhatsApp", href: "https://wa.me/4923629747100" },
    ],
    mapsEmbed: "https://maps.google.com/maps?q=Westring+57,+45659+Recklinghausen&output=embed&hl=de&z=16",
    mapsLink:  "https://maps.google.com/?q=Westring+57,+45659+Recklinghausen",
    description: "Du kannst deinen E-Scooter dort zur Reparatur abgeben. Unser Servicemobil sammelt diesen dann dort ein.",
  },
]

function IconButtons({ contacts }: {
  contacts: typeof locations[0]['contacts']
}) {
  return (
    <div className="flex gap-2">
      {contacts.map((c) => {
        const Icon = contactIcons[c.type]
        const isExternal = c.type === 'whatsapp' || c.type === 'email'
        return (
          <a
            key={c.type}
            href={c.href}
            aria-label={c.label}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-zinc-200 hover:border-zinc-300 transition-all hover:scale-110"
            style={{ flexShrink: 0 }}
          >
            <Icon className="h-5 w-5" style={{ color: contactColors[c.type] }} />
          </a>
        )
      })}
    </div>
  )
}

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

export default function ReparaturenPage() {
  const heroSub    = useFadeIn()
  const dorstMap   = useFadeIn(0.1)
  const dorstInfo  = useFadeIn(0.1)
  const botropHead = useFadeIn()
  const botropSub  = useFadeIn()
  const botropCard = useFadeIn(0.1)
  const ovHead     = useFadeIn()
  const ovSub      = useFadeIn()
  const ovCards    = useFadeIn(0.1)

  const dorsten = locations[0]
  const bottrop = locations[1]

  return (
    <main className="flex flex-col flex-1 bg-white">

      {/* ── Hero Title ── */}
      <div className="w-full pt-40 pb-16 px-4 text-center">
        <div className="relative inline-block">
          <h1 style={{ lineHeight: 0.9 }}>
            <span style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(2.4rem, 6vw, 7rem)', letterSpacing: '0.02em', color: '#0C1523' }}>
              <BlurTextEffect scrollTrigger delay={0}>Reparatur &amp; </BlurTextEffect>
            </span>
            <em style={{ fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif', fontSize: 'clamp(2.1rem, 5.6vw, 6.6rem)', color: '#5CC987', fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.01em' }}>
              <BlurTextEffect scrollTrigger delay={0.15}>Ersatzteile</BlurTextEffect>
            </em>
          </h1>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.45) 0%, transparent 32%)' }} />
        </div>
        <div ref={heroSub.ref} style={fadeStyle(heroSub.visible, 0.35)}>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-xs sm:max-w-sm mx-auto leading-relaxed mt-4">
            Hier findest du den Weg zu unserer Werkstatt oder zu unseren regionalen Reparaturannahmestellen.
          </p>
        </div>
      </div>

      {/* ── Dorsten: Map + Info ── */}
      <div className="px-4">
        <div className="max-w-6xl mx-auto w-full py-8 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">

            <div ref={dorstMap.ref} style={fadeStyle(dorstMap.visible, 0.1, 24)} className="relative rounded-2xl overflow-hidden h-[340px] sm:h-[420px] lg:h-full min-h-[340px]">
              <ConsentMap
                src={dorsten.mapsEmbed}
                title="VoltVibes Dorsten Werkstatt"
                address={`${dorsten.street}, ${dorsten.city}`}
              />
            </div>

            <div ref={dorstInfo.ref} style={fadeStyle(dorstInfo.visible, 0.2, 24)} className="flex flex-col gap-6 py-2">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#5CC987]/40 bg-[#5CC987]/5 px-4 py-1.5 text-sm font-medium text-[#5CC987] mb-4">
                  <Wrench className="h-3.5 w-3.5" />
                  Hauptfiliale Dorsten
                </span>
                <h2 style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', letterSpacing: '0.02em', color: '#0C1523', lineHeight: 1 }}>
                  VoltVibes Dorsten
                </h2>
                <p className="text-sm text-zinc-500 leading-relaxed mt-3 max-w-md">{dorsten.description}</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#5CC987] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-zinc-900">{dorsten.street}</p>
                  <p className="text-sm text-zinc-500">{dorsten.city}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-[#5CC987] flex-shrink-0 mt-0.5" />
                <div className="w-full">
                  <p className="font-semibold text-sm text-zinc-900 mb-2">Öffnungszeiten</p>
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-zinc-100">
                      {dorsten.hours.map((h) => (
                        <tr key={h.days}>
                          <td className="py-1.5 text-zinc-500">{h.days}</td>
                          <td className={`py-1.5 text-right font-medium ${h.closed ? 'text-zinc-400' : 'text-zinc-900'}`}>{h.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <IconButtons contacts={dorsten.contacts} />
                <a href={dorsten.mapsLink} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-700 transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  In Google Maps öffnen
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottrop Annahmestelle ── */}
      <div className="px-4 py-8 sm:py-16">
        <div className="max-w-6xl mx-auto w-full">

          <div ref={botropHead.ref} style={fadeStyle(botropHead.visible, 0)}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-tight mb-2" style={{ lineHeight: 0.95 }}>
              <BlurTextEffect scrollTrigger delay={0}>Reparaturannahme </BlurTextEffect>
              <em style={italicStyle} className="text-4xl sm:text-5xl lg:text-6xl">
                <BlurTextEffect scrollTrigger delay={0.2}>Bottrop</BlurTextEffect>
              </em>
            </h2>
          </div>

          <div ref={botropSub.ref} style={fadeStyle(botropSub.visible, 0.15)}>
            <p className="text-sm text-zinc-500 leading-relaxed mb-8 sm:mb-10 max-w-sm mt-3">
              {bottrop.description}
            </p>
          </div>

          <div ref={botropCard.ref} style={fadeStyle(botropCard.visible, 0.1, 24)} className="grid lg:grid-cols-2 gap-4 sm:gap-6">

            <div className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[380px]">
              <ConsentMap
                src={bottrop.mapsEmbed}
                title="AWK Smart Repair Bottrop"
                address={`${bottrop.street}, ${bottrop.city}`}
              />
            </div>

            <div className="flex flex-col justify-center gap-5 py-2">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-medium text-zinc-500">
                  <Building2 className="h-3.5 w-3.5" />
                  Annahmestelle
                </span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', letterSpacing: '0.02em', color: '#0C1523', lineHeight: 1 }}>
                AWK Smart Repair
              </h3>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#5CC987] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-zinc-900 font-medium">{bottrop.street}</p>
                  <p className="text-sm text-zinc-500">{bottrop.city}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-[#5CC987] flex-shrink-0 mt-1" />
                <table className="text-sm flex-1">
                  <tbody className="divide-y divide-zinc-100">
                    {bottrop.hours.map((h) => (
                      <tr key={h.days}>
                        <td className="py-1.5 pr-8 text-zinc-500">{h.days}</td>
                        <td className={`py-1.5 font-medium ${h.closed ? 'text-zinc-400' : 'text-zinc-900'}`}>{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <IconButtons contacts={bottrop.contacts} />

              <div className="bg-[#5CC987]/5 border border-[#5CC987]/20 rounded-xl p-4">
                <p className="text-sm text-zinc-600">
                  Scooter abgeben → Servicemobil holt ab → Reparatur in Dorsten → Abholung oder Lieferung zurück.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Reparaturen & Ersatzteile — Alle Standorte (einfaches 3-Spalten-Grid) ── */}
      <div className="px-4 py-8 sm:py-16">
        <div className="max-w-6xl mx-auto w-full">

          <div ref={ovHead.ref} style={fadeStyle(ovHead.visible, 0)}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-tight mb-2" style={{ lineHeight: 0.95 }}>
              <BlurTextEffect scrollTrigger delay={0}>Reparaturen und </BlurTextEffect>
              <em style={italicStyle} className="text-4xl sm:text-5xl lg:text-6xl">
                <BlurTextEffect scrollTrigger delay={0.2}>Ersatzteile</BlurTextEffect>
              </em>
            </h2>
          </div>

          <div ref={ovSub.ref} style={fadeStyle(ovSub.visible, 0.15)}>
            <p className="text-sm text-zinc-500 leading-relaxed mb-8 sm:mb-10 max-w-sm mt-3">
              Hier findest du den Weg zu unserer Werkstatt oder zu unseren regionalen Reparaturannahmestellen.
            </p>
          </div>

          <div ref={ovCards.ref} style={fadeStyle(ovCards.visible, 0.1, 24)} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((loc) => {
              const Icon = loc.Icon
              return (
                <div
                  key={loc.id}
                  className={`rounded-2xl p-6 flex flex-col gap-5 ${
                    loc.accent ? 'bg-[#0C1523]' : 'bg-zinc-50 border border-zinc-200'
                  }`}
                >
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg w-fit ${
                    loc.accent ? 'bg-white/10 text-white/80' : 'bg-zinc-200 text-zinc-600'
                  }`}>
                    <Icon className="h-3 w-3" />
                    {loc.badge}
                  </span>

                  <div>
                    <h3 style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', letterSpacing: '0.02em', color: loc.accent ? '#fff' : '#0C1523', lineHeight: 1 }}>
                      {loc.name}
                    </h3>
                    <p className={`text-sm mt-1 ${loc.accent ? 'text-white/50' : 'text-zinc-500'}`}>
                      {loc.street}, {loc.city}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    {loc.hours.map((h) => (
                      <div key={h.days} className={`flex justify-between text-xs border-b pb-1 last:border-0 ${loc.accent ? 'border-white/10' : 'border-zinc-200'}`}>
                        <span className={loc.accent ? 'text-white/40' : 'text-zinc-400'}>{h.days}</span>
                        <span className={`font-medium ${h.closed ? (loc.accent ? 'text-white/20' : 'text-zinc-300') : (loc.accent ? 'text-white' : 'text-zinc-800')}`}>{h.time}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col gap-2">
                    <IconButtons contacts={loc.contacts} />
                    <a href={loc.mapsLink} target="_blank" rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${loc.accent ? 'text-white/30 hover:text-white/60' : 'text-zinc-400 hover:text-zinc-700'}`}
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      In Google Maps öffnen
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <CustomerStoriesSection />
      <Footer />
    </main>
  )
}
