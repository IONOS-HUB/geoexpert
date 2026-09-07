import { useEffect, useId, useRef, useState } from 'react'
import { IconChevronLeft, IconChevronRight, IconExternal } from '../Icons'
import { DOCUMENT_ROWS } from '../lib/constants'
import { useScrollReveal } from '../lib/useScrollReveal'

function encodeDocPath(file: string) {
  return file
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/')
    .replace(/%2F/g, '/')
}

export function Documents() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const listId = useId()
  useScrollReveal(sectionRef, '.docs-shell')

  const active = DOCUMENT_ROWS[activeIndex]
  const previewSrc = `${encodeDocPath(active.file)}#view=FitH`

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
      if (!sectionRef.current?.contains(document.activeElement)) return

      event.preventDefault()
      setActiveIndex((current) => {
        if (event.key === 'ArrowLeft') {
          return (current - 1 + DOCUMENT_ROWS.length) % DOCUMENT_ROWS.length
        }
        return (current + 1) % DOCUMENT_ROWS.length
      })
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <section className="section docs" id="expedientes" aria-labelledby="docs-heading" ref={sectionRef}>
      <div className="wrap">
        <h2 id="docs-heading">Expedientes de procesos reales</h2>
        <p className="section-lede">
          Convenios marco, resúmenes de puja y adjudicaciones de procesos acompañados. Revisa el
          documento o ábrelo en una pestaña nueva.
        </p>

        <div className="docs-shell">
          <div className="docs-index" role="tablist" aria-label="Documentos del expediente" id={listId}>
            {DOCUMENT_ROWS.map((doc, index) => {
              const selected = index === activeIndex
              return (
                <button
                  key={doc.code}
                  type="button"
                  role="tab"
                  id={`${listId}-${doc.code}`}
                  aria-selected={selected}
                  aria-controls="docs-preview-panel"
                  className={`docs-index-row${selected ? ' is-active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="matrix-code">{doc.code}</span>
                  <span className="docs-index-body">
                    <span className="docs-index-kind">{doc.kind}</span>
                    <span className="docs-index-label">{doc.label}</span>
                    <span className="docs-index-desc">{doc.desc}</span>
                  </span>
                </button>
              )
            })}
          </div>

          <div
            className="docs-preview"
            id="docs-preview-panel"
            role="tabpanel"
            aria-labelledby={`${listId}-${active.code}`}
          >
            <div className="docs-preview-bar">
              <div className="docs-preview-meta">
                <span className="matrix-code">{active.code}</span>
                <div>
                  <p className="docs-preview-kind">{active.kind}</p>
                  <h3 className="docs-preview-title">{active.label}</h3>
                </div>
              </div>

              <div className="docs-preview-actions">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() =>
                    setActiveIndex((current) => (current - 1 + DOCUMENT_ROWS.length) % DOCUMENT_ROWS.length)
                  }
                  aria-label="Documento anterior"
                >
                  <IconChevronLeft className="btn-icon" />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setActiveIndex((current) => (current + 1) % DOCUMENT_ROWS.length)}
                  aria-label="Documento siguiente"
                >
                  <IconChevronRight className="btn-icon" />
                </button>
                <a
                  className="btn btn-secondary btn-sm"
                  href={encodeDocPath(active.file)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir PDF
                  <IconExternal className="btn-icon" />
                </a>
              </div>
            </div>

            <div className="docs-frame-wrap">
              <iframe
                key={active.file}
                className="docs-frame"
                title={`${active.kind}: ${active.label}`}
                src={previewSrc}
              />
              <p className="docs-frame-fallback">
                Si la vista previa no carga en tu dispositivo,{' '}
                <a href={encodeDocPath(active.file)} target="_blank" rel="noreferrer">
                  abre el PDF
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
