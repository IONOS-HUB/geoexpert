import { IconCheck } from '../Icons'
import { LEDGER_ENTRIES } from '../lib/constants'

export function TrackRecord() {
  return (
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
  )
}
