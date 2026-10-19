# User portrait replacement

Date: 2026-10-13.

Used the built-in imagegen edit tool to remove the white background from the user's attached grayscale photo. Saved the output locally as `public/assets/portrait-shafwan.png`. The image is 1254x1254 RGBA, with alpha extrema 0 and 255, and approximately 1.33 MB. The previous portrait remains available but is no longer referenced.

Updated `identity.portrait`, its accessible description, and the hero portrait frame to suit the new square photograph. Glasses, face, and folded arms remain visible over the existing green shapes. Hero orbit behavior was not changed.

Verification: TypeScript and Vite production build passed. Playwright tested the built static website at 320, 390, 768, and 1440px. The new photo decoded successfully at every width; no horizontal overflow or page errors occurred. Technology badge positions changed after the six-second orbit interval. Reduced-motion captures retain the portrait and all three badges.

Visually inspected `output/playwright/user-portrait-1440.png`, `user-portrait-390.png`, and `user-portrait-orbit.png`; additional captures record 320 and 768px layouts. The image asset and placement change introduces no new interaction logic, so existing unit tests were not rerun for this visual-only change.
