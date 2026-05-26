import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, MessageCircle, Check, ExternalLink, ArrowRight } from "lucide-react"
import PageHero from "../components/PageHero"
import Footer from "../components/Footer"

const steps = [
  {
    number: "01",
    title: "Scooter abgeben",
    description:
      "Bringe deinen Scooter direkt zu uns in Dorsten oder zu einer unserer Partnerstationen in Bottrop oder Recklinghausen.",
    image: "/images/gallery-1.jpg",
  },
  {
    number: "02",
    title: "Wir reparieren",
    description:
      "Unser Servicewagen holt deinen Scooter ab, wir reparieren ihn fachgerecht in unserer Werkstatt. Du bekommst ein Update, wenn er fertig ist.",
    image: "/images/gallery-2.jpg",
  },
  {
    number: "03",
    title: "Abholung",
    description:
      "Du holst deinen reparierten Scooter bei uns ab — oder wir liefern ihn direkt zu dir nach Hause. Bequem und flexibel.",
    image: "/images/gallery-3.jpg",
  },
]

const partners = [
  {
    name: "AWK Smart Repair Bottrop",
    address: "Boschstraße 9, 46244 Bottrop",
    hours: "Mo – Fr 08:00 – 18:00",
    mapsUrl: "https://maps.google.com/?q=Boschstraße+9,+46244+Bottrop",
  },
  {
    name: "Automanufaktur57 Recklinghausen",
    address: "Westring 57, 45659 Recklinghausen",
    hours: "Mo – Do 08:00 – 18:00",
    mapsUrl: "https://maps.google.com/?q=Westring+57,+45659+Recklinghausen",
  },
]

const ctaChecklist = [
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
        title="Scooter"
        titleAccent="Reparatur"
        subtitle="Professionelle E-Scooter-Reparatur in Dorsten — schnell, zuverlässig, fair. Mit Abholung & Lieferservice."
      />

      {/* "So funktioniert es" Section */}
      <section className="py-24 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#8BBDE8] mb-2">Ablauf</p>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">So funktioniert es</h2>
            <p className="mt-2 text-gray-500">In drei Schritten zu deinem reparierten Scooter.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:bg-gray-50 transition-colors duration-500 group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-5xl font-semibold text-white/20 leading-none select-none">
                    {step.number}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-2xl font-semibold text-[#8BBDE8] mb-2">{step.number}</p>
                  <h3 className="text-base font-semibold tracking-tight text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standorte */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#8BBDE8] mb-1">Wo wir sind</p>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Standorte</h2>
              <p className="mt-2 text-gray-500">Hauptwerkstatt und Partnerstationen in der Region.</p>
            </div>
            <Link
              href="/filialen"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8BBDE8] hover:text-[#8BBDE8]/80 transition-colors"
            >
              Alle Filialen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col gap-4">

            {/* Main Workshop */}
            <div className="group grid gap-3 md:grid-cols-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-500 overflow-hidden">

              <div className="p-6 flex flex-col gap-4">
                <div>
                  <span className="inline-flex items-center rounded-full border border-[#8BBDE8]/40 bg-[#8BBDE8]/5 px-3 py-1 text-xs font-medium text-[#8BBDE8] mb-3">
                    Hauptwerkstatt
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-gray-900">VoltVibes Dorsten</h3>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-500">Lippestraße 34, 46282 Dorsten</p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
                  <div className="w-full">
                    <table className="w-full text-sm">
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-1 text-gray-500">Mo – Fr</td>
                          <td className="py-1 text-right font-medium text-gray-900">12:00 – 18:00</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-gray-500">Samstag</td>
                          <td className="py-1 text-right font-medium text-gray-900">10:30 – 14:00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-1">
                  <a
                    href="https://maps.google.com/?q=Lippestraße+34,+46282+Dorsten"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex-1"
                  >
                    <MapPin className="h-4 w-4" />
                    Google Maps
                    <ExternalLink className="h-3 w-3 text-gray-400" />
                  </a>
                  <Link
                    href="/filialen"
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[#8BBDE8] hover:bg-[#8BBDE8]/80 text-[#0C1523] px-4 py-2 rounded-lg transition-colors flex-1"
                  >
                    Zur Filiale
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="relative border border-gray-200 bg-white p-2 rounded-xl m-3">
                <Image
                  src="/images/gallery-1.jpg"
                  alt="VoltVibes Dorsten Werkstatt"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-xl aspect-video"
                />
                <div className="absolute inset-2 bg-gradient-to-t from-white/40 via-transparent to-transparent rounded-xl" />
              </div>
            </div>

            {/* Partner Stations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="group grid gap-3 sm:grid-cols-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-500 overflow-hidden"
                >
                  <div className="p-6 flex flex-col gap-4">
                    <div>
                      <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500 mb-3">
                        Partnerstation
                      </span>
                      <h3 className="text-base font-semibold tracking-tight text-gray-900">{partner.name}</h3>
                    </div>

                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-500">{partner.address}</p>
                    </div>

                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-500">{partner.hours}</p>
                    </div>

                    <a
                      href={partner.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors mt-auto"
                    >
                      <MapPin className="h-4 w-4" />
                      Google Maps
                      <ExternalLink className="h-3 w-3 text-gray-400" />
                    </a>
                  </div>

                  <div className="relative border border-gray-200 bg-white p-2 rounded-xl m-3">
                    <Image
                      src="/images/gallery-2.jpg"
                      alt={partner.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover rounded-xl aspect-video"
                    />
                    <div className="absolute inset-2 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA Block */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-24">
        <div className="bg-white border border-gray-200 rounded-xl px-6 py-10 lg:px-20 lg:py-16">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="flex-1">
              <h4 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-3">Reparatur anfragen</h4>
              <p className="text-gray-500 mb-6">
                Ruf uns an, schreib uns eine WhatsApp-Nachricht oder komm direkt in unsere Werkstatt.
                Wir kümmern uns schnell um deinen Scooter.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:02362-9747100"
                  className="inline-flex items-center gap-2 bg-[#8BBDE8] hover:bg-[#8BBDE8]/80 text-[#0C1523] text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  02362-9747100
                </a>
                <a
                  href="https://wa.me/4923629747100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-700 text-sm font-semibold px-6 py-3 rounded-lg transition-colors hover:bg-gray-50"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href="mailto:info@voltvibes-dorsten.de"
                  className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-700 text-sm font-semibold px-6 py-3 rounded-lg transition-colors hover:bg-gray-50"
                >
                  <Mail className="h-4 w-4" />
                  E-Mail
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <ul className="space-y-3">
                {ctaChecklist.map((item) => (
                  <li key={item} className="flex items-center text-sm text-gray-700">
                    <Check className="mr-4 size-4 flex-shrink-0 text-[#8BBDE8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
