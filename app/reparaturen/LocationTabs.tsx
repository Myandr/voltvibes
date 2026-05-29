"use client"

import { useState } from "react"
import { MapPin, Clock, MessageCircle, Phone, Mail, ExternalLink, Wrench, Building2, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const locations = [
  {
    id: "dorsten",
    tab: "Dorsten",
    badge: "Hauptwerkstatt",
    badgeVariant: "brand" as const,
    name: "VoltVibes Dorsten",
    street: "Essener Straße 24",
    city: "46282 Dorsten",
    note: "Parkplätze fußläufig in 2 min erreichbar.",
    description: null,
    hours: [
      { days: "Mo – Fr", time: "12:00 – 18:00" },
      { days: "Samstag", time: "10:30 – 14:00" },
      { days: "Sonntag", time: "Geschlossen", closed: true },
    ],
    contacts: [
      { type: "whatsapp", label: "WhatsApp schreiben", href: "https://wa.me/4923629747100" },
      { type: "phone",    label: "02362 9747100",      href: "tel:023629747100" },
      { type: "email",    label: "E-Mail senden",      href: "mailto:info@voltvibes-dorsten.de" },
    ],
    maps: "https://maps.google.com/?q=Essener+Straße+24,+46282+Dorsten",
  },
  {
    id: "bottrop",
    tab: "Bottrop",
    badge: "Annahmestelle",
    badgeVariant: "neutral" as const,
    name: "AWK Smart Repair",
    street: "Boschstraße 9",
    city: "46244 Bottrop",
    note: null,
    description: "Du kannst deinen E-Scooter hier zur Reparatur abgeben. Unser Servicemobil sammelt ihn ein, bringt ihn zur Werkstatt nach Dorsten und liefert ihn nach der Reparatur bequem zurück.",
    hours: [
      { days: "Mo – Fr", time: "08:00 – 18:00" },
      { days: "Sa – So", time: "Geschlossen", closed: true },
    ],
    contacts: [
      { type: "whatsapp", label: "WhatsApp schreiben", href: "https://wa.me/4923629747100" },
      { type: "phone",    label: "Anrufen",            href: "tel:023629747100" },
    ],
    maps: "https://maps.google.com/?q=Boschstraße+9,+46244+Bottrop",
  },
  {
    id: "recklinghausen",
    tab: "Recklinghausen",
    badge: "Annahmestelle",
    badgeVariant: "neutral" as const,
    name: "Automanufaktur 57",
    street: "Westring 57",
    city: "45659 Recklinghausen",
    note: null,
    description: "Du kannst deinen E-Scooter hier zur Reparatur abgeben. Unser Servicemobil holt ihn ab, bringt ihn nach Dorsten und liefert ihn nach der Reparatur zurück.",
    hours: [
      { days: "Mo – Do", time: "08:00 – 18:00" },
      { days: "Fr – So", time: "Geschlossen", closed: true },
    ],
    contacts: [
      { type: "maps", label: "Mehr Infos & Route", href: "https://maps.google.com/?q=Westring+57,+45659+Recklinghausen" },
    ],
    maps: "https://maps.google.com/?q=Westring+57,+45659+Recklinghausen",
  },
]

export default function LocationTabs() {
  const [active, setActive] = useState("dorsten")
  const loc = locations.find((l) => l.id === active)!

  return (
    <div>
      {/* Tab bar */}
      <div className="flex border-b border-zinc-200">
        {locations.map((l) => (
          <button
            key={l.id}
            onClick={() => setActive(l.id)}
            className={cn(
              "relative px-5 py-3.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none",
              active === l.id
                ? "text-zinc-900"
                : "text-zinc-500 hover:text-zinc-700"
            )}
          >
            {l.tab}
            {active === l.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0C1523]" />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-zinc-100">

        {/* Left: info */}
        <div className="p-8 flex flex-col gap-7">
          <div className="flex items-start gap-3">
            <div>
              <span className={cn(
                "inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md mb-3",
                loc.badgeVariant === "brand"
                  ? "bg-[#0C1523] text-white"
                  : "bg-zinc-100 text-zinc-600"
              )}>
                {loc.badgeVariant === "brand" && <Wrench className="h-3 w-3" />}
                {loc.badgeVariant === "neutral" && <Building2 className="h-3 w-3" />}
                {loc.badge}
              </span>
              <h3 className="text-xl font-semibold text-zinc-900 tracking-tight">{loc.name}</h3>
            </div>
          </div>

          {loc.description && (
            <p className="text-sm text-zinc-500 leading-relaxed border-l-2 border-[#8BBDE8] pl-4">
              {loc.description}
            </p>
          )}

          {/* Address */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 h-8 w-8 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0">
              <MapPin className="h-4 w-4 text-zinc-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-900">{loc.street}</p>
              <p className="text-sm text-zinc-500">{loc.city}</p>
              {loc.note && <p className="text-xs text-zinc-400 mt-1">{loc.note}</p>}
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 h-8 w-8 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0">
              <Clock className="h-4 w-4 text-zinc-500" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">Öffnungszeiten</p>
              <div className="flex flex-col divide-y divide-zinc-100">
                {loc.hours.map((h) => (
                  <div key={h.days} className="flex justify-between items-center py-2">
                    <span className="text-sm text-zinc-600">{h.days}</span>
                    <span className={cn("text-sm font-medium tabular-nums", h.closed ? "text-zinc-400" : "text-zinc-900")}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Maps link */}
          <a
            href={loc.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors group"
          >
            <MapPin className="h-3.5 w-3.5" />
            In Google Maps öffnen
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Right: contact */}
        <div className="p-8 flex flex-col gap-4 bg-zinc-50/50">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">Kontakt</p>

          {loc.contacts.map((c) => {
            if (c.type === "whatsapp") return (
              <a key={c.type} href={c.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3.5 bg-[#25D366] hover:bg-[#22c55e] text-white rounded-xl text-sm font-semibold transition-colors"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                {c.label}
                <ArrowUpRight className="h-3.5 w-3.5 ml-auto opacity-70" />
              </a>
            )
            if (c.type === "phone") return (
              <a key={c.type} href={c.href}
                className="flex items-center gap-3 px-4 py-3.5 bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-800 rounded-xl text-sm font-semibold transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0 text-zinc-400" />
                {c.label}
              </a>
            )
            if (c.type === "email") return (
              <a key={c.type} href={c.href}
                className="flex items-center gap-3 px-4 py-3.5 bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-800 rounded-xl text-sm font-semibold transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0 text-zinc-400" />
                {c.label}
              </a>
            )
            if (c.type === "maps") return (
              <a key={c.type} href={c.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3.5 bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-800 rounded-xl text-sm font-semibold transition-colors"
              >
                <ExternalLink className="h-4 w-4 shrink-0 text-zinc-400" />
                {c.label}
                <ArrowUpRight className="h-3.5 w-3.5 ml-auto text-zinc-400" />
              </a>
            )
          })}

          {loc.id !== "dorsten" && (
            <div className="mt-4 rounded-xl bg-[#8BBDE8]/10 border border-[#8BBDE8]/20 px-4 py-3.5">
              <p className="text-xs font-semibold text-[#0C1523] mb-1">Wie funktioniert's?</p>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Scooter abgeben → unser Servicemobil holt ihn ab → Reparatur in Dorsten → Abholung oder Lieferung zurück.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
