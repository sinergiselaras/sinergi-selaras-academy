# Daftar yang masih tersisa (Stage 3C)

Semua data yang Anda konfirmasi sudah dimasukkan. Mode Review tidak lagi menampilkan penanda kuning di halaman mana pun.
Yang tersisa di bawah ini sengaja belum diisi karena belum ada datanya atau menunggu keputusan.

| # | Hal | Alasan belum diisi | Diisi di |
|---|---|---|---|
| 1 | **Domain website** | Belum diketahui. Dibutuhkan untuk `og:image`, `og:url`, canonical, dan `sitemap.xml` (semuanya sudah disiapkan dalam bentuk komentar/template) | `site-data.js` > `domain`; tag di HTML; `templates/sitemap.xml` |
| 2 | **Meta Pixel ID** | Belum diberikan. Pixel nonaktif | `site-data.js` > `pixelId` |
| 3 | **Data kelas publik** (judul, tanggal, harga, status, link Google Form) | Belum ada kelas yang dikonfirmasi. Halaman menampilkan "Jadwal kelas terbaru segera diumumkan" | `classes-data.js` |
| 4 | **Halaman detail program** | Dibuat dari template saat kelas ada. Tidak ada halaman aktif agar tidak mengarang jadwal, harga, atau detail | `templates/program-landing.html` (lihat `PANDUAN-HALAMAN-PROGRAM.md`) |
| 5 | **Referensi klien dan testimoni** | Belum ada yang disetujui. Bagian disembunyikan | `site-data.js` > `clients` |
| 6 | **Favicon resmi** | Belum ada file ikon resmi | `public/assets/img/` + tag `<link rel="icon">` |
| 7 | **Halaman kebijakan privasi** | Disarankan sebelum Pixel diaktifkan | Halaman baru (belum dibuat) |
| 8 | **Foto yang masih menunggu izin** | Effective Coaching & Counseling, serta foto yang memuat logo (Challenger, Overhaul, Trainers Development, Enhance Sales Capabilities) | `PERSETUJUAN-FOTO.md` |

## Catatan Testimoni dan Dokumentasi (pembaruan)
1. **Format sesi pada dokumentasi.** Foto di Kelas Publik dan In-House ditempatkan berdasarkan bukti yang ada (lihat `PERSETUJUAN-FOTO.md`). Mohon konfirmasi bila ada program yang formatnya berbeda.
2. **Nama program berbeda antar-sumber.** Dokumentasi bernama "Trainer Development Program", sedangkan formulir evaluasi dan banner bernama "Trainers Development Program". Halaman Program memakai nama file; halaman Testimoni memakai nama formulir.
3. **Improve Escalation Rate from Dealer to TAM Batch 2** muncul di pie chart sesuai judul formulir. Judulnya memuat singkatan "TAM". Bila ingin disembunyikan, ubah `visible: false` di `testimonials-data.js`.
4. **Kutipan penutup** (Muhammad Ashar, Direktur SSA) diambil dari PDF referensi desain Anda. PDF menulis "Ahsar"; website memakai "Ashar".
5. **Postingan Instagram** pada PDF referensi tidak dibuat karena tidak ada tautan postingannya.
6. Detail lengkap sumber testimoni: `docs/TESTIMONI-SUMBER.md`.

## Catatan: TOT BNSP Level 4 (belum dapat dipastikan sebagai program yang sama)
Dua penulisan ada di halaman Program Pelatihan (Hard Skills) dan **sengaja tidak digabung**:
- "Training for Trainers BNSP SKKNI Level 4": nama file dokumentasi. Gambarnya tidak memuat judul program (hanya tulisan "Notice" dan foto kelas).
- "Training of Trainer (TOT) BNSP KKNI Level 4": butir pada slide Company Profile.
Perbedaannya SKKNI dan KKNI. Poster TOT Level 6 di Company Profile memakai keduanya ("Konsep KKNI & SKKNI Level 6"), sehingga kemungkinan programnya sama, tetapi sumber yang ada tidak menyatakannya.
Bila Anda memastikan keduanya sama, hapus salah satu baris di `public/training-programs/index.html` (bagian Hard Skills).

## Yang harus dilakukan sebelum tayang untuk umum
1. Hapus `X-Robots-Tag: noindex` di `public/_headers`.
2. ~~Ubah `review: { showPlaceholders: false }` di `site-data.js`.~~ **Sudah dilakukan** pada versi final ini (Mode Review nonaktif).
3. Isi domain dan aktifkan tag Open Graph/canonical; pasang `sitemap.xml`.
4. Pastikan izin foto yang terpasang (lihat `PERSETUJUAN-FOTO.md`).

## Catatan penulisan
- Judul contoh program mengikuti nama file dokumentasi (kapitalisasi dirapikan; "Seminar Customer Voice" mengikuti teks slide, karena nama file tertulis "cutomer").
- Program BNSP ditulis netral ("Program terkait BNSP") tanpa kata "Certified", tanpa klaim bahwa seluruh program SSA terkait BNSP.
  Baris Company Profile "BNSP Melaksanakan Pelatihan Tatap muka (Face to Face)" tidak dipakai karena teksnya tidak utuh.
- LMS: Company Profile menyebut "keamanan tinggi" dan pemantauan "kapan saja"; keduanya tidak ditulis.
- Jam operasional ditulis persis "10.00–17.00" (tanpa hari dan zona waktu karena tidak diberikan).
- Tautan Instagram, TikTok, dan Facebook dibentuk dari data yang Anda berikan. Lingkungan pengujian saya tidak punya akses internet, jadi akun-akunnya belum bisa dibuka dan diverifikasi. Mohon klik sendiri saat review.
