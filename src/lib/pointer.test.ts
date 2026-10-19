import { describe, expect, it } from 'vitest'
import { pointerOffset } from './pointer'

describe('pointer-based motion bounds', () => {
  const bounds = { left: 10, top: 20, width: 100, height: 80 }

  it('keeps a centered pointer at rest', () => {
    expect(pointerOffset(bounds, 60, 60)).toEqual({ x: 0, y: 0 })
  })

  it('maps the lower-right edge to full movement', () => {
    expect(pointerOffset(bounds, 110, 100)).toEqual({ x: 1, y: 1 })
  })

  it('limits pointer movement outside the element', () => {
    expect(pointerOffset(bounds, 200, -40)).toEqual({ x: 1, y: -1 })
  })

  it('keeps an element without measurable dimensions at rest', () => {
    expect(pointerOffset({ left: 0, top: 0, width: 0, height: 0 }, 20, 20)).toEqual({ x: 0, y: 0 })
  })
})
