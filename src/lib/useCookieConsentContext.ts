import { useContext } from 'react'
import { CookieConsentContext } from './cookieConsentStore'

export function useCookieConsentContext() {
  const ctx = useContext(CookieConsentContext)
  if (!ctx) {
    throw new Error('useCookieConsentContext must be used within a CookieConsentProvider')
  }
  return ctx
}
