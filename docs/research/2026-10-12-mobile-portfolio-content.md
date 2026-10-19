# Mobile portfolio content research

Date: 2026-10-12. Scope: research and recommendations only; no product UI changes made.

## Existing implementation

Playwright measurements on the current home page, with an 844px viewport height:

| Width | Selected Projects height | Certifications height | Project count | Certification count |
| --- | ---: | ---: | ---: | ---: |
| 390px | 2838px | 1318px | 7 | 3 |
| 320px | 2594px | 1218px | 7 | 3 |

At 390px the two sections occupy approximately 4.9 viewport heights. Project cards become a single column below 600px. Certification previews also become a single column and retain a large document preview. The certification collection already has its own page; projects currently have individual case-study pages but no complete collection page.

## Primary research

1. Nielsen Norman Group, Progressive Disclosure: show important initial content, make secondary content available on request, and use explicit labels that explain the next action. This is a general interaction principle, not a prescribed portfolio card count.
   https://www.nngroup.com/articles/progressive-disclosure/
2. Nielsen Norman Group, 5 Steps to Creating a UX-Design Portfolio: curate the strongest work and choose roughly 3-5 detailed case studies. This research concerns UX portfolios; applying the curation principle to this data/AI/software portfolio is a design inference.
   https://www.nngroup.com/articles/ux-design-portfolios/
3. Nielsen Norman Group, Carousels on Mobile Devices: sequential access and weak discoverability can make browsing inefficient. Horizontal carousels should not be the default solution merely to make the page shorter.
   https://www.nngroup.com/articles/mobile-carousels/
4. Baymard, Product List UX: Number of Products to Load: Load More often performs well for product lists, while suitable batch sizes depend on content and device. These findings concern ecommerce; they do not establish a universal portfolio page size.
   https://baymard.com/research-articles/number-of-items-loaded-by-default

## Recommended design for this repository

Use the home page as an introduction to selected work, with clearly named links to complete collections.

- Mobile below 600px: show three selected projects, ordered to demonstrate data science, AI/ML, and software. Preserve normal image-led cards and View Detail actions.
- Provide a View All Projects action that opens a project collection page. The collection can retain the existing category filters and full project list. Category intent should be preserved if filters remain on the home preview.
- Mobile certifications: retain three featured records but use compact rows with a small thumbnail, title, issuer, and date. Keep full document artwork, credential IDs, skills, and verification links on the certification collection page.
- Keep one View All Certifications action linking to the existing collection. Avoid adding a second expansion action that duplicates this destination.
- Desktop and tablet layouts can retain their current presentation; the immediate concern is the mobile home page length.
- Button labels should describe behavior. Show More Projects expands the current list; View All Projects navigates to a collection. A generic View More label obscures this distinction.

If adding a projects collection page is deferred, an acceptable smaller change is to show three mobile projects and reveal another three with Show More Projects. Show the remaining count, keep the selected category, and do not jump the viewport on expansion. Preserve expanded/filter state when returning from details. This approach still makes the home page longer after expansion, so it is the secondary option for the stated goal.

## Verification criteria for later implementation

- Important project and certification information stays visible without an expansion.
- The mobile home page provides a shorter path to the closing CTA and Contact.
- Expansion or navigation does not unexpectedly move the visitor or reset their browsing context.
- Actions remain available to touch and keyboard users; animations respect reduced motion.
- Full project and certification collections remain reachable from the home page.
