import { type CSSProperties, type FormEvent, useState } from 'react'
import './App.css'
import {
  IconArrow,
  IconCheck,
  IconClock,
  IconMail,
  IconPhone,
  IconPin,
  IconWhatsapp,
} from './Icons'

const WHATSAPP_NUMBER = '593982476489'
const WHATSAPP_MESSAGE = 'Hola GECOP EXPERT, quisiera agendar una asesoría.'
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const MATRIX_ROWS = [
  {
    code: 'REQ-01',
    label: 'Habilitación legal',
    desc: 'Documentos y requisitos formales presentados en regla.',
  },
  {
    code: 'REQ-02',
    label: 'Capacidad técnica',
    desc: 'Experiencia y respaldo técnico verificados frente al pliego.',
  },
  {
    code: 'REQ-03',
    label: 'Oferta económica',
    desc: 'Propuesta ajustada al presupuesto referencial del proceso.',
  },
  {
    code: 'REQ-04',
    label: 'Experiencia acreditada',
    desc: 'Trayectoria y procesos previos respaldados con soporte.',
  },
]

const SERVICE_ROWS = [
  {
    code: 'SRV-01',
    label: 'Asesoría en procesos de contratación pública',
    desc: 'Acompañamiento técnico en cada etapa del proceso: desde la lectura del pliego y la resolución de dudas normativas, hasta la presentación de la oferta ante la entidad contratante.',
  },
  {
    code: 'SRV-02',
    label: 'Resultados en los procesos',
    desc: 'Seguimiento cercano de cada proceso que acompañamos, con foco en que la oferta llegue completa, correcta y a tiempo — el criterio que decide si un proceso se gana o se pierde.',
  },
]

const LEDGER_ENTRIES = [
  {
    title: 'Acompañamiento desde el primer pliego',
    body: 'No entregamos una plantilla: revisamos cada proceso con el proveedor, punto por punto, antes de que la oferta salga de sus manos.',
  },
  {
    title: 'Seguimiento hasta el cierre del proceso',
    body: 'El trabajo no termina al presentar la oferta. Damos seguimiento a cada etapa hasta conocer el resultado del proceso.',
  },
  {
    title: 'Un aliado técnico, no un formulario',
    body: 'Cada consulta se atiende de forma directa y personal — la misma cercanía que esperarías de un asesor de confianza, aplicada a la contratación pública.',
  },
]

type FormStatus = 'idle' | 'submitting' | 'submitted'

function App() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const nombre = String(data.get('nombre') ?? '').trim()
    const telefono = String(data.get('telefono') ?? '').trim()
    const correo = String(data.get('correo') ?? '').trim()

    if (!nombre || !telefono || !correo) {
      setError('Completa nombre, teléfono y correo para enviar tu solicitud.')
      return
    }

    setError(null)
    setStatus('submitting')

    // NOTE: sin backend configurado en este repositorio. Conectar aquí el envío
    // real (API propia, Formspree, EmailJS, etc.) para notificar a
    // gecopexpert@gmail.com. Por ahora el formulario valida y confirma en cliente.
    window.setTimeout(() => {
      setStatus('submitted')
      form.reset()
    }, 500)
  }

  return (
    <>
      <a className="skip-link" href="#contacto">
        Ir al formulario de contacto
      </a>

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
            <a className="btn btn-primary btn-sm" href="#contacto">
              Agenda tu cita
            </a>
          </nav>
        </div>
      </header>

      <main>
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
                <a
                  className="btn btn-whatsapp"
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconWhatsapp className="btn-icon" />
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>

            <div className="matrix" role="img" aria-label="Cuatro requisitos de un proceso de contratación pública, todos marcados como CUMPLE">
              <div className="matrix-head">
                <span>Requisito</span>
                <span>Estado</span>
              </div>
              {MATRIX_ROWS.map((row, i) => (
                <div
                  className="matrix-row"
                  key={row.code}
                  style={{ '--delay': `${0.35 + i * 0.5}s` } as CSSProperties}
                >
                  <div className="matrix-row-main">
                    <span className="matrix-code">{row.code}</span>
                    <span className="matrix-label">{row.label}</span>
                  </div>
                  <p className="matrix-desc">{row.desc}</p>
                  <span className="status-chip">
                    <span className="status-chip-icon">
                      <IconClock className="icon-pending" />
                      <IconCheck className="icon-cumple" />
                    </span>
                    <span className="status-chip-text">
                      <span className="text-pending">En revisión</span>
                      <span className="text-cumple">Cumple</span>
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="sobre-nosotros" aria-labelledby="about-heading">
          <div className="wrap about-inner">
            <h2 id="about-heading">
              Asesoría técnica para proveedores que ofertan al Estado.
            </h2>
            <p className="section-lede">
              GECOP EXPERT acompaña a proveedores del sector público en la elaboración de ofertas
              y en los procesos de contratación pública, de principio a fin. Traducimos el pliego
              a un plan de trabajo claro, y nos quedamos junto al proceso hasta conocer el
              resultado — porque el track record, no el discurso, es lo que demuestra que un
              proceso se puede ganar.
            </p>
          </div>
        </section>

        <section className="section services" id="servicios" aria-labelledby="services-heading">
          <div className="wrap">
            <h2 id="services-heading">Lo que cubrimos por ti</h2>
            <div className="service-rows">
              {SERVICE_ROWS.map((row) => (
                <article className="service-row" key={row.code}>
                  <span className="matrix-code service-code">{row.code}</span>
                  <div className="service-row-body">
                    <h3>{row.label}</h3>
                    <p>{row.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section ledger" id="resultados" aria-labelledby="ledger-heading">
          <div className="wrap">
            <h2 id="ledger-heading">El track record es la prueba, no la promesa.</h2>
            <ul className="ledger-list">
              {LEDGER_ENTRIES.map((entry) => (
                <li className="ledger-entry" key={entry.title}>
                  <IconCheck className="ledger-check" />
                  <div>
                    <h3>{entry.title}</h3>
                    <p>{entry.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section contact" id="contacto" aria-labelledby="contact-heading">
          <div className="wrap contact-inner">
            <div className="contact-intro">
              <h2 id="contact-heading">Agenda tu cita</h2>
              <p className="section-lede">
                Cuéntanos qué proceso tienes entre manos. Te contactamos para agendar tu
                asesoría.
              </p>

              <ul className="contact-facts">
                <li>
                  <IconPhone className="contact-fact-icon" />
                  <a href="tel:+593982476489">0982 476 489</a>
                </li>
                <li>
                  <IconMail className="contact-fact-icon" />
                  <a href="mailto:gecopexpert@gmail.com">gecopexpert@gmail.com</a>
                </li>
                <li>
                  <IconPin className="contact-fact-icon" />
                  <span>Pilanquí del BEV, Pasaje B 5-78 y Carlos Emilio Grijalva</span>
                </li>
              </ul>

              <a className="btn btn-whatsapp btn-block" href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
                <IconWhatsapp className="btn-icon" />
                Prefiero escribir por WhatsApp
              </a>
            </div>

            <div className="contact-form-panel">
              {status === 'submitted' ? (
                <div className="form-success" role="status">
                  <span className="status-chip">
                    <span className="status-chip-icon status-chip-icon-static">
                      <IconCheck className="icon-cumple-solo" />
                    </span>
                    <span className="status-chip-text">
                      <span className="text-cumple-static">Solicitud enviada</span>
                    </span>
                  </span>
                  <p>Nos pondremos en contacto contigo.</p>
                  <button type="button" className="btn btn-secondary" onClick={() => setStatus('idle')}>
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="field">
                    <label htmlFor="nombre">Nombre</label>
                    <input id="nombre" name="nombre" type="text" autoComplete="name" required />
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="telefono">Teléfono</label>
                      <input id="telefono" name="telefono" type="tel" autoComplete="tel" required />
                    </div>
                    <div className="field">
                      <label htmlFor="ruc">RUC</label>
                      <input id="ruc" name="ruc" type="text" inputMode="numeric" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="correo">Correo electrónico</label>
                    <input id="correo" name="correo" type="email" autoComplete="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="solicitud">Solicitud</label>
                    <textarea
                      id="solicitud"
                      name="solicitud"
                      rows={4}
                      placeholder="Cuéntanos brevemente qué proceso o duda tienes."
                    />
                  </div>

                  {error && (
                    <p className="form-error" role="alert">
                      {error}
                    </p>
                  )}

                  <button type="submit" className="btn btn-primary btn-block" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Enviando…' : 'Enviar solicitud'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <span className="brand">
              <span className="brand-mark" aria-hidden="true">
                <IconCheck className="brand-mark-icon" />
              </span>
              <span className="wordmark">
                GECOP <em>EXPERT</em>
              </span>
            </span>
            <p>Tu aliado técnico en procesos del sector público.</p>
          </div>
          <div className="footer-col">
            <h3>Contacto</h3>
            <a href="tel:+593982476489">0982 476 489</a>
            <a href="mailto:gecopexpert@gmail.com">gecopexpert@gmail.com</a>
            <span>Pilanquí del BEV, Pasaje B 5-78 y Carlos Emilio Grijalva</span>
          </div>
          <div className="footer-col">
            <h3>Horario de atención</h3>
            <span>Lunes a viernes · 08:00–18:00</span>
            <span>Sábados · 09:00–14:00</span>
          </div>
        </div>
        <div className="wrap footer-legal">
          <span>© {new Date().getFullYear()} GECOP EXPERT. Todos los derechos reservados.</span>
        </div>
      </footer>
    </>
  )
}

export default App
