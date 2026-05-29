"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { BlurTextEffect } from "./BlurTextEffect"

const teamMembers = [
  { name: "Markus Kremer", role: "Inhaber", image: "/images/gallery-1.jpg" },
  { name: "Felix Wagner", role: "Werkstattleiter", image: "/images/gallery-2.jpg" },
  { name: "Laura Meier", role: "Kundenberaterin", image: "/images/gallery-3.jpg" },
  { name: "Jonas Schulz", role: "Scooter-Spezialist", image: "/images/gallery-4.jpg" },
]


function useFadeIn(threshold = 0.2) {
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

export default function TeamCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => setActiveIndex((i) => (i - 1 + teamMembers.length) % teamMembers.length)
  const next = () => setActiveIndex((i) => (i + 1) % teamMembers.length)

  const getVisibleMembers = () => {
    const len = teamMembers.length
    return [
      teamMembers[(activeIndex - 1 + len) % len],
      teamMembers[activeIndex],
      teamMembers[(activeIndex + 1) % len],
    ]
  }

  const [left, center, right] = getVisibleMembers()
  const subtitle = useFadeIn()
  const carousel = useFadeIn(0.1)

  return (
    <section className="relative bg-white pt-40 pb-20 px-4">

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="relative inline-block">
            <h2 style={{ lineHeight: 0.9 }}>
              <span style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(2.4rem, 6vw, 7rem)', letterSpacing: '0.02em', color: '#0C1523' }}>
                <BlurTextEffect scrollTrigger delay={0}>Euer </BlurTextEffect>
              </span>
              <em style={{ fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif', fontSize: 'clamp(2.1rem, 5.6vw, 6.6rem)', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.01em' }}>
                <BlurTextEffect scrollTrigger delay={0.15}>VoltVibes</BlurTextEffect>
              </em>
              <span style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(2.4rem, 6vw, 7rem)', letterSpacing: '0.02em', color: '#0C1523' }}>
                <BlurTextEffect scrollTrigger delay={0.3}> Team</BlurTextEffect>
              </span>
            </h2>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.45) 0%, transparent 32%)' }} />
          </div>
          <div
            ref={subtitle.ref}
            style={{
              opacity: subtitle.visible ? 1 : 0,
              transform: subtitle.visible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
            }}
          >
            <p className="mt-3 text-gray-500 text-base">
              Von der ersten Anfrage bis zur Übergabe — wir machen es einfach.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={carousel.ref}
          style={{
            opacity: carousel.visible ? 1 : 0,
            transform: carousel.visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          <div className="relative max-w-6xl mx-auto flex items-end justify-center gap-4">
            {/* Left card — hidden on mobile */}
            <div className="hidden lg:block relative w-[300px] h-[420px] rounded-2xl overflow-hidden flex-shrink-0 opacity-90">
              <Image src={left.image} alt={left.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-white font-bold text-xl leading-tight">{left.name}</p>
                <p className="text-white/80 text-sm mt-0.5">{left.role}</p>
              </div>
            </div>

            {/* Center card (featured) — full width on mobile, fixed width on desktop */}
            <div className="relative w-full lg:w-[400px] h-[420px] sm:h-[500px] lg:h-[560px] rounded-2xl overflow-hidden flex-shrink-0 shadow-2xl z-10">
              <Image src={center.image} alt={center.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-bold text-2xl leading-tight">{center.name}</p>
                <p className="text-white/80 text-sm mt-1">{center.role}</p>
              </div>
            </div>

            {/* Right card — hidden on mobile */}
            <div className="hidden lg:block relative w-[300px] h-[420px] rounded-2xl overflow-hidden flex-shrink-0 opacity-90">
              <Image src={right.image} alt={right.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-white font-bold text-xl leading-tight">{right.name}</p>
                <p className="text-white/80 text-sm mt-0.5">{right.role}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="max-w-6xl mx-auto mt-8 flex items-center justify-between px-4">
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-1.5 bg-gray-900 rounded-full px-3 py-2">
                {teamMembers.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex ? "w-6 bg-white" : "w-2 bg-white/40"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
