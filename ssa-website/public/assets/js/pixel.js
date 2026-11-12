/* =====================================================================
   pixel.js — Event tambahan Meta Pixel SSA.
   Meta Pixel base code dan PageView sudah dimuat di masing-masing HTML.
   File ini hanya mencatat Contact (klik WhatsApp) dan Lead (pendaftaran).
   ===================================================================== */
(function () {
  'use strict';

  // Gunakan Pixel yang sudah dimuat oleh kode dasar di HTML.
  // Jangan init ulang dan jangan mengirim PageView kedua kali.
  if (typeof window.fbq !== 'function') return;

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;

    var isWhatsApp = a.hasAttribute('data-wa');
    try {
      var host = new URL(a.href, window.location.href).hostname.toLowerCase();
      isWhatsApp = isWhatsApp ||
        host === 'wa.me' ||
        host === 'api.whatsapp.com' ||
        host === 'web.whatsapp.com';
    } catch (err) {}

    if (isWhatsApp) {
      window.fbq('track', 'Contact');
    } else if (a.hasAttribute('data-register')) {
      window.fbq('track', 'Lead');
    }
  });
})();
