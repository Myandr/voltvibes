"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { BlurTextEffect } from "./BlurTextEffect"

const italicStyle = {
  fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif',
  color: "#8BBDE8",
  fontStyle: "italic",
  fontWeight: 400,
} as const

const stories = [
  {
    quote: "Die Beratung war top und das Team hat sich wirklich Zeit genommen, mir alles beim Abholen zu erklären.",
    customerName: "Lukas Weber",
    customerDetail: "Kaufte einen Ninebot Max G2",
    customerAvatar: "/images/gallery-1.jpg",
    backgroundImage: "/images/customer4.png",
  },
  {
    quote: "Reparatur innerhalb von einem Tag erledigt — schneller und günstiger als ich erwartet hatte.",
    customerName: "Sarah Müller",
    customerDetail: "Kundin in der Werkstatt",
    customerAvatar: "/images/gallery-2.jpg",
    backgroundImage: "/images/customer.png",
  },
  {
    quote: "Bestes Scooter-Geschäft in Dorsten. Immer freundlich, immer ehrlich. Kauf nur noch hier.",
    customerName: "Tobias Becker",
    customerDetail: "Kaufte einen Xiaomi Pro 4",
    customerAvatar: "/images/gallery-3.jpg",
    backgroundImage: "/images/customer3.png",
  },
  {
    quote: "Das Zubehör-Sortiment ist riesig. Helm, Schloss, Tasche — alles auf einmal bekommen.",
    customerName: "Anna Koch",
    customerDetail: "Stammkundin",
    customerAvatar: "/images/gallery-4.jpg",
    backgroundImage: "/images/customer2.png",
  },
]

function useFadeIn(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

export default function CustomerStoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => setActiveIndex((i) => (i - 1 + stories.length) % stories.length)
  const next = () => setActiveIndex((i) => (i + 1) % stories.length)

  const story = stories[activeIndex]

  const subtitle = useFadeIn()
  const card = useFadeIn(0.1)

  return (
    <section className="bg-white py-20 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
          <BlurTextEffect scrollTrigger delay={0}>Kunden</BlurTextEffect>
          <span style={italicStyle} className="text-5xl md:text-6xl lg:text-7xl">
            <BlurTextEffect scrollTrigger delay={0.2}>stimmen</BlurTextEffect>
          </span>
        </h2>
        <div
          ref={subtitle.ref}
          style={{
            opacity: subtitle.visible ? 1 : 0,
            transform: subtitle.visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
          }}
        >
          <p className="mt-3 text-gray-400 text-base">
            Vertraut von Fahrern, die Qualität, Ehrlichkeit und Service schätzen.
          </p>
        </div>
      </div>

      {/* Card */}
      <div
        ref={card.ref}
        style={{
          opacity: card.visible ? 1 : 0,
          transform: card.visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
        }}
        className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden h-[480px]"
      >
        <Image
          src={story.backgroundImage}
          alt=""
          fill
          className="object-cover transition-opacity duration-500"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />

        <div className="absolute top-1/2 -translate-y-1/2 left-6 right-6 sm:left-10 sm:right-auto sm:max-w-sm md:max-w-md">
          <p className="text-white font-bold text-lg sm:text-xl md:text-2xl leading-snug">
            &ldquo;{story.quote}&rdquo;
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-6 pb-6">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white/30 flex-shrink-0">
              <Image src={story.customerAvatar} alt={story.customerName} fill className="object-cover" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-tight">{story.customerName}</p>
              <p className="text-white/60 text-xs mt-0.5">{story.customerDetail}</p>
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2">
            {stories.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-white" : "w-2 bg-white/50"
                }`}
                aria-label={`Zur Story ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={prev}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
              aria-label="Vorherige Story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
              aria-label="Nächste Story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
