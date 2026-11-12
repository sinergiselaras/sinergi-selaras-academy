/* =====================================================================
   pixel.js — Meta Pixel. NONAKTIF sampai Pixel ID diisi di
   assets/data/site-data.js (bagian pixelId). Selama kosong, tidak ada
   skrip Meta yang dimuat dan tidak ada data yang dikirim.
   Peristiwa: PageView, Contact (klik WhatsApp), Lead (klik link pendaftaran).
   ===================================================================== */
(function () {
  'use strict';
  var S = window.SSA_SITE || {};
  var id = String(S.pixelId || '').replace(/\D/g, '');
  if (!id) return;
  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
    if (!f._fbq) f._fbq = n;
    n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
    t = b.createElement(e); t.async = true; t.src = v;
    s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  window.fbq('init', id);
  window.fbq('track', 'PageView');
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    if (a.hasAttribute('data-wa')) window.fbq('track', 'Contact');
    else if (a.hasAttribute('data-register')) window.fbq('track', 'Lead');
  });
})();
