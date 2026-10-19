# Reference portfolio design

## Current layout revision

The user subsequently requested a smaller desktop presentation resembling the earlier website at approximately 67% browser zoom, with responsive layout changes including three project columns. This request supersedes the original two-column desktop grid and reference size measurements below. Current CSS uses a 960px content cap, 26–34px desktop hero headlines, a 300–360px hero, and three/two/one project and experience columns at desktop/tablet/mobile widths. The reference's theme, assets, content, and interactions remain the design basis. Full verification is recorded in `docs/superpowers/verification.md`.

The user then requested advanced animation. The current implementation adds a coordinated Motion system for hero entry, mouse parallax, floating badges, scroll reveals, reading progress, project tilt and category transitions, magnetic actions, and modal presence. These effects preserve compact geometry and keyboard behavior, stay inactive for touch pointer movement, and respond immediately to changes in reduced-motion preference.

## Intent and authorization
Build a local portfolio in the supplied workspace, following the supplied image as closely as practical. The user explicitly delegates stack and implementation choices, requests dummy data, asks for Playwright validation, and requests continuous work until visual quality is satisfactory. Proceed without additional design approval. No hosting or publication is requested.

## Visual thesis
A quiet charcoal portfolio with Poppins typography, green actions, a lime skill strip, and a grayscale portrait over tilted green shapes. Match the reference's composition, spacing, and content hierarchy.

## Content plan
Header with brand and five navigation links; two-column hero; full-width skill strip; darker about and three-entry experience section; two-column selected-project grid with four category tabs; large closing CTA with gray geometric shapes; contact footer.

## Architecture
React, TypeScript, and Vite. `src/data/portfolio.ts` holds every displayed string, metadata, navigation item, image path, social link, experience, category, project, and project-detail copy. Components consume this typed object. Local images and font remove runtime third-party asset dependencies.

## Interaction thesis
Brief hero entrance, a slow moving skills strip, and subtle project/button hover transitions. Respect reduced motion. Navigation scrolls to sections; the mobile menu collapses after selection. Project tabs filter actual data. View More opens accessible project details with Escape and focus restoration. Hire Me opens email. Social and Dribbble links open configured URLs.

## Reference measurements
At 1024px wide: content width approximately 792px; hero and header 470px tall; skills strip 72px; about section approximately 529px; projects approximately 1126px; footer and CTA complete the approximately 2758px page. At smaller widths, retain hierarchy and use a single column without horizontal overflow.

## Verification
Behavior checks cover filtering, accessible project details, and mobile-menu selection. Production build must pass. Playwright CLI checks 1024px, 1440px, 390px, and 320px viewports, screenshots, tab switching, modal, navigation, keyboard, image/font loading, console errors, and horizontal overflow. Visual refinement follows inspected screenshots.
