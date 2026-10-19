# Hero fade compositing and animation performance fix

Date: 2026-10-13.

## Root causes and fixes

The portrait alpha mask exposed the green shapes below its lower half. Removed that mask and added a foreground gradient above the whole artwork, below the icons, fading into `var(--page)`. The portrait remains opaque and the shapes fade with it. The gradient extends below the photograph's pointer-motion envelope.

The previous trail drew each tiny segment three times, including a `shadowBlur` operation, while icon travel updated percentage `left` and `top` every frame. Replaced these with five whole-path strokes per icon, gradient-based glow without blur, and transform-based icon positioning. Trail samples are limited to approximately 60Hz; rendering still follows the display refresh rate. The canvas frame loop now wakes on orbit changes and stops after its trail samples expire.

Independent review identified a further sizing issue: canvas dimensions were read through the entrance scale/rotation. Before the fix the backing width was 387px after a 408.8px layout had settled. Initial sizing now uses `clientWidth/clientHeight`; ResizeObserver updates use `contentRect`. Post-fix backing width was 409px, matching the expected value. Review confirmed no remaining Critical or Important findings.

## Profiling

Chrome DevTools Protocol, production build on a plain static server, viewport 1440x900, CPU throttling rate 4, 10-second observation after the entrance settled. RAF samples are classified as trail-active when canvas stroke calls occur. These are local measurements under simulated CPU load, not guarantees for every device. The display/browser cadence in this environment was approximately 144Hz.

| Metric | Original | Original with blur disabled (diagnostic) | Optimized |
| --- | ---: | ---: | ---: |
| Active frame median | 14ms | 7ms | 7.1ms |
| Active frame p95 | 21ms | 14ms | 14.2ms |
| Strokes per active frame p95 | 387 | 657 | 15 |
| Blurred strokes during run | 18180 | 0 | 0 |
| Stroke CPU time p95 | 3ms | 1.4ms | 0.6ms |
| Layouts during run | 164 | 278 | 0 |

The diagnostic isolated the cost of per-segment blur. The final implementation also removes animated layout coordinates and caps stroke count independently of display refresh rate. Median active frame time fell by approximately 49%, and stroke count p95 fell by approximately 96%.

An actual mobile touch context, 390x844 at DPR 2 with CPU throttling rate 4, recorded median 7.1ms, p95 14.2ms, and at most 15 strokes per frame. No video recording was active during profiling.

## Correctness and visual QA

- Regression test failed before the coordinate/fade change; all 30 tests then passed across four files.
- TypeScript and Vite production build passed.
- Playwright checked widths 320, 390, 599, 600, 768, 1024, and 1440px. No horizontal overflow; portrait mask is absent; icon start coordinates match the original orbit within 0.05 percentage points.
- Canvas measured zero clears during a 500ms idle window, 2233 visible pixels during travel, and zero visible pixels after scrolling offscreen. Reduced motion retained the original slot positions and blank decorative canvas.
- To verify compositing, compared screenshots with the green shapes visible and hidden. Four lower-body source points changed by at most 0-2 RGB levels (the PNG itself has slight alpha at those points); an outside-subject control changed by 64 levels. The earlier large green band through the body is gone.
- Visually inspected `hero-background-fade-390.png` and `hero-optimized-trails-desktop.png`; comparison captures are `fade-green-visible.png` and `fade-green-hidden.png`, all under `output/playwright/`.
- No browser page errors occurred during final QA. Existing six-second exchange intervals, 2.8-second travel duration, floating, pointer interaction, and pause/reduced-motion behavior remain.
