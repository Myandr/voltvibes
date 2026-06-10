'use client'

import Link from "next/link"
import Footer from "../components/Footer"
import { useCookieConsent } from "@/lib/cookie-consent"
import { Check, X, Cookie } from "lucide-react"

function StatusBadge({ accepted }: { accepted: boolean }) {
  return accepted ? (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs font-medium text-green-700">
      <Check className="h-3 w-3" /> Aktiv
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-500">
      <X className="h-3 w-3" /> Inaktiv
    </span>
  )
}

export default function CookiesPage() {
  const { consent, accept, decline } = useCookieConsent()

  const accepted = consent === 'accepted'

  return (
    <main className="flex flex-col flex-1 bg-white">
      <div className="max-w-3xl mx-auto w-full px-4 pt-40 pb-20">

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-700 transition-colors mb-10"
        >
          ← Zurück zur Startseite
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <Cookie className="h-7 w-7 text-zinc-300" />
          <h1
            className="text-4xl sm:text-5xl font-bold text-zinc-900"
            style={{ fontFamily: 'var(--font-bebas), sans-serif', letterSpacing: '0.02em', lineHeight: 1 }}
          >
            Cookie-Einstellungen
          </h1>
        </div>
        <p className="text-sm text-zinc-400 mb-12">
          Deine aktuelle Auswahl:{' '}
          <span className={accepted ? 'text-green-600 font-medium' : 'text-zinc-500 font-medium'}>
            {consent === null ? 'Noch keine Entscheidung getroffen' : accepted ? 'Alle Cookies akzeptiert' : 'Nur notwendige Cookies'}
          </span>
        </p>

        <div className="space-y-4 mb-12">

          {/* Notwendige Cookies — immer aktiv */}
          <div className="rounded-2xl border border-zinc-200 p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-sm font-semibold text-zinc-900">Notwendige Cookies</h2>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-500">
                    Immer aktiv
                  </span>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden. Dazu gehören der Warenkorb, Sitzungs-Cookies und Sicherheitsfunktionen.
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-2xl border border-zinc-200 p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-sm font-semibold text-zinc-900">Google Maps</h2>
                  <StatusBadge accepted={accepted} />
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Für die Anzeige interaktiver Karten verwenden wir Google Maps. Dabei werden Daten an Google Ireland Limited übertragen. Weitere Informationen findest du in der{' '}
                  <Link href="/datenschutz" className="text-[#5CC987] hover:underline underline-offset-2">
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={accept}
            disabled={accepted}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#0C1523] text-white hover:bg-zinc-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Check className="h-4 w-4" />
            Alle akzeptieren
          </button>
          <button
            onClick={decline}
            disabled={!accepted && consent !== null}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-zinc-200 text-zinc-700 hover:bg-zinc-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <X className="h-4 w-4" />
            Nur notwendige
          </button>
        </div>

        {consent !== null && (
          <p className="mt-4 text-xs text-zinc-400">
            Deine Einstellung wurde gespeichert. Du kannst sie jederzeit hier ändern.
          </p>
        )}

      </div>
      <Footer />
    </main>
  )
}
