import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Gallery } from '../sections/Gallery'
import { Hero } from '../sections/Hero'
import { Services } from '../sections/Services'
import { TrackRecord } from '../sections/TrackRecord'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <TrackRecord />
      <Contact />
    </>
  )
}
