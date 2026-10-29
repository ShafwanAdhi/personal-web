# Borderless image preview and inline project role

Date: 2026-10-29.

Removed the certificate viewer's panel, border, padding, rounding, shadow, and visible caption. The full image determines the dialog dimensions within viewport limits, with a floating close button. The dialog retains its accessible title through aria-label, blurred backdrop, keyboard focus retention/restoration, Escape, backdrop dismissal, and scroll lock.

Featured project role labels and values now share a baseline in a two-column row. Long values wrap within their column without truncation or horizontal overflow.

Verification: 50 tests passed across four files; TypeScript and Vite build passed. Image-only assertions failed before the viewer change and passed afterward.

Playwright checked 320x568, 390x844, 600x900, 768x900, 1440x900, and 844x390. At every size:

- Role label/value started on the same line and did not overflow.
- The dialog had zero border/padding and transparent background, with no caption. Image and dialog width/height matched within one pixel.
- The entire image fit the viewport; background blur remained 12px.
- Tab retained focus, Escape closed the viewer, and focus returned to the image trigger.

Also checked a course image, image clicks without dismissal, backdrop dismissal, and actual mobile touch opening/closing. No page errors occurred.

Visually inspected `output/playwright/inline-project-roles-desktop.png` and `borderless-certificate-390.png`. Additional captures: `inline-project-roles-mobile.png` and `borderless-certificate-1440.png`.

Follow-up compact styling: highlighted titles now use one line with ellipsis and a full-title hover attribute. Removed the 16px gap before the role row. Production build and Playwright checks at 320, 390, 600, 768, and 1440px passed: title height matches one line, the description-to-role gap measures 0px, no horizontal overflow occurs, and collection titles retain normal wrapping. Visually inspected `output/playwright/compact-highlight-1440.png`; mobile capture is `compact-highlight-390.png`.
