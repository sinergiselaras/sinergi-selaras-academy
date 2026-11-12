/* =====================================================================
   classes-data.js  —  DAFTAR KELAS PUBLIK SSA
   ---------------------------------------------------------------------
   INI FILE YANG PALING SERING ANDA EDIT.
   Satu blok { ... } = satu kelas. Daftar ini dipakai di Beranda, halaman
   Kelas Publik, dan halaman program. Jangan menulis data kelas di file HTML.

   CARA MENAMBAH KELAS BARU
   1. Salin SATU blok contoh di bagian "TEMPLATE" di bawah (dari { sampai },).
   2. Tempel di dalam tanda [ ] di bagian "DAFTAR KELAS" (di bawah tulisan
      "DAFTAR KELAS"). Salin hanya barisnya, bukan tanda komentar di sekitarnya.
   3. Ubah isinya. Simpan file. Selesai.

   ATURAN PENTING (agar website tidak rusak)
   - Setiap blok diakhiri koma  },
   - Teks selalu di dalam tanda kutip: 'seperti ini'
   - Bila ada tanda kutip di dalam teks, tulis dengan \'  atau gunakan tanda kutip ganda.
   - Informasi yang belum ada boleh DIKOSONGKAN ('') atau barisnya dihapus.
     Bagian yang kosong tidak akan tampil dan tidak merusak tampilan.
   - Jika satu blok salah tulis, blok lain tetap tampil. Pesan kesalahan
     muncul di Console browser (tekan F12 > Console), diawali "[SSA kelas]".
   - Teks yang mengandung kata "PLACEHOLDER" dianggap kosong dan tidak ditampilkan.

   PENJELASAN ISI
   slug              WAJIB. Nama pendek untuk alamat halaman: huruf kecil, angka, tanda hubung.
                     Contoh: 'effective-leadership'. Tidak boleh sama dengan kelas lain.
   title             WAJIB. Judul kelas.
   status            WAJIB. Pilih salah satu:
                       'segera-hadir'  -> tombol "Tanya via WhatsApp"
                       'dibuka'        -> tombol "Daftar Sekarang" (ke Google Form)
                       'ditutup'       -> tombol "Pendaftaran Ditutup"
   summary           Ringkasan 1-2 kalimat (tampil di kartu).
   description       Deskripsi lengkap untuk halaman program. Bisa beberapa paragraf:
                     ['Paragraf pertama.', 'Paragraf kedua.']
   category          Opsional. Contoh: 'leadership', 'sdm', 'sales', 'otomotif'.
   poster            Alamat file poster, contoh: '/assets/img/posters/effective-leadership.webp'
   posterAlt         Deskripsi poster untuk pembaca layar.
   startDate         Tanggal mulai, format TAHUN-BULAN-TANGGAL, contoh: '2026-12-03'
   endDate           Tanggal selesai (kosongkan bila hanya satu hari).
   timeText          Jam, teks bebas. Contoh: '08.30 - 16.30 WIB'
   venue             Nama tempat. Contoh: 'Nama hotel / gedung'
   city              Kota. Contoh: 'Bandung'
   mode              'offline', 'online', atau 'hybrid'
   price             Harga, teks bebas. Contoh: 'Rp 3.000.000'. Kosong = "Hubungi kami untuk informasi harga"
   priceNote         Catatan harga. Contoh: 'per peserta'
   registrationUrl   Link Google Form (harus diawali https://). Dipakai bila status 'dibuka'.
                     Bila kosong, tombol otomatis beralih ke WhatsApp (tidak ada tautan rusak).
   featured          true = diprioritaskan tampil di Beranda. false = biasa.
   visible           true = tampil. false = disembunyikan tanpa menghapus datanya.
   hasLandingPage    true HANYA bila halaman /programs/<slug>/ sudah dibuat (Tahap 3C).
                     Bila false, tidak ada tombol "Lihat detail".
   whatsappMessage   Opsional. Pesan WhatsApp khusus untuk kelas ini.
   ===================================================================== */

/* ------------------------- TEMPLATE (salin satu blok) -------------------------
{
  slug: 'isi-nama-pendek-kelas',
  title: 'Judul Kelas',
  status: 'segera-hadir',
  summary: '',
  description: [],
  category: '',
  poster: '',
  posterAlt: '',
  startDate: '',
  endDate: '',
  timeText: '',
  venue: '',
  city: 'Bandung',
  mode: 'offline',
  price: '',
  priceNote: '',
  registrationUrl: '',
  featured: false,
  visible: true,
  hasLandingPage: false
},
----------------------------------------------------------------------------- */

window.SSA_CLASSES = [

  /* ------------------------- DAFTAR KELAS ------------------------- */
  {
    slug: 'pelatihan-overhaul-batch-december',
    title: 'Pelatihan Overhaul Batch December',
    status: 'dibuka',
    summary: 'Tingkatkan kemampuan teknis dalam melakukan pekerjaan overhaul mesin.',
    description: [],
    category: 'otomotif',
    poster: '',
    posterAlt: '',
    startDate: '2026-12-01',
    endDate: '2026-12-04',
    timeText: '',
    venue: 'Training Center Toyota Smart Service, Jatiasih',
    city: 'Bekasi',
    mode: 'offline',
    price: 'Rp3.499.000',
    priceNote: 'di luar penginapan',
    registrationUrl: 'https://forms.gle/Qx9XozKVwgxU9cT8A',
    featured: false,
    visible: true,
    hasLandingPage: false,
    whatsappMessage: 'Halo SSA, saya ingin bertanya dan mendaftar Pelatihan Overhaul Batch December.'
  },
  {
    slug: 'annual-plan-budgeting-bengkel-2027',
    title: 'Annual Plan & Budgeting Bengkel 2027',
    status: 'dibuka',
    summary: 'Pelajari penyusunan rencana kerja dan anggaran tahunan untuk operasional bengkel.',
    description: [],
    category: 'otomotif',
    poster: '',
    posterAlt: '',
    startDate: '2026-11-30',
    endDate: '2026-12-01',
    timeText: '',
    venue: 'Hotel Horison Bekasi',
    city: 'Bekasi',
    mode: 'offline',
    price: 'Rp2.750.000',
    priceNote: '',
    registrationUrl: 'https://forms.gle/nkrQsTw6FZcoXfK67',
    featured: false,
    visible: true,
    hasLandingPage: false,
    whatsappMessage: 'Halo SSA, saya ingin bertanya dan mendaftar Annual Plan & Budgeting Bengkel 2027.'
  },
  {
    slug: 'becoming-an-effective-leader',
    title: 'Becoming an Effective Leader',
    status: 'dibuka',
    summary: 'Latihan praktis untuk mengembangkan kemampuan memimpin, delegasi, komunikasi, dan pengambilan keputusan.',
    description: [],
    category: 'leadership',
    poster: '',
    posterAlt: '',
    startDate: '2026-12-10',
    endDate: '2026-12-11',
    timeText: '',
    venue: 'Hotel UTC Dago',
    city: 'Bandung',
    mode: 'offline',
    price: 'Rp2.000.000',
    priceNote: 'promo hingga 20 November 2026',
    registrationUrl: 'https://forms.gle/uwA3CH56eJ8T23UZ8',
    featured: false,
    visible: true,
    hasLandingPage: false,
    whatsappMessage: 'Halo SSA, saya ingin bertanya dan mendaftar Becoming an Effective Leader.'
  }

];
