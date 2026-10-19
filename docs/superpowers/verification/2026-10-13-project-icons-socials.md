# Project image links and social icons

Date: 2026-10-13.

Selected Projects now uses a permanent circular arrow link inside each image instead of a text action below the card. Each link has a 44px target, accessible View Detail label, project-title description, hover feedback, and visible keyboard focus. Collection-page text actions remain intact. Shared social links now display Gmail, LinkedIn, and GitHub only, with corresponding SVG icons. Gmail uses mailto without a new-tab target; profile links use a new tab. Destinations remain configurable in `src/data/portfolio.ts`.

Verification:

- The two new interaction tests failed before the changes; the complete suite then passed all 29 tests across four files.
- TypeScript and Vite production build passed.
- Playwright on the production static site at widths 320, 390, 768, and 1440px confirmed three image detail links, no home text actions, 44px targets, and no horizontal overflow.
- Keyboard Enter and actual mobile touch both navigated to the correct case study. Focus displayed a 2px outline. Collection retained seven text actions.
- Both social groups had exactly Gmail, LinkedIn, and GitHub. No page errors occurred during QA.
- Visually inspected `project-image-icon-desktop.png`, `project-image-icon-mobile.png`, and `social-icons-desktop.png` under `output/playwright/`.
