import { useRef } from 'react'
import { IconCheck } from '../Icons'
import { LEDGER_ENTRIES } from '../lib/constants'
import { useScrollReveal } from '../lib/useScrollReveal'

export function TrackRecord() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef, '.ledger-entry')

  return (
    <section className="section ledger" id="resultados" aria-labelledby="ledger-heading" ref={sectionRef}>
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
  )
}
