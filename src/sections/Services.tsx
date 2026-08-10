import { useRef } from 'react'
import { SERVICE_ROWS } from '../lib/constants'
import { useScrollReveal } from '../lib/useScrollReveal'

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef, '.service-row')

  return (
    <section className="section services" id="servicios" aria-labelledby="services-heading" ref={sectionRef}>
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
  )
}
