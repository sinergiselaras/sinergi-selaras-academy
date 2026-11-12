/* =====================================================================
   testimonials.js — menampilkan pie chart evaluasi dan kutipan peserta
   Data ada di assets/data/testimonials-data.js. Anda tidak perlu mengubah file ini.
   - Pie chart berbentuk lingkaran penuh (tanpa lubang), dibuat sebagai SVG.
   - Persentase dihitung otomatis dari jumlah jawaban (dibulatkan; total 100%).
   ===================================================================== */
(function () {
  'use strict';
  var SSA = window.SSA || {};
  var esc = SSA.esc || function (s) { return String(s == null ? '' : s); };
  var T = window.SSA_TESTIMONIALS;
  var pieBox = document.querySelector('[data-pie-grid]');
  var quoteBox = document.querySelector('[data-quote-table]');

  function warn(msg, x) { if (window.console && console.warn) console.warn('[SSA testimoni] ' + msg, x || ''); }
  function num(v) { var n = parseInt(v, 10); return isFinite(n) && n > 0 ? n : 0; }

  var CATS = [
    { key: 'more',  label: 'Lebih dari Harapan Saya',   color: '#0139BF', ink: '#ffffff' },
    { key: 'meets', label: 'Sesuai dengan Harapan Saya', color: '#E15A5C', ink: '#ffffff' },
    { key: 'less',  label: 'Kurang dari Harapan Saya',   color: '#F2A93B', ink: '#03105F' }
  ];

  /* Persentase bulat yang jumlahnya tepat 100 (metode sisa terbesar) */
  function percents(counts, total) {
    var raw = counts.map(function (n) { return n * 100 / total; });
    var fl = raw.map(Math.floor);
    var left = 100 - fl.reduce(function (a, b) { return a + b; }, 0);
    var order = raw.map(function (r, i) { return { i: i, f: r - Math.floor(r) }; }).sort(function (a, b) { return b.f - a.f; });
    for (var k = 0; k < left; k++) fl[order[k].i]++;
    return fl;
  }

  function pieSvg(c, pcts, total) {
    var cx = 100, cy = 100, r = 96, a0 = -Math.PI / 2, parts = '', labels = '';
    CATS.forEach(function (cat, i) {
      var n = c[cat.key];
      if (!n) return;
      if (n === total) {
        parts += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + cat.color + '" stroke="#fff" stroke-width="2"/>';
        labels += '<text x="' + cx + '" y="' + (cy + 7) + '" text-anchor="middle" fill="' + cat.ink + '">100%</text>';
        return;
      }
      var a1 = a0 + (n / total) * 2 * Math.PI;
      var x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0), x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
      var large = (a1 - a0) > Math.PI ? 1 : 0;
      parts += '<path d="M' + cx + ' ' + cy + ' L' + x0.toFixed(2) + ' ' + y0.toFixed(2) + ' A' + r + ' ' + r + ' 0 ' + large + ' 1 ' + x1.toFixed(2) + ' ' + y1.toFixed(2) + ' Z" fill="' + cat.color + '" stroke="#fff" stroke-width="2"/>';
      if (pcts[i] >= 6) {
        var am = (a0 + a1) / 2, lr = r * 0.62;
        labels += '<text x="' + (cx + lr * Math.cos(am)).toFixed(1) + '" y="' + (cy + lr * Math.sin(am) + 7).toFixed(1) + '" text-anchor="middle" fill="' + cat.ink + '">' + pcts[i] + '%</text>';
      }
      a0 = a1;
    });
    return parts + '<g font-family="Poppins, Arial, sans-serif" font-weight="700" font-size="20">' + labels + '</g>';
  }

  function pieCard(c) {
    var counts = CATS.map(function (k) { return c[k.key]; });
    var total = counts.reduce(function (a, b) { return a + b; }, 0);
    if (!total) return '';
    var pcts = percents(counts, total);
    var desc = CATS.map(function (k, i) { return k.label + ' ' + counts[i] + ' orang (' + pcts[i] + '%)'; }).join('; ');
    var legend = CATS.map(function (k, i) {
      return '<li><span class="pie-legend__dot" style="background:' + k.color + '"></span><span>' + k.label + '</span><strong>' + counts[i] + ' (' + pcts[i] + '%)</strong></li>';
    }).join('');
    return '<article class="pie-card">' +
      '<h3 class="pie-card__title">' + esc(c.title) + '</h3>' +
      '<p class="pie-card__meta">' + total + ' responden</p>' +
      '<div class="pie-card__chart"><svg viewBox="0 0 200 200" role="img" aria-label="Diagram pie evaluasi ' + esc(c.title) + ': ' + esc(desc) + '">' +
      '<title>Diagram pie evaluasi: ' + esc(c.title) + '</title><desc>' + esc(desc) + '</desc>' + pieSvg(c, pcts, total) + '</svg></div>' +
      '<ul class="pie-legend">' + legend + '</ul></article>';
  }

  function quoteRow(c) {
    var qs = (Array.isArray(c.quotes) ? c.quotes : []).map(function (q) { return String(q || '').trim(); }).filter(function (q) { return q && !/placeholder/i.test(q); });
    if (!qs.length) return '';
    return '<article class="quote-table__row"><h3 class="quote-table__class">' + esc(c.title) + '</h3>' +
      '<div class="quote-table__quotes">' + qs.map(function (q) { return '<blockquote><p>' + esc(q) + '</p></blockquote>'; }).join('') + '</div></article>';
  }

  if (!T || !Array.isArray(T.classes)) { warn('SSA_TESTIMONIALS tidak ditemukan. Periksa assets/data/testimonials-data.js'); return; }

  var pies = '', quotes = '';
  T.classes.forEach(function (c, i) {
    try {
      if (!c || typeof c !== 'object' || !c.title || c.visible === false) return;
      var item = { title: String(c.title), more: num(c.more), meets: num(c.meets), less: num(c.less), quotes: c.quotes };
      var p = pieCard(item); if (p) pies += p; else warn('Kelas "' + c.title + '" dilewati dari pie chart: jumlah jawaban 0.');
      quotes += quoteRow(item);
    } catch (e) { warn('Data kelas #' + (i + 1) + ' dilewati karena ada kesalahan penulisan.', e && e.message); }
  });
  if (pieBox && pies) { pieBox.innerHTML = pies; pieBox.classList.add('is-ready'); }
  if (quoteBox) { if (quotes) { quoteBox.innerHTML = quotes; quoteBox.classList.add('is-ready'); } else quoteBox.hidden = true; }
})();
