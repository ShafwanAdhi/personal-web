import { useEffect, type PointerEvent } from 'react'
import { useSpring } from 'motion/react'
import { pointerOffset } from './pointer'
import { useMotionPreference } from './useMotionPreference'

export function usePointerMotion(distance = 8) {
  const reduced = useMotionPreference()
  const x = useSpring(0, { stiffness: 220, damping: 24, mass: 0.55 })
  const y = useSpring(0, { stiffness: 220, damping: 24, mass: 0.55 })

  useEffect(() => {
    if (reduced) {
      x.jump(0)
      y.jump(0)
    }
  }, [reduced, x, y])

  function reset() {
    x.set(0)
    y.set(0)
  }

  function move(event: PointerEvent<HTMLElement>) {
    if (reduced || event.pointerType !== 'mouse' || !window.matchMedia?.('(hover: hover) and (pointer: fine)').matches) return
    const offset = pointerOffset(event.currentTarget.getBoundingClientRect(), event.clientX, event.clientY)
    x.set(offset.x * distance)
    y.set(offset.y * distance)
  }

  return { x, y, reduced, move, reset }
}
