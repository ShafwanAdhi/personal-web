import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue, useTransform } from 'motion/react'
import { portfolio } from '../data/portfolio'
import { usePointerMotion } from '../lib/usePointerMotion'
import { useMotionPreference } from '../lib/useMotionPreference'
import HeroOrbitBadge from './HeroOrbitBadge'
import HeroOrbitTrail from './HeroOrbitTrail'
import { HireButton, SocialLinks } from './ActionLinks'
import { smoothEase } from './MotionUI'

function HeroArt() {
  const art = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const { x, y, reduced, move, reset } = usePointerMotion(10)
  const backX = useTransform(x, value => value * -0.5)
  const backY = useTransform(y, value => value * -0.5)
  const frontX = useTransform(x, value => value * 0.65)
  const frontY = useTransform(y, value => value * 0.65)
  const orbit = useMotionValue(0)
  const artSize = useMotionValue(292)
  const floatTime = useMotionValue(0)
  const elapsedFloat = useRef(0)
  const destination = useRef(0)

  useLayoutEffect(() => {
    const element = art.current
    if (!element) return
    artSize.set(element.getBoundingClientRect().width || 292)
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(([entry]) => artSize.set(entry.contentRect.width))
    observer.observe(element)
    return () => observer.disconnect()
  }, [artSize])

  useEffect(() => {
    if (reduced) {
      destination.current = 0
      orbit.jump(0)
      return
    }
    if (!active) {
      orbit.stop()
      return
    }
    let movement: ReturnType<typeof animate> | undefined
    const travel = () => {
      movement?.stop()
      movement = animate(orbit, destination.current, { duration: 2.8, ease: [0.45, 0, 0.25, 1] })
    }
    if (Math.abs(orbit.get() - destination.current) > 0.001) travel()
    const timer = window.setInterval(() => {
      destination.current -= 1
      travel()
    }, 6000)
    return () => { window.clearInterval(timer); movement?.stop() }
  }, [active, reduced, orbit])

  useEffect(() => {
    if (reduced) {
      elapsedFloat.current = 0
      floatTime.jump(0)
      return
    }
    if (!active) return
    let frame = 0
    let started: number | undefined
    const base = elapsedFloat.current
    const tick = (time: number) => {
      started ??= time
      floatTime.set(base + (time - started) / 1000)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(frame); elapsedFloat.current = floatTime.get() }
  }, [active, reduced, floatTime])

  useEffect(() => {
    const element = art.current
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

  return <div className="hero-art" ref={art} data-active={active} onPointerMove={move} onPointerLeave={reset}>
    <motion.div className="hero-art-entrance" initial={reduced ? false : { opacity: 0, scale: 0.9, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: reduced ? 0 : 0.95, delay: reduced ? 0 : 0.2, ease: smoothEase }}>
      <motion.div className="hero-shape hero-shape-lime" style={{ x: backX, y: backY, skewX: -14 }} />
      <motion.div className="hero-shape hero-shape-green" style={{ x: frontX, y: frontY, skewX: 13 }} />
      <HeroOrbitTrail phase={orbit} floatTime={floatTime} pointerX={x} pointerY={y} active={active} reduced={reduced} />
      <motion.img className="portrait" src={portfolio.identity.portrait} alt={portfolio.identity.portraitAlt} fetchPriority="high" style={{ x, y }} />
      <span className="hero-portrait-fade" aria-hidden="true" />
      {(['python', 'pytorch', 'fastapi'] as const).map((tech, index) => <HeroOrbitBadge key={tech} tech={tech} index={index} phase={orbit} floatTime={floatTime} reduced={reduced}
        size={artSize} pointerX={tech === 'fastapi' ? backX : frontX} pointerY={tech === 'pytorch' ? backY : frontY} />)}
    </motion.div>
  </div>
}

export default function Hero() {
  const reduced = useMotionPreference()
  const entrance = (delay: number) => ({
    initial: reduced ? false as const : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.7, delay: reduced ? 0 : delay, ease: smoothEase },
  })

  return <section className="hero container" aria-labelledby="hero-title">
    <div className="hero-copy">
      <motion.p className="greeting" {...entrance(0.08)}>{portfolio.hero.greeting}</motion.p>
      <div id="home"><h1 id="hero-title" aria-label={portfolio.hero.titleLines.join(' ')}>
        {portfolio.hero.titleLines.map((line, index) => <span className="hero-line" key={index} aria-hidden="true">
          <motion.span initial={reduced ? false : { y: '108%', rotate: 2 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: reduced ? 0 : 0.85, delay: reduced ? 0 : 0.17 + index * 0.11, ease: smoothEase }}>{line}</motion.span>
        </span>)}
      </h1></div>
      <motion.p className="hero-description" {...entrance(0.45)}>{portfolio.hero.description}</motion.p>
      <motion.div className="hero-actions" {...entrance(0.55)}><HireButton /><SocialLinks /></motion.div>
    </div>
    <HeroArt />
  </section>
}
