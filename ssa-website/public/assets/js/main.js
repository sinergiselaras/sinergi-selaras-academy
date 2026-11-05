/* =====================================================================
   main.js — interaksi halaman: foto hero, video, galeri, referensi klien,
   animasi langkah. Tidak perlu diubah untuk update konten rutin.
   Data foto: assets/data/media-data.js | Video & klien: assets/data/site-data.js
   ===================================================================== */
(function () {
  'use strict';
  var S = window.SSA_SITE || {};
  var M = window.SSA_MEDIA || {};
  var SSA = window.SSA || {};
  var esc = SSA.esc || function (s) { return String(s == null ? '' : s); };
  var ph = SSA.ph || function () { return ''; };
  var icon = SSA.icon || function () { return ''; };
  var review = !!SSA.review;

  /* ---------- Foto hero (hanya bila disetujui) ---------- */
  function initHero() {
    var hero = document.querySelector('.hero');
    var mount = document.querySelector('[data-hero-media]');
    var h = M.hero;
    if (!hero || !mount || !h) return;
    if (h.approved === true && h.src) {
      var img = new Image();
      img.className = 'hero__photo';
      img.alt = '';
      img.decoding = 'async';
      if (h.srcset) { img.srcset = h.srcset; img.sizes = '100vw'; }
      if (h.width) img.width = h.width;
      if (h.height) img.height = h.height;
      try { img.fetchPriority = 'high'; } catch (e) { /* abaikan */ }
      img.src = h.src;
      mount.insertBefore(img, mount.firstChild);
      hero.classList.add('hero--photo');
    } else if (review) {
      mount.insertAdjacentHTML('beforeend', '<div class="hero__ph">' + ph('foto hero menunggu persetujuan') + '</div>');
    }
  }

  /* ---------- Video "Cara Kami Melatih SDM" (YouTube dimuat saat diklik) ---------- */
  function initVideo() {
    var wrap = document.querySelector('[data-video]');
    var layout = document.querySelector('[data-process]');
    if (!wrap || !layout) return;
    var id = String((S.youtube && S.youtube.videoId) || '').trim();
    var btn = wrap.querySelector('.video__play');
    if (!/^[A-Za-z0-9_-]{6,20}$/.test(id)) {
      if (review) {
        wrap.classList.add('video--pending');
        if (btn) btn.disabled = true;
        wrap.insertAdjacentHTML('beforeend', '<div class="video__ph">' + ph('URL YouTube video Cara Kami Melatih SDM') + '</div>');
      } else {
        wrap.hidden = true;
        layout.classList.add('process--no-video');
      }
      return;
    }
    btn.addEventListener('click', function () {
      var frame = wrap.querySelector('.video__frame');
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      f.title = 'Video: Cara Kami Melatih SDM';
      f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      f.allowFullscreen = true;
      frame.appendChild(f);
      wrap.classList.add('is-playing');
      f.focus();
    });
  }

  /* ---------- Galeri dokumentasi ---------- */
  function initGallery() {
    var section = document.getElementById('dokumentasi');
    var box = document.querySelector('[data-gallery]');
    var list = Array.isArray(M.gallery) ? M.gallery : [];
    if (!section || !box) return;
    var approved = list.filter(function (i) { return i && i.approved === true && i.src; });
    var pending = list.filter(function (i) { return i && i.approved !== true; });
    if (!approved.length && !review) return;           /* tetap tersembunyi */

    var html = '';
    approved.forEach(function (it, idx) {
      html += '<figure class="gallery__item">' +
        '<button type="button" class="gallery__btn" data-lightbox="' + idx + '" aria-label="Perbesar foto: ' + esc(it.caption || '') + '">' +
        '<img src="' + esc(it.src) + '" alt="' + esc(it.alt || it.caption || '') + '" width="' + (it.width || 800) + '" height="' + (it.height || 600) + '" loading="lazy" decoding="async">' +
        '</button><figcaption>' + esc(it.caption || '') + '</figcaption></figure>';
    });
    if (review) {
      pending.forEach(function (it) {
        html += '<figure class="gallery__item gallery__item--pending"><div class="gallery__ph">' + ph('foto menunggu persetujuan') + '</div><figcaption>' + esc(it.caption || '') + '</figcaption></figure>';
      });
    }
    box.innerHTML = html;
    section.hidden = false;

    box.addEventListener('click', function (e) {
      var b = e.target.closest('[data-lightbox]');
      if (!b) return;
      var it = approved[parseInt(b.getAttribute('data-lightbox'), 10)];
      if (!it || typeof HTMLDialogElement === 'undefined') return;
      var dlg = document.createElement('dialog');
      dlg.className = 'lightbox';
      dlg.setAttribute('aria-label', it.caption || 'Foto dokumentasi');
      dlg.innerHTML = '<button type="button" class="lightbox__close" aria-label="Tutup">' + icon('close') + '</button>' +
        '<img src="' + esc(it.large || it.src) + '" alt="' + esc(it.alt || it.caption || '') + '">' +
        '<p>' + esc(it.caption || '') + '</p>';
      document.body.appendChild(dlg);
      var close = function () { dlg.close(); };
      dlg.addEventListener('click', function (ev) { if (ev.target === dlg || ev.target.closest('.lightbox__close')) close(); });
      dlg.addEventListener('close', function () { dlg.remove(); b.focus(); });
      dlg.showModal();
    });
  }

  /* ---------- Referensi klien (hanya bila diaktifkan dan ada nama) ---------- */
  function initClients() {
    var section = document.getElementById('klien');
    var list = document.querySelector('[data-client-list]');
    var clients = Array.isArray(S.clients) ? S.clients.map(function (c) { return String(c || '').trim(); }).filter(function (c) { return c && !/placeholder/i.test(c); }) : [];
    if (!section || !list) return;
    if (S.showClientSection === true && clients.length) {
      list.innerHTML = clients.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('');
      section.hidden = false;
    }
  }

  /* ---------- Garis langkah: tergambar sekali saat masuk layar ---------- */
  function initSteps() {
    var steps = document.querySelector('.steps');
    if (!steps) return;
    if (!('IntersectionObserver' in window)) { steps.classList.add('is-visible'); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { steps.classList.add('is-visible'); io.disconnect(); } });
    }, { threshold: 0.25 });
    io.observe(steps);
  }

  /* ---------- Penanda placeholder inline (hanya Mode Review) ---------- */
  function initPlaceholders() {
    var slots = document.querySelectorAll('.ph-slot[data-ph]');
    for (var i = 0; i < slots.length; i++) {
      if (review) slots[i].innerHTML = ph(slots[i].getAttribute('data-ph'));
      else slots[i].remove();
    }
  }

  initPlaceholders(); initHero(); initVideo(); initGallery(); initClients(); initSteps();
})();
