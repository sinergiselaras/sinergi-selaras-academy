/* =====================================================================
   whatsapp.js — membuat tautan WhatsApp sesuai konteks
   Pesan dan nomor diatur di assets/data/site-data.js (jangan ubah di sini).

   Cara pakai di HTML:
     <a href="https://wa.me/628976770480" data-wa="korporat">...</a>
   Nilai data-wa: umum | korporat | publik | kelas | lms
   Opsional: data-wa-title="Judul Kelas" (untuk pesan 'kelas')
             data-wa-message="Pesan khusus" (menggantikan pesan standar)
   Atribut href di HTML adalah cadangan bila JavaScript tidak berjalan.
   ===================================================================== */
(function () {
  'use strict';
  var S = window.SSA_SITE || {};
  var W = S.whatsapp || { number: '628976770480', messages: {} };
  var SSA = (window.SSA = window.SSA || {});

  SSA.waLink = function (key, vars, customMessage) {
    var tpl = customMessage || (W.messages && (W.messages[key] || W.messages.umum)) || '';
    var text = tpl.replace(/\{(\w+)\}/g, function (m, k) {
      return vars && vars[k] != null ? vars[k] : '';
    });
    return 'https://wa.me/' + W.number + (text ? '?text=' + encodeURIComponent(text) : '');
  };

  SSA.upgradeWaLinks = function (root) {
    var links = (root || document).querySelectorAll('[data-wa]');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      a.href = SSA.waLink(
        a.getAttribute('data-wa'),
        { title: a.getAttribute('data-wa-title') || '' },
        a.getAttribute('data-wa-message') || ''
      );
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
  };

  document.addEventListener('DOMContentLoaded', function () { SSA.upgradeWaLinks(); });
})();
