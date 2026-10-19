import { useLayoutEffect, useRef } from 'react'
import { portfolio } from '../data/portfolio'

const intentKey = 'portfolio-section-navigation'
// Collection back links still intentionally target these home sections.
const sectionHashes = new Set(['#portfolio', '#certifications', ...portfolio.navigation.map(item => item.href).filter(href => href.startsWith('#'))])

export function useSectionNavigation(isLanding: boolean) {
  const initial = useRef<{ hash: string; intentional: boolean } | null>(null)

  useLayoutEffect(() => {
    function rememberDestination(event: MouseEvent) {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
      const link = event.target instanceof Element ? event.target.closest('a') : null
      if (!link || link.target === '_blank') return
      const destination = new URL(link.href)
      if (destination.origin !== location.origin || destination.pathname !== '/' || !sectionHashes.has(destination.hash) || location.pathname === '/') return
      try { sessionStorage.setItem(intentKey, destination.hash) } catch { /* Native links remain usable if storage is unavailable. */ }
    }
    document.addEventListener('click', rememberDestination, true)
    return () => document.removeEventListener('click', rememberDestination, true)
  }, [])

  useLayoutEffect(() => {
    if (!isLanding) return
    if (!initial.current) {
      let intent: string | null = null
      try { intent = sessionStorage.getItem(intentKey); sessionStorage.removeItem(intentKey) } catch { /* No saved navigation intent. */ }
      const hash = location.hash
      initial.current = { hash, intentional: sectionHashes.has(hash) && hash === intent }
    }
    history.scrollRestoration = 'manual'
    const { hash, intentional } = initial.current
    if (!intentional) {
      if (location.hash) history.replaceState(history.state, '', location.pathname + location.search)
      if (window.scrollY) window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    let cancelled = false
    let frame = 0
    Promise.resolve(document.fonts?.ready).then(() => {
      if (cancelled) return
      frame = requestAnimationFrame(() => {
        const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
        document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start', behavior: reduced ? 'instant' : 'smooth' })
      })
    })
    return () => { cancelled = true; cancelAnimationFrame(frame) }
  }, [isLanding])
}
