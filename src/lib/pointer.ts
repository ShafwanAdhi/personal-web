type Bounds = { left: number; top: number; width: number; height: number }

export function pointerOffset(bounds: Bounds, clientX: number, clientY: number) {
  if (bounds.width <= 0 || bounds.height <= 0) return { x: 0, y: 0 }
  const clamp = (value: number) => Math.max(-1, Math.min(1, value))
  return {
    x: clamp((clientX - bounds.left - bounds.width / 2) / (bounds.width / 2)),
    y: clamp((clientY - bounds.top - bounds.height / 2) / (bounds.height / 2)),
  }
}
