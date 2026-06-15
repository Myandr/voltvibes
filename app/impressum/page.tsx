import Link from "next/link"
import Footer from "../components/Footer"

export const metadata = {
  title: "Impressum — VoltVibes Dorsten",
}

export default function ImpressumPage() {
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
          Impressum
        </h1>
        <p className="text-sm text-zinc-400 mb-12">Angaben gemäß § 5 DDG</p>

        <div className="space-y-10 text-sm text-zinc-600 leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">Anbieter</h2>
            <p>
              VoltVibes Dorsten<br />
              Geschäftsführender Inhaber: Markus Kremer<br />
              Unternehmensform: Einzelunternehmen<br />
              Essener Straße 24<br />
              46282 Dorsten<br />
              Website: <a href="https://www.voltvibes-dorsten.de" className="text-[#5CC987] hover:underline">www.voltvibes-dorsten.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">Kontakt</h2>
            <p>
              Telefon: <a href="tel:023629747100" className="text-[#5CC987] hover:underline">02362 9747100</a><br />
              E-Mail: <a href="mailto:info@voltvibes-dorsten.de" className="text-[#5CC987] hover:underline">info@voltvibes-dorsten.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">Steuerliche Angaben</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE460861455
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">Redaktionell verantwortlich</h2>
            <p>Markus Kremer</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">Filialen</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="font-medium text-zinc-800 mb-1">Hauptfiliale NRW</p>
                <p>
                  VoltVibes Dorsten<br />
                  Essener Straße 24, 46282 Dorsten<br />
                  E-Mail: <a href="mailto:info@voltvibes-dorsten.de" className="text-[#5CC987] hover:underline">info@voltvibes-dorsten.de</a><br />
                  Telefon: <a href="tel:023629747100" className="text-[#5CC987] hover:underline">02362 9747100</a>
                </p>
              </div>
              <div>
                <p className="font-medium text-zinc-800 mb-1">Filiale Niedersachsen <span className="text-zinc-400 font-normal">(öffnet Mai 2026)</span></p>
                <p>
                  VoltVibes Göttingen<br />
                  Groner Straße 8, 37073 Göttingen<br />
                  E-Mail: <a href="mailto:info@voltvibes-goettingen.de" className="text-[#5CC987] hover:underline">info@voltvibes-goettingen.de</a><br />
                  Telefon: <a href="tel:+495512707760" className="text-[#5CC987] hover:underline">+49 551 27077600</a>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">Haftungsausschluss</h2>
            <p>
              Die Inhalte unserer Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">Verbraucherstreitbeilegung</h2>
            <p>
              Wir nehmen an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil. Zuständig ist die Universalschlichtungsstelle des Zentrums für Schlichtung e.V., Straßburger Straße 8, 77694 Kehl am Rhein.{" "}
              <a href="https://www.verbraucher-schlichter.de" target="_blank" rel="noopener noreferrer" className="text-[#5CC987] hover:underline">www.verbraucher-schlichter.de</a>
            </p>
            <p className="mt-3">
              Die Europäische Kommission stellt zudem eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#5CC987] hover:underline">ec.europa.eu/consumers/odr</a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">Zentrale Kontaktstelle nach dem Digital Services Act (DSA)</h2>
            <p>
              Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11, 12 DSA (Verordnung (EU) 2022/2065) erreichen Sie wie folgt:
            </p>
            <p className="mt-3">
              E-Mail: <a href="mailto:info@voltvibes-dorsten.de" className="text-[#5CC987] hover:underline">info@voltvibes-dorsten.de</a><br />
              Telefon: <a href="tel:023629747100" className="text-[#5CC987] hover:underline">02362 9747100</a>
            </p>
            <p className="mt-3">
              Verfügbare Sprachen: Deutsch, Englisch.
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  )
}
