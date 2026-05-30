'use client'

import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { useCookieConsent } from '@/lib/cookie-consent'

interface Props {
  src: string
  title: string
  address: string
  className?: string
  style?: React.CSSProperties
}

export default function ConsentMap({ src, title, address, className = '', style }: Props) {
  const { consent, accept } = useCookieConsent()
  const [localLoad, setLocalLoad] = useState(false)

  const show = consent === 'accepted' || localLoad

  if (show) {
    return (
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'grayscale(20%) contrast(1.05)', ...style }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className={className}
      />
    )
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-4 bg-zinc-100 h-full w-full ${className}`}>
      <div className="flex flex-col items-center gap-3 text-center px-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200">
          <MapPin className="h-5 w-5 text-zinc-500" />
        </div>
        <p className="text-sm font-medium text-zinc-700">{address}</p>
        <p className="text-xs text-zinc-400 max-w-[220px] leading-relaxed">
          Google Maps ist deaktiviert. Bitte stimme Cookies zu, um die Karte zu laden.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 mt-1">
          <button
            onClick={() => { accept(); }}
            className="px-4 py-2 rounded-full text-xs font-semibold bg-[#0C1523] text-white hover:bg-zinc-800 transition-colors"
          >
            Cookies akzeptieren & Karte laden
          </button>
          <button
            onClick={() => setLocalLoad(true)}
            className="px-4 py-2 rounded-full text-xs font-medium border border-zinc-300 text-zinc-600 hover:bg-zinc-200 transition-colors"
          >
            Nur diese Karte laden
          </button>
        </div>
      </div>
    </div>
  )
}
