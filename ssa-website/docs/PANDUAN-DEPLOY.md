# Panduan GitHub (Private) dan Cloudflare Pages

Tampilan menu Cloudflare/GitHub dapat sedikit berubah dari waktu ke waktu. Bila label berbeda, cari menu yang paling mirip,
atau lihat dokumentasi resmi Cloudflare Pages.

## A. Mengunggah ke GitHub (repository Private)
1. Di github.com buat repository baru, misalnya `ssa-website`. Pilih **Private**. Jangan centang "Add README" (kita sudah punya).
2. Di komputer, buka Terminal di folder `ssa-website` lalu jalankan:
   ```
   git init
   git add .
   git commit -m "Tahap 3A: fondasi dan beranda"
   git branch -M main
   git remote add origin https://github.com/NAMA-ANDA/ssa-website.git
   git push -u origin main
   ```
   (Ganti `NAMA-ANDA` dengan nama akun GitHub Anda. Bila memakai GitHub Desktop, cukup "Add local repository" lalu "Publish repository" dan **centang Keep this code private**.)
3. Cek di GitHub: folder `assets-source/pending-approval/` seharusnya **tidak** berisi foto (hanya `README.txt`). Itu normal, karena foto pending dikecualikan oleh `.gitignore`.

Setiap kali ada perubahan: `git add .` > `git commit -m "keterangan"` > `git push`.

## B. Menghubungkan Cloudflare Pages ke repository Private
1. Masuk ke dashboard Cloudflare > **Workers & Pages** > **Create** > tab **Pages** > **Connect to Git**.
2. Pilih GitHub dan izinkan Cloudflare membaca repository. Pilih hanya repository `ssa-website` (Cloudflare dapat membaca repository Private).
3. Pengaturan build:
   - Production branch: `main`
   - Framework preset: **None**
   - Build command: *(kosongkan)*
   - Build output directory: **`public`**
4. Klik **Save and Deploy**. Hasilnya dapat dibuka di alamat `namaproyek.pages.dev`.

> **Peringatan:** alamat `pages.dev` bersifat publik. Jangan lakukan deploy sebelum foto yang ada di `public/` Anda setujui.
> Pada saat ini folder `public/` tidak berisi foto dokumentasi sama sekali.

## C. Domain sendiri
Di proyek Pages > **Custom domains** > tambahkan domain, lalu ikuti petunjuk DNS Cloudflare.
Setelah domain pasti: isi `domain` di `site-data.js`, dan aktifkan tag Open Graph/canonical di `index.html` (ada petunjuknya di dalam file).

## D. Checklist sebelum tayang untuk umum
- [ ] Semua foto di `public/` sudah Anda setujui (izin peserta, tidak ada logo bermasalah)
- [ ] `review: { showPlaceholders: false }` di `site-data.js` (menghilangkan penanda kuning)
- [ ] Hapus baris `X-Robots-Tag: noindex` di `public/_headers` (agar Google dapat mengindeks)
- [ ] Email, alamat, dan sosial media sudah terisi (atau sengaja dikosongkan)
- [ ] Domain sudah diisi dan tag Open Graph/canonical diaktifkan
- [ ] Pixel ID diisi (bila dipakai) dan halaman kebijakan privasi tersedia
- [ ] Coba semua tombol WhatsApp dari ponsel; coba menu di ponsel dan desktop
- [ ] Tidak ada tulisan "PLACEHOLDER" yang terlihat di halaman mana pun
- [ ] Tahap 3B dan 3C selesai (halaman sementara sudah diganti)

## E. Batas Cloudflare Pages yang perlu diingat
- Satu file maksimal 25 MiB, dan jumlah file maksimal 20.000. Website ini jauh di bawah batas tersebut.
- Video tidak disimpan di repository; gunakan YouTube.
