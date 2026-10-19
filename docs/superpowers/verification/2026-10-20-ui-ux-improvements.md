# UI/UX audit fixes

Implemented the findings from `docs/ui-ux-audit-2026-10-20.md` without adding dependencies.

- Experience role, organization, location, and description now have separate typographic levels. Dates sit above the content at every breakpoint.
- Important body copy uses 14px; roles and project titles use 17px. Credential metadata and gallery captions use readable secondary sizes.
- Buttons use white on `#087c22` (5.36:1); hover uses `#076a1d` (6.80:1).
- Navigation, social links, category tabs, document links, gallery controls, buttons, and email actions have targets of at least 44px in the browser checks.
- Category tabs wrap, visually distinguish their active state, and retain arrow-key navigation.
- Navbar identifies the active collection and the Projects section on project detail pages.
- A featured project's full image is one accessible case-study link. It supports keyboard and clicks away from the visible arrow.
- Course collection rows use native details/summary for optional previews. Document and verification links remain available without expanding a preview. Professional certificates retain full previews; headings show record counts.
- Footer description has a readable line length; the email appears as a separate action.
- The skills strip is static and wraps; the duplicate content and continuous marquee animation were removed.
- Empty project categories return to All, restore tab focus, and clear the category query.

## Verification

- `npm test`: 38 tests passed, including native course disclosure, navigation state, experience structure, full image links, and empty-category recovery.
- `npm run build`: TypeScript and production build passed.
- Playwright production preview: all four page types at 320, 390, 599, 600, 768, 1024, 1440, and 1920px (32 combinations). No horizontal page overflow, clipped category filters, or undersized targets among the tested controls.
- Touch contexts used for narrow screens; each width used a fresh browser context to avoid viewport scale carry-over.
- Course previews opened and closed with Space. Full image case-study links worked with both pointer and Enter. Menu navigation, active-state marking, category arrow keys, and gallery arrow keys worked.
- Normal motion checked separately at 390 and 1440px, including actual normal/hover button colors. Existing hero and gallery motion remains functional; the skills strip remains static.
- The course page at 390px decreased from approximately 8231px to 5013px (about 39% shorter). Increased text sizes and native preview controls account for the new layout.
- Browser page errors: none in the responsive verification run.
- Full screenshots and experience crops at 390 and 1440px are under `output/playwright/improved-*.png`; desktop home, mobile experience, mobile course collection, and mobile detail screenshots were visually inspected.

Runnable browser checks: `output/playwright/check-ui-improvements.js` and `output/playwright/check-ui-motion.js`, via Playwright CLI `run-code --filename`.

This verification covers the audited UI and interactions; it does not claim complete WCAG certification or benchmark performance.
