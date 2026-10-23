import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { IconCheck } from '../Icons'
import { LEDGER_ENTRIES } from '../lib/constants'
import { EASE_INK, gsap, prefersReducedMotion } from '../lib/gsap'
import { useScrollReveal } from '../lib/useScrollReveal'

export function TrackRecord() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef, '.ledger-entry', 'wipe')

  useGSAP(
    () => {
      if (prefersReducedMotion() || !sectionRef.current) return
      const checks = sectionRef.current.querySelectorAll('.ledger-check')
      gsap.from(checks, {
        scale: 1.8,
        opacity: 0,
        rotate: -14,
        duration: 0.7,
        ease: EASE_INK,
        stagger: 0.14,
        delay: 0.7,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section className="section ledger" id="resultados" aria-labelledby="ledger-heading" ref={sectionRef}>
      <div className="wrap section-split">
        <div className="section-head">
          <h2 id="ledger-heading">El track record es la prueba, no la promesa.</h2>
        </div>
        <ul className="ledger-list">
          {LEDGER_ENTRIES.map((entry) => (
            <li className="ledger-entry" key={entry.title}>
              <span className="ledger-check" aria-hidden="true">
                <IconCheck />
              </span>
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
