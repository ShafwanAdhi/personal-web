# Portrait fade and orbital comet trails

Date: 2026-10-13.

Added a CSS alpha mask that fades the lower 22% of the portrait while preserving the original image asset. Added `HeroOrbitTrail.tsx`, a decorative canvas layer between the background shapes and portrait. It records only moving orbit samples, including floating and pointer offsets. Each tool has a matching colored glow, bright core, twisting filament, and scattered sparks. Samples expire after 680ms; the existing six-second interval and 2.8-second exchanges remain unchanged.

The canvas scales with the hero and caps its pixel density at 2. It cancels its frame loop, disconnects its resize observer, and clears its bitmap on pause, unmount, or reduced motion. The existing hero visibility lifecycle also controls the trail.

Verification:

- TypeScript and Vite production build passed.
- Existing 29 tests passed across four files.
- Playwright production checks at 320, 390, 768, and 1440px confirmed the alpha mask and no horizontal overflow.
- Canvas pixel inspection recorded 0 visible trail pixels while initially idle, 3174 during exchange, and 0 after settling, scrolling fully offscreen, or activating reduced motion.
- Actual mobile touch context rendered the animated trails. No page errors occurred.
- Visually inspected `hero-comet-trails-desktop.png`, `hero-comet-trails-mobile.png`, and `portrait-fade-390.png` under `output/playwright/`. The mobile animation was recorded as `hero-comet-trails-mobile.webm`.
- An initial QA script timed out because `scrollIntoViewIfNeeded` only moved the project heading into the viewport and left the hero visible. The final check explicitly scrolled the hero offscreen and verified bitmap clearing; no product fix was required for that test setup issue.
