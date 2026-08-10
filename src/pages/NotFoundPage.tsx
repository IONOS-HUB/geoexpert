import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="section not-found" aria-labelledby="not-found-heading">
      <div className="wrap">
        <span className="matrix-code">ERR-404</span>
        <h1 id="not-found-heading">Esta página no está en el expediente.</h1>
        <p className="section-lede">
          La dirección que buscas no existe o fue movida. Vuelve al inicio para continuar.
        </p>
        <Link className="btn btn-primary" to="/">
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
