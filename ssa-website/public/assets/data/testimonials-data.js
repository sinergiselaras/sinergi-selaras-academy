/* =====================================================================
   testimonials-data.js  —  DATA HALAMAN TESTIMONI
   ---------------------------------------------------------------------
   Sumber: Google Forms "After Class Evaluation" (pertanyaan:
   "Secara Keseluruhan, Training ini..."). Angka dihitung dari jawaban
   asli di spreadsheet. Identitas peserta TIDAK ditampilkan (anonim).

   CARA MENAMBAH / MENGUBAH
   - Satu blok { ... } = satu kelas. Salin satu blok, lalu ubah isinya.
   - more   = jumlah jawaban "Lebih dari Harapan Saya"
     meets  = jumlah jawaban "Sesuai dengan Harapan Saya"
     less   = jumlah jawaban "Kurang dari Harapan Saya"
     respondents = jumlah semua responden (more + meets + less)
     Persentase dihitung otomatis; Anda cukup mengisi jumlahnya.
   - quotes = daftar kutipan peserta. Hanya tulis kutipan asli peserta
     (boleh perbaikan typo/tanda baca seperlunya). Kosongkan [] bila tidak ada.
   - visible: false menyembunyikan satu kelas tanpa menghapus datanya.
   - Tanda kutip di dalam teks: gunakan tanda kutip ganda "..." di sekeliling teks.
   - Satu blok yang salah tulis tidak merusak blok lain (lihat Console, F12).
   ===================================================================== */
window.SSA_TESTIMONIALS = {
  question: "Secara Keseluruhan, Training ini...",
  classes: [
    {
      slug: "enhance-dsm",
      title: "Enhance DSM Competencies to Achieve Sales Target through Leadership",
      respondents: 24,
      more: 8,
      meets: 16,
      less: 0,
      visible: true,
      quotes: [
        "Memberikan pemahaman baru dan lebih dalam mengenai proses cara approach sampai menjual di customer. Training ini juga memberi insight bagaimana mengelola team dan membentuk karakter menjadi leader.",
        "Saya bisa menerapkan pelatihan seperti ini ke team saya, dikarenakan ada satuan pelajaran (silabus) yang bisa menuntun saya.",
        "Peningkatan untuk drive diri menggali potensi dan opportunity ke customer lebih baik dan akan diterapkan dalam team sales kami.",
        "Pentingnya mengenal karakter calon customer ataupun team, dan bagaimana strategi untuk mendapatkan best result dan proses delegasi effective."
      ]
    },
    {
      slug: "teller-bank-syariah",
      title: "Pelatihan Layanan Prima Teller Bank Syariah Mengintegrasikan Prinsip Syariah dalam Layanan",
      respondents: 23,
      more: 6,
      meets: 17,
      less: 0,
      visible: true,
      quotes: [
        "Saya suka cara Bapak Ashar menyampaikan materi.",
        "Sangat membantu saya untuk menambah pengetahuan.",
        "Training kali ini sudah memuaskan."
      ]
    },
    {
      slug: "trainers-development",
      title: "Trainers Development Program",
      respondents: 23,
      more: 7,
      meets: 16,
      less: 0,
      visible: true,
      quotes: []
    },
    {
      slug: "improve-escalation-rate",
      title: "Improve Escalation Rate from Dealer to TAM Batch 2",
      respondents: 22,
      more: 11,
      meets: 11,
      less: 0,
      visible: true,
      quotes: []
    },
    {
      slug: "enhance-sales-capabilities",
      title: "Enhance Sales Capabilities for Revenue Improvement",
      respondents: 10,
      more: 4,
      meets: 6,
      less: 0,
      visible: true,
      quotes: []
    }
  ]
};
