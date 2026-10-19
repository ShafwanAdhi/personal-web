# Portfolio pages verification

Requirements: remove Blog; add default Semua filter; replace project actions with one View Detail link; provide case studies with a sliding main image and Tech Stack, Overview, What I Did, Impact & Achievements; add three certification previews after projects and a separate complete collection.

Architecture: App selects a page from the document URL, with shared header/footer and normal anchor navigation. HomePage, ProjectsSection, ProjectGallery, ProjectDetailPage, and Certifications own their individual views. Existing Motion reveals, pointer effects, compact widths, and live reduced-motion handling remain in use. All configurable prose, project data, and certification data are in src/data/portfolio.ts.

Verification completed:
- Visitor tests initially failed on the six missing behaviors; implementation passes all 12 tests.
- TypeScript and Vite production build pass.
- Home, case study, and collection layouts checked at 320, 390, 600, 768, 1024, 1440, and 1920px; no horizontal overflow or broken loaded images.
- Project and certification grids use one/two/three columns as appropriate.
- All seven project URLs and the certification collection open directly on Python http.server serving dist, without a catch-all rewrite. Refresh, return-to-home anchors, and collection navigation work.
- Gallery next/previous, wrapping, direct slide selection, keyboard navigation, and live reduced motion verified.
- Real mobile/touch context: CDP touch swipe advances the gallery; menu and project navigation work; certificate preview content does not clip at 320px.
- Screenshots visually inspected for desktop home projects, home certifications, complete collection, and mobile case study.
- Browser runtime errors: zero.
- Independent review caught static deployment and encoding issues; both fixed and re-reviewed with no remaining Important or Critical findings.

Scope: project metrics, images, and certifications are samples. Hosting assumes the domain root. Replace sample records and rebuild to generate current route documents.
