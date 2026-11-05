/* =====================================================================
   media-data.js  —  DAFTAR FOTO UNTUK HERO DAN GALERI
   ---------------------------------------------------------------------
   Aturan: foto HANYA tampil bila  approved: true  DAN filenya ada di
   folder public/assets/img/. Foto yang menunggu persetujuan disimpan di
   assets-source/pending-approval/ (di luar folder publik).

   CARA MENYETUJUI FOTO (setelah izin dan logo dipastikan aman)
   1. Pindahkan file dari assets-source/pending-approval/
      ke folder tujuan (hero -> public/assets/img/hero/,
      galeri -> public/assets/img/gallery/). Nama file jangan diubah.
   2. Ubah  approved: false  menjadi  approved: true  pada foto tersebut.
   3. Simpan, lalu commit. (Lihat docs/PERSETUJUAN-FOTO.md)
   ===================================================================== */
window.SSA_MEDIA = {

  /* ---------- FOTO HERO (pilih SATU) ---------- */
  hero: {
    approved: false,   // STATUS: PENDING — menunggu izin penggunaan foto peserta

    /* PILIHAN 1 (kandidat utama): Effective Coaching & Counseling */
    src: '/assets/img/hero/hero-coaching-1600.webp',
    srcset: '/assets/img/hero/hero-coaching-800.webp 800w, /assets/img/hero/hero-coaching-1600.webp 1600w',
    width: 1600, height: 1200,
    alt: 'Peserta pelatihan Effective Coaching & Counseling berdiskusi di meja kelompok bersama trainer.'

    /* PILIHAN 2 (alternatif): Training Key Accounting Management.
       Untuk memakai pilihan ini, hapus tiga baris src/srcset/width di atas
       lalu gunakan baris di bawah (hapus tanda komentar):
    src: '/assets/img/hero/hero-key-accounting-1280.webp',
    srcset: '/assets/img/hero/hero-key-accounting-800.webp 800w, /assets/img/hero/hero-key-accounting-1280.webp 1280w',
    width: 1280, height: 960,
    alt: 'Suasana kelas Training Key Accounting Management di sebuah aula dengan peserta duduk melingkar.'
    */
  },

  /* ---------- GALERI DOKUMENTASI ---------- */
  /* Keterangan (caption) = nama program sesuai nama file dokumentasi. */
  gallery: [
    {
      approved: false,   // STATUS: PENDING — cek logo seragam & izin peserta
      src: '/assets/img/gallery/gallery-dsm-800.webp',
      width: 800, height: 600,
      large: '/assets/img/gallery/gallery-dsm-1600.webp',
      alt: 'Foto bersama peserta pelatihan Enhance DSM Competencies di sebuah lobi gedung.',
      caption: 'Enhance DSM Competencies to Achieve Sales Target through Leadership'
    },
    {
      approved: false,   // STATUS: PENDING — cek logo seragam & izin peserta
      src: '/assets/img/gallery/gallery-oil-gas-800.webp',
      width: 800, height: 450,
      alt: 'Peserta pelatihan Customer Service duduk berkelompok di dalam kelas.',
      caption: 'Enhance Customer Service Skills for the Oil & Gas Industry Training'
    },
    {
      approved: false,   // STATUS: PENDING — cek logo seragam & izin peserta
      src: '/assets/img/gallery/gallery-teller-bank-syariah-800.webp',
      width: 800, height: 566,
      alt: 'Foto bersama peserta Pelatihan Layanan Prima Teller Bank Syariah.',
      caption: 'Pelatihan Layanan Prima Teller Bank Syariah: Mengintegrasikan Prinsip Syariah dalam Layanan'
    }
  ]
};
