import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { IconCheck, IconClock } from '../Icons'
import { MATRIX_ROWS } from '../lib/constants'
import { gsap, prefersReducedMotion } from '../lib/gsap'

export function Matrix() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return
      const chips = containerRef.current.querySelectorAll('.status-chip')

      if (prefersReducedMotion()) {
        chips.forEach((chip) => {
          chip.classList.add('is-cumple')
          gsap.set(chip.querySelectorAll('.icon-pending, .text-pending'), { opacity: 0 })
          gsap.set(chip.querySelectorAll('.icon-cumple, .text-cumple'), { opacity: 1 })
        })
        return
      }

      chips.forEach((chip, i) => {
        const tl = gsap.timeline({ delay: 0.5 + i * 0.45 })
        tl.to(chip.querySelectorAll('.icon-pending, .text-pending'), {
          opacity: 0,
          duration: 0.25,
          ease: 'power1.out',
        })
          .to(
            chip.querySelectorAll('.icon-cumple, .text-cumple'),
            { opacity: 1, duration: 0.25, ease: 'power1.out' },
            '<',
          )
          .call(() => chip.classList.add('is-cumple'), undefined, '<')
      })
    },
    { scope: containerRef },
  )

  return (
    <div
      className="matrix"
      role="img"
      aria-label="Cuatro requisitos de un proceso de contratación pública, todos marcados como CUMPLE"
      ref={containerRef}
    >
      <div className="matrix-head">
        <span>Requisito</span>
        <span>Estado</span>
      </div>
      {MATRIX_ROWS.map((row) => (
        <div className="matrix-row" key={row.code}>
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
  )
}
