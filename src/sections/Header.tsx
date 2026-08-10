import { IconCheck, IconPhone } from '../Icons'

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap site-header-inner">
        <span className="brand">
          <span className="brand-mark" aria-hidden="true">
            <IconCheck className="brand-mark-icon" />
          </span>
          <span className="wordmark">
            GECOP <em>EXPERT</em>
          </span>
        </span>
        <nav className="header-nav" aria-label="Contacto rápido">
          <a className="header-phone" href="tel:+593982476489">
            <IconPhone className="header-phone-icon" />
            0982 476 489
          </a>
          <a className="btn btn-primary btn-sm" href="/#contacto">
            Agenda tu cita
          </a>
        </nav>
      </div>
    </header>
  )
}
