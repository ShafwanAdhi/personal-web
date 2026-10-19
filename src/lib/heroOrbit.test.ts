import { describe, expect, it } from 'vitest'
import { heroOrbitPoint } from './heroOrbit'

describe('hero icon orbit', () => {
  it('moves PyTorch to Python, Python to FastAPI, and FastAPI to PyTorch', () => {
    const expected = [{ x: 10.79, y: 9.47 }, { x: 100.68, y: 27.58 }, { x: 13.65, y: 80.77 }]
    expected.forEach((point, icon) => {
      expect(heroOrbitPoint(icon, 0).x).toBeCloseTo(point.x, 1)
      expect(heroOrbitPoint(icon, 0).y).toBeCloseTo(point.y, 1)
    })
    for (const [icon, destination] of [[1, 0], [0, 2], [2, 1]]) {
      const next = heroOrbitPoint(icon, -1)
      const slot = heroOrbitPoint(destination, 0)
      expect(next.x).toBeCloseTo(slot.x)
      expect(next.y).toBeCloseTo(slot.y)
    }
  })

  it('returns to the starting locations after three exchanges without a jump', () => {
    for (const icon of [0, 1, 2]) {
      const start = heroOrbitPoint(icon, 0)
      const lap = heroOrbitPoint(icon, -3)
      expect(lap.x).toBeCloseTo(start.x)
      expect(lap.y).toBeCloseTo(start.y)
      expect(Math.hypot(heroOrbitPoint(icon, -3.001).x - lap.x, heroOrbitPoint(icon, -3.001).y - lap.y)).toBeLessThan(1)
    }
  })

  it('follows a curved path and stays within the responsive orbit envelope', () => {
    const from = heroOrbitPoint(0, 0)
    const to = heroOrbitPoint(0, -1)
    const middle = heroOrbitPoint(0, -0.5)
    const cross = (middle.x - from.x) * (to.y - from.y) - (middle.y - from.y) * (to.x - from.x)
    expect(Math.abs(cross)).toBeGreaterThan(100)
    for (let phase = -10; phase <= 0; phase += 0.05) {
      for (const icon of [0, 1, 2]) {
        const point = heroOrbitPoint(icon, phase)
        expect(point.x).toBeGreaterThanOrEqual(-6.001)
        expect(point.x).toBeLessThanOrEqual(104.001)
        expect(point.y).toBeGreaterThanOrEqual(-4.001)
        expect(point.y).toBeLessThanOrEqual(92.001)
      }
    }
  })

  it('preserves velocity through slot boundaries, including spring overshoot', () => {
    const epsilon = 0.00001
    for (let phase = -5; phase <= 0; phase++) {
      for (const icon of [0, 1, 2]) {
        const before = heroOrbitPoint(icon, phase - epsilon)
        const at = heroOrbitPoint(icon, phase)
        const after = heroOrbitPoint(icon, phase + epsilon)
        for (const axis of ['x', 'y'] as const) {
          const incoming = (at[axis] - before[axis]) / epsilon
          const outgoing = (after[axis] - at[axis]) / epsilon
          expect(Math.abs(incoming - outgoing)).toBeLessThan(0.02)
        }
      }
    }
  })
})
