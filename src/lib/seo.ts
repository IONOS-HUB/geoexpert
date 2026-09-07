import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
} from './constants'

export const SITE_URL = 'https://gecoexpert.com'
export const SITE_NAME = 'GECOP EXPERT'
export const SITE_LOCALE = 'es_EC'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

export const DEFAULT_DESCRIPTION =
  'Tu aliado técnico en procesos del sector público. Asesoría en contratación pública y elaboración de ofertas para proveedores del Estado en Ecuador.'

export type PageSeo = {
  title: string
  description: string
  path: string
  robots?: string
  type?: 'website' | 'article'
}

export const PAGE_SEO = {
  home: {
    title: 'GECOP EXPERT — Asesoría en contratación pública',
    description: DEFAULT_DESCRIPTION,
    path: '/',
    type: 'website',
  },
  privacy: {
    title: 'Política de Privacidad — GECOP EXPERT',
    description:
      'Cómo GECOP EXPERT trata los datos del formulario de contacto: finalidad, conservación y tus derechos.',
    path: '/politica-de-privacidad',
    type: 'article',
  },
  terms: {
    title: 'Términos y Condiciones — GECOP EXPERT',
    description:
      'Condiciones de uso del sitio de GECOP EXPERT y del formulario para solicitar asesoría en contratación pública.',
    path: '/terminos-y-condiciones',
    type: 'article',
  },
  notFound: {
    title: 'Página no encontrada — GECOP EXPERT',
    description: 'La página que buscas no existe. Vuelve al inicio de GECOP EXPERT.',
    path: '/',
    robots: 'noindex, follow',
    type: 'website',
  },
} as const satisfies Record<string, PageSeo>

export function absoluteUrl(path: string) {
  if (path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

const phoneDigits = CONTACT_PHONE_DISPLAY.replace(/\D/g, '')

export const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo-mark.png`,
  image: DEFAULT_OG_IMAGE,
  description: DEFAULT_DESCRIPTION,
  slogan: 'Tu aliado técnico en procesos del sector público.',
  email: CONTACT_EMAIL,
  telephone: `+593${phoneDigits.slice(1)}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Pilanquí BEV, Pasaje B 5-78 y Carlos Emilio Grijalva',
    addressLocality: 'Ibarra',
    addressCountry: 'EC',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Ecuador',
  },
  serviceType: [
    'Asesoría en contratación pública',
    'Elaboración de ofertas para proveedores del Estado',
    'Procesos de seguridad y vigilancia',
    'Procesos de limpieza',
    'Implementos para policía montada',
  ],
  knowsAbout: [
    'Contratación pública',
    'Subasta inversa',
    'Catálogo electrónico',
    'Catálogo dinámico inclusivo',
    'SERCOP',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: `+593${phoneDigits.slice(1)}`,
    email: CONTACT_EMAIL,
    availableLanguage: ['Spanish'],
    areaServed: 'EC',
  },
}