# Status foto dan video

Aturan: foto hanya tampil bila filenya ada di `public/assets/img/...` DAN `approved: true` di `public/assets/data/media-data.js`.
Foto yang menunggu izin disimpan di `assets-source/pending-approval/` (di luar folder tayang dan tidak ikut ke GitHub).

## Sudah terpasang (sesuai instruksi Stage 3C)
| Aset | Dipakai di | File |
|---|---|---|
| Foto hero: Training Key Accounting Management | Hero Beranda | `public/assets/img/hero/hero-key-accounting-*.webp` |
| Enhance DSM Competencies to Achieve Sales Target through Leadership | Galeri Beranda | `gallery-dsm-*.webp` |
| Enhance Customer Service Skills for the Oil & Gas Industry Training | Galeri Beranda | `gallery-oil-gas-*.webp` |
| Pelatihan Layanan Prima Teller Bank Syariah Mengintegrasikan Prinsip Syariah dalam Layanan | Galeri Beranda | `gallery-teller-bank-syariah-*.webp` |
| Video Cara Kami Melatih SDM (file asli, dikompres, 12,5 MB) | Beranda | `public/assets/video/cara-melatih-sdm.mp4` |
| Video penghargaan Instruktur Pasca Karyawan Terbaik (file asli, dikompres, 1,2 MB) | Halaman Trainer | `public/assets/video/penghargaan-instruktur.mp4` |
| Potret Muhammad Ashar | Beranda, Tentang Kami, Trainer | `public/assets/img/trainer/` |

Hal yang masih patut Anda cek sendiri pada foto yang terpasang: logo kecil pada seragam peserta dan izin penggunaan wajah peserta.
Video penghargaan memperlihatkan nama dan foto dua nominee lain; video dipakai apa adanya sesuai instruksi.

## Masih pending (tidak ada di `public/`)
- Effective Coaching & Counseling for Wali Kelas (kandidat hero utama): `assets-source/pending-approval/hero-coaching-800.webp` dan `hero-coaching-1600.webp`.
- Foto yang memuat logo atau nama perusahaan lain (Challenger Selling Model, Training Overhaul, Trainers Development Program, Enhance Sales Capabilities) belum diolah.

## Cara memasang foto pending setelah izin dipastikan
1. Pindahkan file dari `assets-source/pending-approval/` ke `public/assets/img/hero/` (nama file jangan diubah).
2. Di `media-data.js`, ganti isi bagian `hero` ke foto tersebut (petunjuknya ada di komentar file).
3. Simpan, periksa di browser, lalu commit.

## Cara membatalkan foto yang terpasang
Ubah `approved: true` menjadi `approved: false` dan hapus filenya dari `public/`. Hero kembali ke latar bermerk SSA, dan galeri tersembunyi bila tidak ada foto yang disetujui.

## Dokumentasi kelas di Program Pelatihan, Kelas Publik, dan In-House (pembaruan)
Satu daftar di `media-data.js` (bagian `docs`) dipakai tiga halaman. Foto yang sama dipakai ulang lewat file yang sama (tidak ada file ganda).

**Tampil (tidak memuat logo atau nama perusahaan lain yang terlihat):**
| Foto | Program Pelatihan | Kelas Publik | In-House |
|---|---|---|---|
| Becoming an Effective Leader (kolase SSA) | Leadership | ya | |
| Enhance DSM Competencies to Achieve Sales Target through Leadership | Sales & Marketing | | ya |
| Enhance Customer Service Skills for the Oil & Gas Industry Training | Sales & Marketing | | ya |
| Pelatihan Layanan Prima Teller Bank Syariah Mengintegrasikan Prinsip Syariah dalam Layanan | Sales & Marketing | | ya |
| Seminar Customer Voice | Sales & Marketing | | |
| Annual Bengkel Plan 2026 Bangkok | Automotive Technical | | |
| Training Key Accounting Management | Hard Skills | | |
| Training Finance Public Relation | Hard Skills | | |
| Training for Trainers BNSP SKKNI Level 4 | Hard Skills | ya | |

**Masih menunggu izin (file ada di `assets-source/pending-approval/`, `approved: false`):** Effective Coaching & Counseling, Leader as Problem Solver Level 2 (memuat nama perusahaan lain), Trainer Development Program (logo sponsor), Challenger Selling Model (logo pada banner), Enhance Sales Capabilities (nama dan logo klien), Training Overhaul (papan nama perusahaan lain), Company Visit Bengkel.
Untuk menayangkan salah satunya: pindahkan file ke folder yang tertulis pada `src`/`large` di `media-data.js` (nama file jangan diubah), lalu ubah `approved: true`.

**Dasar pencocokan:** kategori mengikuti pengelompokan program yang sudah Anda setujui. Penempatan di Kelas Publik berdasarkan Company Profile (Becoming an Effective Leader dan TOT tampil sebagai kelas dengan pendaftaran). Penempatan di In-House berdasarkan peserta berseragam satu perusahaan dan judul program khusus. Sumber tidak menyatakan format tiap sesi secara eksplisit; mohon konfirmasi bila ada yang keliru.
