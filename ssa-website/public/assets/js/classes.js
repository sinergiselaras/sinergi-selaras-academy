/* =====================================================================
   classes.js — membaca assets/data/classes-data.js dan menampilkan kartu kelas
   Anda TIDAK perlu mengubah file ini untuk menambah/mengubah kelas.
   Ubah data di assets/data/classes-data.js.

   Cara kerja singkat:
   - Setiap kelas diperiksa satu per satu. Kelas yang datanya salah dilewati
     (dengan pesan di Console), kelas lain tetap tampil.
   - Bagian yang kosong disembunyikan atau memakai teks netral.
   - Tombol menyesuaikan status kelas (lihat classes-data.js).
   ===================================================================== */
(function () {
  'use strict';
  var S = window.SSA_SITE || {};
  var SSA = (window.SSA = window.SSA || {});
  var esc = SSA.esc || function (s) { return String(s == null ? '' : s); };
  var icon = SSA.icon || function () { return ''; };

  var MONTHS = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  var DASH = '\u2013';
  var STATUS = {
    'segera-hadir': { label: 'Segera Hadir', cls: 'badge--soon', rank: 1 },
    'dibuka':       { label: 'Pendaftaran Dibuka', cls: 'badge--open', rank: 0 },
    'ditutup':      { label: 'Pendaftaran Ditutup', cls: 'badge--closed', rank: 2 }
  };

  function warn(msg, item) {
    if (window.console && console.warn) console.warn('[SSA kelas] ' + msg, item || '');
  }
  /* Teks bersih; kata "placeholder" dianggap kosong */
  function text(v) {
    if (v == null) return '';
    var s = String(v).trim();
    return /placeholder/i.test(s) ? '' : s;
  }
  function parseDate(v) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(text(v));
    if (!m) return null;
    var y = +m[1], mo = +m[2], d = +m[3];
    if (mo < 1 || mo > 12 || d < 1 || d > 31) return null;
    return { y: y, m: mo, d: d, key: y * 10000 + mo * 100 + d };
  }
  function formatRange(a, b) {
    if (!a) return '';
    if (!b || b.key <= a.key) return a.d + ' ' + MONTHS[a.m - 1] + ' ' + a.y;
    if (a.y === b.y && a.m === b.m) return a.d + DASH + b.d + ' ' + MONTHS[a.m - 1] + ' ' + a.y;
    if (a.y === b.y) return a.d + ' ' + MONTHS[a.m - 1] + ' ' + DASH + ' ' + b.d + ' ' + MONTHS[b.m - 1] + ' ' + a.y;
    return a.d + ' ' + MONTHS[a.m - 1] + ' ' + a.y + ' ' + DASH + ' ' + b.d + ' ' + MONTHS[b.m - 1] + ' ' + b.y;
  }

  function normalize(item, index) {
    try {
      if (!item || typeof item !== 'object') throw new Error('bukan data kelas yang valid');
      var slug = text(item.slug), title = text(item.title);
      if (!slug || !title) { warn('Kelas #' + (index + 1) + ' dilewati: slug dan title wajib diisi.', item); return null; }
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) { warn('Kelas "' + title + '": slug sebaiknya huruf kecil, angka, dan tanda hubung saja.', slug); }
      if (item.visible === false) return null;

      var status = text(item.status);
      if (!STATUS[status]) {
        if (status) warn('Kelas "' + title + '": status "' + status + '" tidak dikenal. Dianggap "segera-hadir".');
        status = 'segera-hadir';
      }
      var url = text(item.registrationUrl);
      if (url && !/^https?:\/\//i.test(url)) { warn('Kelas "' + title + '": registrationUrl harus diawali https://', url); url = ''; }
      if (status === 'dibuka' && !url) warn('Kelas "' + title + '": status "dibuka" tetapi registrationUrl kosong. Tombol dialihkan ke WhatsApp.');

      var desc = item.description;
      if (typeof desc === 'string') desc = [desc];
      if (!Array.isArray(desc)) desc = [];
      desc = desc.map(text).filter(Boolean);

      var start = parseDate(item.startDate), end = parseDate(item.endDate);
      if (text(item.startDate) && !start) warn('Kelas "' + title + '": startDate harus berformat 2026-12-03.', item.startDate);

      var venue = text(item.venue), city = text(item.city);
      return {
        slug: slug, title: title, status: status,
        summary: text(item.summary), description: desc, category: text(item.category),
        poster: text(item.poster), posterAlt: text(item.posterAlt),
        start: start, end: end, dateText: formatRange(start, end), timeText: text(item.timeText),
        location: [venue, city].filter(Boolean).join(', '), mode: text(item.mode),
        price: text(item.price), priceNote: text(item.priceNote),
        registrationUrl: url, featured: item.featured === true,
        hasLandingPage: item.hasLandingPage === true,
        whatsappMessage: text(item.whatsappMessage), order: index
      };
    } catch (e) {
      warn('Kelas #' + (index + 1) + ' dilewati karena ada kesalahan penulisan data.', e && e.message);
      return null;
    }
  }

  function loadAll() {
    var raw = window.SSA_CLASSES;
    if (!Array.isArray(raw)) { warn('SSA_CLASSES tidak ditemukan atau bukan daftar. Periksa assets/data/classes-data.js'); return []; }
    var seen = {}, out = [];
    raw.forEach(function (item, i) {
      var c = normalize(item, i);
      if (!c) return;
      if (seen[c.slug]) { warn('Slug "' + c.slug + '" dipakai dua kali. Kelas kedua dilewati.'); return; }
      seen[c.slug] = true; out.push(c);
    });
    out.sort(function (a, b) {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      if (STATUS[a.status].rank !== STATUS[b.status].rank) return STATUS[a.status].rank - STATUS[b.status].rank;
      var ak = a.start ? a.start.key : 99999999, bk = b.start ? b.start.key : 99999999;
      if (ak !== bk) return ak - bk;
      return a.order - b.order;
    });
    return out;
  }

  function waHref(c) {
    return SSA.waLink ? SSA.waLink('kelas', { title: c.title }, c.whatsappMessage) : 'https://wa.me/' + ((S.whatsapp && S.whatsapp.number) || '');
  }

  function waButton(c, label, cls) {
    return '<a class="btn ' + cls + '" href="' + esc(waHref(c)) + '" target="_blank" rel="noopener noreferrer" data-wa="kelas" data-wa-title="' + esc(c.title) + '"' +
      (c.whatsappMessage ? ' data-wa-message="' + esc(c.whatsappMessage) + '"' : '') + '>' + icon('wa', 'icon--fill') + esc(label) + '</a>';
  }

  function actions(c) {
    var h = '';
    if (c.status === 'dibuka' && c.registrationUrl) {
      h += '<a class="btn btn--primary" href="' + esc(c.registrationUrl) + '" target="_blank" rel="noopener noreferrer" data-register>Daftar Sekarang</a>';
    } else if (c.status === 'ditutup') {
      h += '<span class="btn btn--disabled" aria-disabled="true">Pendaftaran Ditutup</span>';
      h += waButton(c, 'Tanya Jadwal Berikutnya', 'btn--outline');
    } else {
      h += waButton(c, 'Tanya via WhatsApp', 'btn--primary');
    }
    if (c.hasLandingPage) h += '<a class="btn btn--text" href="/programs/' + esc(c.slug) + '/">Lihat detail</a>';
    return h;
  }

  function card(c) {
    var st = STATUS[c.status];
    var media = c.poster
      ? '<img src="' + esc(c.poster) + '" alt="' + esc(c.posterAlt || ('Poster kelas ' + c.title)) + '" width="800" height="1000" loading="lazy" decoding="async">'
      : '<div class="poster-fallback" role="img" aria-label="Poster belum tersedia"><img src="/assets/img/brand/logo-ssa.png" width="134" height="44" alt="" loading="lazy"></div>';
    var meta = '';
    meta += '<li>' + icon('calendar') + '<span>' + esc(c.dateText || 'Tanggal akan diumumkan') + (c.timeText ? ', ' + esc(c.timeText) : '') + '</span></li>';
    var loc = c.location + (c.mode ? (c.location ? ' (' : '') + c.mode + (c.location ? ')' : '') : '');
    if (loc) meta += '<li>' + icon('pin') + '<span>' + esc(loc) + '</span></li>';
    meta += '<li>' + icon('tag') + '<span>' + esc(c.price ? c.price + (c.priceNote ? ' ' + c.priceNote : '') : 'Hubungi kami untuk informasi harga') + '</span></li>';
    return '<article class="class-card class-card--' + c.status + '">' +
      '<div class="class-card__media">' + media + '</div>' +
      '<div class="class-card__body">' +
        '<span class="badge ' + st.cls + '">' + st.label + '</span>' +
        '<h3 class="class-card__title">' + esc(c.title) + '</h3>' +
        (c.summary ? '<p class="class-card__summary">' + esc(c.summary) + '</p>' : '') +
        '<ul class="class-card__meta">' + meta + '</ul>' +
        '<div class="class-card__actions">' + actions(c) + '</div>' +
      '</div></article>';
  }

  function renderInto(box, list) {
    if (!list.length) { box.classList.add('is-ready'); return; }   /* biarkan kartu "segera diumumkan" bawaan HTML */
    box.innerHTML = '<div class="classes__grid">' + list.map(card).join('') + '</div>';
    box.classList.add('is-ready');
    if (SSA.upgradeWaLinks) SSA.upgradeWaLinks(box);
  }

  var all = loadAll();
  SSA.classes = {
    all: all,
    find: function (slug) { for (var i = 0; i < all.length; i++) if (all[i].slug === slug) return all[i]; return null; },
    card: card, actions: actions, STATUS: STATUS, formatRange: formatRange
  };

  var boxes = document.querySelectorAll('[data-classes]');
  for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];
    var limit = parseInt(box.getAttribute('data-limit'), 10);
    var hideClosed = box.getAttribute('data-hide-closed') === 'true';
    var list = all.filter(function (c) { return !(hideClosed && c.status === 'ditutup'); });
    if (limit > 0) list = list.slice(0, limit);
    renderInto(box, list);
  }
})();
