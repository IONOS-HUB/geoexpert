import { useRef } from 'react'
import { useScrollReveal } from '../lib/useScrollReveal'

const GALLERY_ITEMS = [
  {
    caption: 'Documentación técnica',
    label: 'Documentos ordenados y verificados antes de cada entrega',
    Art: () => (
      <svg viewBox="0 0 300 400" role="img" aria-hidden="true">
        <rect x="70" y="40" width="160" height="200" rx="4" fill="none" stroke="var(--paper)" strokeWidth="2" opacity="0.5" />
        <rect x="90" y="60" width="160" height="200" rx="4" fill="none" stroke="var(--paper)" strokeWidth="2" opacity="0.75" />
        <rect x="110" y="80" width="160" height="200" rx="4" fill="var(--ink)" stroke="var(--paper)" strokeWidth="2" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line
            key={i}
            x1="130"
            y1={110 + i * 24}
            x2={i === 5 ? 210 : 250}
            y2={110 + i * 24}
            stroke="var(--paper)"
            strokeWidth="3"
            opacity={i === 0 ? 1 : 0.55}
          />
        ))}
      </svg>
    ),
  },
  {
    caption: 'Revisión de pliegos',
    label: 'Cada requisito del pliego marcado punto por punto',
    Art: () => (
      <svg viewBox="0 0 300 400" role="img" aria-hidden="true">
        <rect x="80" y="70" width="140" height="260" rx="4" fill="var(--ink)" stroke="var(--paper)" strokeWidth="2" />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} opacity={i < 3 ? 1 : 0.4}>
            <rect x="102" y={110 + i * 42} width="14" height="14" rx="3" fill="none" stroke="var(--paper)" strokeWidth="2" />
            {i < 3 && (
              <path
                d={`M 105 ${117 + i * 42} l 4 5 l 8 -9`}
                fill="none"
                stroke="var(--paper)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
            <line x1="128" y1={117 + i * 42} x2="196" y2={117 + i * 42} stroke="var(--paper)" strokeWidth="3" opacity="0.6" />
          </g>
        ))}
      </svg>
    ),
  },
  {
    caption: 'Seguimiento del proceso',
    label: 'Acompañamiento desde el pliego hasta el resultado',
    Art: () => (
      <svg viewBox="0 0 300 400" role="img" aria-hidden="true">
        <line x1="90" y1="200" x2="210" y2="200" stroke="var(--paper)" strokeWidth="2" opacity="0.5" />
        {[90, 150, 210].map((cx, i) => (
          <g key={cx}>
            <circle cx={cx} cy="200" r="12" fill={i === 2 ? 'none' : 'var(--ink)'} stroke="var(--paper)" strokeWidth="2.5" />
            {i < 2 && <circle cx={cx} cy="200" r="4" fill="var(--paper)" />}
          </g>
        ))}
        <text x="90" y="170" textAnchor="middle" fill="var(--paper)" fontSize="11" opacity="0.7" fontFamily="var(--font-mono)">
          01
        </text>
        <text x="150" y="170" textAnchor="middle" fill="var(--paper)" fontSize="11" opacity="0.7" fontFamily="var(--font-mono)">
          02
        </text>
        <text x="210" y="170" textAnchor="middle" fill="var(--paper)" fontSize="11" opacity="0.7" fontFamily="var(--font-mono)">
          03
        </text>
      </svg>
    ),
  },
  {
    caption: 'Presentación de la oferta',
    label: 'La oferta sale completa, correcta y a tiempo',
    Art: () => (
      <svg viewBox="0 0 300 400" role="img" aria-hidden="true">
        <rect x="80" y="90" width="140" height="180" rx="4" fill="var(--ink)" stroke="var(--paper)" strokeWidth="2" />
        <line x1="102" y1="130" x2="198" y2="130" stroke="var(--paper)" strokeWidth="3" opacity="0.6" />
        <line x1="102" y1="152" x2="198" y2="152" stroke="var(--paper)" strokeWidth="3" opacity="0.6" />
        <line x1="102" y1="174" x2="170" y2="174" stroke="var(--paper)" strokeWidth="3" opacity="0.6" />
        <path
          d="M 100 235 C 115 215, 125 250, 140 225 C 150 210, 158 240, 172 220 C 180 210, 188 228, 198 218"
          fill="none"
          stroke="var(--paper)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef, '.gallery-item')

  return (
    <section className="section gallery" id="galeria" aria-labelledby="gallery-heading" ref={sectionRef}>
      <div className="wrap">
        <h2 id="gallery-heading">El trabajo detrás de cada oferta</h2>
        <div className="gallery-grid">
          {GALLERY_ITEMS.map(({ caption, label, Art }) => (
            <figure className="gallery-item" key={caption} aria-label={label}>
              <Art />
              <figcaption className="gallery-caption">{caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
