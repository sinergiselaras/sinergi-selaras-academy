function cookieValue(name) {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : '';
}

(function () {
  'use strict';

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

    var eventName = isWhatsApp ? 'Contact' : (a.hasAttribute('data-register') ? 'Lead' : null);
    if (!eventName) return;

    var eventId = (window.crypto && typeof window.crypto.randomUUID === 'function')
      ? window.crypto.randomUUID()
      : 'ssa-' + Date.now() + '-' + Math.random().toString(16).slice(2);

    // Browser dan server memakai event_name + event_id yang sama agar Meta dapat deduplikasi.
    window.fbq('track', eventName, {}, { eventID: eventId });

    var payload = {
      event_name: eventName,
      event_id: eventId,
      event_source_url: window.location.href,
      fbp: cookieValue('_fbp'),
      fbc: cookieValue('_fbc')
    };

    // keepalive membantu request tetap terkirim ketika pengunjung berpindah ke WhatsApp/form.
    try {
      fetch('/api/meta-capi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
        credentials: 'same-origin'
      }).then(function (response) {
        return response.text().then(function (text) {
          var result;
          try { result = JSON.parse(text); } catch (err) { result = { raw_response: text }; }
          if (!response.ok) {
            console.error('[SSA Meta CAPI] Request failed', response.status, result);
          } else {
            console.info('[SSA Meta CAPI] Response', response.status, result);
          }
        });
      }).catch(function (error) {
        console.error('[SSA Meta CAPI] Network error', error && error.message ? error.message : error);
      });
    } catch (err) {}
  });
})();