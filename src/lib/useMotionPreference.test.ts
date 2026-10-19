import { act, renderHook } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { useMotionPreference } from './useMotionPreference'

afterEach(() => vi.unstubAllGlobals())

it('responds to reduced-motion changes in both directions without remounting', () => {
  let reduced = false
  const changes = new EventTarget()
  const media = {
    get matches() { return reduced },
    addEventListener: changes.addEventListener.bind(changes),
    removeEventListener: changes.removeEventListener.bind(changes),
  }
  vi.stubGlobal('matchMedia', () => media)
  const { result } = renderHook(useMotionPreference)
  expect(result.current).toBe(false)
  act(() => { reduced = true; changes.dispatchEvent(new Event('change')) })
  expect(result.current).toBe(true)
  act(() => { reduced = false; changes.dispatchEvent(new Event('change')) })
  expect(result.current).toBe(false)
})
