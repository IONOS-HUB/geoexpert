import { useGSAP } from '@gsap/react'
import type { RefObject } from 'react'
import { addLineReveal, EASE_INK, gsap, prefersReducedMotion } from './gsap'

type RevealVariant = 'rise' | 'wipe'

/**
 * Section entrance: the section's h2 rises line by line, then `selector` targets follow.
 * `rise` lifts blocks out of a soft blur; `wipe` inks rows in from the left, like a ledger line.
 */
export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  selector: string,
  variant: RevealVariant = 'rise',
) {
  useGSAP(
    (_context, contextSafe) => {
      if (prefersReducedMotion() || !ref.current || !contextSafe) return

      const section = ref.current
      const heading = section.querySelector('h2')
      const targets = section.querySelectorAll(selector)

      if (heading) gsap.set(heading, { opacity: 0 })
      if (targets.length) {
        gsap.set(
          targets,
          variant === 'wipe'
            ? { clipPath: 'inset(0 100% 0 0)', opacity: 0 }
            : { opacity: 0, y: 28, filter: 'blur(6px)' },
        )
      }

      const build = contextSafe(() => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: section, start: 'top 78%', once: true },
        })

        if (heading) addLineReveal(tl, heading)

        if (targets.length) {
          tl.to(
            targets,
            variant === 'wipe'
              ? { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1, stagger: 0.14, ease: 'power3.inOut' }
              : { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, stagger: 0.1, ease: EASE_INK },
            heading ? '-=0.6' : 0,
          )
          tl.set(targets, { clearProps: 'clipPath,filter,transform' })
        }
      })

      // Line breaks depend on the display face; split only once it has loaded.
      document.fonts.ready.then(build)
    },
    { scope: ref },
  )
}
