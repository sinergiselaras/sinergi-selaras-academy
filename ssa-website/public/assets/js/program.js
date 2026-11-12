/* =====================================================================
   program.js — mengisi halaman detail program dari assets/data/classes-data.js
   Anda TIDAK perlu mengubah file ini.

   Cara kerja: halaman program memiliki <body data-program="slug-kelas">.
   Skrip mencari kelas dengan slug tersebut di classes-data.js, lalu mengisi
   status, tanggal, lokasi, harga, deskripsi, poster, dan tombol.
   Bagian yang datanya kosong tidak ditampilkan. Bila slug tidak ditemukan,
   tampil pesan "Informasi program belum tersedia" dengan tautan ke Kelas Publik.
   ===================================================================== */
(function () {
  'use strict';
  var SSA = window.SSA || {};
  var esc = SSA.esc || function (s) { return String(s == null ? '' : s); };
  var icon = SSA.icon || function () { return ''; };
  var slug = document.body.getAttribute('data-program') || '';
  var root = document.querySelector('[data-program-root]');
  if (!root) return;
  var hero = document.querySelector('[data-program-hero]');
  var c = SSA.classes && SSA.classes.find ? SSA.classes.find(slug) : null;

  if (!c) {
    root.innerHTML =
      '<div class="callout"><p><strong>Informasi program ini belum tersedia.</strong></p>' +
      '<p>Silakan lihat daftar kelas publik, atau hubungi kami untuk menanyakan program ini.</p>' +
      '<p style="margin-top:1rem"><a class="btn btn--primary" href="/public-classes/">Lihat Kelas Publik</a> ' +
      '<a class="btn btn--outline" href="https://wa.me/628976770480" data-wa="umum">Hubungi via WhatsApp</a></p></div>';
    if (SSA.upgradeWaLinks) SSA.upgradeWaLinks(root);
    return;
  }

  var st = SSA.classes.STATUS[c.status];
  var $ = function (sel) { return document.querySelector(sel); };

  /* Hero: judul, ringkasan, status, tombol */
  var h1 = $('[data-program-title]'); if (h1) h1.textContent = c.title;
  var crumb = $('[data-program-crumb]'); if (crumb) crumb.textContent = c.title;
  var sum = $('[data-program-summary]');
  if (sum) { if (c.summary) sum.textContent = c.summary; else sum.hidden = true; }
  var badge = $('[data-program-status]'); if (badge) badge.innerHTML = '<span class="badge ' + st.cls + '">' + st.label + '</span>';
  var act = $('[data-program-actions]'); if (act) act.innerHTML = SSA.classes.actions(c, true);

  /* Poster */
  var poster = c.poster
    ? '<img src="' + esc(c.poster) + '" alt="' + esc(c.posterAlt || ('Poster kelas ' + c.title)) + '" width="800" height="1000" decoding="async">'
    : '<div class="poster-fallback" role="img" aria-label="Poster belum tersedia"><img src="/assets/img/brand/logo-ssa.png" width="134" height="44" alt=""></div>';

  /* Info ringkas */
  var rows = '';
  rows += '<div><dt>Tanggal</dt><dd>' + esc(c.dateText || 'Tanggal akan diumumkan') + '</dd></div>';
  if (c.timeText) rows += '<div><dt>Waktu</dt><dd>' + esc(c.timeText) + '</dd></div>';
  var loc = c.location + (c.mode ? (c.location ? ' (' : '') + c.mode + (c.location ? ')' : '') : '');
  if (loc) rows += '<div><dt>Lokasi</dt><dd>' + esc(loc) + '</dd></div>';
  rows += '<div><dt>Harga</dt><dd>' + esc(c.price ? c.price + (c.priceNote ? ' ' + c.priceNote : '') : 'Hubungi kami untuk informasi harga') + '</dd></div>';
  rows += '<div><dt>Status</dt><dd><span class="badge ' + st.cls + '">' + st.label + '</span></dd></div>';

  var desc = c.description.length
    ? '<div class="prose"><h2>Tentang Program</h2>' + c.description.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div>'
    : '<div class="prose"><h2>Tentang Program</h2><p>Deskripsi lengkap program akan segera tersedia. Hubungi kami untuk informasi lebih lanjut.</p></div>';

  root.innerHTML =
    '<div class="program-detail">' + desc +
    '<div class="program-detail__side"><div class="program-detail__poster">' + poster + '</div>' +
    '<div class="info-card"><dl>' + rows + '</dl><div class="info-card__actions">' + SSA.classes.actions(c, true) + '</div></div></div></div>';
  if (SSA.upgradeWaLinks) SSA.upgradeWaLinks(document);
})();
