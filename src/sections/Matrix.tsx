import type { CSSProperties } from 'react'
import { IconCheck, IconClock } from '../Icons'
import { MATRIX_ROWS } from '../lib/constants'

export function Matrix() {
  return (
    <div
      className="matrix"
      role="img"
      aria-label="Cuatro requisitos de un proceso de contratación pública, todos marcados como CUMPLE"
    >
      <div className="matrix-head">
        <span>Requisito</span>
        <span>Estado</span>
      </div>
      {MATRIX_ROWS.map((row, i) => (
        <div
          className="matrix-row"
          key={row.code}
          style={{ '--delay': `${0.35 + i * 0.5}s` } as CSSProperties}
        >
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
