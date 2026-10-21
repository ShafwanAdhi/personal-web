# Bonjermgu Financing Portal — technical verification

Verified 22 October 2026.

Source: 0ae8dbd.

## Scope

A financing quote combines rates, insurance, fees and rounding rules that must agree across interfaces. I separated those calculations into a shared PHP domain and connected them to customer and staff workflows. My verification focuses on calculation rules and selected database-backed features; it does not imply lender approval or measured business impact.

Role: Full-stack developer.

## Method

Verified 22 October 2026 against revision 0ae8dbd. I ran calculation units and three selected feature files on a pinned source copy with a fresh PostgreSQL 16.11 test cluster. A separate Decimal check used precision 40 for the S2 reference calculation.

## Results

### 714 assertions across two suites: 76 tests

Evidence type: verification. I ran 50 calculation tests with 386 assertions and 26 selected feature tests with 328 assertions. Both passed on isolated fixtures; this is one combined verification summary.

### Reference instalment matched: Rp8,953,000

Evidence type: verification. I reproduced the selected S2 scenario with independent Decimal arithmetic, including Rp90,870,000 disbursement and a separate Rp438,000 refund. This is a reference scenario, not a quote guarantee.

### Vehicle source rows: 26,791

Evidence type: scope. I recounted the CSV as 26,791 rows representing 4,678 models and 26,791 model-year entries. This describes source inventory, not customers or imported production records.

## Limits and remaining work

- Selected tests do not cover every workflow, lender rule or production deployment. The calculation engine uses PHP floating point with explicit rounding.
- Some missing lookups default to zero; do not infer universal fail-closed pricing. The original workbook was not recounted.
- No conversion, adoption, processing-time or financing-approval benefit has been measured.

## Selected reference calculation

S2 fixture: net disbursement = Rp110,000,000 − Rp19,130,000 = Rp90,870,000. First payment combines DP Rp11,000,000, insurance Rp2,930,000, administration Rp4,700,000 and fiduciary fee Rp500,000. Rounded instalment is Rp8,953,000; refund Rp438,000 stays separate from disbursement. This is a synthetic test reference, not an offer. Missing Casco/fiduciary rules produce errors; a null tenor can be unavailable, while some other missing lookups return zero. Selected feature tests use two vehicle models, not a full import of the source CSV.
