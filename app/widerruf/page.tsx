import Link from "next/link"
import Footer from "../components/Footer"

export const metadata = {
  title: "Widerrufsbelehrung — VoltVibes Dorsten",
}

export default function WiderrufPage() {
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
          Widerrufs&shy;belehrung
        </h1>
        <p className="text-sm text-zinc-400 mb-12">gemäß Art. 246a § 1 Abs. 2 EGBGB</p>

        <div className="space-y-10 text-sm text-zinc-600 leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">Widerrufsrecht</h2>
            <p>
              Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
            </p>
            <p className="mt-3">
              Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem du oder ein von dir benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen hast bzw. hat.
            </p>
            <p className="mt-3">
              Um dein Widerrufsrecht auszuüben, musst du uns
            </p>
            <p className="mt-3 pl-4 border-l-2 border-zinc-200">
              VoltVibes Dorsten<br />
              Inhaber: Markus Kremer<br />
              Essener Str. 24<br />
              46282 Dorsten<br />
              E-Mail: <a href="mailto:info@voltvibes-dorsten.de" className="text-[#8BBDE8] hover:underline">info@voltvibes-dorsten.de</a><br />
              Telefon: <a href="tel:023629747100" className="text-[#8BBDE8] hover:underline">02362 9747100</a>
            </p>
            <p className="mt-3">
              mittels einer eindeutigen Erklärung (z.&nbsp;B. ein mit der Post versandter Brief oder eine E-Mail) über deinen Entschluss, diesen Vertrag zu widerrufen, informieren. Du kannst dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
            </p>
            <p className="mt-3">
              Zur Wahrung der Widerrufsfrist reicht es aus, dass du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">Folgen des Widerrufs</h2>
            <p>
              Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die wir von dir erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass du eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt hast), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über deinen Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast, es sei denn, mit dir wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden dir wegen dieser Rückzahlung Entgelte berechnet.
            </p>
            <p className="mt-3">
              Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis du den Nachweis erbracht hast, dass du die Waren zurückgesandt hast, je nachdem, welches der frühere Zeitpunkt ist.
            </p>
            <p className="mt-3">
              Du hast die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem du uns über den Widerruf dieses Vertrags unterrichtest, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn du die Waren vor Ablauf der Frist von vierzehn Tagen absendest.
            </p>
            <p className="mt-3">
              Du trägst die unmittelbaren Kosten der Rücksendung der Waren.
            </p>
            <p className="mt-3">
              Du musst für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-3">Muster-Widerrufsformular</h2>
            <p className="mb-4 text-zinc-500 text-xs">
              (Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und senden Sie es zurück.)
            </p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-6 font-mono text-xs leading-loose text-zinc-700 whitespace-pre-wrap">
{`An:
VoltVibes Dorsten, Inhaber Markus Kremer
Essener Str. 24, 46282 Dorsten
E-Mail: info@voltvibes-dorsten.de

Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen
Vertrag über den Kauf der folgenden Waren (*):

Bestellt am (*) / erhalten am (*):
_________________________________________________

Name des/der Verbraucher(s):
_________________________________________________

Anschrift des/der Verbraucher(s):
_________________________________________________

Unterschrift des/der Verbraucher(s)
(nur bei Mitteilung auf Papier):
_________________________________________________

Datum: _____________________


(*) Unzutreffendes streichen.`}
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  )
}
