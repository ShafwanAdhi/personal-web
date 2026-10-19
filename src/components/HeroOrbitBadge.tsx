import { motion, useTransform, type MotionValue } from 'motion/react'
import { portfolio } from '../data/portfolio'
import { heroOrbitPoint } from '../lib/heroOrbit'
import { TechIcon } from './Icons'

type Props = {
  tech: keyof typeof portfolio.hero.technologyLabels
  index: number
  phase: MotionValue<number>
  floatTime: MotionValue<number>
  reduced: boolean
  pointerX: MotionValue<number>
  pointerY: MotionValue<number>
  size: MotionValue<number>
}

export default function HeroOrbitBadge({ tech, index, phase, floatTime, reduced, pointerX, pointerY, size }: Props) {
  const orbitX = useTransform(() => (heroOrbitPoint(index, phase.get()).x - 7.5) * size.get() / 100 + pointerX.get())
  const orbitY = useTransform(() => (heroOrbitPoint(index, phase.get()).y - 7.5) * size.get() / 100 + pointerY.get())
  const bob = useTransform(floatTime, time => Math.sin(time * Math.PI * 2 / 4.8 + index * 2.1) * 8)
  const rock = useTransform(floatTime, time => Math.sin(time * Math.PI * 2 / 6.8 + index * 1.7) * 5)
  const label = portfolio.hero.technologyLabels[tech]
  return <motion.div className={`tech-badge tech-${tech}`} role="img" aria-label={label} title={label}
    style={{ x: orbitX, y: orbitY, rotate: index === 0 ? -14 : 14 }}>
    <motion.div className="tech-badge-inner" style={{ y: reduced ? 0 : bob, rotate: reduced ? 0 : rock }}><TechIcon name={tech} /></motion.div>
  </motion.div>
}
