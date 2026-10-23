import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { IconArrow, IconClock, IconWhatsapp } from '../Icons'
import { addLineReveal, EASE_INK, gsap, prefersReducedMotion } from '../lib/gsap'
import { WHATSAPP_HREF } from '../lib/constants'
import { Matrix } from './Matrix'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    (_context, contextSafe) => {
      if (prefersReducedMotion() || !sectionRef.current || !contextSafe) return

      const heading = sectionRef.current.querySelector('h1')
      const copyTargets = sectionRef.current.querySelectorAll('.hero-copy > :not(h1)')
      const matrixTarget = sectionRef.current.querySelector('.matrix')

      if (heading) gsap.set(heading, { opacity: 0 })
      gsap.set(copyTargets, { opacity: 0, y: 18 })
      if (matrixTarget) gsap.set(matrixTarget, { opacity: 0, y: 40, scale: 0.97, filter: 'blur(8px)' })

      document.fonts.ready.then(
        contextSafe(() => {
          const tl = gsap.timeline({ defaults: { ease: EASE_INK } })
          if (heading) addLineReveal(tl, heading)
          tl.to(copyTargets, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 }, '-=0.55')
          if (matrixTarget) {
            tl.to(matrixTarget, { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 1.1 }, 0.25)
            tl.set(matrixTarget, { clearProps: 'filter,transform' })
          }
        }),
      )
    },
    { scope: sectionRef },
  )

  return (
    <section className="hero" aria-labelledby="hero-heading" ref={sectionRef}>
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
          <p className="hero-meta">
            <IconClock className="hero-meta-icon" />
            Lunes a viernes 08:00–18:00 · Sábados 09:00–14:00
          </p>
        </div>

        <Matrix />
      </div>
    </section>
  )
}
