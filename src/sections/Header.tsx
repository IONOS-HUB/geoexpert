import { useEffect, useState } from 'react'
import { IconPhone } from '../Icons'
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF } from '../lib/constants'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
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
          <a className="header-phone" href={CONTACT_PHONE_HREF}>
            <IconPhone className="header-phone-icon" />
            {CONTACT_PHONE_DISPLAY}
          </a>
          <a className="btn btn-primary btn-sm" href="/#contacto">
            Agenda tu cita
          </a>
        </nav>
      </div>
    </header>
  )
}
