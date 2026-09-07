import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Documents } from '../sections/Documents'
import { Gallery } from '../sections/Gallery'
import { Hero } from '../sections/Hero'
import { Services } from '../sections/Services'
import { TrackRecord } from '../sections/TrackRecord'
import { Seo } from '../components/Seo'
import { PAGE_SEO } from '../lib/seo'

export function HomePage() {
  return (
    <>
      <Seo page={PAGE_SEO.home} />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <TrackRecord />
      <Documents />
      <Contact />
    </>
  )
}
