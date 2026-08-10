import { useCallback, useState } from 'react'

export type CookieConsentStatus = 'accepted' | 'rejected' | null

const STORAGE_KEY = 'gecop-cookie-consent'

type StoredConsent = {
  status: 'accepted' | 'rejected'
  ts: string
}

function readStoredConsent(): CookieConsentStatus {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as StoredConsent
    return parsed.status ?? null
  } catch {
    return null
  }
}

function writeStoredConsent(status: 'accepted' | 'rejected') {
  const value: StoredConsent = { status, ts: new Date().toISOString() }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
}

export function useCookieConsent() {
  const [status, setStatus] = useState<CookieConsentStatus>(() => readStoredConsent())

  const accept = useCallback(() => {
    writeStoredConsent('accepted')
    setStatus('accepted')
  }, [])

  const reject = useCallback(() => {
    writeStoredConsent('rejected')
    setStatus('rejected')
  }, [])

  const reset = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY)
    setStatus(null)
  }, [])

  return { status, accept, reject, reset }
}
