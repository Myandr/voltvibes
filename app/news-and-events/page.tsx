'use client'

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Footer from "../components/Footer"
import { BlurTextEffect } from "../components/BlurTextEffect"
import CustomerStoriesSection from "../components/CustomerStoriesSection"

type BadgeColor = "red" | "blue" | "green" | "purple"

const tagColors: Record<BadgeColor, string> = {
  red:    "border border-[#8BBDE8]/30 bg-[#8BBDE8]/8 text-[#8BBDE8]",
  blue:   "border border-blue-500/30 bg-blue-500/8 text-blue-600",
  green:  "border border-green-500/30 bg-green-500/8 text-green-600",
  purple: "border border-purple-500/30 bg-purple-500/8 text-purple-600",
}

const articles = [
  {
    slug: "nachhaltigkeitstag",
    tag: "Event",
    tagColor: "green" as BadgeColor,
    date: "15. November 2025",
    title: "VoltVibes beim Nachhaltigkeitstag der VHS Dorsten",
    excerpt:
      "VoltVibes beteiligt sich am Nachhaltigkeitstag der VHS Dorsten. Spannende Aktionen, Gespräche mit Besuchern, Workshops und Vorträge rund um nachhaltige Mobilität erwarten euch am Im Werth 6.",
    image: "/images/gallery-1.jpg",
  },
  {
    slug: "stunt-scooter-kinder",
    tag: "Produktneuheit",
    tagColor: "blue" as BadgeColor,
    date: "Oktober 2025",
    title: "Stunt-Scooter für junge Fahrer jetzt im Sortiment",
    excerpt:
      "VoltVibes erweitert sein Sortiment um hochwertige Stunt-Scooter speziell für junge Fahrer: stabile Bauweise, hohe Sicherheit, modernes Design.",
    image: "/images/scooter-palmen.png",
  },
  {
    slug: "partnerstation-bottrop",
    tag: "News",
    tagColor: "red" as BadgeColor,
    date: "September 2025",
    title: "Neue Partnerstation in Bottrop bei AWK Smart Repair",
    excerpt:
      "Ab sofort Pickup-Point bei AWK Smart Repair in Bottrop. Scooter dort abgeben, wir holen, reparieren und liefern zurück — ganz bequem.",
    image: "/images/gallery-4.jpg",
  },
  {
    slug: "goettingen-2026",
    tag: "Ankündigung",
    tagColor: "purple" as BadgeColor,
    date: "Dezember 2025",
    title: "VoltVibes Göttingen — Eröffnung Mai 2026",
    excerpt:
      "Wir expandieren! Im Mai 2026 eröffnet unsere neue Filiale in Göttingen mit Schwerpunkt auf Seniorenmobilen und einer eigenen Teststrecke. Seid dabei!",
    image: "/images/gallery-3.jpg",
  },
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

function TagBadge({ tag, color }: { tag: string; color: BadgeColor }) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium tracking-wide ${tagColors[color]}`}>
      {tag}
    </span>
  )
}

export default function NewsAndEventsPage() {
  const heroSub = useFadeIn()
  const featured = useFadeIn(0.1)
  const grid = useFadeIn(0.1)

  const [featuredArticle, ...rest] = articles

  return (
    <main className="flex flex-col flex-1 bg-white">

      {/* ── Hero Title ── */}
      <div className="w-full pt-40 pb-16 px-4 text-center">
        <div className="relative inline-block">
          <h1 style={{ lineHeight: 0.9 }}>
            <span style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(2.4rem, 6vw, 7rem)', letterSpacing: '0.02em', color: '#0C1523' }}>
              <BlurTextEffect scrollTrigger delay={0}>News </BlurTextEffect>
            </span>
            <em style={{ fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif', fontSize: 'clamp(2.1rem, 5.6vw, 6.6rem)', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.01em' }}>
              <BlurTextEffect scrollTrigger delay={0.15}>& Events</BlurTextEffect>
            </em>
          </h1>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.45) 0%, transparent 32%)' }} />
        </div>
        <div ref={heroSub.ref} style={fadeStyle(heroSub.visible, 0.35)}>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-xs sm:max-w-sm mx-auto leading-relaxed mt-4">
            Aktuelles aus dem VoltVibes-Universum — Events, Produktneuheiten und Ankündigungen.
          </p>
        </div>
      </div>

      {/* ── Featured Article ── */}
      <div className="px-4">
        <div className="max-w-6xl mx-auto w-full pb-6 sm:pb-8">
          <div ref={featured.ref} style={fadeStyle(featured.visible, 0.1, 24)}>
            <div className="relative overflow-hidden rounded-2xl h-[340px] sm:h-[460px] lg:h-[520px] group">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Gradient: dark bottom + faint left vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

              {/* Bottom: title + excerpt + date */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10 flex flex-col gap-2 sm:gap-3">
                <p className="text-xs text-white/50 uppercase tracking-widest font-medium">{featuredArticle.date}</p>
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-xl"
                  style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
                >
                  {featuredArticle.title}
                </h2>
                <p className="text-base text-white/70 leading-relaxed max-w-lg hidden sm:block line-clamp-2">
                  {featuredArticle.excerpt}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Article Grid ── */}
      <div className="px-4 pb-12 sm:pb-20">
        <div className="max-w-6xl mx-auto w-full">
          <div ref={grid.ref} style={fadeStyle(grid.visible, 0.1, 24)}>

            {/* Asymmetric grid: 1 tall left + 2 stacked right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {rest.map((article, i) => (
                <article
                  key={article.slug}
                  className={`group relative overflow-hidden rounded-2xl ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                  style={{ aspectRatio: i === 0 && typeof window !== 'undefined' ? undefined : undefined }}
                >
                  <div className="relative w-full h-[280px] sm:h-[320px] overflow-hidden rounded-2xl">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Text overlay bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1.5">
                      <p className="text-[10px] text-white/50 uppercase tracking-widest font-medium">{article.date}</p>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-sm text-white/65 leading-relaxed line-clamp-2 mt-0.5">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CustomerStoriesSection />
      <Footer />
    </main>
  )
}
