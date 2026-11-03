# UM RAG Assistant — evaluation summary

## Updated project results — 3 November 2026

The project owner supplied the following updated results for the portfolio:

- Improved Recall@5 from **78% to 93% across 250 labeled queries**, a gain of 15 percentage points.
- Reduced response latency by **25% through caching**.

These are owner-reported results, not a benchmark reproduced during this portfolio update. The corresponding dataset, relevance-label protocol, Recall@5 aggregation, baseline configuration, latency measurement conditions and raw run artifacts were not supplied. The implementation includes query-embedding and structured-generation caches; their individual contributions to the reported latency reduction have not been isolated here.

## Historical technical verification — 21 October 2026

The following audit concerns an earlier source snapshot and a different evaluation sample. Its source hit@K metrics are distinct from the updated Recall@5 results above; no direct comparison between the two evaluations is implied.

Verified 21 October 2026.

Source: Source fb60f9f; isolated evaluation/scorer revision 883aa59.

## Scope

University answers are spread across policies, forms and dated documents. I built a campus assistant that routes questions to structured facts or document retrieval and presents source links alongside streamed responses. I evaluated the retrieval component separately from answer generation to identify where ranking, routing and incomplete source extraction undermine otherwise plausible answers.

Role: AI application & full-stack developer.

## Method

Evaluated 21 October 2026 on a frozen 16-question synthetic challenge. The retrieval comparison uses 13 answerable questions, shared query embeddings, gold domain filters and the same corpus. Three questions without source labels are excluded from retrieval scoring, but remain in answer review.

## Results

### Dense vs current source hit@1: 12/13 vs 11/13

Evidence type: evaluation. I compared the first returned chunk against expected source files on 13 answerable questions. Dense scored 12/13; the current pipeline scored 11/13. This is any-source hit rate, not passage recall.

### Complete answers in manual review: 5 / 13

Evidence type: evaluation. I found five complete answers among 13 answerable cases using a single-reviewer rubric. The full 16-case run had 13 provider-error cases and 12 extractive fallbacks.

### Evaluation and API suite passed: 60 tests

Evidence type: verification. I ran 48 existing tests plus 12 evaluation regressions offline. This verifies scorer and API behavior with fixtures, independently of the degraded live run.

## Limits and remaining work

- Labels and answer review came from one AI reviewer familiar with the corpus; this is not a blind or field benchmark.
- Current source hit@3 was 11/13 versus dense 13/13. An any-source hit does not establish that every required source or fact was retrieved.
- The live run was degraded by provider errors. Cost and streaming time-to-first-token were not measured; structured facts include extraction defects.

## Comparison and failure examples

| Mode | Cases | Expected-source hit@1 | Expected-source hit@3 |
| --- | ---: | ---: | ---: |
| Dense | 13 | 12/13 | 13/13 |
| Current | 13 | 11/13 | 11/13 |

A hit means at least one expected file appears in the first one/three chunks. It does not require all sources for a multi-source question. The current heuristics promoted an older general policy over the requested academic calendar and a sociology SOP over the music SOP. Fact extraction also reduced a rector name to a title; an apparently sourced response can still be incomplete. Ambiguous and unanswerable cases did not reliably abstain.

The local corpus has 39 PDFs: 38 campus documents plus one developer profile; 1,165 indexed chunks and 229 structured records are inventory, not quality metrics. The 16-case answer run made 69 HTTP attempts, with 39 HTTP 404s and 3 HTTP 429s; three retries after 429 succeeded. Completion p50/p95 were 20,298/24,666 ms, nearest-rank across the mixed 16-case run, not streaming time-to-first-token. Cost was unmeasured.
