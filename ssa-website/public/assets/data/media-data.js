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
    approved: true,    // foto hero: Training Key Accounting Management
    src: '/assets/img/hero/hero-key-accounting-1280.webp',
    srcset: '/assets/img/hero/hero-key-accounting-800.webp 800w, /assets/img/hero/hero-key-accounting-1280.webp 1280w',
    width: 1280, height: 960,
    alt: 'Suasana kelas Training Key Accounting Management di sebuah aula dengan peserta duduk melingkar.'

    /* Foto lain yang masih menunggu izin (assets-source/pending-approval/):
       Effective Coaching & Counseling -> hero-coaching-800.webp / hero-coaching-1600.webp */
  },

  /* ---------- GALERI DOKUMENTASI ---------- */
  /* Keterangan (caption) = nama program sesuai nama file dokumentasi. */
  gallery: [
    {
      approved: true,    // dipasang sesuai instruksi pengguna
      src: '/assets/img/gallery/gallery-dsm-800.webp',
      width: 800, height: 600,
      large: '/assets/img/gallery/gallery-dsm-1600.webp',
      alt: 'Foto bersama peserta pelatihan Enhance DSM Competencies di sebuah lobi gedung.',
      caption: 'Enhance DSM Competencies to Achieve Sales Target through Leadership'
    },
    {
      approved: true,    // dipasang sesuai instruksi pengguna
      src: '/assets/img/gallery/gallery-oil-gas-800.webp',
      width: 800, height: 450,
      large: '/assets/img/gallery/gallery-oil-gas-1280.webp',
      alt: 'Peserta pelatihan Customer Service duduk berkelompok di dalam kelas.',
      caption: 'Enhance Customer Service Skills for the Oil & Gas Industry Training'
    },
    {
      approved: true,    // dipasang sesuai instruksi pengguna
      src: '/assets/img/gallery/gallery-teller-bank-syariah-800.webp',
      width: 800, height: 566,
      large: '/assets/img/gallery/gallery-teller-bank-syariah-1079.webp',
      alt: 'Foto bersama peserta Pelatihan Layanan Prima Teller Bank Syariah.',
      caption: 'Pelatihan Layanan Prima Teller Bank Syariah Mengintegrasikan Prinsip Syariah dalam Layanan'
    }
  ],

  /* ---------- DOKUMENTASI KELAS (Program Pelatihan, Kelas Publik, In-House Training) ----------
     Satu daftar untuk tiga halaman. Foto tampil bila approved: true DAN filenya ada di public/.
     category : leadership | sdm | sales | otomotif | hard-skills   (untuk halaman Program Pelatihan)
     sections : halaman yang menampilkannya: 'programs' | 'public' | 'inhouse'
     caption  : nama program (sesuai dokumentasi). Jangan diganti dengan nama klien.
     Foto yang masih approved: false disimpan di assets-source/pending-approval/ (lihat docs/PERSETUJUAN-FOTO.md). */
  docs: [
    {
      id: 'becoming-effective-leader', approved: true,  
      category: 'leadership', sections: ["programs", "public"],
      caption: "Becoming an Effective Leader",
      src: '/assets/img/gallery/docs-becoming-effective-leader-800.webp', large: '/assets/img/gallery/docs-becoming-effective-leader-1080.webp', width: 800, height: 800,
      alt: "Kolase foto peserta kelas Becoming an Effective Leader."
    },
    {
      id: 'coaching-counseling', approved: false, // MENUNGGU IZIN / memuat logo pihak lain
      category: 'leadership', sections: ["programs"],
      caption: "Effective Coaching & Counseling for Wali Kelas",
      src: '/assets/img/hero/hero-coaching-800.webp', large: '/assets/img/hero/hero-coaching-1600.webp', width: 800, height: 600,
      alt: "Peserta pelatihan Effective Coaching & Counseling berdiskusi di meja kelompok bersama trainer."
    },
    {
      id: 'leader-problem-solver', approved: false, // MENUNGGU IZIN / memuat logo pihak lain
      category: 'leadership', sections: ["programs"],
      caption: "Leader as Problem Solver Level 2",
      src: '/assets/img/gallery/docs-leader-problem-solver-800.webp', large: '/assets/img/gallery/docs-leader-problem-solver-1216.webp', width: 800, height: 421,
      alt: "Dokumentasi kelas Leader as Problem Solver Level 2."
    },
    {
      id: 'trainers-development', approved: false, // MENUNGGU IZIN / memuat logo pihak lain
      category: 'sdm', sections: ["programs"],
      caption: "Trainer Development Program",
      src: '/assets/img/gallery/docs-trainers-development-800.webp', large: '/assets/img/gallery/docs-trainers-development-1280.webp', width: 800, height: 550,
      alt: "Foto bersama peserta Trainers Development Program."
    },
    {
      id: 'dsm', approved: true,  
      category: 'sales', sections: ["programs", "inhouse"],
      caption: "Enhance DSM Competencies to Achieve Sales Target through Leadership",
      src: '/assets/img/gallery/gallery-dsm-800.webp', large: '/assets/img/gallery/gallery-dsm-1600.webp', width: 800, height: 600,
      alt: "Foto bersama peserta pelatihan Enhance DSM Competencies di sebuah lobi gedung."
    },
    {
      id: 'oil-gas', approved: true,  
      category: 'sales', sections: ["programs", "inhouse"],
      caption: "Enhance Customer Service Skills for the Oil & Gas Industry Training",
      src: '/assets/img/gallery/gallery-oil-gas-800.webp', large: '/assets/img/gallery/gallery-oil-gas-1280.webp', width: 800, height: 450,
      alt: "Peserta pelatihan Customer Service duduk berkelompok di dalam kelas."
    },
    {
      id: 'teller-bank-syariah', approved: true,  
      category: 'sales', sections: ["programs", "inhouse"],
      caption: "Pelatihan Layanan Prima Teller Bank Syariah Mengintegrasikan Prinsip Syariah dalam Layanan",
      src: '/assets/img/gallery/gallery-teller-bank-syariah-800.webp', large: '/assets/img/gallery/gallery-teller-bank-syariah-1079.webp', width: 800, height: 566,
      alt: "Foto bersama peserta Pelatihan Layanan Prima Teller Bank Syariah."
    },
    {
      id: 'seminar-customer-voice', approved: true,  
      category: 'sales', sections: ["programs"],
      caption: "Seminar Customer Voice",
      src: '/assets/img/gallery/docs-seminar-customer-voice-800.webp', large: '/assets/img/gallery/docs-seminar-customer-voice-1280.webp', width: 800, height: 800,
      alt: "Pembicara menerima plakat pada Seminar Customer Voice."
    },
    {
      id: 'challenger-selling-model', approved: false, // MENUNGGU IZIN / memuat logo pihak lain
      category: 'sales', sections: ["programs"],
      caption: "Challenger Selling Model for Enterprise Sales",
      src: '/assets/img/gallery/docs-challenger-selling-model-800.webp', large: '/assets/img/gallery/docs-challenger-selling-model-1280.webp', width: 800, height: 600,
      alt: "Foto bersama peserta Challenger Selling Model for Enterprise Sales."
    },
    {
      id: 'enhance-sales-capabilities', approved: false, // MENUNGGU IZIN / memuat logo pihak lain
      category: 'sales', sections: ["programs"],
      caption: "Enhance Sales Capabilities for Revenue Improvement",
      src: '/assets/img/gallery/docs-enhance-sales-capabilities-800.webp', large: '/assets/img/gallery/docs-enhance-sales-capabilities-1280.webp', width: 800, height: 603,
      alt: "Foto bersama peserta Enhance Sales Capabilities for Revenue Improvement."
    },
    {
      id: 'annual-bengkel-plan-bangkok', approved: true,  
      category: 'otomotif', sections: ["programs"],
      caption: "Annual Bengkel Plan 2026 Bangkok",
      src: '/assets/img/gallery/docs-annual-bengkel-plan-bangkok-800.webp', large: '/assets/img/gallery/docs-annual-bengkel-plan-bangkok-1280.webp', width: 800, height: 600,
      alt: "Peserta Annual Bengkel Plan 2026 Bangkok berfoto bersama di Bangkok."
    },
    {
      id: 'training-overhaul', approved: false, // MENUNGGU IZIN / memuat logo pihak lain
      category: 'otomotif', sections: ["programs"],
      caption: "Training Overhaul atau Turun Mesin",
      src: '/assets/img/gallery/docs-training-overhaul-800.webp', large: '/assets/img/gallery/docs-training-overhaul-1280.webp', width: 800, height: 600,
      alt: "Foto bersama peserta Training Overhaul atau Turun Mesin."
    },
    {
      id: 'company-visit-bengkel', approved: false, // MENUNGGU IZIN / memuat logo pihak lain
      category: 'otomotif', sections: ["programs"],
      caption: "Company Visit Bengkel Persiapan Pensiun",
      src: '/assets/img/gallery/docs-company-visit-bengkel-800.webp', large: '/assets/img/gallery/docs-company-visit-bengkel-1280.webp', width: 800, height: 1067,
      alt: "Dokumentasi Company Visit Bengkel Persiapan Pensiun."
    },
    {
      id: 'key-accounting', approved: true,  
      category: 'hard-skills', sections: ["programs"],
      caption: "Training Key Accounting Management",
      src: '/assets/img/hero/hero-key-accounting-800.webp', large: '/assets/img/hero/hero-key-accounting-1280.webp', width: 800, height: 600,
      alt: "Suasana kelas Training Key Accounting Management di sebuah aula dengan peserta duduk melingkar."
    },
    {
      id: 'finance-public-relation', approved: true,  
      category: 'hard-skills', sections: ["programs"],
      caption: "Training Finance Public Relation",
      src: '/assets/img/gallery/docs-finance-public-relation-800.webp', large: '/assets/img/gallery/docs-finance-public-relation-960.webp', width: 800, height: 1067,
      alt: "Peserta Training Finance Public Relation belajar di sebuah ruang kerja."
    },
    {
      id: 'tot-bnsp-skkni-level-4', approved: true,  
      category: 'hard-skills', sections: ["programs", "public"],
      caption: "Training for Trainers BNSP SKKNI Level 4",
      src: '/assets/img/gallery/docs-tot-bnsp-skkni-level-4-800.webp', large: '/assets/img/gallery/docs-tot-bnsp-skkni-level-4-1280.webp', width: 800, height: 640,
      alt: "Trainer menyampaikan materi kepada peserta Training for Trainers BNSP SKKNI Level 4."
    }
  ]
};
