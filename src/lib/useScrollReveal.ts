import { useGSAP } from '@gsap/react'
import type { RefObject } from 'react'
import { gsap, prefersReducedMotion } from './gsap'

export function useScrollReveal(ref: RefObject<HTMLElement | null>, selector: string) {
  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return

      const targets = ref.current.querySelectorAll(selector)
      if (!targets.length) return

      gsap.set(targets, { opacity: 0, y: 24 })
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          once: true,
        },
      })
    },
    { scope: ref },
  )
}
