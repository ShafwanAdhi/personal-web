# Reference Portfolio

A responsive portfolio built with React, TypeScript, and Vite. Its charcoal sections, green buttons, lime skills strip, Poppins typography, project grid, and closing CTA follow the supplied reference.

The current layout uses a compact desktop scale, intended to feel like the earlier design at approximately 67% browser zoom while viewing at 100%. Content is capped at 960px; desktop headlines are capped at 34px. Project and experience grids use three columns from 1024px, two columns from 600px to 1023px, and one column below 600px. Body copy uses a readable 14px baseline. Experience entries separate role, organization, location, and description; dates stay above the content. Navigation, buttons, social links, gallery controls, and credential links have targets of at least 44px.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://127.0.0.1:5173`.

```sh
npm test       # Visitor interaction tests
npm run build # Type-check and production build
npm run preview
```

## Personalize the website

Edit **`src/data/portfolio.ts`**. This is the single source for all website copy and personal data:

- `meta`: page title, description, and language.
- `identity`: name, brand, email, portrait path, and portrait description.
- `navigation`, `socials`: menu labels and destinations.
- `hero`, `skills`, `about`: introduction, skills, and work experience.
- `work`: project categories, default/all filter IDs, previews, gallery slides, role, timeline, tech stack, contributions, and outcomes.
- `projectDetail`: case-study headings, gallery controls, and accessible labels.
- `certifications`: home preview, collection-page copy, and certification records.
- `notFound`: recovery-page copy.
- `cta`, `contact`: closing headline and contact copy.
- `ui`: navigation and accessible labels.

Change both `identity.email` and `contact.emailLabel` to your email. Email and social links use the supplied Shafwan Adhi details. Projects describe WaspadAI, Numora, SIPARIH, UM RAG Assistant, Bonjermgu, and SiDiKa using the supplied project-context packages. Evaluation numbers retain their documented scope. Certification and course records use the supplied documents.

Social links contain Gmail, LinkedIn, and GitHub only. Update their destinations under `socials`, including Gmail's `mailto:` address. Gmail opens the visitor's email app; LinkedIn and GitHub open in a new tab.

Put your images in **`public/assets/`**, then use `/assets/filename.webp` in the data file. The hero uses your supplied grayscale photograph, with the background removed, at `/assets/portrait-shafwan.png`. To replace it again, use a transparent PNG or WebP and update `identity.portrait` and `identity.portraitAlt`. Project previews and galleries use WebP assets under `public/assets/projects/`. WaspadAI combines AI/API work with explicitly scoped mobile-team contributions; Numora and SIPARIH are classified as software.

Project IDs are unique URL slugs defining `/projects/<id>`: `waspadai`, `numora-question-variants`, `siparih`, `sisdas-rag-assistant`, `bonjermgu`, and `sidika`. Edit each project's `gallery`, `tools`, `overview`, `contributions`, and `achievements` in the data file. Gallery images preserve their full aspect ratio; screenshots and architecture diagrams have explanatory captions. Dates show months of documented activity rather than estimated hours worked.

Project filters remain All, AI / ML, Software Engineering, and Others, in that order. WaspadAI and UM RAG Assistant belong to AI / ML; Numora, SIPARIH, Bonjermgu, and SiDiKa belong to Software Engineering. Others currently displays the configured empty state. `work.defaultCategoryId` controls the initial filter; `work.allCategoryId` identifies All.

The home page shows three featured projects on every screen size, without filters, followed by Explore All Projects. Choose their IDs and order in `work.featuredProjectIds` (up to three entries are shown; IDs must match existing projects). `/projects` displays the complete collection and category filters. The selected category is preserved in its URL, through reloads, and when returning from a case study. Next-project suggestions stay in the selected category; a category with only one project explicitly offers work from the full collection instead. All collection titles, descriptions, and button labels are configurable under `work`.

Featured home projects link the entire preview image to their case study, with a visible arrow, keyboard focus, and an accessible label. The collection page retains its View Case Study text actions.

Uploaded learning records include two professional certificates and seventeen courses from `src/certificate/` and `src/course/`. Their public documents and WebP previews live in `public/assets/credentials/`. Metadata, `kind` (`certificate` or `course`), `fileUrl`, and optional verification URLs remain editable in `src/data/portfolio.ts`. The collection separates professional certificates from individual courses and shows item counts. Professional certificates and courses display full image previews directly in responsive grids. Kaggle has no credential ID or verification URL in the supplied image; its original image is available instead.

The home page displays only entries with `kind: 'certificate'` in `certifications.items`; `/certifications` displays every entry. Add an optional `image: '/assets/my-certificate.webp'` to use a real certificate instead of the generated document layout. Add `credentialUrl` to show a verification link. Name, issuer, date, credential ID, and skills are editable for each record.

On mobile, home certifications use full-width previews, larger titles, readable metadata, and document and verification links with 44px touch targets. The home layout remains centered on tablet and desktop. The collection displays course images directly on every device.

## Interactions

Navigation contains About, Projects, Certifications, and Contact. Projects opens `/projects`; Certifications opens `/certifications`. Section headings have 48px of space above them when reached through navigation or collection back links. Contact scrolls to the natural end of the document without adding empty space. Fresh landing-page loads and reloads start at the hero and clear an old section hash. Intentional links from project and certification pages still reach their selected home section after fonts are ready. Reduced motion uses immediate scrolling. Explore My Work scrolls to the featured projects. The closing Hire Me button and the email open the visitor's email app. Each project has one View Case Study link to its own case-study page. Gallery arrows, pagination dots, keyboard arrows, and horizontal swipes change images. There is no autoplay. Arrow keys navigate the category tabs. Animations respect reduced motion. The skills strip scrolls continuously, pauses on hover or keyboard focus, and stops with reduced motion. Navigation marks the current collection, project category tabs wrap instead of clipping, and empty categories offer a working return to All.

## Build and static hosting

`npm run build` produces `dist/index.html`, `dist/projects/index.html`, `dist/projects/<id>/index.html` for every project, and `dist/certifications/index.html`. Pages share the same built assets and get their own initial title and description from the data file. Upload the complete `dist` folder to a static host at the domain root; valid project and certification URLs do not require an SPA rewrite. Directory URLs with or without a trailing slash work. Rebuild after adding or changing projects.

## Animations

The website now uses [Motion for React](https://motion.dev/docs/react) for a coordinated motion system:

- Hero text enters through masks in sequence, followed by the supporting copy and actions.
- The portrait and green shapes respond to mouse movement through bounded springs. Python, PyTorch, and FastAPI float on continuous sine waves: vertical movement uses a 4.8-second period and subtle rocking uses a 6.8-second period. They exchange slots every six visible seconds along a closed elliptical path: PyTorch to Python, Python to FastAPI, FastAPI to PyTorch. Each exchange takes 2.8 seconds with smooth acceleration and deceleration. A periodic angular Hermite spline keeps the path continuous through every slot and lap. Timers, orbit travel, and floating pause outside the viewport or when the browser tab is hidden; reduced motion restores the starting positions.
- A foreground gradient fades the photo and underlying shapes together into the page color; the photo itself stays opaque, so green shapes do not bleed through the shirt. Icon movement uses compositor transforms instead of animated layout positions. During each exchange, blue, orange, and teal comet trails follow the actual orbit and floating offsets. Glow, bright core, filament, and sparks use at most 15 whole-path strokes per frame, with no per-segment blur. Trail history is sampled at approximately 60Hz while icons follow the display's frame rate. The canvas sleeps when no trail remains, clears on pause or reduced motion, and uses untransformed layout dimensions for correct sizing during the entrance animation.
- Section headings, experience entries, and projects reveal on scroll. A thin progress bar follows reading progress. The closing CTA blends from the dark certification section into the charcoal footer. The full orbit sits beside the copy on desktop and beneath it on mobile. Its artwork shifts with scroll depth. Mouse hover adds spring-based 3D tilt, responsive ring shapes, a pointer-following glow, and three luminous comet trails. Traces pause offscreen; touch and reduced motion do not trigger the hover effects.
- Project previews tilt with a soft light effect. Action and social links gently follow the mouse. Category changes animate the active underline and project entry/exit.
- Certification cards on both pages lift on mouse hover; their previews tilt toward the pointer with a tracked light effect, a moving seal, and a highlighted title. The effects reset on pointer exit and are disabled for touch and reduced motion.
- Gallery slides crossfade with a small directional movement. Exiting images leave the accessibility tree immediately. Case-study content and certification cards use the same scroll reveals as the home page.

Pointer effects require a mouse and a fine pointer. Touch interactions retain their normal behavior. Reduced-motion preferences are observed live, so enabling or disabling the preference does not require a reload. Scroll reveals fall back to immediately visible content when IntersectionObserver is unavailable.

Adjust reveal timing in `src/components/MotionUI.tsx`, hero timing in `src/components/Hero.tsx`, and pointer spring settings in `src/lib/usePointerMotion.ts`. All website copy and personal data still come from `src/data/portfolio.ts`.

## Verification artifacts

Playwright screenshots and the browser QA report are under **`output/playwright/`**. These generated files are ignored by Git. The implementation spec and checklist are in `docs/superpowers/`.

Latest mobile collection checks: `mobile-preview-projects.png`, `mobile-preview-certifications.png`, `projects-collection-mobile.png`, and `mobile-change-desktop-certifications.png`. The verification record is `docs/superpowers/verification/2026-10-12-mobile-collections.md`.

Latest compact-layout screenshots: `compact-1440-full.png`, `compact-1024-full.png`, `compact-768-full.png`, and `compact-390-full.png`. Earlier screenshots record the original reference-scale implementation.

Previous animation artifacts: `advanced-animation.webm`, `motion-1440-full.png`, `motion-768-full.png`, `motion-390-full.png`, `motion-dialog.png`, and `motion-touch.png`.

Latest page artifacts: `pages-home-projects.png`, `pages-home-certifications.png`, `pages-detail-desktop.png`, `pages-detail-full.png`, `pages-detail-mobile.png`, `pages-certifications-desktop.png`, `pages-certifications-mobile.png`, and `pages-touch-gallery.png`. The pages were checked at 320, 390, 600, 768, 1024, 1440, and 1920px, including direct-entry and reload on a plain static server.

## Asset provenance

The supplied screenshot is the visual reference. A public [portfolio exploration by Calvin Alvito](https://dribbble.com/shots/23595427-Personal-Portofolio-Landing-Page) was inspected during reference research; its laptop artwork is not used on this website. `project-preview.svg`, `analytics.svg`, `pipeline.svg`, `evaluation.svg`, and `robotics.svg` are code-authored placeholders. Certificate previews use the supplied documents; HTML/CSS provides a fallback only for records without an image. The current portrait is the user's supplied photo, edited with the built-in imagegen tool to remove its background; asset notes are in `docs/asset-notes.md`. The previous generated portrait is retained but is no longer used. Poppins is self-hosted through `@fontsource/poppins` and its package includes the font license.

Case-study website buttons use each project's optional `websiteUrl` field in `src/data/portfolio.ts`. WaspadAI, UM RAG Assistant, and Bonjermgu link to their websites. SiDiKa has an empty URL ready for the owner to fill; the button appears when populated. Numora and SIPARIH have no website button. The shared label is `projectDetail.websiteLabel`. Links open in a new tab.
