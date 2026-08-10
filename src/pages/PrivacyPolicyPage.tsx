import { LEGAL_DISCLAIMER, LEGAL_LAST_UPDATED } from '../lib/legalCopy'

export function PrivacyPolicyPage() {
  return (
    <section className="section legal-page" aria-labelledby="privacy-heading">
      <div className="wrap legal-page-inner">
        <span className="matrix-code">DOC-PRIV</span>
        <h1 id="privacy-heading">Política de Privacidad</h1>
        <p className="legal-updated">Última actualización: {LEGAL_LAST_UPDATED}</p>

        <p className="legal-disclaimer">{LEGAL_DISCLAIMER}</p>

        <h2>Responsable del tratamiento</h2>
        <p>
          GECOP EXPERT es responsable del tratamiento de los datos que nos compartes a través
          de este sitio. Puedes contactarnos en{' '}
          <a href="mailto:gecopexpert@gmail.com">gecopexpert@gmail.com</a> o en Pilanquí del
          BEV, Pasaje B 5-78 y Carlos Emilio Grijalva.
        </p>

        <h2>Datos que recopilamos</h2>
        <p>A través del formulario de contacto recopilamos:</p>
        <ul>
          <li>Nombre</li>
          <li>Teléfono</li>
          <li>RUC (si aplica)</li>
          <li>Correo electrónico</li>
          <li>El contenido de tu solicitud</li>
        </ul>
        <p>
          Adicionalmente, si aceptas o rechazas el aviso de cookies de este sitio, guardamos esa
          preferencia en el almacenamiento local de tu navegador (localStorage), no en un
          servidor.
        </p>

        <h2>Finalidad del tratamiento</h2>
        <p>
          Usamos estos datos únicamente para contactarte, responder tu solicitud y coordinar tu
          asesoría o cita con GECOP EXPERT.
        </p>

        <h2>Base legal y consentimiento</h2>
        <p>
          Al enviar el formulario de contacto, entendemos que nos autorizas a usar tus datos
          para la finalidad descrita arriba.
        </p>

        <h2>Conservación de datos</h2>
        <p>
          Conservamos tus datos durante el tiempo necesario para gestionar tu solicitud y dar
          seguimiento a tu proceso.
        </p>

        <h2>Comparación con terceros</h2>
        <p>
          No vendemos ni compartimos tus datos con terceros. Actualmente este sitio no tiene
          instalado ningún servicio de analítica o publicidad de terceros.
        </p>

        <h2>Tus derechos</h2>
        <p>
          Puedes solicitar acceso, rectificación o eliminación de tus datos escribiéndonos a{' '}
          <a href="mailto:gecopexpert@gmail.com">gecopexpert@gmail.com</a>.
        </p>

        <h2 id="cookies">Cookies y almacenamiento local</h2>
        <p>
          Este sitio usa únicamente una preferencia funcional guardada en tu navegador (tu
          respuesta al aviso de cookies). Hoy no utilizamos cookies de analítica ni de
          marketing.
        </p>

        <h2>Contacto</h2>
        <p>
          Para cualquier consulta sobre esta política, escríbenos a{' '}
          <a href="mailto:gecopexpert@gmail.com">gecopexpert@gmail.com</a>.
        </p>
      </div>
    </section>
  )
}
