"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { BlurTextEffect } from "./BlurTextEffect"
import { ArrowRight, Mail } from "lucide-react"

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

export default function JoinTeamSection() {
  const box = useFadeIn(0.1)

  return (
    <section className="bg-white py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          ref={box.ref}
          style={{
            opacity: box.visible ? 1 : 0,
            transform: box.visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          }}
          className="bg-[#0C1523] rounded-2xl px-8 py-10 sm:px-12 sm:py-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8"
        >
          {/* Left: badge + headline + copy */}
          <div className="flex flex-col gap-4 max-w-lg">
            <span className="inline-flex w-fit items-center rounded-full bg-[#8BBDE8]/15 border border-[#8BBDE8]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8BBDE8]">
              Karriere bei VoltVibes
            </span>

            <h2 style={{ lineHeight: 0.9 }}>
              <span style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '0.02em', color: '#fff' }}>
                <BlurTextEffect scrollTrigger delay={0}>Werde Teil </BlurTextEffect>
              </span>
              <em style={{ fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif', fontSize: 'clamp(2rem, 4.7vw, 3.8rem)', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.01em' }}>
                <BlurTextEffect scrollTrigger delay={0.15}>des Teams</BlurTextEffect>
              </em>
            </h2>

            <p className="text-white/55 text-sm sm:text-base leading-relaxed">
              Du liebst E-Scooter, bist zuverlässig und willst in einem jungen Team arbeiten? Werkstatt, Verkauf oder Beratung — wir freuen uns auf dich.
            </p>
          </div>

          {/* Right: buttons */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[#8BBDE8] text-[#0C1523] text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#8BBDE8]/90 transition-colors"
            >
              Jetzt bewerben
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:info@voltvibes-dorsten.de"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-white/15 transition-colors border border-white/10"
            >
              <Mail className="h-4 w-4" />
              Per E-Mail
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
