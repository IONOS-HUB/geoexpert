import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Ledger-ink easing shared by every entrance on the page. */
export const EASE_INK = 'expo.out'

/**
 * Splits a heading into masked lines and adds them rising from their baseline
 * to `tl`. The split is reverted once the line lands so wrapping stays native.
 */
export function addLineReveal(tl: gsap.core.Timeline, heading: Element, position?: gsap.Position) {
  const split = SplitText.create(heading, { type: 'lines', mask: 'lines', linesClass: 'split-line' })
  gsap.set(heading, { opacity: 1 })
  tl.from(
    split.lines,
    { yPercent: 110, duration: 0.9, stagger: 0.09, ease: EASE_INK, onComplete: () => split.revert() },
    position,
  )
  return split
}

export { gsap, ScrollTrigger, SplitText }
