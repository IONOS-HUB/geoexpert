import { LEGAL_DISCLAIMER, LEGAL_LAST_UPDATED } from '../lib/legalCopy'
import { Seo } from '../components/Seo'
import { PAGE_SEO } from '../lib/seo'

export function PrivacyPolicyPage() {
  return (
    <section className="section legal-page" aria-labelledby="privacy-heading">
      <Seo page={PAGE_SEO.privacy} />
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

        <h2>Tiempo de conservación de los datos personales</h2>
        <p>
          GECOP EXPERT conservará tus datos personales durante todo el tiempo en que exista una
          relación contractual o de servicio activa contigo como cliente. Adicionalmente,
          podremos conservar los datos necesarios para cumplir con obligaciones legales,
          contables y tributarias establecidas por la normativa vigente, incluidos los plazos de
          conservación de documentación exigidos por las autoridades competentes.
        </p>
        <p>
          Podremos conservar tu nombre, teléfono y correo electrónico de forma indefinida para el
          envío de comunicaciones e información sobre nuestros servicios, salvo que revoques tu
          consentimiento en cualquier momento escribiéndonos a{' '}
          <a href="mailto:gecopexpert@gmail.com">gecopexpert@gmail.com</a>. Una vez finalizada la
          relación de servicio y cumplidos los plazos legales de conservación aplicables,
          eliminaremos o anonimizaremos tus datos personales.
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
          Este sitio no utiliza cookies de ningún tipo, ni de analítica, ni de marketing, ni
          funcionales. No almacenamos información de seguimiento en tu navegador; solo
          procesamos los datos que ingresas voluntariamente en el formulario de contacto,
          descritos arriba.
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
