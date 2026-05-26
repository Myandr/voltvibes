import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageHero from "../components/PageHero"
import Footer from "../components/Footer"
import { cn } from "@/lib/utils"

type BadgeColor = "red" | "blue" | "green" | "purple"

const tagColors: Record<BadgeColor, string> = {
  red:    "bg-[#8BBDE8]/10 text-[#8BBDE8] border-[#8BBDE8]/20",
  blue:   "bg-blue-600/10 text-blue-600 border-blue-600/20",
  green:  "bg-green-600/10 text-green-600 border-green-600/20",
  purple: "bg-purple-600/10 text-purple-600 border-purple-600/20",
}

const articles = [
  {
    slug: "nachhaltigkeitstag",
    tag: "Event",
    tagColor: "green" as BadgeColor,
    date: "15. November 2025",
    title: "VoltVibes beim Nachhaltigkeitstag der VHS Dorsten",
    excerpt:
      "VoltVibes beteiligt sich am Nachhaltigkeitstag der VHS Dorsten. Spannende Aktionen, Gespräche mit Besuchern, Workshops und Vorträge rund um nachhaltige Mobilität erwarten euch am Im Werth 6.",
    image: "/images/news-1.jpg",
  },
  {
    slug: "stunt-scooter-kinder",
    tag: "Produktneuheit",
    tagColor: "blue" as BadgeColor,
    date: "Oktober 2025",
    title: "Stunt-Scooter für junge Fahrer jetzt im Sortiment",
    excerpt:
      "VoltVibes erweitert sein Sortiment um hochwertige Stunt-Scooter speziell für junge Fahrer: stabile Bauweise, hohe Sicherheit, modernes Design.",
    image: "/images/image-768x768.png",
  },
  {
    slug: "partnerstation-bottrop",
    tag: "News",
    tagColor: "red" as BadgeColor,
    date: "September 2025",
    title: "Neue Partnerstation in Bottrop bei AWK Smart Repair",
    excerpt:
      "Ab sofort Pickup-Point bei AWK Smart Repair in Bottrop. Scooter dort abgeben, wir holen, reparieren und liefern zurück — ganz bequem.",
    image: "/images/news-3.jpg",
  },
  {
    slug: "goettingen-2026",
    tag: "Ankündigung",
    tagColor: "purple" as BadgeColor,
    date: "Dezember 2025",
    title: "VoltVibes Göttingen — Eröffnung Mai 2026",
    excerpt:
      "Wir expandieren! Im Mai 2026 eröffnet unsere neue Filiale in Göttingen mit Schwerpunkt auf Seniorenmobilen und einer eigenen Teststrecke. Seid dabei!",
    image: "/images/gallery-2.jpg",
  },
]

function TagBadge({ tag, color }: { tag: string; color: BadgeColor }) {
  return (
    <span className={cn("inline-flex rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide", tagColors[color])}>
      {tag}
    </span>
  )
}

export default function NewsAndEventsPage() {
  const [featured, ...rest] = articles

  return (
    <main className="flex flex-col flex-1 bg-white">
      <PageHero
        eyebrow="Aktuelles"
        title="News"
        titleAccent="& Events"
        subtitle="Aktuelles aus dem VoltVibes-Universum — Events, Produktneuheiten und Ankündigungen."
      />

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">

        {/* Featured */}
        <div className="group grid gap-4 lg:grid-cols-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-500 overflow-hidden mb-12">

          {/* Left: Info */}
          <div className="p-8 flex flex-col justify-center relative order-2 lg:order-1">
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <TagBadge tag={featured.tag} color={featured.tagColor} />
                <span className="text-xs text-gray-400">{featured.date}</span>
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3 group-hover:text-[#8BBDE8] transition-colors">
                {featured.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{featured.excerpt}</p>
              <Link href={`/news-and-events/${featured.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[#8BBDE8] hover:gap-2 transition-all">
                Weiterlesen <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative isolate border border-gray-200 bg-white p-2 rounded-xl m-4 order-1 lg:order-2">
            <Image
              src={featured.image}
              alt={featured.title}
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-xl aspect-video"
            />
            <div className="absolute inset-2 bg-gradient-to-t from-white/20 via-transparent to-transparent rounded-xl" />
          </div>
        </div>

        {/* Further Articles — Card Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <article
              key={article.slug}
              className="rounded-xl border border-gray-200 bg-white overflow-hidden hover:bg-gray-50 transition-colors duration-300 group"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <TagBadge tag={article.tag} color={article.tagColor} />
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <h3 className="text-base font-semibold tracking-tight text-gray-900 mb-2 group-hover:text-[#8BBDE8] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <Link href={`/news-and-events/${article.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#8BBDE8] hover:gap-2 transition-all">
                  Weiterlesen <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>

      <Footer />
    </main>
  )
}
