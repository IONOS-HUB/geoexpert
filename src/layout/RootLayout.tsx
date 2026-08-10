import { Outlet } from 'react-router-dom'
import { CookieConsentBanner } from '../components/CookieConsentBanner'
import { CookieConsentProvider } from '../lib/CookieConsentContext'
import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'

export function RootLayout() {
  return (
    <CookieConsentProvider>
      <a className="skip-link" href="#contacto">
        Ir al formulario de contacto
      </a>

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

      <CookieConsentBanner />
    </CookieConsentProvider>
  )
}
