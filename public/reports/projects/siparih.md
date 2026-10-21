# SIPARIH — technical verification

Verified 22 October 2026.

Source: 2ee3eeb.

## Scope

Resident documents need controlled access and a consistent approval decision when requests overlap. I implemented ownership and RW-based access checks, private document delivery, and an approval path that rechecks authorization while holding a database row lock. The gallery uses fictional demonstration records rather than resident data.

Role: Software developer.

## Method

Verified 22 October 2026 against revision 2ee3eeb. The SQLite suite passed 82 tests/818 assertions. A separate MariaDB 10.4.32 test used two PHP workers invoking the controller and passed 12 assertions; a repeated run observed 7 positive lock-wait samples out of 50.

## Results

### 818 assertions passed: 82 tests

Evidence type: verification. I reran the standard unit/feature suite on SQLite memory. The total includes framework examples and is not a count of independent security scenarios.

### Two competing workers, one audit log: 1 approval

Evidence type: verification. I tested the existing concurrency scenario on disposable MariaDB: one worker approved, the other was forbidden. A repeat observed lock contention while preserving one approval and one log.

### Owner and RW boundaries: Private access

Evidence type: capability. I implemented access checks before preview and download. This describes a delivered control, not a penetration-test result or a guarantee about every production route.

## Limits and remaining work

- The concurrency repeat is the same scenario, not an additional unique test. Workers called the controller with synthetic requests, not a deployed HTTP server.
- Ghostscript normalization and production Nginx delivery were not tested. Image-overlay signing is not PKI or a legally certified digital signature.
- Gallery records are fictional demo data; visible counts are not production usage metrics.

## Competing-approval scenario

Two PHP workers invoked the actual controller using synthetic requests on an isolated MariaDB database. The first worker delayed signing by 1,200 ms; the second started 200 ms later. Assertions checked approved/forbidden outcomes, timestamps, signed file, one approved document and exactly one decision log. Both the initial run and observed repeat passed 12 assertions. The repeat collected 50 lock-wait samples, 7 positive, maximum one wait. These are observations of one scenario, not throughput or production load measurements.
