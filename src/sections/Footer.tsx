import { Link } from 'react-router-dom'
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
} from '../lib/constants'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <span className="brand">
            <span className="brand-mark" aria-hidden="true">
              <img className="brand-mark-icon" src="/logo-mark.png" alt="" width={32} height={32} />
            </span>
            <span className="wordmark">
              GECOP <em>EXPERT</em>
            </span>
          </span>
          <p>Tu aliado técnico en procesos del sector público.</p>
        </div>
        <div className="footer-col">
          <h3>Contacto</h3>
          <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE_DISPLAY}</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <span>{CONTACT_ADDRESS}</span>
        </div>
        <div className="footer-col">
          <h3>Horario de atención</h3>
          <span>Lunes a viernes · 08:00–18:00</span>
          <span>Sábados · 09:00–14:00</span>
        </div>
        <div className="footer-col">
          <h3>Legal</h3>
          <Link to="/politica-de-privacidad">Política de Privacidad</Link>
          <Link to="/terminos-y-condiciones">Términos y Condiciones</Link>
        </div>
      </div>
      <div className="wrap footer-legal">
        <span>© {new Date().getFullYear()} GECOP EXPERT. Todos los derechos reservados.</span>
        <a
          href="https://ionoshub.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-watermark"
        >
          <span>Diseño y desarrollo por:</span>{' '}
          <span className="footer-watermark-brand">IONOS HUB</span>
        </a>
      </div>
    </footer>
  )
}
