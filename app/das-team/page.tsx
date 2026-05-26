import Image from "next/image"
import { Mail, Heart, Wrench, Star, Check } from "lucide-react"
import PageHero from "../components/PageHero"
import Footer from "../components/Footer"

const teamMembers = [
  {
    name: "Felix Wagner",
    title: "Werkstattleiter",
    bio: "Felix leitet unsere Werkstatt mit ruhiger Hand und sorgt dafür, dass jeder Scooter schnell und fachgerecht repariert wird.",
    image: "/images/news-2.jpg",
  },
  {
    name: "Laura Meier",
    title: "Kundenberaterin",
    bio: "Laura ist die erste Anlaufstelle für alle Kundenanfragen und hilft bei der Auswahl des perfekten Scooters.",
    image: "/images/news-3.jpg",
  },
  {
    name: "Jonas Schulz",
    title: "Scooter-Spezialist",
    bio: "Jonas ist unser Experte für Stunt-Scooter und kennt jedes Modell in- und auswendig.",
    image: "/images/news-4.jpg",
  },
]

const heroFeatures = [
  {
    icon: Heart,
    title: "Leidenschaft",
    description: "Wir leben urbane Mobilität — mit Herz und Begeisterung jeden Tag.",
  },
  {
    icon: Wrench,
    title: "Expertise",
    description: "Jahre Erfahrung in Reparatur, Technik und Beratung rund um E-Scooter.",
  },
  {
    icon: Star,
    title: "Service",
    description: "Kundenzufriedenheit steht bei uns an erster Stelle — immer und überall.",
  },
]

const stats = [
  { label: "Jahre Erfahrung", value: "5+" },
  { label: "Reparaturen", value: "1.000+" },
  { label: "Kundenzufriedenheit", value: "98%" },
  { label: "Filialen", value: "2" },
]

const ctaChecklist = [
  "Faire Vergütung",
  "Junges Team",
  "Abwechslungsreiche Arbeit",
  "Zentraler Standort Dorsten",
]

export default function DasTeamPage() {
  return (
    <main className="flex flex-col flex-1 bg-white">
      <PageHero
        eyebrow="Menschen hinter VoltVibes"
        title="Das"
        titleAccent="Team"
        subtitle="Markus und sein dynamisches, junges Team — deine Anlaufstelle für E-Scooter in Dorsten."
      />

      {/* Hero Image + Features */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-16">
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src="/images/gallery-1.jpg"
            alt="VoltVibes Team"
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

      {/* Stats Block */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden bg-white border border-gray-200 rounded-xl p-10 md:p-16">
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#8BBDE8] mb-2">Unsere Zahlen</p>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-10">Was uns ausmacht</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1">
                  <span className="text-4xl font-semibold md:text-5xl text-gray-900">{stat.value}</span>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-16">
        <div className="rounded-xl bg-white border border-gray-200 p-8">
          <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
            Unsere Mission: exzellenter Service und die aktive Förderung urbaner Mobilität in Dorsten und
            Umgebung. Wir glauben daran, dass nachhaltige Fortbewegung Spaß machen muss — und genau dafür
            arbeiten wir jeden Tag.
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
            <svg className="h-4 w-4 text-[#8BBDE8]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <a
              href="https://www.instagram.com/voltvibes_dorsten"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8BBDE8] hover:underline transition-colors"
            >
              @voltvibes_dorsten
            </a>
          </div>
        </div>
      </div>

      {/* Inhaber (Featured Card) */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">Inhaber</h2>
        <div className="group grid lg:grid-cols-2 gap-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-500 overflow-hidden">
          <div className="relative min-h-72 lg:min-h-full">
            <Image
              src="/images/hero-scooter.jpg"
              alt="Markus Kremer"
              fill
              className="object-cover rounded-tl-xl rounded-bl-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent rounded-tl-xl rounded-bl-xl" />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-500 mb-4">
              Inhaber
            </span>
            <h3 className="text-3xl font-semibold tracking-tight text-gray-900">Markus Kremer</h3>
            <p className="mt-4 text-gray-500 leading-relaxed max-w-lg">
              Markus gründete VoltVibes Dorsten mit der Vision, den besten E-Scooter-Service in der Region zu
              bieten. Mit jahrelanger Erfahrung in der Fahrzeugbranche und echter Leidenschaft für urbane
              Mobilität treibt er das Team täglich an — nah am Kunden, nah an der Stadt.
            </p>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">Das Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-xl border border-gray-200 bg-white overflow-hidden group hover:bg-gray-50 transition-colors duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500 mb-3">
                  {member.title}
                </span>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Block */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-24">
        <div className="bg-white border border-gray-200 rounded-xl px-6 py-10 lg:px-20 lg:py-16">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="flex-1">
              <h4 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-3">Werde Teil des Teams</h4>
              <p className="text-gray-500 mb-6">
                Du liebst Scooter, Menschen und urbane Mobilität? Dann freuen wir uns auf deine Nachricht.
              </p>
              <a
                href="mailto:jobs@voltvibes-dorsten.de"
                className="inline-flex items-center gap-2 bg-[#8BBDE8] hover:bg-[#8BBDE8]/80 text-[#0C1523] text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Mail className="h-4 w-4" />
                Jetzt bewerben
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
