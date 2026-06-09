import Link from "next/link"
import Footer from "../components/Footer"

export const metadata = {
  title: "AGB — VoltVibes Dorsten",
}

export default function AgbPage() {
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
          Allgemeine Geschäfts&shy;bedingungen
        </h1>
        <p className="text-sm text-zinc-400 mb-12">Stand: Juni 2026</p>

        <div className="space-y-10 text-sm text-zinc-600 leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">§ 1 Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen VoltVibes Dorsten, Inhaber Markus Kremer, Essener Str. 24, 46282 Dorsten (nachfolgend „Verkäufer") und Verbrauchern sowie Unternehmern (nachfolgend „Kunde"), die über unseren Online-Shop oder in unseren Ladengeschäften geschlossen werden.
            </p>
            <p className="mt-3">
              Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbstständigen beruflichen Tätigkeit zugerechnet werden können (§ 13 BGB).
            </p>
            <p className="mt-3">
              Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Verkäufer stimmt ihrer Geltung ausdrücklich schriftlich zu.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">§ 2 Vertragsschluss</h2>
            <p>
              Die Darstellung von Produkten auf unserer Website stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Bestellung dar.
            </p>
            <p className="mt-3">
              Durch das Absenden einer Bestellung über den Online-Shop gibt der Kunde ein verbindliches Angebot zum Kauf der ausgewählten Waren ab. Die Bestellbestätigungs-E-Mail stellt noch keine Annahme des Angebots dar. Der Kaufvertrag kommt erst mit Versand einer gesonderten Auftragsbestätigungs-E-Mail oder mit der Lieferung der Ware zustande.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">§ 3 Preise und Zahlung</h2>
            <p>
              Alle angegebenen Preise sind Endpreise in Euro und enthalten die gesetzliche Mehrwertsteuer.
              Versandkosten werden im Bestellprozess gesondert ausgewiesen und sind nicht im Produktpreis enthalten.
            </p>
            <p className="mt-3">
              Folgende Zahlungsarten stehen zur Verfügung: Zahlung über Shopify Payments (Kreditkarte, PayPal und weitere, je nach Verfügbarkeit im Checkout).
              Die Bezahlung des Kaufpreises ist mit Bestellabschluss fällig.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">§ 4 Lieferung und Versand</h2>
            <p>
              Lieferungen erfolgen an die vom Kunden angegebene Lieferadresse innerhalb Deutschlands.
              Die Lieferzeit beträgt in der Regel 3–7 Werktage ab Zahlungseingang, sofern nicht anders angegeben.
              Bei Lieferverzögerungen informieren wir den Kunden umgehend.
            </p>
            <p className="mt-3">
              Die Versandkosten werden im Bestellprozess vor Abgabe der Bestellung angezeigt.
              Das Versandrisiko trägt der Verkäufer bei Verbrauchern bis zur Übergabe der Ware.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">§ 5 Widerrufsrecht</h2>
            <p>
              Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Einzelheiten ergeben sich aus der gesonderten{" "}
              <Link href="/widerruf" className="text-[#8BBDE8] hover:underline">Widerrufsbelehrung</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">§ 6 Eigentumsvorbehalt</h2>
            <p>
              Die gelieferte Ware bleibt bis zur vollständigen Bezahlung Eigentum des Verkäufers.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">§ 7 Gewährleistung</h2>
            <p>
              Es gelten die gesetzlichen Gewährleistungsrechte. Die Gewährleistungsfrist für neue Waren beträgt zwei Jahre ab Lieferung.
              Bei gebrauchten Waren kann die Gewährleistungsfrist auf ein Jahr verkürzt werden, sofern dies im Einzelfall vereinbart und in der Produktbeschreibung angegeben ist.
            </p>
            <p className="mt-3">
              Bei Mängeln wende dich bitte an:{" "}
              <a href="mailto:info@voltvibes-dorsten.de" className="text-[#8BBDE8] hover:underline">info@voltvibes-dorsten.de</a>{" "}
              oder{" "}
              <a href="tel:023629747100" className="text-[#8BBDE8] hover:underline">02362 9747100</a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">§ 8 Haftung</h2>
            <p>
              Der Verkäufer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für vorsätzlich oder grob fahrlässig verursachte Schäden.
            </p>
            <p className="mt-3">
              Für leicht fahrlässige Verletzungen wesentlicher Vertragspflichten (Kardinalpflichten) haftet der Verkäufer der Höhe nach beschränkt auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden.
              Im Übrigen ist die Haftung für leicht fahrlässig verursachte Schäden ausgeschlossen.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">§ 9 Streitbeilegung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#8BBDE8] hover:underline">https://ec.europa.eu/consumers/odr</a>.
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">§ 10 Anwendbares Recht und Gerichtsstand</h2>
            <p>
              Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts (CISG).
              Gerichtsstand für Kaufleute und Personen ohne allgemeinen Gerichtsstand in Deutschland ist Dorsten.
              Zwingende gesetzliche Bestimmungen zum Schutz von Verbrauchern bleiben unberührt.
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  )
}
