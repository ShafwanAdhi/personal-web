# Featured projects and collection navigation

Date: 2026-10-13.

- Home Selected Projects now displays three configured featured projects on every viewport, without filters or a filtered count. `work.featuredProjectIds` controls selection and order. The dummy selection covers data science, AI/ML, and software/robotics.
- Filters are available exclusively on `/projects`, retaining URL and detail/back context.
- Navbar Projects points to `/projects`; Certifications points to `/certifications`, on both home and nested pages. About and Contact still target home sections.
- Existing collection back links to `/#portfolio` and `/#certifications` retain intentional section scrolling even though those sections no longer appear in the navbar.
- Removed the obsolete mobile-preview media-query hook and count styles. README reflects current behavior.

Verification: 27 tests passed across four files. TypeScript and Vite production build passed. Playwright tested the built site on a plain static server at widths 320, 390, 768, and 1440px: three featured projects, no home tabs, and no horizontal overflow. Desktop and touch navigation reached all seven projects and all six certifications. Filtering Software returned five projects. Nested-page navbar links use valid paths, and collection back links reached the corresponding home heading with approximately 48px top spacing. No browser page errors occurred.

Visual captures: `output/playwright/featured-projects-1440.png` and `output/playwright/featured-projects-390.png`.
