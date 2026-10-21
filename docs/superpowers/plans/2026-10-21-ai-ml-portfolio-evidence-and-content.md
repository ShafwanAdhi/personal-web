# AI/ML Portfolio Evidence and Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. Delegasi hanya dilakukan jika diminta secara eksplisit.

**Goal:** Memperbaiki enam studi kasus portofolio berdasarkan implementasi, kontribusi pribadi, dan hasil evaluasi yang dapat ditelusuri ke repo sumber.

**Architecture:** Repo proyek menjadi sumber bukti; portofolio tetap React/Vite dengan seluruh konten personal dalam `src/data/portfolio.ts`. Verifikasi dan evaluasi dilakukan sebelum menulis klaim. UI detail ditambah seperlunya untuk memperjelas peran, jenis hasil, metodologi, keterbatasan, dan tautan artefak; tidak membangun CMS atau mengganti stack.

**Tech Stack:** React, TypeScript, Vite, Vitest, Playwright CLI; Python/pytest/unittest; Laravel/Pest/PHPUnit; Kotlin/Gradle untuk verifikasi Android yang relevan. Docker digunakan untuk pemeriksaan paket rilis portofolio.

**Spec:** [Audit konten 21 Oktober 2026](../../ai-ml-project-content-audit-2026-10-21.md), ditambah pemetaan repo dari pengguna dan temuan awal dalam plan ini.

**Status:** Task 1-13 selesai untuk audit/implementasi/verifikasi lokal pada22 Oktober2026. Status sumber dan evaluasi yang masih terbuka tercatat dalam laporan verifikasi; rilis VPS terpisah, belum dijalankan.

## Global Constraints

- Copy website tetap berbahasa Inggris, menggunakan orang pertama untuk pekerjaan pribadi. Dokumentasi internal berbahasa Indonesia.
- Semua konten personal dan tautan proyek tetap dapat diedit dari satu file: `src/data/portfolio.ts`.
- Bedakan hasil individu, aset tim, implementasi, rancangan, pengujian lokal, fixture, dan penggunaan produksi.
- Jangan mengubah inventaris atau jumlah tes menjadi klaim akurasi AI, adopsi, penghematan waktu, atau dampak bisnis.
- Panjang ringkasan kartu dijaga mendekati sama. Usulan untuk detail: hapus kewajiban tepat 308 kata, lima kontribusi, dan empat hasil; kepadatan mengikuti bukti.
- Pertahankan identitas Shafwanadhi/Shafwan Adhi dan kontak yang telah ditetapkan pengguna.
- Pertahankan URL proyek, termasuk SIPARIH; tombol website tetap di bawah gambar; WaspadAI menggunakan `Visit Demo`.
- SiDiKa tidak diberi URL rekaan. Numora tidak diberi tombol website tanpa alamat yang tersedia.
- Pertahankan galeri/thumbnail terbaru dari pengguna dan layout portrait WaspadAI. Perbaiki caption; jangan memulihkan gambar yang sudah diminta dihapus.
- Pertahankan urutan kategori `All`, `AI / ML`, `Software Engineering`, `Others`; Numora tetap software selama implementasinya deterministik.
- Pertahankan preview sertifikat Machine Learning dan IBM Data Science, gambar courses, serta urutan Experience & Involvement yang sudah disepakati.
- Repo sumber dibaca untuk bukti. Perubahan di sana dibatasi pada kebutuhan evaluasi/pengujian yang konkret; tidak memperluas pekerjaan menjadi pembangunan fitur seluruh produk.
- Simpan pekerjaan lokal yang sudah ada. Jangan menjalankan reset, clean, stash otomatis, pergantian branch, atau memasukkan perubahan orang lain ke commit pekerjaan ini.
- Sebelum menulis kode, gunakan isolasi sesuai skill `superpowers:using-git-worktrees`; hasil yang bergantung pada perubahan belum di-commit harus memakai snapshot berkas terkait, bukan HEAD saja.
- Gunakan dependency dan test runner yang sudah ada. Tidak menambah framework evaluasi, CMS, dashboard metrik, atau komponen generik tanpa kebutuhan.
- Saat implementasi, buat checkpoint commit per perubahan yang sudah diverifikasi, hanya berisi file task terkait; jangan memakai `git add .` pada repo yang memuat pekerjaan lain.
- Tes database harus memakai database khusus pengujian. Jangan menjalankan migrasi/seed atau suite `RefreshDatabase`/`DatabaseMigrations` terhadap database kerja atau produksi.
- Artefak publik hanya memuat data yang layak ditampilkan. Jangan menyalin `.env`, kredensial, trace berisi data pengguna, atau path mesin lokal ke website.
- Pemeriksaan visual memakai Playwright CLI sesuai skill `playwright`; tidak menambah `@playwright/test` untuk tugas ini.
- Deployment adalah tahap rilis terpisah setelah hasil lokal dapat ditinjau. Plan ini tidak menjalankan push, merge, atau deploy.

## Review Focus

1. **Hasil historis dan working tree berubah:** klaim harus menunjuk commit, hash berkas relevan, metode, dan tanggal. Ditangani Task 1–3 dan 5–8.
2. **Structured facts tanpa contexts dan label kosong:** scorer tidak boleh memberi false failure pada sumber terstruktur atau nilai sempurna pada sampel tanpa label. Ditangani Task 4.
3. **Provider gagal/rate limit dan sampel di-skip:** laporkan kegagalan, retry, abstention, serta denominator; jangan hilangkan kasus gagal dari ringkasan. Ditangani Task 3–4.
4. **Jumlah hasil dan artefak berbeda antarproyek:** tidak ada blok kosong, link rusak, salah klasifikasi hasil, atau ketergantungan pada empat kartu. Ditangani Task 9–12.
5. **Navigasi dan mobile:** perubahan hierarki tidak merusak filter/back link, posisi tombol, portrait gallery, keyboard, atau gambar courses. Ditangani Task 9 dan 12.

## 1. Pemetaan repo dan snapshot awal

Semua path berikut telah ditemukan. Hash pendek adalah kondisi saat inspeksi awal; Task 1 harus menyimpan hash lengkap dan memeriksanya kembali sebelum evaluasi.

| Proyek / peran repo | Root aktual | Branch / HEAD awal | Kondisi awal yang relevan |
| --- | --- | --- | --- |
| Portofolio | `D:/collages/portofolio` | `main` / `d1eee19c4b26` | Dokumen audit belum di-track; perubahan tersebut milik pekerjaan sebelumnya |
| Bonjermgu | `D:/internship/web-mtf` | `main` / `0ae8dbda8cf4` | Tidak terlihat perubahan lokal pada inspeksi awal |
| SIPARIH | `D:/kkn/website` | `main` / `2ee3eeba40c3` | Direktori `portfolio/` belum di-track; pertahankan |
| SiDiKa | `D:/collages/SiDiKa` | `main` / `9c1890b441a0` | Tidak terlihat perubahan lokal; README masih template Laravel |
| WaspadAI AI service + web demo | `D:/collages/demo fact-check` | `main` / `f9b603a6776c` | Ada perubahan tracked dan benchmark/dokumen untracked |
| WaspadAI Android + Product API | `D:/collages/waspadai_mobile/WaspadAI` | `main` / `db1cc331866a` | Ada perubahan dokumentasi lokal |
| Numora aplikasi utama | `D:/collages/semester 5/numora/Numora` | `fix/drill-chapter3-owner-acceptance` / `8d27bed25de9` | Repo tersendiri; jangan menganggap branch main sebagai sumber aktif |
| Numora generator/AI service | `D:/collages/semester 5/numora/Numora-ai-service` | `docs/drill-chapter3-import-audit` / `b9d25a7d6251` | Memiliki worktree lain dan pembaruan konten terbaru |
| UM RAG Assistant | `D:/code/nlp/ta-sisdas` | `main` / `fb60f9f8ee81` | Repo aktif berada di root; direktori prototype di dalamnya bukan sumber utama |

**Temuan yang mengubah rencana audit sebelumnya:**

- `D:/collages/semester 5/numora` adalah direktori pengelompokan, bukan Git repo. Periksa kedua repo di bawahnya dan jangan mencampur worktree lama dengan checkout aktif.
- Dokumentasi progres Numora terbaru melaporkan 1.180 originals, 1.078 generator, 86 originals konseptual, dan 16 HOLD pada total workspace. Angka tersebut berasal dari laporan repo, belum dihitung ulang dalam penyusunan plan. Inventaris 820/746 pada portofolio merupakan snapshot lama; jangan langsung menggantinya tanpa verifikasi loader dan atribusi.
- README WaspadAI mobile menyebut remote adapter sebagai TARGET, sedangkan fungsi `verify_remote_text`/`verify_remote_image` pada `backend/app/verification_service.py` dan tes adapter telah tersedia. Dokumentasi dan implementasi perlu direkonsiliasi; keberadaan adapter/tes belum membuktikan integrasi live.
- Benchmark WaspadAI dan perubahan `presentation.py` belum seluruhnya ada pada HEAD. Checkout baru dari commit saja akan kehilangan sebagian bukti yang digunakan audit.
- Scorer UM RAG saat ini memakai `bool(contexts)` untuk source hit@1 dan memberi key-fact coverage 1,0 ketika label fakta kosong. Keduanya perlu diuji sebelum angka dipublikasikan.
- Runtime ditemukan: Node `v22.15.0`, Python `3.11.3`, PHP `8.2.12`, Java 21. Numora aplikasi utama mensyaratkan Node `>=24 <25` dan pnpm `12.6.0`; `pnpm` belum tersedia langsung pada PATH. Corepack tersedia, tetapi kecocokan runtime harus disiapkan saat eksekusi, tanpa mengganti Node global secara diam-diam.

**Instruksi lokal yang perlu dibawa ke eksekusi:** baca `Numora/AGENTS.md` dan dokumen produk/ADR yang diwajibkan sebelum mengubah repo pusat; prefix branch baru tidak boleh `codex`. Baca `apps/web/AGENTS.md` WaspadAI sebelum menyentuh web demo. `ta-sisdas/AGENTS.md` mengatur antislop untuk pekerjaan UI/copy/comment dalam repo tersebut; pemeriksaan kode read-only saat ini tidak mengubah area itu. Periksa instruksi turunan pada direktori yang benar-benar diubah.

## 2. Pendekatan dan urutan besar

**Pilihan yang direkomendasikan: bukti dahulu, perubahan konten/UI setelahnya.** Menulis ulang sekarang tanpa verifikasi berisiko mempertahankan metrik usang. Membangun ulang seluruh proyek sumber akan memperluas scope tanpa langsung memperbaiki portofolio.

| Tahap | Task | Hasil |
| --- | --- | --- |
| A. Baseline dan atribusi | 1–2 | Sumber klaim dan kondisi repo tercatat |
| B. Bukti proyek utama | 3–5 | Evaluasi WaspadAI/RAG dan inventaris Numora diperbarui |
| C. Bukti software pendukung | 6–8 | Cerita engineering dan cakupan tes terverifikasi |
| D. Implementasi portofolio | 9–11 | Struktur hasil, copy, dan artefak diperbaiki |
| E. Verifikasi dan penutupan | 12–13 | Pemeriksaan browser, build, dan daftar keterbatasan |

Task 3–8 tidak saling bergantung setelah Task 1–2. Urutan kerja default tetap WaspadAI → UM RAG → Numora → Bonjermgu → SIPARIH → SiDiKa. Tidak perlu menjalankan semua aplikasi bersamaan.

Konten yang telah memiliki bukti dapat diselesaikan meskipun evaluasi lain menunggu prasyarat. Kekurangan evaluasi harus tetap tercatat; jangan menandai keseluruhan backlog selesai jika pekerjaan tersebut masih wajib dilakukan.

## 3. File dan batas perubahan

| File / lokasi | Tanggung jawab |
| --- | --- |
| `docs/project-evidence-register.md` — baru | Satu register internal untuk delapan repo sumber, atribusi, hasil enam proyek, perintah, tanggal, hash, dan keterbatasan |
| `output/project-evidence/<project-id>/<run-id>/` — ignored | Log dan hasil mentah lokal; tidak menjadi aset website |
| `src/data/portfolio.ts` | Schema minimal, seluruh copy publik, hasil, metodologi, dan tautan |
| `src/components/ProjectDetailPage.tsx` | Penempatan peran, label jenis hasil, metodologi/keterbatasan, dan resource links |
| `src/styles.css` | Penyesuaian hierarki dan layout yang dibutuhkan konten baru |
| `src/App.test.tsx` | Perilaku studi kasus dan regresi alur pengunjung |
| `public/reports/projects/<project-id>.md` — bila diperlukan | Ringkasan bukti publik yang disanitasi; hanya dibuat jika tidak ada artefak publik yang cukup |
| `docs/project-content-sources.md` dan dokumen audit | Provenance terbaru dan status backlog |
| Repo sumber | File evaluasi/pengujian yang disebut pada task terkait; kode bisnis tidak diubah hanya untuk memperoleh angka yang lebih bagus |

Tidak memecah konten personal ke banyak file atau mengimpor repo proyek ke build portofolio. Artefak tambahan tidak otomatis dimasukkan sebagai slide galeri.

## 4. Tasks

### Task 1: Bekukan sumber dan prasyarat pengujian

**Files:** buat `docs/project-evidence-register.md`; hasil mentah di `output/project-evidence/`. Baca instruksi, dependency manifest, konfigurasi tes, serta Git status pada setiap root tabel.

**Consumes:** pemetaan pengguna dan snapshot awal. **Produces:** baseline dengan hash lengkap, daftar berkas dirty/untracked yang relevan, hash sumber bukti, runtime, dan prasyarat setiap run.

- [x] Catat root Git, branch, HEAD, worktree aktif, serta perubahan lokal setiap repo. Jangan memakai jumlah commit sebagai ukuran kontribusi.
- [x] Simpan SHA-256 berkas yang digunakan untuk klaim, khususnya benchmark WaspadAI yang belum di-track. Catat ulang setelah run untuk mendeteksi perubahan bersamaan.
- [x] Petakan runtime/dependency yang tersedia; siapkan Node 24/pnpm 12.6.0 hanya jika pengujian repo pusat Numora memerlukannya.
- [x] Periksa konfigurasi DB/cache/storage/queue tes sebelum mengeksekusi test runner. Untuk suite yang menulis data, pastikan target merupakan fixture atau database pengujian tersendiri.
- [x] Tetapkan direktori output unik per run. Untuk perubahan kode, siapkan worktree dan salin hanya perubahan lokal relevan ke snapshot kerja secara terkontrol; jangan menghilangkan pekerjaan asli.
- [x] Bandingkan baseline sesudah pemeriksaan; catat setiap perubahan sumber dari pekerjaan lain sebelum melanjutkan klaim.

**Done:** delapan repo sumber dapat diidentifikasi secara tidak ambigu; tidak ada hasil yang hanya diberi label "versi terbaru" tanpa identitas sumber.

Bukti pelaksanaan 21 Oktober 2026: [register sumber dan prasyarat](../../project-evidence-register.md), run 20261021T100155Z. Tidak menjalankan tes aplikasi atau mengubah kode produk.

### Task 2: Susun matriks klaim dan atribusi enam proyek

**Files:** perbarui register; baca `D:/project_context`, source code, diff/riwayat commit, kontrak, dan dokumen arsitektur yang relevan.

**Consumes:** baseline Task 1. **Produces:** untuk setiap klaim: masalah → pekerjaan pribadi → keputusan/alasan → bukti → batas → status publikasi.

- [x] Petakan kalimat dan angka dalam enam entry `portfolio.work.projects` ke bukti sumber.
- [x] Gunakan `git log`/`git show` pada perubahan terkait untuk memeriksa atribusi; jangan menyimpulkan semua file dalam commit merupakan pekerjaan individual tanpa konteks.
- [x] Bedakan implemented, locally verified, historically verified, design-only, dan unmeasured dalam register internal.
- [x] Pilih dua atau tiga keputusan utama setiap proyek. Catat alternatif hanya jika terdokumentasi atau dapat dinyatakan sebagai alasan desain, bukan eksperimen rekaan.
- [x] Cocokkan gambar dengan versi/fixture dan kontribusi; tandai Numora serta layar Android WaspadAI sebagai konteks produk tim bila tepat.

**Done:** tidak ada klaim besar tanpa sumber, atribusi, atau status yang jelas. Klarifikasi pengguna hanya diperlukan untuk informasi yang tidak bisa ditemukan dari kode/dokumen, misalnya pembagian kerja informal atau data pengguna.

Bukti pelaksanaan 21 Oktober 2026: bagian Task 2 pada [register](../../project-evidence-register.md), run `20261021T101328Z`. Pemetaan 107 kalimat, metadata enam proyek, 44 referensi gambar, serta tiga keputusan engineering per proyek. Verifikasi sumber/artefak memakai `python output/project-evidence/verify_task2.py`; hasil aplikasi historis tidak dijalankan ulang.

### Task 3: Verifikasi WaspadAI dan pisahkan evaluasi komponen dari live

**Roots:** `D:/collages/demo fact-check`; `D:/collages/waspadai_mobile/WaspadAI`.

**Files:** pada repo AI baca `apps/api/app/services/`, `apps/api/evaluation/production_cases.jsonl`, `apps/api/evaluation/production_results.json`, `apps/api/scripts/evaluate_production.py`, dan `docs/production_benchmark.md`; pada repo produk baca `backend/app/verification_service.py`, kontrak, dan tes adapter. Bila diperlukan, tambahkan dataset `apps/api/evaluation/portfolio_cases.jsonl` serta tes metrik pada `apps/api/tests/test_production_benchmark.py`. Output baru menggunakan path eksplisit di portofolio, bukan menimpa laporan lama.

**Consumes:** scope dan baseline dua repo. **Produces:** laporan offline, hasil review label, bukti adapter, dan laporan live terpisah jika prasyarat tersedia.

- [x] Jalankan suite API yang relevan dari `apps/api`: `python -m pytest -q`. Simpan passed/failed/skipped; verifikasi fixture tidak diam-diam menjadi panggilan live.
- [x] Jalankan `python scripts/evaluate_production.py --mode all --output <run-dir>/offline.json --report <run-dir>/offline.md`; ganti `<run-dir>` dengan path absolut output Task 1. Mode ini signals/coverage/replay, bukan provider live.
- [x] Periksa pembilang, penyebut, agregasi, skipped cases, dan fixtures. Laporkan replay schema validity bersama cakupannya.
- [x] Tinjau 51 sinyal tambahan pada snapshot lama: cocokkan output dan label, adjudikasi benar/salah/tidak dapat dinilai. Tambah uji kecil pada fixture berlabel bila scorer diubah; jangan menghitung seluruh deteksi tambahan sebagai false positive.
- [x] Bekukan dataset baru sebelum menyesuaikan aturan. Pisahkan kasus regresi pengembangan dari holdout; catat sumber label dan variasi teks/gambar/checkable/non-checkable.
- [x] Dari `backend` produk jalankan `uv run pytest -q -m "not live_database" tests/test_remote_ai.py tests/test_verification_models.py tests/test_community_evidence_service.py tests/test_auth.py`. Rekonsiliasi README TARGET dengan adapter yang benar-benar ada.
- [x] Jika SDK Android tersedia dan klaim mobile memerlukannya, dari `frontend` jalankan `.\gradlew.bat :app:testDebugUnitTest`. Catat bahwa unit test bukan verifikasi perangkat/end-to-end; Playwright tidak menggantikan tes Android native.
- [x] Setelah kredensial/provider tersedia dan jumlah kasus live dibatasi eksplisit, jalankan mode `live` memakai `--cases`, `--case-limit`, `--delay-seconds`, `--output`, dan `--report`. Mulai smoke kecil, lalu dataset berlabel; catat model, konfigurasi, retry, kegagalan, dan waktu run.
- [x] Laporkan precision/recall sinyal, kesimpulan yang didukung bukti, abstention, false reassurance, latency, dan biaya hanya sejauh dapat diukur. Biaya tetap unmeasured jika token/tarif aktual tidak tersedia.

**Done:** batas komponen, stub, live, web demo, dan kontribusi Android terlihat. Tidak membandingkan classification accuracy 50% pada delapan kasus lama dengan signal recall 98,15% sebagai peningkatan.

Bukti pelaksanaan: [register Task 3](../../project-evidence-register.md), run `20261021T103107Z`. Checkbox menyatakan pemeriksaan/percobaan dan pelaporan telah dilakukan, bukan semua gate lulus. API AI 92 passed; backend produk 32 passed. Android unit test belum berjalan karena dependency download gagal akibat ruang disk. Live enam kasus berstatus **DEGRADED**: verifier HTTP 404 pada 6/6, seluruhnya fallback meskipun evaluator mentah melabeli PASS. Biaya unmeasured; tidak ada klaim native end-to-end atau live vision. Verifikasi artefak: `python -X utf8 output/project-evidence/verify_task3.py`. Task 4 belum dimulai.

### Task 4: Perbaiki instrumen evaluasi UM RAG sebelum mengukur kualitas

**Root:** `D:/code/nlp/ta-sisdas`.

**Files:** baca `apps/api/main.py`, `apps/api/app/query_planner.py`, `apps/api/app/retrieval.py`, `apps/api/app/reranking.py`, dan `apps/api/app/fact_index.py`; ubah `scripts/evaluate_rag.py` seperlunya; buat `apps/api/tests/test_rag_evaluation.py`, `scripts/evaluate_retrieval.py`, dan `data/evaluation/portfolio_eval_set.json` untuk kebutuhan yang belum tercakup. Gunakan pytest yang sudah ada.

**Consumes:** snapshot corpus, daftar sumber, dan matriks Task 2. **Produces:** scorer teruji, benchmark retrieval yang dapat dibandingkan, laporan end-to-end, dan analisis kegagalan.

- [x] Jalankan baseline software dari `apps/api`: `python -m pytest tests -q`. Dari root jalankan `python scripts/validate_metadata.py` dan `python scripts/inspect_chroma.py --details`; jangan menjalankan indexing dengan `--reset`.
- [x] Tambahkan regresi scorer sebelum mengubahnya: `score_case()` harus memberi source hit@1 benar untuk `sources=[{"file_name":"a.pdf"}]` dengan `contexts=[]` dan label sumber `a.pdf`.
- [x] Tambahkan regresi `key_fact_coverage("answer", [])`: hasil `None`/not applicable, bukan 1,0. Ubah anotasi menjadi `float | None`; `summarize()` harus mengabaikan kasus tanpa label untuk metrik ini dan melaporkan jumlah kasus berlabel.
- [x] Uji ringkasan yang seluruh kasusnya tanpa label fakta: rata-rata `None`, denominator berlabel nol, tanpa division error. Perbarui `print_table()` agar menampilkan `N/A` untuk nilai kosong, bukan memformat `None` sebagai float.
- [x] Periksa denominator expected_sources/topics dan error provider dengan prinsip yang sama. String matching tetap dilabeli proxy; tidak dinyatakan sebagai evaluasi semantik jawaban.
- [x] Tambahkan `--output` bertipe path ke evaluator agar JSON ditulis dengan UTF-8 tanpa bergantung pada stdout yang dapat bercampur log. Tambahkan tes bahwa file valid, kasus gagal tetap ada, dan output tidak mengubah set evaluasi.
- [x] Bekukan set baru dengan question ID, domain, intent, expected sources, fakta/rujukan pendukung, dan expected answerability. Cakup lima domain, daftar/jumlah, multi-source, pertanyaan ambigu, dan informasi yang tidak tersedia. Catat asal label dan pemisahan tuning/holdout.
- [x] Untuk retrieval, runner baru menerima `--eval-set`, `--mode dense|current`, `--k`, dan `--output`. Reuse `retrieve()` untuk dense baseline dan alur retrieval/reranking saat ini untuk current; jangan menggandakan algoritme produk atau menambah toggle publik.
- [x] Bandingkan dua mode pada corpus/index, query, domain/filter, dan cutoff yang sama. Bekukan metadata/keyword yang dipakai kedua mode. Nyatakan jika domain ditentukan dari label gold: itu evaluasi komponen retrieval, bukan routing end-to-end.
- [x] Uji runner retrieval dengan fixture ranking tetap: sumber relevan di rank 2 harus menghasilkan hit@1 false dan hit@3 true; mode tidak boleh mengubah corpus. Sebut source hit sebagai hit, bukan passage recall tanpa label passage yang memadai.
- [x] Jalankan evaluator end-to-end konfigurasi produk secara terpisah. Nilai dukungan kutipan, kelengkapan fakta, jawaban di luar corpus, dan abstention dengan rubric pass/fail beserta alasan. Evaluator LLM tidak diwajibkan; jika dipakai, validasi terhadap label manusia.
- [x] Catat konfigurasi cache, model, provider errors/retries, p50/p95 latency, serta ukuran sampel. Ukur TTFT hanya bila trace streaming tersedia; waktu `rag_answer()` selesai bukan TTFT. Jangan menyimpulkan kenaikan kualitas jawaban dari hasil retrieval saja.

**Done:** skor memiliki definisi dan bukti yang dapat diulang. Jika hybrid/current tidak lebih baik, laporkan hasil tersebut dan alasannya; jangan mengubah angka atau tuning pada holdout untuk menghasilkan cerita peningkatan.

Bukti pelaksanaan: [register Task 4](../../project-evidence-register.md), run `20261021T110830Z`. Scorer/runner/dataset pada isolated branch `audit/um-rag-evaluation-20261021t110830z`, commit `883aa59ec9788c6182a90297f203a0f495981f0d`; main asli utuh. Baseline48/final60 passed. Dense hit@3 13/13, current11/13. Live16 kasus DEGRADED, 39 HTTP404 +3 HTTP429, 12 extractive fallbacks, tiga facts, satu no_domain. Rubric completeness5 pass/8 fail/3 N/A; bukan accuracy populasi. Biaya unmeasured. Checkbox menyatakan implementasi/pengukuran/pelaporan dilakukan, bukan kualitas produk lulus. Task5 belum dimulai.

### Task 5: Perbarui bukti Numora dari kedua repo aktif

**Roots:** `.../numora/Numora` dan `.../numora/Numora-ai-service` sesuai tabel lengkap.

**Files:** baca `Numora/AGENTS.md`, dokumen produk/OPEN/PRD yang diwajibkan, `docs/development/IRT_V3_RUNBOOK.md`, `GENERATOR_HANDOFF.md`; pada service baca `variant_gen/bank.py`, `config_store.py`, `conceptual_stock.py`, `docs/PROGRESS.md`, laporan progres dan kontrak handoff. Gunakan tes dalam `variant_gen/tests/`.

**Consumes:** atribusi dua repo, status worktree, dan versi data. **Produces:** inventaris runtime baru, hasil tes, batas IRT/self-adjustment, dan contoh matematika yang dapat diperiksa.

- [x] Hitung ulang originals, generator, stok konseptual, varian, HOLD, dan draft dari loader yang dipakai runtime. Pisahkan Drill/Tryout serta local generation dari import/publikasi aplikasi utama.
- [x] Bandingkan hitungan dengan `docs/PROGRESS.md` dan `docs/audits/2026-10-21-all-indicators-progress-after-indicator20/progress.json`; selesaikan perbedaan sebelum menulis angka publik.
- [x] Dari root service jalankan `python -B -m unittest discover -s variant_gen/tests -v`; catat jumlah aktual, bukan mengulang 186 dari snapshot lama.
- [x] Jalankan audit revisi yang relevan dan sudah diperiksa efek sampingnya. `audit_drill_20_23_revisions.py --output <run-dir>/revised-generator-audit.json` dapat mengeluarkan laporan baru; jangan menjalankan script completion yang menulis bank/config hanya untuk mengumpulkan bukti.
- [x] Ambil satu contoh source → variants → answer/explanation → independent mathematical check. Verifikasi seed sama menghasilkan keluaran sama; seed berbeda tidak otomatis berarti varian unik.
- [x] Verifikasi status aktual IRT consumer, calibration, self-adjustment, serta integrasi service; schema atau halaman monitoring tidak cukup menjadi bukti komputasi aktif.
- [x] Jika mengklaim integrasi main service, jalankan tes kontrak/integrasi terkait pada Node 24/pnpm 12.6.0 dan DB khusus testing mengikuti guard repo. Bila prasyarat tidak ada, catat belum diuji dan batasi klaim pada fondasi yang terbukti.
- [x] Cocokkan atribusi tiap perubahan terbaru. Angka repo tim tetap dilabeli cakupan tim; galeri student/admin tetap diberi konteks demo sintetis.

**Done:** snapshot lama dan baru tidak tercampur; tidak ada klaim psikometrik atau learning gains yang disimpulkan dari generator lokal.

Task 5 execution note (22 Oktober 2026): 294 tes lokal lulus; inventaris direkonsiliasi. Checkbox integrasi mencatat pemeriksaan prasyarat dan batas klaim, bukan connected test lulus. Node22/pnpm tidak tersedia sesuai requirement; integrasi central belum diuji ulang. Lihat register bagian Task 5. Task 6 belum dimulai.

### Task 6: Verifikasi cerita ketepatan perhitungan Bonjermgu

**Root:** `D:/internship/web-mtf`.

**Files:** baca `app/Services/SimulationService.php`, `app/Repositories/SimulationConfigurationRepository.php`, domain yang dipanggil keduanya, `tests/Unit/Simulation/`, `docs/credit-simulation.md`, `docs/credit-simulation-test-vectors.md`, dan kebijakan workflow.

**Consumes:** scope individu dan konfigurasi referensi. **Produces:** satu cerita aturan domain, hasil run terkini, dan satu contoh perhitungan rujukan.

- [x] Verifikasi pemisahan perhitungan server-side, konfigurasi, pembulatan, asuransi, refund, dan kegagalan tarif; telusuri alternatif/keputusan dari dokumen.
- [x] Periksa bootstrap tes, lalu jalankan `php vendor/bin/pest tests/Unit/Simulation --no-ansi`. Simpan jumlah tes dan assertions sebagai satu run.
- [x] Bila klaim membutuhkan repository/authorization, jalankan file feature test terkait hanya sesudah memastikan DB khusus testing. Jangan menganggap unit suite membuktikan seluruh workflow.
- [x] Hitung baris CSV dengan parser CSV; bedakan baris sumber dari kendaraan unik. Gunakan satu contoh angka sintetis atau referensi yang boleh dipublikasikan.
- [x] Rumuskan dua atau tiga kontribusi utama; gabungkan hasil tes/assertions dan hilangkan penyangkalan sertifikasi yang tidak relevan.

**Done:** studi kasus menunjukkan konsistensi aturan dan cara memeriksanya, tanpa klaim underwriting ML atau dampak bisnis yang belum diukur.

Task 6 execution note (22 Oktober 2026): unit50/386 dan feature terpilih26/328 lulus pada salinan sumber dan PostgreSQL disposable, tanpa warning. Pest menolak --no-ansi; --colors=never dipakai. Contoh S2 diperiksa Decimal independen; CSV26.791 baris/4.678 model. Lihat register Task6. Task7 belum dimulai.

### Task 7: Verifikasi akses dokumen dan concurrency SIPARIH

**Root:** `D:/kkn/website`.

**Files:** baca `app/Http/Controllers/DocumentController.php`, `app/Policies/DocumentPolicy.php`, `app/Services/PdfNormalizer.php`, konfigurasi protected delivery, `tests/Feature/Acceptance/`, dan `tests/Concurrency/SiparihApprovalConcurrencyTest.php`.

**Consumes:** snapshot historis dan konfigurasi pengujian. **Produces:** bukti terbaru atau label historis yang benar untuk otorisasi, PDF, dan persetujuan bersaing.

- [x] Cocokkan source sekarang dengan hasil historis commit `9420a78`; jelaskan perubahan relevan setelahnya.
- [x] Verifikasi `phpunit.xml`/config cache/environment efektif, lalu jalankan `php artisan test --no-ansi` pada DB SQLite in-memory sesuai konfigurasi tes yang telah diperiksa.
- [x] Untuk concurrency, gunakan MySQL/MariaDB khusus disposable, bukan DB kerja. Tes menggunakan `DatabaseMigrations` dan dua proses sehingga target harus diperiksa sebelum run.
- [x] Jalankan `php artisan test tests/Concurrency/SiparihApprovalConcurrencyTest.php --no-ansi` hanya setelah konfigurasi isolated DB benar. Run SQLite yang skipped tidak dihitung sebagai bukti concurrency.
- [x] Verifikasi satu accepted, satu rejected, dan satu approval log. Hubungkan keputusan locking dan authorization dengan kegagalan yang dicegah.
- [x] Pertahankan screenshot database demo; tidak memakai data warga untuk bukti publik.

**Done:** angka historis dan hasil baru diberi tanggal/revisi terpisah; tidak ada klaim throughput atau keamanan menyeluruh dari tes terbatas.

Task7 execution note (22 Oktober 2026): suite82/818 lulus pada SQLite memory; concurrency1/12 lulus pada MariaDB disposable. Pengulangan teramati menunjukkan7/50sampel lockwait positif, max1. Source/galeri dipertahankan; Ghostscript nyata dan Nginx VPS tidak diuji. Lihat register Task7. Task8 belum dimulai.

### Task 8: Padatkan bukti kontribusi SiDiKa

**Root:** `D:/collages/SiDiKa`.

**Files:** baca `app/Http/Controllers/DashboardController.php`, `app/Http/Controllers/QCController.php`, `app/Http/Controllers/CatalogSettingsController.php`, `app/Http/Controllers/ProfileController.php`, model akun/katalog, routes, serta diff yang terkait.

**Consumes:** atribusi dan source nyata, bukan README template. **Produces:** tiga atau empat perubahan backend yang jelas beserta before/after dan batas pengujiannya.

- [x] Telusuri koreksi net-profit comparison, perlakuan satu cabang, dan bulan yang tidak dipilih dari diff hingga query/view terkait.
- [x] Verifikasi category/sort/search tetap terbawa pada pagination QC; cocokkan catalog persistence dengan penggunaannya pada public page.
- [x] Periksa kontrol perubahan password dan akun pegawai tanpa memperluasnya menjadi klaim security audit.
- [x] Gunakan fixture/manual check atau tes terkait yang benar-benar memeriksa perilaku tersebut. Tes Example Laravel tidak dijadikan metrik kualitas proyek. Jika menemukan bug yang perlu diperbaiki, buat regresi terkecil sebelum perbaikan pada worktree sumber.
- [x] Hapus pengulangan Linked/Editable/Filtered/Validated pada draf. Perbaiki grammar dan biarkan URL website kosong sampai tersedia.

**Done:** pembaca mengetahui kontribusi backend pribadi; tidak ada atribusi seluruh aplikasi atau model ML kepada pemilik.

### Task 9: Tambahkan struktur bukti minimum pada portofolio

**Files:** ubah `src/data/portfolio.ts`, `src/components/ProjectDetailPage.tsx`, `src/styles.css`, dan `src/App.test.tsx`.

**Consumes:** jenis bukti dan kebutuhan presentasi Task 2–8. **Produces:** halaman detail yang mendukung jumlah hasil berbeda, catatan metodologi, dan resource links tanpa section kosong.

Schema minimum yang direncanakan, mempertahankan field lain:

```ts
type ProjectResultKind = 'evaluation' | 'verification' | 'scope' | 'capability'
// Tambahkan kind: ProjectResultKind pada setiap item achievements yang ada.
// Field tambahan pada interface Project; field lama tetap dipertahankan.
export interface Project {
  evaluation?: { methodology: string; limitations: string[] }
  artifacts?: { label: string; href: string }[]
}
```

- [x] Tambahkan tes perilaku sebelum kode UI: project tanpa evaluation/artifacts tidak menghasilkan heading kosong; result count tidak dipaksa empat; label jenis hasil terlihat; tombol website tetap setelah gallery.
- [x] Migrasikan `kind` pada seluruh hasil yang masih dipakai dalam task yang sama agar TypeScript tetap valid. Label publik: `Quality Evaluation`, `Engineering Verification`, `Project Scope`, `Delivered Capability`; semua label berada di data file.
- [x] Gunakan heading `Problem & Approach`, `Key Decisions & Contributions`, dan `Results & Evaluation`. Jangan menambah blok baru jika overview/contribution yang ditulis baik sudah menyampaikan isi tersebut.
- [x] Tampilkan peran singkat dekat judul sebelum galeri; hindari duplikasi peran yang tidak membantu di sidebar. Pertahankan tahun/timeline/tools yang relevan.
- [x] Render methodology/limitations dan resource links hanya ketika tersedia. Sumber valid menggunakan HTTPS atau path aset lokal; URL kosong dan protocol-relative tidak diterbitkan.
- [x] Pertahankan link detail, filter, back/next context, keyboard gallery, portrait layout, dan tombol `Visit Demo`. Jangan menambahkan external buttons ke kartu homepage.
- [x] Jalankan `npm test -- src/App.test.tsx` dan `npm run build`; pastikan kasus baru serta alur lama yang relevan lulus. Tidak membuat tes khusus hitungan kata.

**Done:** perubahan UI menyampaikan scope bukti dengan jelas, mendukung data yang belum lengkap, dan tidak memerlukan dependency baru.

### Task 10: Tulis ulang enam studi kasus dan pilihan proyek unggulan

**Files:** `src/data/portfolio.ts`, `docs/project-evidence-register.md`, dan penyesuaian ekspektasi `src/App.test.tsx` yang memang berubah.

**Consumes:** klaim terverifikasi Task 2–8 dan schema Task 9. **Produces:** copy final yang sesuai sumber; kekurangan evaluasi tetap terlihat secara ringkas.

- [x] Tulis description kartu sekitar 25–35 kata sebagai panduan editorial, bukan syarat tes. Awali dengan pengguna/masalah dan pekerjaan pribadi; jaga tinggi/kepadatan visual kartu melalui layout, bukan filler.
- [x] Susun overview dengan problem, konteks, dan scope. Pilih kontribusi yang menunjukkan keputusan beserta alasan. Gunakan jumlah hasil sesuai bukti; tidak perlu semua hasil berbentuk angka.
- [x] Ganti metrik usang hanya setelah hasil baru tervalidasi. Bila run baru gagal, jelaskan kegagalan dan tetap labeli hasil lama sebagai historis; jangan memilih angka terbaik tanpa metode.
- [x] WaspadAI: dekatkan batas benchmark dengan angka. UM RAG: pisahkan sumber kampus dan profil developer. Numora: pisahkan local runtime, aset tim, HOLD, dan status IRT. Bonjermgu: gabungkan tests/assertions. SIPARIH: tonjolkan competing approvals. SiDiKa: tonjolkan reporting/QC/catalog fixes.
- [x] Atur featured IDs menjadi `waspadai`, `sisdas-rag-assistant`, `numora-question-variants`. Jangan mengganti ID/route UM RAG hanya karena judul tampilannya sudah berubah.
- [x] Selaraskan skill labels dengan bukti. Default usulan: `LLM Applications`, `Retrieval-Augmented Generation`, `AI Automation`, `Software Engineering`; pertahankan Machine Learning/multi-agent sebagai kompetensi unggulan hanya jika bukti baru mendukung. Perubahan label ini merupakan rekomendasi plan terhadap pilihan lama.
- [x] Tinjau hero/about/SEO hanya untuk konsistensi positioning; tidak mengarang kredensial atau menambah gelar profesional. Experience dapat dipadatkan bila repo memberi bukti; rincian tim robot/praktikum yang tidak ada di enam repo tetap tidak ditebak.
- [x] Periksa setiap klaim menggunakan register; pertahankan batas material, hapus penyangkalan yang tidak menambah informasi, dan gunakan orang pertama.

**Done:** perekrut dapat menemukan masalah, peran, keputusan utama, hasil, dan bukti tanpa menyimpulkan sendiri dari daftar tools.

### Task 11: Tautkan artefak dan perjelas caption

**Files:** `src/data/portfolio.ts`; bila perlu `public/reports/projects/<project-id>.md`; perbarui provenance di `docs/project-content-sources.md`.

**Consumes:** hasil yang dapat dipublikasikan dan jenis galeri. **Produces:** resource links yang benar-benar bisa dibuka pengunjung, dengan data yang sesuai scope.

- [x] Pilih artefak paling membantu setiap proyek: evaluasi dan contoh abstention untuk AI; original/variant/check untuk Numora; contoh perhitungan atau failure-mode verification untuk software.
- [x] Utamakan URL publik sumber yang tersedia. Jika perlu laporan lokal, terbitkan ringkasan Markdown statis; jangan membangun report viewer atau menggandakan seluruh log.
- [x] Sertakan metode, tanggal/revisi yang layak dibuka, ukuran sampel, hasil, dan batasan. Tidak menautkan file `D:/...`, `docs/` yang tidak disajikan web, atau berkas ignored kepada pengunjung.
- [x] Perbarui caption Numora sebagai UI produk tim dengan data demo/interception; caption WaspadAI membedakan layar produk Android dari scope pribadi.
- [x] Pastikan tidak ada data pengguna atau klaim backend aktif yang hanya bersumber dari fixture UI. Pertahankan gambar terbaru; artefak tambahan tidak mengganti thumbnail/galeri pengguna secara otomatis.

**Done:** setiap link terbit menuju URL/aset yang ada; tidak ada tautan kosong atau bukti yang menyiratkan scope lebih luas.

### Task 12: Verifikasi konten, alur, dan tampilan dengan Playwright

**Files:** tes `src/App.test.tsx` yang sudah ada; bukti visual di `output/playwright/portfolio-content-audit/`.

**Consumes:** build Task 9–11. **Produces:** hasil pemeriksaan nyata pada browser desktop/mobile dan daftar isu yang sudah diselesaikan.

- [x] Jalankan `npm test` dan `npm run build`. Tidak menjalankan perintah lint rekaan; repo portofolio tidak memiliki script lint saat plan disusun.
- [x] Jalankan preview `npm run preview -- --port 4173`; gunakan Playwright CLI melalui wrapper skill atau `npx --package @playwright/cli playwright-cli`. `npx` tersedia; jangan menambahkan runner ke package.json.
- [x] Periksa homepage, `/projects`, dan enam `/projects/<id>` pada 1440×900 dan 390×844. Periksa tambahan lebar 360 pada halaman detail terpadat dan portrait WaspadAI.
- [x] Uji All/AI/Software/Others, empty state, direct URL/reload, unknown project, back link dengan filter, dan next project.
- [x] Periksa posisi tombol di bawah galeri, label `Visit Demo`, URL SIPARIH, ketiadaan tombol kosong SiDiKa/Numora, dan semua resource links lokal.
- [x] Periksa gambar decode, gallery arrows/dots/keyboard, caption panjang, mobile menu, fokus keyboard, reduced motion, dan tidak ada horizontal overflow/page errors.
- [x] Lakukan smoke `/certifications`: dua sertifikat homepage tetap benar, gambar courses tetap tampil. Periksa urutan experience tidak berubah akibat pekerjaan konten.
- [x] Simpan screenshot desktop/mobile halaman utama dan contoh detail AI/software, serta temuan teks untuk seluruh route. Perbaiki isu nyata lalu ulangi hanya pemeriksaan yang terdampak.

**Done:** tes/build lulus dan bukti browser menunjukkan konten terbaca, tautan berfungsi, serta preferensi UI lama tetap terpenuhi.

### Task 13: Tutup audit dan siapkan paket rilis

**Files:** perbarui `docs/project-content-sources.md`, checklist pada dokumen audit, register bukti, dan buat `docs/superpowers/verification/2026-10-21-project-content-audit.md` ketika implementasi diverifikasi.

**Consumes:** hasil Task 1–12. **Produces:** laporan selesai yang memisahkan implementasi tuntas dari evaluasi/data yang masih menunggu.

- [x] Cocokkan setiap butir backlog audit dengan task, perubahan, dan buktinya. Item tanpa data tetap terbuka dengan alasan serta kebutuhan spesifik.
- [x] Perbarui konvensi panjang 308 kata/five contributions/four results dalam provenance agar tidak bertentangan dengan implementasi baru.
- [x] Bandingkan status/hash repo sumber dengan baseline; identifikasi perubahan evaluasi yang disengaja dan pekerjaan pengguna yang tetap dipertahankan.
- [x] Tinjau diff final: tidak ada kredensial, raw traces, path mesin dalam konten publik, dependency baru yang tidak perlu, atau klaim tanpa dukungan.
- [x] Jika menyiapkan rilis container, jalankan `docker compose build` dari repo portofolio; build yang ada menjalankan tes dan production build. Catat jika Docker daemon belum tersedia, jangan klaim image sudah terbangun.
- [x] Dokumentasikan prosedur rilis yang sudah ada di `deploy/README.md`: checkout `/var/www/personal-web`, Compose project `personal-web`, port `127.0.0.1:8082`. Tidak mengubah host Nginx atau menjalankan Compose proyek lain untuk update konten.
- [x] Eksekusi push/deploy hanya dalam tahap rilis yang diminta pengguna. Setelah rilis, periksa `/health`, homepage, direct case-study route, aset laporan, serta layanan lain yang berbagi VPS sesuai runbook; simpan versi sebelumnya untuk rollback.

**Done:** status akhir dapat diaudit. "Konten portofolio selesai" tidak dipakai untuk menyembunyikan evaluasi wajib yang belum dilakukan; metrik pengguna yang belum diukur tetap tidak diklaim.

## 5. Dependensi eksternal dan keputusan saat eksekusi

| Kondisi | Pekerjaan yang tetap dapat dilanjutkan | Batas klaim / tindak lanjut |
| --- | --- | --- |
| Kredensial/quota provider tidak tersedia | Inspeksi, tes fixture, evaluasi offline, penulisan scope | Evaluasi live tetap terbuka; tidak mengubahnya menjadi hasil replay |
| Label evaluasi belum memadai | Menyiapkan rubric, mengaitkan jawaban dengan sumber, memperbaiki scorer | Catat asal label/independensi; jangan menyebut field accuracy |
| DB pengujian belum tersedia | Tes unit/offline dan pembacaan kontrak | Concurrency/integrasi tetap historis atau belum diverifikasi |
| SDK/emulator Android tidak tersedia | Adapter/API tests dan atribusi kode | Tidak mengklaim verifikasi perangkat atau Android end-to-end |
| Node/pnpm repo pusat Numora belum cocok | Inventaris dan tes generator Python | Setup runtime sebelum central integration tests; jangan mengubah engine requirement |
| Source berubah selama pekerjaan | Selesaikan analisis snapshot yang dibekukan | Refresh baseline sebelum menerbitkan angka versi baru |
| Tidak ada data penggunaan/dampak bisnis | Terbitkan hasil engineering yang terverifikasi | Dampak bisnis tidak diperkirakan dari kode |

Tidak perlu meminta ulang informasi yang sudah ada dalam repo. Pertanyaan lanjutan difokuskan pada fakta yang memang tidak dapat ditentukan, bukan izin rutin untuk pekerjaan read-only atau perbaikan yang sudah disepakati.

## 6. Kriteria selesai dan handoff

- [x] Semua enam studi kasus memiliki problem, scope pribadi, keputusan/alasan, hasil dengan jenis bukti yang jelas, dan batas yang material.
- [x] Angka publik cocok dengan register dan versi sumber; snapshot lama tidak disajikan sebagai hasil terbaru.
- [x] Evaluator yang diubah memiliki regresi kecil yang dapat dijalankan; tidak menambah test framework.
- [x] Prioritas homepage sesuai target AI/LLM dan kompetensi unggulan didukung studi kasus.
- [x] Semua konten personal tetap dikelola dari `src/data/portfolio.ts`.
- [x] Build/tes portofolio dan pemeriksaan Playwright yang relevan lulus.
- [x] Evaluasi atau fakta yang belum tersedia memiliki status terbuka yang spesifik; tidak ada angka pengganti rekaan.
- [x] Repo sumber dan layanan VPS tidak mengalami perubahan di luar scope yang tercatat.

**Metode pelaksanaan yang direkomendasikan:** eksekusi langsung bertahap dalam sesi yang sama, menggunakan `superpowers:executing-plans`. Mulai Task 1–2, lanjut WaspadAI/RAG/Numora, lalu implementasi portofolio setelah bukti cukup. Tahap peninjauan plan ini mendahului implementasi; tidak ada eksekusi produk yang telah dimulai oleh penyusunan dokumen.


Catatan penutupan: checkbox rilis menyatakan kebijakan/prosedur sudah ditinjau, bukan push/deploy telah dijalankan. Evaluasi/data yang belum tersedia tetap terbuka di auditbagian7 dan laporanverifikasi. Sourcepreservation dibandingkan dengan baselineakhir; portfolioUI/docs adalah perubahan yang disengaja.
