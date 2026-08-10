import { type FormEvent, useState } from 'react'
import { IconCheck, IconMail, IconPhone, IconPin, IconWhatsapp } from '../Icons'
import { WHATSAPP_HREF } from '../lib/constants'

type FormStatus = 'idle' | 'submitting' | 'submitted'

export function Contact() {
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
    <section className="section contact" id="contacto" aria-labelledby="contact-heading">
      <div className="wrap contact-inner">
        <div className="contact-intro">
          <h2 id="contact-heading">Agenda tu cita</h2>
          <p className="section-lede">
            Cuéntanos qué proceso tienes entre manos. Te contactamos para agendar tu asesoría.
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
  )
}
