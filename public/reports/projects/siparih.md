# SIPARIH — technical verification

Verified 22 October 2026.

Source: 2ee3eeb.

## Scope

Resident documents need controlled access and a consistent approval decision when requests overlap. I implemented ownership and RW-based access checks, private document delivery, and an approval path that rechecks authorization while holding a database row lock. The gallery uses fictional demonstration records rather than resident data.

Role: Software developer.

## Method

Verified 22 October 2026 against revision 2ee3eeb: 82 tests and 818 assertions passed on SQLite. A separate two-worker scenario passed 12 assertions on MariaDB; an observed repeat confirmed lock contention while retaining one approval and one audit record.

## Results

### Consistent approval under competing requests: One decision

Evidence type: verification. I verified that two competing workers produced exactly one approval and one audit record. The second worker was rejected after the first committed, preserving a single authoritative decision.

### 82 tests passed in the regression suite: 818 assertions

Evidence type: verification. I verified the implementation with 82 passing tests and 818 assertions, supported by a separate MariaDB concurrency check. The suite provides a repeatable baseline for checking future changes.

### Document access follows ownership and responsibility: Private files

Evidence type: capability. I kept resident uploads behind authorization checks, with previews and downloads scoped by ownership, role and target RW. Document access is enforced by the application before file delivery.

## Limits and remaining work

- These are local engineering checks: the concurrency scenario uses synthetic controller requests, and the standard suite includes framework examples. Production load and comprehensive security testing remain outside this evaluation.
- Ghostscript normalization and production Nginx delivery were not exercised. Signatures use an image overlay; the gallery uses fictional demo records.

## Competing-approval scenario

Two PHP workers invoked the actual controller using synthetic requests on an isolated MariaDB database. The first worker delayed signing by 1,200 ms; the second started 200 ms later. Assertions checked approved/forbidden outcomes, timestamps, signed file, one approved document and exactly one decision log. Both the initial run and observed repeat passed 12 assertions. The repeat collected 50 lock-wait samples, 7 positive, maximum one wait. These are observations of one scenario, not throughput or production load measurements.
