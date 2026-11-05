# Website Sinergi Selaras Academy (SSA)

Website korporat statis: HTML5, CSS3, dan JavaScript biasa. Tidak ada backend, database, atau framework.
Dirancang untuk GitHub (repository **Private**) dan Cloudflare Pages.

**Status: Tahap 3A selesai (Fondasi + Beranda).**
Halaman lain (Tentang Kami, Program Pelatihan, Kelas Publik, In-House Training, Trainer, Kontak) saat ini
berupa halaman sementara bertuliskan "Halaman ini sedang disiapkan". Halaman lengkapnya dibuat di Tahap 3B.

---

## 1. Cara menjalankan website di komputer Anda

Website harus dibuka lewat server lokal (bukan klik dua kali pada `index.html`), supaya gambar, font, dan data tampil benar.

**Cara termudah (VS Code + Live Server)**
1. Pasang VS Code, lalu pasang ekstensi **Live Server** (pembuat: Ritwick Dey).
2. Buka folder `ssa-website` di VS Code (File > Open Folder).
3. Klik tombol **Go Live** di pojok kanan bawah.
4. Browser terbuka di `http://127.0.0.1:5500/`. Setiap kali Anda menyimpan file, halaman memuat ulang sendiri.

Pengaturan `.vscode/settings.json` sudah disertakan agar Live Server membaca folder `public`.

**Cara lain (bila Python terpasang)**
- Windows: buka Terminal di folder `ssa-website`, jalankan `py -m http.server 5500 --directory public`
- Mac/Linux: `python3 -m http.server 5500 --directory public`
- Lalu buka `http://localhost:5500/`

---

## 2. Struktur folder

```
ssa-website/
├─ README.md                      <- panduan ini
├─ .gitignore                     <- daftar file yang TIDAK ikut ke GitHub
├─ docs/                          <- panduan (Bahasa Indonesia)
│   ├─ CARA-UPDATE-KONTEN.md      <- cara mengubah kelas, kontak, video, dll.
│   ├─ PANDUAN-DEPLOY.md          <- GitHub Private + Cloudflare Pages + checklist tayang
│   ├─ PERSETUJUAN-FOTO.md        <- status foto & cara menyetujui
│   └─ DAFTAR-PLACEHOLDER.md      <- semua informasi yang masih perlu dikonfirmasi
├─ assets-source/                 <- TIDAK ikut tayang, TIDAK ikut ke GitHub
│   └─ pending-approval/          <- foto yang menunggu persetujuan (sudah dioptimalkan)
└─ public/                        <- SATU-SATUNYA folder yang tayang (Cloudflare Pages)
    ├─ index.html                 <- Beranda
    ├─ 404.html
    ├─ about/ training-programs/ public-classes/
    │  in-house-training/ trainers/ contact/    <- halaman sementara (Tahap 3B)
    ├─ programs/                  <- halaman per kelas (kosong; Tahap 3C)
    ├─ robots.txt
    ├─ _headers                   <- pengaturan Cloudflare (termasuk "noindex" sementara)
    └─ assets/
        ├─ css/    base.css  components.css  home.css  pages.css
        ├─ js/     components.js  whatsapp.js  classes.js  main.js  pixel.js
        ├─ data/   site-data.js  classes-data.js  media-data.js   <- FILE YANG ANDA EDIT
        ├─ fonts/  Poppins & Inter (disimpan sendiri, tanpa Google Fonts)
        └─ img/    brand/ trainer/ video/ hero/ gallery/ posters/ icons/
```

---

## 3. File mana yang boleh dan tidak boleh diubah

| Anda boleh ubah (data) | Jangan diubah tanpa bantuan (kode) |
|---|---|
| `public/assets/data/site-data.js` (WhatsApp, email, alamat, sosial media, video, Pixel ID, Mode Review) | `public/assets/js/*.js` |
| `public/assets/data/classes-data.js` (daftar kelas publik) | `public/assets/css/*.css` |
| `public/assets/data/media-data.js` (foto hero & galeri) | struktur di dalam `public/index.html` |

Setiap file data diawali petunjuk berbahasa Indonesia.

---

## 4. Mode Review (penanda kuning)

Selama `review: { showPlaceholders: true }` di `site-data.js`, bagian yang belum terisi ditandai kuning:
`[PLACEHOLDER: ...]`, dan ada label kecil "Mode review" di pojok kiri bawah.
**Sebelum website tayang untuk umum, ubah menjadi `false`.** Penanda dan label akan hilang,
dan bagian yang kosong tidak tampil sama sekali.

---

## 5. Hal penting yang perlu diingat

1. **Foto pending tidak ada di folder `public/`.** Hero dan galeri otomatis memakai panel bermerk (atau tersembunyi) sampai foto disetujui.
   Lihat `docs/PERSETUJUAN-FOTO.md`.
2. **Website sengaja diberi `noindex`** di `public/_headers` (Google tidak mengindeksnya). Hapus barisnya saat siap tayang. Lihat `docs/PANDUAN-DEPLOY.md`.
3. **Meta Pixel tidak aktif** sampai `pixelId` di `site-data.js` diisi.
4. **Repository GitHub harus Private.**
5. **Tidak ada informasi placeholder yang tampil sebagai informasi resmi** pada website yang tayang (Mode Review harus `false`).

## 6. Rencana tahap berikutnya

- **3B:** halaman Tentang Kami, Program Pelatihan, Kelas Publik, In-House Training, Trainer, Kontak.
- **3C:** template landing page program (`/programs/<slug>/`) dengan SEO sendiri, `sitemap.xml`, dan panduan langkah demi langkah.
- **Tahap 4:** pemeriksaan kualitas akhir.
