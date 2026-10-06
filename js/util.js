/* Namespace + small helpers */
window.EMATH = window.EMATH || { topics: {}, views: {}, viz: {} };
EMATH.registerTopic = function (t) { EMATH.topics[t.id] = t; };

EMATH.util = (function () {
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* h('div', {class:'x', html:'<b>trusted</b>', onclick:fn}, child, [children], 'text') */
  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v == null || v === false) return;
        if (k === 'html') el.innerHTML = v;
        else if (k === 'class') el.className = v;
        else if (k.indexOf('on') === 0 && typeof v === 'function') el.addEventListener(k.slice(2), v);
        else if (v === true) el.setAttribute(k, '');
        else el.setAttribute(k, v);
      });
    }
    (function add(list) {
      list.forEach(function (c) {
        if (c == null || c === false) return;
        if (Array.isArray(c)) add(c);
        else el.appendChild(c.nodeType ? c : document.createTextNode(String(c)));
      });
    })(Array.prototype.slice.call(arguments, 2));
    return el;
  }

  /* Seeded RNG (mulberry32) with helpers */
  function rng(seed) {
    var a = (seed == null ? Math.floor(Math.random() * 2 ** 31) : seed) >>> 0;
    function next() {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
    return {
      next: next,
      int: function (lo, hi) { return lo + Math.floor(next() * (hi - lo + 1)); },
      pick: function (arr) { return arr[Math.floor(next() * arr.length)]; }
    };
  }

  function shuffle(arr, r) {
    var a = arr.slice(), n = r || rng();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(n.next() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a; }

  /* "+ 5" / "- 5" style signed term for building equations */
  function signed(n) { return (n < 0 ? '- ' : '+ ') + Math.abs(n); }

  return { esc: esc, h: h, rng: rng, shuffle: shuffle, gcd: gcd, signed: signed };
})();
