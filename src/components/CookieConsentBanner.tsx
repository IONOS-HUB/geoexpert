import { Link } from 'react-router-dom'
import { useCookieConsentContext } from '../lib/useCookieConsentContext'

export function CookieConsentBanner() {
  const { status, accept, reject } = useCookieConsentContext()

  if (status !== null) return null

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Uso de cookies">
      <div className="wrap cookie-banner-inner">
        <p>
          Usamos almacenamiento local del navegador para recordar tus preferencias en este
          sitio. Puedes revisar el detalle en nuestra{' '}
          <Link to="/politica-de-privacidad#cookies">Política de Privacidad</Link> y nuestros{' '}
          <Link to="/terminos-y-condiciones">Términos y Condiciones</Link>.
        </p>
        <div className="cookie-banner-actions">
          <button type="button" className="btn btn-secondary btn-sm" onClick={reject}>
            Rechazar
          </button>
          <button type="button" className="btn btn-primary btn-sm" onClick={accept}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
