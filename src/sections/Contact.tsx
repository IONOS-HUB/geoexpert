import { type FormEvent, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { IconCheck, IconMail, IconPhone, IconPin, IconWhatsapp } from '../Icons'
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_FORM_API_KEY,
  CONTACT_FORM_WEBHOOK_URL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  WHATSAPP_HREF,
} from '../lib/constants'
import { useScrollReveal } from '../lib/useScrollReveal'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^\+?[0-9\s\-()]{7,20}$/
const RUC_REGEX = /^\d{10,13}$/

type FormStatus = 'idle' | 'submitting' | 'submitted'

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error, setError] = useState<string | null>(null)
  const [invalidFields, setInvalidFields] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)
  const nombreRef = useRef<HTMLInputElement>(null)
  const telefonoRef = useRef<HTMLInputElement>(null)
  const rucRef = useRef<HTMLInputElement>(null)
  const correoRef = useRef<HTMLInputElement>(null)
  const consentRef = useRef<HTMLInputElement>(null)
  useScrollReveal(sectionRef, '.contact-intro, .contact-form-panel')

  function handleFieldChange(field: string) {
    if (invalidFields.has(field)) {
      setInvalidFields((prev) => {
        const next = new Set(prev)
        next.delete(field)
        return next
      })
      if (invalidFields.size <= 1) {
        setError(null)
      }
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const nombre = String(data.get('nombre') ?? '').trim()
    const telefono = String(data.get('telefono') ?? '').trim()
    const correo = String(data.get('correo') ?? '').trim()
    const rucRaw = String(data.get('ruc') ?? '').trim()
    const ruc = rucRaw.replace(/\s+/g, '')
    const solicitud = String(data.get('solicitud') ?? '').trim()
    const consentimiento = data.get('consentimiento') === 'on'

    const phoneDigits = telefono.replace(/\D/g, '')
    const isPhoneValid = Boolean(telefono) && PHONE_REGEX.test(telefono) && phoneDigits.length >= 7 && phoneDigits.length <= 15
    const isEmailValid = Boolean(correo) && EMAIL_REGEX.test(correo)
    const isRucValid = !ruc || RUC_REGEX.test(ruc)

    const invalid = new Set<string>()
    if (!nombre) invalid.add('nombre')
    if (!isPhoneValid) invalid.add('telefono')
    if (!isEmailValid) invalid.add('correo')
    if (!isRucValid) invalid.add('ruc')
    if (!consentimiento) invalid.add('consentimiento')

    if (invalid.size > 0) {
      setInvalidFields(invalid)

      let message = 'Por favor completa y corrige los campos marcados.'
      if (!nombre && !telefono && !correo) {
        message = 'Completa nombre, teléfono y correo para enviar tu solicitud.'
      } else if (!nombre) {
        message = 'Por favor ingresa tu nombre.'
      } else if (!telefono) {
        message = 'Por favor ingresa tu número de teléfono.'
      } else if (!isPhoneValid) {
        message = 'El teléfono debe contener solo números válidos (mínimo 7 dígitos).'
      } else if (!correo) {
        message = 'Por favor ingresa tu correo electrónico.'
      } else if (!isEmailValid) {
        message = 'Ingresa un correo electrónico válido (debe contener "@" y un dominio como ej. usuario@correo.com).'
      } else if (!isRucValid) {
        message = 'El RUC debe contener solo números (10 a 13 dígitos).'
      } else if (!consentimiento) {
        message = 'Debes aceptar la Política de Protección de Datos para continuar.'
      }

      setError(message)

      const firstInvalidRef = invalid.has('nombre')
        ? nombreRef
        : invalid.has('telefono')
          ? telefonoRef
          : invalid.has('ruc')
            ? rucRef
            : invalid.has('correo')
              ? correoRef
              : consentRef

      firstInvalidRef.current?.focus()
      return
    }

    setInvalidFields(new Set())
    setError(null)
    setStatus('submitting')

    try {
      const response = await fetch(CONTACT_FORM_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': CONTACT_FORM_API_KEY,
        },
        body: JSON.stringify({ nombre, telefono, correo, ruc, solicitud }),
      })

      if (!response.ok) throw new Error(`Webhook respondió ${response.status}`)

      setStatus('submitted')
      form.reset()
    } catch {
      setStatus('idle')
      setError('No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.')
    }
  }

  return (
    <section className="section contact" id="contacto" aria-labelledby="contact-heading" ref={sectionRef}>
      <div className="wrap contact-inner">
        <div className="contact-intro">
          <h2 id="contact-heading">Agenda tu cita</h2>
          <p className="section-lede">
            Cuéntanos qué proceso tienes entre manos. Te contactamos para agendar tu asesoría.
          </p>

          <ul className="contact-facts">
            <li>
              <IconPhone className="contact-fact-icon" />
              <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE_DISPLAY}</a>
            </li>
            <li>
              <IconMail className="contact-fact-icon" />
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <IconPin className="contact-fact-icon" />
              <span>{CONTACT_ADDRESS}</span>
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
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  required
                  ref={nombreRef}
                  aria-invalid={invalidFields.has('nombre') || undefined}
                  aria-describedby={invalidFields.has('nombre') ? 'form-error' : undefined}
                  onChange={() => handleFieldChange('nombre')}
                />
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    autoComplete="tel"
                    required
                    ref={telefonoRef}
                    aria-invalid={invalidFields.has('telefono') || undefined}
                    aria-describedby={invalidFields.has('telefono') ? 'form-error' : undefined}
                    onChange={() => handleFieldChange('telefono')}
                  />
                </div>
                <div className="field">
                  <label htmlFor="ruc">
                    RUC <span className="field-optional">(opcional)</span>
                  </label>
                  <input
                    id="ruc"
                    name="ruc"
                    type="text"
                    inputMode="numeric"
                    maxLength={13}
                    ref={rucRef}
                    aria-invalid={invalidFields.has('ruc') || undefined}
                    aria-describedby={invalidFields.has('ruc') ? 'form-error' : undefined}
                    onChange={() => handleFieldChange('ruc')}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="correo">Correo electrónico</label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  autoComplete="email"
                  required
                  ref={correoRef}
                  aria-invalid={invalidFields.has('correo') || undefined}
                  aria-describedby={invalidFields.has('correo') ? 'form-error' : undefined}
                  onChange={() => handleFieldChange('correo')}
                />
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

              <div className="field field-consent">
                <label htmlFor="consentimiento" className="consent-label">
                  <input
                    id="consentimiento"
                    name="consentimiento"
                    type="checkbox"
                    ref={consentRef}
                    aria-invalid={invalidFields.has('consentimiento') || undefined}
                    aria-describedby={invalidFields.has('consentimiento') ? 'form-error' : undefined}
                    onChange={() => handleFieldChange('consentimiento')}
                  />
                  <span>
                    He leído y acepto la{' '}
                    <Link to="/politica-de-privacidad" target="_blank" rel="noreferrer">
                      Política de Protección de Datos
                    </Link>
                  </span>
                </label>
              </div>

              {error && (
                <p id="form-error" className="form-error" role="alert">
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
