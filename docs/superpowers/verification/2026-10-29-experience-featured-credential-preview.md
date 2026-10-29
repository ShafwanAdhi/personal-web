# Experience, featured projects, and certificate image previews

Date: 2026-10-29.

## Implemented

- A Little About Me and Experience & Involvement are both h2 headings with matching typography; experience roles are h3 headings. Added field-specific robot, teaching, and code icons, subtle pathway rules, sequence markers, and a small hover response.
- Featured project cards show a 7-9-word sentence, canonical project role, and exactly three selected technologies. Copy and tool selection are in each project's `preview` object in `src/data/portfolio.ts`. Existing full descriptions and case-study evaluation evidence are retained.
- Clicking an actual certificate/course image opens a native dialog with the full image and its title/issuer/date. The backdrop is darkened and blurred by 12px. Escape, close button, and backdrop clicks close the viewer; clicking the image does not close it.
- Background scrolling is locked, scrollbar alignment is preserved, and focus returns to the opener. Explicit forward/reverse Tab retention supplements native modal focus handling. Open Document still opens its PDF/image document in a separate tab.
- Records without an image retain the existing noninteractive generated fallback.

## Verification

`npm test`: 50 tests passed across four files. Six targeted tests initially failed before implementation. Additional Tab-retention assertions also failed before the explicit handler was added, then passed. jsdom's missing native dialog methods are polyfilled only in test setup; real browser checks cover native modal behavior.

`npm run build`: TypeScript and Vite production build passed. `git diff --check` reported no whitespace errors.

Playwright ran against the built static site on `127.0.0.1:4175`:

- Widths 320, 390, 600, 768, 1024, 1440, and 1920px: no horizontal overflow, matching heading size/weight, all featured summaries at most 14 words, original roles present, and three stack items each.
- Both home and full certificate collection open image dialogs. A course image was also checked. The backdrop reports `blur(12px)`.
- Mouse wheel does not move the underlying page. Image clicks keep the popup open. Backdrop, close, and Escape work.
- Native Tab behavior initially cycled through BODY/browser chrome; the final handler keeps repeated Tab and Shift+Tab on the viewer's sole close control. Verified on both routes, with focus restoration and cleared scroll lock after Escape.
- Open Document created a separate PDF tab; its local URL returned HTTP 200 with PDF content type and did not open an image modal.
- Actual mobile touch tested image opening/closing on home and course collection. Dialogs fit 320x568, 390x844, and 844x390 viewports with the close control visible.
- No browser page errors occurred in the main responsive and interaction checks.
- Independent read-only review confirmed no remaining Critical or Important issues, including after the explicit keyboard-focus fix.

Visual captures in `output/playwright/`: `polish-about-1440.png`, `polish-about-390.png`, `polish-projects-1440.png`, `polish-projects-390.png`, `polish-certificate-dialog-desktop.png`, `polish-certificate-dialog-mobile.png`, and `polish-course-dialog-desktop.png`.
