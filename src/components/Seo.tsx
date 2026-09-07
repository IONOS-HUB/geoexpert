import type { PageSeo } from '../lib/seo'
import {
  absoluteUrl,
  DEFAULT_OG_IMAGE,
  ORGANIZATION_JSON_LD,
  SITE_LOCALE,
  SITE_NAME,
} from '../lib/seo'

type SeoProps = {
  page: PageSeo
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

export function Seo({ page, jsonLd }: SeoProps) {
  const url = absoluteUrl(page.path)
  const robots = page.robots ?? 'index, follow'
  const type = page.type ?? 'website'
  const indexable = !robots.includes('noindex')
  const payloads = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : page.path === '/' && indexable
      ? [ORGANIZATION_JSON_LD]
      : []

  return (
    <>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="author" content={SITE_NAME} />
      <meta name="geo.region" content="EC-I" />
      <meta name="geo.placename" content="Ibarra" />
      {indexable && <link rel="canonical" href={url} />}
      {indexable && <link rel="alternate" hrefLang="es-EC" href={url} />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={SITE_LOCALE} />
      {indexable && <meta property="og:url" content={url} />}
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content={`${SITE_NAME} — Tu aliado técnico en procesos del sector público`}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

      {payloads.map((payload, index) => (
        <script
          key={`ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
        />
      ))}
    </>
  )
}
