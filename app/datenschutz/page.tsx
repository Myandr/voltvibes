import Link from "next/link"
import Footer from "../components/Footer"

export const metadata = {
  title: "Datenschutzerklärung — VoltVibes Dorsten",
}

export default function DatenschutzPage() {
  return (
    <main className="flex flex-col flex-1 bg-white">
      <div className="max-w-3xl mx-auto w-full px-4 pt-40 pb-20">

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-700 transition-colors mb-10"
        >
          ← Zurück zur Startseite
        </Link>

        <h1
          className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-2"
          style={{ fontFamily: 'var(--font-bebas), sans-serif', letterSpacing: '0.02em', lineHeight: 1 }}
        >
          Datenschutz&shy;erklärung
        </h1>
        <p className="text-sm text-zinc-400 mb-12">Stand: Januar 2026</p>

        <div className="space-y-10 text-sm text-zinc-600 leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">1. Verantwortlicher</h2>
            <p>
              VoltVibes Dorsten<br />
              Inhaber: Markus Kremer<br />
              Lippestraße 34, 46282 Dorsten<br />
              E-Mail: <a href="mailto:info@voltvibes-dorsten.de" className="text-[#8BBDE8] hover:underline">info@voltvibes-dorsten.de</a><br />
              Telefon: <a href="tel:023629747100" className="text-[#8BBDE8] hover:underline">02362 9747100</a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>
              Beim Besuch unserer Website werden automatisch technische Zugriffsdaten erhoben (IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit des Zugriffs). Diese Daten werden ausschließlich zur Sicherstellung des Betriebs und zur Fehleranalyse verwendet und nicht an Dritte weitergegeben.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">3. Kontaktformular</h2>
            <p>
              Daten, die du über unser Kontaktformular übermittelst, werden ausschließlich zur Bearbeitung deiner Anfrage verwendet. Eine Weitergabe an Dritte erfolgt nicht. Die Daten werden gelöscht, sobald deine Anfrage abschließend bearbeitet ist.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">4. Newsletter</h2>
            <p>
              Mit der Eingabe deiner E-Mail-Adresse erklärst du dich einverstanden, gelegentlich Neuigkeiten von VoltVibes Dorsten zu erhalten. Du kannst dich jederzeit formlos per E-Mail abmelden. Deine Adresse wird nicht an Dritte weitergegeben.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">5. Cookies</h2>
            <p>
              Unsere Website verwendet ausschließlich technisch notwendige Cookies (z.&nbsp;B. für den Warenkorb). Eine gesonderte Einwilligung ist hierfür nicht erforderlich. Es werden keine Tracking- oder Werbe-Cookies eingesetzt.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">6. Shopify</h2>
            <p>
              Unser Online-Shop wird über Shopify Inc. betrieben. Bei einem Kauf werden deine Bestell- und Zahlungsdaten an Shopify übermittelt und dort verarbeitet. Weitere Informationen findest du in der{" "}
              <a href="https://www.shopify.com/de/legal/datenschutz" target="_blank" rel="noopener noreferrer" className="text-[#8BBDE8] hover:underline">Datenschutzerklärung von Shopify</a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">7. Google Maps</h2>
            <p>
              Auf unserer Website binden wir Karten von Google Maps ein. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Bei der Nutzung von Google Maps können Daten auf Google-Servern übertragen werden. Weitere Informationen findest du in der{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#8BBDE8] hover:underline">Datenschutzerklärung von Google</a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">8. Deine Rechte</h2>
            <p>
              Du hast jederzeit das Recht auf Auskunft über deine bei uns gespeicherten Daten sowie das Recht auf Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Wende dich dazu an{" "}
              <a href="mailto:info@voltvibes-dorsten.de" className="text-[#8BBDE8] hover:underline">info@voltvibes-dorsten.de</a>.
            </p>
            <p className="mt-3">
              Zudem hast du das Recht, dich bei der zuständigen Aufsichtsbehörde zu beschweren. In Nordrhein-Westfalen ist dies die Landesbeauftragte für Datenschutz und Informationsfreiheit (LDI NRW).
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  )
}
