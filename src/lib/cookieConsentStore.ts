import { createContext } from 'react'
import type { useCookieConsent } from './useCookieConsent'

export type CookieConsentValue = ReturnType<typeof useCookieConsent>

export const CookieConsentContext = createContext<CookieConsentValue | null>(null)
