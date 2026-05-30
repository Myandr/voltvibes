'use client'

import Link from 'next/link'
import { useCookieConsent } from '@/lib/cookie-consent'

export default function CookieBanner() {
  const { consent, accept, decline } = useCookieConsent()

  if (consent !== null) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] px-4 pb-4 sm:pb-6">
      <div className="max-w-3xl mx-auto bg-[#0C1523]/80 backdrop-blur-xl rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-semibold mb-1">
              Wir verwenden Cookies
            </p>
            <p className="text-white/50 text-xs leading-relaxed">
              Technisch notwendige Cookies sind immer aktiv. Mit deiner Zustimmung laden wir auch Google Maps. Mehr dazu in unserer{' '}
              <Link href="/datenschutz" className="text-[#8BBDE8] hover:underline underline-offset-2">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 shrink-0 flex-wrap sm:flex-nowrap">
            <button
              onClick={decline}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs font-medium text-white/60 border border-white/15 hover:border-white/30 hover:text-white/80 transition-colors"
            >
              Nur notwendige
            </button>
            <button
              onClick={accept}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs font-semibold bg-[#8BBDE8] text-[#0C1523] hover:bg-[#8BBDE8]/90 transition-colors"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
