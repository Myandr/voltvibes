import Image from "next/image"
import { MapPin, Phone, Mail, Clock, ExternalLink, Check } from "lucide-react"
import PageHero from "../components/PageHero"
import Footer from "../components/Footer"

const dorstenerServices = [
  "Neue und gebrauchte Roller",
  "Probefahrten möglich",
  "Reparaturen aller Art",
  "Ersatzteilverkauf",
  "Rollerankauf",
]

const goettingerServices = [
  "Schwerpunkt Seniorenmobile",
  "Eigene Teststrecke",
  "E-Scooter Beratung",
  "Reparaturservice",
  "Zubehör & Ersatzteile",
]

const stats = [
  { label: "Standorte", value: "2" },
  { label: "Werkstatt", value: "1" },
  { label: "Eröffnung Göttingen", value: "2026" },
]

export default function FilialenPage() {
  return (
    <main className="flex flex-col flex-1 bg-white">
      <PageHero
        eyebrow="Unsere Standorte"
        title="Unsere"
        titleAccent="Filialen"
        subtitle="Aktuell in Dorsten — bald auch in Göttingen. Komm vorbei, schau dich um und fahr eine Proberunde."
      />

      {/* Filialen */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 flex flex-col gap-8">

        {/* Dorsten */}
        <div className="group grid gap-4 lg:grid-cols-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-500 overflow-hidden">

          {/* Left: Info */}
          <div className="p-8 flex flex-col gap-6">
            <div>
              <span className="inline-flex items-center rounded-full border border-[#8BBDE8]/40 bg-[#8BBDE8]/5 px-4 py-1.5 text-sm font-medium text-[#8BBDE8] mb-4">
                Hauptfiliale
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">VoltVibes Dorsten</h2>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-gray-900">Adresse</p>
                <p className="text-sm text-gray-500">Lippestraße 34</p>
                <p className="text-sm text-gray-500">46282 Dorsten</p>
                <p className="text-xs text-gray-400 mt-0.5">(Fußgängerzone Innenstadt)</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#8BBDE8] flex-shrink-0" />
                <a href="tel:02362-9747100" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  02362-9747100
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#8BBDE8] flex-shrink-0" />
                <a href="mailto:info@voltvibes-dorsten.de" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  info@voltvibes-dorsten.de
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
              <div className="w-full">
                <p className="font-semibold text-sm text-gray-900 mb-2">Öffnungszeiten</p>
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
                      <td className="py-1.5 text-right font-medium text-gray-400">Geschlossen</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Lippestraße+34,+46282+Dorsten"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-200 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors w-full justify-center"
            >
              <MapPin className="h-4 w-4" />
              In Google Maps öffnen
              <ExternalLink className="h-3 w-3 text-gray-400" />
            </a>
          </div>

          {/* Right: Image */}
          <div className="relative border border-gray-200 bg-white p-2 rounded-xl m-4">
            <Image
              src="/images/gallery-3.jpg"
              alt="VoltVibes Dorsten"
              width={600}
              height={500}
              className="w-full h-full object-cover rounded-xl aspect-video"
            />
            <div className="absolute inset-2 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-xl" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs font-semibold text-white mb-2">Angebot</p>
              <div className="flex flex-wrap gap-1.5">
                {dorstenerServices.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1 bg-white/15 backdrop-blur-sm border border-white/20 rounded-md px-2 py-1 text-xs font-medium text-white"
                  >
                    <Check className="h-3 w-3 text-[#8BBDE8] flex-shrink-0" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Göttingen — Coming Soon */}
        <div className="group grid gap-4 lg:grid-cols-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-500 overflow-hidden opacity-85">

          {/* Left: Info */}
          <div className="p-8 flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-500">
                  Neue Filiale
                </span>
                <span className="inline-flex items-center rounded-full bg-[#8BBDE8] px-4 py-1.5 text-sm font-medium text-[#0C1523]">
                  Eröffnung Mai 2026
                </span>
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">VoltVibes Göttingen</h2>
            </div>

            <div className="rounded-xl bg-[#8BBDE8]/5 border border-[#8BBDE8]/20 p-4">
              <p className="text-sm text-gray-600">
                Eröffnung geplant: <strong className="text-gray-900">Mai 2026</strong>
              </p>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-gray-900">Adresse</p>
                <p className="text-sm text-gray-500">Groner Straße 8</p>
                <p className="text-sm text-gray-500">37073 Göttingen</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#8BBDE8] flex-shrink-0" />
                <span className="text-sm text-gray-500">+49 551 27077600</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#8BBDE8] flex-shrink-0" />
                <span className="text-sm text-gray-500">info@voltvibes-goettingen.de</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-[#8BBDE8] flex-shrink-0 mt-0.5" />
              <div className="w-full">
                <p className="font-semibold text-sm text-gray-900 mb-2">Öffnungszeiten</p>
                <p className="text-sm text-gray-400 italic">Werden zur Eröffnung bekanntgegeben.</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-sm text-gray-400 border border-gray-200 px-4 py-2.5 rounded-lg w-full justify-center cursor-not-allowed">
              <MapPin className="h-4 w-4" />
              Google Maps — bald verfügbar
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative border border-gray-200 bg-white p-2 rounded-xl m-4">
            <Image
              src="/images/gallery-4.jpg"
              alt="VoltVibes Göttingen"
              width={600}
              height={500}
              className="w-full h-full object-cover rounded-xl aspect-video"
            />
            <div className="absolute inset-2 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-xl" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs font-semibold text-white mb-2">Angebot</p>
              <div className="flex flex-wrap gap-1.5">
                {goettingerServices.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1 bg-white/15 backdrop-blur-sm border border-white/20 rounded-md px-2 py-1 text-xs font-medium text-white"
                  >
                    <Check className="h-3 w-3 text-[#8BBDE8] flex-shrink-0" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Stats Block */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-24">
        <div className="bg-white border border-gray-200 rounded-xl p-10 md:p-16">
          <div className="flex flex-wrap justify-between gap-10 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-4xl font-semibold md:text-5xl text-gray-900">{stat.value}</span>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
