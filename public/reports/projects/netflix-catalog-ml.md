# Netflix Catalog ML & Analytics — methods and evidence

Frozen evidence reviewed on 9 November 2026. This report is a curated snapshot of four independently deployed applications, not a live benchmark feed. No models were retrained or reselected for the portfolio integration.

## Question and contribution

What can one historical catalog snapshot tell us about advisory labels, title similarities, historical cohorts, and release-to-catalog calendar-year differences? I built four separate data and model pipelines, saved their evaluation evidence, exposed artifact-based APIs, and built responsive React applications around their limits. The applications study metadata associations; the source does not contain viewing behavior, audience preferences, revenue or acquisition decisions.

My work covers audit and preparation, problem-specific validation, model comparison, error analysis, API/UI integration, and independent Docker deployments. Screenshots illustrate actual deployed interfaces and example inputs; example outputs are not evidence of generalization or business adoption.

## Shared source and reproduction boundary

- Known source: user-supplied `Dataset.csv`; **8,790 rows and 10 columns**.
- SHA-256: `90b02beeb554921f81d3b9a774d0f7766f6a65240162565f6b4082165dc2a1d3`.
- Observed release years: 1925–2021. Observed date-added range: 2008-01-01–2021-09-25.
- **Upstream source unverified. Redistribution permission unverified.** Similar public Netflix datasets are candidates only; no exact snapshot lineage, source version or license has been verified.
- Dataset acquisition date is unknown. The maximum observed date is not a retrieval date.
- Preparation counts below belong to different contracts applied to the same file. They must not be added as independent datasets.
- **Artifact inference:** included validated bundles support the applications without the raw CSV. **Training reproduction:** requires the supplied CSV with this exact hash. No public substitute is claimed to reproduce the training data. The raw CSV is not redistributed by this portfolio.

## Audience Ratings

I treated advisory-label prediction as imbalanced multiclass classification, fitting preprocessing inside training folds. I compared Dummy, Logistic Regression, Decision Tree and Random Forest, then froze selection by CV macro-F1 before testing. Higher test accuracy for Logistic Regression did not change selection.

Evidence run: `20261106T111736917654Z`. Generated from the active artifact; not a business-impact claim.

Selected by training-only CV macro-F1: **random_forest** (CV 0.346).

| Frozen test evidence | Selected model | Dummy baseline |
| --- | ---: | ---: |
| Macro-F1 | 0.334 | 0.038 |
| Accuracy | 53.4% | 36.5% |

Training: 7,029; test: 1,758; labels: 14. Metadata does not establish official suitability. Rare classes have very limited support; the test does not reselect the winner.

### Preparation and validation units

| Stage | Input rows | Output rows | Decision |
| --- | ---: | ---: | --- |
| Source validation | 8,790 | 8,790 | Verify the supplied SHA-256, schema, types and duration units. |
| Exact-content deduplication | 8,790 | 8,787 | Remove 3 identical content records. Reviewed residual entity variants remain training-only and are grouped within CV. |

- **Training: 7,029 titles. Seed-42 per-class allocation; grouped CV runs only inside training.
- **Held-out test: 1,758 titles. Used once after selection; no preprocessing or tuning is fitted here.
- **Test segment: Movie: 1,231 titles. All 14 labels, including absent labels as zero F1
- **Test segment: TV Show: 527 titles. All 14 labels, including absent labels as zero F1

### Source snapshot

- Repository commit: [3bbc725630ea](https://github.com/ShafwanAdhi/netflix-audience-ratings/tree/3bbc725630ea1c92df8904544bc19d3c9586602b).
- Frozen run: `20261106T111736917654Z`.
- [Evaluation evidence](https://github.com/ShafwanAdhi/netflix-audience-ratings/tree/3bbc725630ea1c92df8904544bc19d3c9586602b/artifacts/task-03/20261106T111736917654Z).
- [Dataset provenance](https://github.com/ShafwanAdhi/netflix-audience-ratings/blob/3bbc725630ea1c92df8904544bc19d3c9586602b/data/provenance.json).
- [Interactive evaluation](https://netflix-audience-ratings.shafwan.digital/evaluation).

## Content Segmentation

I compared clustering candidates in a shared weighted metadata representation, checked group-size eligibility and initialization stability, and interpreted representative titles. The PCA view explains only 25.9% of variance; it is a visualization, not the feature space used to justify audience segments.

Evidence run: `20261106T115043590368Z`. Generated from the active artifact; not a business-impact claim.

**kmeans / k=10**, 8,783 entities. Mean silhouette **0.241**; same-catalog seed ARI **0.662**.

Selected among the recorded algorithm/count candidates using shared features and eligibility constraints. These are in-sample internal diagnostics, not held-out classification accuracy. PCA explains 25.9% of variance; no viewer personas or recommendation outcomes are verified.

### Preparation and validation units

| Stage | Input rows | Output rows | Decision |
| --- | ---: | ---: | --- |
| Source validation | 8,790 | 8,790 | Verify the supplied SHA-256, schema, types and duration units. |
| Entity deduplication | 8,790 | 8,783 | Retain the first normalized title/type/year record; log all 7 removed-to-retained mappings. |

- **Fitted catalog: 8,783 titles. Full-catalog descriptive clustering; no supervised train/test split is applicable.

### Source snapshot

- Repository commit: [3f729a46bea7](https://github.com/ShafwanAdhi/netflix-content-segmentation/tree/3f729a46bea722737ed0b87c3cc1a64b453d0a37).
- Frozen run: `20261106T115043590368Z`.
- [Evaluation evidence](https://github.com/ShafwanAdhi/netflix-content-segmentation/tree/3f729a46bea722737ed0b87c3cc1a64b453d0a37/artifacts/task-04/20261106T115043590368Z).
- [Dataset provenance](https://github.com/ShafwanAdhi/netflix-content-segmentation/blob/3f729a46bea722737ed0b87c3cc1a64b453d0a37/data/provenance.json).
- [Interactive evaluation](https://netflix-content-segmentation.shafwan.digital/evaluation).

## Trend Forecasting

I separated annual release cohorts from monthly catalog additions. Expanding-window CV selected models before recursive held-out evaluation; saved historical projections refit on completed periods. Test comparisons retain last-value, seasonal-naive where applicable, and other predeclared candidates. A monthly winner against last value can still lose against seasonal naive or another baseline.

Evidence run: `20261106T122211417836Z`. Generated from the active artifact; not a business-impact claim.

Annual generalization failed; monthly results depend on the baseline. Model selection remains frozen.

| Target / scope | CV-selected model | Test MAE | Last value MAE | Seasonal naive MAE |
| --- | --- | ---: | ---: | ---: |
| releases / all | ridge_1 | 2395.37 | 137.75 | Not evaluated |
| releases / movies | ridge_1 | 1801.70 | 95.50 | Not evaluated |
| releases / tv | ridge_1 | 527.58 | 125.75 | Not evaluated |
| additions / all | ridge_100 | 48.11 | 70.00 | 45.33 |
| additions / movies | ridge_100 | 28.51 | 54.00 | 24.50 |
| additions / tv | forest_shallow | 19.33 | 20.33 | 20.83 |

MAE is titles per period. Other predeclared candidates remain in Evaluation. This single snapshot is not point-in-time history; projections are historical as-of estimates and error bands are not calibrated confidence intervals.

### Preparation and validation units

| Stage | Input rows | Output rows | Decision |
| --- | ---: | ---: | --- |
| Source validation | 8,790 | 8,790 | Verify the supplied SHA-256, schema, types and duration units. |
| Entity deduplication | 8,790 | 8,783 | Remove 7 repeated entities; preserve both independent time concepts. |

- **releases / all — development: 17 periods. Fitting history ends 2016-01-01; chronological CV remains strictly earlier than test.
- **releases / all — test: 4 periods. Frozen observed years: 2017-01-01 through 2020-01-01. Selected model: ridge_1.
- **releases / movies — development: 17 periods. Fitting history ends 2016-01-01; chronological CV remains strictly earlier than test.
- **releases / movies — test: 4 periods. Frozen observed years: 2017-01-01 through 2020-01-01. Selected model: ridge_1.
- **releases / tv — development: 17 periods. Fitting history ends 2016-01-01; chronological CV remains strictly earlier than test.
- **releases / tv — test: 4 periods. Frozen observed years: 2017-01-01 through 2020-01-01. Selected model: ridge_1.
- **additions / all — development: 74 periods. Fitting history ends 2021-02-01; chronological CV remains strictly earlier than test.
- **additions / all — test: 6 periods. Frozen observed months: 2021-03-01 through 2021-08-01. Selected model: ridge_100.
- **additions / movies — development: 74 periods. Fitting history ends 2021-02-01; chronological CV remains strictly earlier than test.
- **additions / movies — test: 6 periods. Frozen observed months: 2021-03-01 through 2021-08-01. Selected model: ridge_100.
- **additions / tv — development: 74 periods. Fitting history ends 2021-02-01; chronological CV remains strictly earlier than test.
- **additions / tv — test: 6 periods. Frozen observed months: 2021-03-01 through 2021-08-01. Selected model: forest_shallow.

### Source snapshot

- Repository commit: [805a34fc76f3](https://github.com/ShafwanAdhi/netflix-trend-forecasting/tree/805a34fc76f38b5f9953f7c02df591c5d07dab99).
- Frozen run: `20261106T122211417836Z`.
- [Evaluation evidence](https://github.com/ShafwanAdhi/netflix-trend-forecasting/tree/805a34fc76f38b5f9953f7c02df591c5d07dab99/artifacts/task-05/20261106T122211417836Z).
- [Dataset provenance](https://github.com/ShafwanAdhi/netflix-trend-forecasting/blob/805a34fc76f38b5f9953f7c02df591c5d07dab99/data/provenance.json).
- [Interactive evaluation](https://netflix-trend-forecasting.shafwan.digital/evaluation).

## Historical Catalog Entry Analytics

I studied the calendar-year difference between release and catalog addition with descriptive cohorts and chronological regression. I excluded fields that construct the target, selected by training-only chronological CV MAE, then examined median and long-tail errors. It is not exact elapsed time, popularity or commercial success.

Evidence run: `20261106T131312231321Z`. Generated from the active artifact; not a business-impact claim.

CV-selected **ridge_advanced_10**; chronological test n=3,374.

| Frozen test evidence | Selected model | Global median baseline |
| --- | ---: | ---: |
| MAE (calendar years) | 4.36 | 4.97 |
| Median absolute error (years) | 1.66 | 1.00 |

Test R-squared: 0.163. The >5-year target band has MAE 11.95 years (n=949). Lower mean error does not imply uniformly better estimates. The target is a calendar-year difference, not exact elapsed duration, commercial success or a prospective acquisition date.

### Preparation and validation units

| Stage | Input rows | Output rows | Decision |
| --- | ---: | ---: | --- |
| Source validation | 8,790 | 8,790 | Verify the supplied SHA-256, schema, types and duration units. |
| Entity deduplication | 8,790 | 8,783 | Remove 7 repeated entities with a recorded mapping. |
| Target eligibility | 8,783 | 8,769 | Audit and exclude 14 negative calendar-year differences; do not invent corrections or trim the positive tail. |

- **Training through 2019: 5,395 titles. Chronological training; rolling-year validation fits only earlier observations.
- **Test: 2020–2021: 3,374 titles. Untouched later-year test; the serving model remains trained on training rows only.
- **Eligible catalog segment: movies: 6,119 titles. Descriptive target statistics across the eligible catalog, not held-out prediction errors.
- **Eligible catalog segment: tv: 2,650 titles. Descriptive target statistics across the eligible catalog, not held-out prediction errors.
- **Held-out test segment: Movie: 2,277 titles. Computed from frozen test_predictions.csv; errors measured in calendar years.
- **Held-out test segment: TV Show: 1,097 titles. Computed from frozen test_predictions.csv; errors measured in calendar years.

### Source snapshot

- Repository commit: [cb90632cbabb](https://github.com/ShafwanAdhi/netflix-catalog-analytics/tree/cb90632cbabbc80cf9a31d4a9933fb5762efc540).
- Frozen run: `20261106T131312231321Z`.
- [Evaluation evidence](https://github.com/ShafwanAdhi/netflix-catalog-analytics/tree/cb90632cbabbc80cf9a31d4a9933fb5762efc540/artifacts/task-06/20261106T131312231321Z).
- [Dataset provenance](https://github.com/ShafwanAdhi/netflix-catalog-analytics/blob/cb90632cbabbc80cf9a31d4a9933fb5762efc540/data/provenance.json).
- [Interactive evaluation](https://netflix-catalog-analytics.shafwan.digital/evaluation).

## Application and engineering boundaries

All applications load saved validated artifacts through FastAPI. Model and evaluation responses expose matching run identities; training does not run in the public API. The React interfaces include model comparison, source explanations and explicit unavailable states. Separate Docker deployments preserve repository independence.

Ratings has rare-class uncertainty and uncalibrated model probabilities. Segmentation diagnostics describe internal geometry and seed sensitivity. Forecasts are retrospective, with incomplete periods excluded and exploratory, uncalibrated error bands. Catalog-entry regression has long-tail errors and a mean-versus-median tradeoff. None of these results establishes causal effects or business impact.

## Screenshot provenance

Six 1600 × 1000 captures were taken from the HTTPS production applications on 9 November 2026 and converted to WebP. The portfolio cover shows the segmentation explorer; remaining slides show a Movie rating example, normalized confusion matrix, six-series forecast comparison, two monthly Movie projections and a Movie catalog-entry estimate. Semantic chart colors are retained. Run identities correspond to the source snapshots above. Example inputs are explicitly illustrative.

## Updating this snapshot

When the active source artifacts change, review the source checksums, run IDs, comparison results, limitations and screenshots together before updating this report and the portfolio entry. The portfolio has no runtime dependency on the source APIs, models or raw data. Older project claims are outside this integration.
