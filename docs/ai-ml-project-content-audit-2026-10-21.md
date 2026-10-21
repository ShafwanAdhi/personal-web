# Audit Konten Proyek Portofolio AI/ML

Tanggal: 21 Oktober 2026  
Pemilik: Shafwan Adhi / Shafwanadhi  
Status: catatan audit dan rekomendasi; perubahan website belum diterapkan.

## 1. Tujuan dan cakupan

Menilai apakah penjelasan proyek membantu perekrut memahami relevansi kandidat untuk posisi junior AI/LLM engineer dan ML engineer. Fokus audit adalah kejelasan masalah, kontribusi pribadi, keputusan teknis, evaluasi, hasil, dan bukti.

Bahan yang diperiksa:

- Enam proyek dalam [`src/data/portfolio.ts`](../src/data/portfolio.ts).
- Struktur [`ProjectDetailPage.tsx`](../src/components/ProjectDetailPage.tsx), kartu proyek, dan pilihan proyek unggulan.
- [`project-content-sources.md`](project-content-sources.md).
- Paket konteks dan register bukti di `D:/project_context`.
- Publikasi 24 praktisi: portofolio, studi kasus, tulisan teknis, proyek terbuka, dan materi riset/pembelajaran.

Pembanding bukan sampel statistik dan bukan semuanya portofolio perekrutan. Angka pada situs pembanding merupakan hasil yang mereka laporkan; eksperimennya tidak direproduksi. Audit ini tidak menjalankan ulang seluruh tes atau evaluasi proyek sumber. Hasil pengujian yang disebut di bawah mengikuti register bukti dan tanggal/revisi aslinya.

## 2. Penilaian dari sudut perekrutan

Portofolio memberi alasan untuk mempertimbangkan wawancara awal kandidat junior AI/LLM engineer. Bukti terkuat berada pada pembangunan aplikasi, integrasi AI, penanganan kegagalan, pengujian, dan deployment.

Bukti untuk posisi yang berfokus pada pelatihan dan siklus model ML masih perlu diperkuat. Halaman saat ini belum cukup menunjukkan pemilihan data, baseline model, pembagian evaluasi, kontrol kebocoran data, eksperimen, dan analisis kesalahan model. Ini merupakan batas bukti yang ditampilkan, bukan kesimpulan tentang kemampuan pemilik.

| Target posisi | Sinyal yang tersedia | Bukti yang perlu diperkuat |
| --- | --- | --- |
| Junior AI/LLM Engineer | Integrasi API, retrieval, guardrails, aplikasi, deployment | Kualitas end-to-end, analisis kegagalan, latency, biaya |
| Applied AI Engineer | Masalah produk dan alur AI yang konkret | Keberhasilan tugas pengguna dan pembanding keputusan desain |
| ML Engineer berfokus training | Belum cukup ditunjukkan oleh studi kasus yang ada | Data split, baseline, eksperimen, evaluasi model, reproduksibilitas |
| Research Engineer | Minat riset dan eksperimen disebut | Pertanyaan riset, reproduksi, ablation, analisis hasil |

## 3. Pola penjelasan profesional

Pola yang direkomendasikan:

**Masalah konkret → tanggung jawab pribadi → keputusan beserta alasan → hasil pengujian → keterbatasan → bukti.**

Contoh pembanding paling relevan:

- **Amr Mohammed / DocuMind:** menunjukkan baseline, diagnosis masalah ranking, perubahan retrieval, dan hasil pada dataset yang sama. Multi-hop recall@10 dilaporkan dari 0,36 menjadi 0,57. Penurunan pada cutoff tertentu dan keterbatasan kelompok kecil tetap ditampilkan. Eksperimen BM25 yang tidak memberi peningkatan berarti juga dijelaskan. [Sumber](https://www.amr-mohammed.com/documind).
- **Ahmed Mohammed / DiffusionOOD:** melaporkan 99,03 ± 0,07% AUROC dari tiga seed, peningkatan 6,5 percentage points terhadap baseline, dan batas eksperimen binary airplane-vs-rest dalam CIFAR. Angkanya tidak disamakan dengan benchmark OOD multiclass. [Sumber](https://ahmed-3m.github.io/case-studies/diffusion-ood/).
- **Daniel Bourke / Nutrify:** mendahulukan kegunaan produk, kemudian menjelaskan pembagian tanggung jawab ML, iOS, dan desain. Ini relevan untuk proyek tim seperti Numora dan aplikasi Android WaspadAI. [Sumber](https://www.mrdbourke.com/nutrify-launch/).
- **Vicki Boykis / Viberary:** membahas arsitektur, biaya, pemeliharaan, dan alasan menghentikan layanan. Keputusan operasional dapat menunjukkan kematangan engineering tanpa klaim pertumbuhan pengguna. [Sumber](https://vickiboykis.com/2024/01/05/retro-on-viberary/).
- **Hamel Husain:** mendorong kriteria keberhasilan sesuai tugas, penilaian manusia, validasi evaluator, dan analisis kesalahan. Skor generik tanpa definisi tidak cukup. [Sumber](https://hamel.dev/blog/posts/llm-judge/).

## 4. Temuan lintas proyek

### 4.1. Jenis bukti tercampur dalam Impact & Achievements

| Contoh | Jenis bukti | Batas interpretasi |
| --- | --- | --- |
| 1.165 document chunks | Inventaris indeks | Tidak membuktikan jawaban benar |
| 746 generator configurations | Cakupan aset repo tim | Bukan jumlah karya pribadi atau soal yang terkalibrasi |
| 82 tests / 818 assertions | Pengujian software | Berlaku pada revisi dan ruang lingkup pengujian |
| 98,15% critical-signal recall | Evaluasi komponen | Bukan akurasi end-to-end pemeriksaan fakta |
| Tiga peran pengguna | Kemampuan aplikasi | Bukan bukti adopsi atau dampak |
| Penghematan waktu atau peningkatan kualitas | Dampak terukur | Memerlukan pengukuran tersendiri |

Rekomendasi: gunakan judul seperti **Results & Evaluation**, lalu jelaskan jenis bukti. Jumlah hasil tidak perlu dipaksa empat pada setiap proyek.

### 4.2. Keputusan teknis kurang disertai alasan

Daftar teknologi menjelaskan komponen, tetapi belum cukup menunjukkan pertimbangan engineer. Pilih dua atau tiga keputusan utama dan uraikan masalah, alternatif, alasan, serta cara memeriksanya.

Contoh UM RAG Assistant: jelaskan alasan memakai structured facts untuk pertanyaan daftar/jumlah. Jangan menyatakan jalur itu meningkatkan kualitas sebelum ada pembanding. Alasan desain dan hasil eksperimen harus dibedakan.

### 4.3. Panjang identik menimbulkan pengulangan

Semua enam proyek memiliki tepat 308 kata pada gabungan description, overview, deskripsi kontribusi, dan deskripsi hasil. Setiap proyek juga memiliki lima kontribusi dan empat hasil. Label, metadata, dan caption tidak termasuk hitungan.

Konvensi ini terdokumentasi dalam `docs/project-content-sources.md`. Pada Bonjermgu, jumlah tes dan assertions dari satu run ditampilkan terpisah. Pada SiDiKa, bagian hasil mengulang kemampuan yang sudah ada di bagian kontribusi.

Rekomendasi audit: pertahankan panjang ringkasan kartu yang mendekati sama. Untuk detail, gunakan panjang sesuai bukti dan hilangkan pengulangan. Ini usulan perubahan terhadap preferensi panjang seragam sebelumnya; belum diterapkan.

### 4.4. Terlalu banyak penyangkalan yang tidak membantu

Keterangan seperti "not financial certification" atau "not a penetration-test result" dapat memecah fokus ketika klaim tersebut memang tidak diajukan.

Tetap letakkan batas material di dekat angka. Satukan ruang lingkup pengujian dalam catatan metodologi yang jelas. Jangan menghapus batas penting seperti penggunaan stub, data sintetis, atau revisi pengujian historis.

### 4.5. Kontribusi pribadi dan tampilan produk tim perlu dihubungkan

Galeri WaspadAI menampilkan bagian aplikasi Android di luar lingkup kontribusi individu. Galeri Numora menampilkan produk student/admin, sedangkan kontribusi utama berada pada generator, validasi, dan integrasi assessment.

Caption perlu menjelaskan hubungan gambar dengan kontribusi. Screenshot membuktikan tampilan yang ditangkap, bukan kepemilikan seluruh produk, kualitas AI, atau keberhasilan backend.

### 4.6. Artefak pendukung sulit diperiksa

Schema proyek saat audit hanya memiliki tautan website khusus proyek. Belum tersedia tautan khusus kode, arsitektur, atau laporan evaluasi.

Rekomendasi: tambahkan artefak terpilih yang boleh dibuka. Repo privat dapat didukung diagram, laporan yang disanitasi, contoh input-output, atau cuplikan kode. Tidak perlu memublikasikan seluruh repo agar studi kasus berguna.

### 4.7. Pilihan proyek unggulan dan label kompetensi

Pilihan saat audit: WaspadAI, Numora, SIPARIH.

Rekomendasi untuk target AI/LLM:

1. WaspadAI.
2. UM RAG Assistant.
3. Numora.

Tiga proyek software lainnya tetap menjadi bukti pendukung engineering.

Label **Multi Agent System** belum disertai studi kasus yang menjelaskan pembagian agen, koordinasi, dan manfaat desain tersebut. Beberapa pemanggilan model tidak otomatis membuktikan sistem multi-agent. Jika masih menjadi minat, bedakan dari kompetensi yang telah ditunjukkan.

## 5. Audit per proyek

### 5.1. WaspadAI

**Nilai utama:** investigasi pesan, tautan, dan screenshot mencurigakan dengan bukti, guardrails, dan respons konservatif ketika dukungan tidak cukup.

**Bukti tersedia:**

- 98,15% critical-signal recall pada 47 kasus berlabel dalam benchmark 100 kasus sintetis, adversarial, dan regresi.
- Metrik tersebut mengevaluasi ekstraksi sinyal deterministik, bukan akurasi kesimpulan seluruh pipeline.
- Terdapat 51 deteksi sinyal tambahan di luar label yang diharapkan. Perlu adjudikasi manusia; jangan otomatis menyebut semuanya false positive.
- Replay response validity 100% memakai provider model/search yang di-stub; 20 fixture gambar dikecualikan.
- Rulebook 255 chunks, 17 deterministic triggers, dan 11 pengujian API produk dengan upstream yang di-mock.

**Perbaikan tulisan:**

- Dahulukan pengguna, persoalan, dan keputusan yang dibantu.
- Jelaskan alasan memisahkan aturan investigasi dari bukti faktual.
- Hubungkan fallback `UNVERIFIED` dengan risiko kesimpulan tanpa bukti.
- Pisahkan kepemilikan AI service/web demo dari kontribusi Android dalam tim.
- Tampilkan contoh berhasil, gagal, dan abstention.

**Evaluasi yang masih diperlukan:** precision sinyal, kualitas kesimpulan end-to-end pada kasus baru, ketepatan abstention, kesimpulan aman yang keliru, latency, dan biaya live.

Baseline lama berisi delapan kasus live dan melaporkan classification accuracy 50%. Jangan membandingkannya dengan signal recall 98,15% sebagai peningkatan: tugas, sampel, dan metode berbeda. Evaluasi replay tidak menggantikan pengujian provider live.

**Draf ringkasan, belum dipasang:**

> I built an AI verification service that helps people investigate suspicious messages, links, and screenshots using retrieved evidence, with an UNVERIFIED fallback when support is insufficient.

**Sumber lokal:** `D:/project_context/waspadai-api.md`, paket `waspadai-mobile/`, dan register bukti terkait.

### 5.2. UM RAG Assistant

**Nilai utama:** pencarian informasi kampus melalui structured facts, document retrieval, dan jawaban dengan sumber yang dapat diperiksa.

**Bukti tersedia:**

- 1.165 chunks pada lima collections.
- 229 structured facts.
- 48 backend tests pada run lokal terdokumentasi.
- Registry 39 PDF: 38 sumber kampus dan satu profil developer yang disembunyikan dari tampilan dokumen/konteks publik.
- Evaluation set 13 kasus dan tooling evaluasi.

**Batas penting:** belum ditemukan output run evaluasi tersimpan. Independensi 13 pertanyaan dari kueri pengembangan belum terdokumentasi. Satu kejadian fallback provider tidak membuktikan tingkat keandalan. Tidak ada bukti pelatihan/fine-tuning model dalam sumber yang diperiksa.

**Perbaikan tulisan:**

- Tonjolkan alasan structured-fact-first routing.
- Gunakan 38 ketika menyatakan jumlah sumber PDF kampus.
- Posisikan jumlah chunks sebagai skala indeks, bukan kualitas jawaban.
- Jelaskan citations sebagai kemampuan yang masih perlu diuji kesesuaian dukungannya.

**Evaluasi yang masih diperlukan:** baseline retrieval pada pertanyaan sama, source hit/recall dengan definisi jelas, kelengkapan fakta, dukungan kutipan terhadap klaim, abstention, latency p50/p95, time to first token terpisah dari waktu selesai, dan biaya.

Bekukan set uji yang terpisah dari tuning. Laporkan hasil per jenis pertanyaan dan analisis kegagalan, bukan hanya satu skor gabungan.

**Draf ringkasan, belum dipasang:**

> I built a campus information assistant that answers questions from university documents, combining structured-fact lookup, document retrieval, and source-linked responses in a deployed web application.

**Sumber lokal:** `D:/project_context/evidence.md`, `project.json`, dan `missing-data.md` pada akar paket konteks.

### 5.3. Numora Assessment & Question Variants

**Nilai utama:** memperluas variasi soal matematika dengan jawaban, penjelasan, reproduksibilitas, dan jejak versi yang dapat diperiksa.

**Bukti tersedia:**

- 746 dari 820 originals memiliki konfigurasi; angka ini inventaris repo tim.
- Engine awal dibuat kontributor lain. Kontribusi pribadi mencakup perluasan generator dan tooling terkait.
- 186 tes Python lokal; tidak mencakup seluruh aplikasi, database produksi, atau cloud.
- 1.600 seed checks pada 16 soal revisi dan 320 distinct candidates dalam audit tersebut.
- 215 varian manual dalam workflow internal pada 70 originals; bukan bukti kalibrasi psikometrik.
- Fondasi persistence/integrasi IRT dan desain self-adjustment; belum membuktikan model IRT yang terkalibrasi atau manfaat belajar.

**Perbaikan tulisan:**

- Jelaskan masalah penyediaan variasi soal sebelum istilah assessment/IRT.
- Gunakan kata "extended" untuk generator dan nyatakan konteks tim.
- Bedakan implementasi, fondasi integrasi, dan rancangan.
- Gunakan satu soal asli, dua variasi, jawaban, dan pemeriksaan matematis sebagai bukti yang mudah dipahami.
- Jelaskan bahwa galeri produk menggunakan fixture demo sintetis dan request interception; tampilan IRT bukan bukti backend/calibration berjalan.

**Bukti yang masih diperlukan:** cakupan kontribusi yang teratribusi, penilaian konten oleh pihak kurikulum, pengujian integrasi aktual, dan pengukuran waktu authoring jika ingin mengklaim efisiensi. Klaim learning outcomes atau psikometrik memerlukan studi tersendiri.

**Draf ringkasan, belum dipasang:**

> I extended Numora’s mathematics question generators and built validation tools to produce reproducible variants, inspect answer keys, and preserve source and configuration versions.

**Sumber lokal:** `D:/project_context/numora-question-variants/evidence.md`, `missing-data.md`, dan `screenshoot/README.md`.

### 5.4. SIPARIH

**Nilai utama:** menjaga akses dokumen privat dan konsistensi persetujuan ketika permintaan bersaing.

**Bukti tersedia:** 82 tests/818 assertions pada run historis; pengujian concurrency terpisah menggunakan dua proses dan MySQL/MariaDB menghasilkan satu persetujuan diterima, satu ditolak, dan satu approval log.

**Perbaikan tulisan:** hubungkan authorized delivery dengan akses dokumen; hubungkan transaksi/locking dengan pencegahan persetujuan ganda; jelaskan masalah kompatibilitas PDF yang diselesaikan.

**Batas penting:** HEAD aplikasi lebih baru daripada run historis. Pengujian belum dijalankan ulang dalam audit konten ini. Tes tersebut tidak membuktikan throughput, uptime, atau akurasi penempatan tanda tangan.

**Draf ringkasan, belum dipasang:**

> I strengthened SIPARIH’s village document workflow with authorized file delivery, PDF compatibility handling, and transactional approval checks, including a controlled test of competing approval requests.

**Sumber lokal:** `D:/project_context/siparih/evidence.md` dan laporan pengujian yang dirujuknya.

### 5.5. Bonjermgu Financing Portal

**Nilai utama:** konsistensi perhitungan pembiayaan berdasarkan tarif, asuransi, biaya, refund, dan pembulatan.

**Bukti tersedia:** 50 tests dan 386 assertions dari satu run unit simulation lokal pada 20 Oktober 2026; sumber CSV 26.791 baris; workflow tiga peran.

**Perbaikan tulisan:**

- Gabungkan tests dan assertions sebagai satu hasil.
- Jelaskan kasus perhitungan sulit dan nilai rujukannya.
- Posisikan jumlah baris CSV sebagai inventaris sumber.
- Prioritaskan cerita aturan domain dan verifikasi perhitungan.

**Batas penting:** run unit tidak memverifikasi seluruh workflow database atau produksi. Baris CSV tidak sama dengan jumlah kendaraan unik, pengguna, atau adopsi. Aplikasi bukan bukti model prediksi risiko kredit atau otomatisasi keputusan kredit.

**Draf ringkasan, belum dipasang:**

> I built a financing portal with server-side calculation rules, role-specific workflows, and reference-based tests covering pricing, insurance, fees, refunds, and rounding.

**Sumber lokal:** `D:/project_context/bonjermgu/evidence.md` dan direktori `verification/`.

### 5.6. SiDiKa Camera Retail Management

**Nilai utama:** kontribusi backend dalam produk tim, terutama konfigurasi katalog, akun pegawai, navigasi QC, dan koreksi laporan.

**Perbaikan tulisan:**

- Perbaiki "a application" menjadi "an application".
- Hapus kalimat abstrak seperti "I connected records with content".
- Tonjolkan koreksi perbandingan cabang berdasarkan net profit.
- Jelaskan bahwa filter QC dipertahankan saat pagination.
- Hindari mengulang kemampuan sebagai empat hasil berlabel Linked/Editable/Filtered/Validated.
- Tempatkan password hashing dan validasi sebagai kontrol akun, tanpa klaim security audit.

**Batas penting:** belum ada metrik adopsi atau produktivitas yang dapat disimpulkan dari kode. Heuristik stok dalam aplikasi lebih luas tidak membuktikan kontribusi model ML pribadi. URL publik belum diisi; pengguna sebelumnya menyatakan akan mengisinya nanti.

**Draf ringkasan, belum dipasang:**

> I contributed backend features to a team-built camera retail platform, including employee-linked accounts, editable catalog settings, persistent quality-control filters, and corrected profit reporting.

**Sumber lokal:** `D:/project_context/sidika/project.json`, `evidence.md`, dan `missing-data.md`.

## 6. Struktur studi kasus yang direkomendasikan

Di dekat judul, berikan ringkasan masalah, kontribusi pribadi, dan bukti terkuat. Galeri dapat dipertahankan; posisi tombol website di bawah gambar mengikuti preferensi pengguna sebelumnya.

Urutan narasi:

1. **Problem:** pengguna, kebutuhan, dan kendala.
2. **My Role:** kontribusi pribadi, konteks tim, status implementasi.
3. **Key Decisions:** dua atau tiga keputusan beserta alasan dan tradeoff.
4. **Results & Evaluation:** hasil, pembanding, metode, serta cakupan.
5. **Limitations & Next Steps:** kegagalan yang diketahui dan langkah berikutnya.
6. **Artifacts:** demo, kode/cuplikannya, arsitektur, dan laporan evaluasi.

Tidak semua perlu menjadi section terpisah. Gabungkan bagian untuk proyek sederhana. Pertahankan kata ganti orang pertama dalam copy berbahasa Inggris.

Setiap metrik harus mencatat definisi, ukuran dan asal sampel, baseline bila relevan, independensi set uji, konfigurasi/commit, tanggal, hasil, batasan, dan lokasi artefak. Perubahan baseline hanya boleh dibandingkan jika metode dan kondisi cukup sebanding.

## 7. Backlog perbaikan

Status diperbarui 22 Oktober 2026. Task 1-13 ditelusuri dalam laporan verifikasi; item yang memerlukan data/evaluasi lanjutan tetap terbuka.

### A. Perbaikan konten dengan bukti yang sudah tersedia

- [x] Perjelas masalah dan nilai pengguna pada enam ringkasan proyek.
- [x] Perjelas kontribusi individu dan konteks tim pada overview serta caption.
- [x] Pisahkan inventaris, hasil tes, evaluasi AI, dan dampak pengguna.
- [x] Pertimbangkan Results & Evaluation sebagai pengganti Impact & Achievements.
- [x] Gabungkan 50 tests/386 assertions Bonjermgu sebagai satu hasil.
- [x] Perbaiki grammar dan repetisi SiDiKa.
- [x] Perjelas 38 sumber kampus dari registry total 39 PDF UM RAG Assistant.
- [x] Pertahankan batas benchmark WaspadAI langsung di dekat metrik.
- [x] Tampilkan WaspadAI, UM RAG Assistant, dan Numora sebagai proyek unggulan untuk target AI/LLM.
- [x] Selaraskan label kompetensi dengan bukti; perjelas status minat multi-agent.
- [x] Tinjau target tepat 308 kata dan jumlah kontribusi/hasil yang seragam.
- [x] Kurangi penyangkalan yang tidak relevan tanpa menghilangkan batas material.
- [x] Tambahkan jalur menuju artefak teknis yang boleh dipublikasikan.

### B. Verifikasi melalui repo sumber

- [x] Catat branch/commit sumber setiap klaim.
- [x] Periksa kontribusi pribadi melalui diff, riwayat, dokumentasi, dan klarifikasi kolaborasi bila diperlukan.
- [x] Bedakan fitur aktif, kode belum terhubung, rancangan, dan rencana.
- [x] Jalankan pengujian relevan pada checkout dan lingkungan yang tercatat.
- [x] Cocokkan screenshot dengan versi, fixture, dan layanan yang benar-benar dijalankan.
- [x] Perbarui register bukti tanpa menyalin kredensial atau data pengguna ke materi publik.

### C. Evaluasi baru

- [x] Jalankan baseline dan konfigurasi UM RAG Assistant pada set uji yang sama, terpisah dari tuning.
- [x] Simpan hasil retrieval, kelengkapan fakta, dukungan kutipan, dan abstention.
- [x] Adjudikasi 51 deteksi sinyal tambahan WaspadAI sebelum klaim precision.
- [x] Evaluasi pipeline WaspadAI live pada kasus baru berlabel.
- [ ] Ukur latency dan biaya AI dengan metode serta konfigurasi yang jelas.
- [x] Periksa contoh kegagalan dan jelaskan perubahan yang dihasilkan.
- [ ] Ukur dampak pengguna hanya jika ada observasi atau studi yang mendukung.

## 8. Apa yang dibantu oleh repo lengkap

Repo sumber lengkap membantu memverifikasi klaim, menemukan keputusan teknis yang belum diceritakan, mengatribusikan kontribusi, menjalankan tes, merancang evaluasi, dan menulis studi kasus berdasarkan implementasi aktual.

Paket `D:/project_context` sudah berisi bukti dan materi pendukung. Folder paket yang diperiksa tidak otomatis sama dengan checkout sumber lengkap.

Untuk setiap proyek, informasi yang paling berguna:

| Informasi | Kegunaan |
| --- | --- |
| Path lokal atau URL repo yang dapat diakses | Memeriksa implementasi aktual |
| Branch/commit yang mewakili versi portofolio | Menghindari pencampuran hasil dari versi berbeda |
| Repo terkait untuk frontend/backend/mobile | Memeriksa kontrak dan integrasi antarlayanan |
| Lingkup kontribusi dan identitas commit yang relevan | Memisahkan hasil individu dari hasil tim |
| README, perintah menjalankan, dan contoh konfigurasi | Menyiapkan lingkungan yang dapat direproduksi |
| Fixture/data demo dan expected results | Menjalankan pemeriksaan tanpa data pengguna asli |
| Test suite, evaluation set, dan laporan yang sudah ada | Memeriksa klaim dan mengisi kekurangan evaluasi |
| Status demo/deployment | Membedakan lokal, demo publik, dan penggunaan produksi |

Jika repo sudah tersedia secara lokal, cukup berikan pemetaan proyek ke path-nya. Tidak perlu menyiapkan ulang dokumen yang bisa ditemukan dalam repo.

### Yang tidak bisa diperoleh dari kode saja

- Jumlah pengguna aktif, adopsi, kepuasan, atau waktu kerja yang dihemat.
- Dampak bisnis atau learning outcomes tanpa pengukuran.
- Kualitas model pada kasus nyata tanpa sampel, label, dan evaluasi yang sesuai.
- Pembagian kerja informal yang tidak terekam dalam riwayat/dokumentasi.
- Status layanan produksi hanya berdasarkan keberadaan Dockerfile atau konfigurasi deployment.

Sebagian evaluasi juga memerlukan layanan eksternal, runtime/dependensi, atau data berlabel yang belum tersedia. Kekurangan tersebut harus dicatat sebagai pekerjaan tersisa, bukan diisi dengan angka perkiraan.

Alur lanjutan yang disarankan: inventaris repo → verifikasi klaim dan kontribusi → pengujian relevan → evaluasi yang memungkinkan → pembaruan register bukti → penulisan ulang konten → pemeriksaan halaman desktop/mobile dengan Playwright bila website diubah.

## 9. Daftar 24 pembanding

| Praktisi dan sumber | Jenis bahan dan pola yang dipelajari |
| --- | --- |
| [Eugene Yan](https://eugeneyan.com/about/) | Profil profesional: tanggung jawab teknis dan hasil produk/operasional |
| [Hamel Husain](https://hamel.dev/blog/posts/llm-judge/) | Metodologi: evaluasi sesuai tugas, penilaian manusia, analisis kesalahan |
| [Jason Liu / Instructor](https://github.com/567-labs/instructor) | Alat terbuka: tujuan jelas dan contoh yang dapat dijalankan |
| [Chip Huyen / lazynlp](https://github.com/chiphuyen/lazynlp) | Alat data: tujuan, input-output, dan cakupan pemrosesan |
| [Shreya Shankar / DocETL](https://www.docetl.org/) | Sistem riset: masalah dokumen, aplikasi, dan artefak riset |
| [Goku Mohandas / Made With ML](https://madewithml.com/) | Materi engineering: pengujian data, model, kode, dan operasi |
| [Ben Frederickson](https://www.benfrederickson.com/approximate-nearest-neighbours-for-recommender-systems/) | Benchmark historis: tradeoff kualitas/kecepatan dan kondisi pengukuran |
| [Vicki Boykis / Viberary](https://vickiboykis.com/2024/01/05/retro-on-viberary/) | Retrospektif: arsitektur, biaya, pemeliharaan, keputusan operasional |
| [Andrej Karpathy / nanoGPT](https://github.com/karpathy/nanoGPT) | Implementasi terbuka: scope dan reproduksibilitas |
| [Lilian Weng](https://lilianweng.github.io/) | Catatan riset: struktur penjelasan, diagram, referensi |
| [Simon Willison / LLM](https://llm.datasette.io/en/stable/) | Alat dan dokumentasi: penggunaan, keluaran, dan kemampuan nyata |
| [Amr Mohammed / DocuMind](https://www.amr-mohammed.com/documind) | Studi kasus: baseline, diagnosis, hasil, eksperimen negatif |
| [Youssef Ibrahim](https://yibrahim.com/) | Portofolio: kebutuhan pengguna AI dan penanganan kegagalan backend |
| [Ahmed Mohammed / DiffusionOOD](https://ahmed-3m.github.io/case-studies/diffusion-ood/) | Studi kasus: baseline, variasi hasil, batas eksperimen |
| [Muzzamil Rasully](https://muzzamilrasully.com/) | Portofolio: implementasi, temuan, dan bukti |
| [Liam Geron / RAG Evaluation](https://liamge.github.io/projects/rag-eval/) | Studi kasus: baseline retrieval; tabel hasil aktual tetap perlu diperiksa |
| [Jeremy Jordan](https://www.jeremyjordan.me/ml-projects-guide/) | Panduan: masalah, data, baseline, evaluasi, deployment |
| [Max Woolf / simpleaichat](https://github.com/minimaxir/simpleaichat) | Alat terbuka: tujuan dan contoh minimal |
| [Jay Alammar / Ecco](https://github.com/jalammar/ecco) | Alat visual: contoh untuk menjelaskan perilaku model |
| [Sebastian Raschka](https://github.com/rasbt/LLMs-from-scratch) | Implementasi pembelajaran: tahapan dan scope yang jelas |
| [Brandon Rohrer / Pendulum](https://www.brandonrohrer.com/pendulum.html) | Eksperimen: tujuan dan perilaku sistem yang mudah diperiksa |
| [Eric Jang](https://blog.evjang.com/) | Tulisan teknis: alasan desain dan perubahan keputusan |
| [Alexey Grigorev / minsearch](https://github.com/alexeygrigorev/minsearch) | Alat pencarian: kompleksitas terbatas sesuai kebutuhan |
| [Daniel Bourke / Nutrify](https://www.mrdbourke.com/nutrify-launch/) | Produk/studi teknis: manfaat pengguna dan pembagian kontribusi |

## 10. Kriteria penyelesaian tindak lanjut

- Setiap proyek menjelaskan masalah, kontribusi pribadi, keputusan utama, dan bukti.
- Klaim implementasi dapat ditelusuri ke kode atau artefak yang relevan.
- Angka memiliki definisi, cakupan, tanggal/revisi, dan sumber.
- Tidak ada hasil tim yang disajikan sebagai karya individu tanpa dasar.
- Tidak ada inventaris atau jumlah tes yang disajikan sebagai akurasi AI atau dampak pengguna.
- Hasil yang belum tersedia tetap ditandai belum diukur.
- Copy publik memakai orang pertama dan tetap mudah dipahami pembaca nonteknis.
- Perubahan website, bila dilakukan, diperiksa pada desktop/mobile dan alur terkait menggunakan Playwright.


## Penutupan implementasi, 22 Oktober 2026

Task 1-13 selesai untuk audit sumber, evaluasi yang tersedia, implementasi konten dan verifikasi lokal. Ini bukan penerimaan produk AI atau klaim semua evaluasi lengkap. Lihat `docs/superpowers/verification/2026-10-21-project-content-audit.md` untuk pemetaan backlog, hasil browser/container dan pekerjaan terbuka.

Biaya AI belum terukur; latency yang tersedia hanya completion time dengan sampel kecil, bukan TTFT/produksi. Dampak pengguna belum memiliki observasi. WaspadAI/RAG live degraded, Android E2E dan Numora central integration masih menunggu. SiDiKa memiliki temuan recovery yang belum diperbaiki; tidak menjadi klaim keamanan dalam portofolio. Tidak ada push atau deploy pada tahap ini.
