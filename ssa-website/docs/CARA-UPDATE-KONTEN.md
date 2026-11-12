# Cara memperbarui konten (untuk pemula)

Anda cukup mengedit tiga file di folder `public/assets/data/`. Buka dengan VS Code, ubah, simpan.
Setelah itu: **commit** dan **push** ke GitHub, lalu Cloudflare Pages menayangkan perubahan otomatis (lihat `PANDUAN-DEPLOY.md`).

**Aturan umum penulisan**
- Teks selalu di dalam tanda kutip: `'seperti ini'`
- Setiap baris data diakhiri koma `,`
- Jangan menghapus tanda `{ } [ ]`
- Bila ragu, kosongkan saja nilainya (`''`). Bagian yang kosong tidak tampil.

---

## 1. Mengubah nomor WhatsApp atau isi pesan otomatis
File: `site-data.js`, bagian `whatsapp`.
- `number`: format internasional tanpa `+` dan spasi, contoh `'628976770480'`.
- `messages`: pesan pembuka untuk tiap tombol. `{title}` otomatis diganti judul kelas.

## 2. Mengisi email, alamat, dan sosial media
File: `site-data.js`.
```
email: 'nama@domain.com',
address: 'Alamat lengkap ...',
social: { instagram: 'https://www.instagram.com/akun', tiktok: '', facebook: '' },
```
Link sosial media harus diawali `https://`.

## 3. Mengganti video
Video berupa file di `public/assets/video/` dan dipasang langsung di HTML (`<video>` di `index.html` dan `trainers/index.html`).
Untuk mengganti: kompres video baru (mp4 H.264, usahakan di bawah 15 MB; Cloudflare Pages membatasi 25 MB per file), simpan dengan nama file yang sama, lalu commit.

## 4. Menambah atau mengubah kelas publik
File: `classes-data.js`. Di bagian atas file ada **penjelasan setiap isian** dan **TEMPLATE** yang tinggal disalin.

Contoh satu kelas (tempel di dalam tanda `[ ]`, di bawah tulisan "DAFTAR KELAS"):
```
{
  slug: 'effective-leadership',
  title: 'Effective Leadership',
  status: 'dibuka',
  summary: 'Ringkasan 1-2 kalimat.',
  startDate: '2026-12-03',
  endDate: '2026-12-06',
  venue: 'Nama tempat',
  city: 'Bandung',
  mode: 'offline',
  price: 'Rp 3.000.000',
  registrationUrl: 'https://forms.gle/xxxxx',
  featured: true,
  visible: true,
  hasLandingPage: false
},
```
Hal yang perlu diketahui:
- **Status** menentukan tombol: `segera-hadir` (Tanya via WhatsApp), `dibuka` (Daftar Sekarang), `ditutup` (Pendaftaran Ditutup).
- Bila status `dibuka` tetapi `registrationUrl` kosong, tombol otomatis menjadi WhatsApp (tidak ada tautan rusak).
- `visible: false` menyembunyikan kelas tanpa menghapus datanya.
- Beranda menampilkan maksimal 3 kelas (yang `featured` lebih dulu, kelas ditutup tidak ditampilkan di Beranda).
- Kelas yang datanya salah ditulis akan dilewati; kelas lain tetap tampil. Pesan kesalahan ada di Console browser (F12 > Console), diawali `[SSA kelas]`.
- `hasLandingPage` diisi `true` hanya bila halaman `/programs/<slug>/` sudah dibuat (Tahap 3C).

## 5. Referensi klien
Tampilkan hanya klien yang sudah menyetujui. Di `site-data.js`:
```
showClientSection: true,
clients: ['Nama Klien A', 'Nama Klien B'],
```
Hanya nama (teks). Logo klien tidak digunakan.

## 6. Foto hero dan galeri
Lihat `PERSETUJUAN-FOTO.md`.

## 6b. Menambah halaman detail program
Lihat `PANDUAN-HALAMAN-PROGRAM.md`.

## 7. Setelah mengubah file CSS atau JS (oleh pengembang)
Naikkan angka versi pada tautan, misalnya `?v=1` menjadi `?v=2` di file HTML, agar browser pengunjung memuat versi baru.
Perubahan pada file data (`/assets/data/`) cepat terlihat karena cache-nya pendek.

## 7b. Dokumentasi kelas dan Testimoni
- **Dokumentasi kelas** (Program Pelatihan, Kelas Publik, In-House) diatur di `media-data.js`, bagian `docs`. Satu blok = satu foto; `category` menentukan bidang di halaman Program Pelatihan, `sections` menentukan halaman mana yang menampilkannya. Foto tampil bila `approved: true` dan filenya ada di `public/`.
- **Testimoni** diatur di `testimonials-data.js` (petunjuk di dalam file). Lihat `TESTIMONI-SUMBER.md`.

## 8. Jam operasional (halaman Kontak)
Di `site-data.js`: `hours: 'Senin - Jumat, 08.30 - 17.00 WIB',` (isi sesuai kenyataan). Bila kosong, baris ini tidak tampil.

## 9. Mengubah teks halaman (Program Pelatihan, Tentang Kami, dll.)
Teks halaman ada di file HTML-nya (misalnya `public/training-programs/index.html`). Cara aman mengubahnya:
1. Buka file dengan VS Code, tekan Ctrl+F, cari kalimat yang ingin diubah.
2. Ubah **hanya tulisan di antara tanda `>` dan `<`**, jangan menghapus tanda `<` `>` atau tulisan seperti `class="..."`.
3. Gunakan `&amp;` untuk tanda &, misalnya `Sales &amp; Marketing`.
4. Untuk menambah satu topik pada daftar, salin satu baris `<li>...</li>` lalu ubah tulisannya.
5. Simpan dan periksa di browser. Bila tampilan rusak, tekan Ctrl+Z.
Informasi yang ditandai `[PLACEHOLDER]` jangan ditulis sebagai fakta sebelum dikonfirmasi.

## 10. Yang jangan diubah
Isi folder `public/assets/js/` dan `public/assets/css/`, serta struktur `public/index.html`, kecuali dengan bantuan pengembang.
