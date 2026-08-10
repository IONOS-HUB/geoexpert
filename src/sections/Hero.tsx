import { IconArrow, IconWhatsapp } from '../Icons'
import { WHATSAPP_HREF } from '../lib/constants'
import { Matrix } from './Matrix'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <h1 id="hero-heading">Tu aliado técnico en procesos del sector público.</h1>
          <p className="hero-lede">
            Cada oferta pública se juzga contra una matriz de cumplimiento, no contra un buen
            argumento. Te acompañamos para que cada renglón — legal, técnico, económico —
            llegue marcado como <strong>CUMPLE</strong>.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contacto">
              Solicita tu asesoría
              <IconArrow className="btn-icon" />
            </a>
            <a className="btn btn-whatsapp" href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
              <IconWhatsapp className="btn-icon" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>

        <Matrix />
      </div>
    </section>
  )
}
