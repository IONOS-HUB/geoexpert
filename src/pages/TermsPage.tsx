import { Link } from 'react-router-dom'
import { LEGAL_DISCLAIMER, LEGAL_LAST_UPDATED } from '../lib/legalCopy'

export function TermsPage() {
  return (
    <section className="section legal-page" aria-labelledby="terms-heading">
      <div className="wrap legal-page-inner">
        <span className="matrix-code">DOC-TERM</span>
        <h1 id="terms-heading">Términos y Condiciones</h1>
        <p className="legal-updated">Última actualización: {LEGAL_LAST_UPDATED}</p>

        <p className="legal-disclaimer">{LEGAL_DISCLAIMER}</p>

        <h2>Objeto</h2>
        <p>
          Este sitio es un canal informativo de GECOP EXPERT para dar a conocer sus servicios de
          asesoría en contratación pública y para recibir solicitudes de asesoría a través del
          formulario de contacto o WhatsApp.
        </p>

        <h2>Uso del sitio</h2>
        <p>
          El contenido de este sitio es informativo. Su uso es bajo tu propia responsabilidad y
          no reemplaza una revisión particular de tu proceso.
        </p>

        <h2>Formulario de contacto</h2>
        <p>
          Enviar el formulario no garantiza por sí solo la prestación del servicio. La cita o
          asesoría queda confirmada cuando GECOP EXPERT se contacta contigo por los canales
          indicados (teléfono, correo o WhatsApp).
        </p>
        <p>
          Para enviar el formulario es obligatorio aceptar nuestra{' '}
          <Link to="/politica-de-privacidad">Política de Privacidad</Link>, donde se detalla qué
          datos recopilamos, con qué finalidad los usamos y durante cuánto tiempo los
          conservamos.
        </p>

        <h2>Propiedad intelectual</h2>
        <p>
          El contenido, la marca y el logo de GECOP EXPERT son propiedad de GECOP EXPERT y no
          pueden reproducirse sin autorización.
        </p>

        <h2>Enlaces externos</h2>
        <p>
          Este sitio incluye enlaces directos a WhatsApp, un servicio de terceros sujeto a sus
          propios términos y condiciones.
        </p>

        <h2>Modificaciones</h2>
        <p>
          GECOP EXPERT puede actualizar estos términos en cualquier momento. La fecha de última
          actualización se indica al inicio de este documento.
        </p>

        <h2>Ley aplicable</h2>
        <p>Estos términos se rigen por las leyes de Ecuador.</p>
      </div>
    </section>
  )
}
