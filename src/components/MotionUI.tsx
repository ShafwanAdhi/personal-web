import { motion, useScroll, useSpring, type HTMLMotionProps } from 'motion/react'
import type { PropsWithChildren } from 'react'
import { usePointerMotion } from '../lib/usePointerMotion'
import { useMotionPreference } from '../lib/useMotionPreference'

export const smoothEase = [0.22, 1, 0.36, 1] as const

export function revealProps(reduced: boolean, delay = 0) {
  if (reduced || typeof IntersectionObserver === 'undefined') {
    return { initial: false as const, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
  }
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12, margin: '0px 0px -24px 0px' },
    transition: { duration: 0.65, delay, ease: smoothEase },
  }
}

export function Reveal({ children, className, delay = 0 }: PropsWithChildren<{ className?: string; delay?: number }>) {
  return <motion.div className={className} {...revealProps(useMotionPreference(), delay)}>{children}</motion.div>
}

export function MagneticLink({ children, style, ...props }: HTMLMotionProps<'a'>) {
  const { x, y, reduced, move, reset } = usePointerMotion(5)
  return <motion.a {...props} style={{ ...style, x, y }} onPointerMove={move} onPointerLeave={reset} onBlur={reset}
    whileHover={reduced ? undefined : { scale: 1.035 }} whileTap={reduced ? undefined : { scale: 0.97 }}
    transition={{ type: 'spring', stiffness: 300, damping: 22 }}>{children}</motion.a>
}

export function ScrollProgress() {
  const reduced = useMotionPreference()
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })
  return <motion.div className="scroll-progress" aria-hidden="true" style={{ scaleX: reduced ? scrollYProgress : smoothProgress }} />
}
