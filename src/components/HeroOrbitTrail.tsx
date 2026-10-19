import { useEffect, useRef } from 'react'
import type { MotionValue } from 'motion/react'
import { heroOrbitPoint } from '../lib/heroOrbit'

type TrailPoint = { x: number; y: number; time: number }
type Props = {
  phase: MotionValue<number>
  floatTime: MotionValue<number>
  pointerX: MotionValue<number>
  pointerY: MotionValue<number>
  active: boolean
  reduced: boolean
}

const colors = ['117, 202, 255', '255, 136, 87', '72, 239, 211']
const lifetime = 680

function paintTrail(context: CanvasRenderingContext2D, trail: TrailPoint[], now: number, color: string) {
  if (trail.length < 2) return
  const tail = trail[0]
  const head = trail[trail.length - 1]
  const fade = Math.max(0, 1 - (now - head.time) / lifetime) ** 2
  const glow = context.createLinearGradient(tail.x, tail.y, head.x, head.y)
  glow.addColorStop(0, `rgba(${color}, 0)`)
  glow.addColorStop(0.35, `rgba(${color}, 0.25)`)
  glow.addColorStop(1, `rgba(${color}, 0.9)`)
  const core = context.createLinearGradient(tail.x, tail.y, head.x, head.y)
  core.addColorStop(0, 'rgba(235, 255, 255, 0)')
  core.addColorStop(1, 'rgba(235, 255, 255, 0.9)')

  context.beginPath()
  context.moveTo(tail.x, tail.y)
  for (let i = 1; i < trail.length; i++) context.lineTo(trail[i].x, trail[i].y)
  context.strokeStyle = glow
  // Whole-path glow layers avoid a costly blur for every tiny segment.
  for (const [width, opacity] of [[12, 0.12], [7, 0.25], [3, 0.9]]) {
    context.lineWidth = width
    context.globalAlpha = fade * opacity
    context.stroke()
  }
  context.strokeStyle = core
  context.lineWidth = 1.1
  context.globalAlpha = fade * 0.8
  context.stroke()

  context.beginPath()
  trail.forEach((point, index) => {
    const previous = trail[Math.max(0, index - 1)]
    const dx = point.x - previous.x
    const dy = point.y - previous.y
    const length = Math.hypot(dx, dy) || 1
    const age = Math.min(1, (now - point.time) / lifetime)
    const twist = Math.sin((now - point.time) / 70) * 5 * age
    const x = point.x - dy / length * twist
    const y = point.y + dx / length * twist
    if (index === 0) context.moveTo(x, y)
    else context.lineTo(x, y)
    if (index % 7 === 0) {
      // Sparks have stable sample positions while the path ages.
      context.fillStyle = `rgba(${color}, ${0.7 * (1 - age)})`
      context.globalAlpha = fade
      context.fillRect(x - 0.7, y - 0.7, 1.4, 1.4)
    }
  })
  context.strokeStyle = glow
  context.lineWidth = 0.9
  context.globalAlpha = fade * 0.6
  context.stroke()
  context.globalAlpha = 1
}

export default function HeroOrbitTrail({ phase, floatTime, pointerX, pointerY, active, reduced }: Props) {
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const element = canvas.current
    if (!element) return
    // Clearing the bitmap also prevents a frozen trail on pause or preference changes.
    element.width = element.width
    if (!active || reduced) return
    const context = element.getContext('2d')
    if (!context) return

    const trails: TrailPoint[][] = [[], [], []]
    let width = 0
    let height = 0
    let frame = 0
    let previousPhase = phase.get()
    let lastSampleTime = 0
    const resize = (layoutWidth: number, layoutHeight: number) => {
      // Entrance scale/rotation must not change the bitmap's layout coordinate system.
      width = layoutWidth
      height = layoutHeight
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      element.width = Math.round(width * ratio)
      element.height = Math.round(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      trails.forEach(trail => { trail.length = 0 })
    }
    resize(element.clientWidth, element.clientHeight)
    const observer = new ResizeObserver(([entry]) => resize(entry.contentRect.width, entry.contentRect.height))
    observer.observe(element)

    const draw = (now: number) => {
      frame = 0
      context.clearRect(0, 0, width, height)
      const value = phase.get()
      const moving = Math.abs(value - previousPhase) > 0.00001
      previousPhase = value
      const newSample = now - lastSampleTime >= 16
      if (newSample) lastSampleTime = now
      const size = width / 1.4
      const inset = size * 0.2
      context.globalCompositeOperation = 'lighter'
      context.lineCap = 'round'
      context.lineJoin = 'round'

      trails.forEach((trail, icon) => {
        if (moving) {
          const point = heroOrbitPoint(icon, value)
          const bob = Math.sin(floatTime.get() * Math.PI * 2 / 4.8 + icon * 2.1) * 8
          const tilt = (icon === 0 ? -14 : 14) * Math.PI / 180
          const pointSample = {
            x: inset + point.x * size / 100 - Math.sin(tilt) * bob + pointerX.get() * (icon === 2 ? -0.5 : 0.65),
            y: inset + point.y * size / 100 + Math.cos(tilt) * bob + pointerY.get() * (icon === 1 ? -0.5 : 0.65),
            time: now,
          }
          if (newSample || !trail.length) trail.push(pointSample)
          else trail[trail.length - 1] = pointSample
        }
        while (trail.length && now - trail[0].time > lifetime) trail.shift()
        paintTrail(context, trail, now, colors[icon])
      })
      if (trails.some(trail => trail.length)) frame = requestAnimationFrame(draw)
    }
    const unsubscribe = phase.on('change', () => {
      if (!frame) frame = requestAnimationFrame(draw)
    })
    return () => {
      unsubscribe()
      cancelAnimationFrame(frame)
      observer.disconnect()
      context.clearRect(0, 0, width, height)
    }
  }, [phase, floatTime, pointerX, pointerY, active, reduced])

  return <canvas ref={canvas} className="hero-orbit-trails" aria-hidden="true" />
}
