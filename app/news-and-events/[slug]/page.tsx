import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

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
    excerpt: "VoltVibes beteiligt sich am Nachhaltigkeitstag der VHS Dorsten. Spannende Aktionen, Gespräche mit Besuchern, Workshops und Vorträge rund um nachhaltige Mobilität erwarten euch am Im Werth 6.",
    image: "/images/news-1.jpg",
    body: `VoltVibes war beim diesjährigen Nachhaltigkeitstag der Volkshochschule Dorsten dabei und hat dort sein komplettes Sortiment an E-Scootern und Elektromobilen präsentiert.

Besucherinnen und Besucher hatten die Möglichkeit, verschiedene Modelle Probe zu fahren und sich von unserem Team persönlich beraten zu lassen. Besonders beliebt waren die Elektromobile für Senioren, die auf einer eigens eingerichteten Teststrecke ausprobiert werden konnten.

Inhaber Markus Kremer hielt außerdem einen kurzen Vortrag über die Vorteile urbaner Elektromobilität und erläuterte, warum E-Scooter eine sinnvolle Alternative zum Auto für Kurzstrecken in der Innenstadt sind.

Die Resonanz war überwältigend — wir freuen uns schon auf das nächste Event!`,
  },
  {
    slug: "stunt-scooter-kinder",
    tag: "Produktneuheit",
    tagColor: "blue" as BadgeColor,
    date: "Oktober 2025",
    title: "Stunt-Scooter für junge Fahrer jetzt im Sortiment",
    excerpt: "VoltVibes erweitert sein Sortiment um hochwertige Stunt-Scooter speziell für junge Fahrer: stabile Bauweise, hohe Sicherheit, modernes Design.",
    image: "/images/image-768x768.png",
    body: `Ab sofort führen wir in unserer Filiale in der Lippestraße 34 eine erweiterte Auswahl an Stunt-Scootern speziell für junge Fahrer — vom Einsteiger bis zum Fortgeschrittenen.

Unser neues Sortiment umfasst Modelle von Core, Type-R und Panda in verschiedenen Größen und Gewichtsklassen. Alle Scooter erfüllen die aktuellen Sicherheitsstandards und sind für den Einsatz auf Skateparks und in der Stadt ausgelegt.

Dazu bieten wir passendes Zubehör: Helme, Knie- und Ellbogenschützer sowie Handschuhe — alles aufeinander abgestimmt, damit junge Fahrer von Anfang an sicher unterwegs sind.

Unser Team berät euch gerne persönlich. Kommt einfach vorbei!`,
  },
  {
    slug: "partnerstation-bottrop",
    tag: "News",
    tagColor: "red" as BadgeColor,
    date: "September 2025",
    title: "Neue Partnerstation in Bottrop bei AWK Smart Repair",
    excerpt: "Ab sofort Pickup-Point bei AWK Smart Repair in Bottrop. Scooter dort abgeben, wir holen, reparieren und liefern zurück — ganz bequem.",
    image: "/images/news-3.jpg",
    body: `Wir freuen uns, unsere neue Partnerstation in Bottrop bekanntgeben zu können: AWK Smart Repair, Boschstraße 9, 46244 Bottrop.

Ab sofort könnt ihr euren Scooter dort abgeben, wenn ihr in Bottrop wohnt und nicht extra nach Dorsten fahren wollt. Wir holen den Scooter ab, reparieren ihn in unserer Hauptwerkstatt und liefern ihn direkt zu euch nach Hause oder zurück zur Station.

Die Partnerstation ist Montag bis Freitag von 08:00 bis 18:00 Uhr geöffnet. Für weitere Informationen könnt ihr uns jederzeit per Telefon, WhatsApp oder E-Mail kontaktieren.

Weitere Stationen in Recklinghausen und der Region sind in Planung!`,
  },
  {
    slug: "goettingen-2026",
    tag: "Ankündigung",
    tagColor: "purple" as BadgeColor,
    date: "Dezember 2025",
    title: "VoltVibes Göttingen — Eröffnung Mai 2026",
    excerpt: "Wir expandieren! Im Mai 2026 eröffnet unsere neue Filiale in Göttingen mit Schwerpunkt auf Seniorenmobilen und einer eigenen Teststrecke. Seid dabei!",
    image: "/images/gallery-2.jpg",
    body: `VoltVibes wächst! Im Mai 2026 eröffnen wir unsere zweite Filiale in Göttingen, Groner Straße 8, 37073 Göttingen.

Der Schwerpunkt der neuen Filiale liegt auf Elektromobilen für Senioren — inklusive einer eigenen Teststrecke, auf der Interessierte die Fahrzeuge in Ruhe ausprobieren können. Natürlich wird auch das komplette Sortiment an E-Scootern und Stunt Scootern verfügbar sein.

Das Team in Göttingen wird von erfahrenen Mitarbeitern geleitet und bietet denselben hohen Service-Standard wie unsere Hauptfiliale in Dorsten.

Mehr Informationen zur Eröffnung folgen in Kürze. Wir freuen uns auf euch!`,
  },
  {
    slug: "e-scooter-kaufen-dorsten",
    tag: "Ratgeber",
    tagColor: "blue" as BadgeColor,
    date: "August 2025",
    title: "E-Scooter kaufen in Dorsten — worauf du achten solltest",
    excerpt: "Du möchtest einen E-Scooter kaufen? Wir erklären, worauf du beim Kauf achten solltest — von der Zulassung bis zur Reichweite.",
    image: "/images/1779488754826-image_generation-google.png",
    body: `Ein E-Scooter ist eine tolle Möglichkeit, sich in der Stadt schnell und umweltfreundlich fortzubewegen. Aber beim Kauf gibt es einiges zu beachten.

**Zulassung und Versicherung**
In Deutschland benötigen E-Scooter eine Betriebserlaubnis und müssen versichert sein. Achte beim Kauf darauf, dass das Modell eine gültige EU-Typgenehmigung besitzt. Ohne Versicherungskennzeichen ist die Nutzung auf öffentlichen Straßen verboten.

**Reichweite und Akku**
Die angegebene Reichweite ist oft ein Idealwert. Im Alltag solltest du eher 60–70 % der Herstellerangabe erwarten. Für den täglichen Pendelweg von unter 20 km reicht meist ein Einsteigermodell.

**Reifentyp**
Luftreifen (Pneumatik) bieten mehr Komfort, sind aber pannenanfälliger. Vollgummireifen sind wartungsärmer, aber weniger komfortabel. Für die Innenstadt sind beide geeignet.

**Service und Garantie**
Kaufe am besten bei einem lokalen Händler wie VoltVibes Dorsten — so hast du direkte Ansprechpartner für Reparaturen, Ersatzteile und Garantiefragen.

Komm gerne bei uns vorbei für eine persönliche Beratung!`,
  },
]

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const tagColor = tagColors[article.tagColor]
  const others = articles.filter((a) => a.slug !== slug).slice(0, 2)

  return (
    <main className="flex flex-col flex-1 bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <div className="relative w-full h-[50vh] min-h-[320px] bg-[#0C1523] mt-0">
        <Image src={article.image} alt={article.title} fill className="object-cover opacity-50" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1523] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-6 lg:px-8 pb-10">
          <span className={`inline-flex rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide mb-4 ${tagColor}`}>
            {article.tag}
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
            {article.title}
          </h1>
          <p className="text-sm text-white/50 mt-3">{article.date}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-14 w-full">
        <Link href="/news-and-events" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-10">
          <ArrowLeft className="h-4 w-4" /> Zurück zu News & Events
        </Link>

        <div className="prose prose-gray max-w-none text-[0.95rem] leading-relaxed">
          {article.body.split('\n\n').map((para, i) => (
            para.startsWith('**') ? (
              <p key={i} className="font-semibold text-gray-900 mt-6 mb-1">{para.replace(/\*\*/g, '')}</p>
            ) : (
              <p key={i} className="text-gray-600 mb-4">{para}</p>
            )
          ))}
        </div>

        {/* CTA → Shop */}
        <div className="mt-12 rounded-xl bg-[#0C1523] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-lg mb-1">Jetzt im Shop stöbern</p>
            <p className="text-white/55 text-sm">E-Scooter, Stunt Scooter & mehr — direkt in Dorsten.</p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-[#8BBDE8] hover:bg-[#8BBDE8]/80 text-[#0C1523] text-sm font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
          >
            Zum Shop <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* More articles */}
      {others.length > 0 && (
        <div className="max-w-3xl mx-auto px-6 lg:px-8 pb-20 w-full">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Weitere Artikel</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {others.map((o) => (
              <Link key={o.slug} href={`/news-and-events/${o.slug}`} className="group rounded-xl border border-gray-200 overflow-hidden hover:bg-gray-50 transition-colors">
                <div className="relative aspect-video overflow-hidden">
                  <Image src={o.image} alt={o.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium mb-2 ${tagColors[o.tagColor]}`}>{o.tag}</span>
                  <h3 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-[#8BBDE8] transition-colors">{o.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
