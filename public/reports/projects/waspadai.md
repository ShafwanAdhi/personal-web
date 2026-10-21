# WaspadAI — technical verification

Verified 21 October 2026.

Source: AI service f9b603a plus pinned working-tree evaluation inputs; product db1cc33.

## Scope

Suspicious messages mix factual claims with urgent requests, so a single true-or-false label can miss the immediate risk. I built a pipeline that separates safety signals from factual investigation, retrieves supporting material, and returns reasons and next steps. My scope covers the AI service and web demo, with selected integration work in the team-built Android product.

Role: AI pipeline & web developer; mobile integration contributor.

## Method

Evaluated 21 October 2026 against a pinned source snapshot. I froze 18 synthetic challenge cases before scoring; labels came from one AI reviewer familiar with the code. I separately inspected six live text responses and provider traces.

## Results

### Critical-signal precision & recall: 76.92%

Evidence type: evaluation. I measured 10 true positives, 3 false positives and 3 misses on 18 frozen synthetic cases. Six use OCR/vision fixtures; this does not measure real-world verdict accuracy.

### Two offline suites passed: 92 + 32

Evidence type: verification. I ran 92 AI-service tests and 32 selected product-backend tests with provider or transaction fixtures. These establish bounded behavior, not live provider quality.

### Live verifier fallbacks: 6 / 6

Evidence type: evaluation. I observed verifier HTTP 404 errors in all six live text cases. The pipeline returned fallbacks; this run is degraded, despite valid response schemas.

## Limits and remaining work

- The development recall of 53/54 (98.15%) uses 47 partially labelled cases from a different 100-case set; it is not comparable field accuracy.
- The new challenge uses fixture OCR/vision output, not image-pixel extraction. Android tests were blocked during dependency resolution; mobile end-to-end behavior remains unverified.
- Live factual resolution and citation support need improvement. Cost was not measured.

## Failure and abstention examples

A synthetic message reporting that an OTP had already been disclosed was treated as a request for a secret: request-versus-completed-action remains a failure mode. A fictional 2049 Mars-library claim produced UNVERIFIED with no sources, an appropriate abstention; harmless OTP/PIN educational advice also produced UNVERIFIED, an excessive abstention. These judgments came from one AI reviewer, not a blind expert panel.

The six live text cases had end-to-end completion p50 3,642 ms and p95 4,359 ms (nearest-rank, excluding three-second inter-case delays). This is not production latency or time-to-first-token. Successful planner usage totalled 12,491 tokens; cost was unmeasured. Extra development signals were reviewed as 37 supported context cues, 10 errors and 4 uncertain instances; these partial labels do not establish field precision.
