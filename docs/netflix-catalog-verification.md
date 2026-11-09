# Netflix case-study integration verification

Local production build verified on 9 November 2026, before publication.

- 61 Vitest tests passed, including the optional application directory, safe links, existing cases, category counts and navigation.
- TypeScript and Vite production build passed.
- 81 Chromium browser checks passed at 320, 390, 768 and 1440 px. No uncaught JavaScript errors.
- One additional native Chromium touch-swipe check passed at 390 px.
- All six source project records were compared with the baseline and remain identical. Homepage featured IDs remain unchanged.
- Four artifact bundles were checksum-verified before importing results. Source commits, runs, screenshot capture identity and asset hashes are recorded in [the source register](netflix-catalog-sources.json).
- Screenshot review covered the four application rows on desktop/mobile, the complete segmentation projection and the six production captures. Semantic chart colors were retained.

Browser coverage includes seven collection entries, three AI/ML entries, filtered return and next-case links, all six decoded gallery images, keyboard gallery controls, initial canonical/OG metadata, public report access, annual forecast failures, regression limitations, reduced motion and normal-motion controls. Touch emulation is not a physical-device or cross-browser certification.

## Replay

Build first with `npm test` and `npm run build`, then serve `dist` using a plain static server on port 8770:

```powershell
python -m http.server 8770 --bind 127.0.0.1 --directory dist
```

From the repository root, start a new Playwright CLI session so relative screenshot paths use this directory:

```powershell
New-Item -ItemType Directory -Force output/playwright/netflix-integration
npx --yes --package @playwright/cli playwright-cli open about:blank
npx --yes --package @playwright/cli playwright-cli run-code --filename=scripts/browser-check-netflix.js
npx --yes --package @playwright/cli playwright-cli run-code --filename=scripts/browser-check-netflix-touch.js
npx --yes --package @playwright/cli playwright-cli close
```

Local browser logs and screenshots are under ignored `output/netflix-integration` and `output/playwright/netflix-integration`. The public report and six WebP assets are tracked, so serving the case study does not depend on those ignored directories. Production rollout follows the [deployment guide](../deploy/README.md); local verification alone does not establish deployment.
