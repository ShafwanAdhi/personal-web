# Portfolio Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan inline. Track each step below.

**Goal:** Deliver a responsive reference-matched portfolio with one editable data file and verified interactions.

**Architecture:** Typed local content feeds React components. CSS owns reference geometry and responsive layouts. Assets and font are served locally.

**Tech Stack:** React, TypeScript, Vite, Vitest, Playwright CLI.

**Spec:** `docs/superpowers/specs/2026-10-12-portfolio-design.md`

## Global Constraints

- All displayed strings and user data live in `src/data/portfolio.ts`.
- Match the supplied reference at 1024px; use one column on mobile.
- No deployment or external publication.
- Respect keyboard access and reduced-motion preferences.

## Review Focus

- A category with no projects displays configured empty-state copy.
- Long replacement names and descriptions wrap without page overflow.
- Escape closes details and returns focus to the opening button.
- Mobile navigation closes after choosing an anchor.
- All local assets load, including after production build.

### Task 1: Layout, assets, and centralized data

**Files:** `src/data/portfolio.ts`, `src/App.tsx`, `src/components/Icons.tsx`, `src/styles.css`, `public/assets/`, configuration, `index.html`.

**Interfaces:** `portfolio` is the sole content source; `App` renders the page.

- [x] Prepare project and local reference assets.
- [x] Write behavior tests and verify RED before product code.
- [x] Build typed data and reference-matched layout.
- [x] Run the behavior suite and production build.

### Task 2: Browser validation and refinement

**Files:** CSS and components as needed; `README.md`, `output/playwright/`.

**Interfaces:** All interactive elements expose accessible names from `portfolio`.

- [x] Use Playwright CLI to inspect desktop and mobile screenshots.
- [x] Exercise filters, project details, keyboard dismissal, navigation, and mobile menu.
- [x] Confirm no console errors, broken assets, or horizontal overflow.
- [x] Refine observed visual issues; rerun changed behavior checks and build.
- [x] Write clear customization and run instructions.
- [x] Review final implementation and report verified results.
