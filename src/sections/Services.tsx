import { SERVICE_ROWS } from '../lib/constants'

export function Services() {
  return (
    <section className="section services" id="servicios" aria-labelledby="services-heading">
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
