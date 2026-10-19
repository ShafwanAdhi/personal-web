# Hero technology orbit verification

The three icons float and rotate at distinct 1.9-2.4 second rhythms. Every three visible seconds they exchange slots along a curved ellipse: PyTorch to Python, Python to FastAPI, FastAPI to PyTorch. The shared spring uses stiffness 300, damping 15, and mass 0.55; icon banking follows its velocity.

Verification:
- Four geometry tests cover fixed slot positions, the requested exchange direction, a continuous complete lap, curved travel and bounds, and matching incoming/outgoing velocity at slot boundaries.
- The velocity regression failed before Hermite interpolation and passed afterward. Independent review confirmed the closed spline shares matching derivatives.
- All 16 tests pass; TypeScript and Vite production build pass.
- Real-time Playwright sampling verified three successive exchanges, ongoing float/rotation, high-speed travel, overshoot, and return to the initial arrangement.
- Actual transformed icon bounds sampled during motion at 1440, 768, 641, 390, and 320px. No horizontal overflow or icon clipping after adding desktop/tablet clearance.
- Reduced motion restores original slots and disables float. Offscreen icons preserve their positions for longer than one exchange interval and pause their float animation.
- Screenshot: output/playwright/hero-icon-orbit-desktop.png. Motion was verified with real-time frame sampling in Playwright.
