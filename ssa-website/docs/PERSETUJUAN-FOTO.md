# Persetujuan foto

Aturan: **foto hanya tampil bila (1) filenya ada di folder `public/assets/img/...` DAN (2) `approved: true` di `media-data.js`.**
Foto yang menunggu persetujuan disimpan di `assets-source/pending-approval/` (di luar folder tayang dan tidak ikut ke GitHub).
Semua file sudah dikonversi ke WebP dan metadata kamera (EXIF) tidak ikut tersimpan.

## Status saat ini: SEMUA PENDING

| Foto | Peran | File di `pending-approval/` | Yang perlu Anda cek |
|---|---|---|---|
| Effective Coaching & Counseling | Hero (kandidat utama) | `hero-coaching-800.webp`, `hero-coaching-1600.webp` | Izin penggunaan wajah peserta; tidak ada logo bermasalah |
| Training Key Accounting Management | Hero (alternatif) | `hero-key-accounting-800.webp`, `hero-key-accounting-1280.webp` | Izin peserta; logo pada pakaian/ruangan |
| Enhance DSM Competencies ... Leadership | Galeri | `gallery-dsm-800.webp`, `gallery-dsm-1600.webp` | Logo kecil pada seragam; izin peserta |
| Enhance Customer Service Skills, Oil & Gas | Galeri | `gallery-oil-gas-800.webp` | Logo pada seragam; izin peserta (wajah terlihat dekat) |
| Pelatihan Layanan Prima Teller Bank Syariah | Galeri | `gallery-teller-bank-syariah-800.webp` | Logo pada seragam; izin peserta |

Tidak disiapkan (sesuai arahan Anda, karena memuat logo atau nama perusahaan lain): Challenger Selling Model, Training Overhaul, Trainers Development Program, Enhance Sales Capabilities.
Jika kelak disetujui, minta optimasi file-nya.

## Cara menyetujui satu foto
1. Periksa foto aslinya dalam ukuran penuh (logo, banner, nama, wajah) dan pastikan izinnya.
2. Pindahkan file dari `assets-source/pending-approval/` ke folder tujuan, **tanpa mengubah nama file**:
   - foto hero -> `public/assets/img/hero/`
   - foto galeri -> `public/assets/img/gallery/`
3. Buka `public/assets/data/media-data.js`, ubah `approved: false` menjadi `approved: true` pada foto tersebut.
   - Untuk hero, pilih SATU foto. Bila memilih Key Accounting, ikuti petunjuk "PILIHAN 2" di dalam file.
4. Simpan dan periksa di browser. Bila sudah benar, baru commit dan push.

## Cara membatalkan
Ubah kembali menjadi `approved: false` dan hapus file fotonya dari `public/`. Foto kembali menjadi panel bermerk atau tersembunyi.

## Catatan
- Galeri otomatis tersembunyi bila belum ada foto yang disetujui, dan menyesuaikan jumlah foto (1 sampai 8).
- Jangan memakai gambar buatan AI sebagai pengganti dokumentasi pelatihan.
- **Jangan melakukan deploy publik** sebelum foto yang ada di `public/` sudah Anda setujui.
