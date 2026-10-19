# Hero tone and brightness audit

Date: 2026-10-13.

Visual direction: a restrained sage/forest backdrop gives the grayscale person priority, with brand-colored technology icons as supporting accents. Content and layout remain the same hero introduction, actions, and portrait. Existing entrance, floating, and orbital comet motion remain unchanged.

## Audit and selected treatment

The previous flat yellow-olive and saturated green planes competed with the portrait. Compared three native CSS variants in the browser: olive/forest, cool sage, and deep forest. Selected cool sage because its muted color and softer light provide a calmer backdrop without making the whole artwork too dark.

- Back plane: a 145-degree gradient from `#6c8974` through `#456350` to `#344c3e`.
- Front plane: a 155-degree gradient from `#294c49` to `#183530`.
- Both planes have a faint inset highlight for subtle depth, without an animated blur or extra decorative layer.
- Portrait: `brightness(1.035) contrast(.98)` lifts exposure slightly and softens harsh shadows. The original image asset is unchanged.
- Foreground fade continues to composite the full artwork into the page color, without an alpha mask exposing the green through the photograph.

## Verification

TypeScript and Vite production build passed. Playwright tested the built static site at 320, 390, 768, and 1440px. Correct gradients and portrait filter were present; no portrait mask or horizontal overflow appeared; no page errors occurred.

Actual mobile touch context at 390x844, DPR 2, CPU throttling rate 4: trail-active frame median 6.9ms, p95 7.1ms, maximum 15 trail strokes per frame, and zero layouts during the 10-second measurement. These are local simulated-load measurements; they confirm that the styling retained the prior animation work budget.

Visually reviewed all three variants plus final mobile and animated desktop captures. Files in `output/playwright/`: `hero-audit-before.png`, `hero-audit-olive-forest.png`, `hero-audit-cool-sage.png`, `hero-audit-deep-forest.png`, `hero-tonal-final-390.png`, `hero-tonal-final-1440.png`, and `hero-tonal-final-motion.png`.

This is a CSS-only visual change. Existing unit tests were not rerun; validation focused on visual QA, production compilation, responsiveness, and animation profiling.
