function cookieValue(name) {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : '';
}

(function () {
  'use strict';

  if (typeof window.fbq !== 'function') return;

  function createEventId() {
    return (window.crypto && typeof window.crypto.randomUUID === 'function')
      ? window.crypto.randomUUID()
      : 'ssa-' + Date.now() + '-' + Math.random().toString(16).slice(2);
  }

  function sendCapiEvent(eventName, eventId) {
    var payload = {
      event_name: eventName,
      event_id: eventId,
      event_source_url: window.location.href,
      fbp: cookieValue('_fbp'),
      fbc: cookieValue('_fbc')
    };

    return fetch('/api/meta-capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
      credentials: 'same-origin'
    }).then(function (response) {
      return response.text().then(function (text) {
        var result;
        try { result = JSON.parse(text); } catch (err) { result = { raw_response: text }; }
        var diagnostic = {
          event_name: eventName,
          event_id: eventId,
          http_status: response.status,
          ok: response.ok,
          response: result
        };
        console.info('[SSA Meta CAPI] Diagnostic', diagnostic);

        // Preview-only visible diagnostic so the result can be read without DevTools.
        if (window.location.hostname !== 'sinergi-selaras-academy.pages.dev') {
          var panel = document.getElementById('ssa-capi-diagnostic');
          if (!panel) {
            panel = document.createElement('pre');
            panel.id = 'ssa-capi-diagnostic';
            panel.style.cssText = 'position:fixed;z-index:2147483647;left:12px;right:12px;bottom:12px;max-height:40vh;overflow:auto;padding:12px;background:#101827;color:#fff;border:2px solid ' + (response.ok ? '#16a34a' : '#dc2626') + ';border-radius:8px;font:12px/1.5 monospace;white-space:pre-wrap;word-break:break-word;';
            document.body.appendChild(panel);
          }
          panel.textContent = 'SSA CAPI DIAGNOSTIC\\n' + JSON.stringify(diagnostic, null, 2);
        }
      });
    }).catch(function (error) {
      var diagnostic = {
        event_name: eventName,
        event_id: eventId,
        network_error: error && error.message ? error.message : String(error)
      };
      console.error('[SSA Meta CAPI] Network error', diagnostic);
      if (window.location.hostname !== 'sinergi-selaras-academy.pages.dev') {
        var panel = document.getElementById('ssa-capi-diagnostic') || document.createElement('pre');
        panel.id = 'ssa-capi-diagnostic';
        panel.style.cssText = 'position:fixed;z-index:2147483647;left:12px;right:12px;bottom:12px;max-height:40vh;overflow:auto;padding:12px;background:#101827;color:#fff;border:2px solid #dc2626;border-radius:8px;font:12px/1.5 monospace;white-space:pre-wrap;word-break:break-word;';
        panel.textContent = 'SSA CAPI DIAGNOSTIC\\n' + JSON.stringify(diagnostic, null, 2);
        if (!panel.parentNode) document.body.appendChild(panel);
      }
    });
  }

  // ViewContent: browser dan server menerima event ID yang sama pada setiap page load.
  var viewContentId = createEventId();
  window.fbq('track', 'ViewContent', {}, { eventID: viewContentId });
  sendCapiEvent('ViewContent', viewContentId);

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

    var eventId = createEventId();

    // Browser dan server memakai event_name + event_id yang sama agar Meta dapat deduplikasi.
    window.fbq('track', eventName, {}, { eventID: eventId });
    sendCapiEvent(eventName, eventId);
  });
})();
