import Image from "next/image"
import Link from "next/link"
import {
  Wrench,
  Zap,
  Package,
  Settings,
  ArrowLeftRight,
  Accessibility,
  Phone,
  ChevronRight,
  Shield,
  Check,
  Tag,
} from "lucide-react"
import PageHero from "../components/PageHero"
import Footer from "../components/Footer"

const services = [
  {
    icon: Zap,
    title: "Reifenpannen-Reparatur",
    description:
      "Ein platter Reifen oder ein beschädigter Reifen? Kein Problem! Wir bieten schnelle und zuverlässige Reifenreparatur an E-Scootern aller Marken — oft noch am selben Tag.",
    href: "/reparaturen",
  },
  {
    icon: Package,
    title: "Stunt Scooter & Zubehör",
    description:
      "Große Auswahl von Anfänger bis Profi. Führende Marken: Core, Type-R, Panda. Inklusive Helme und Schutzausrüstung — alles aus einer Hand in unserer Filiale.",
    href: "/shop",
  },
  {
    icon: Settings,
    title: "Ersatzteile & Zubehör",
    description:
      "Breites Sortiment an Ersatzteilen: Reifen, Bremsen, Akkus, Kabel und vieles mehr. Wir helfen dir, das richtige Teil zu finden und einzubauen.",
    href: "/shop",
  },
  {
    icon: Wrench,
    title: "Allgemeine Reparaturen",
    description:
      "E-Scooter-Reparaturen aller Art: Elektronik, Mechanik, Teilaustausch. Unsere erfahrenen Techniker sorgen dafür, dass dein Scooter schnell wieder rollt.",
    href: "/reparaturen",
  },
  {
    icon: ArrowLeftRight,
    title: "Ankauf & Verkauf",
    description:
      "Neue und gebrauchte Roller zu fairen Preisen — direkt vor Ort. Wir nehmen deinen alten Scooter in Zahlung und beraten dich ehrlich beim Kauf.",
    href: "/shop",
  },
  {
    icon: Accessibility,
    title: "Seniorenmobile",
    description:
      "Elektrische Mobilitätshilfen für Senioren: sicher, komfortabel und einfach zu bedienen. Wir beraten persönlich und bieten Testfahrten an.",
    href: "/shop",
  },
]

const heroFeatures = [
  {
    icon: Zap,
    title: "Schnelle Abwicklung",
    description: "Kurze Wartezeiten — viele Reparaturen erledigen wir noch am selben Tag.",
  },
  {
    icon: Tag,
    title: "Faire Preise",
    description: "Transparente Preisgestaltung ohne versteckte Kosten. Immer ehrlich.",
  },
  {
    icon: Shield,
    title: "Top Qualität",
    description: "Nur Originalteile und geprüfte Materialien — für dauerhaft gute Ergebnisse.",
  },
]

const ctaChecklist = [
  "Reifenpannen-Reparatur",
  "Stunt Scooter & Zubehör",
  "Ersatzteile & Zubehör",
  "Allgemeine Reparaturen",
  "Ankauf & Verkauf",
  "Seniorenmobile",
]

export default function DienstleistungenPage() {
  return (
    <main className="flex flex-col flex-1 bg-white">
      <PageHero
        eyebrow="Was wir bieten"
        title="Unsere"
        titleAccent="Dienstleistungen"
        subtitle="Von der Reifenreparatur bis zum kompletten Umbau — wir sind dein Full-Service-Partner rund um E-Scooter und urbane Mobilität in Dorsten."
      />

      {/* Hero Image + Features */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-16">
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src="/images/gallery-2.jpg"
            alt="VoltVibes Dienstleistungen"
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

      {/* Services Grid */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-px sm:grid-cols-2 md:grid-cols-3 border border-gray-200 rounded-xl overflow-hidden bg-gray-200">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white hover:bg-gray-50 transition-colors duration-300 p-7 flex flex-col gap-4 group"
                style={{ textDecoration: 'none' }}
              >
                <Icon className="h-5 w-5 text-[#8BBDE8]" />
                <div>
                  <h2 className="text-base font-semibold tracking-tight text-gray-900 mb-1.5 group-hover:text-[#8BBDE8] transition-colors">{service.title}</h2>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-[#8BBDE8] opacity-0 group-hover:opacity-100 transition-opacity">
                  Mehr erfahren <ChevronRight className="h-3 w-3" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* CTA Block */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-24">
        <div className="bg-white border border-gray-200 rounded-xl px-6 py-10 lg:px-20 lg:py-16">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="flex-1">
              <h4 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-3">Termin vereinbaren</h4>
              <p className="text-gray-500 mb-6">
                Ruf uns an oder komm direkt in unsere Filiale in der Fußgängerzone Dorsten.
                Wir helfen dir schnell und unkompliziert.
              </p>
              <a
                href="tel:02362-9747100"
                className="inline-flex items-center gap-2 bg-[#8BBDE8] hover:bg-[#8BBDE8]/80 text-[#0C1523] text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="h-4 w-4" />
                02362-9747100
                <ChevronRight className="h-4 w-4" />
              </a>
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
