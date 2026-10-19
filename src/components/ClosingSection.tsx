import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { portfolio } from '../data/portfolio'
import { HireButton } from './ActionLinks'
import { Reveal } from './MotionUI'
import { usePointerMotion } from '../lib/usePointerMotion'

export default function ClosingSection() {
  const section = useRef<HTMLElement>(null)
  const { x, y, reduced, move, reset } = usePointerMotion(1)
  const [hovered, setHovered] = useState(false)
  const energized = hovered && !reduced
  const { scrollYProgress } = useScroll({ target: section, offset: ['start end', 'end start'] })
  const [active, setActive] = useState(false)
  const artY = useTransform(scrollYProgress, [0, 1], [-14, 14])
  const artRotate = useTransform(scrollYProgress, [0, 1], [-3, 3])
  const tiltX = useTransform(y, value => value * -14)
  const tiltY = useTransform(x, value => value * 18)
  const driftX = useTransform(x, value => value * 10)
  const lightX = useTransform(x, value => `${(value + 1) * 50}%`)
  const lightY = useTransform(y, value => `${(value + 1) * 50}%`)
  const lightBackground = useTransform(() => `radial-gradient(circle at ${lightX.get()} ${lightY.get()}, #9ad83d30, transparent 60%)`)
  useEffect(() => {
    const element = section.current
    if (!element || reduced || typeof IntersectionObserver === 'undefined') {
      setActive(false)
      return
    }
    let inView = false
    const update = () => setActive(inView && !document.hidden)
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; update() }, { threshold: 0.1 })
    observer.observe(element)
    document.addEventListener('visibilitychange', update)
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', update) }
  }, [reduced])
  return <section className="cta-section" ref={section} aria-labelledby="cta-title" data-active={active}>
    <div className="cta-grid" aria-hidden="true" />
    <div className="container cta-content">
    <Reveal className="cta-copy"><h2 id="cta-title">{portfolio.cta.title}</h2><HireButton large /></Reveal>
    <div className="cta-art" aria-hidden="true" data-hovered={energized}
      onPointerEnter={event => setHovered(event.pointerType === 'mouse' && Boolean(window.matchMedia?.('(hover: hover) and (pointer: fine)').matches))}
      onPointerMove={move} onPointerLeave={() => { setHovered(false); reset() }}>
      <motion.div className="cta-orbit-scroll" style={{ y: reduced ? 0 : artY, rotate: reduced ? 0 : artRotate }}>
      <motion.div className="cta-orbit" animate={{ scale: energized ? 1.06 : 1 }} transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        style={{ rotateX: tiltX, rotateY: tiltY, x: driftX, transformPerspective: 900 }}>
        <motion.div className="cta-orbit-light" style={{ background: lightBackground }} />
        <svg viewBox="-30 -30 860 580" fill="none">
          <defs>
            <linearGradient id="cta-orbit-color" x1="180" y1="100" x2="650" y2="430" gradientUnits="userSpaceOnUse"><stop stopColor="#c4f500" stopOpacity=".85" /><stop offset=".48" stopColor="#439f3b" stopOpacity=".25" /><stop offset="1" stopColor="#c4f500" stopOpacity=".6" /></linearGradient>
            <radialGradient id="cta-orbit-glow"><stop stopColor="#8ac52e" stopOpacity=".16" /><stop offset="1" stopColor="#8ac52e" stopOpacity="0" /></radialGradient>
            <filter id="cta-comet-glow" x="-20%" y="-30%" width="140%" height="160%"><feGaussianBlur stdDeviation="2" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          </defs>
          <ellipse cx="415" cy="270" rx="370" ry="235" fill="url(#cta-orbit-glow)" />
          <g transform="rotate(-28 415 260)">
            <ellipse cx="415" cy="260" rx="338" ry="177" stroke="#c4f500" strokeOpacity=".035" strokeWidth="34" />
            {[0, 1, 2, 3, 4, 5, 6].map(ring => <motion.ellipse key={ring} cx="415" cy="260" rx={330 - ring * 24} ry={170 - ring * 13}
              animate={{ rx: 330 - ring * 24 + (energized ? (6 - ring) * 2 : 0), ry: 170 - ring * 13 + (energized ? (ring - 3) * 2 : 0), opacity: ring === 3 ? 1 : energized ? 0.85 : 0.5, strokeWidth: ring === 3 ? energized ? 2.5 : 1.8 : energized ? 1.6 : 1 }}
              transition={{ type: 'spring', stiffness: 90, damping: 18 }} stroke="url(#cta-orbit-color)" />)}
            <ellipse className="cta-orbit-highlight" cx="415" cy="260" rx="258" ry="131" pathLength="1000" stroke="#c4f500" strokeWidth="2" strokeLinecap="round" strokeDasharray="90 910" />
            <g className="cta-orbit-comets" filter="url(#cta-comet-glow)">
              {[0, 1, 2].map(track => <ellipse className={`cta-comet cta-comet-${track}`} key={track} cx="415" cy="260" rx={306 - track * 48} ry={157 - track * 26} pathLength="1000" stroke="#dcff9c" strokeWidth="3" strokeLinecap="round" strokeDasharray="7 993" />)}
            </g>
            <path d="M73 260H757M415 69V451" stroke="#a3c479" strokeOpacity=".12" strokeDasharray="3 8" />
            <circle cx="189" cy="197" r="4" fill="#c4f500" /><circle cx="189" cy="197" r="10" stroke="#c4f500" strokeOpacity=".2" />
            <circle cx="693" cy="296" r="3" fill="#8bc75c" /><circle cx="415" cy="169" r="2.5" fill="#c4f500" />
            <path d="M407 260H423M415 252V268" stroke="#c4f500" strokeOpacity=".6" />
            <motion.circle cx="415" cy="260" r="21" stroke="#c4f500" strokeWidth=".7" animate={{ r: energized ? 32 : 21, opacity: energized ? 0.7 : 0.12 }} transition={{ duration: reduced ? 0 : 0.5 }} />
          </g>
        </svg>
      </motion.div>
      </motion.div>
    </div>
    </div>
  </section>
}
