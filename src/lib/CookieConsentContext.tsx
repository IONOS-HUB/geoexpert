import type { ReactNode } from 'react'
import { CookieConsentContext } from './cookieConsentStore'
import { useCookieConsent } from './useCookieConsent'

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const value = useCookieConsent()
  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>
}
