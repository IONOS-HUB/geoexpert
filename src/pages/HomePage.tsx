import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Hero } from '../sections/Hero'
import { Services } from '../sections/Services'
import { TrackRecord } from '../sections/TrackRecord'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <TrackRecord />
      <Contact />
    </>
  )
}
