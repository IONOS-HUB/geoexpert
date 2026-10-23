import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { IconCheck, IconClock } from '../Icons'
import { MATRIX_ROWS } from '../lib/constants'
import { EASE_INK, gsap, prefersReducedMotion } from '../lib/gsap'
import { Mascot } from './Mascot'

/** Arm angle (deg, around the shoulder) while the stamp is raised. */
const ARM_RAISED = -78

export function Matrix() {
  const stageRef = useRef<HTMLDivElement>(null)

  useGSAP(
    (_context, contextSafe) => {
      if (!stageRef.current || !contextSafe) return
      const stage = stageRef.current
      const container = stage.querySelector<HTMLElement>('.matrix')
      const chips = stage.querySelectorAll('.status-chip')
      const count = stage.querySelector('.matrix-tally-count')
      const bar = stage.querySelector('.matrix-tally-bar')
      const mascot = stage.querySelector<SVGSVGElement>('.mascot')
      const arm = stage.querySelector('.mascot-arm')
      const body = stage.querySelector('.mascot-body')
      const pupils = stage.querySelector('.mascot-pupils')
      const lids = stage.querySelector('.mascot-lids')
      const ink = stage.querySelector('.mascot-ink')

      const setTally = (done: number) => {
        if (count) count.textContent = String(done)
        if (done === chips.length) container?.classList.add('is-complete')
      }

      gsap.set(arm, { svgOrigin: '92 80', rotation: ARM_RAISED })
      gsap.set(body, { svgOrigin: '59 112' })
      gsap.set(lids, { svgOrigin: '59 66' })

      if (prefersReducedMotion()) {
        chips.forEach((chip) => {
          chip.classList.add('is-cumple')
          gsap.set(chip.querySelectorAll('.icon-pending, .text-pending'), { opacity: 0 })
          gsap.set(chip.querySelectorAll('.icon-cumple, .text-cumple'), { opacity: 1 })
        })
        if (bar) gsap.set(bar, { scaleX: 1 })
        setTally(chips.length)
        return
      }

      /** One stamp: wind up, slam down, squash, ink burst, recover. */
      const stampPress = () =>
        gsap
          .timeline()
          .to(arm, { rotation: ARM_RAISED - 14, duration: 0.16, ease: 'power2.out' })
          .to(arm, { rotation: 4, duration: 0.14, ease: 'power3.in' })
          .addLabel('impact')
          .to(body, { scaleY: 0.9, scaleX: 1.06, duration: 0.08, ease: 'power2.out' }, 'impact')
          .to(body, { scaleY: 1, scaleX: 1, duration: 0.6, ease: 'elastic.out(1, 0.45)' }, 'impact+=0.08')
          .fromTo(ink, { opacity: 1, scale: 0.6, svgOrigin: '114 124' }, { scale: 1.25, opacity: 0, duration: 0.4, ease: EASE_INK }, 'impact')
          .to(arm, { rotation: ARM_RAISED, duration: 0.55, ease: EASE_INK }, 'impact+=0.12')

      const blink = () =>
        gsap.timeline().to(lids, { scaleY: 0.1, duration: 0.07, ease: 'power1.in' }).to(lids, { scaleY: 1, duration: 0.12 })

      // Arrival: the advisor drops onto the card and lands with a squash.
      const master = gsap.timeline({ delay: 0.75 })
      master
        .from(mascot, { y: -36, opacity: 0, duration: 0.42, ease: 'power2.in' })
        .to(body, { scaleY: 0.88, scaleX: 1.08, duration: 0.08 })
        .to(body, { scaleY: 1, scaleX: 1, duration: 0.7, ease: 'elastic.out(1, 0.4)' })
        .add(blink(), '-=0.3')

      chips.forEach((chip, i) => {
        const row = chip.closest('.matrix-row')
        const at = 1.55 + i * 0.75
        const press = stampPress()
        const impact = at + (press.labels.impact ?? 0.3)

        // Look toward the row about to be stamped.
        master.to(pupils, { x: -2.2, y: 1 + i * 0.7, duration: 0.25, ease: 'power2.out' }, at - 0.15)
        master.add(press, at)

        master
          .to(chip, { scale: 1.1, duration: 0.08, ease: 'power2.out' }, impact)
          .to(chip, { scale: 1, duration: 0.5, ease: EASE_INK }, impact + 0.08)
          .to(chip.querySelectorAll('.icon-pending, .text-pending'), { opacity: 0, duration: 0.15 }, impact)
          .to(chip.querySelectorAll('.icon-cumple, .text-cumple'), { opacity: 1, duration: 0.2 }, impact)
          .call(
            () => {
              chip.classList.add('is-cumple')
              setTally(i + 1)
            },
            undefined,
            impact,
          )
        if (row) {
          master.fromTo(
            row,
            { backgroundColor: 'rgba(242, 226, 229, 0)' },
            { backgroundColor: 'rgba(242, 226, 229, 0.9)', duration: 0.12, yoyo: true, repeat: 1, repeatDelay: 0.3 },
            impact,
          )
        }
        if (bar) master.to(bar, { scaleX: (i + 1) / chips.length, duration: 0.7, ease: EASE_INK }, impact)
      })

      // Done: look back at the visitor, blink, then follow the pointer.
      master.to(pupils, { x: 0, y: 0, duration: 0.4, ease: EASE_INK }, '+=0.2').add(blink(), '+=0.4')

      if (!window.matchMedia('(pointer: fine)').matches || !mascot || !pupils) return

      const lookX = gsap.quickTo(pupils, 'x', { duration: 0.4, ease: 'power3.out' })
      const lookY = gsap.quickTo(pupils, 'y', { duration: 0.4, ease: 'power3.out' })
      const onPointerMove = contextSafe((event: PointerEvent) => {
        if (master.isActive()) return
        const box = mascot.getBoundingClientRect()
        const dx = event.clientX - (box.left + box.width * 0.42)
        const dy = event.clientY - (box.top + box.height * 0.5)
        const distance = Math.hypot(dx, dy) || 1
        lookX((dx / distance) * 2.4)
        lookY((dy / distance) * 2)
      })

      // A hello-stamp when the visitor reaches for the advisor.
      let pressing: gsap.core.Timeline | null = null
      const onPointerEnter = contextSafe(() => {
        if (master.isActive() || pressing?.isActive()) return
        pressing = stampPress()
      })

      window.addEventListener('pointermove', onPointerMove, { passive: true })
      mascot.addEventListener('pointerenter', onPointerEnter)
      return () => {
        window.removeEventListener('pointermove', onPointerMove)
        mascot.removeEventListener('pointerenter', onPointerEnter)
      }
    },
    { scope: stageRef },
  )

  return (
    <div className="matrix-stage" ref={stageRef}>
      <Mascot />
      <div
        className="matrix"
        role="img"
        aria-label="Cuatro requisitos de un proceso de contratación pública, todos marcados como CUMPLE"
      >
        <div className="matrix-title">
          <span className="matrix-title-label">Matriz de cumplimiento</span>
          <span className="matrix-code">Proceso de contratación pública</span>
        </div>
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
        <div className="matrix-tally" aria-hidden="true">
          <span className="matrix-tally-text">
            <span className="matrix-tally-count">0</span> de {MATRIX_ROWS.length} requisitos cumplen
          </span>
          <span className="matrix-tally-track">
            <span className="matrix-tally-bar" />
          </span>
        </div>
      </div>
    </div>
  )
}
