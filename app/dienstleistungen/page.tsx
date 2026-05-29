'use client'

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "../components/Footer"
import { BlurTextEffect } from "../components/BlurTextEffect"
import CustomerStoriesSection from "../components/CustomerStoriesSection"

const newsArticles = [
  {
    slug: "nachhaltigkeitstag",
    date: "15. Nov 2025",
    title: "VoltVibes beim Nachhaltigkeitstag der VHS Dorsten",
    image: "/images/gallery-1.jpg",
  },
  {
    slug: "stunt-scooter-kinder",
    date: "Okt 2025",
    title: "Stunt-Scooter für junge Fahrer jetzt im Sortiment",
    image: "/images/gallery-2.jpg",
  },
  {
    slug: "partnerstation-bottrop",
    date: "Sep 2025",
    title: "Neue Partnerstation in Bottrop bei AWK Smart Repair",
    image: "/images/gallery-3.jpg",
  },
  {
    slug: "goettingen-2026",
    date: "Dez 2025",
    title: "VoltVibes Göttingen — Eröffnung Mai 2026",
    image: "/images/gallery-4.jpg",
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

export default function DienstleistungenPage() {
  const heroSubtitle = useFadeIn()
  const heroCards = useFadeIn(0.1)
  const heroButton = useFadeIn(0.1)
  const newsHeader = useFadeIn()
  const newsSubtitle = useFadeIn()
  const newsFeatured = useFadeIn(0.1)
  const newsSidebar = useFadeIn(0.1)
  const newsButton = useFadeIn(0.1)

  return (
    <main className="flex flex-col flex-1 bg-white">
      {/* Page hero — image grid */}
      <div className="relative w-full min-h-[480px] sm:min-h-[580px] lg:min-h-[660px] px-4">

        <div className="relative w-full pt-40 pb-16 sm:pb-20 max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-10">
            <div className="relative inline-block">
              <h1 style={{ lineHeight: 0.9 }}>
                <span style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(2.4rem, 6vw, 7rem)', letterSpacing: '0.02em', color: '#0C1523' }}>
                  <BlurTextEffect scrollTrigger delay={0}>Unsere </BlurTextEffect>
                </span>
                <em style={{ fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif', fontSize: 'clamp(2.1rem, 5.6vw, 6.6rem)', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.01em' }}>
                  <BlurTextEffect scrollTrigger delay={0.15}>Dienstleistungen</BlurTextEffect>
                </em>
              </h1>
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.45) 0%, transparent 32%)' }} />
            </div>
            <div ref={heroSubtitle.ref} style={fadeStyle(heroSubtitle.visible, 0.35)}>
              <p className="text-xs sm:text-sm text-zinc-600 max-w-xs sm:max-w-sm mx-auto leading-relaxed mt-3 sm:mt-4">
                Von der Reifenreparatur bis zum kompletten Umbau — dein Full-Service-Partner in Dorsten.
              </p>
            </div>
          </div>

          <div ref={heroCards.ref} style={fadeStyle(heroCards.visible, 0.1, 24)}>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
              {[
                { image: "/images/gallery-1.jpg", label: "E-Scooter", title: "Reifenpanne", desc: "Ein platter Reifen? Kein Problem! Wir bringen deinen E-Scooter schnell wieder in Fahrt. Vertraue auf unsere Expertise!", href: "/reparaturen" },
                { image: "/images/gallery-2.jpg", label: "Shop", title: "Stunt Scooter & Parts", desc: "Top-Marken wie Core, Type-R und Panda – für jedes Level. Dazu Helme und Schutzausrüstung. VoltVibes ist der Place to be!", href: "/shop" },
                { image: "/images/gallery-3.jpg", label: "Zubehör", title: "Ersatzteile & Zubehör", desc: "Reifen, Bremsen, Akkus und mehr – alles für deinen E-Scooter. Entdecke unser vielfältiges Sortiment!", href: "/shop" },
                { image: "/images/gallery-4.jpg", label: "Reparatur", title: "Sonstige Reparaturen", desc: "Anderes Problem? Unser Team sorgt dafür, dass dein Scooter schnell wieder einsatzbereit ist.", href: "/reparaturen" },
              ].map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square sm:aspect-[4/3]"
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/60 mb-1.5 sm:mb-2">{card.label}</p>
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mb-2 sm:mb-3">{card.title}</p>
                    <p className="hidden sm:block text-sm sm:text-base text-white/80 leading-relaxed">{card.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div ref={heroButton.ref} style={fadeStyle(heroButton.visible, 0.25)} className="flex justify-center mt-6 sm:mt-8">
            <Link
              href="#leistungen"
              className="inline-flex items-center gap-2 bg-white text-zinc-900 text-xs sm:text-sm font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              Alle Leistungen
            </Link>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="px-4">
      <div className="max-w-6xl mx-auto w-full py-16 sm:py-24">
        <div ref={newsHeader.ref} style={fadeStyle(newsHeader.visible, 0)}>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-900 tracking-tight mb-2" style={{ lineHeight: 0.95 }}>
            <BlurTextEffect scrollTrigger delay={0}>{"Neuigkeiten fur jeden"}</BlurTextEffect>{" "}
            <em style={{ fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400 }}>
              <BlurTextEffect scrollTrigger delay={0.2}>Rider</BlurTextEffect>
            </em>
          </h2>
        </div>

        <div ref={newsSubtitle.ref} style={fadeStyle(newsSubtitle.visible, 0.15)}>
          <p className="text-base sm:text-lg text-zinc-500 leading-relaxed mb-8 sm:mb-12 max-w-sm">
            Aktuelle Meldungen, Produktneuheiten und Events rund um VoltVibes und urbane Mobilität.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 sm:gap-6">
          <div ref={newsFeatured.ref} style={fadeStyle(newsFeatured.visible, 0.1, 24)} className="lg:flex-1 lg:flex">
            <Link
              href="/news-and-events"
              className="group relative overflow-hidden rounded-2xl block w-full aspect-[4/3] lg:aspect-auto lg:h-full"
            >
              <Image
                src={newsArticles[0].image}
                alt={newsArticles[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                <p className="text-sm sm:text-base text-white/60 mb-2">{newsArticles[0].date}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug max-w-xs">
                  {newsArticles[0].title}
                </h3>
              </div>
            </Link>
          </div>

          <div ref={newsSidebar.ref} style={fadeStyle(newsSidebar.visible, 0.2, 24)} className="flex flex-col gap-4 lg:w-72 xl:w-80">
            {newsArticles.slice(1).map((article) => (
              <Link
                key={article.slug}
                href="/news-and-events"
                className="group flex items-center gap-4"
              >
                <div className="relative overflow-hidden rounded-xl shrink-0 w-28 h-24 sm:w-44 sm:h-36 lg:w-52 lg:h-40">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-zinc-400 mb-1">{article.date}</p>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 leading-snug group-hover:text-[#8BBDE8] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div ref={newsButton.ref} style={fadeStyle(newsButton.visible, 0.15)} className="flex justify-center mt-10 sm:mt-12">
          <Link
            href="/news-and-events"
            className="inline-flex items-center gap-2 bg-zinc-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-zinc-700 transition-colors"
          >
            Alle News &amp; Events
          </Link>
        </div>
      </div>
      </div>

      <CustomerStoriesSection />

      <Footer />
    </main>
  )
}
