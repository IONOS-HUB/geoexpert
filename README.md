# GECOP EXPERT — Sitio web

Landing page de GECOP EXPERT construida con React + TypeScript + Vite. Incluye secciones de
presentación, formulario de contacto (con webhook a n8n) y páginas legales (Política de
Privacidad, Términos y Condiciones).

## Desarrollo local

```bash
npm install
npm run dev
```

## Variables de entorno

Copia `.env.example` a `.env` y completa los valores:

```bash
cp .env.example .env
```

| Variable                      | Descripción                                              |
| ------------------------------ | --------------------------------------------------------- |
| `VITE_CONTACT_FORM_API_KEY`   | Clave enviada en el header `X-API-Key` al webhook de n8n |

## Build

```bash
npm run build
```

## Despliegue (Vercel)

El proyecto usa `vercel.json` para:

- Servir `dist` como directorio de salida (`npm run build`).
- Redirigir todas las rutas a `index.html` (rewrites), necesario para que React Router
  resuelva correctamente rutas como `/politica-de-privacidad` o `/terminos-y-condiciones`
  al entrar directamente por URL.

Recuerda configurar `VITE_CONTACT_FORM_API_KEY` en **Project Settings → Environment
Variables** en Vercel; los valores de `.env` no se suben al repositorio.
