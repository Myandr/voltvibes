'use client'

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"
import Footer from "../components/Footer"
import CustomerStoriesSection from "../components/CustomerStoriesSection"
import { BlurTextEffect } from "../components/BlurTextEffect"
import ConsentMap from "../components/ConsentMap"

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

export default function FilialenPage() {
  const heroSub = useFadeIn()
  const dorstMap = useFadeIn(0.1)
  const dorstInfo = useFadeIn(0.1)
  const newsHead = useFadeIn()
  const newsSub = useFadeIn()
  const newsCard = useFadeIn(0.1)
  const galleryHead = useFadeIn()
  const gallery = useFadeIn(0.1)

  return (
    <main className="flex flex-col flex-1 bg-white">

      {/* ── Hero Title ── */}
      <div className="w-full pt-40 pb-16 px-4 text-center">
        <div className="relative inline-block">
          <h1 style={{ lineHeight: 0.9 }}>
            <span style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(2.4rem, 6vw, 7rem)', letterSpacing: '0.02em', color: '#0C1523' }}>
              <BlurTextEffect scrollTrigger delay={0}>Unsere </BlurTextEffect>
            </span>
            <em style={{ fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif', fontSize: 'clamp(2.1rem, 5.6vw, 6.6rem)', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.01em' }}>
              <BlurTextEffect scrollTrigger delay={0.15}>Filialen</BlurTextEffect>
            </em>
          </h1>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.45) 0%, transparent 32%)' }} />
        </div>
        <div ref={heroSub.ref} style={fadeStyle(heroSub.visible, 0.35)}>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-xs sm:max-w-sm mx-auto leading-relaxed mt-4">
            Aktuell in Dorsten — bald auch in Göttingen. Komm vorbei und schau dich um.
          </p>
        </div>
      </div>

      {/* ── Dorsten: Map + Info ── */}
      <div className="px-4">
        <div className="max-w-6xl mx-auto w-full py-8 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">

            {/* Map */}
            <div ref={dorstMap.ref} style={fadeStyle(dorstMap.visible, 0.1, 24)} className="relative rounded-2xl overflow-hidden h-[340px] sm:h-[420px] lg:h-full min-h-[340px]">
              <ConsentMap
                src="https://maps.google.com/maps?q=Essener+Str.+24,+46282+Dorsten&output=embed&z=16"
                title="VoltVibes Dorsten"
                address="Essener Str. 24, 46282 Dorsten"
              />
            </div>

            {/* Info */}
            <div ref={dorstInfo.ref} style={fadeStyle(dorstInfo.visible, 0.2, 24)} className="flex flex-col gap-6 py-2">
              <div>
                <span className="inline-flex items-center rounded-full border border-[#8BBDE8]/40 bg-[#8BBDE8]/5 px-4 py-1.5 text-sm font-medium text-[#8BBDE8] mb-4">
                  Hauptfiliale
                </span>
                <h2 style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', letterSpacing: '0.02em', color: '#0C1523', lineHeight: 1 }}>
                  VoltVibes Dorsten
                </h2>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-zinc-900">Adresse</p>
                  <p className="text-sm text-zinc-500">Essener Str. 24</p>
                  <p className="text-sm text-zinc-500">46282 Dorsten</p>
                  <p className="text-xs text-zinc-400 mt-0.5">Fußgängerzone Innenstadt</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#8BBDE8] flex-shrink-0" />
                  <a href="tel:023629747100" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">02362 9747100</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#8BBDE8] flex-shrink-0" />
                  <a href="mailto:info@voltvibes-dorsten.de" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">info@voltvibes-dorsten.de</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
                <div className="w-full">
                  <p className="font-semibold text-sm text-zinc-900 mb-2">Öffnungszeiten</p>
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
                        <td className="py-1.5 text-right font-medium text-zinc-400">Geschlossen</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Essener+Str.+24,+46282+Dorsten"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white bg-zinc-900 px-5 py-3 rounded-full hover:bg-zinc-700 transition-colors w-fit"
              >
                <MapPin className="h-4 w-4" />
                In Google Maps öffnen
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Göttingen News Announcement ── */}
      <div className="px-4 py-8 sm:py-16">
        <div className="max-w-6xl mx-auto w-full">

          <div ref={newsHead.ref} style={fadeStyle(newsHead.visible, 0)}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-tight mb-2" style={{ lineHeight: 0.95 }}>
              <BlurTextEffect scrollTrigger delay={0}>Neue Filiale </BlurTextEffect>
              <em style={italicStyle} className="text-4xl sm:text-5xl lg:text-6xl">
                <BlurTextEffect scrollTrigger delay={0.2}>Göttingen</BlurTextEffect>
              </em>
            </h2>
          </div>

          <div ref={newsSub.ref} style={fadeStyle(newsSub.visible, 0.15)}>
            <p className="text-sm text-zinc-500 leading-relaxed mb-8 sm:mb-10 max-w-sm mt-3">
              VoltVibes expandiert — ab Mai 2026 auch in Göttingen für euch da.
            </p>
          </div>

          <div ref={newsCard.ref} style={fadeStyle(newsCard.visible, 0.1, 24)} className="grid lg:grid-cols-2 gap-4 sm:gap-6">

            {/* Map Göttingen */}
            <div className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[380px]">
              <ConsentMap
                src="https://maps.google.com/maps?q=Groner+Straße+8,+37073+Göttingen&output=embed&z=16"
                title="VoltVibes Göttingen"
                address="Groner Straße 8, 37073 Göttingen"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center gap-5 py-2">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-medium text-zinc-500">
                  Neue Filiale
                </span>
                <span className="inline-flex items-center rounded-full bg-[#8BBDE8] px-4 py-1.5 text-sm font-medium text-[#0C1523]">
                  Eröffnung Mai 2026
                </span>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', letterSpacing: '0.02em', color: '#0C1523', lineHeight: 1 }}>
                  VoltVibes Göttingen
                </h3>
                <p className="text-sm text-zinc-500 mt-3 leading-relaxed max-w-md">
                  Unser zweiter Standort entsteht in der Groner Straße 8, mitten in Göttingen. Schwerpunkt Seniorenmobile, eigene Teststrecke, E-Scooter Beratung und Reparaturservice — alles unter einem Dach.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-zinc-900 font-medium">Groner Straße 8</p>
                  <p className="text-sm text-zinc-500">37073 Göttingen</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#8BBDE8] flex-shrink-0" />
                  <span className="text-sm text-zinc-500">+49 551 27077600</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#8BBDE8] flex-shrink-0" />
                  <span className="text-sm text-zinc-500">info@voltvibes-goettingen.de</span>
                </div>
              </div>

              <div className="bg-[#8BBDE8]/5 border border-[#8BBDE8]/20 rounded-xl p-4">
                <p className="text-sm text-zinc-600">
                  Öffnungszeiten werden zur Eröffnung im <strong className="text-zinc-900">Mai 2026</strong> bekanntgegeben.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Gallery ── */}
      <div className="px-4 py-8 sm:py-16">
        <div className="max-w-6xl mx-auto w-full">

          <div ref={galleryHead.ref} style={fadeStyle(galleryHead.visible, 0)}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-tight mb-2" style={{ lineHeight: 0.95 }}>
              <BlurTextEffect scrollTrigger delay={0}>Eindrücke aus </BlurTextEffect>
              <em style={italicStyle} className="text-4xl sm:text-5xl lg:text-6xl">
                <BlurTextEffect scrollTrigger delay={0.2}>Dorsten</BlurTextEffect>
              </em>
            </h2>
            <p className="text-sm text-zinc-500 mt-3 mb-8 sm:mb-10">Ein Blick in unseren Store und die Werkstatt.</p>
          </div>

          <div ref={gallery.ref} style={fadeStyle(gallery.visible, 0.1, 24)} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { src: "/images/gallery-1.jpg", label: "Showroom" },
              { src: "/images/gallery-2.jpg", label: "Werkstatt" },
              { src: "/images/gallery-3.jpg", label: "Shop" },
              { src: "/images/gallery-4.jpg", label: "Team" },
            ].map((img) => (
              <div key={img.src} className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-4 text-xs font-semibold text-white/80 uppercase tracking-widest">
                  {img.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CustomerStoriesSection />
      <Footer />
    </main>
  )
}
