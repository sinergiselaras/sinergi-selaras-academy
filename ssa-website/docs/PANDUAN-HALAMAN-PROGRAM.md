# Menambah halaman detail program (langkah demi langkah)

Setiap kelas di `classes-data.js` dapat memiliki halaman sendiri di alamat `/programs/nama-slug/`.
Halaman dibuat dari **satu template**. Isinya (status, tanggal, lokasi, harga, deskripsi, poster, tombol) diambil otomatis dari data kelas.
Saat ini **belum ada halaman program yang aktif**, karena belum ada kelas yang dikonfirmasi.

Contoh di bawah memakai kelas fiktif `contoh-kelas`. Ganti dengan data kelas Anda yang sebenarnya.

## Langkah 1. Isi data kelas
Buka `public/assets/data/classes-data.js`, tambahkan blok kelas (salin dari TEMPLATE di bagian atas file) dan isi dengan data yang sudah dikonfirmasi:
```
{
  slug: 'contoh-kelas',
  title: 'Judul Kelas',
  status: 'dibuka',
  summary: 'Ringkasan 1-2 kalimat.',
  description: ['Paragraf pertama.', 'Paragraf kedua.'],
  startDate: '2026-12-03',
  price: 'Rp ...',
  registrationUrl: 'https://forms.gle/xxxxx',
  featured: true,
  visible: true,
  hasLandingPage: true
},
```
Bagian yang tidak ada datanya **kosongkan atau hapus barisnya**. Jangan mengisi jadwal, harga, atau deskripsi yang belum dikonfirmasi.

## Langkah 2. Buat folder halaman
1. Di `public/programs/`, buat folder baru dengan nama **sama persis dengan slug**: `public/programs/contoh-kelas/`.
2. Salin file `templates/program-landing.html` ke folder itu, dan ubah namanya menjadi `index.html`.
   Hasilnya: `public/programs/contoh-kelas/index.html`.

## Langkah 3. Ubah 4 hal di file `index.html` tersebut
Cari tulisan huruf besar `JUDUL PROGRAM`, `TULIS ...`, dan `GANTI-DENGAN-SLUG` (Ctrl+F). Ada empat bagian bertanda **UBAH 1-4**:
| Bagian | Yang diubah |
|---|---|
| UBAH 1 | `<title>` dan `meta description`: judul dan deskripsi program untuk Google |
| UBAH 2 | `og:title` dan `og:description`: pratinjau saat tautan dibagikan (sama dengan UBAH 1) |
| UBAH 3 | `<body data-program="...">`: isi slug yang **sama persis** dengan `classes-data.js` |
| UBAH 4 | Judul pada `<h1>` dan jejak halaman: tulis judul program |

Setelah domain diketahui, aktifkan juga tag `og:url`, `og:image`, dan `canonical` (hapus tanda komentar dan ganti `NAMADOMAIN` serta `SLUG-PROGRAM`).

## Yang JANGAN diubah
- Semua baris `<link>` dan `<script>` (CSS dan JavaScript)
- Atribut `data-program-...` pada elemen halaman
- Tanda `<header>`, `<footer>`, dan `<main>`
- Isi folder `public/assets/js/` dan `public/assets/css/`

## Langkah 4. Periksa dan daftarkan
1. Buka `http://127.0.0.1:5500/programs/contoh-kelas/` di Live Server. Pastikan judul, status, dan tombol sesuai.
2. Di `/public-classes/`, kartu kelas tersebut kini memiliki tombol **Lihat detail**.
3. Tambahkan alamat halaman ke `sitemap.xml` (lihat `PANDUAN-DEPLOY.md`).

## Bila sesuatu tidak tampil
- Muncul tulisan "Informasi program ini belum tersedia": slug di halaman tidak sama dengan slug di `classes-data.js`, atau `visible: false`.
- Kartu kelas tidak memiliki tombol Lihat detail: `hasLandingPage` belum `true`.
- Buka Console browser (F12 > Console); pesan diawali `[SSA kelas]` menjelaskan kesalahan data.
