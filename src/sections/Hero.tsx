import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { IconArrow, IconWhatsapp } from '../Icons'
import { gsap, prefersReducedMotion } from '../lib/gsap'
import { WHATSAPP_HREF } from '../lib/constants'
import { Matrix } from './Matrix'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion() || !sectionRef.current) return

      const copyTargets = sectionRef.current.querySelectorAll('.hero-copy > *')
      const matrixTarget = sectionRef.current.querySelector('.matrix')

      gsap.set(copyTargets, { opacity: 0, y: 16 })
      if (matrixTarget) gsap.set(matrixTarget, { opacity: 0, y: 16 })

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
      tl.to(copyTargets, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 })
      if (matrixTarget) tl.to(matrixTarget, { opacity: 1, y: 0, duration: 0.4 }, '-=0.25')
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
        </div>

        <Matrix />
      </div>
    </section>
  )
}
