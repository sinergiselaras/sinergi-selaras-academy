/* =====================================================================
   site-data.js  —  DATA UMUM WEBSITE SSA
   ---------------------------------------------------------------------
   File ini berisi informasi yang dipakai di banyak halaman:
   nomor WhatsApp, pesan WhatsApp, email, alamat, sosial media, dll.
   Ubah di SINI saja, jangan di file HTML.

   ATURAN SINGKAT:
   - Teks harus berada di dalam tanda kutip '...' dan diakhiri koma.
   - Biarkan '' (kosong) bila informasinya belum ada. Bagian yang kosong
     TIDAK akan tampil di website (kecuali Mode Review, lihat bawah).
   - Jangan menghapus tanda { } [ ] atau koma.
   ===================================================================== */
window.SSA_SITE = {

  name: 'Sinergi Selaras Academy',
  tagline: 'Deliver to peak performance',

  /* ---------- WHATSAPP ---------- */
  whatsapp: {
    number: '628976770480',          // format internasional tanpa + dan tanpa spasi
    display: '+62 897 6770 480',     // tampilan di website
    /* Pesan pembuka otomatis untuk tiap konteks.
       {title} akan diganti dengan judul kelas. */
    messages: {
      umum:     'Halo Sinergi Selaras Academy, saya ingin bertanya mengenai program pelatihan.',
      korporat: 'Halo Sinergi Selaras Academy, saya ingin berkonsultasi mengenai program pelatihan untuk perusahaan kami.',
      publik:   'Halo Sinergi Selaras Academy, saya ingin bertanya mengenai jadwal kelas publik.',
      kelas:    'Halo Sinergi Selaras Academy, saya ingin bertanya mengenai kelas {title}.',
      lms:      'Halo Sinergi Selaras Academy, saya ingin mengetahui lebih lanjut mengenai LMS.'
    }
  },

  /* ---------- KONTAK (isi bila sudah dikonfirmasi) ---------- */
  email: '',        // contoh: 'nama@domain.com'
  address: '',      // alamat lengkap kantor di Bandung
  social: {
    instagram: '',  // contoh: 'https://www.instagram.com/namaakun'
    tiktok: '',
    facebook: ''
  },

  /* ---------- VIDEO "CARA KAMI MELATIH SDM" ---------- */
  /* Isi dengan ID video YouTube saja.
     Contoh: untuk https://www.youtube.com/watch?v=AbC123xyz90
     isi:    videoId: 'AbC123xyz90'                                   */
  youtube: { videoId: '' },

  /* ---------- REFERENSI KLIEN ---------- */
  /* Tampilkan HANYA nama klien yang sudah disetujui.
     Ubah showClientSection menjadi true bila daftar sudah siap.
     Contoh isi: clients: ['Nama Klien A', 'Nama Klien B'],          */
  showClientSection: false,
  clients: [],

  /* ---------- META PIXEL ---------- */
  /* Kosongkan sampai Pixel ID diberikan. Selama kosong, Meta Pixel TIDAK aktif. */
  pixelId: '',

  /* ---------- DOMAIN ---------- */
  domain: '',       // contoh: 'https://www.namadomain.com' (dipakai Tahap 3C untuk sitemap)

  /* ---------- MODE REVIEW ---------- */
  /* true  = bagian yang belum terisi ditandai kuning "[PLACEHOLDER: ...]" agar mudah dicek.
     false = tanda placeholder disembunyikan. WAJIB false sebelum website tayang untuk umum. */
  review: { showPlaceholders: true },

  /* ---------- MENU UTAMA (header & footer) ---------- */
  nav: [
    { label: 'Beranda',            href: '/' },
    { label: 'Tentang Kami',       href: '/about/' },
    { label: 'Program Pelatihan',  href: '/training-programs/' },
    { label: 'Kelas Publik',       href: '/public-classes/' },
    { label: 'In-House Training',  href: '/in-house-training/' },
    { label: 'Trainer',            href: '/trainers/' },
    { label: 'Kontak',             href: '/contact/' }
  ]
};
