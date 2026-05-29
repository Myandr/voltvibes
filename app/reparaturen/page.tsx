import Link from "next/link"
import { Phone, Mail, MessageCircle, Check, ArrowRight, MapPin } from "lucide-react"
import PageHero from "../components/PageHero"
import Footer from "../components/Footer"
import LocationTabs from "./LocationTabs"

const steps = [
  {
    number: "01",
    title: "Abgeben",
    description: "Bringe deinen Scooter direkt zu uns oder zu einer Annahmestelle in Bottrop oder Recklinghausen.",
  },
  {
    number: "02",
    title: "Reparatur",
    description: "Unser Team repariert deinen Scooter fachgerecht in der Werkstatt. Du bekommst ein Update, wenn er fertig ist.",
  },
  {
    number: "03",
    title: "Abholen",
    description: "Hol deinen Scooter ab oder wir liefern ihn direkt zu dir — bequem und flexibel.",
  },
]

const checklist = [
  "Schnelle Diagnose",
  "Originalersatzteile",
  "Faire Preise",
  "Abholung & Lieferung",
  "WhatsApp-Service",
]

export default function ReparaturenPage() {
  return (
    <main className="flex flex-col flex-1 bg-white">
      <PageHero
        eyebrow="Rundum-Service"
        title="Reparaturen &"
        titleAccent="Ersatzteile"
        subtitle="Professionelle E-Scooter-Reparatur in Dorsten — schnell, zuverlässig, fair. Mit Abholung & Lieferservice."
      />

      {/* ── Ablauf ── */}
      <section className="border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#8BBDE8] mb-2">Ablauf</p>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">So funktioniert es</h2>
            </div>
            <p className="text-sm text-zinc-500 max-w-xs sm:text-right">In drei Schritten zu deinem reparierten Scooter.</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-5 left-[calc(16.666%+1.5rem)] right-[calc(16.666%+1.5rem)] h-px bg-zinc-200" />

            <div className="grid md:grid-cols-3 gap-10">
              {steps.map((step, i) => (
                <div key={step.number} className="flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-zinc-200 bg-white text-sm font-semibold text-zinc-900 shadow-sm">
                      {i + 1}
                    </div>
                    <div className="md:hidden flex-1 h-px bg-zinc-100" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">{step.number}</p>
                    <h3 className="text-base font-semibold text-zinc-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Standorte ── */}
      <section className="border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#8BBDE8] mb-2">Wo du uns findest</p>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Hauptwerkstatt & Annahmestellen</h2>
              <p className="text-sm text-zinc-500 mt-1.5">Hier findest du den Weg zu unserer Werkstatt oder zu unseren regionalen Reparaturannahmestellen.</p>
            </div>
            <Link
              href="/filialen"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors shrink-0"
            >
              Alle Filialen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Location overview pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { label: "VoltVibes Dorsten", sub: "Essener Straße 24" },
              { label: "AWK Smart Repair", sub: "Bottrop" },
              { label: "Automanufaktur 57", sub: "Recklinghausen" },
            ].map((loc) => (
              <div key={loc.label} className="flex items-center gap-2 border border-zinc-200 rounded-lg px-3 py-2 bg-zinc-50 text-sm">
                <MapPin className="h-3.5 w-3.5 text-[#8BBDE8] shrink-0" />
                <span className="font-medium text-zinc-800">{loc.label}</span>
                <span className="text-zinc-400">·</span>
                <span className="text-zinc-500">{loc.sub}</span>
              </div>
            ))}
          </div>

          {/* Tabbed location cards */}
          <div className="rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
            <LocationTabs />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
          <div className="rounded-2xl bg-[#0C1523] overflow-hidden">
            <div className="px-8 py-12 lg:px-16 lg:py-14 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#8BBDE8] mb-3">Kontakt</p>
                <h3 className="text-2xl font-semibold text-white tracking-tight mb-3">Reparatur anfragen</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                  Ruf uns an, schreib uns eine WhatsApp oder komm direkt vorbei. Wir kümmern uns schnell um deinen Scooter.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/4923629747100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#22c55e] text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors w-fit"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Klick für WhatsApp
                  </a>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="tel:023629747100"
                      className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      Klick für Anrufen
                    </a>
                    <a
                      href="mailto:info@voltvibes-dorsten.de"
                      className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      E-Mail senden
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-l border-white/10 pl-10 hidden md:block">
                <ul className="space-y-4">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                      <div className="h-5 w-5 rounded-full bg-[#8BBDE8]/20 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-[#8BBDE8]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
