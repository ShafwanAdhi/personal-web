# Audit UI/UX portofolio Shafwan Adhi

Tanggal: 20 Oktober 2026. Audit visual, CSS, interaksi, dan keyboard melalui Chromium/Playwright pada production preview. Tidak mengubah kode produk.

## Cakupan dan bukti

- Beranda, `/projects`, `/projects/demand-forecast`, dan `/certifications`.
- Lebar 320, 390, 768, 1440, dan 1920px; pemeriksaan touch terpisah pada 390px.
- Tampilan normal dan reduced motion. Audit ini bukan pengujian lengkap screen reader atau pengukuran performa.
- Screenshot: `output/playwright/audit-{home,projects,detail,courses}-{390,1440}.png`.
- Detail pengalaman: `output/playwright/audit-experience-{390,1440}.png`.
- Pemeriksaan dapat dijalankan ulang memakai `run-ui-audit.js`, `run-touch-audit.js`, dan `run-navigation-audit.js` melalui Playwright CLI.

## Temuan prioritas tinggi

### 1. Hierarki pengalaman melebur

Organisasi/lokasi dan deskripsi sama-sama memakai Poppins 400, warna `#c8c8c8`, dan ukuran 12.5px pada desktop atau 12px pada mobile. Jarak antarkeduanya hanya 5px. Pengunjung sulit membedakan identitas organisasi dari penjelasan pekerjaan.

Pada 390px, kolom tanggal 83px dan gap 17px menyisakan lebar isi 242px. Judul peran menjadi dua atau tiga baris; deskripsi pertama menjadi enam baris. Pada desktop, tiga kolom selebar sekitar 301px juga membuat pengalaman pertama jauh lebih padat daripada pengalaman kedua.

Rekomendasi:

- Tanggal di atas isi pada mobile, bukan kolom terpisah.
- Peran 17–18px semibold; organisasi 14–15px medium; lokasi 12–13px pada baris tersendiri.
- Deskripsi 14–15px regular, line-height sekitar 1.65, terpisah 12–16px dari metadata.
- Jangan mengandalkan perubahan warna saja. Pisahkan struktur dan jaraknya.
- Pertahankan isi faktual. Pemisahan riwayat promosi menjadi dua kalimat bisa dipertimbangkan tanpa mengubah makna.

### 2. Kontras teks tombol hijau belum memenuhi AA

Warna tombol `#009b08` menghasilkan rasio sekitar 3.69:1 untuk putih dan 3.15:1 untuk `#ededed`. Keduanya di bawah 4.5:1 untuk teks normal. Teks tombol berukuran 12px; CTA 17px juga belum memenuhi definisi teks besar. Hover `#00b10b` menurunkan rasio putih menjadi sekitar 2.88:1.

Rekomendasi: gunakan hijau lebih gelap dengan teks terang, atau latar lime dengan teks gelap. Verifikasi normal, hover, dan focus. Pertahankan konsistensi tombol utama di seluruh halaman.

### 3. Keterbacaan isi terlalu kecil di beberapa bagian

Ukuran utama saat ini: pengalaman 12–12.5px, deskripsi proyek 12.5px, isi About dan Hero 13px. Koleksi sertifikasi memakai metadata 10px dan credential ID 9px; caption galeri mobile 10px. Ini bukan otomatis pelanggaran WCAG, tetapi memperberat pembacaan, terutama bagi pengunjung yang memindai pengalaman dan hasil proyek.

Rekomendasi: utamakan body 14–16px, metadata 12–13px, judul kartu 17–18px. Pertahankan container desktop 960px; tidak perlu membesarkan semua elemen atau membatalkan skala ringkas situs.

### 4. Area sentuh belum konsisten antarhalaman

Pada browser touch 390px:

- Link dokumen/verifikasi di beranda: tinggi 44px.
- Link yang sama di `/certifications`: tinggi 18px.
- Ikon sosial: 30 × 30px.
- Tab `All`: sekitar 16.5 × 27.5px.
- Tombol View Case Study dan panah galeri: tinggi 40px.

Rekomendasi: gunakan target 44 × 44px sebagai standar kenyamanan sentuh. Ikon boleh tetap kecil di dalam target yang lebih besar. Ini rekomendasi usability; penilaian WCAG target minimum juga bergantung pada jarak dan pengecualian.

## Temuan prioritas sedang

### 5. Filter proyek terpotong pada mobile

Pada 390px, lebar bar filter 346px sedangkan isinya 366px. Label Software Engineering terpotong. Konten memang dapat digeser, tetapi kelanjutan kategori kurang jelas. Semua tab memiliki warna dan berat yang sama; pilihan aktif terutama dibedakan garis bawah tipis.

Rekomendasi: gunakan baris yang membungkus jika tetap rapi, atau beri petunjuk scroll yang jelas. Tambahkan pembedaan visual pada tab aktif selain garis bawah. Pertahankan navigasi tombol panah yang sudah berfungsi.

### 6. Koleksi kursus sulit dipindai

Halaman sertifikasi mobile mencapai sekitar 8231px pada lebar 390px. Sembilan belas dokumen menampilkan gambar besar dan pola informasi yang berulang. Ukuran gambar beranda sudah membaik, tetapi pola tersebut menjadi panjang ketika dipakai untuk seluruh koleksi.

Rekomendasi: pertahankan dua professional certificates sebagai visual utama. Untuk kursus, gunakan daftar yang lebih ringkas dengan judul, penerbit, tanggal, dan aksi yang jelas; preview dibuka sesuai kebutuhan. Tampilkan jumlah item per kelompok. Belum perlu pagination atau pencarian untuk 17 kursus.

### 7. Navigasi tidak menunjukkan halaman aktif

Projects dan Certifications tidak memiliki `aria-current` atau penanda visual aktif. Pada halaman detail, hubungan ke bagian Projects juga tidak terlihat di navbar.

Rekomendasi: tandai halaman koleksi aktif; tandai Projects sebagai bagian aktif pada detail proyek. Pertahankan menu About dan Contact sebagai navigasi section.

### 8. Aksi proyek unggulan kurang mudah ditemukan

Pada beranda, hanya tombol panah di atas gambar yang membuka case study. Judul dan area gambar lainnya tidak menjadi tautan. Tombol panah sudah memiliki target 44px dan accessible label; masalahnya keterdugaan interaksi bagi pengguna pointer/touch.

Rekomendasi: perluas tautan ke gambar dan/atau judul dengan semantik link yang benar. Hindari nested links atau membuat seluruh kartu menjadi tombol JavaScript.

### 9. CTA dan kontak mengulang aksi tetapi email kurang menonjol

CTA Get in Touch membuka email. Footer mengulang ajakan koneksi dalam paragraf, lalu menempelkan alamat email pada akhir teks. Pada desktop paragraf tersebut sangat panjang; tindakan utama kurang terpisah dari penjelasan.

Rekomendasi: batasi lebar deskripsi sekitar 55–65 karakter per baris; tempatkan email pada baris tersendiri. Pertahankan satu aksi email utama dan ikon sosial sebagai pilihan sekunder.

### 10. Kontrol jeda animasi strip belum tersedia untuk semua pengguna

Skills strip bergerak terus selama 36 detik per putaran. CSS menyediakan pause saat hover dan menghormati reduced motion, tetapi tidak ada kontrol jeda yang dapat digunakan lewat keyboard/touch.

Rekomendasi: tampilkan skill statis pada mobile atau sediakan kontrol pause yang dapat difokuskan. Animasi dekoratif lain sebaiknya tetap menjadi pendukung, bukan pusat perhatian saat membaca.

## Temuan fungsional bersyarat

Empty state ProjectBrowser menggunakan HireButton versi kecil. Versi ini sekarang berlabel Explore My Work dengan tujuan `#portfolio`, sementara elemen tersebut tidak ada di halaman `/projects`. Seluruh kategori saat ini berisi proyek sehingga masalah ini belum tampil dalam alur normal. Jika kategori menjadi kosong, CTA akan kehilangan tujuan yang berguna. Gunakan aksi kembali ke All atau kontak saat kondisi tersebut terjadi.

## Yang sudah bekerja baik

- Tidak ditemukan horizontal page overflow pada seluruh kombinasi halaman/lebar yang diuji. Scroll horizontal filter merupakan area internal tersendiri.
- Menu touch membuka dan menutup setelah memilih About.
- Filter kategori bekerja dengan tombol panah dan memperbarui URL.
- Skip link melewati navigasi; Tab berikutnya mencapai Explore My Work.
- Foto, bahasa visual gelap/hijau, dan bagian-bagian utama konsisten.
- Sertifikasi beranda sudah menampilkan gambar yang lebih besar dan aksi sentuh 44px.
- Tidak ada console error atau warning pada sesi audit.

## Urutan perbaikan

1. Hierarki pengalaman dan ukuran teks isi.
2. Kontras tombol dan area sentuh bersama.
3. Filter mobile dan navigasi aktif.
4. Penyederhanaan koleksi kursus.
5. Aksi kartu proyek, footer, dan kontrol animasi.

Gambar/hasil proyek dummy tidak dinilai sebagai bukti pekerjaan nyata. Fokus audit pada struktur penyajian dan interaksi.
