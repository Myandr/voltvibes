'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Consent = 'accepted' | 'declined' | null

interface CookieConsentContext {
  consent: Consent
  accept: () => void
  decline: () => void
}

const Ctx = createContext<CookieConsentContext>({
  consent: null,
  accept: () => {},
  decline: () => {},
})

const STORAGE_KEY = 'vv-cookie-consent'

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<Consent>(null)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'accepted' || stored === 'declined') {
      setConsent(stored)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setConsent('accepted')
  }

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setConsent('declined')
  }

  return <Ctx.Provider value={{ consent, accept, decline }}>{children}</Ctx.Provider>
}

export function useCookieConsent() {
  return useContext(Ctx)
}
