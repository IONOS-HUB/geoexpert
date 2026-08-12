import { Outlet } from 'react-router-dom'
import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'

export function RootLayout() {
  return (
    <>
      <a className="skip-link" href="#contacto">
        Ir al formulario de contacto
      </a>

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
