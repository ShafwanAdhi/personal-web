# Mobile portfolio collections verification

Date: 2026-10-12. Implements the approved recommendation in `docs/research/2026-10-12-mobile-portfolio-content.md`.

## Result

Below 600px, the home project browser displays up to three projects per category with a count and a View All Projects link. The new `/projects` page contains the complete collection and filters. Home certifications display three compact rows; the complete certification page retains full document previews and credential information. Tablet and desktop retain the existing grids.

Collection category state is preserved in the URL through reload and detail/back navigation. Next-project links wrap within a filtered category. A singleton category clearly offers another category from the full collection without carrying the previous filter.

All new copy and the mobile preview limit are configured in `src/data/portfolio.ts`. The production build generates `/projects/index.html` and works on plain static hosting.

## Automated checks

- `npm test`: 23 tests passed across four files.
- `npm run build`: TypeScript and Vite production build passed.
- Regression tests failed before implementation and passed after the changes, including filtered next-project wrapping and singleton navigation.
- Independent read-only review confirmed no remaining Critical or Important findings.

## Playwright production checks

Tested the built `dist` on a plain Python static server at `127.0.0.1:4175`, without SPA rewrites.

| Width | Home projects | Home certificates | Projects height | Certifications height | Horizontal overflow |
| --- | ---: | ---: | ---: | ---: | --- |
| 320px | 3 | 3 | 1348px | 559px | No |
| 390px | 3 | 3 | 1441px | 521px | No |
| 599px | 3 | 3 | 1790px | 521px | No |
| 600px | 7 | 3 | 1578px | 854px | No |
| 768px | 7 | 3 | 1805px | 958px | No |
| 1440px | 7 | 3 | 1363px | 561px | No |
| 1920px | 7 | 3 | 1363px | 561px | No |

At 390px, the combined home sections fell from 4156px to 1962px (approximately 53% shorter). At 320px, they fell from 3812px to 1907px (approximately 50% shorter). All fresh home entries started at scroll position zero.

Verified category selection, keyboard Home navigation, collection/detail/back navigation, static directory redirects with query preservation, direct entry and reload, unknown category fallback, singleton next-project navigation, and all six certification records on the full page. No page errors occurred in the main responsive/flow checks.

Actual mobile touch context verified taps through collection/detail/back, no horizontal overflow, and no mouse-hover activation. Reduced-motion content remained visible. Desktop certificate hover still activates lift/tilt. Live viewport resizing switches the home project count between three and seven without a reload.

Visually inspected screenshots in `output/playwright/`: `mobile-preview-projects.png`, `mobile-preview-certifications.png`, `projects-collection-mobile.png`, and `mobile-change-desktop-certifications.png`. Additional captures include `certifications-collection-mobile.png` and `mobile-certifications-320.png`.
