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
        <p className="text-sm text-zinc-400 mb-12">Stand: Juni 2026</p>

        <div className="space-y-10 text-sm text-zinc-600 leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">1. Verantwortlicher</h2>
            <p>
              VoltVibes Dorsten<br />
              Inhaber: Markus Kremer<br />
              Essener Str. 24, 46282 Dorsten<br />
              E-Mail: <a href="mailto:info@voltvibes-dorsten.de" className="text-[#8BBDE8] hover:underline">info@voltvibes-dorsten.de</a><br />
              Telefon: <a href="tel:023629747100" className="text-[#8BBDE8] hover:underline">02362 9747100</a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">2. Rechtsgrundlagen der Verarbeitung</h2>
            <p>
              Wir verarbeiten personenbezogene Daten auf folgenden Rechtsgrundlagen gemäß Art. 6 DSGVO:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              <li><strong className="text-zinc-800">Art. 6 Abs. 1 lit. a DSGVO (Einwilligung):</strong> Newsletter-Anmeldung, Einbindung von Google Maps</li>
              <li><strong className="text-zinc-800">Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung):</strong> Bestellungen, Kaufverträge, Reparaturanfragen, Kontaktanfragen</li>
              <li><strong className="text-zinc-800">Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse):</strong> Technischer Betrieb der Website, Sicherstellung der IT-Sicherheit, Fehleranalyse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">3. Hosting (Vercel)</h2>
            <p>
              Diese Website wird gehostet von Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.
              Beim Aufruf unserer Website werden technische Zugriffsdaten (IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit des Zugriffs) auf Servern von Vercel verarbeitet.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website).
              Die Übertragung in die USA erfolgt auf Basis von Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2 lit. c DSGVO.
              Speicherdauer: Zugriffsprotokolle werden nach spätestens 30 Tagen gelöscht.{" "}
              Weitere Informationen:{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#8BBDE8] hover:underline">vercel.com/legal/privacy-policy</a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">4. Erhebung technischer Zugriffsdaten</h2>
            <p>
              Beim Besuch unserer Website werden automatisch technische Zugriffsdaten erhoben (IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit des Zugriffs).
              Diese Daten werden ausschließlich zur Sicherstellung des Betriebs und zur Fehleranalyse verwendet und nicht an Dritte weitergegeben.
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Speicherdauer: 30 Tage.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">5. Kontaktformular</h2>
            <p>
              Daten, die du über unser Kontaktformular übermittelst, werden ausschließlich zur Bearbeitung deiner Anfrage verwendet.
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
              Eine Weitergabe an Dritte erfolgt nicht. Die Daten werden gelöscht, sobald deine Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">6. Newsletter</h2>
            <p>
              Mit der Eingabe deiner E-Mail-Adresse und dem Klick auf „Anmelden" erklärst du dich einverstanden, gelegentlich Neuigkeiten von VoltVibes Dorsten zu erhalten (Double-Opt-In-Verfahren: Du erhältst zunächst eine Bestätigungs-E-Mail).
              Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
              Du kannst dich jederzeit formlos per E-Mail an{" "}
              <a href="mailto:info@voltvibes-dorsten.de" className="text-[#8BBDE8] hover:underline">info@voltvibes-dorsten.de</a>{" "}
              abmelden. Deine Adresse wird nicht an Dritte weitergegeben und nach der Abmeldung umgehend gelöscht.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">7. Cookies</h2>
            <p>
              Unsere Website verwendet technisch notwendige Cookies (z.&nbsp;B. für den Warenkorb und deine Cookie-Einwilligung). Eine gesonderte Einwilligung ist hierfür nicht erforderlich.
              Darüber hinaus binden wir Google Maps nur nach deiner ausdrücklichen Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO / § 25 Abs. 1 TTDSG).
              Du kannst deine Einwilligung jederzeit unter{" "}
              <a href="/cookies" className="text-[#8BBDE8] hover:underline">Cookie-Einstellungen</a>{" "}
              widerrufen.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">8. Shopify (Online-Shop)</h2>
            <p>
              Unser Online-Shop wird über Shopify Inc., 151 O&apos;Connor Street, Ground floor, Ottawa, Ontario, K2P 2L8, Kanada betrieben. Bei einem Kauf werden deine Bestell- und Zahlungsdaten an Shopify übermittelt und dort verarbeitet.
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
              Mit Shopify haben wir einen Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO abgeschlossen.
              Soweit Daten in die USA übertragen werden, erfolgt dies auf Basis von Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2 lit. c DSGVO.
              Shopify speichert Bestelldaten für die Dauer gesetzlicher Aufbewahrungsfristen (in Deutschland i.&nbsp;d.&nbsp;R. 10 Jahre für steuerrelevante Unterlagen).{" "}
              Weitere Informationen:{" "}
              <a href="https://www.shopify.com/de/legal/datenschutz" target="_blank" rel="noopener noreferrer" className="text-[#8BBDE8] hover:underline">shopify.com/de/legal/datenschutz</a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">9. Google Maps</h2>
            <p>
              Auf unserer Website binden wir Karten von Google Maps ein. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              Google Maps wird nur nach deiner ausdrücklichen Einwilligung geladen (§ 25 Abs. 1 TTDSG, Art. 6 Abs. 1 lit. a DSGVO).
              Soweit Daten an Google LLC (USA) übertragen werden, erfolgt dies auf Basis von Standardvertragsklauseln (SCCs).
              Du kannst deine Einwilligung jederzeit unter{" "}
              <a href="/cookies" className="text-[#8BBDE8] hover:underline">Cookie-Einstellungen</a>{" "}
              widerrufen.{" "}
              Weitere Informationen:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#8BBDE8] hover:underline">policies.google.com/privacy</a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">10. Deine Rechte (Art. 15–21 DSGVO)</h2>
            <p>Du hast jederzeit das Recht auf:</p>
            <ul className="mt-3 space-y-2 list-none">
              <li><strong className="text-zinc-800">Auskunft (Art. 15 DSGVO)</strong> über die bei uns gespeicherten Daten</li>
              <li><strong className="text-zinc-800">Berichtigung (Art. 16 DSGVO)</strong> unrichtiger Daten</li>
              <li><strong className="text-zinc-800">Löschung (Art. 17 DSGVO)</strong> — sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen</li>
              <li><strong className="text-zinc-800">Einschränkung der Verarbeitung (Art. 18 DSGVO)</strong></li>
              <li><strong className="text-zinc-800">Datenübertragbarkeit (Art. 20 DSGVO)</strong></li>
              <li>
                <strong className="text-zinc-800">Widerspruch (Art. 21 DSGVO):</strong>{" "}
                Du hast das Recht, jederzeit gegen die Verarbeitung deiner Daten, die auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) erfolgt, Widerspruch einzulegen. Wir verarbeiten deine Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe nachweisen.
              </li>
              <li><strong className="text-zinc-800">Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</strong> jederzeit mit Wirkung für die Zukunft</li>
            </ul>
            <p className="mt-4">
              Wende dich für alle Anfragen an:{" "}
              <a href="mailto:info@voltvibes-dorsten.de" className="text-[#8BBDE8] hover:underline">info@voltvibes-dorsten.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">11. Beschwerderecht</h2>
            <p>
              Du hast das Recht, dich bei der zuständigen Aufsichtsbehörde zu beschweren. In Nordrhein-Westfalen ist dies die Landesbeauftragte für Datenschutz und Informationsfreiheit (LDI NRW),{" "}
              <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-[#8BBDE8] hover:underline">www.ldi.nrw.de</a>.
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  )
}
