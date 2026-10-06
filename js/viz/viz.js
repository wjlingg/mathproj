/* Interactive visualisations. Each is EMATH.viz[name](container). SVG uses CSS variables so it follows the theme. */
(function () {
  var h = EMATH.util.h;
  var NS = 'http://www.w3.org/2000/svg';

  function svg(w, ht) {
    var s = document.createElementNS(NS, 'svg');
    s.setAttribute('viewBox', '0 0 ' + w + ' ' + ht);
    s.setAttribute('class', 'viz-svg');
    s.setAttribute('role', 'img');
    return s;
  }
  function node(parent, tag, attrs, text) {
    var e = document.createElementNS(NS, tag);
    Object.keys(attrs || {}).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (text != null) e.textContent = text;
    parent.appendChild(e);
    return e;
  }
  function slider(label, min, max, step, val, onInput) {
    var out = h('span', { class: 'slider-val' }, String(val));
    var inp = h('input', { type: 'range', min: min, max: max, step: step, value: val, 'aria-label': label });
    inp.addEventListener('input', function () { out.textContent = inp.value; onInput(+inp.value); });
    return { el: h('label', { class: 'slider' }, h('span', {}, label), inp, out), input: inp };
  }
  function frac(n, d) { var g = EMATH.util.gcd(n, d) || 1; return d / g === 1 ? String(n / g) : (n / g) + '/' + (d / g); }

  /* ---- Pythagoras: squares on the sides ---- */
  EMATH.viz['pythagoras-proof'] = function (box) {
    var a = 3, b = 4;
    var wrap = h('div', { class: 'viz' });
    var stage = h('div', { class: 'viz-stage' });
    var caption = h('p', { class: 'viz-caption', 'aria-live': 'polite' });
    var s1 = slider('Side a', 1, 12, 1, a, function (v) { a = v; draw(); });
    var s2 = slider('Side b', 1, 12, 1, b, function (v) { b = v; draw(); });
    wrap.appendChild(h('div', { class: 'viz-controls' }, s1.el, s2.el));
    wrap.appendChild(stage); wrap.appendChild(caption);
    box.appendChild(wrap);

    function draw() {
      stage.innerHTML = '';
      var s = Math.min(380 / (2 * b + a), 270 / (b + 2 * a));
      var cx = b * s + 20, cy = (a + b) * s + 20;
      var A = [cx, cy - b * s], B = [cx + a * s, cy], C = [cx, cy];
      var out = [b * s, -a * s];
      var el = svg(440, Math.max(160, (b + 2 * a) * s + 40));
      el.setAttribute('aria-label', 'Squares drawn on the sides of a right-angled triangle');
      function poly(pts, cls) { node(el, 'polygon', { points: pts.map(function (p) { return p.join(','); }).join(' '), 'class': cls }); }
      poly([C, B, [B[0], B[1] + a * s], [C[0], C[1] + a * s]], 'sq sq-a');
      poly([C, A, [A[0] - b * s, A[1]], [C[0] - b * s, C[1]]], 'sq sq-b');
      poly([A, B, [B[0] + out[0], B[1] + out[1]], [A[0] + out[0], A[1] + out[1]]], 'sq sq-c');
      poly([A, B, C], 'tri');
      node(el, 'rect', { x: cx + 1, y: cy - 11, width: 10, height: 10, 'class': 'rightangle' });
      var fs = Math.max(11, Math.min(18, s * 1.6));
      node(el, 'text', { x: cx + a * s / 2, y: cy + a * s / 2, 'text-anchor': 'middle', 'dominant-baseline': 'middle', 'class': 'vt', 'font-size': fs }, 'a² = ' + a * a);
      node(el, 'text', { x: cx - b * s / 2, y: cy - b * s / 2, 'text-anchor': 'middle', 'dominant-baseline': 'middle', 'class': 'vt', 'font-size': fs }, 'b² = ' + b * b);
      node(el, 'text', { x: (A[0] + B[0]) / 2 + out[0] / 2, y: (A[1] + B[1]) / 2 + out[1] / 2, 'text-anchor': 'middle', 'dominant-baseline': 'middle', 'class': 'vt', 'font-size': fs }, 'c² = ' + (a * a + b * b));
      stage.appendChild(el);
      var c = Math.sqrt(a * a + b * b);
      caption.innerHTML = EMATH.rm(a + '^2 + ' + b + '^2 = ' + a * a + ' + ' + b * b + ' = ' + (a * a + b * b) + ' = c^2, so c = ' + (Number.isInteger(c) ? c : c.toFixed(2)) + (Number.isInteger(c) ? ' (a Pythagorean triple!)' : ' (to 2 d.p.)'));
    }
    draw();
  };

  /* ---- Graph plotter: solve mx + c = k ---- */
  EMATH.viz['graph-plotter'] = function (box) {
    var m = 2, c = -3, k = 5;
    var wrap = h('div', { class: 'viz' });
    var stage = h('div', { class: 'viz-stage' });
    var caption = h('p', { class: 'viz-caption', 'aria-live': 'polite' });
    wrap.appendChild(h('div', { class: 'viz-controls' },
      slider('m (gradient)', -5, 5, 0.5, m, function (v) { m = v; draw(); }).el,
      slider('c (intercept)', -8, 8, 1, c, function (v) { c = v; draw(); }).el,
      slider('k (right-hand side)', -10, 10, 1, k, function (v) { k = v; draw(); }).el));
    wrap.appendChild(stage); wrap.appendChild(caption);
    box.appendChild(wrap);

    function draw() {
      stage.innerHTML = '';
      var W = 440, H = 300, R = 10, sx = W / (2 * R), sy = H / (2 * R);
      function X(x) { return W / 2 + x * sx; }
      function Y(y) { return H / 2 - y * sy; }
      var el = svg(W, H);
      el.setAttribute('aria-label', 'Graph of y = mx + c with the horizontal line y = k');
      for (var i = -R; i <= R; i++) {
        node(el, 'line', { x1: X(i), y1: 0, x2: X(i), y2: H, 'class': i === 0 ? 'axis' : 'grid' });
        node(el, 'line', { x1: 0, y1: Y(i), x2: W, y2: Y(i), 'class': i === 0 ? 'axis' : 'grid' });
        if (i !== 0 && i % 2 === 0) {
          node(el, 'text', { x: X(i), y: Y(0) + 12, 'text-anchor': 'middle', 'class': 'tick' }, i);
          node(el, 'text', { x: X(0) - 4, y: Y(i) + 3, 'text-anchor': 'end', 'class': 'tick' }, i);
        }
      }
      node(el, 'line', { x1: X(-R), y1: Y(m * -R + c), x2: X(R), y2: Y(m * R + c), 'class': 'line-main' });
      node(el, 'line', { x1: 0, y1: Y(k), x2: W, y2: Y(k), 'class': 'line-k' });
      var msg;
      if (m !== 0) {
        var x = (k - c) / m;
        if (Math.abs(x) <= R && Math.abs(k) <= R) node(el, 'circle', { cx: X(x), cy: Y(k), r: 5, 'class': 'pt' });
        msg = 'Solving ' + fmtEq(m, c) + ' = ' + k + ' gives x = ' + (Math.round(x * 100) / 100) + '. That is where the two lines meet.';
      } else {
        msg = c === k ? 'The lines coincide: every x is a solution.' : 'm = 0 makes the line horizontal and parallel to y = k: no solution.';
      }
      stage.appendChild(el);
      caption.textContent = 'Blue line: y = ' + fmtEq(m, c) + '.  Orange line: y = ' + k + '.  ' + msg;
    }
    function fmtEq(m, c) {
      var s = (m === 1 ? '' : m === -1 ? '-' : m) + 'x';
      if (m === 0) s = '0';
      return s + (c === 0 ? '' : (c < 0 ? ' - ' : ' + ') + Math.abs(c));
    }
    draw();
  };

  /* ---- Probability tree ---- */
  EMATH.viz['prob-tree'] = function (box) {
    var r = 4, b = 6, replace = false;
    var wrap = h('div', { class: 'viz' });
    var stage = h('div', { class: 'viz-stage' });
    var caption = h('p', { class: 'viz-caption', 'aria-live': 'polite' });
    var chk = h('input', { type: 'checkbox' });
    chk.addEventListener('change', function () { replace = chk.checked; draw(); });
    wrap.appendChild(h('div', { class: 'viz-controls' },
      slider('Red balls', 1, 8, 1, r, function (v) { r = v; draw(); }).el,
      slider('Blue balls', 1, 8, 1, b, function (v) { b = v; draw(); }).el,
      h('label', { class: 'slider' }, chk, h('span', {}, 'Replace the ball after the first draw'))));
    wrap.appendChild(stage); wrap.appendChild(caption);
    box.appendChild(wrap);

    function draw() {
      stage.innerHTML = '';
      var n = r + b, W = 460, H = 280;
      var el = svg(W, H);
      el.setAttribute('aria-label', 'Tree diagram for two draws');
      var root = [20, 140], l1 = [170, 70], l2 = [170, 210];
      var second = replace
        ? { R: [r, n], B: [b, n], RB: [b, n], BB: [b, n], RR: [r, n], BR: [r, n] }
        : null;
      var pr1 = [r, n], pb1 = [b, n];
      var afterR = replace ? { r: r, b: b, n: n } : { r: r - 1, b: b, n: n - 1 };
      var afterB = replace ? { r: r, b: b, n: n } : { r: r, b: b - 1, n: n - 1 };
      var rows = [
        { p: l1, y: 30, lab: 'R', ctx: afterR, col: 'R', first: [r, n] },
        { p: l1, y: 110, lab: 'B', ctx: afterR, col: 'B', first: [r, n] },
        { p: l2, y: 170, lab: 'R', ctx: afterB, col: 'R', first: [b, n] },
        { p: l2, y: 250, lab: 'B', ctx: afterB, col: 'B', first: [b, n] }
      ];
      function lineTo(a, bb, label) {
        node(el, 'line', { x1: a[0], y1: a[1], x2: bb[0], y2: bb[1], 'class': 'branch' });
        node(el, 'text', { x: (a[0] + bb[0]) / 2, y: (a[1] + bb[1]) / 2 - 5, 'text-anchor': 'middle', 'class': 'tick bl' }, label);
      }
      lineTo(root, l1, frac(r, n)); lineTo(root, l2, frac(b, n));
      node(el, 'text', { x: l1[0] + 4, y: l1[1] - 8, 'class': 'vt', 'font-size': 14, 'text-anchor': 'middle' }, 'Red');
      node(el, 'text', { x: l2[0] + 4, y: l2[1] + 20, 'class': 'vt', 'font-size': 14, 'text-anchor': 'middle' }, 'Blue');
      var total = 0, items = [];
      rows.forEach(function (row, i) {
        var num = row.col === 'R' ? row.ctx.r : row.ctx.b, den = row.ctx.n;
        var end = [330, row.y];
        lineTo(row.p, end, frac(num, den));
        var p = (row.first[0] / row.first[1]) * (num / den);
        total += p;
        var pn = row.first[0] * num, pd = row.first[1] * den;
        var o = (i < 2 ? 'R' : 'B') + row.col;
        node(el, 'text', { x: end[0] + 8, y: end[1] + 4, 'class': 'vt', 'font-size': 14 }, o + '  ' + frac(pn, pd));
        items.push([o, pn, pd]);
      });
      stage.appendChild(el);
      var rr = items[0], diff = [items[1], items[2]];
      var dn = diff[0][1] * diff[1][2] + diff[1][1] * diff[0][2], dd = diff[0][2] * diff[1][2];
      caption.textContent = 'P(both red) = ' + frac(rr[1], rr[2]) + '.  P(different colours) = ' + frac(dn, dd) +
        '.  The four outcomes add up to ' + (Math.abs(total - 1) < 1e-9 ? '1 ✓' : total.toFixed(3)) + '.';
    }
    draw();
  };
})();
