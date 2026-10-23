import { useRef } from 'react'
import { useScrollReveal } from '../lib/useScrollReveal'

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef, '.about-lede')

  return (
    <section className="section about" id="sobre-nosotros" aria-labelledby="about-heading" ref={sectionRef}>
      <div className="wrap section-split">
        <h2 id="about-heading">Asesoría técnica para proveedores que ofertan al Estado.</h2>
        <p className="section-lede about-lede">
          GECOP EXPERT acompaña a proveedores del sector público en la elaboración de ofertas
          y en los procesos de contratación pública, de principio a fin. Traducimos el pliego
          a un plan de trabajo claro, y nos quedamos junto al proceso hasta conocer el
          resultado — porque el track record, no el discurso, es lo que demuestra que un
          proceso se puede ganar.
        </p>
      </div>
    </section>
  )
}
