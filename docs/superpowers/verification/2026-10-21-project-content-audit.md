# Verifikasi audit konten portofolio

Tanggal penutupan: 22 Oktober 2026. Implementasi Task 1–13 selesai dalam cakupan audit, konten dan verifikasi lokal. Evaluasi produk yang belum selesai tetap terbuka. Tidak ada push, merge atau deployment VPS.

## Hasil implementasi

Enam studi kasus sekarang menjelaskan masalah, peran pribadi, keputusan, hasil dan batas bukti. Peran tampil sebelum galeri; sidebar mempertahankan tahun, timeline dan tools. Hasil memiliki label Quality Evaluation, Engineering Verification, Project Scope atau Delivered Capability. Jumlah hasil mengikuti bukti: lima proyek memiliki tiga hasil, SiDiKa dua. Tidak ada kuota tepat308 kata, lima kontribusi atau empat hasil.

Homepage menampilkan WaspadAI, UM RAG Assistant dan Numora. Skill labels mengikuti bukti aplikasi LLM/RAG, AI automation dan software engineering. Identitas, hero/about, kontak, kategori, experience dan gambar pengguna dipertahankan. Caption membedakan produk Android tim dan demo UI Numora dari kontribusi pribadi.

Seluruh konten personal tetap di `src/data/portfolio.ts`. Enam laporan snapshot berada di `public/reports/projects/`, ditautkan melalui field artifacts. Laporan hanya memuat ringkasan yang layak diterbitkan, tanpa kredensial, data warga, raw traces atau path lokal. Perubahan bukti berikutnya perlu memperbarui data dan snapshot laporan bersama.

## Pemetaan backlog

| Butir audit | Task dan perubahan | Bukti/status |
| --- | --- | --- |
| A1 masalah/nilai pengguna |10, enam ringkasan kartu dimulai dari pengguna dan pekerjaan pribadi |data portfolio; browser18 kombinasi |
| A2 individu/tim |2–8,10–11, peran dekat judul dan caption |register, diff sumber dan laporan publik |
| A3 jenis hasil |9–10, kind dan label publik |tes variable result/label |
| A4 Results & Evaluation |9, heading dan schema minimum |tes detail dan browser |
| A5 Bonjermgu tests/assertions |6,10,50/386 +26/328 menjadi76/714 |registerTask6; laporanBonjermgu |
| A6 SiDiKa grammar/repetisi |8,10, empat cerita kontribusi dan dua hasil |registerTask8;33 contract assertions |
| A7 corpus UM |4,10–11,38 kampus +1 developer |manifest corpus; laporanUM |
| A8 batas WaspadAI |3,10,18 synthetic cases dan6/6fallback dekat angka |challenge/live captures dalam register |
| A9 featured IDs |10, WaspadAI/UM/Numora tanpa mengganti routeUM |tes homepage dan browser |
| A10 kompetensi |10, headline skill mengikuti bukti; multi-agent bukan klaim delivered |data portfolio; hero/about tetap |
| A11 kuota editorial |9–11, jumlah fleksibel dan title alignment CSS |provenance diperbarui; build/browser |
| A12 batas material |10, klaim tanpa support diganti penjelasan metode/limit |hasil live degraded tetap terlihat |
| A13 artefak teknis |11, enam laporan Markdown statis |HTTP200 pada preview dan container |
| B1 versi sumber |1–8, snapshot/commit/hash |register dan manifest lokal |
| B2 atribusi |2–8, diff pribadi dan konteks tim |register per proyek |
| B3 aktif/rancangan |3–5,10, adapter/IRT/live dibedakan |limits publik dan register |
| B4 tes sumber |3–8, suite/fixture pada environment tercatat |hasil lokal; cakupan integrasi yang belum diuji tetap terbuka |
| B5 screenshot |2,11, thumbnail/galeri terbaru tetap |path/order dan byte aset tidak berubah; provenance demo |
| B6 register aman |1–8,13, ringkasan tanpa rahasia |review konten publik dan diff |
| C1 RAG baseline sama |4, dense/current memakai13queryembeddings identik |hit@1 12/13vs11/13; hit@3 13/13vs11/13 |
| C2 kualitas jawaban |4, rubric kelengkapan/sumber/abstention |5/13complete; kasus gagal tersimpan |
| C3 adjudikasi51 sinyal |3, satu AI reviewer |37supported,10error,4uncertain; bukan gold pakar |
| C4 WaspadAI live baru |3,4challenge+2smoke teks |6/6verifier404/fallback; statusDEGRADED |
| C5 latency dan biaya |3–4, completiontime tercatat |**Sebagian terbuka:** biaya/TTFT/produksi belum terukur |
| C6 analisis kegagalan |3–5,10–11, contoh konkret dan perubahan scorer |bukan tuning challenge untuk mengejar angka |
| C7 dampak pengguna |tidak ada sumber observasi |**Terbuka:** perlu studi/adopsi/timing nyata; tidak diklaim |

## Verifikasi frontend

- `npm test`: **44/44 lulus**, empat file. Dua tes baru diamati gagal sebelum implementasi, lalu lulus: result kinds/jumlah fleksibel/optional sections/peran, serta methodology dan penyaringan URL. Tes lama tetap memeriksa website setelah gallery, Visit Demo, navigasi, kategori, keyboard dan sertifikat.
- `npm run build`: TypeScript dan production build lulus. Tidak ada dependency/framework tambahan atau lint script rekaan.
- Playwright CLI menjalankan preview pada port4173. Sembilan route (homepage, koleksi, enam detail, certifications) diperiksa pada1440×900 dan390×844: **18 kombinasi lulus**. Tambahan360×844 untuk WaspadAI, UM dan Numora. Gambar decode, tidak ada horizontal overflow atau page error.
- Sepuluh catatan alur mencakup360px, All/AI/Software/Others dan empty state, filtered back/next, direct reload, unknown project, menu/Escape/focus, keyboard Tab, reduced/full motion. Galeri next/dot/ArrowLeft diperiksa di setiap detail untuk kedua viewport utama.
- Link SIPARIH tepat; Visit Demo tetap WaspadAI; SiDiKa/Numora tidak menerbitkan tombol kosong. Semua resource lokal menerimaHTTP200 dan berisi Markdown. Homepage tetap hanya Machine Learning dan IBM Data Science; courses images decode dan urutan experience tetap sama.
- Screenshot desktop/mobile homepage, WaspadAI dan Bonjermgu beserta tiga screenshot360px berada di `output/playwright/portfolio-content-audit/`. Hasil terstruktur: `browser-results.json`. Screenshot tambahan viewport Bonjermgu membantu memeriksa hierarki di ukuran asli.

Percobaan awal preview gagal karena PowerShell meneruskan argumen npm secara berbeda; `npm.cmd run preview -- --port 4173 --strictPort` memperbaiki invocation. Dua kegagalan harness browser berasal dari selector container sertifikat dan karakter em dash pada expected string yang rusak saat dipipe PowerShell; diperbaiki tanpa mengubah aplikasi atau menurunkan jumlah sertifikat/urutan yang diverifikasi. Log PowerShell UTF-16 dinormalisasi saat mengekstrak JSON hasil. Ini bukan perbaikan produk yang direkayasa untuk menutupi kegagalan.

## Paket container dan runbook

`docker compose build` berhasil, termasuk44 tes dan build produksi dalam Node24. Image akhir `sha256:98d59a59ae46efdffed7df6fb4a69edbf3ec60d7f84dd60c068389204855c397`. Container audit terpisah memakai port loopback acak; sepuluhHTTPchecks lulus: health, homepage, dua direct detail dan enam laporan. Container audit sudah dihapus; tidak menjalankan `compose up` atau merestart layanan pengguna. Bukti: `output/project-evidence/container-check.json` dan `docker-build.log`.

Runbook `deploy/README.md` tetap memakai `/var/www/personal-web`, projectCompose `personal-web`, binding `127.0.0.1:8082`, tanpa perubahan hostNginx atau Compose proyek lain. Tahap rilis terpisah: simpan revision/image sebelumnya, tarik hanya commit yang disetujui, build, `docker compose up -d --wait`, periksa health/homepage/directroute/report dan domain lain yang berbagiVPS. Prosedur rollback rilis konten ditambahkan di runbook. **Rilis belum dieksekusi.**

## Keputusan dan pekerjaan terbuka

1. Evaluasi WaspadAI/RAG tetap degraded; tidak mengganti model atau memilih hanya hasil terbaik untuk menyajikan layanan sehat. Biaya dan kualitas lapangan belum tersedia. Perlu konfigurasi provider yang valid dan evaluasi independen berikutnya.
2. Android test belum berjalan akibat dependency/cache/disk; perlu environment memadai dan pengujian perangkat. Numora central memerlukan Node24/pnpm12.6.0 dan DB/Redis pengujian terisolasi. Tidak mengklaim E2E selesai.
3. SIPARIH belum menguji Ghostscript nyata atau routingNginx produksi. Bonjermgu hanya selectedfeature/reference, bukan semua aturan pemberi pembiayaan.
4. SiDiKa memiliki temuan prioritas tinggi pada recovery handler dan validasi input yang belum diperbaiki. Klaim password dibatasi pada perubahan profil saat login. Sebelum rilis aplikasi SiDiKa berikutnya, tulis regresiLaravel dan perbaiki pada worktree terisolasi. Ini bukan penghambat build situs portofolio statis; tidak ada deployment aplikasiSiDiKa dalam pekerjaan ini.
5. Dampak pengguna/bisnis, persetujuan akademik, kalibrasiIRT dan learninggains tidak dapat disimpulkan dari code/tests/inventaris. Tetap terbuka, tanpa angka pengganti.

Review akhir dilakukan sendiri sesuai larangan delegasi dalam plan, bukan review independen. Lima ReviewFocus diperiksa: versi/overlay, structuredfacts/emptylabels, providerfailures/denominator, variable results/resources, serta mobile/navigation. Tidak ada blocker frontend baru yang ditemukan. Perbaikan backend sumber di luar audit konten tidak dilakukan; batasnya tetap disebut di atas. Tidak ada minor frontend yang sengaja ditunda.

## Pelestarian workspace

Implementasi diuji dalam worktree `audit/portfolio-content-20261022`, dari baseline portofolio `d1eee19`. Checkpoint implementasi `bc7fde9` dan `5ba2fa4`; checkpoint penutupan dicatat di ledger. File hasil disalin kembali ke working tree pengguna tanpa branch switch/merge/reset/stash. Delapan role repo sumber dipertahankan beserta overlay pengguna; perubahan yang disengaja hanya konten/UI/dokumentasi/laporan di portofolio. Worktree dan bukti lokal dipertahankan agar dapat ditinjau; tidak membersihkan hasil evaluasi yang belum diterbitkan.
