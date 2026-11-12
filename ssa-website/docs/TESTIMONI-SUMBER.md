# Sumber halaman Testimoni

Semua angka dan kutipan di halaman `/testimonials/` berasal dari spreadsheet Google Forms "After Class Evaluation" (Testimony_for_website.zip). Tidak ada data yang dikarang.
Data tampil dari `public/assets/data/testimonials-data.js`.

## File yang dipakai dan tidak dipakai
| Spreadsheet | Responden | Dipakai? | Alasan |
|---|---|---|---|
| Enhance DSM Competencies to Achieve Sales Target through Leadership | 24 | Pie chart + kutipan | Memuat pertanyaan "Secara Keseluruhan, Training ini..." |
| Pelatihan Layanan Prima Teller Bank Syariah ... | 23 | Pie chart + kutipan | Sama |
| Trainers Development Program | 23 | Pie chart | Tidak ada jawaban terbuka yang layak dijadikan testimoni |
| Improve Escalation Rate from Dealer to TAM Batch 2 | 22 | Pie chart | Jawaban terbuka berupa saran perbaikan, bukan kesan positif |
| Enhance Sales Capabilities for Revenue Improvement | 10 | Pie chart | Jawaban terbuka berupa saran dan masukan |
| Employee Gathering FBS (2 file, isinya identik) | 12 | Tidak | Kegiatan gathering, bukan kelas pelatihan; pertanyaannya "Acara Kegiatan ini", bukan "Training ini". File kedua duplikat |
| Annual Plan Bangkok 2025 | 2 | Tidak | Hanya 2 responden; pertanyaannya "Acara Kegiatan ini" |

Pie chart hanya memakai satu pertanyaan: **"Secara Keseluruhan, Training ini..."** Jawabannya dihitung langsung dari spreadsheet.
Responden adalah jumlah isian formulir, bukan jumlah peserta kelas.

## Hasil perhitungan
| Kelas | Responden | Lebih dari Harapan | Sesuai Harapan | Kurang dari Harapan |
|---|---|---|---|---|
| Enhance DSM Competencies ... | 24 | 8 (33%) | 16 (67%) | 0 |
| Layanan Prima Teller Bank Syariah | 23 | 6 (26%) | 17 (74%) | 0 |
| Trainers Development Program | 23 | 7 (30%) | 16 (70%) | 0 |
| Improve Escalation Rate ... Batch 2 | 22 | 11 (50%) | 11 (50%) | 0 |
| Enhance Sales Capabilities ... | 10 | 4 (40%) | 6 (60%) | 0 |

**Catatan penting:** contoh desain di PDF referensi menampilkan DSM "33 Peserta" dengan 71% "Lebih dari Harapan" dan 29% "Sesuai". Angka itu **tidak sama** dengan spreadsheet (24 responden; 33% dan 67%, dengan urutan yang berlawanan).
Website memakai angka dari spreadsheet. Angka pada PDF tidak dipakai.

## Kutipan: teks asli dan teks yang tayang
Identitas peserta tidak ada di spreadsheet, jadi semua kutipan anonim. Perbaikan hanya pada ejaan, huruf besar, dan tanda baca. Kata pembuka "Karna/Karena" dihapus pada dua kutipan karena pertanyaan yang memicunya tidak ditampilkan.
Kutipan Teller berasal dari kolom "Kenapa anda mengatakan demikian" (pertanyaan lanjutan setelah saran perbaikan); isinya sendiri positif dan berdiri sendiri.

| Kelas | Baris di spreadsheet | Teks asli | Teks tayang |
|---|---|---|---|
| Enhance DSM Competencies to Achieve Sales Targ… | 7 | Memberikan pemahaman baru dan lebih dalam, mengenai proses cara approach sampai menjual di cust. Training ini jg memberi insight bagaimana mengelola team dan membentuk karakter menjadi leader. | Memberikan pemahaman baru dan lebih dalam mengenai proses cara approach sampai menjual di customer. Training ini juga memberi insight bagaimana mengelola team dan membentuk karakter menjadi leader. |
| Enhance DSM Competencies to Achieve Sales Targ… | 6 | Saya bisa menerapkan pelatihan seperti ini ke Team saya, dikarenakan ada satuan pelajaran (Silabus) yang bisa menuntun saya | Saya bisa menerapkan pelatihan seperti ini ke team saya, dikarenakan ada satuan pelajaran (silabus) yang bisa menuntun saya. |
| Enhance DSM Competencies to Achieve Sales Targ… | 15 | peningkatan untuk drive diri mengali potensi dan oportunity ke customer lebih baik dan akan diterapkan dalam team sales kami | Peningkatan untuk drive diri menggali potensi dan opportunity ke customer lebih baik dan akan diterapkan dalam team sales kami. |
| Enhance DSM Competencies to Achieve Sales Targ… | 21 | Pentingnya mengenal karakter calon customer ataupun team, dan bagaimana strategi untuk mendapatkan best result dan proses delegasi effective | Pentingnya mengenal karakter calon customer ataupun team, dan bagaimana strategi untuk mendapatkan best result dan proses delegasi effective. |
| Pelatihan Layanan Prima Teller Bank Syariah Me… | 23 | Karna saya suka cara bapak ashar menyampaikan materi | Saya suka cara Bapak Ashar menyampaikan materi. |
| Pelatihan Layanan Prima Teller Bank Syariah Me… | 7 | Sangat membantu saya untuk menambah penegetahuan | Sangat membantu saya untuk menambah pengetahuan. |
| Pelatihan Layanan Prima Teller Bank Syariah Me… | 6 | Karena training kali ini sudah memuaskan | Training kali ini sudah memuaskan. |

## Yang tidak dipakai
- Jawaban campuran (memuji sekaligus mengeluh) tidak dipotong menjadi kutipan, agar maksud asli peserta tidak berubah.
- Kutipan contoh pada PDF referensi (Challenger Selling Model, Effective Coaching & Counseling) tidak ada di spreadsheet yang dikirim, jadi tidak dipakai.
- Kolom nama, email, dan identitas lain tidak ada pada spreadsheet.

## Memperbarui
Edit `testimonials-data.js` (petunjuk di dalam file). Bagian `<noscript>` di `testimonials/index.html` adalah cadangan statis untuk pengunjung tanpa JavaScript dan perlu disalin manual bila data berubah.
