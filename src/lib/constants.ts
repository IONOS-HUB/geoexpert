export const WHATSAPP_NUMBER = '593982476489'
export const WHATSAPP_MESSAGE = 'Hola GECOP EXPERT, quisiera agendar una asesoría.'
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const MATRIX_ROWS = [
  {
    code: 'REQ-01',
    label: 'Habilitación legal',
    desc: 'Documentos y requisitos formales presentados en regla.',
  },
  {
    code: 'REQ-02',
    label: 'Capacidad técnica',
    desc: 'Experiencia y respaldo técnico verificados frente al pliego.',
  },
  {
    code: 'REQ-03',
    label: 'Oferta económica',
    desc: 'Propuesta ajustada al presupuesto referencial del proceso.',
  },
  {
    code: 'REQ-04',
    label: 'Experiencia acreditada',
    desc: 'Trayectoria y procesos previos respaldados con soporte.',
  },
]

export const SERVICE_ROWS = [
  {
    code: 'SRV-01',
    label: 'Asesoría en procesos de contratación pública',
    desc: 'Acompañamiento técnico en cada etapa del proceso: desde la lectura del pliego y la resolución de dudas normativas, hasta la presentación de la oferta ante la entidad contratante.',
  },
  {
    code: 'SRV-02',
    label: 'Resultados en los procesos',
    desc: 'Seguimiento cercano de cada proceso que acompañamos, con foco en que la oferta llegue completa, correcta y a tiempo — el criterio que decide si un proceso se gana o se pierde.',
  },
]

export const LEDGER_ENTRIES = [
  {
    title: 'Acompañamiento desde el primer pliego',
    body: 'No entregamos una plantilla: revisamos cada proceso con el proveedor, punto por punto, antes de que la oferta salga de sus manos.',
  },
  {
    title: 'Seguimiento hasta el cierre del proceso',
    body: 'El trabajo no termina al presentar la oferta. Damos seguimiento a cada etapa hasta conocer el resultado del proceso.',
  },
  {
    title: 'Un aliado técnico, no un formulario',
    body: 'Cada consulta se atiende de forma directa y personal — la misma cercanía que esperarías de un asesor de confianza, aplicada a la contratación pública.',
  },
]

export const GALLERY_IMAGES = [
  {
    src: '/images/gallery/documentos.jpg',
    alt: 'Documentos de un proceso de contratación pública ordenados sobre un escritorio',
    caption: 'Documentación técnica',
  },
  {
    src: '/images/gallery/revision.jpg',
    alt: 'Persona revisando un pliego de condiciones impreso',
    caption: 'Revisión de pliegos',
  },
  {
    src: '/images/gallery/oficina.jpg',
    alt: 'Espacio de trabajo con laptop y carpetas de proceso',
    caption: 'Seguimiento del proceso',
  },
  {
    src: '/images/gallery/firma.jpg',
    alt: 'Firma de una oferta técnica sobre una mesa de trabajo',
    caption: 'Presentación de la oferta',
  },
]
