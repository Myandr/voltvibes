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
  ArrowUpRight,
  Timer,
} from "lucide-react"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"

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

const services = [
  {
    icon: Zap,
    title: "Reifenpanne",
    description:
      "Ein platter oder beschädigter Reifen? Kein Problem! Bei VoltVibes bringen wir deinen E-Scooter schnell und zuverlässig wieder in Fahrt. Unser erfahrenes Team kümmert sich um alle Reparaturen, damit du bald wieder sicher und komfortabel unterwegs bist.",
    href: "/reparaturen",
  },
  {
    icon: Package,
    title: "Stunt Scooter & Parts",
    description:
      "Bei VoltVibes findest du eine große Auswahl an hochwertigen Stunt Scootern für jedes Level — vom Einsteiger bis zum Profi. Top-Marken wie Core, Type-R, Panda und viele weitere stehen für Qualität, Performance und stylisches Design. Natürlich gibt es auch Helme und Schutzausrüstung — alles aus einer Hand.",
    href: "/shop",
  },
  {
    icon: Settings,
    title: "Ersatzteile & Zubehör",
    description:
      "VoltVibes bietet dir nicht nur hochwertige E-Scooter, sondern auch eine umfangreiche Auswahl an Ersatzteilen und Zubehör. Egal ob neue Reifen, Bremsen, Akkus oder praktisches Zubehör — bei uns findest du alles, was du für deinen E-Scooter brauchst.",
    href: "/shop",
  },
  {
    icon: Wrench,
    title: "Sonstige Reparaturen",
    description:
      "Dein E-Scooter hat ein anderes Problem oder Teile müssen ausgetauscht werden? Wir sind für dich da. Unser erfahrenes Team kümmert sich um alle Reparaturen, damit dein E-Scooter schnell wieder einsatzbereit ist — auf unsere Expertise kannst du dich verlassen.",
    href: "/reparaturen",
  },
  {
    icon: ArrowLeftRight,
    title: "Ankauf & Verkauf",
    description:
      "Neue und gebrauchte Roller zu fairen Preisen — direkt vor Ort in Dorsten. Wir nehmen deinen alten Scooter in Zahlung und beraten dich ehrlich und kompetent beim Kauf des richtigen Modells.",
    href: "/shop",
  },
  {
    icon: Accessibility,
    title: "Seniorenmobile",
    description:
      "Elektrische Mobilitätshilfen für Senioren: sicher, komfortabel und einfach zu bedienen. Wir beraten dich persönlich, bieten Testfahrten an und kümmern uns auch hier um Reparatur und Wartung.",
    href: "/shop",
  },
]

const highlights = [
  {
    icon: Timer,
    label: "Schnelle Abwicklung",
    description: "Viele Reparaturen noch am selben Tag.",
  },
  {
    icon: Tag,
    label: "Faire Preise",
    description: "Transparent, ohne versteckte Kosten.",
  },
  {
    icon: Shield,
    label: "Top Qualität",
    description: "Nur Originalteile und geprüfte Materialien.",
  },
]

const ctaItems = [
  "Reifenpannen-Reparatur",
  "Stunt Scooter & Parts",
  "Ersatzteile & Zubehör",
  "Sonstige Reparaturen",
  "Ankauf & Verkauf",
  "Seniorenmobile",
]

export default function DienstleistungenPage() {
  return (
    <main className="flex flex-col flex-1 bg-white">
      {/* Page hero — image grid */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/images/range-background.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-28 pb-12 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 style={{ lineHeight: 0.9 }}>
            <span style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(2.8rem, 6vw, 7rem)', letterSpacing: '0.02em', color: '#0C1523' }}>
              Unsere{' '}
            </span>
            <em style={{ fontFamily: 'Georgia, "Palatino Linotype", Palatino, serif', fontSize: 'clamp(2.5rem, 5.6vw, 6.6rem)', color: '#8BBDE8', fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.01em' }}>
              Dienstleistungen
            </em>
          </h1>
          <p className="text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed mt-4">
            Von der Reifenreparatur bis zum kompletten Umbau — dein Full-Service-Partner in Dorsten.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {[
            { image: "/images/gallery-1.jpg", label: "E-Scooter", title: "Reifenpanne & Reparatur", href: "/reparaturen" },
            { image: "/images/gallery-2.jpg", label: "Shop", title: "Stunt Scooter & Parts", href: "/shop" },
            { image: "/images/gallery-3.jpg", label: "Zubehör", title: "Ersatzteile & Zubehör", href: "/shop" },
            { image: "/images/gallery-4.jpg", label: "Service", title: "Ankauf & Verkauf", href: "/shop" },
          ].map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-5">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-white/60 mb-1">{card.label}</p>
                <p className="text-sm sm:text-base font-bold text-white leading-tight">{card.title}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="#leistungen"
            className="inline-flex items-center gap-2 bg-white text-zinc-900 text-sm font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            Alle Leistungen
          </Link>
        </div>
      </div>
      </div>

      {/* Slogan strip */}
      <div className="border-b border-zinc-200 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#8BBDE8]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8BBDE8]" />
            Unser Versprechen
          </span>
          <div className="hidden sm:block h-4 w-px bg-zinc-300" />
          <p className="text-[15px] font-medium text-zinc-800 leading-snug">
            Rollen statt stehen —{" "}
            <span className="font-normal text-zinc-500">
              wir bringen deinen E-Scooter oder Stunt Scooter wieder in Fahrt.
            </span>
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-5xl mx-auto w-full px-6 lg:px-8 pt-14">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200">
          <Image
            src="/images/gallery-2.jpg"
            alt="VoltVibes Werkstatt"
            width={1200}
            height={500}
            className="w-full h-[300px] sm:h-[400px] object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>

      {/* Highlights row */}
      <div className="max-w-5xl mx-auto w-full px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200 border border-zinc-200 rounded-2xl overflow-hidden bg-white">
          {highlights.map(({ icon: Icon, label, description }) => (
            <div key={label} className="flex items-start gap-4 px-6 py-5">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#8BBDE8]/10">
                <Icon className="h-4 w-4 text-[#8BBDE8]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900">{label}</p>
                <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services grid */}
      <div id="leistungen" className="max-w-5xl mx-auto w-full px-6 lg:px-8 py-16">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">Was wir bieten</p>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Alle Leistungen im Überblick</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="group relative flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:border-zinc-300 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 group-hover:bg-[#8BBDE8]/10 transition-colors">
                <Icon className="h-5 w-5 text-zinc-500 group-hover:text-[#8BBDE8] transition-colors" />
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold text-zinc-900 mb-2 group-hover:text-[#0C1523] transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="flex items-center gap-1 text-xs font-medium text-zinc-400 group-hover:text-[#8BBDE8] transition-colors mt-auto pt-2">
                Mehr erfahren
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>

              {/* Subtle top accent on hover */}
              <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-[#8BBDE8]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto w-full px-6 lg:px-8 pb-24">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left */}
            <div className="flex-1 px-8 py-10 lg:px-12 lg:py-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">Kontakt</p>
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3">
                Direkt vorbeikommen oder anrufen
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6 max-w-sm">
                Ruf uns an oder komm direkt in unsere Filiale in der Fußgängerzone Dorsten.
                Wir helfen dir schnell und unkompliziert.
              </p>
              <Button
                asChild
                className="gap-2 bg-[#0C1523] text-white hover:bg-[#8BBDE8] hover:text-[#0C1523] transition-colors rounded-xl"
              >
                <a href="tel:02362-9747100">
                  <Phone className="h-4 w-4" />
                  02362 – 9747100
                  <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-zinc-200 my-8" />
            <div className="block md:hidden h-px bg-zinc-200 mx-8" />

            {/* Right */}
            <div className="flex-shrink-0 px-8 py-10 lg:px-12 lg:py-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">Unsere Leistungen</p>
              <ul className="space-y-2.5">
                {ctaItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-zinc-700">
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#8BBDE8]/15">
                      <Check className="h-2.5 w-2.5 text-[#8BBDE8]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="max-w-5xl mx-auto w-full px-6 lg:px-8 pb-24">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight tracking-tight">
              Neuigkeiten &amp; Events.
            </h2>
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight tracking-tight">
              Immer auf dem Laufenden.
            </h2>
          </div>
          <p className="text-sm text-zinc-500 leading-relaxed max-w-xs sm:text-right">
            Aktuelle Meldungen, Produktneuheiten und Events rund um VoltVibes und urbane Mobilität.
          </p>
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.slice(0, 3).map((article) => (
            <Link
              key={article.slug}
              href={`/news-and-events/${article.slug}`}
              className="group flex flex-col gap-3"
            >
              <div className="overflow-hidden rounded-xl aspect-[4/3] relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <p className="text-xs text-zinc-400 mb-1">{article.date}</p>
                <h3 className="text-sm font-semibold text-zinc-900 leading-snug group-hover:text-[#8BBDE8] transition-colors">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* 4th article — wide */}
        <div className="mt-6">
          <Link
            href={`/news-and-events/${newsArticles[3].slug}`}
            className="group flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
          >
            <div className="overflow-hidden rounded-xl aspect-[4/3] sm:aspect-auto sm:h-44 sm:w-64 shrink-0 relative">
              <Image
                src={newsArticles[3].image}
                alt={newsArticles[3].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <p className="text-xs text-zinc-400 mb-1">{newsArticles[3].date}</p>
              <h3 className="text-base font-semibold text-zinc-900 leading-snug group-hover:text-[#8BBDE8] transition-colors">
                {newsArticles[3].title}
              </h3>
            </div>
          </Link>
        </div>

        <div className="mt-8">
          <Link
            href="/news-and-events"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Alle News &amp; Events <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
