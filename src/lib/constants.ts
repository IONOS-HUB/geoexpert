export const CONTACT_PHONE_DISPLAY = '0982 476 489'
export const CONTACT_PHONE_HREF = 'tel:+593982476489'
export const CONTACT_EMAIL = 'gecopexpert@gmail.com'
export const CONTACT_ADDRESS = 'Ibarra: Pilanquí BEV, Pasaje B 5-78 y Carlos Emilio Grijalva'

export const WHATSAPP_NUMBER = '593982476489'
export const WHATSAPP_MESSAGE = 'Hola GECOP EXPERT, quisiera agendar una asesoría.'
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const CONTACT_FORM_WEBHOOK_URL = 'https://n8n.ionoshub.net/webhook/form-gecopexpert'
export const CONTACT_FORM_API_KEY = import.meta.env.VITE_CONTACT_FORM_API_KEY as string

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
    label: 'Seguridad y vigilancia',
    desc: 'Asesoría en subasta inversa y catálogo electrónico para proveedores de seguridad y vigilancia: preparación de la oferta, revisión frente al pliego y seguimiento hasta la adjudicación.',
  },
  {
    code: 'SRV-02',
    label: 'Limpieza',
    desc: 'Acompañamiento en catálogo dinámico inclusivo y demás modalidades para servicios de limpieza, con foco en requisitos técnicos, documentación y presentación oportuna de la oferta.',
  },
  {
    code: 'SRV-03',
    label: 'Implementos para policía montada',
    desc: 'Elaboración y revisión de ofertas en procesos de subasta inversa para implementos de policía montada, alineando capacidad técnica y propuesta económica al pliego.',
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

export const DOCUMENT_ROWS = [
  {
    code: 'DOC-01',
    kind: 'Convenio marco',
    label: 'Seguridad y vigilancia',
    desc: 'Catálogo electrónico general',
    file: '/docs/CONVENIO MARCO EOTSWAG.pdf',
  },
  {
    code: 'DOC-02',
    kind: 'Convenio marco',
    label: 'Limpieza',
    desc: 'Catálogo dinámico inclusivo',
    file: '/docs/Convenio Marco Golden Clean.pdf',
  },
  {
    code: 'DOC-03',
    kind: 'Resumen de puja',
    label: 'Seguridad',
    desc: 'Subasta inversa',
    file: '/docs/Resumen de Puja BH SEC.pdf',
  },
  {
    code: 'DOC-04',
    kind: 'Resumen de puja',
    label: 'Implementos policía montada',
    desc: 'Subasta inversa',
    file: '/docs/Resumen de Puja IVALKA.pdf',
  },
  {
    code: 'DOC-05',
    kind: 'Adjudicación',
    label: 'Seguridad',
    desc: 'Proceso adjudicado',
    file: '/docs/Adjudicacion BHSEC.pdf',
  },
] as const
