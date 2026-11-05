/* =====================================================================
   components.js — HEADER, FOOTER, dan tombol WhatsApp melayang
   Header & footer ditulis SEKALI di file ini, lalu tampil di semua halaman.
   Menu diatur di assets/data/site-data.js (bagian "nav").

   Catatan teknis:
   - Script ini dimuat langsung setelah <header> agar tidak ada lompatan layout
     (tinggi header sudah dipesan lewat CSS).
   - Bila JavaScript gagal, HTML tiap halaman punya <noscript> dengan tautan penting.
   ===================================================================== */
(function () {
  'use strict';
  var S = window.SSA_SITE || {};
  var SSA = (window.SSA = window.SSA || {});
  var SPRITE = '/assets/img/icons/sprite.svg';
  var review = !!(S.review && S.review.showPlaceholders);

  document.documentElement.classList.add('js');

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function icon(name, extra) {
    return '<svg class="icon' + (extra ? ' ' + extra : '') + '" aria-hidden="true" focusable="false"><use href="' + SPRITE + '#i-' + name + '"></use></svg>';
  }
  /* Penanda placeholder: hanya tampil bila review.showPlaceholders = true */
  function ph(text) {
    return review ? '<span class="ph">[PLACEHOLDER: ' + esc(text) + ']</span>' : '';
  }
  function isUrl(u) { return /^https?:\/\//i.test(String(u || '')); }

  SSA.esc = esc; SSA.icon = icon; SSA.ph = ph; SSA.review = review; SSA.isUrl = isUrl;

  var path = location.pathname.replace(/index\.html$/, '');
  function isCurrent(href) {
    return href === '/' ? path === '/' : path.indexOf(href) === 0;
  }
  var NAV = S.nav || [];
  var waUrl = 'https://wa.me/' + ((S.whatsapp && S.whatsapp.number) || '');

  function navItems() {
    return NAV.map(function (n) {
      var cur = isCurrent(n.href);
      return '<li><a href="' + esc(n.href) + '"' + (cur ? ' aria-current="page"' : '') + '>' + esc(n.label) + '</a></li>';
    }).join('');
  }

  /* ---------------- HEADER ---------------- */
  var header = document.getElementById('site-header');
  if (header) {
    header.innerHTML =
      '<div class="container site-header__inner">' +
        '<a class="brand" href="/"><img src="/assets/img/brand/logo-ssa.png" width="134" height="44" alt="Sinergi Selaras Academy"></a>' +
        '<nav class="main-nav" aria-label="Navigasi utama"><ul>' + navItems() + '</ul></nav>' +
        '<div class="site-header__actions">' +
          '<a class="btn btn--primary btn--sm header-cta" href="' + waUrl + '" data-wa="umum">' + icon('wa', 'icon--fill') + '<span class="header-cta__text">Hubungi via WhatsApp</span></a>' +
          '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Buka menu">' + icon('menu') + '</button>' +
        '</div>' +
      '</div>' +
      '<div class="mobile-menu" id="mobile-menu" hidden>' +
        '<nav aria-label="Navigasi seluler"><ul>' + navItems() + '</ul></nav>' +
        '<a class="btn btn--wa btn--block" href="' + waUrl + '" data-wa="umum">' + icon('wa', 'icon--fill') + 'Hubungi via WhatsApp</a>' +
      '</div>';

    var toggle = header.querySelector('.menu-toggle');
    var menu = header.querySelector('#mobile-menu');
    var setMenu = function (open) {
      menu.hidden = !open;
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
      toggle.innerHTML = icon(open ? 'close' : 'menu');
      document.body.classList.toggle('menu-open', open);
    };
    toggle.addEventListener('click', function () { setMenu(menu.hidden); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) { setMenu(false); toggle.focus(); }
    });
    window.addEventListener('resize', function () { if (window.innerWidth >= 1100 && !menu.hidden) setMenu(false); });

    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (SSA.upgradeWaLinks) SSA.upgradeWaLinks(header);
  }

  /* ---------------- FOOTER + WA MELAYANG (setelah DOM siap) ---------------- */
  function buildFooter() {
    var footer = document.getElementById('site-footer');
    var W = S.whatsapp || {};

    if (review) document.body.classList.add('review-mode');

    if (footer) {
      var social = [['instagram', 'Instagram'], ['tiktok', 'TikTok'], ['facebook', 'Facebook']].map(function (p) {
        var url = S.social && S.social[p[0]];
        if (isUrl(url)) return '<li><a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + p[1] + '</a></li>';
        return review ? '<li>' + ph('URL ' + p[1]) + '</li>' : '';
      }).join('');

      var email = S.email
        ? '<li><a href="mailto:' + esc(S.email) + '">' + esc(S.email) + '</a></li>'
        : (review ? '<li>' + ph('email') + '</li>' : '');
      var address = '<li>' + (S.address ? esc(S.address) : 'Bandung, Indonesia') + '</li>' +
        (!S.address && review ? '<li>' + ph('alamat lengkap') + '</li>' : '');

      footer.innerHTML =
        '<div class="container footer__grid">' +
          '<div class="footer__brand">' +
            '<a class="footer__logo" href="/"><img src="/assets/img/brand/logo-ssa.png" width="134" height="44" alt="Sinergi Selaras Academy" loading="lazy"></a>' +
            '<p class="footer__tagline">' + esc(S.tagline || '') + '</p>' +
            '<p class="footer__about">Penyedia pelatihan dan pengembangan SDM untuk perusahaan dan profesional.</p>' +
          '</div>' +
          '<nav class="footer__col" aria-label="Navigasi footer"><h2 class="footer__title">Navigasi</h2><ul>' + navItems() + '</ul></nav>' +
          '<div class="footer__col"><h2 class="footer__title">Kontak</h2><ul>' +
            '<li><a href="' + waUrl + '" data-wa="umum">WhatsApp ' + esc(W.display || '') + '</a></li>' + email + address +
          '</ul></div>' +
          (social ? '<div class="footer__col"><h2 class="footer__title">Ikuti kami</h2><ul>' + social + '</ul></div>' : '') +
        '</div>' +
        '<div class="container footer__bottom"><p>&copy; ' + new Date().getFullYear() + ' Sinergi Selaras Academy. Semua hak dilindungi.</p></div>';
    }

    var float = document.createElement('a');
    float.className = 'wa-float';
    float.href = waUrl;
    float.setAttribute('data-wa', 'umum');
    float.setAttribute('aria-label', 'Chat WhatsApp Sinergi Selaras Academy');
    float.innerHTML = icon('wa', 'icon--fill');
    document.body.appendChild(float);

    if (review) {
      var tag = document.createElement('div');
      tag.className = 'review-banner';
      tag.textContent = 'Mode review: bagian bertanda kuning belum resmi';
      document.body.appendChild(tag);
    }

    if (SSA.upgradeWaLinks) SSA.upgradeWaLinks(document);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildFooter);
  else buildFooter();
})();
