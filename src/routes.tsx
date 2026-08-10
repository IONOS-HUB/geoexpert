import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './layout/RootLayout'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsPage } from './pages/TermsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'politica-de-privacidad', element: <PrivacyPolicyPage /> },
      { path: 'terminos-y-condiciones', element: <TermsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
