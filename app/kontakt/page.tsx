"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, MessageCircle, Check, Users, Send } from "lucide-react"
import PageHero from "../components/PageHero"
import Footer from "../components/Footer"
import { cn } from "@/lib/utils"

const heroFeatures = [
  {
    icon: Users,
    title: "Persönliche Beratung",
    description: "Wir nehmen uns Zeit für dein Anliegen — persönlich und kompetent.",
  },
  {
    icon: MessageCircle,
    title: "Schnelle Antwort",
    description: "Per Telefon, E-Mail oder WhatsApp — wir antworten so schnell wie möglich.",
  },
  {
    icon: MapPin,
    title: "Vor Ort Service",
    description: "Besuch uns direkt in der Fußgängerzone Dorsten — wir freuen uns auf dich.",
  },
]

export default function KontaktPage() {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  const inputClass =
    "w-full rounded-lg bg-white border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8BBDE8]/60 focus:border-transparent transition-all"

  return (
    <main className="flex flex-col flex-1 bg-white">
      <PageHero
        eyebrow="Wir freuen uns von dir zu hören"
        title="Kontakt"
        titleAccent="aufnehmen"
        subtitle="Frage, Reparaturanfrage oder einfach hallo sagen — wir freuen uns auf deine Nachricht."
      />

      {/* Hero Image + Features */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-16">
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src="/images/gallery-3.jpg"
            alt="VoltVibes Kontakt"
            width={1200}
            height={675}
            className="aspect-video max-h-[500px] w-full rounded-xl object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent rounded-xl" />
        </div>

        <div className="flex flex-col md:flex-row mt-8">
          {heroFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-3 flex-1 px-6 py-4 md:text-center relative"
              >
                {index > 0 && (
                  <div className="hidden md:block absolute left-0 top-4 bottom-4 w-[2px] bg-gradient-to-b from-gray-200 via-transparent to-gray-200" />
                )}
                <Icon className="h-5 w-5 text-[#8BBDE8] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-base text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Form + Info */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Form — 3/5 */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-4">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Nachricht gesendet!</p>
                    <p className="text-sm text-gray-500">
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
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
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
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
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
                  <label htmlFor="betreff" className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
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
                  <label htmlFor="nachricht" className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
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
                    className="inline-flex items-center justify-center gap-2 bg-[#8BBDE8] hover:bg-[#8BBDE8]/80 disabled:opacity-60 text-white text-sm font-semibold px-7 py-2.5 rounded-full transition-all duration-200 hover:gap-3"
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
                  <p className="text-xs text-gray-400">
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

          {/* Info Card — 2/5 */}
          <div className="lg:col-span-2">
            <div className="rounded-xl bg-white border border-gray-200 p-7 sticky top-28 space-y-6">
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-gray-900 mb-4">Kontaktdaten</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Telefon</p>
                      <a href="tel:02362-9747100" className="text-sm font-medium text-gray-900 hover:text-[#8BBDE8] transition-colors">
                        02362-9747100
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">E-Mail</p>
                      <a href="mailto:info@voltvibes-dorsten.de" className="text-sm font-medium text-gray-900 hover:text-[#8BBDE8] transition-colors break-all">
                        info@voltvibes-dorsten.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Adresse</p>
                      <p className="text-sm font-medium text-gray-900">Lippestraße 34</p>
                      <p className="text-sm text-gray-500">46282 Dorsten</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle className="h-4 w-4 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">WhatsApp</p>
                      <a
                        href="https://wa.me/4923629747100"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-gray-900 hover:text-[#8BBDE8] transition-colors"
                      >
                        WhatsApp verfügbar
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-5">
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
                  <div className="w-full">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Öffnungszeiten</p>
                    <table className="w-full text-sm">
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-1.5 text-gray-500">Mo – Fr</td>
                          <td className="py-1.5 text-right font-medium text-gray-900">12:00 – 18:00</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 text-gray-500">Samstag</td>
                          <td className="py-1.5 text-right font-medium text-gray-900">10:30 – 14:00</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 text-gray-500">Sonntag</td>
                          <td className="py-1.5 text-right text-gray-400">Geschlossen</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  )
}
