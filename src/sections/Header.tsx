import { IconPhone } from '../Icons'

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap site-header-inner">
        <span className="brand">
          <span className="brand-mark" aria-hidden="true">
            <img className="brand-mark-icon" src="/logo-mark.png" alt="" width={32} height={32} />
          </span>
          <span className="wordmark">
            GECOP <em>EXPERT</em>
          </span>
        </span>
        <nav className="header-nav" aria-label="Contacto rápido">
          <a className="header-phone" href="tel:+593984062064">
            <IconPhone className="header-phone-icon" />
            0984 062 064
          </a>
          <a className="btn btn-primary btn-sm" href="/#contacto">
            Agenda tu cita
          </a>
        </nav>
      </div>
    </header>
  )
}
