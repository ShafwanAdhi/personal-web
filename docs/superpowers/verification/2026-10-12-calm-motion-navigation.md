# Calm motion and navigation corrections

Current behavior:
- Navbar: About, Portofolio, Certifications, Contact. No Home item.
- Fresh landing loads and reloads start at the hero, clearing stale section hashes. Cross-document links deliberately selected in the portfolio still navigate to their home section through a one-use session intent.
- Section navigation leaves 48px above the heading. Contact stops at the natural document end; no viewport spacer or conditional minimum height remains.
- Icon floating uses continuous sine waves, with an eight-pixel vertical amplitude over 4.8 seconds and five-degree rocking over 6.8 seconds. No stepped CSS keyframes or velocity-based banking remain.
- Icons exchange slots every six visible seconds. Each curved trip takes 2.8 seconds with a smooth acceleration/deceleration curve. Floating and travel preserve their state while paused offscreen; reduced motion resets the static arrangement.

Verification:
- The stale-hash startup regression failed before the navigation correction and passed afterward.
- Real Playwright fresh-entry and reload checks confirm scrollY zero and cleared stale hashes.
- About, Portofolio, and Certifications align at 48px, within one pixel, at 1440, 390, and 320px. Intentional navigation from a project detail page remains correct.
- Contact changes neither document height nor footer height at those widths, and its anchor minimum height is zero.
- Real-time animation sampling confirms the first five seconds preserve orbit positions, the six-second exchange is still in transit at 6.9 seconds, and the correct destination is reached by nine seconds. The second exchange also lands in the correct slots.
- Continuous floating produced distinct transforms throughout the recording interval. Offscreen and live reduced-motion behavior were checked.
- Independent review found no Critical or Important issue in the motion lifecycle or navigation handling.

Artifacts: output/playwright/contact-no-spacer.png and calm-hero-icons.png.
