import { useEffect, useRef } from 'react'

/**
 * Adds a fade/slide-up reveal animation the first time an element
 * scrolls into view. Respects prefers-reduced-motion automatically
 * via the CSS transition durations in index.css.
 */
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
