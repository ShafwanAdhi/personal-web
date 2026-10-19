const angles = [226, 340, 490, 586]
// Neighbor-averaged tangents give the closed angular spline matching velocity at every slot.
const tangents = [105, 132, 123, 105]

/** Continuous slot coordinates preserve curved travel and spring overshoot across every lap. */
export function heroOrbitPoint(icon: number, phase: number) {
  const position = icon + phase
  const step = Math.floor(position)
  const slot = ((step % 3) + 3) % 3
  const fraction = position - step
  const span = angles[slot + 1] - angles[slot]
  const incoming = tangents[slot]
  const outgoing = tangents[slot + 1]
  const degrees = angles[slot] + incoming * fraction
    + (3 * span - 2 * incoming - outgoing) * fraction ** 2
    + (-2 * span + incoming + outgoing) * fraction ** 3
  const angle = degrees * Math.PI / 180
  return { x: 49 + 55 * Math.cos(angle), y: 44 + 48 * Math.sin(angle) }
}
