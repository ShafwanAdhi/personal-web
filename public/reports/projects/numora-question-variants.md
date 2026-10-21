# Numora Assessment & Question Variants — technical verification

Verified 22 October 2026.

Source: Generator b9d25a7; central application 8d27bed.

## Scope

Assessment authors need variants whose answers and explanations remain consistent as parameters change. I extended a team-built deterministic generator and developed review workflows around versioned originals, configurations and seeds. My contribution covers generator content, workbench tooling and integration foundations; the student/admin application shown in the gallery is the wider team product.

Role: Question generator & review-workbench contributor.

## Method

Verified 22 October 2026 against generator revision b9d25a7 and application revision 8d27bed. I recounted the actual loader/catalogue, ran the local suite and audited 16 revised families. I also checked a rendered mean-value question independently using exact rational arithmetic.

## Results

### Generator-backed originals: 1,078

Evidence type: scope. I recounted the team workspace: 1,180 originals, including 1,078 generator-backed, 86 conceptual and 16 HOLD. These are local catalogue counts, not questions I authored alone.

### Local generator suite passed: 294 tests

Evidence type: verification. I ran the Python generator/workbench suite on a byte-pinned source copy. The main application and connected service/database workflow were not retested.

### Revised families passed audit: 16 / 16

Evidence type: verification. I checked 20 distinct candidates per family, 320 total, plus 1,600 additional seed checks using the repository oracle. This does not establish equal difficulty or learning gains.

## Limits and remaining work

- The 248 conceptual variants marked VERIFIED are local stock, not independent academic approval. Numerical generation is deterministic, not LLM generation.
- Connected application acceptance requires the specified Node/pnpm runtime and isolated database/Redis; that run remains pending.
- Gallery captures use synthetic UI fixtures and request interception. IRT calibration, deployed self-adjustment and educational outcomes remain unverified.

## Reproducible content example

In the corrected local original pg-20-3-3, five values 60, 70, 80, 90, 100 and a six-person mean of 85 imply a missing value of 6 × 85 − 400 = 110. Seed 37 renders 52, 62, 72, 82, 92 with mean 77, giving 6 × 77 − 360 = 102. The rendered explanation and answer C were checked independently with Fraction arithmetic. Repeating the same seed/config reproduces content; this does not guarantee different seeds always yield unique content.

| Local catalogue | Originals | Generator-backed | Conceptual | HOLD |
| --- | ---: | ---: | ---: | ---: |
| Drill | 1,150 | 1,051 | 83 | 16 |
| Tryout | 30 | 27 | 3 | 0 |
| Total | 1,180 | 1,078 | 86 | 16 |

There are 248 local conceptual stock variants marked VERIFIED. The reviewed 28 archived originals/configs already overlap runtime and are not added again. This is the team workspace; initial engine and HTTP-service foundations include other contributors.
