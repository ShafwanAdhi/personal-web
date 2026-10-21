# Register bukti proyek

Tanggal: 21 Oktober 2026. Lingkup: Task 1 pada [master plan](superpowers/plans/2026-10-21-ai-ml-portfolio-evidence-and-content.md).

Run ID: `20261021T100155Z`. Delapan repo sumber mewakili enam proyek; repo portofolio dicatat sebagai target terpisah. Hash mengidentifikasi checkout dan berkas saat inspeksi, bukan bukti kepemilikan pribadi atau keberhasilan tes.

## Metode dan batas

- Git root, branch, HEAD lengkap, worktree, dan status diambil langsung dari setiap checkout. Direktori induk Numora bukan repo; dua anaknya diperlakukan terpisah.
- Baseline dan pembacaan ulang menyimpan SHA-256 serta ukuran berkas teks kode, konfigurasi, dependency, data CSV/JSON, dan dokumentasi yang dipilih dari tracked serta untracked non-ignored. Ini merupakan manifest selektif, bukan backup seluruh filesystem.
- `.env`, nama berkas credential/secret/private-key/keystore, dependency terpasang, build, public assets, storage, bootstrap, dan hasil audit tidak dibaca untuk hashing. Dokumen portofolio dikecualikan dari hash agar register tidak mereferensikan hash dirinya sendiri. Gambar/PPTX dan Kotlin `.kt` tidak termasuk manifest ini; perlu pin tambahan jika dipakai untuk klaim berikutnya.
- Hanya metadata/hash disimpan; tidak menyalin isi data pengguna atau kredensial. Lokasi mesin dalam dokumen ini bersifat internal, tidak diimpor ke website.
- Tidak menjalankan test runner aplikasi, evaluator, migrasi, seed, provider live, build, push, atau deployment. Hasil historis dan angka audit belum divalidasi ulang.
- Ruling: Task 1 dikerjakan sebagai inspeksi read-only dan dokumentasi di checkout saat ini. Tidak ada perubahan kode produk; worktree/snapshot terisolasi disiapkan ketika task berikutnya benar-benar mengubah kode atau menjalankan tes yang menulis data. Tidak ada branch atau pekerjaan lokal yang dipindahkan.
- Ruling: cakupan pengguna hanya Task 1. Task 2–13 tetap belum dikerjakan; tidak membuat checkpoint commit yang mencampur dokumen untracked sebelumnya.

## Runtime mesin

| Runtime | Versi terdeteksi |
| --- | --- |
| node | v22.15.0 |
| python | Python 3.11.3 |
| php | PHP 8.2.12 (cli) (built: Oct 24 2023 21:15:15) (ZTS Visual C++ 2019 x64) |
| java | openjdk version "21.0.12.1" 2026-08-18 LTS |
| uv | uv 0.12.15 (d35f1f270 2026-09-15 x86_64-pc-windows-msvc) |
| composer | Composer version 2.8.8 2025-04-04 16:56:46 |
| docker | Docker version 27.5.1, build 9f9e405 |
| pnpm | Tidak ditemukan pada PATH |
| corepack | 0.32.0 |

Docker hanya diperiksa versi CLI; daemon tidak diperiksa. Direktori dependency yang ada belum membuktikan install konsisten dengan lockfile. PHP memiliki pdo_pgsql, pdo_mysql, pdo_sqlite, gd, mbstring, dom dan zip. Metadata Python dibaca tanpa mengimpor aplikasi.

Python global: `pytest 9.1.1`, `fastapi 0.127.0`, `httpx 0.28.1`, `psycopg 3.3.2`, `chromadb 1.5.8`, `langchain-core 1.3.2`, `groq 0.37.1`, `pillow 12.1.0`.

Product API venv: `pytest 8.4.2`, `fastapi 0.141.1`, `httpx 0.28.1`, `psycopg 3.3.5`.

Log runtime: [runtime.json](../output/project-evidence/inventory/20261021T100155Z/runtime.json); [dependency-metadata.json](../output/project-evidence/inventory/20261021T100155Z/dependency-metadata.json). Log lokal berada di direktori ignored dan tidak ikut clone Git.

## Identitas dan prasyarat per repo

### portfolio

- Root: `D:/collages/portofolio`
- Branch: `main`
- HEAD: `d1eee19c4b266b416cec22688aeedffffa83c6bb`
- Baseline UTC: `2026-10-21T10:01:56.151574+00:00`
- Manifest: 37 berkas; [baseline](../output/project-evidence/portfolio/20261021T100155Z/baseline.json), [sesudah inspeksi](../output/project-evidence/portfolio/20261021T100155Z/after.json).

Worktree terdaftar:

```text
worktree D:/collages/portofolio
HEAD d1eee19c4b266b416cec22688aeedffffa83c6bb
branch refs/heads/main
```

Perubahan lokal pada baseline:

```text
?? docs/ai-ml-project-content-audit-2026-10-21.md
?? docs/superpowers/plans/2026-10-21-ai-ml-portfolio-evidence-and-content.md
```

React/Vite/TypeScript; npm dan Vitest.

node_modules tersedia. Node lokal 22.15.0 dicatat sebagai kondisi mesin, belum membuktikan kecocokan seluruh dependency. Dockerfile memakai Node 24. Tes UI tidak membutuhkan DB/cache/queue; konfigurasi Vitest dan mock tetap diperiksa sebelum eksekusi Task 12. Tidak ada script lint.

SHA-256 bukti/config utama:

| Berkas relatif terhadap root | SHA-256 |
| --- | --- |
| `package.json` | `4d12cc2610518c33bf311cf02d8e847b201f482cb8bf4e645dc7740b33758848` |
| `package-lock.json` | `fb051b24bff2a0036856096d240ab77164cff6591444ac92c6a4272546bd084d` |
| `src/data/portfolio.ts` | `0bbb819b37dad0468baf7ebd4e5ba12757c792f926c99bbaf46d9be1ca8d5b51` |
| `src/App.test.tsx` | `5cee470bcfa7ca250035603ec9ca7e38352e07017d06a5db881b2c58468bca48` |
| `Dockerfile` | `2fe8de02480192e7baf06a38d5b2a73528eb49752090449999ffd7960b5c2f15` |
| `compose.yaml` | `50e64a82e86117f99622ae12c5bb3621656ffabbc32c6340ee538e5a3564a7ba` |

### bonjermgu

- Root: `D:/internship/web-mtf`
- Branch: `main`
- HEAD: `0ae8dbda8cf42277d98f320460af385bfdadd374`
- Baseline UTC: `2026-10-21T10:02:08.558045+00:00`
- Manifest: 367 berkas; [baseline](../output/project-evidence/bonjermgu/20261021T100155Z/baseline.json), [sesudah inspeksi](../output/project-evidence/bonjermgu/20261021T100155Z/after.json).

Worktree terdaftar:

```text
worktree D:/internship/web-mtf
HEAD 0ae8dbda8cf42277d98f320460af385bfdadd374
branch refs/heads/main
```

Perubahan lokal pada baseline:

```text
(bersih)
```

Laravel 11, PHP ^8.2, Pest 2 / PHPUnit 10.

vendor/autoload.php dan node_modules tersedia. phpunit.xml memilih PostgreSQL web_mtf_testing, cache/session/mail array, queue sync. SerializesTestingDatabase memeriksa APP_ENV dan nama database; TestingDatabaseLock memakai advisory lock PostgreSQL. PDO pgsql tersedia, tetapi server/izin/koneksi belum diperiksa. Pastikan environment efektif dan storage sementara sebelum suite yang memanggil RefreshDatabase. Jangan menyamakan guard nama dengan bukti bahwa target benar-benar terisolasi.

SHA-256 bukti/config utama:

| Berkas relatif terhadap root | SHA-256 |
| --- | --- |
| `composer.json` | `a7de6f4e4ab799bf463e12ddb92e000e07cc309c03b49f7335e56d8ac6c090a7` |
| `composer.lock` | `8fb7972acf6102bac5469934bf075e58a757cd1f531d170761b5d86861c1cc71` |
| `phpunit.xml` | `0d7a5a84829a785426f4b76e321034852ff03685480bfc3ee59a5610a02ebf20` |
| `tests/Support/SerializesTestingDatabase.php` | `c6e9d8feca239c398df3e4888adfbe3736bb1e7ae0a2e6ada90061d966c1511d` |
| `tests/Support/TestingDatabaseLock.php` | `492893d0869c113974c7d675612795927857835ac69e358e8e15de90384e8a90` |
| `app/Services/SimulationService.php` | `7f2b1f39fcacd1a7c16d07d6db2eb284b056fe25205b3a5da981b33cbd7cef88` |
| `docs/credit-simulation-test-vectors.md` | `7069bfc58f0b61388f358caaf09e4b9635ccbc93d2eae7af0c2198ed3d56d934` |
| `database/seeders/data/vehicle_prices.csv` | `68a553fb54ea4baa6ba1c81d4da1fb7d3adf52fc3dae1f7320c751eb3d7c9803` |

### siparih

- Root: `D:/kkn/website`
- Branch: `main`
- HEAD: `2ee3eeba40c373d771cfdddc86ab06a1dbf9cd15`
- Baseline UTC: `2026-10-21T10:02:12.183517+00:00`
- Manifest: 121 berkas; [baseline](../output/project-evidence/siparih/20261021T100155Z/baseline.json), [sesudah inspeksi](../output/project-evidence/siparih/20261021T100155Z/after.json).

Worktree terdaftar:

```text
worktree D:/kkn/website
HEAD 2ee3eeba40c373d771cfdddc86ab06a1dbf9cd15
branch refs/heads/main
```

Perubahan lokal pada baseline:

```text
?? portfolio/siparih/assets/approval-concurrency.webp
?? portfolio/siparih/assets/automated-testing.webp
?? portfolio/siparih/assets/login.webp
?? portfolio/siparih/evidence.md
?? portfolio/siparih/missing-data.md
?? portfolio/siparih/project.json
```

Laravel 12, PHP ^8.2, PHPUnit 11.

vendor/autoload.php dan node_modules tersedia. phpunit.xml memilih SQLite :memory:, DB_URL kosong, cache/session/mail array, queue sync. Entri env tidak memakai force; periksa environment efektif sebelum menjalankan tes. Banyak acceptance tests memakai Storage::fake(local), tetapi concurrency test menulis storage lokal dan menjalankan dua proses PHP. APR-15 memerlukan MySQL/MariaDB khusus tes serta storage terisolasi; SQLite melewati pemeriksaan row-level locking. PDO sqlite/mysql tersedia; server DB belum diverifikasi.

SHA-256 bukti/config utama:

| Berkas relatif terhadap root | SHA-256 |
| --- | --- |
| `composer.json` | `0542f93a00e465e5721732580eca7f8cf866ea532f6cd146fd93714cad39f3be` |
| `composer.lock` | `fd7e1666b210eb1a88d5744b75bfda61233e208e54bc076c3ef1d03649deb739` |
| `phpunit.xml` | `493369cfb7feea104da4bec214c2cc6526ca2f1b9d937c50a2961fc59cb61aaf` |
| `tests/Concurrency/SiparihApprovalConcurrencyTest.php` | `8403d819f48abb9a22ff8ecd05e42938a4299633c74aaec3a9bc1d627635b579` |
| `tests/Support/approve_document_worker.php` | `56c4f8f1eb8ba9176f329723e89495cc58d4d8de9106a8c7b3fe26202fca8805` |
| `tests/reports/siparih-automation-testing-report.md` | `a59eeed5921bf9d5f6c4374201d2cced2e36dbc7572e5abb5115619516925db9` |
| `portfolio/siparih/evidence.md` | `793b6f2c7dadc96102e09956fcb99adbfbf341d8434517526b562ae6a25c68cf` |

### sidika

- Root: `D:/collages/SiDiKa`
- Branch: `main`
- HEAD: `9c1890b441a0e90866f407e2f00741a7b9e2e532`
- Baseline UTC: `2026-10-21T10:02:23.050109+00:00`
- Manifest: 284 berkas; [baseline](../output/project-evidence/sidika/20261021T100155Z/baseline.json), [sesudah inspeksi](../output/project-evidence/sidika/20261021T100155Z/after.json).

Worktree terdaftar:

```text
worktree D:/collages/SiDiKa
HEAD 9c1890b441a0e90866f407e2f00741a7b9e2e532
branch refs/heads/main
```

Perubahan lokal pada baseline:

```text
(bersih)
```

Laravel 10, PHP ^8.1, PHPUnit 10, Dusk 8.

vendor/autoload.php dan node_modules belum tersedia. phpunit.xml hanya mengaktifkan APP_ENV testing, cache/session/mail array dan queue sync; pilihan SQLite :memory: masih berupa komentar. Suite tidak boleh dijalankan sebelum menyediakan database khusus tes, memeriksa environment efektif, dan mengisolasi storage. Dusk memerlukan browser/driver dan aplikasi uji tersendiri. Jangan memakai composer create-project/setup karena dapat menjalankan migrasi.

SHA-256 bukti/config utama:

| Berkas relatif terhadap root | SHA-256 |
| --- | --- |
| `composer.json` | `3ce214055af7f98ac6f97a9033f1125a4fbbcd0430c5e8ec6b0850cd92859a0f` |
| `composer.lock` | `5e654e82aeead3493043c3f488441fb829754840956ae30f2c2af66987038013` |
| `phpunit.xml` | `cbd548f68a3c9dbd0b8329ef14f971a712cc430b456e6dcb4c71df52ffd1c618` |
| `app/Http/Controllers/DashboardController.php` | `2e469816e4785848e7677d105c842069175ec1c4408c1fe415cf22dce664be3b` |
| `app/Http/Controllers/QCController.php` | `2353be1f68f6a01c83fbd3ebde8b08a7740350e115bc33ec2b17722f141a1159` |
| `tests/Browser/LoginTest.php` | `a95d4e4a8be2fa7e9cd4c9a578907b91b7862cef6ccf383376c0ec6473afcd54` |

### waspadai-ai

- Root: `D:/collages/demo fact-check`
- Branch: `main`
- HEAD: `f9b603a6776ca5224390df3631c0cb937604dc5a`
- Baseline UTC: `2026-10-21T10:02:24.283889+00:00`
- Manifest: 100 berkas; [baseline](../output/project-evidence/waspadai-ai/20261021T100155Z/baseline.json), [sesudah inspeksi](../output/project-evidence/waspadai-ai/20261021T100155Z/after.json).

Worktree terdaftar:

```text
worktree D:/collages/demo fact-check
HEAD f9b603a6776ca5224390df3631c0cb937604dc5a
branch refs/heads/main
```

Perubahan lokal pada baseline:

```text
 M apps/api/app/services/presentation.py
 M apps/api/tests/test_presentation.py
 M apps/web/next-env.d.ts
 M docs/android-api-contract.md
 M docs/api.md
?? apps/api/evaluation/production_cases.jsonl
?? apps/api/evaluation/production_report.md
?? apps/api/evaluation/production_results.json
?? apps/api/scripts/evaluate_production.py
?? apps/api/tests/test_production_benchmark.py
?? docs/portfolio-report.md
?? docs/production_benchmark.md
?? docs/slide_previews/Slide1.PNG
?? docs/slide_previews/Slide2.PNG
?? docs/waspadai_slides_8_10_recreated.pptx
?? scripts/create_waspadai_slides.py
```

FastAPI/Python; Next.js untuk web demo.

Python global 3.11.3 beserta pytest/fastapi/httpx/groq tersedia; environment API lokal belum ditemukan pada lokasi standar yang diperiksa. Ini belum merupakan verifikasi seluruh requirements. apps/web/node_modules tersedia. conftest.py memiliki fixture autouse yang mengganti GroqFactCheckService dan TavilyWebSearchService pada pipeline dengan fake serta membersihkan settings cache. Audit semua jalur HTTP/file yang dipakai sebelum suite penuh. Evaluator mode all berisi signals/coverage/replay; live dipisahkan. Output harus diarahkan ke run baru, bukan menimpa laporan lama. OCR gambar memerlukan pemeriksaan Tesseract tersendiri.

SHA-256 bukti/config utama:

| Berkas relatif terhadap root | SHA-256 |
| --- | --- |
| `apps/api/requirements.txt` | `b3e44d5b31213ac66b31e518a2b4e3cc2840204e15b00160076824e09d119471` |
| `apps/api/pytest.ini` | `19081560e450048e9022e259d6e50ee170f5761c8903d745bd8d06b545e27c92` |
| `apps/api/tests/conftest.py` | `5491aeaaf5622bdf725d72d62a0ddff38f5617632d2d4b349f4cfc60ba6e3f12` |
| `apps/api/app/services/presentation.py` | `cb23feac2249926fb402c6a9fb730b5d833050879bfdbe71ce191fdabffa350e` |
| `apps/api/tests/test_presentation.py` | `d38e0be94ad0a0f50a71ef2b0dc5746ea261ab4203c3b9a1e98c86444e90ac2d` |
| `apps/api/evaluation/production_cases.jsonl` | `7c6a7de15bc503029be82457e2ee20538882d49cb6e7acad8d3a7629586f293c` |
| `apps/api/evaluation/production_results.json` | `cf07e7b5d20baaab56441a87f97567277f383d46023a92db1afaa0c06bfde06a` |
| `apps/api/evaluation/production_report.md` | `bfafe73c1c37832c4b40386feca673597dc9468b82131f93ebed49cd87e0b067` |
| `apps/api/scripts/evaluate_production.py` | `bfe608c175af51fa67cb92c9155ff0a2f02949d94af5a7ef1d8ed12abbed1032` |
| `apps/api/tests/test_production_benchmark.py` | `6b0690e097aee97bae0e8efccbb25db3a17939f28e7f866ddf2441bebf3d1e3e` |
| `docs/production_benchmark.md` | `aa84cf1a723cac98a3ee110e58d39a6985156ef9c005db29842fbbc20e0557e1` |

### waspadai-product

- Root: `D:/collages/waspadai_mobile/WaspadAI`
- Branch: `main`
- HEAD: `db1cc331866a6916471931a64180fd9d336a61b2`
- Baseline UTC: `2026-10-21T10:02:27.818341+00:00`
- Manifest: 257 berkas; [baseline](../output/project-evidence/waspadai-product/20261021T100155Z/baseline.json), [sesudah inspeksi](../output/project-evidence/waspadai-product/20261021T100155Z/after.json).

Worktree terdaftar:

```text
worktree D:/collages/waspadai_mobile/WaspadAI
HEAD db1cc331866a6916471931a64180fd9d336a61b2
branch refs/heads/main
```

Perubahan lokal pada baseline:

```text
 M waspadai-product-docs/README.md
 M waspadai-product-docs/docs/README.md
?? waspadai-product-docs/business.md
```

Product API Python >=3.11,<3.12 melalui uv; Android/Kotlin.

backend/.venv tersedia; versi paket aktual dicatat pada dependency-metadata.json. Tes offline adapter memakai fake/mock; pilih marker not live_database. Tes Supabase live memerlukan WASPADAI_RUN_LIVE_DB_TESTS=1, dua akun uji, DB khusus serta TLS; tidak diaktifkan pada Task 1. Jangan mengambil DSN dari environment kerja untuk evaluasi. Android memiliki gradlew.bat, compile/target SDK 36 dan min SDK 26; Java 21 tersedia, Android SDK/emulator belum diperiksa. Backend storage dan network harus tetap fake pada tes offline.

SHA-256 bukti/config utama:

| Berkas relatif terhadap root | SHA-256 |
| --- | --- |
| `backend/pyproject.toml` | `8d7fb4558c93fec2501c249044edd9ba3eaeaaf985840e332eed2ea5ba65635d` |
| `backend/uv.lock` | `2a6e455104cef8a7a7d16d695a60837613ad1a87d43ba03441e33508f7531acf` |
| `backend/app/verification_service.py` | `2ea53d81c697c6d9547d27a9a3d56498f07abba78d80c2fd71728231c7e92fb8` |
| `backend/tests/test_remote_ai.py` | `46de42cca7298ce817e7a9b103b2feb5d9ae57a29adf252c1efbe12d62938707` |
| `backend/tests/test_live_supabase.py` | `9bb2845058e01f3cb4830af127f2ac5474856e9e8fac055de55b32f0658d3925` |
| `frontend/app/build.gradle.kts` | `a9af9ac9499a359e6c5cc8dcd469206870de3a865085cf292972cd26ae280cd1` |

### numora-central

- Root: `D:/collages/semester 5/numora/Numora`
- Branch: `fix/drill-chapter3-owner-acceptance`
- HEAD: `8d27bed25de9f0a82f924569acfe0f3b4c89e60e`
- Baseline UTC: `2026-10-21T10:02:44.517136+00:00`
- Manifest: 979 berkas; [baseline](../output/project-evidence/numora-central/20261021T100155Z/baseline.json), [sesudah inspeksi](../output/project-evidence/numora-central/20261021T100155Z/after.json).

Worktree terdaftar:

```text
worktree D:/collages/semester 5/numora/Numora
HEAD 8d27bed25de9f0a82f924569acfe0f3b4c89e60e
branch refs/heads/fix/drill-chapter3-owner-acceptance
```

Perubahan lokal pada baseline:

```text
(bersih)
```

Node >=24,<25; pnpm 12.6.0; monorepo NestJS/Next.js.

node_modules root dan web tersedia, tetapi Node lokal 22.15.0 tidak memenuhi engines; pnpm tidak tersedia langsung di PATH. Corepack tersedia. Instalasi runtime ditunda sampai Task 5 membutuhkan tes pusat, tanpa mengganti Node global. scripts/check-test-env.mjs mewajibkan NODE_ENV=test, TEST_DATABASE_URL PostgreSQL localhost dengan nama numora_test atau numora_test_*, TEST_REDIS_URL localhost, BULLMQ_PREFIX numora:test:, DATABASE_URL/REDIS_URL kosong, serta migration URL kosong atau sama dengan test URL. DB/Redis/queue belum dijalankan. Storage/media harus memakai fixture. Jangan memakai dev, migrate, seed atau ci tanpa isolasi dan pembacaan instruksi produk.

SHA-256 bukti/config utama:

| Berkas relatif terhadap root | SHA-256 |
| --- | --- |
| `AGENTS.md` | `dff03d3379c08549213dc46d4f197576b5ecb31d002e0079831ec553ed60214e` |
| `package.json` | `cea3326f421296a6720e277cbd6a62808d755e9f76c10ea93a655a23a9aa2f43` |
| `pnpm-lock.yaml` | `5a14d6c6c72df15b9d008ba8d86f2427487ca0ffaf9b76d4a7bd5c8e7ab45188` |
| `scripts/check-test-env.mjs` | `4cf577f7a7625e03e02d5ccd269828aebf5cb4fb3bad1ae9d8698fa3fac30894` |
| `scripts/check-test-env.test.mjs` | `2a8c5c8162ac2cd57bac56a1bcf2af3c51e000e7af39feb370761ad02763b5ed` |
| `packages/database/package.json` | `8d2986214974eaaf7fedbe0d9736e4249d6751fa46cdcd91b3330febb8a422fb` |
| `docs/development/GENERATOR_HANDOFF.md` | `dc0864e45c87a41881ded2c1479bbfabc6bb395c6874ab3389e74aac4e4553d7` |

### numora-generator

- Root: `D:/collages/semester 5/numora/Numora-ai-service`
- Branch: `docs/drill-chapter3-import-audit`
- HEAD: `b9d25a7d6251673c9f7edbb5736ffaaf12bf1be9`
- Baseline UTC: `2026-10-21T10:03:08.729396+00:00`
- Manifest: 1590 berkas; [baseline](../output/project-evidence/numora-generator/20261021T100155Z/baseline.json), [sesudah inspeksi](../output/project-evidence/numora-generator/20261021T100155Z/after.json).

Worktree terdaftar:

```text
worktree D:/collages/semester 5/numora/Numora-ai-service
HEAD b9d25a7d6251673c9f7edbb5736ffaaf12bf1be9
branch refs/heads/docs/drill-chapter3-import-audit

worktree D:/collages/semester 5/numora/.worktrees/Numora-ai-drill-11-15
HEAD fa462599df5e5210a337d4d87d0bf3aaa2e62d86
branch refs/heads/feat/drill-11-15

worktree D:/collages/semester 5/numora/.worktrees/tryout-generator
HEAD 1a48d1ca5faa0b6153b031464ee9d755195f30e7
branch refs/heads/feat/tryout-generator
```

Perubahan lokal pada baseline:

```text
(bersih)
```

Python 3.11 lokal; unittest untuk variant_gen, dependency service terpisah.

Environment lokal standar .venv belum ditemukan; availability global psycopg dicatat tanpa mengimpor aplikasi. Tes variant_gen memakai temporary directory pada banyak kasus; review side effect setiap audit sebelum eksekusi. Audit_level45_completion.py menulis dokumen/output dan tidak diperlakukan sebagai pembacaan aman. Tes service/DB terpisah dari unittest generator. Jangan menghubungkan konfigurasi IRT/DB kerja; inventaris bank bukan validasi psikometrik. Worktree lain hanya dicatat, bukan dipilih sebagai sumber aktif.

SHA-256 bukti/config utama:

| Berkas relatif terhadap root | SHA-256 |
| --- | --- |
| `requirements.txt` | `07da83f95105a05e608e43da2b300df6b06b261d35546689cbc6a1cfe3d8ee42` |
| `requirements-service.txt` | `f7101062d0a5f8c76658e4af38a6f2349eb0b78cf4eb0acf336ba4cf66220c5c` |
| `requirements-service-test.txt` | `fd17c3e2ee4cbda6e672536a386858b34d421cb67ddaa139e609ca3c727e6e17` |
| `variant_gen/bank.py` | `18196499671645a7a2a20cf82990593e4a1d30f450def45095697c0d77820f8d` |
| `variant_gen/config_store.py` | `9e9a1c1f4a262449643544bc29cc8bcc4f5f28cae0b83d5696476e80fe9993d1` |
| `variant_gen/tests/audit_level45_completion.py` | `6ce5915944a0df9afdba561695a6b13d69121a9c67ed8a7e030856e9c4beb072` |
| `docs/audits/2026-10-21-all-indicators-progress-after-indicator20/progress.json` | `abc73adb386100dbfc566efc754fbcde1238f6c47c75f7724901b90c177aee27` |

### um-rag

- Root: `D:/code/nlp/ta-sisdas`
- Branch: `main`
- HEAD: `fb60f9f8ee810644942806fdba39ad60e731829d`
- Baseline UTC: `2026-10-21T10:03:09.064845+00:00`
- Manifest: 137 berkas; [baseline](../output/project-evidence/um-rag/20261021T100155Z/baseline.json), [sesudah inspeksi](../output/project-evidence/um-rag/20261021T100155Z/after.json).

Worktree terdaftar:

```text
worktree D:/code/nlp/ta-sisdas
HEAD fb60f9f8ee810644942806fdba39ad60e731829d
branch refs/heads/main
```

Perubahan lokal pada baseline:

```text
(bersih)
```

FastAPI/Python; Chroma/LangChain; web React/TanStack Start (koreksi stack dari inspeksi Task 2).

Python global memuat chromadb dan langchain-core dengan versi tercatat; environment API lokal standar belum ditemukan. apps/web/node_modules tersedia. Tes API mengandung mock provider, tetapi belum dieksekusi. scripts/evaluate_rag.py memanggil backend.rag_answer; evaluasi end-to-end membutuhkan indeks Chroma, model/provider dan konfigurasi eksplisit. Gunakan salinan indeks/fixture; jangan menjalankan ingest/reset pada data/chroma kerja. Tidak ada isolasi DB/cache/queue yang dianggap terjamin hanya karena suite memakai unittest. Status provider dan layanan lokal belum diperiksa.

SHA-256 bukti/config utama:

| Berkas relatif terhadap root | SHA-256 |
| --- | --- |
| `AGENTS.md` | `6d0f27da9f4b6e98906107495aa1717e2ccee968a46029d90c4de48d7b315617` |
| `apps/api/requirements.txt` | `ed346195b5dc77683639450de67550b1d3d16c8e14863d4c5337ac389c28abef` |
| `scripts/evaluate_rag.py` | `89e9722a6ba6e5e99b31cd89b4bc78dd1845a9801e0717843b05d0694f77fab6` |
| `docs/rag-evaluation.md` | `f70b7f0e66e41a0bec2c57f065aaac0c7d49e9a346c97c1bb00ed4a5a646d1f3` |
| `data/evaluation/rag_eval_set.json` | `5d5059b796e069b8971a157d4beea55fd48358e0be6a9e32d1a8db2180fb453f` |
| `apps/api/app/query_planner.py` | `03daba28a590cc9d17f35213e109bd8c2b42bc23a3841c3418945c91a338c742` |
| `apps/api/app/retrieval.py` | `2a70f7f66407b242df65ea9ae2505ab806bf92b35d38c409ee0cedcbe36c9094` |
| `apps/api/app/reranking.py` | `fb252bc958a4b43a33b25517ed600506d5a9608df107d1d5f5dc99ff595a5f0b` |
| `apps/api/app/fact_index.py` | `d8b8d8c50d7b5afd2e3b6599a5198015497ee8f88ba338f2cc87c9dcc0126fb4` |

## Pemeriksaan ulang dan penggunaan berikutnya

Pembacaan ulang menghasilkan 0 perubahan HEAD, branch, worktree, status lokal, dan hash berkas dalam cakupan manifest pada sembilan checkout. Perubahan dokumentasi register/plan setelah pemeriksaan merupakan hasil Task 1 dan dikecualikan dari hash kode portofolio.

Perbandingan lengkap: [comparison.json](../output/project-evidence/inventory/20261021T100155Z/comparison.json). SHA-256 setiap berkas tersedia di manifest baseline/after; tabel di atas hanya pilihan bukti utama.

Untuk task berikutnya, buat run ID baru dan direktori `output/project-evidence/<project-id>/<run-id>/`. Simpan perintah, environment uji yang disanitasi, hasil, failure/skip, serta pembacaan ulang sumber. Jangan menimpa run ini. Jika hash/HEAD/status berubah, lakukan baseline ulang dan catat sumber hasil sebelum menggunakan angka.

Benchmark WaspadAI yang untracked telah dipin melalui hash; checkout HEAD saja tidak mereproduksi sumber tersebut. Snapshot kerja terkontrol harus menyertakan file relevan sebelum tes lanjutan. Perubahan SIPARIH dan WaspadAI yang tertera di atas telah ada sebelum task ini dan dipertahankan.

Task 1 selesai pada lingkup inventaris. Atribusi klaim, pengujian ulang, pembaruan copy, dan perubahan UI tetap menjadi task berikutnya.

## Task 2 — Matriks klaim dan atribusi

Inspeksi: 21 Oktober 2026; run `20261021T101328Z`. Hanya pembacaan sumber, riwayat Git, laporan lama dan gambar. Tidak menjalankan suite aplikasi, provider live atau evaluasi baru. Seluruh status berikut berlaku pada snapshot Task 1 yang diperiksa ulang pada run Task 2.

### Arti status dan keputusan publikasi

- **implemented**: perilaku/artefak ada pada kode yang dibaca; belum berarti dijalankan atau lolos tes pada task ini.
- **locally verified**: pemeriksaan langsung pada task ini. Dipakai untuk identitas/hash, keberadaan artefak, dan kecocokan aset; tidak dipakai untuk mengklaim tes produk baru.
- **historically verified**: hasil tersimpan atau dilaporkan pada run lama. Tanggal, scope dan kekuatan artefak tetap disebut; laporan naratif tidak disamakan dengan raw log.
- **design-only**: rancangan/proposal, tanpa klaim sudah aktif.
- **unmeasured**: tidak ada pengukuran yang cukup; tidak layak dipublikasikan sebagai hasil numerik.
- **layak bersyarat** memerlukan batas yang tertulis pada baris; **kualifikasi** berarti copy perlu memperjelas scope; **tahan pembaruan angka** menunggu Task 3–8; **label kapabilitas** bukan impact terukur.

Jumlah commit tidak dipakai untuk mengukur kontribusi. Nama author mendukung atribusi perubahan tertentu, bukan kerja tanpa bantuan, kepemilikan seluruh file, persentase kontribusi atau jabatan formal. Pernyataan pemilik dalam paket context diperlakukan sebagai first-party testimony. Izin publikasi materi sudah diberikan pengguna; keterbatasan bukti tetap dipertahankan.

Pemetaan kalimat persis: [claim-matrix.json](../output/project-evidence/claims/20261021T101328Z/claim-matrix.json). Identitas full commit, author tanpa email, tanggal dan changed paths: [commit-attribution.json](../output/project-evidence/claims/20261021T101328Z/commit-attribution.json).

Field pada tabel merujuk `portfolio.work.projects` di `src/data/portfolio.ts`, indeks contribution/achievement berbasis nol. Tiap kalimat pada description/overview/deskripsi contribution/deskripsi achievement mendapat entry tersendiri pada JSON; angka/label achievement disertakan bersama deskripsinya.

Metadata persis (role, year/duration, tools, kategori, URL dan pilihan presentasi): [metadata-matrix.json](../output/project-evidence/claims/20261021T101328Z/metadata-matrix.json). Daftar model default pada config adalah konfigurasi sumber, bukan hasil observasi model deployment; jangan menyalin ID model lama dari laporan tanpa pin run baru.

### Matriks: WaspadAI

**Masalah dan konteks:** An evidence-guided AI system that investigates suspicious messages, links, and screenshots through multimodal analysis, grounded retrieval, and clear, actionable explanations.

**Atribusi pribadi/tim:** AI service/web: implementasi atas identitas Git ShafwanAdhi dan laporan pemilik. Android/Product API: proyek tim; kontribusi pribadi terbatas pada kontrak, perbaikan request/auth, crop, community-evidence builder/transport dan presentasi hasil. Benchmark untracked tidak memiliki atribusi Git; sumber lokal dan laporan pemilik harus tetap disebut.

**Metadata, stack, waktu dan URL:** AI / ML sesuai integrasi model/retrieval, tanpa klaim melatih Qwen/GPT-OSS. Role gabungan harus mempertahankan kata contributor pada mobile. September 2026 adalah jendela aktivitas Git, bukan lama kerja terukur. Visit Demo dan URL berasal dari pemilik; availability live belum diperiksa pada Task 2.

Sumber bernomor (path relatif terhadap root repo pada Task 1; `context` = `D:/project_context`):

- **W1** — `waspadai-ai`: `apps/api/app/config.py`; `apps/api/app/services/pipeline.py`; `apps/api/app/services/input_adapters.py`; `apps/api/app/services/privacy.py`; `apps/api/app/services/signal_extraction.py`; `apps/api/requirements.txt`; `apps/web/package.json`; `compose.yaml`.
- **W2** — `waspadai-ai`: `apps/api/app/services/rag.py`; `apps/api/rulebook/compiled/rules.jsonl`; `apps/api/tests/test_rulebooks.py`.
- **W3** — `waspadai-ai`: `apps/api/app/services/web_search.py`; `apps/api/app/services/planner_guardrails.py`; `apps/api/app/services/community_evidence.py`; `apps/api/app/services/presentation.py`.
- **W4** — `waspadai-product`: `backend/app/verification_service.py`; `backend/app/community_evidence_service.py`; `frontend/app/src/main/java/id/waspadai/app/core/capture/MediaProjectionController.kt`.
- **W5** — `waspadai-ai`: `apps/api/evaluation/production_results.json`; `apps/api/evaluation/production_cases.jsonl`; `apps/api/scripts/evaluate_production.py`; `docs/production_benchmark.md`.
- **W6** — `context`: `waspadai-mobile/verification.txt`; `waspadai-mobile/evidence.md`; `waspadai-api.md`.

Commit yang diperiksa (seluruh ID dan changed paths di artefak riwayat):

- `waspadai-ai`: `3701cd236002` (ShafwanAdhi, 2026-09-14); `97c5ed84f08c` (ShafwanAdhi, 2026-09-25).
- `waspadai-product`: `34612c26ba0f` (ShafwanAdhi, 2026-09-17); `97e2ee7d8d5c` (ShafwanAdhi, 2026-09-17); `08868984b70e` (ShafwanAdhi, 2026-09-17); `621ee8102d0b` (ShafwanAdhi, 2026-09-17); `bf8e899991b0` (ShafwanAdhi, 2026-09-18); `4888e096220a` (ShafwanAdhi, 2026-09-24).

| Field / klaim saat ini | Status bukti | Sumber | Keputusan publikasi dan batas |
| --- | --- | --- | --- |
| `description` | implemented | W1 W3 | **kualifikasi**. Evidence-guided dan actionable merupakan tujuan/perilaku kode; jangan menyiratkan ketepatan lapangan atau manfaat terukur. |
| `overview` | implemented | W1 W2 W3 W4 W6 | **kualifikasi**. Pisahkan kepemilikan AI/web dari kontribusi Android. UNVERIFIED adalah kebijakan fallback, bukan jaminan bahwa semua kesalahan dapat dicegah. |
| `contributions.0 — Multimodal verification pipeline` | implemented | W1 | **layak bersyarat**. Shared pipeline dan privacy filtering terlihat pada kode; tidak sama dengan audit keamanan atau sertifikasi privasi. |
| `contributions.1 — Rulebook-guided investigation` | implemented | W2 W5 | **kualifikasi**. 255 chunks/3 domain dan 17 triggers adalah inventaris; recount ditunda Task 3. Rulebook memberi pedoman, bukan bukti kebenaran klaim. |
| `contributions.2 — Evidence retrieval & guardrails` | implemented | W3 W4 | **layak bersyarat**. Bounded search, guardrails dan community evidence ada; kualitas sumber, SQL eligibility live, serta kualitas verdict belum diukur. |
| `contributions.3 — Web delivery & mobile integration` | implemented | W4 W6 | **kualifikasi**. Commit 34612c2/97e2ee7/bf8e899/0886898 membatasi kontribusi pribadi. Learning/profile/community UI bukan seluruhnya karya pribadi. |
| `contributions.4 — Evaluation & deployment` | implemented | W5 W6 | **kualifikasi**. Benchmark/traces dan workflow operasi terdokumentasi; benchmark lokal belum di-commit. Menulis health/deploy workflow tidak membuktikan uptime atau keberhasilan setiap deploy. |
| `achievements.0 — 98.15% / Critical-signal recall` | historically verified | W5 | **tahan pembaruan angka**. 98,15% critical-signal recall, 47 kasus berlabel dari 100 kasus sintetis/regresi; 51 false_positive_signal_count pada laporan. Sebut deteksi tambahan terhadap label; completeness label perlu review. Bukan accuracy verdict. |
| `achievements.1 — 100% / Replay response validity` | historically verified | W5 | **kualifikasi**. 100% validitas schema hanya replay dengan stub: denominator replay dan 20 kasus gambar yang dilewati harus terlihat. Bukan 100% kebenaran respons atau live inference. |
| `achievements.2 — 255 rules / Investigation rulebook` | implemented | W2 W5 | **kualifikasi**. 255 rule chunks/3 domain dan 17 triggers menggambarkan ukuran korpus/metode; bukan outcome kualitas. Kata assembled tidak berarti menulis sumber rujukan asli. |
| `achievements.3 — 11 / Product API tests passed` | historically verified | W4 W6 | **kualifikasi**. 11 passed pada 20 Oktober di dua file tes Product API, MockTransport dan transaksi DB palsu. Tidak memverifikasi PostgreSQL, Supabase, Android build atau provider live. |

**Keputusan engineering yang dapat dijelaskan:**

- **Memisahkan rulebook dan factual evidence** (W2 W3): Terdokumentasi dan terlihat pada pipeline. Pedoman mengarahkan investigasi; verdict harus bergantung pada evidence.
- **Fallback UNVERIFIED dan pencarian berbatas** (W1 W3): Perilaku kode. Batas provider dan evidence tipis dipertahankan sebagai ketidakpastian; belum ada eksperimen ablation terhadap alternatif.
- **Memisahkan auth Product API dan API key AI service** (W4 W6): Kontrak dan adapter: token pengguna berhenti di Product API; transport server-ke-server memakai key. Kontribusi berupa perbaikan/integrasi pada sistem tim.

**Outcome yang belum diukur:** adoption, penghematan waktu/biaya, latency produksi, uptime dan dampak pengguna tidak memiliki bukti pengukuran pada inspeksi ini. Status **unmeasured**; jangan mengubah kapabilitas, inventaris atau jumlah tes menjadi dampak bisnis/model.

### Matriks: Numora Assessment & Question Variants

**Masalah dan konteks:** A reproducible mathematics question engine and assessment workbench for Numora, connecting parameterized content, rigorous validation, and assessment-service integration.

**Atribusi pribadi/tim:** Produk Numora dibangun tim. Engine awal diperkenalkan Achmad D Fajar (9811084); Shafwan memperluas generator, workbench, validasi, persistence dan scoped acceptance. HTTP generator service ditambahkan farelfhr (3a0f21e), bukan karya pribadi Shafwan. Curriculum menyediakan materi sumber. Git author tidak membuktikan penulisan tanpa bantuan.

**Metadata, stack, waktu dan URL:** Software Engineering tepat untuk generator deterministik. Role deskriptif, bukan jabatan lead. Oktober 2026 adalah aktivitas yang teramati. Python/workbench/Drizzle/NestJS adalah area kontribusi, bukan kepemilikan stack seluruh produk. Tidak ada URL demo terverifikasi dalam data publik.

Sumber bernomor (path relatif terhadap root repo pada Task 1; `context` = `D:/project_context`):

- **N1** — `numora-generator`: `variant_gen/engine.py`; `variant_gen/randomizer.py`; `variant_gen/config_store.py`; `variant_gen/bank.py`.
- **N2** — `numora-generator`: `variant_gen/webui.py`; `variant_gen/webui.html`; `variant_gen/tests/test_drill_20_23_revisions.py`; `variant_gen/tests/audit_drill_20_23_revisions.py`.
- **N3** — `numora-central`: `packages/database/src/measurement-contract.ts`; `packages/database/src/measurement-handoff.ts`; `docs/adr/ADR-011-separated-irt-compute.md`; `docs/development/IRT_V3_RUNBOOK.md`.
- **N4** — `numora-generator`: `docs/superpowers/specs/2026-10-06-generator-self-adjustment-design.md`; `numora_service/api.py`; `docs/audits/2026-10-21-all-indicators-progress-after-indicator20/progress.json`.
- **N5** — `numora-central`: `apps/api/src/modules/learning/drill-chapter3-override.ts`; `docs/development/GENERATOR_HANDOFF.md`; `docs/development/DRILL_CHAPTER3_OWNER_EXCEPTION.md`.
- **N6** — `context`: `numora-question-variants/evidence.md`; `numora-question-variants/review/python-tests.log`; `numora-question-variants/review/inventory.json`; `numora-question-variants/review/revised-generator-audit.json`; `numora-question-variants/screenshoot/README.md`.

Commit yang diperiksa (seluruh ID dan changed paths di artefak riwayat):

- `numora-central`: `aa15be5399bf` (ShafwanAdhi, 2026-10-03); `943928f7bde0` (ShafwanAdhi, 2026-10-03); `d7cbebde70fc` (ShafwanAdhi, 2026-10-03); `b018d8051ad7` (ShafwanAdhi, 2026-10-07).
- `numora-generator`: `981108451309` (Achmad D Fajar, 2026-10-03); `a75fbfe1ccb9` (ShafwanAdhi, 2026-10-04); `7ad0d1a7fb6a` (ShafwanAdhi, 2026-10-04); `fa462599df5e` (ShafwanAdhi, 2026-10-05); `0553c2982c8b` (ShafwanAdhi, 2026-10-05); `3a0f21eb8b59` (farelfhr, 2026-10-07); `7abed28e9ef2` (ShafwanAdhi, 2026-10-06); `ba7af91d0221` (ShafwanAdhi, 2026-10-07).

| Field / klaim saat ini | Status bukti | Sumber | Keputusan publikasi dan batas |
| --- | --- | --- | --- |
| `description` | implemented | N1 N2 N5 | **kualifikasi**. Generator deterministik dan workbench ada; rigorous validation harus dibatasi pada oracle/replay yang diperiksa, bukan kesetaraan akademik atau IRT. |
| `overview` | implemented | N1 N2 N3 N4 N5 N6 | **kualifikasi**. Kata my work connects tidak boleh menghapus kontribusi engine awal, HTTP service dan produk tim. Responsibilities IRT bukan bukti consumer ilmiah atau self-adjustment sudah aktif. |
| `contributions.0 — Reproducible question generation` | implemented | N1 N6 | **layak bersyarat**. a75fbfe/fa46259/0553c29 mendukung extended, bukan invented engine. Seed/config menjamin mekanisme reproduksi pada implementasi; bukan seluruh ruang parameter sudah diuji. |
| `contributions.1 — Operator workbench & mathematical validation` | implemented | N2 N6 | **layak bersyarat**. 7ad0d1a mendukung workbench; mathematical oracle dan revision audit terpisah dari penilaian pedagogis. |
| `contributions.2 — IRT data architecture` | implemented | N3 | **kualifikasi**. aa15be5/943928f/d7cbebd mendukung data architecture. IRT foundation dan versioned contract bukan model terkalibrasi. |
| `contributions.3 — Controlled self-adjustment design` | design-only | N4 N3 | **label rancangan**. Spec self-adjustment masih proposed. Jangan menampilkan sebagai otomatisasi yang sudah beroperasi atau hasil ilmiah. |
| `contributions.4 — Main-service integration` | implemented | N3 N5 | **kualifikasi**. Handoff/persistence dan b018d80 merupakan kontribusi pribadi. Eksekusi HTTP 3a0f21e milik rekan; owner exception Chapter 3 terbatas allowlist dan bukan persetujuan umum Curriculum. |
| `achievements.0 — 746 / Generator configurations` | historically verified | N6 N4 | **tahan pembaruan angka**. 746/820 (719 Drill+27 Tryout) adalah snapshot 20 Oktober. Laporan 21 Oktober menyebut 1078/1180, stock 86 originals dan 16 held; belum dihitung ulang. Angka repository-wide tim, bukan konfigurasi pribadi. |
| `achievements.1 — 186 / Regression tests passed` | historically verified | N6 | **kualifikasi**. 186 tests pada log 20 Oktober, berbeda checkout generator dari HEAD Task 1. Tidak mencakup monorepo, tests/service atau produksi; jalankan ulang pada Task 5. |
| `achievements.2 — 1,600 / Seed checks passed` | historically verified | N2 N6 | **kualifikasi**. 1600 extra seed checks untuk 16 soal revisi dan 320 distinct candidates pada audit tertentu. Unit analisis adalah checks/candidates per soal, bukan 1600 soal atau kualitas psikometrik. |
| `achievements.3 — 215 / Curated conceptual variants` | historically verified | N1 N6 N4 | **tahan pembaruan angka**. 215 variants/70 originals adalah inventaris lama, label VERIFIED internal. Laporan baru tidak otomatis membuktikan total varian; Task 5 harus memeriksa stock loader dan denominator. |

**Keputusan engineering yang dapat dijelaskan:**

- **Seed dan konfigurasi berversi** (N1): Terlihat pada engine/randomizer dan lineage. Alasan reproduksibilitas didukung desain; tidak mengarang perbandingan kualitas dengan LLM.
- **Canonical content terpisah dari compute evidence** (N3 N5): ADR-011 dan schema/handoff mendokumentasikan batas kepemilikan; generation, review dan publication merupakan tahap berbeda.
- **Preservasi sumber dan HOLD sebelum penerimaan** (N1 N2 N4): Loader/revision audit mempertahankan sumber dan menandai held. Acceptance software tidak menggantikan persetujuan Curriculum atau kalibrasi.

**Outcome yang belum diukur:** adoption, penghematan waktu/biaya, latency produksi, uptime dan dampak pengguna tidak memiliki bukti pengukuran pada inspeksi ini. Status **unmeasured**; jangan mengubah kapabilitas, inventaris atau jumlah tes menjadi dampak bisnis/model.

### Matriks: SIPARIH

**Masalah dan konteks:** A village document platform that connects resident submissions, neighborhood approvals, protected PDF delivery, and administrative archives in one streamlined workflow.

**Atribusi pribadi/tim:** Commit relevan memakai identitas ShafwanAdhi. Ini mendukung kontribusi implementasi pada file yang ditunjuk, tanpa menyimpulkan sole developer atau pemilik desain/requirements. Deskripsi I worked on lebih tepat daripada klaim seluruh sistem dibangun sendiri.

**Metadata, stack, waktu dan URL:** Software Engineering, PHP/Laravel/PDF tooling didukung manifest/code. Redis/Nginx adalah komponen konfigurasi, belum diperiksa live. Juli 2026 adalah aktivitas Git; tidak membuktikan durasi kontrak. URL siparih.shafwan.digital diberikan pengguna; uptime tidak diperiksa.

Sumber bernomor (path relatif terhadap root repo pada Task 1; `context` = `D:/project_context`):

- **S1** — `siparih`: `app/Http/Controllers/DocumentController.php`; `app/Policies/DocumentPolicy.php`; `app/Support/NavigationAccess.php`.
- **S2** — `siparih`: `app/Services/PdfNormalizer.php`; `app/Services/DocumentSignatureService.php`; `resources/views/pages/detail-dokumen.blade.php`.
- **S3** — `siparih`: `tests/Feature/Acceptance/SiparihDocumentSubmissionTest.php`; `tests/Concurrency/SiparihApprovalConcurrencyTest.php`; `tests/Support/approve_document_worker.php`.
- **S4** — `siparih`: `tests/reports/siparih-automation-testing-report.md`; `tests/reports/siparih-automation-terminal-output.txt`; `tests/reports/siparih-concurrency-terminal-output.txt`.
- **S5** — `context`: `siparih/evidence.md`; `siparih/SCREENSHOTS.md`.

Commit yang diperiksa (seluruh ID dan changed paths di artefak riwayat):

- `siparih`: `61d39684933b` (ShafwanAdhi, 2026-07-12); `ae1d24cf9df3` (ShafwanAdhi, 2026-07-13); `1af2080b2643` (ShafwanAdhi, 2026-07-13); `752782e1c9ae` (ShafwanAdhi, 2026-07-23); `9420a78d8d8a` (ShafwanAdhi, 2026-07-23).

| Field / klaim saat ini | Status bukti | Sumber | Keputusan publikasi dan batas |
| --- | --- | --- | --- |
| `description` | implemented | S1 S2 | **kualifikasi**. Alur surat terlihat pada code. Streamlined tidak menyiratkan pengurangan waktu atau peningkatan produktivitas yang sudah diukur. |
| `overview` | implemented | S1 S2 S3 S4 | **layak bersyarat**. Scope kontribusi cocok controller/service/tests. Visual signature overlay bukan tanda tangan kriptografis tersertifikasi; administrator bukan penanda tangan approval. |
| `contributions.0 — Protected document delivery` | implemented | S1 | **layak bersyarat**. 61d3968 menambah X-Accel-Redirect setelah Gate/policy. Runtime Nginx dan private location perlu verifikasi terpisah. |
| `contributions.1 — PDF upload compatibility` | implemented | S2 | **layak bersyarat**. ae1d24c menambah normalizer, timeout dan cleanup. Keberadaan kode tidak membuktikan semua PDF/versi Ghostscript kompatibel. |
| `contributions.2 — Same-origin preview requests` | implemented | S2 | **layak bersyarat**. 1af2080 mengubah preview ke same-origin. Tidak menyimpulkan pengurangan error tanpa pengukuran. |
| `contributions.3 — Acceptance coverage and access boundaries` | implemented | S1 S3 | **layak bersyarat**. 752782e mencakup submission dan acceptance. RW berasal dari akun; suite memeriksa manipulasi, bukan audit seluruh authorization. |
| `contributions.4 — Competing-approval verification` | implemented | S3 S4 | **layak bersyarat**. 9420a78 memperkenalkan dua worker MySQL/MariaDB. Satu skenario race bukan bukti seluruh concurrency aman. |
| `achievements.0 — 82 / Tests / 818 assertions` | historically verified | S4 | **label historis**. 82 tests/818 assertions pada revisi 9420a78, 23 Juli; HEAD sekarang 2ee3eeb. Jangan menyebut current suite passed atau menambah concurrency test sebagai eksperimen yang sama. |
| `achievements.1 — 1 approval / Two competing requests` | historically verified | S3 S4 | **kualifikasi**. APR-15 terpisah: 1 test/12 assertions; dua request, satu sukses, satu ditolak, satu log approval. Bukan throughput atau jaminan lock semua DB. |
| `achievements.2 — 3 roles / Role-based document workflow` | implemented | S1 S3 | **label kapabilitas**. 3 role adalah role fungsional warga/RW/admin; bukan jumlah pengguna. Admin memonitor, RW menyetujui dalam scope. |
| `achievements.3 — Private files / Authorized document delivery` | implemented | S1 | **label kapabilitas**. Protected delivery adalah kontrol akses implementasi; keamanan menyeluruh belum diaudit. |

**Keputusan engineering yang dapat dijelaskan:**

- **Authorization aplikasi lalu pengiriman file oleh Nginx** (S1): Tujuan langsung commit 61d3968. Pisahkan private storage dari rute publik; keberhasilan konfigurasi server belum diuji ulang.
- **Normalisasi PDF sebelum FPDI** (S2): Konversi compatibility dan cleanup terlihat pada service. Trade-off proses eksternal/timeout dapat dijelaskan sebagai mekanisme, bukan benchmark.
- **Verifikasi race pada DB dengan row lock** (S3 S4): MySQL/MariaDB dipilih untuk pengujian locking yang tidak terwakili SQLite :memory:. Laporan historis menguraikan lingkungan.

**Outcome yang belum diukur:** adoption, penghematan waktu/biaya, latency produksi, uptime dan dampak pengguna tidak memiliki bukti pengukuran pada inspeksi ini. Status **unmeasured**; jangan mengubah kapabilitas, inventaris atau jumlah tes menjadi dampak bisnis/model.

### Matriks: UM RAG Assistant

**Masalah dan konteks:** A campus information assistant connecting official university documents, hybrid retrieval, and source-linked answers through a transparent, responsive chat experience.

**Atribusi pribadi/tim:** Paket evidence memuat pernyataan pemilik sebagai solo developer; initial commit ShafwanAdhi memuat routing/retrieval/UI. Gunakan sebagai atribusi integrasi sistem, bukan kepengarangan dokumen UM, model, library atau bukti kerja tanpa bantuan.

**Metadata, stack, waktu dan URL:** Nama publik UM RAG Assistant dengan slug lama dipertahankan. AI / ML berarti integrasi RAG, bukan model fine-tuned. Stack UI aktual React/TanStack Start, bukan Next.js. September 2026 didukung riwayat; URL dari paket/pemilik, tidak diperiksa live pada task ini. Scorer source-hit@1 dan label fakta kosong perlu diperbaiki Task 4 sebelum skor dipublikasikan.

Sumber bernomor (path relatif terhadap root repo pada Task 1; `context` = `D:/project_context`):

- **R1** — `um-rag`: `apps/api/app/query_planner.py`; `apps/api/app/fact_index.py`; `apps/api/main.py`.
- **R2** — `um-rag`: `apps/api/app/config.py`; `apps/api/app/retrieval.py`; `apps/api/app/reranking.py`; `scripts/index_documents.py`; `scripts/validate_metadata.py`; `apps/api/requirements.txt`; `apps/web/package.json`.
- **R3** — `um-rag`: `apps/web/src/routes/index.tsx`; `apps/web/src/components/SourceCard.tsx`; `docker-compose.yml`; `deploy/nginx.conf`.
- **R4** — `um-rag`: `scripts/evaluate_rag.py`; `docs/rag-evaluation.md`; `data/evaluation/rag_eval_set.json`.
- **R5** — `context`: `evidence.md`; `project.json`.

Commit yang diperiksa (seluruh ID dan changed paths di artefak riwayat):

- `um-rag`: `6d2cc32b5c71` (ShafwanAdhi, 2026-09-05); `fb60f9f8ee81` (ShafwanAdhi, 2026-09-12).

| Field / klaim saat ini | Status bukti | Sumber | Keputusan publikasi dan batas |
| --- | --- | --- | --- |
| `description` | implemented | R1 R2 R3 | **layak bersyarat**. Hybrid retrieval/source-linked UI merupakan perilaku implementasi. Transparent/responsive belum menjadi hasil usability atau latency terukur. |
| `overview` | implemented | R1 R2 R3 R4 | **kualifikasi**. Structured facts dan routing/reranking dapat ditelusuri. Reproducible dan resilience dibatasi kode/tooling, bukan kualitas jawaban teruji pada corpus representatif. |
| `contributions.0 — Structured-fact-first query routing` | implemented | R1 | **layak bersyarat**. Planner memprioritaskan structured facts untuk aggregate/list tertentu. Bukan learned agent planner atau bukti semua agregat benar. |
| `contributions.1 — Hybrid retrieval & deterministic reranking` | implemented | R2 R1 | **layak bersyarat**. Reranker menggabungkan semantic/lexical/keyword/metadata secara heuristik deterministik; tidak mengklaim cross-encoder terlatih atau improvement tanpa baseline. |
| `contributions.2 — Reproducible document ingestion` | implemented | R2 | **layak bersyarat**. Pipeline extraction/OCR/chunking/embedding tersedia. Tidak mengklaim pembuatan dokumen kampus atau pelatihan embedding sendiri. |
| `contributions.3 — Streaming API & source-focused interface` | implemented | R1 R3 | **layak bersyarat**. Streaming, fallback, source cards dan dokumen ada. Satu screenshot respons tidak membuktikan akurasi atau ketahanan di semua rate limit. |
| `contributions.4 — Full-stack deployment & resilience` | implemented | R3 R5 | **kualifikasi**. Docker/proxy/health/security/cache tersedia. Pengamatan deployment 20 Oktober bersifat historis; belum mengukur SLA, cost atau uptime. |
| `achievements.0 — 1,165 / Indexed document chunks` | historically verified | R5 R2 | **label inventaris historis**. 1165 chunks = 835+96+64+53+117 pada inspeksi Chroma 20 Oktober. Indeks ignored tidak dipin manifest Task 1; perlu inventory ulang Task 4. Bukan retrieval quality. |
| `achievements.1 — 48 / Backend tests passed` | historically verified | R5 | **kualifikasi**. 48 passed dilaporkan 20 Oktober; belum ada log mesin mentah pada paket context yang diperiksa. Sumber adalah narrative evidence, bukan hasil tes baru; ulangi Task 4. |
| `achievements.2 — 39 PDFs / Validated metadata entries` | historically verified | R2 R5 | **label inventaris historis**. 39 PDF metadata entries, 38 kampus+1 profil developer yang disembunyikan. Bukan 39 dokumen publik kampus atau bukti kualitas corpus. |
| `achievements.3 — 5 domains / Organized retrieval collections` | implemented | R1 R2 R5 | **label kapabilitas**. 5 domain adalah organisasi koleksi. Tidak menunjukkan lima model, lima dataset training, atau keberhasilan domain classification. |

**Keputusan engineering yang dapat dijelaskan:**

- **Structured-fact-first sebelum retrieval** (R1): Perilaku eksplisit pada planner/main. Ditujukan untuk aggregate/list yang lebih sesuai tabel terstruktur; manfaat kuantitatif belum dievaluasi.
- **Hybrid retrieval dengan reranking deterministik** (R2): Terlihat pada formal_rerank. Transparansi score dapat dijelaskan, tetapi belum ada ablation/vector-only baseline.
- **Source cards dan akses PDF langsung** (R3): UI menampilkan sumber agar pembaca bisa memeriksa dokumen. Tidak menyiratkan semua sitasi mendukung setiap pernyataan.

**Outcome yang belum diukur:** adoption, penghematan waktu/biaya, latency produksi, uptime dan dampak pengguna tidak memiliki bukti pengukuran pada inspeksi ini. Status **unmeasured**; jangan mengubah kapabilitas, inventaris atau jumlah tes menjadi dampak bisnis/model.

### Matriks: Bonjermgu Financing Portal

**Masalah dan konteks:** A financing portal connecting vehicle estimates, application tracking, configurable pricing, and lending reports across referral partners, account officers, and administrators.

**Atribusi pribadi/tim:** Commit relevan ShafwanAdhi mendukung implementasi domain kalkulasi, konfigurasi dan interface. Role full-stack bersifat deskriptif; tidak mengasumsikan kepemilikan kebijakan kredit, spreadsheet bisnis, merek, keputusan analis atau sistem eksternal.

**Metadata, stack, waktu dan URL:** Software Engineering, PHP/Laravel/Livewire/PostgreSQL dan Pest didukung manifest/code. Agustus 2026 adalah aktivitas Git, bukan durasi internship lengkap. bonjermgu.com berasal dari pemilik/runbook; tidak mengklaim accessibility/uptime saat ini.

Sumber bernomor (path relatif terhadap root repo pada Task 1; `context` = `D:/project_context`):

- **B1** — `bonjermgu`: `app/Services/SimulationService.php`; `app/Domain/Simulation/SimulationEngine.php`; `app/Repositories/SimulationConfigurationRepository.php`.
- **B2** — `bonjermgu`: `app/Policies/ApplicationPolicy.php`; `routes/web.php`; `app/Enums/Role.php`.
- **B3** — `bonjermgu`: `database/seeders/VehicleSeeder.php`; `database/seeders/data/vehicle_prices.csv`; `docs/master-data-extraction.md`.
- **B4** — `bonjermgu`: `tests/Unit/Simulation/CreditSimulationReferenceTest.php`; `tests/Feature/AugustWorkbookReferenceTest.php`; `docs/credit-simulation-test-vectors.md`.
- **B5** — `bonjermgu`: `app/Http/Controllers/SimulationController.php`; `app/Support/CreditSimulationPdf.php`; `app/Livewire/Simulation/ViewSprint.php`; `docs/vps-runbook.md`.
- **B6** — `context`: `bonjermgu/evidence.md`; `bonjermgu/verification/simulation-unit-tests.txt`; `bonjermgu/verification/data-inventory.json`; `bonjermgu/screenshots/README.md`.

Commit yang diperiksa (seluruh ID dan changed paths di artefak riwayat):

- `bonjermgu`: `aedc35c0c005` (ShafwanAdhi, 2026-08-08); `d9d669992c43` (ShafwanAdhi, 2026-08-17); `40dacc635bc6` (ShafwanAdhi, 2026-08-17); `908b6b7888e5` (ShafwanAdhi, 2026-08-18).

| Field / klaim saat ini | Status bukti | Sumber | Keputusan publikasi dan batas |
| --- | --- | --- | --- |
| `description` | implemented | B1 B2 B5 | **layak bersyarat**. Portal simulation/tracking/report ada; tidak mengklaim underwriting otomatis atau integrasi API lembaga pembiayaan. |
| `overview` | implemented | B1 B2 B3 B4 B5 | **layak bersyarat**. Kalkulasi terpisah dari DB/UI terlihat; keputusan kredit dan verifikasi tetap tugas staff. Kalimat I built bukan kepemilikan aturan bisnis. |
| `contributions.0 — Shared financing simulation engine` | implemented | B1 | **layak bersyarat**. Domain engine memisahkan komponen biaya/asuransi/refund/rounding. Jangan menyebut financial certification atau universal spreadsheet equivalence. |
| `contributions.1 — Role-specific application workflows` | implemented | B2 | **layak bersyarat**. Referral/officer/admin melalui route/policy. Administrator mengatur konfigurasi/agregat, bukan seluruh application management. |
| `contributions.2 — Configurable pricing & vehicle data` | implemented | B1 B3 | **layak bersyarat**. aedc35c memperkenalkan versioned cache; VehicleSeeder memakai transaction/upsert. Belum ada benchmark kecepatan atau verifikasi import produksi. |
| `contributions.3 — Reference-based financial regression tests` | implemented | B4 | **layak bersyarat**. Unit/reference tests memuat skenario dan toleransi. d9d6699 adalah feature workbook reference, tidak dicampur dengan unit 50-test run. |
| `contributions.4 — Interface delivery & operational handoff` | implemented | B5 | **kualifikasi**. UI/PDF/officer sheet/runbook ada. SPRINT merupakan sheet/offering workflow, bukan external origination API. Backup guide bukan bukti restore berhasil. |
| `achievements.0 — 50 / Simulation unit tests passed` | historically verified | B4 B6 | **label historis**. 50 passing simulation unit tests pada 20 Oktober; tidak mencakup feature/database/browser/production. Raw log tersedia; belum dijalankan ulang pada Task 2. |
| `achievements.1 — 386 / Simulation assertions completed` | historically verified | B4 B6 | **gabungkan dengan hasil sebelumnya**. 386 assertions berasal dari run 50 tests yang sama; bukan eksperimen atau impact kedua. |
| `achievements.2 — 26,791 / Vehicle-price source records` | historically verified | B3 B6 | **label inventaris historis**. 26791 data rows CSV tanpa header. Bukan jumlah kendaraan unik, pelanggan, transaksi atau data training ML; nilai produksi dan lisensi sumber tidak disimpulkan. |
| `achievements.3 — 3 roles / Operational access workflows` | implemented | B2 | **label kapabilitas**. 3 role fungsional; bukan adoption count. Keberadaan policy bukan security audit. |

**Keputusan engineering yang dapat dijelaskan:**

- **Domain kalkulasi terpisah dari repository/UI** (B1 B4): Struktur SimulationEngine/Service/Repository dan unit fixtures mendukung pengujian kalkulasi tanpa DB. Bukan eksperimen komparatif arsitektur.
- **Konfigurasi bisnis dengan cache berversi** (B1 B3): Commit aedc35c menunjukkan version key dan loader per product. Hindari klaim cache lebih cepat tanpa pengukuran.
- **Reference tests serta koreksi draft formula** (B4): Dokumen membedakan reference matches dari intentional corrections. Hindari klaim semua output sama persis dengan Excel atau seluruh float bit-exact.

**Outcome yang belum diukur:** adoption, penghematan waktu/biaya, latency produksi, uptime dan dampak pengguna tidak memiliki bukti pengukuran pada inspeksi ini. Status **unmeasured**; jangan mengubah kapabilitas, inventaris atau jumlah tes menjadi dampak bisnis/model.

### Matriks: SiDiKa Camera Retail Management

**Masalah dan konteks:** A camera retail platform connecting a public product catalog with inventory, quality control, sales, and reporting through team-built operational workflows.

**Atribusi pribadi/tim:** Paket pemilik menyatakan backend developer pada tim empat orang. Diff ShafwanAdhi mendukung account/catalog/QC/password/dashboard changes; semua workflow retail, stock heuristic, frontend dan fitur tim tidak dialihkan menjadi kontribusi pribadi. Tidak menilai produktivitas dari jumlah commit.

**Metadata, stack, waktu dan URL:** Software Engineering tepat; stock depletion adalah heuristik sales-rate, bukan model ML terlatih. Tahun 2025 mencerminkan kontribusi pribadi Nov–Des, bukan seluruh riwayat tim. Role backend contributor, bukan lead/sole developer. websiteUrl kosong sesuai jawaban pemilik nanti kuisi; jangan membuat URL.

Sumber bernomor (path relatif terhadap root repo pada Task 1; `context` = `D:/project_context`):

- **D1** — `sidika`: `app/Http/Controllers/PermissionsController.php`; `app/Models/User.php`.
- **D2** — `sidika`: `app/Http/Controllers/CatalogSettingsController.php`; `app/Http/Controllers/PageController.php`.
- **D3** — `sidika`: `app/Http/Controllers/QCController.php`; `resources/views/admin/dataQC_archived.blade.php`.
- **D4** — `sidika`: `app/Http/Controllers/ProfileController.php`.
- **D5** — `sidika`: `app/Http/Controllers/DashboardController.php`; `app/Services/DashboardMetricsService.php`.
- **D6** — `context`: `sidika/evidence.md`; `sidika/project.json`.

Commit yang diperiksa (seluruh ID dan changed paths di artefak riwayat):

- `sidika`: `9af8b20bc886` (ShafwanAdhi, 2025-11-16); `75c2752f7983` (ShafwanAdhi, 2025-11-18); `0d356d7dd999` (ShafwanAdhi, 2025-11-23); `669e2876c2a3` (ShafwanAdhi, 2025-12-03); `b0dab12a985d` (ShafwanAdhi, 2025-12-03).

| Field / klaim saat ini | Status bukti | Sumber | Keputusan publikasi dan batas |
| --- | --- | --- | --- |
| `description` | implemented | D1 D2 D3 D5 D6 | **konteks produk tim**. Catalog/inventory/QC/sales/report menggambarkan aplikasi tim. Tidak mengeklaim kepemilikan seluruh modul atau sistem AI. |
| `overview` | implemented | D1 D2 D3 D4 D5 D6 | **kualifikasi**. Backend contribution harus dibatasi pada perubahan terdokumentasi; account/catalog/QC/password/dashboard bukan seluruh platform. |
| `contributions.0 — Employee-linked account management` | implemented | D1 D6 | **layak bersyarat**. 9af8b20 beserta commit account sebelumnya mendukung employee-linked account operations; bukan bukti implementasi seluruh activation/auth. |
| `contributions.1 — Database-backed catalog configuration` | implemented | D2 D6 | **layak bersyarat**. 75c2752 mendukung catalog settings/banner/partner persistence dan public consumption. Later customer gallery/image variants adalah kontribusi tim. |
| `contributions.2 — Archived quality-control navigation` | implemented | D3 | **layak bersyarat**. 0d356d7 mengubah category/sort/query-preserving pagination. Helping staff navigate menyatakan fungsi, bukan peningkatan produktivitas terukur. |
| `contributions.3 — Authenticated password-change validation` | implemented | D4 D6 | **layak bersyarat**. 0d356d7 mendukung authenticated password-change checks/hashing. Bukan seluruh reset-code flow, penetration test atau jaminan keamanan. |
| `contributions.4 — Dashboard selection & reporting fixes` | implemented | D5 D6 | **layak bersyarat**. 669e287 menggunakan net profit dan single-branch condition; b0dab12 menghapus default month. Tidak membuktikan akurasi akuntansi atau kualitas keputusan bisnis. |
| `achievements.0 — Linked / Employee-based account identity` | implemented | D1 | **label kapabilitas**. Linked adalah fungsi akun terkait employee, tanpa adoption/security score. |
| `achievements.1 — Editable / Database-backed catalog content` | implemented | D2 | **label kapabilitas**. Editable adalah persisted catalog content, tanpa usability measurement. |
| `achievements.2 — Filtered / Archived QC navigation` | implemented | D3 | **label kapabilitas**. Filtered adalah query-preserving QC navigation, tanpa staff-time saving yang terukur. |
| `achievements.3 — Validated / Authenticated password changes` | implemented | D4 | **label kapabilitas**. Validated berarti input checks/hashing dalam kode, bukan pengujian runtime/security certification. vendor belum terpasang. |

**Keputusan engineering yang dapat dijelaskan:**

- **Akun ditautkan ke employee** (D1): Alasan disimpulkan dari data model: memakai identitas employee yang tersedia. Inference desain, bukan ADR atau pernyataan penemu arsitektur.
- **Konten katalog menjadi record DB** (D2): Diff 75c2752 menyimpan settings/banner/logo dan menghubungkannya ke public views; alasan administratif disimpulkan dari alur, tanpa usability study.
- **Filter/sort mempertahankan query dan all-month eksplisit** (D3 D5): Perubahan kode langsung menunjukkan perilaku yang diperbaiki. Tidak menambahkan cerita eksperimen A/B atau dampak revenue.

**Outcome yang belum diukur:** adoption, penghematan waktu/biaya, latency produksi, uptime dan dampak pengguna tidak memiliki bukti pengukuran pada inspeksi ini. Status **unmeasured**; jangan mengubah kapabilitas, inventaris atau jumlah tes menjadi dampak bisnis/model.

### Rekonsiliasi visual, fixture dan versi

Pemeriksaan **locally verified** meliputi seluruh 38 slide galeri dan enam referensi cover (44 entry; cover duplikat tetap dicatat). Aset sumber dibandingkan dengan WebP publik dan ditinjau lewat contact sheet. [gallery-mapping.json](../output/project-evidence/claims/20261021T101328Z/gallery-mapping.json) menyimpan SHA-256 aset publik/sumber, ukuran dan metode pencocokan. Kesamaan gambar bukan bukti deployment atau kepemilikan fitur.

| Proyek | Kecocokan dan versi | Atribusi/caption yang harus dipertahankan |
| --- | --- | --- |
| WaspadAI | Sembilan screenshot cocok dengan folder `waspadai-mobile/screenshoot`; cover cocok dengan PNG showcase yang diberikan pemilik. JPEG/WebP memiliki perbedaan kompresi kecil. Tidak ada metadata commit/build capture yang mengikat gambar ke HEAD produk. | Layar chat/crop/overlay dapat mengilustrasikan area kontribusi; learning/module/quiz/community/profile adalah konteks produk tim. Jangan menyatakan seluruh Android dibuat sendiri atau screenshot membuktikan live inference. |
| Numora | Enam gambar cocok dengan `screenshoot/01…06` (1600×900); README memberi BUILD_ID `jKEQGdIvfl8aKAUUwwHdV`. Request/auth di-intercept dengan fixture sintetis; bank form sempat disembunyikan di DOM. | Caption harus menyebut UI produk tim dengan demo fixtures. IRT monitoring bukan bukti consumer/calibration aktif. Build lama menampilkan 35 soal sementara fixture/PRD memakai 30; jangan mengklaim screenshot sesuai seluruh source/PRD terbaru. Workbench generator pribadi tidak ditampilkan galeri ini. |
| SIPARIH | Lima screenshot cocok dengan paket terbaru: submission, resident management, history, incoming, review; dashboard kosong sudah tidak dipakai. SCREENSHOTS.md menyebut revisi `2ee3eeb`, SQLite demo dan akun/dokumen fiktif. | Data, statistik, signature placeholder dan state approval adalah fixture. Tidak ada approval nyata yang dilakukan saat capture; gambar review bukan bukti concurrency atau tanda tangan sah. |
| UM RAG Assistant | Empat WebP byte-identical dengan paket context; laporan menyebut capture deployment 20 Oktober. Tidak ada build digest deployment pada capture yang mengikatnya ke HEAD. | Satu jawaban structured-fact dan source cards merupakan satu observasi historis. Caption live deployment merujuk waktu capture, bukan status saat ini atau benchmark jawaban. |
| Bonjermgu | Enam gallery exports cocok dengan PNG authenticated local capture; dashboard-preview adalah crop dashboard, bukan gambar lending-report. Capture README tidak mencantumkan source commit/build digest. | Mask privasi berasal dari source capture. Angka/charts dari database lokal bukan adoption atau hasil kredit produksi; simulation screenshot hanya form awal. Thumbnail crop tidak dipakai sebagai bukti metrik. |
| SiDiKa | Cover serta delapan gallery WebP byte-identical dengan `sidika/img/1…8.webp`. Paket evidence lama masih membahas diagram yang sudah diganti; path gambar aktual menjadi acuan visual. Capture commit/data fixture belum diketahui. | Dashboard, product, sales/catalog/settings adalah produk tim; tidak semua fitur merupakan kontribusi backend pribadi. Angka revenue dan akun yang terlihat tidak dipakai sebagai portfolio outcome. Jangan mengklaim screenshot berasal dari commit kontribusi 2025 tanpa provenance. |

Keterangan capture yang tidak tersedia ditandai tidak diketahui, bukan diasumsikan. Izin pengguna untuk materi yang dikirim tidak mengubah gambar menjadi bukti metrik, data fixture menjadi data lapangan, atau pekerjaan tim menjadi pekerjaan individual.

### Tindak lanjut yang dibawa ke task berikutnya

- Task 3: reproduksi benchmark WaspadAI, tampilkan denominator replay/skip, review 51 deteksi tambahan dan label; pisahkan adapter/offline dari live.
- Task 4: perbaiki scorer RAG, ulangi inventory/tests; belum ada skor kualitas jawaban yang layak dipublikasikan. Angka 48 tests masih bersumber laporan historis, indeks lokal belum dipin sebagai snapshot evaluasi.
- Task 5: recount Numora pada loader aktif; ganti snapshot 746/820 dan 215 hanya setelah inventaris baru diverifikasi. Pisahkan foundations IRT, proposed adjustment dan generator HTTP tim.
- Task 6–8: pertahankan Bonjermgu 50/386 sebagai satu run; pisahkan SIPARIH archived suite dan concurrency; beri SiDiKa hasil kapabilitas tanpa mengarang runtime/security metrics.
- Task 9–11: gunakan label implementasi/evaluasi/inventaris/rancangan yang sesuai; pertahankan orang pertama untuk kontribusi pribadi, kredit tim dan kualifikasi fixture pada gallery.

Tidak ada pertanyaan atribusi yang menghalangi penutupan Task 2: klaim yang tidak dapat dibuktikan dibatasi, ditandai atau ditahan. Detail pembagian kerja informal hanya diperlukan bila pemilik ingin memperluas klaim di luar diff dan paket evidence.

## Task 3 — Verifikasi WaspadAI, 21 Oktober 2026

Run `20261021T103107Z`. Pengumpulan dan analisis bukti Task 3 selesai; hasil live **DEGRADED**, sedangkan verifikasi Android **terhalang lingkungan**. Ini bukan pernyataan bahwa seluruh sistem sehat. Task 4 belum dimulai. Kode aplikasi dan teks publik portofolio belum diubah.

### Sumber, isolasi dan reproduksi

| Sumber | HEAD yang diperiksa | Working changes yang dipertahankan |
| --- | --- | --- |
| AI/web `D:/collages/demo fact-check` | `f9b603a6776ca5224390df3631c0cb937604dc5a` | 13 overlay file, termasuk evaluator/dataset yang belum menjadi bagian HEAD |
| Produk/Android `D:/collages/waspadai_mobile/WaspadAI` | `db1cc331866a6916471931a64180fd9d336a61b2` | Tiga overlay dokumen produk |

HEAD saja tidak cukup mereproduksi run ini. [isolated-sources.json](../output/project-evidence/waspadai/20261021T103107Z/isolated-sources.json) menyimpan path worktree detached dan SHA-256 setiap overlay; baseline sumber berada pada `output/project-evidence/<repo-id>/20261021T103107Z/baseline.json`. Dua worktree baru berada di bawah folder output run. Checkout asli tetap pada branch, HEAD, status dan hash file semula; penambahan registrasi worktree merupakan perubahan metadata Git yang disengaja.

Percobaan API awal menghasilkan 49 gagal/43 lulus karena konversi akhir baris saat checkout Windows membuat hash corpus berbeda dari compiled manifest. Bukan regresi algoritme yang kemudian diperbaiki: 60 file API dipin ulang byte-for-byte dari sumber asli (46 berbeda setelah checkout); 88 file backend produk juga dipin (nol perbedaan). Tidak melakukan compile ulang rulebook, mengubah aturan, label, atau scorer. Log kegagalan awal tetap tersimpan. [runtime-preparation.json](../output/project-evidence/waspadai/20261021T103107Z/runtime-preparation.json) mencatat koreksinya. Manifest corpus yang diperiksa memuat **255 rule chunks, 18 sources, 17 deterministic triggers**, dalam tiga domain rulebook; jumlah ini bukan ukuran keberhasilan verifikasi.

Seluruh command berikut dijalankan dalam worktree terisolasi. Wrapper offline memblokir koneksi/DNS eksternal, mengizinkan loopback, dan menonaktifkan autoload plugin pytest. Fixture Groq/Tavily menggantikan provider sungguhan. Tidak menyalin `.env`; kunci provider live hanya dimuat ke environment subprocess. Nilai rahasia tidak menjadi bagian laporan.

| Pemeriksaan | Command inti dan hasil aktual | Batas bukti |
| --- | --- | --- |
| API AI | `python -m pytest -q`: **92 passed**, 0 failed/skipped, 11,00 detik | Wiring, aturan, schema, safety/presentation dengan fixture; tidak mengukur kualitas provider atau vision/OCR live |
| Benchmark offline | `python scripts/evaluate_production.py --mode all --output <run>/offline.json --report <run>/offline.md`: exit 0 | `all` hanya signals/coverage/replay; bukan mode live |
| Backend produk | `uv run --no-sync python <offline_guard.py> -m pytest -q -m "not live_database" tests/test_remote_ai.py tests/test_verification_models.py tests/test_community_evidence_service.py tests/test_auth.py`: **32 passed**, 0 failed/skipped, 2,70 detik | Memakai environment dependensi yang sudah ada; mocked transport/fake transactions, tidak menyentuh DB live |
| Android offline | `gradlew.bat --offline --no-daemon --console=plain :app:testDebugUnitTest`: exit 1 | Plugin Foojay resolver 1.0.0 belum tersedia di cache |
| Android dengan repositori dependensi | `gradlew.bat --no-daemon --console=plain :app:testDebugUnitTest`: exit 1 setelah 205,294 detik | Resolusi dependensi gagal: `There is not enough space on the disk`; drive C: tersisa sekitar 190 MB saat diperiksa. Unit test belum berjalan; bukan bukti kegagalan assertion aplikasi |

API, benchmark offline dan backend produk masing-masing mencatat **nol upaya koneksi eksternal**. Guard Python tidak berlaku pada proses JVM; percobaan Android pertama memakai mode Gradle offline, kedua mengizinkan repositori dependency. SDK 36/Java 21 tersedia. Tidak menghapus file pengguna atau mengulang download besar untuk mengejar hasil Android. Verifikasi native perlu diulang setelah ruang/cache tersedia; belum ada device test maupun Android → Product API → AI end-to-end.

Artefak test: [AI JUnit](../output/project-evidence/waspadai/20261021T103107Z/ai-tests.xml), [produk JUnit](../output/project-evidence/waspadai/20261021T103107Z/product-tests.xml), [Android log](../output/project-evidence/waspadai/20261021T103107Z/android-online.log). Masing-masing memiliki `*-execution.json` berisi command/cwd/exit/durasi. Lima record runner awal telah direlabel `finished_utc`: timestamp semula diambil setelah subprocess selesai, sehingga tidak diklaim sebagai waktu mulai yang tepat.

### Benchmark pengembangan: denominator dan adjudikasi

[offline.json](../output/project-evidence/waspadai/20261021T103107Z/offline.json) adalah run baru pada dataset pengembangan 100 kasus. [component-analysis.json](../output/project-evidence/waspadai/20261021T103107Z/component-analysis.json) menghitung ulang pembilang dan penyebut dari per-case output.

| Komponen | Hasil | Interpretasi yang diperbolehkan |
| --- | --- | --- |
| Recall sinyal kritis | **53/54 = 98,15%**, pada **47 kasus berlabel**; miss `COMM-005 / PAYMENT_REQUEST` | Recall target pada fixture pengembangan; evaluator tidak menyertakan 53 kasus lainnya ke skor ini |
| Deteksi tambahan | 51 instance, terdiri dari 43 context cues di luar target kritis dan delapan extra request signals | Tidak sah menganggap semua 51 sebagai false positive dari target yang sama |
| Precision diagnostik target kritis | 53/(53+8) = **86,89%** | Hanya diagnostik 47 kasus berlabel parsial; tidak layak dipublikasikan sebagai precision lapangan |
| Coverage | 46 fixture cases; 42 expected covered claims, 42 actual, 42 benar; precision/recall 100% | Evidence gold disuplai fixture; tidak mengukur kualitas pencarian bukti live |
| Replay | 80 kasus teks dievaluasi, 20 fixture gambar dilewati; **80/80 schema valid**, 80/80 narrative URL contract valid, nol execution error | Cakupan schema 80/100 dataset; bukan accuracy faktual |
| Kesesuaian verdict replay | 49/80 cocok dengan label | Bukan accuracy independen: `ReplayGroq` memasukkan expected claims/verdict/evidence. Tidak dipakai untuk klaim kualitas live |

Review seluruh 51 deteksi tambahan tersimpan dengan alasan per baris pada [extra-signal-adjudication.md](../output/project-evidence/waspadai/20261021T103107Z/extra-signal-adjudication.md): **37 context cues didukung teks, 10 salah, empat tidak dapat dinilai**. Sepuluh salah terdiri dari delapan kekeliruan request versus tindakan yang telah terjadi dan dua `GOVERNMENT_CONTEXT` berlebihan (`SCAM-007`, `SCAM-012`: petugas bank bukan pemerintah). Empat ambigu adalah impersonation pada `SCAM-013`, `IMG-002`, `IMG-007`, serta threat pada `SCAM-033`. Review ini dilakukan satu AI agent setelah membaca kode/fixture; bukan blind review atau gold labels pakar. Tidak ada label, aturan atau scorer produk yang diubah.

### Dataset challenge baru dibekukan sebelum pengukuran

[dataset-freeze.json](../output/project-evidence/waspadai/20261021T103107Z/dataset-freeze.json) merekam SHA-256 dataset sebelum run. Challenge berisi **18 kasus sintetis baru: 12 teks dan enam fixture OCR/vision**, termasuk dua foto non-checkable. Tidak ada duplikat persis teks nonkosong yang dinormalisasi terhadap 100 kasus pengembangan. Label dibuat satu AI agent yang sudah membaca kode: disebut challenge beku, bukan holdout lapangan independen/blind. Tidak melakukan tuning sesudah pembekuan. Gambar disuplai sebagai hasil OCR/vision fixture; tidak menguji ekstraksi piksel.

Ekstraksi dinilai atas seluruh 18 kasus, termasuk enam negative cases dengan target kosong, dibatasi pada 14 kode target kritis. Hasil: **TP 10, FP 3, FN 3; precision 76,92%, recall 76,92%; 12/18 exact-match cases**. Ada 13 expected signal instances. Perbedaan teks dan cakupan label membuat angka ini tidak langsung sebanding dengan recall pengembangan 98,15%.

| Kasus | Kegagalan yang terlihat |
| --- | --- |
| H02 | Extra `SECRET_REQUEST` pada laporan OTP yang sudah diberikan |
| H03 | Tidak mendeteksi `CREDENTIAL_ENTERED` untuk “tadi memasukkan password” |
| H04 | Tidak mendeteksi `APK_INSTALLED` untuk “telah memasang berkas APK” |
| H05 | Extra `REMOTE_ACCESS_REQUEST` ketika akses sudah diberikan |
| H06 | Tidak mendeteksi `PAYMENT_SENT` untuk “sudah mentransfer” |
| H08 | Extra `EXECUTABLE_REQUEST` pada “membuka aplikasi rekening” |

Kelemahan nyata: variasi parafrasa tindakan lampau dan pemisahan observed action dari request. Tidak menyesuaikan aturan terhadap challenge untuk memperindah hasil.

### Live: enam respons valid, verifier gagal enam kali

Live memakai evaluator yang sama dengan `--mode live --cases <frozen-file> --case-limit 2` untuk smoke, kemudian limit 4 untuk challenge, `--delay-seconds 3`, serta `--output`/`--report` terpisah. Smoke memakai FACT-001/002 dari pengembangan; challenge memakai H01/H02/H10/H12 yang baru. Run smoke dimulai `2026-10-21T10:39:25.520052+00:00`, challenge `2026-10-21T10:41:18.509159+00:00`. Hanya enam kasus teks, tanpa panggilan live tambahan.

Konfigurasi: planner `openai/gpt-oss-20b`; final/vision `qwen/qwen3.6-27b`; escalation `openai/gpt-oss-120b` tidak dipakai (review dimatikan). Timeout Groq 35 detik, Tavily 10 detik, maksimum satu search query dan dua search results per query; koneksi remote Qdrant/embedding dimatikan. Record execution menyimpan konfigurasi aktual tanpa kunci.

**Temuan operasional:** final verifier mengembalikan **HTTP 404 pada 6/6 kasus**. Ada 17 HTTP attempts: enam planner 200, lima Tavily 200, enam verifier 404; nol retry teramati. Retry dihitung sebagai pengulangan host/path/model dalam satu kasus; SDK memiliki `max_retries=2`, tetapi 404 tidak dicoba ulang pada trace ini. Pipeline menangkap kegagalan dan mengembalikan fallback deterministik pada **6/6 kasus**. Evaluator bawaan melaporkan `provider_error_count=0` serta `PASS` karena exception tidak keluar dari pipeline. Status audit yang benar **DEGRADED**, bukan layanan live sehat. Model/config tidak diganti untuk menutupi kegagalan.

| Kasus | Verdict / risiko / human review | Waktu | Rubric dan alasan |
| --- | --- | --- | --- |
| FACT-001 | UNVERIFIED / UNKNOWN / ya | 4.359 ms | Abstention pass; factual resolution/citation support fail. Wikipedia Indonesia tidak membuktikan klaim historis spesifik |
| FACT-002 | UNVERIFIED / UNKNOWN / ya | 4.219 ms | Abstention pass; factual resolution/citation support fail. Klip Facebook misi masa depan tidak menjawab klaim moon landing |
| H01: permintaan OTP | MISLEADING / CRITICAL / tidak | 3.795 ms | Tindakan aman pass; dukungan bukti partial. Larangan membagikan secret tepat, tetapi peringatan Instagram generik ber-stance UNKNOWN tidak memverifikasi identitas pengirim |
| H02: OTP sudah diberikan | MISLEADING / CRITICAL / tidak | 3.642 ms | Dukungan bukti dan kesesuaian tindakan partial. Rujukan OJK/Mandiri mendukung saran umum, bukan identitas penelepon; saran hubungi penyedia/cek aktivitas sesuai, alasan “meminta secret” keliru terhadap tindakan yang sudah terjadi |
| H10: edukasi jangan bagikan OTP/PIN | UNVERIFIED / UNKNOWN / ya | 1.270 ms | Abstention fail: input edukasi aman diperlakukan sebagai verifikasi belum terselesaikan. Tidak memberi saran berbahaya, tetapi kurang berguna |
| H12: perpustakaan Mars fiktif 2049 | UNVERIFIED / UNKNOWN / ya | 3.322 ms | Abstention pass, tidak mengarang bukti; nol sumber |

Rubric lengkap beserta alasan tiap kasus tersimpan pada [live-analysis.json](../output/project-evidence/waspadai/20261021T103107Z/live-analysis.json). `pass` berarti sesuai kriteria yang disebut, `partial` berarti hanya saran umum/bagian respons didukung, `fail` berarti kebutuhan kasus tidak terpenuhi, `N/A` berarti dimensi tidak berlaku. Penilaian dilakukan satu AI agent terhadap input, respons dan excerpt sumber; belum blind expert review atau audit penuh halaman sumber. Label `MISLEADING` pada dua kasus berisiko adalah keputusan pola keselamatan, bukan verifikasi faktual identitas/kejadian dengan bukti independen.

Pada dua input berisiko, **0/2 false reassurance** menurut rubric sempit: respons tidak menyetujui penyerahan secret atau meremehkan paparan. Angka kecil ini bukan estimasi keamanan populasi; penjelasan H02 tetap bermasalah. Empat abstention mencakup tiga yang tepat dan satu berlebihan pada edukasi aman; bukan ukuran calibrated uncertainty.

Latency enam kasus: **p50 3.642 ms, p95 4.359 ms**, metode nearest-rank `ceil(p*n)`, waktu selesai satu kasus evaluator, tanpa jeda antarkasus tiga detik. Sampel enam tidak mewakili percentile produksi; bukan TTFT. Usage tercatat hanya dari enam planner sukses: **10.119 prompt + 2.372 completion = 12.491 tokens**. Biaya **unmeasured**: tarif terverifikasi dan kredit Tavily tidak direkam, verifier gagal tanpa usage. Jangan mengubah token menjadi biaya rekaan.

Raw output tetap dipertahankan: [smoke](../output/project-evidence/waspadai/20261021T103107Z/live-smoke.json), [challenge](../output/project-evidence/waspadai/20261021T103107Z/live-challenge.json), [smoke capture](../output/project-evidence/waspadai/20261021T103107Z/live-smoke-capture.json), [challenge capture](../output/project-evidence/waspadai/20261021T103107Z/live-challenge-capture.json). Capture berisi status HTTP, usage dan respons pengguna; tidak menyimpan key, querystring request, atau teks penalaran internal model.

### Adapter produk: implemented, belum live end-to-end

README produk baris 13/24/27 masih menyebut remote adapter/community transport `TARGET`. Pernyataan itu tertinggal terhadap implementasi: `backend/app/verification_service.py` memiliki `remote_text_payload()` (baris 68), `verify_remote_text()` (1073), `verify_remote_image()` (1132), serta proyeksi community evidence. `community_evidence_service.py` membangun evidence eligible; `auth.py` memvalidasi user token pada batas Product API, sedangkan adapter memakai server-side `X-Waspadai-API-Key` untuk service AI.

Status yang layak: **implemented + locally verified dengan 32 tes backend terpilih**. Tes membuktikan kontrak/adaptasi/error handling dengan mocks; bukan DB PostgreSQL/Supabase, device Android, atau panggilan Product → AI live. Enam live cases di atas memanggil pipeline AI langsung lewat evaluator, tidak melewati Product API. Dokumen README sumber tidak diubah pada task audit ini. Angka historis “11 adapter tests” tidak lagi dipakai untuk menggambarkan run terpilih terbaru 32 tes; lingkupnya berbeda.

### Keputusan publikasi dan tindak lanjut

- Dapat dipakai dengan kualifikasi: implementasi pipeline/adapter, inventaris rulebook, 92 tes API dan 32 tes backend pada snapshot ini, recall development 53/54, schema replay 80/80 dengan 20 skipped, serta challenge kecil dengan batas label yang jelas.
- Tahan klaim: accuracy fact-checking live, “98,15% accurate”, vision/OCR live, mobile end-to-end, layanan live sehat, biaya per verifikasi, reliability produksi, dan keseluruhan Android sebagai kontribusi pribadi. Atribusi Task 2 tetap berlaku.
- Sebelum klaim live: tangani model verifier 404 dalam pekerjaan produk tersendiri; evaluator perlu mengekspos provider failure/fallback agar `PASS` tidak menyesatkan. Ulangi run berlabel setelah konfigurasi sehat; simpan hasil terpisah dari run ini.
- Sebelum klaim native: sediakan ruang dependency cache, ulangi unit test Android; device/integration tests tetap pekerjaan berbeda. Kelemahan signal paraphrase/request-action membutuhkan regresi berlabel terpisah, bukan tuning pada challenge beku ini.

Verifikasi artefak memakai `python -X utf8 output/project-evidence/verify_task3.py`. [source-comparison.json](../output/project-evidence/waspadai/20261021T103107Z/source-comparison.json) membandingkan sembilan checkout roles/delapan repo sumber dengan baseline. Log/data mentah berada di `output/` yang ignored dan hanya tersedia lokal; tautan bukti tidak otomatis tersedia di GitHub atau situs publik. Dokumen ini menyimpan ringkasan yang dapat ditinjau. Tidak commit, push, deploy, atau menjalankan Task 4.

## Task 4 — UM RAG: instrumen, retrieval dan jawaban

Run **`20261021T110830Z`**, 21 Oktober 2026. Task 4 menghasilkan scorer yang diperbaiki, runner retrieval, dataset beku dan evaluasi terpisah. **Status layanan terukur: DEGRADED**. Task 5 belum dimulai; website belum diubah.

### Isolasi dan perubahan evaluasi

Sumber `D:/code/nlp/ta-sisdas`, baseline `fb60f9f8ee810644942806fdba39ad60e731829d`, branch asli `main` bersih. Implementasi berada di worktree **`D:/rag-eval4`**, branch **`audit/um-rag-evaluation-20261021t110830z`**, checkpoint **`883aa59ec9788c6182a90297f203a0f495981f0d`**. Checkout awal di bawah output gagal dengan `Filename too long`; path dipendekkan tanpa mengganti branch checkout asli. Tidak merge/push/deploy. [implementation.patch](../output/project-evidence/um-rag/20261021T110830Z/implementation.patch) menyimpan patch empat file; perubahan belum diterapkan pada main.

File yang berubah hanya `scripts/evaluate_rag.py`, `scripts/evaluate_retrieval.py`, `apps/api/tests/test_rag_evaluation.py`, dan `data/evaluation/portfolio_eval_set.json`. Tidak mengubah router, aturan domain, bobot ranking, fact parser atau generator jawaban untuk mengejar skor challenge.

- Source hit@1 memakai sumber terstruktur meskipun `contexts=[]`; sumber terstruktur kosong kembali ke metadata contexts.
- Label fakta/sumber/topik yang kosong menghasilkan `None`/`N/A`; denominator tiap dimensi dilaporkan. Kasus gagal yang berlabel tetap masuk denominator. Key-fact coverage tetap **proxy substring**, bukan evaluasi semantik.
- `--output Path` menulis JSON UTF-8 terpisah dari log. Exception per kasus disimpan sebagai `execution_error` dan jenis exception; loop tetap menyimpan kasus berikutnya. Output tidak boleh menimpa eval set. Limit positif, retry/delay nonnegatif divalidasi.
- Runner retrieval menerima `--eval-set`, `--mode dense|current`, `--k 3..5`, `--output`. Dense memakai `retrieve()`; current memakai `retrieve_with_fallback()`, domain rerank, neighbor expansion dan `formal_rerank()` produk. Candidate budget 10 per domain, current memakai potongan top-five sebagaimana pipeline; cutoff perbandingan tiga chunk, tanpa deduplikasi file sebelum skor.

### Baseline, regresi dan corpus

| Pemeriksaan | Hasil baru | Cakupan |
| --- | --- | --- |
| `python -m pytest tests -q` sebelum perubahan | **48 passed**, 4,05 detik | Seluruh suite API lokal |
| Regresi scorer sebelum perbaikan | **7 failed, 1 passed** | Source structured/blank, label kosong, denominator, output JSON/error; kegagalan diamati pada tool transcript |
| Setelah perbaikan scorer | **56 passed** | Log `scorer-green.log` |
| Regresi runner/output guard | **4 failed, 8 passed**, lalu diperbaiki | Output menimpa dataset ditolak; rank dua hit@1 false/hit@3 true; kedua mode tidak mengubah dokumen input |
| Suite final | **60 passed**, 2,63 detik | 12 tes evaluasi baru + 48 baseline, nol failed/skipped; guard mencatat nol koneksi eksternal |
| `python scripts/validate_metadata.py` | Exit 0, **39 PDF metadata entries** | Kecocokan file dan metadata, bukan kualitas OCR |
| `python scripts/inspect_chroma.py --details` | Exit 0, **1.165 chunks**, lima collections | Snapshot indeks lokal, bukan indeks produksi |

Awal regresi scorer tercatat di transcript; path log dipakai ulang saat red phase runner. [red-green-observation.json](../output/project-evidence/um-rag/20261021T110830Z/red-green-observation.json) membedakan observasi itu dari raw log yang masih tersedia. Tidak mengarang ulang log awal.

Chunks per domain: academic **835**, facilities **96**, finance **64**, general profile **53**, thesis/graduation **117**. Structured facts berisi **229 records**: 140 program-study, 57 faculty-unit, 22 general-facility, 10 institution-fact. Jumlah record bukan jumlah entitas unik/tervalidasi; ada masalah ekstraksi yang ditemukan pada hasil berikut.

Indeks 41 file disalin byte-identical ke snapshot beku, lalu ke copy runtime terpisah. Chroma hanya mengakses copy runtime; tidak indexing/reset. [setup.json](../output/project-evidence/um-rag/20261021T110830Z/setup.json) menyimpan hash indeks, [corpus-source-hashes.json](../output/project-evidence/um-rag/20261021T110830Z/corpus-source-hashes.json) menyimpan hash 39 PDF dan structured facts. JSON facts sempat berbeda CRLF/LF akibat checkout tetapi objek identik; byte asli dipulihkan sebelum run end-to-end. Frozen dataset juga menyimpan hash working bytes dan Git blob LF sesuai `.gitattributes`, serta hash JSON kanonik.

### Dataset dibekukan sebelum panggilan provider

Set baru **16 pertanyaan**, seluruh lima domain; **13 answerable**, satu ambiguous, satu unanswerable di corpus, satu out-of-scope. Ada daftar, jumlah, dua sumber, tanggal, syarat dan formulir. Tiap entry mencantumkan ID, domain, intent, expected sources, key facts, expected answerability, jawaban rujukan, excerpt/page corpus dan asal label. [dataset-freeze.json](../output/project-evidence/um-rag/20261021T110830Z/dataset-freeze.json) merekam hash sebelum pengukuran; tidak ada duplikat pertanyaan persis setelah normalisasi terhadap eval set pengembangan.

Label dibuat satu AI agent setelah membaca kode/corpus. Ini challenge sintetis beku tanpa tuning, **bukan holdout lapangan independen atau gold pakar**. Kebenaran label mengacu pada snapshot corpus; tidak memvalidasi ulang informasi institusi ke kondisi real-time. Filter domain-only dan keywords dari pertanyaan dibekukan untuk kedua mode retrieval. Domain diambil dari label gold, bukan routing model. Pertanyaan ambiguous/unanswerable/out-of-scope tidak memiliki expected sources/facts: ikut evaluasi jawaban, dikecualikan dari skor retrieval komponen. Empty topic labels pada seluruh set menghasilkan topik N/A, denominator nol.

### Retrieval komponen: dense lebih baik pada sampel ini

Voyage `voyage-multilingual-2` membuat **13 query embeddings**, seluruh HTTP 200. Vektor dibekukan sekali dan dipakai identik kedua mode; tidak ada router/analyzer LLM. Corpus, query, domain, metadata filter, keyword dan cutoff sama. Filter yang berubah dianggap error, bukan fallback diam-diam. Tidak mengubah corpus untuk evaluasi.

| Mode | Kasus berlabel / error | Source hit@1 | Source hit@3 |
| --- | --- | --- | --- |
| Dense | 13 / 0 | **12/13 = 92,31%** | **13/13 = 100%** |
| Current | 13 / 0 | **11/13 = 84,62%** | **11/13 = 84,62%** |

Definisi hit: minimal satu expected file muncul pada rank chunk satu/tiga. **Bukan passage recall**, tidak memastikan semua sumber multi-source ditemukan atau fakta relevan benar-benar ada pada chunk. Tiga kasus tanpa label sumber dilaporkan excluded, bukan gagal maupun berhasil. [dense](../output/project-evidence/um-rag/20261021T110830Z/retrieval-dense.json), [current](../output/project-evidence/um-rag/20261021T110830Z/retrieval-current.json), [diagnostics](../output/project-evidence/um-rag/20261021T110830Z/retrieval-diagnostics.json) memuat ranking/excerpt.

- **P01, modifikasi KRS2026/2027:** kandidat awal current memuat kalender yang benar, heuristic/formal ranking menaikkan pedoman2018/2020 tentang aturan umum KRS. Top-three kehilangan sumber bertahun yang diminta. Bukan kegagalan embedding saja.
- **P05, KTM peminjaman studio musik:** retrieval awal menemukan music SOP, heuristic memberi bonus49 pada sociology SOP. Formal score49,9865 mempertahankan dokumen salah; bobot heuristik jauh lebih besar dari koreksi semantic/lexical kecil. Tidak mengubah bobot pada challenge ini.
- **P08, kartu skripsi:** current memperbaiki rank satu dibanding dense (dense file relevan rank dua); manfaat lokal ini tidak menutupi dua regresi lain.
- **P11, multi-source:** any-source hit@3 true pada kedua mode, tetapi dense memuat **dua dari dua** expected files, current **satu dari dua**. Penggabungan lintas domain dengan raw final score membuat tiga scholarship chunks mengalahkan music; any-hit saja terlalu permisif.

Latency ranking, tanpa embedding provider: dense p50 **7ms**, p95 **1.301ms**; current p50 **19ms**, p95 **106ms**. Metode nearest-rank, n13; dense dijalankan dulu termasuk pembukaan awal Chroma, current memakai process/OS cache lebih hangat. **Tidak layak menyimpulkan current lebih cepat** dari run berurutan ini. Tidak mengulang eksperimen untuk mencari angka yang lebih bagus.

### End-to-end terpisah: provider dan fallback

Command evaluator memakai `--eval-set <frozen-file> --limit 16 --retries 0 --delay-seconds 1 --output <run>/end-to-end.json`. Memanggil `rag_answer()` asli dengan instrumentation HTTP requests/usage, bukan HTTP API/streaming/browser. [hasil](../output/project-evidence/um-rag/20261021T110830Z/end-to-end.json), [capture](../output/project-evidence/um-rag/20261021T110830Z/end-to-end-capture.json), [analisis](../output/project-evidence/um-rag/20261021T110830Z/analysis.json).

Model konfigurasi dipertahankan: router/analyzer primary `groq/compound-mini`, fallback router `openai/gpt-oss-20b`, fallback analyzer `qwen/qwen3.8-27b`; answer `groq/compound` lalu `groq/compound-mini`; embedding Voyage multilingual2. Timeout audit Groq25s/Voyage20s, maksimal satu retry internal masing-masing; konfigurasi sumber60s dan retry2/5 dikurangi untuk run terbatas. Interval embedding21s dipertahankan. Batas100 HTTP attempts per phase; aktual69. Hasil ini **bukan** pengukuran reliability konfigurasi produksi persis. Kunci hanya di environment proses, tidak disalin ke worktree/laporan.

| Observasi HTTP end-to-end | Jumlah |
| --- | --- |
| `groq/compound-mini` 404 | 27 |
| `groq/compound` 404 | 12 |
| `qwen/qwen3.8-27b` 200 / 429 | 13 / 2 |
| `openai/gpt-oss-20b` 200 | 2 |
| Voyage 200 / 429 | 12 / 1 |

Total **69 attempts**, **42 error attempts** (39×404, 3×429), 27 HTTP200. Tiga retry sesudah429 teramati dan berhasil200. Pengulangan model sama antar routing/analyzer/answer tidak dihitung sebagai retry; perubahan ke fallback model juga berbeda dari retry. Trace belum memiliki stage ID untuk setiap HTTP event, sehingga tidak mengarang jumlah retry berdasarkan semua pengulangan model.

**13/16 kasus** mengalami provider error; **12** memakai jawaban extractive fallback, **tiga** memakai structured facts tanpa panggilan provider, **satu** no-domain. Ada12 kasus domain_errors; 15/16 tetap berstatus `answered`. Status answered bukan bukti factual success. Pembuka fallback menyebut “batas penggunaan” walaupun banyak kegagalan sebenarnya404; ini masalah diagnosis yang belum diperbaiki pada task evaluasi.

Cache process dimulai kosong, structured cache aktif max256; akhir15 entries, **0 hits/15 misses**. Query-embedding cache digunakan selama satu proses; tidak ada answer cache warm-up terpisah. Tidak mengklaim seluruh indeks/OS cache cold.

### Rubric jawaban dan kegagalan substantif

Review satu AI agent terhadap teks corpus/excerpt yang dibekukan, respons dan source cards. Citation pass membutuhkan bukti relevan untuk jawaban yang diminta, bukan sekadar nama file benar. Completeness pass berarti kebutuhan utama terjawab; alternatif daftar yang sah diterima. Abstention pass berlaku untuk tiga kasus negatif/ambigu. Bukan blind human review, skor semantik otomatis, atau audit independen seluruh halaman PDF.

| ID | Dukungan kutipan | Kelengkapan fakta | Abstention/klarifikasi | Temuan |
| --- | --- | --- | --- | --- |
| P01 | fail | fail | N/A | Routing finance, kutipan registrasi UKT2025/2026 menggantikan modifikasi KRS2026/2027 |
| P02 | fail | fail | N/A | Salah domain/tahun; tidak menjawab pekan kepenasihatan |
| P03 | pass | fail | N/A | Sumber BI benar, truncation extractive menghilangkan IPK minimum dan semester/40SKS |
| P04 | pass | pass | N/A | URL login siakad.um.ac.id didukung panduan |
| P05 | pass | pass | N/A | KTM dan blangko eksplisit pada music SOP; hasil E2E berbeda dari komponen fixed-analysis |
| P06 | pass | pass | N/A | Minimal tiga ruang sah disebut; substring proxy menghukum alternatif selain contoh Audio Visual |
| P07 | pass | fail | N/A | SOP benar, potongan berhenti sebelum tugas perubahan pembimbing yang diminta |
| P08 | pass | pass | N/A | Empat identitas kartu lengkap |
| P09 | pass | pass | N/A |18 Oktober1954 didukung profil snapshot; jawaban masih panjang dengan excerpt tak perlu |
| P10 | fail | fail | N/A | Jawaban rektor hanya “Prof.”; record facts sudah terpotong, meskipun sumber PDF memuat Hariyono lengkap |
| P11 | fail | fail | N/A | Hanya scholarship excerpt; perbandingan KTM studio tidak dijawab |
| P12 | pass | fail | N/A | Meminta daftar, dijawab jumlah22 saja; `DETAIL_LIST_THRESHOLD=20` menyembunyikan daftar. Record fasilitas juga memuat fragmen parser, jumlah bukan entitas terverifikasi |
| P13 | fail | fail | N/A | Frasa “portal akreditasi” memicu fact akreditasi, memilih fakta pertama; jawaban Unggul menggantikan144 prodi |
| P14 | fail | N/A | fail | “Kapan pendaftarannya?” langsung mendapat excerpt jadwal tanpa klarifikasi |
| P15 | fail | N/A | fail | Tarif parkir2049 tidak tersedia; jawaban lokasi kampus tanpa pengakuan informasi hilang |
| P16 | N/A | N/A | pass | Harga saham di luar scope mendapat no_domain, tidak mengarang harga |

Ringkasan rubric: citation **8 pass/7 fail/1 N/A**; completeness **5 pass/8 fail/3 N/A**; abstention/clarification **1 pass/2 fail/13 N/A**. Ini deskripsi16 kasus, **bukan accuracy populasi**. Tidak menyatakan partial source presence sebagai jawaban multi-source lengkap.

Proxy otomatis: source hit@1/@3 **11/13**, key-fact substring coverage rerata **56,41%** pada13 label; domain exact-match11/16 dan intent8/16. Dua tanggal salah P01/P02 masih mendapat coverage75% karena digit/tahun substring muncul pada kutipan berbeda. P06 valid dengan alternatif ruang tetapi hanya66,67% coverage. Intent label sintetis mencampur `multi_source`/`clarification` dengan ontology produk dan domain ambiguous tidak punya satu jawaban gold; domain/intent proxy dicatat untuk diagnosis, **tidak dipublikasikan sebagai routing accuracy**. Topic metric N/A, nol label.

Latency E2E **p50 20.298ms**, **p95 24.666ms**, n16 nearest-rank; waktu satu kasus selesai termasuk provider retries, throttling dan fallback, tanpa jeda1s antarkasus. Tiga structured-fact responses sekitar1ms dan satu no-domain1.468ms membuat campuran distribusi ini tidak mewakili query RAG normal saja. **Bukan TTFT**; belum trace streaming. Token sukses Groq22.384 total (20.194 prompt+2.190 completion), Voyage416; biaya **unmeasured**, tarif/billing aktual tidak direkam. Retrieval phase usage dipisahkan pada capturenya.

### Batas publikasi dan pekerjaan berikut

Layak dipakai dengan metode/snapshot: implementasi pipeline, 60 tes lokal, corpus39 PDF/1.165 chunks, scorer label-aware, perbandingan komponen fixed-domain. Tidak ada dasar mengklaim current meningkatkan kualitas, accuracy jawaban84,62%, atau sistem live sehat. Temuan provider404, structured-fact truncation, threshold list, entity selection dan abstention menjadi backlog produk tersendiri; **tidak diperbaiki dengan tuning challenge** pada audit ini.

Perubahan evaluasi tersimpan sebagai checkpoint branch terisolasi; original main dan source repos lain tetap utuh. Verifikasi akhir: `python -X utf8 output/project-evidence/verify_task4.py`, ditambah suite60 tes dan `git diff --check`. Artefak mentah `output/` ignored/lokal, tidak otomatis menjadi tautan publik. Task 5 Numora belum dimulai.


## Task 5 ? Numora: verifikasi runtime 22 Oktober 2026

Scope: inventaris dan generator lokal, bukan penerimaan akademik atau verifikasi deployment. Run `20261022-numora`, Python 3.11.3. Central dipin pada `8d27bed25de9f0a82f924569acfe0f3b4c89e60e`; service pada `b9d25a7d6251673c9f7edbb5736ffaaf12bf1be9`. Kedua checkout awal bersih. Tes berjalan pada salinan tracked files byte-identical di `D:/numora-eval5`, tanpa `.env`; branch/worktree sumber tidak diubah. Snapshot manifest memuat 1.629 file. Tidak menjalankan completion/import/register, mengakses DB utama, atau mengubah website.

### Inventaris yang dihitung ulang

`load_workspace_bank`, `ConfigStore`, `load_stock`, dan katalog aktual `numora_service.bridge.catalog` menghasilkan angka berikut. Seluruh generator terklasifikasi diperiksa `validate_config`; ini pemeriksaan config, bukan audit matematika seluruh keluarga.

| Cakupan | Original | Generator | Original konseptual | Varian konseptual VERIFIED | HOLD | Unavailable |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Drill | 1.150 | 1.051 | 83 | 239 | 16 | 0 |
| Tryout | 30 | 27 | 3 | 9 | 0 | 0 |
| Workspace | 1.180 | 1.078 | 86 | 248 | 16 | 0 |

Angka cocok dengan `docs/PROGRESS.md` dan `docs/audits/2026-10-21-all-indicators-progress-after-indicator20/progress.json`, termasuk setiap indikator dan level pada JSON. Drill terlayani lokal 1.134/1.150 (98,6%), bukan persentase akurasi. Angka lama 746/820 dan 215 varian stok tidak dipakai sebagai snapshot terkini. `docs/ARCHITECTURE.md` service masih menyebut 820/673 dan 206 stok; angka historis tersebut tidak mengalahkan loader/progres terbaru. Tidak memperbarui dokumen sumber dalam task portofolio ini.

Asset stok berisi 248 VERIFIED dan nol DRAFT. Arsip `variant_gen/drafts/2026-10-20-level45-academic` memuat 28 original dan 28 config: semua ID sudah ada dalam runtime, sehingga tidak ditambahkan ke total. Terdapat 1.085 file versi config aktif-tersedia di folder runtime, berbeda dari 1.078 keluarga generator. File versi bukan jumlah keluarga/varian. `variant_gen/store` hanya `.gitkeep`: hasil numerik dibuat dalam memori/respons, tidak ada inventaris varian tersimpan yang dapat diklaim. DRAFT canonical aplikasi utama tidak dihitung karena DB tidak dibaca. Label VERIFIED lokal tidak membuktikan persetujuan Curriculum, kualitas psikometrik, atau kesetaraan kesulitan.

### Pemeriksaan revisi dan contoh independen

Perintah `python -B variant_gen/tests/audit_drill_20_23_revisions.py --output <run>/revised-generator-audit.json` diperiksa terlebih dahulu: menulis dua laporan pada direktori run, tidak menulis bank/config. Hasil aktual 16 PASS, nol FAIL; setiap keluarga menghasilkan 20 kandidat berbeda dengan comparison list, total 320, ditambah 100 pemeriksaan seed per keluarga (1.600). Audit memakai oracle matematika repo sendiri; bukan review manusia independen atau evaluasi seluruh 1.078 generator.

Contoh tambahan memakai stdlib `Fraction`, membaca angka dari teks hasil render, tanpa memanggil formula config: `pg-20-3-3`, original v2 hash `0411cebecd0ec59e`, config v1 hash `d73582e40d11de11`. Original lima nilai 60,70,80,90,100 dan rerata enam siswa 85 menghasilkan `6?85?400=110`, opsi C. Metadata menyimpan sumber dan koreksi opsi duplikat; contoh ini adalah versi lokal terkoreksi, bukan salinan DOCX lama tanpa perubahan.

Seed 37 menghasilkan 52,62,72,82,92 dan rerata 77: `6?77?360=102`, opsi C. Pembahasan render menyatakan jumlah 360, total 462, selisih 102; seluruh angka pembahasan diperiksa. Seed 38 dan 39 juga diperiksa. Pemanggilan berulang dengan seed/config sama memberi `Result` sama; tiga kandidat berbeda dalam sampel ini. Itu tidak menjamin setiap seed berbeda menghasilkan varian unik. Timestamp `make_record` tidak menjadi bagian klaim reproduksibilitas konten. Kesetaraan kesulitan dan learning gains tidak diukur.

### Status integrasi dan atribusi

Generator bukan LLM generation. Service HTTP dan durable GENERATE_VARIANTS sudah memiliki implementasi, termasuk source/config pins, validasi tugas, subprocess terbatas, lease/fencing dan artefak; `numora_service/task.py` menolak request selain `GENERATE_VARIANTS`. Keberadaan modul tersebut tidak membuktikan compute kalibrasi IRT. Tidak ditemukan consumer ilmiah IRT, calibration engine atau proses self-adjustment aktif dalam service. `IRT_V3_RUNBOOK.md` central mendeskripsikan fondasi orkestrasi dan flag default nonaktif; schema/monitoring dan consumer TEST ONLY tidak dianggap engine ilmiah. Spesifikasi self-adjustment tetap rancangan; metadata batch baru menyatakan `self_adjustment_enabled=false`.

`docs/content/GENERATOR_SERVICE_V1.md` dan `docs/development/GENERATOR_HANDOFF.md` central mendukung alur generator ? preview ? simpan VARIANT DRAFT; package import/publication mempunyai pemeriksaan terpisah. Bukti connected pada dokumen tersebut adalah **historis**, tidak diulang dalam run ini. Inventaris lokal tidak otomatis terdaftar, terimpor, READY atau PUBLISHED pada DB utama. Pengecualian historis 120 original Drill Bab 3 bukan bukti seluruh workspace 1.180 sudah diterbitkan.

Integrasi central **belum diuji ulang**: host Node v22.15.0, pnpm tidak tersedia di PATH; repo mensyaratkan Node >=24<25 dan pnpm@12.6.0. Tidak menyediakan dedicated test DB/Redis dalam task ini. Guard `scripts/check-test-env.mjs` mensyaratkan localhost, DB `numora_test*`, prefix `numora:test:`, TEST_* URLs dan pemisahan dari DATABASE_URL/REDIS_URL. Tidak memakai cloud DB atau menurunkan requirement untuk meloloskan tes. Status flag deployment/aktivasi produksi tidak diperiksa.

Riwayat terbaru service: `b9d25a7` oleh ShafwanAdhi memperbarui generator, bank dan audit (675 file); commit besar bukan bukti seluruh konten ditulis sendiri. Engine awal `9811084` oleh Achmad D Fajar; HTTP/compute service `3a0f21e` dan handoff `99e8e7f` oleh farelfhr. Riwayat Shafwan pada engine/workbench mencakup `fa46259`, `0553c29`, `473c563`; bedakan integrasi/pengembangan pribadi dari fondasi rekan dan sumber soal tim. Central HEAD adalah merge tim. Seluruh angka di atas tetap inventaris repo tim; bukan jumlah soal karangan pribadi. Galeri student/admin adalah UI produk tim dengan fixture demo sintetis/interception sebagaimana Task 2, bukan screenshot workbench pribadi atau bukti IRT aktif.

### Artefak dan batas verifikasi

Artefak lokal ignored: [manifest snapshot](../output/project-evidence/numora/20261022-numora/snapshot.json), [inventaris runtime](../output/project-evidence/numora/20261022-numora/runtime-inventory.json), [audit revisi](../output/project-evidence/numora/20261022-numora/revised-generator-audit.json), [contoh matematika](../output/project-evidence/numora/20261022-numora/independent-example.json), [log suite](../output/project-evidence/numora/20261022-numora/unittest.log). Ini tautan kerja lokal, belum artefak publik website. Recount/check runnable: `python -B -X utf8 output/project-evidence/numora/20261022-numora/recount.py`. Tidak menambah framework atau kode produk.

Suite terbaru: `python -B -m unittest discover -s variant_gen/tests -v` dari root salinan service menghasilkan **294 tests, OK, 216.772s**, tanpa skip. Suite ini mencakup workbench lokal, bukan connected central/service DB acceptance. Tidak menggunakan network guard terinstrumentasi; tidak mengklaim jumlah koneksi eksternal nol dari log semata. Verifikasi akhir `python -X utf8 output/project-evidence/verify_task5.py` memeriksa hasil, manifest sumber, sembilan identitas/status repo, dan scope checklist. Task 6 belum dimulai.


## Task 6 - Bonjermgu: ketepatan aturan pembiayaan

Pemeriksaan 22 Oktober 2026, run `20261022-bonjermgu`, sumber `D:/internship/web-mtf` HEAD `0ae8dbda8cf42277d98f320460af385bfdadd374`, branch main bersih. Task ini memeriksa source dan bukti pengujian; tidak mengubah produk, copy website atau deployment. Eksekusi terisolasi pada salinan tracked files byte-identical `D:/bonjermgu-eval6`, menggunakan dependency vendor yang sudah terpasang dan tanpa menyalin `.env`. Aturan workflow dibaca dari `docs/workflow.md`; tidak ditemukan AGENTS.md dalam repo.

### Aturan domain dan keputusan yang dapat ditelusuri

`SimulationService` mengambil harga melalui `VehicleCascadeRepository`, konfigurasi melalui `SimulationConfigurationRepository`, lalu membentuk input immutable bagi `SimulationEngine`. Engine membagi DTN dan UCF ke kalkulator PHP server-side; Livewire memakai hasil domain, bukan formula pembiayaan di browser. Repository konfigurasi memuat tarif, biaya, DP, refund, asuransi dan default; cache ber-versi 12 jam membedakan produk/varian asuransi. Ini pemisahan sumber data dan aturan, bukan bukti semua kombinasi konfigurasi telah diuji.

Perhitungan mengeluarkan 12/24/36/48/60 bulan. Harga PHPM dan OTR tetap dibedakan: OTR referral DTN turun ke ratusan, sementara perhitungan tertentu tetap memakai PHPM asli. Deviasi UCF memakai PHPM sebagai penyebut. Unit tidak layak, tenor bertarif null, harga tidak tersedia, atau DP yang menghabiskan nilai unit menghasilkan zero reason; rate null tidak diubah menjadi 0%. Kegagalan mencari harga atau rate Casco melempar error. Repository menolak extension row hilang, tetapi beberapa lookup domain seperti loading/ACP/extension mempunyai fallback nol. Karena itu jangan menulis klaim umum "semua tarif yang hilang ditolak".

`Rounding` memakai floor/ceil dengan epsilon untuk artefak float. Angsuran naik ke ribuan; total premi DTN turun ke ratusan dan UCF naik ke ratusan; provisi UCF naik ke ratusan; total refund turun ke ribuan. Angka rupiah berpembulatan dicocokkan persis, sedangkan rasio non-integer memakai toleransi pada tes referensi. Tidak menyebut seluruh mesin sebagai aritmetika desimal eksak: implementasi menggunakan float PHP dengan pembulatan eksplisit.

Asuransi dihitung per tahun: coverage, sum insured, umur unit, loading atas Casco tahun berjalan, perluasan dan TJH pada Comprehensive, ACP serta garansi mesin sesuai konfigurasi. Ini memperbaiki pembebanan loading atas total kumulatif pada draft dan menjaga tahun pertanggungan. `InsurancePremiumRulesTest`, `AgreedRuleChangesTest` dan reference vectors memeriksa bagian aturan ini.

Dua keputusan paling jelas dari dokumentasi dan implementasi:

1. Refund komisi Referral dipisahkan dari pencairan debitur. Koreksi 15 Agustus 2026 pada test vectors menyatakan draft lama justru menaikkan pencairan saat Up Rate naik. Implementasi `RefundCalculator` dan kalkulator DTN/UCF menjaga refund sebagai output terpisah; DTN hanya komponen bunga/provisi, UCF juga asuransi/admin. Dasar diskonto refund bunga memakai flat rate sebelum Up Rate. `RefundScopeTest` memeriksa bahwa perubahan upping bunga menaikkan angsuran tanpa menambah pencairan pada fixture yang diuji.
2. Published flat rate dari kartu produk dipakai bila tersedia. Konversi effective rate tetap fallback, bukan dipaksakan menggantikan angka kartu. `PublishedFlatRateTest` menunjukkan konversi dan angka kartu dapat dekat tetapi tidak identik; selisih kecil dapat melompati batas pembulatan angsuran Rp1.000. Trace menandai sumber kartu agar tidak mengaku melakukan konversi yang tidak dijalankan.

Dokumen `credit-simulation-test-vectors.md` memuat 250 titik historis (240 sesuai draft, 10 koreksi), bukan jumlah tes suite terkini. Suite historis 50 tes/386 assertions tetap satu run lama. Hasil baru dicatat terpisah setelah eksekusi, tanpa menambahkan assertions sebagai hasil bisnis kedua.

### Contoh angka referensi dan inventaris sumber

Contoh S2 dari test vectors, bukan data debitur: UCF Mode A, ADDB 12 bulan, PHPM Rp110.000.026, OTR Rp110.000.000, non-wiraswasta, unit Japan 2017, tahun hitung 2026. DP10%=Rp11.000.000 dan LTV Rp99.000.000. Effective rate14,4699%, flat hasil konversi sekitar8,01003638%, Up Rate0,5%; angsuran setelah pembulatan Rp8.953.000.

Premi TLO Rp715.000 + ACP Rp715.000 + garansi mesin Rp1.500.000 menghasilkan total Rp2.930.000. DP Rp11.000.000 + premi Rp2.930.000 + admin Rp4.700.000 + fiducia Rp500.000 menghasilkan bayar pertama Rp19.130.000. Pencairan neto `110.000.000 - 19.130.000=90.870.000`; refund Rp438.000 terpisah, tidak ditambahkan. Pemeriksaan independen memakai Python Decimal precision40 untuk rumus anuitas dan pembulatan, kemudian dibandingkan dengan keluaran engine PHP. Ini contoh rujukan, bukan verifikasi independen seluruh produk atau persetujuan pembiayaan.

Parser CSV menghitung **26.791 baris harga tanpa header**, **4.678 identitas model** menurut `(usage,brand,type,model)`, **26.791 model-tahun unik**, nol duplikat model-tahun dan nol harga nol. Passenger18.199 baris; Commercial8.592. SHA256 `68a553fb54ea4baa6ba1c81d4da1fb7d3adf52fc3dae1f7320c751eb3d7c9803`. Model-tahun adalah entri master harga, bukan jumlah kendaraan fisik, pelanggan atau transaksi. Tabel ekstraksi historis menyebut 4.880 model (2.990 Passenger/1.890 Commercial), sedangkan CSV kini memberi 4.678 identitas unik. Dokumen juga mencatat deduplikasi dan hanya menyimpan harga positif, tetapi task ini tidak menghitung ulang workbook asal; selisih 202 tidak seluruhnya diatribusikan ke satu penyebab tanpa bukti. Angka publik memakai definisi CSV saat ini. Tidak mengklaim dataset training ML. `VehicleSeeder` menggunakan identitas hierarkis yang sama dan upsert model/tahun; bukti parser bukan bukti seeding seluruh CSV berhasil di produksi.

### Draf kontribusi untuk tahap penulisan konten

- "I separated financing rules from database configuration so the server can calculate Dana Tunai and used-car estimates through one tested domain engine."
- "I corrected the treatment of referral commissions, keeping refunds separate from borrower disbursement and checking how rate changes affect instalments."
- "I preserved published flat rates and explicit rounding rules, then checked the calculation against reference cases and repository-backed simulation flows."

Draf ini mengacu pada source dan atribusi Task2, bukan klaim menulis seluruh produk/perhitungan institusi. Riwayat terbaru domain mencakup `0ae8dbd`, `8df6eb3`, `908b6b7`, `40dacc6` oleh ShafwanAdhi; author commit tidak menggantikan atribusi aturan bisnis kepada stakeholder. Hasil tes akan digabungkan sebagai satu hasil engineering verification per run. Tidak menambahkan klaim underwriting ML, penghematan waktu, keputusan kredit otomatis atau dampak bisnis yang belum diukur.

Artefak lokal ignored: [snapshot](../output/project-evidence/bonjermgu/20261022-bonjermgu/snapshot.json), [contoh engine](../output/project-evidence/bonjermgu/20261022-bonjermgu/reference-example.json), [pemeriksaan independen](../output/project-evidence/bonjermgu/20261022-bonjermgu/independent-check.json), [inventaris CSV](../output/project-evidence/bonjermgu/20261022-bonjermgu/vehicle-inventory.json). Pemeriksaan ulang contoh/inventaris: `python -X utf8 output/project-evidence/bonjermgu/20261022-bonjermgu/check_example.py`. Artefak ini belum tautan publik website.


### Hasil run terbaru dan pemeriksaan akhir

- Unit: `php vendor/bin/pest tests/Unit/Simulation --colors=never --fail-on-warning --log-junit <run>/unit.xml` menghasilkan **50 passed, 386 assertions, 1.35s**, nol failure/error/skip/warning. Ini konfirmasi ulang snapshot source sekarang; bukan penambahan 50 ke suite historis.
- Feature terpilih: `SimulationRepositoryIntegrationTest.php`, `CreditSimulationLivewireTest.php`, `ConfigurationSimulationTest.php` menghasilkan **26 passed, 328 assertions, 11.71s**, nol failure/error/skip/warning. Ini satu run terpisah, bukan keseluruhan suite aplikasi. Mencakup cascade/master harga fixture, resolusi produk dan konfigurasi, server-side simulation/print, validasi pilihan kendaraan, konsistensi jalur Admin/Referral, pembatasan akses konfigurasi dan sumber flat rate pada trace. Tidak membuktikan seluruh RBAC aplikasi, PDF lintas perangkat atau seluruh data produksi.

DB pengujian adalah PostgreSQL16.11 cluster baru `D:/bonjermgu-eval6/audit-pgdata-3`, loopback dengan port acak dan DB `web_mtf_testing`; identitas SQL dan config Laravel efektif diperiksa sebelum feature test. APP_ENV=testing, cache array, queue sync; `SerializesTestingDatabase` tetap dipakai tanpa melewati guard. Database yang sudah ada tidak disentuh. Seluruh cluster percobaan sudah berhenti; data hanya fixture sintetis. TestVehicleMaster memakai sampel dua model, bukan hasil import penuh CSV26.791 baris. Empat aset build Vite existing disalin dan dipin agar rendering view tidak memakai dev server atau perlu rebuild frontend.

Perintah plan `--no-ansi` ditolak Pest terpasang sebelum tes berjalan; padanannya `--colors=never` dipakai pada run akhir. Percobaan awal tersimpan di `attempt1-harness-errors`: pg_ctl berhasil memulai cluster tetapi pipe stdout yang diwariskan membuat subprocess menunggu EOF sampai server dihentikan. Sesudah itu createdb gagal karena server sengaja sudah berhenti; bukan kegagalan aplikasi. Harness diperbaiki menggunakan log file langsung, bukan capture pipe. Percobaan berikutnya menyelesaikan50/26 tes dengan warning pembacaan `.env` yang tidak ada pada salinan. Run akhir memakai file `.env` sintetis minimal APP_ENV/key dummy di salinan terisolasi, tidak mengambil kredensial source; kedua suite diulang dengan `--fail-on-warning` dan bersih. Log warning sebelumnya tetap di `attempt2-missing-env-warnings`, bukan disembunyikan atau dihitung sebagai run bersih.

Artefak tambahan: [unit JUnit](../output/project-evidence/bonjermgu/20261022-bonjermgu/unit.xml), [feature JUnit](../output/project-evidence/bonjermgu/20261022-bonjermgu/feature.xml), [unit log](../output/project-evidence/bonjermgu/20261022-bonjermgu/unit.log), [feature log](../output/project-evidence/bonjermgu/20261022-bonjermgu/feature.log), [identitas DB](../output/project-evidence/bonjermgu/20261022-bonjermgu/database-identity.log), [config Laravel efektif](../output/project-evidence/bonjermgu/20261022-bonjermgu/laravel-test-config.log), [eksekusi/stop](../output/project-evidence/bonjermgu/20261022-bonjermgu/execution.json), [aset Vite](../output/project-evidence/bonjermgu/20261022-bonjermgu/build-assets.json).

Task6 selesai untuk verifikasi dan bahan penulisan. Verifikasi akhir: `python -X utf8 output/project-evidence/verify_task6.py`, ditambah `git diff --check`. Source, status, HEAD, branch dan worktree sembilan role dibandingkan baseline. Tidak commit, push, deploy, mengubah repo sumber atau menulis copy website. Task7 SIPARIH belum dimulai.


## Task 7 - SIPARIH: akses dokumen dan competing approvals

Pemeriksaan 22 Oktober 2026, run `20261022-siparih`; HEAD `2ee3eeba40c373d771cfdddc86ab06a1dbf9cd15`. Seluruh eksekusi memakai salinan byte-identical 157 tracked files pada `D:/siparih-eval7`, vendor existing dan build assets existing. Tidak menyalin `.env`, database kerja, atau storage dokumen warga. File env pada salinan berisi APP_ENV testing/key sintetis; konfigurasi efektif diperiksa sebelum setiap jenis tes. Folder `portfolio/` untracked milik pengguna dipertahankan. Tidak ditemukan AGENTS.md dalam repo.

### Perbandingan snapshot historis

`git diff 9420a78..HEAD` menunjukkan delapan berkas berubah: projectcontext, dua Blade views dan lima artefak laporan/screenshot tes. Scope `app`, `config`, `routes`, `database`, `tests/Feature`, `tests/Unit`, `tests/Concurrency`, `tests/Support`, phpunit.xml dan composer.lock identik. UI pengajuan kini memakai grid, indikator field terkunci, validasi/status file di browser, tombol hapus file serta state submit; data-admin juga berubah. Tidak menyimpulkan browser UI telah diuji hanya dari suite backend. Commit sesudah snapshot ialah `b2bffea`, `5ce2da7`, `3f07614`, `2ee3eeb`, oleh ShafwanAdhi.

Hasil historis 23 Juli 2026 adalah **82 tes/818 assertions** dan run APR-15 terpisah **1 tes/12 assertions** pada revisi9420a78, sebagaimana laporan source. Hasil terbaru di bawah mengonfirmasi angka yang sama pada HEAD sekarang; durasi/run tidak dicampur. Jangan menjumlahkan assertion sebagai hasil bisnis atau menyatakan seluruh produksi terverifikasi.

### Akses, PDF dan failure modes

`DocumentPolicy` memberi akses view/download kepada pemilik, admin, atau Ketua RW yang cocok dengan target dokumen. Hanya reviewer target dengan status pending dapat approve/reject. `DocumentController` menjalankan Gate untuk detail, preview dan download; rw_tujuan/tujuan tanda tangan dipaksakan dari akun di server saat submission, sehingga hidden field bukan batas otorisasi. Tes ACL memeriksa pemilik, warga lain, reviewer target/non-target, dan admin; tes download memeriksa pemilik menerima signed file dan warga lain ditolak. Policy download mengikuti hak view, tidak mensyaratkan status approved; UI yang hanya menampilkan tombol pada dokumen approved tidak menjadi aturan server tambahan.

File memakai disk local di `storage/app/private`. File signed dipilih jika tersedia, selain itu original. Pada production, controller mengembalikan X-Accel-Redirect menuju `/protected-storage/`, encoding per segmen path dan header no-store/private. `INSTALLATION.md` mengonfigurasi location Nginx internal dengan alias private storage. Ini bukti implementasi/konfigurasi, bukan pemeriksaan Nginx VPS atau endpoint publik pada run ini. Suite testing memakai jalur response Laravel non-production; internal location aktual belum diuji ulang.

Upload PDF/gambar divalidasi, gambar dikonversi menjadi PDF, dan penyimpanan gagal dibersihkan saat transaksi DB rollback. FPDI menyisipkan gambar tanda tangan/stempel dengan placement; hasil ini tidak membuktikan tanda tangan kriptografis bersertifikat. `PdfNormalizer` memiliki Ghostscript pdfwrite, compatibility1.4, -dSAFER, timeout, validasi output dan cleanup file temporer. Namun `PDF_NORMALIZATION_ENABLED=false` pada pengujian ini; executable Ghostscript tidak tersedia di PATH dan pipeline Ghostscript nyata belum diuji. Lulus tes PDF/image/signing tidak diubah menjadi klaim semua format PDF atau normalisasi produksi berhasil.

Approval memakai transaksi, `lockForUpdate`, lalu pemeriksaan Gate ulang pada model yang terkunci sebelum signing, perubahan status/timestamps, dan pembuatan log. Request kedua yang membaca status pending sebelumnya harus memeriksa status terbaru setelah lock diperoleh. Jika signing/transaksi gagal, file signed yang sempat dibuat dibersihkan dan error diteruskan. Penolakan memakai lock dan reauthorization juga. Ini menghindari dua keputusan final pada skenario yang diuji; bukan jaminan seluruh kombinasi race/failure telah tertutup.

### Hasil terbaru dan DB terisolasi

`php artisan test --no-ansi --fail-on-warning --log-junit <run>/suite.xml` menghasilkan **82 passed, 818 assertions, 59.04s**, nol failure/error/skip/warning. SQLite `:memory:`, DB_URL kosong, cache/session/mail array dan queue sync dikonfirmasi lewat bootstrap Laravel; config cache source tidak dibawa. Suite standar mencakup Unit/Feature, tidak mencakup folder Concurrency. Jumlah tersebut masih mencakup ExampleTest bawaan; tidak menyebut82 sebagai82 kasus domain independen atau skor keamanan.

`php artisan test tests/Concurrency/SiparihApprovalConcurrencyTest.php --no-ansi --fail-on-warning --log-junit <run>/concurrency.xml` menghasilkan **1 passed, 12 assertions, 3.73s** pada MariaDB10.4.32. Cluster dibuat baru pada `D:/siparih-eval7/audit-mariadb`, bind127.0.0.1, port acak, `--no-defaults`, database `siparih_concurrency_testing`, user audit terbatas pada DB itu. Identitas SQL, datadir dan konfigurasi Laravel efektif diperiksa sebelum DatabaseMigrations berjalan. Instance XAMPP/DB lain tidak dipakai. Storage concurrency berada dalam salinan, bukan storage warga.

Tes menjalankan dua proses PHP dengan request sintetis menuju controller, bukan dua HTTP request melalui server web. Worker pertama diberi delay signing1.200ms; worker kedua dimulai200ms kemudian. Dua exit/status diperiksa: pertama0/approved, kedua3/forbidden. Assertions juga memeriksa status disetujui, approved_at/signed_at, keberadaan signed file, tepat satu dokumen approved dan tepat satu document_logs untuk keputusan tersebut. Bukti ini berasal dari assertions test yang dieksekusi, bukan raw worker trace yang diterbitkan.

Run tambahan pada cluster disposable yang sama mengulang **skenario yang sama**, bukan menambah jumlah kasus unik. Polling `information_schema.INNODB_LOCK_WAITS` dari koneksi observer root lokal mengambil50 sampel; **7 sampel positif, maksimum1 lock wait**. Uji ulang tetap1 passed/12 assertions. Observasi ini membuktikan contention sempat terjadi, melengkapi status akhir; polling bukan pengukuran latency/throughput. Startup pertama observer biasa sudah terlambat (0 sampel), sehingga tidak dianggap bukti ketiadaan contention. Preflight observer terintegrasi sempat berhenti akibat perbedaan separator/escaping path Windows; normalisasi path dan `mysql --raw` diperbaiki sebelum pengulangan, tanpa mengubah kode aplikasi/tes atau menurunkan assertions. Kedua eksekusi server berakhir exit0 melalui shutdown; tidak ada MariaDB audit yang dibiarkan berjalan.

### Batas publikasi dan draf penulisan

Pertahankan screenshot SIPARIH yang sudah ada: lima aset gallery dipin hash dan tidak diubah. Provenance Task2 tetap berlaku: UI tim/produk pada database demo dengan akun/dokumen fiktif, bukan data warga atau approval produksi. Tidak membuat screenshot baru dari DB kerja.

Draf kontribusi untuk Task10: "I enforced document access by ownership and RW assignment, keeping uploads private and checking authorization before preview or download." Lalu: "I guarded approval with a database row lock and a second authorization check, then tested competing workers so only one approval and audit log were committed." Hubungkan konversi PDF dan rollback cleanup sebagai keputusan pendukung, bukan klaim cryptographic signing atau security audit menyeluruh. Angka82/818 ditampilkan sebagai satu engineering verification; APR-15 diberi metode/DB terpisah. Tidak mengklaim throughput, adopsi atau penghematan waktu yang belum diukur.

Artefak lokal ignored: [snapshot](../output/project-evidence/siparih/20261022-siparih/snapshot.json), [perbandingan historis](../output/project-evidence/siparih/20261022-siparih/historical-comparison.json), [suite JUnit](../output/project-evidence/siparih/20261022-siparih/suite.xml), [suite log](../output/project-evidence/siparih/20261022-siparih/suite.log), [concurrency JUnit](../output/project-evidence/siparih/20261022-siparih/concurrency.xml), [concurrency log](../output/project-evidence/siparih/20261022-siparih/concurrency.log), [config SQLite](../output/project-evidence/siparih/20261022-siparih/sqlite-config.log), [config MariaDB](../output/project-evidence/siparih/20261022-siparih/mysql-config.log), [identitas DB](../output/project-evidence/siparih/20261022-siparih/database-identity.log), [eksekusi/stop](../output/project-evidence/siparih/20261022-siparih/execution.json), [pengulangan teramati](../output/project-evidence/siparih/20261022-siparih/observed-concurrency.xml), [sampel lock wait](../output/project-evidence/siparih/20261022-siparih/observed-execution.json), [galeri](../output/project-evidence/siparih/20261022-siparih/gallery-manifest.json). Ini tautan kerja internal, belum laporan publik website.

Task7 selesai untuk eksekusi/pencatatan bukti yang dibatasi di atas. Pemeriksaan akhir `python -X utf8 output/project-evidence/verify_task7.py` memeriksa JUnit, environment, contention, penghentian DB, source hashes dan gallery. Tidak mengubah source/website, commit, push atau deploy. Task8 SiDiKa saat checkpoint ini belum dimulai.

## Task 8 — SiDiKa: kontribusi backend dan batas bukti (2026-10-22)

Root `D:/collages/SiDiKa`, branch `main`, HEAD `9c1890b441a0e90866f407e2f00741a7b9e2e532`, clean sebelum pemeriksaan. Audit membaca source dan diff tanpa mengubah aplikasi, database, environment, gallery, atau website portofolio. Lima commit pribadi di bawah berpenulis ShafwanAdhi; tampilan dan fitur lain tetap pekerjaan tim. Tidak ada dasar untuk mengatribusikan seluruh aplikasi atau model Smart Stock kepada saya.

### Empat kontribusi dengan before/after

| Kontribusi | Sebelum | Perubahan pribadi dan kondisi HEAD |
| --- | --- | --- |
| Akun pegawai | Manajemen akun belum memiliki alur CRUD yang ditambahkan pada commit ini. | `9af8b20` menghubungkan akun ke identitas pegawai, membatasi pilihan form ke pegawai aktif yang belum memiliki akun, serta menambahkan create/edit/delete dan penyesuaian model/migrasi/seeder. `669e287` kemudian menambahkan pending activation, random password hash, token acak 32 byte dan expiry 72 jam. Pada HEAD, create menerima `role` dengan aturan `required` saja, sedangkan update membatasi `manager,staff`; penyaringan dropdown bukan validasi server untuk status pegawai. Jangan menyebut semua input telah diamankan. |
| Pengaturan katalog | Pengaturan dan model lama belum memakai alur persistence/public consumption yang ditambahkan pada commit ini. | `75c2752` menyimpan nama situs, kontak, tautan sosial dan media melalui model `CatalogSettings` serta model banner/partner; `PageController` membaca model yang sama untuk halaman publik. `CatalogSetting` singular adalah model lain dengan field lama, bukan model yang dipakai controller aktif. Pada HEAD terdapat customer gallery dan upload helper/R2; jangan mengatribusikan seluruh evolusi upload/galeri kepada commit awal. |
| Arsip QC dan password profil | Arsip QC memakai pencarian sederhana serta latest/pagination tanpa kombinasi kategori/sort/state baru; profil belum memiliki handler perubahan password pada diff tersebut. | `0d356d7` menambahkan kategori, empat pilihan sort, state form dan `withQueryString()`/`appends()` pada pagination arsip QC. Commit yang sama menambahkan pemeriksaan password lama, penolakan password sama, konfirmasi dan hashing password baru. Aturan historis `password|min:8` kemudian berubah di HEAD menjadi `new_password|min:6`; draf tidak boleh menyebut kebijakan delapan karakter sebagai perilaku saat ini. |
| Filter dan perbandingan dashboard | Cabang terbaik diurutkan berdasarkan pendapatan, kartu tetap ditampilkan saat satu cabang dipilih, dan bulan default mengikuti bulan sekarang. | `669e287` mengganti peringkat menjadi `labaBersihCabang`, menggunakan tanda `-` bila tidak ada laba positif, dan menambahkan `showBestBranch = $branchId === null` hingga view. `b0dab12` menghapus default bulan sehingga tidak memilih bulan berarti semua bulan pada tahun terpilih. **Peringkat laba ini historis:** HEAD sudah memakai pertumbuhan omzet dua bulan sebelumnya; tidak boleh ditulis sebagai algoritma cabang terbaik yang masih aktif. |

### Penelusuran dashboard dan pagination

Pada perubahan historis, fixture penalaran A: pendapatan100/HPP90 menghasilkan laba10; B: pendapatan80/HPP20 menghasilkan laba60. Sort pendapatan memilih A, sort laba memilih B. Ini contoh sintetis untuk menjelaskan perubahan comparator pada diff, bukan pengukuran bisnis atau hasil query SQL yang dieksekusi. Laba cabang di-clamp minimal0; istilah `laba bersih` adalah nama field aplikasi, bukan bukti perhitungan laba akuntansi lengkap.

HEAD menghitung kartu laba sebagai pendapatan dikurangi HPP pembelian dan servis, sedangkan area chart HPP masih memakai harga beli saja. Area chart, top products dan recent activity tetap tahunan; jangan menyatakan semua widget mengikuti pilihan bulan. `DashboardController` meneruskan bulan null ke service; filter tahun tetap berlaku, filter bulan hanya ditambahkan saat terisi. `branchPerformance` mempertahankan single-branch hiding, tetapi memilih cabang terbaik berdasarkan persentase perubahan omzet bulan referensi minus2 ke minus1. Tanpa pilihan bulan: referensi bulan sekarang untuk tahun berjalan, Desember untuk tahun lain. `calculateGrowth` utama adalah pertumbuhan pendapatan, bukan pertumbuhan laba. View menampilkan persen dan label periode yang sesuai. Januari/desember rollover diperiksa melalui method source asli.

Arsip QC pada HEAD menggunakan status `diarsipkan/gagal_qc`, menerima item manual tanpa pembelian atau pembelian berstatus deal, lalu menerapkan search nama/serial/kode transaksi, kategori, dan sort. Form GET menyimpan search/kategori/sort_by/sort_order; controller `paginate(15)->withQueryString()` dan view `appends(request()->query())` mempertahankan parameter saat berpindah halaman. Kontrak ini diperiksa dengan query recorder, bukan rendering URL oleh paginator Laravel. `sort_order` belum dibatasi di request; nilai selain asc/desc perlu validasi sebelum dapat diklaim tahan input tidak valid.

### Kontrol akun dan temuan yang membatasi klaim

Routes akun berada dalam `auth` dan `role:manager`; alias Kernel mengarah ke `CheckRole`. Login menolak pending/inactive dan pegawai nonaktif. Handler update email mengembalikan akun ke pending, mengganti token dan mencoba menghapus database sessions serta remember token; exception ditelan dan revokasi sesi bergantung driver. Pemeriksaan ini hanya penelusuran source, bukan pembuktian middleware, email delivery, expiry token atau pencabutan sesi secara end-to-end.

**Temuan prioritas tinggi, belum diperbaiki pada Task8:** `publicResetPassword()` mengambil identitas dari `password_reset_email` dalam session lalu menulis password tanpa memeriksa marker keberhasilan verifikasi, expiry, atau kode. Session email sudah dibuat sebelum verifikasi kode di `publicForgotPassword()`. `publicVerifyResetCode()` hanya redirect setelah kode benar; tidak menciptakan bukti verifikasi yang diwajibkan handler final. Alur authenticated `resetForgottenPassword()` juga memeriksa email dan identitas, tetapi tidak marker keberhasilan kode. Ini temuan source review yang perlu regresi Laravel dan perbaikan terisolasi sebelum klaim reset password aman atau deployment berikutnya; tidak diuji terhadap akun nyata. Draf hanya membahas kontribusi perubahan password saat sudah login. Temuan ini tidak menjadi bagian copy pemasaran.

### Pemeriksaan yang benar-benar dijalankan

`php output/project-evidence/sidika/20261022-sidika/check.php` menghasilkan **33 assertions lulus**: penolakan password lama salah, penolakan password baru sama, penyimpanan hash password baru, deklarasi aturan konfirmasi, mapping field katalog dan konsumsi model yang sama oleh halaman about, empat pilihan sort QC beserta search/kategori/state/panggilan query-string pagination, serta tiga rollover bulan. Method controller/service asli dimuat langsung; Request/Auth/model/query/view diganti doubles yang dinyatakan eksplisit. Validator hanya merekam deklarasi aturan, tidak mengeksekusi validasi Laravel. Hash memakai `password_hash/password_verify` PHP, bukan konfigurasi Hash Laravel produksi. Ini pemeriksaan kontrak terisolasi, **bukan 33 integration tests**, bukan pengujian SQL, validasi input, URL paginator, HTTP, middleware, upload, email atau keamanan keseluruhan. `php -l` lulus untuk12 file PHP non-Blade terkait.

Vendor Laravel10 dan node_modules tidak tersedia. Tidak memasang dependency atau meminjam vendor proyek Laravel versi lain hanya untuk menjalankan ExampleTest. Tidak menjalankan migrations, mengakses R2, mengirim email, memakai database kerja, atau memulai server. Tidak menjalankan Playwright karena Task8 belum mengubah UI dan belum menyediakan aplikasi integrasi terisolasi. Kekurangan integration coverage tetap terbuka, bukan dianggap lulus.

### Draf ringkas untuk Task10

"I contributed backend features to SiDiKa, a team-built camera retail management system. I connected employee records to user accounts and built catalog settings consumed by the public storefront."

"I added category filters, search and sorting to archived QC records while preserving the selected state across pagination. I also implemented profile password changes that check the current password and reject reuse."

"I corrected an earlier branch comparison to use profit rather than revenue, hid the comparison for a selected branch, and changed the default month filter to show the full year. The team later replaced the branch ranking with revenue growth."

Evidence note: "Source history and isolated controller checks support these contributions; database and end-to-end verification remain pending."

`websiteUrl: ""` tetap kosong. Hindari pengulangan Linked/Editable/Filtered/Validated, klaim kepemilikan seluruh produk/ML, peningkatan akurasi, revenue, pengguna, atau efisiensi tanpa pengukuran. Tidak menjadikan jumlah assertions sebagai impact bisnis.

Artefak internal ignored: [pemeriksaan runnable](../output/project-evidence/sidika/20261022-sidika/check.php), [hasil33 assertions](../output/project-evidence/sidika/20261022-sidika/checks.json), [manifest17 sumber](../output/project-evidence/sidika/20261022-sidika/manifest.json), [PHP lint](../output/project-evidence/sidika/20261022-sidika/lint.log), [diff akun](../output/project-evidence/sidika/20261022-sidika/9af8b20.diff), [diff katalog](../output/project-evidence/sidika/20261022-sidika/75c2752.diff), [diff QC/profil](../output/project-evidence/sidika/20261022-sidika/0d356d7.diff), [diff dashboard/aktivasi](../output/project-evidence/sidika/20261022-sidika/669e287.diff), [diff default bulan](../output/project-evidence/sidika/20261022-sidika/b0dab12.diff). Pemeriksaan ulang: `python -X utf8 output/project-evidence/verify_task8.py`. Task9 belum dimulai.


## Task 9-13 - Implementasi portofolio dan penutupan (22 Oktober 2026)

Enam studi kasus memakai bukti Task3-8, peran di dekat judul, result kinds, methodology/limitations, serta resource links opsional. Tes baru diamati RED sebelum UI ditulis;35 visitor tests kemudian GREEN. Seluruh suite akhir44/44 dan buildTypeScript/Vite lulus. Featured IDs WaspadAI/UM/Numora, label kompetensi dan narasi orang pertama mengikuti plan. Semua thumbnail/galeri dan URL tetap; caption Numora/Android membedakan scope tim/demo.

Enam laporan Markdown publik diringkas dari register, bukan menautkan ignoredlogs/pathlokal. WaspadAI challenge76.92%,6/6livefallback; UMdense12/13vs11/13current,complete5/13; Numora1078generator/1180original,294tests; Bonjermgu76tests/714assertions; SIPARIH82/818 dan1competingapproval; SiDiKa33contractchecks semuanya memiliki metode/batas dekat angka. Angka tersebut tidak menjadi impactbisnis/accuracyproduksi.

PlaywrightCLI:18route/viewport combinations,3additional360px routes,10flow records,zero brokenimages/overflow/pageerrors. All/AI/Software/Others,empty/direct/reload/unknown/back/next,galleryarrows/dots/keyboard,menufocus,reduced/fullmotion,certificate/courses danexperience dipertahankan. Bukti output/playwright/portfolio-content-audit/browser-results.json dan screenshots.

DockerComposebuild lulus,termasuk44tests/buildproduksi. Container terpisah memakai portloopbackacak:10HTTPchecks200 (health,home,2detail,6reports);container removed. Tidak composeupVPS,push,merge,deploy. Prosedur contentrollback memakai savedimage di overrideCompose,tidak gitreset atau hostNginx.

Laporan penutupan: docs/superpowers/verification/2026-10-21-project-content-audit.md memetakan semua backlogA/B/C ke task/bukti. Cost/TTFT/impactpengguna,AndroidE2E,Numoracentral,sourceprojectreadiness danSiDiKarecovery tetap terbuka. Self-review dilakukan sendiri sesuai larangan delegasi plan,bukan independentreview.
