# Website Sinergi Selaras Academy (SSA)

Website korporat statis: HTML5, CSS3, dan JavaScript biasa. Tidak ada backend, database, atau framework.
Dirancang untuk GitHub (repository **Private**) dan Cloudflare Pages.

**Status: Tahap 3C selesai (website lengkap, siap diuji lokal).**
Halaman: Beranda, Tentang Kami, Program Pelatihan, Kelas Publik, In-House Training, Trainer, dan Kontak.
Konten final, foto, dan video sudah terpasang. Website ini **belum dipublikasikan** dan sengaja diberi `noindex`. Template halaman per program ada di `templates/program-landing.html`.

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
├─ templates/                     <- template halaman program + sitemap (tidak ikut tayang)
├─ docs/                          <- panduan (Bahasa Indonesia)
│   ├─ CARA-UPDATE-KONTEN.md      <- cara mengubah kelas, kontak, video, dll.
│   ├─ PANDUAN-DEPLOY.md          <- GitHub Private + Cloudflare Pages + checklist tayang
│   ├─ PANDUAN-HALAMAN-PROGRAM.md <- cara menambah halaman detail program
│   ├─ TESTIMONI-SUMBER.md        <- asal angka dan kutipan Testimoni
│   ├─ REVIEW-3C.md               <- checklist review lokal
│   ├─ PERSETUJUAN-FOTO.md        <- status foto & cara menyetujui
│   └─ DAFTAR-PLACEHOLDER.md      <- semua informasi yang masih perlu dikonfirmasi
├─ assets-source/                 <- TIDAK ikut tayang, TIDAK ikut ke GitHub
│   └─ pending-approval/          <- foto yang menunggu persetujuan (sudah dioptimalkan)
└─ public/                        <- SATU-SATUNYA folder yang tayang (Cloudflare Pages)
    ├─ index.html                 <- Beranda
    ├─ 404.html
    ├─ about/                     <- Tentang Kami
    ├─ training-programs/         <- Program Pelatihan
    ├─ public-classes/            <- Kelas Publik (dari classes-data.js)
    ├─ in-house-training/         <- In-House Training
    ├─ trainers/                  <- Trainer
    ├─ testimonials/              <- Testimoni (pie chart + kutipan peserta)
    ├─ contact/                   <- Kontak
    ├─ programs/                  <- halaman detail per kelas (kosong; dibuat dari template saat kelas ada)
    ├─ robots.txt
    ├─ _headers                   <- pengaturan Cloudflare (termasuk "noindex" sementara)
    └─ assets/
        ├─ css/    base.css  components.css  home.css  pages.css
        ├─ js/     components.js  whatsapp.js  classes.js  program.js  testimonials.js  main.js  pixel.js
        ├─ data/   site-data.js  classes-data.js  media-data.js   <- FILE YANG ANDA EDIT
        ├─ fonts/  Poppins & Inter (disimpan sendiri, tanpa Google Fonts)
        ├─ video/  cara-melatih-sdm.mp4  penghargaan-instruktur.mp4
        └─ img/    brand/ trainer/ video/ hero/ gallery/ posters/ icons/
```

---

## 3. File mana yang boleh dan tidak boleh diubah

| Anda boleh ubah (data) | Jangan diubah tanpa bantuan (kode) |
|---|---|
| `public/assets/data/site-data.js` (WhatsApp, email, alamat, jam operasional, sosial media, video, Pixel ID, Mode Review) | `public/assets/js/*.js` |
| `public/assets/data/classes-data.js` (daftar kelas publik) | `public/assets/css/*.css` |

Teks halaman (misalnya daftar topik di Program Pelatihan) ada di file HTML masing-masing halaman. Cara mengubahnya ada di `docs/CARA-UPDATE-KONTEN.md` bagian 9.
| `public/assets/data/media-data.js` (foto hero, galeri, dokumentasi kelas) |
| `public/assets/data/testimonials-data.js` (pie chart dan kutipan Testimoni) | struktur di dalam `public/index.html` |

Setiap file data diawali petunjuk berbahasa Indonesia.

---

## 4. Mode Review (penanda kuning)

Selama `review: { showPlaceholders: true }` di `site-data.js`, bagian yang belum terisi ditandai kuning:
`[PLACEHOLDER: ...]`, dan ada label kecil "Mode review" di pojok kiri bawah.
**Pada versi final ini sudah `false`** (Mode Review nonaktif). Jangan mengubahnya kembali ke `true` sebelum website tayang. Penanda dan label akan hilang,
dan bagian yang kosong tidak tampil sama sekali.

---

## 5. Hal penting yang perlu diingat

1. **Foto hero dan galeri sudah terpasang** sesuai instruksi Anda. Foto lain yang masih menunggu izin (misalnya Effective Coaching & Counseling) tetap di `assets-source/pending-approval/`, di luar folder tayang. Lihat `docs/PERSETUJUAN-FOTO.md`.
2. **Website sengaja diberi `noindex`** di `public/_headers` (Google tidak mengindeksnya). Hapus barisnya saat siap tayang. Lihat `docs/PANDUAN-DEPLOY.md`.
3. **Meta Pixel tidak aktif** sampai `pixelId` di `site-data.js` diisi.
4. **Repository GitHub harus Private.**
5. **Tidak ada informasi placeholder yang tampil sebagai informasi resmi** pada website yang tayang (Mode Review harus `false`).

## 6. Panduan review lokal Tahap 3C

1. Jalankan website seperti di bagian 1 (Live Server, **Go Live**).
2. Periksa semua halaman dengan checklist `docs/REVIEW-3C.md` (desktop dan ponsel; di Chrome tekan F12, lalu Ctrl+Shift+M).
3. Putar kedua video (Beranda dan halaman Trainer). Video berupa file mp4 di `public/assets/video/`; pemutarannya memakai pemutar bawaan browser.
4. Untuk mencoba halaman Kelas Publik dan halaman detail program, ikuti `docs/PANDUAN-HALAMAN-PROGRAM.md`. **Hapus data uji sebelum commit.**
5. Setelah review selesai dan Anda menyetujui, ikuti `docs/PANDUAN-DEPLOY.md` (GitHub Private dan Cloudflare Pages). **Jangan deploy sebelum itu.**

## 7. Yang masih perlu sebelum tayang
Lihat `docs/DAFTAR-PLACEHOLDER.md` dan checklist di `docs/PANDUAN-DEPLOY.md` (bagian D).
