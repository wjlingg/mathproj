/*
 * Question figures: EMATH.fig.render(spec) -> <figure> with an inline SVG, or null for an unknown type.
 * A question (or a part) carries `figure: {type, ..., alt}`. Figures are drawn from numbers and labels,
 * never hand-drawn, so generators can supply a diagram that always matches the answer.
 * Every figure is "not drawn to scale" unless spec.scale === true; always give `alt` (read by screen readers).
 *
 * Types and their keys (all optional unless stated; y points up, polygons run anticlockwise from bottom-left):
 *   triangle  v:['A','B','C'] shape:'right'|'isosceles'|'equilateral'|'scalene' w,h pts
 *             right angle is at v[1] (bottom-left); isosceles has its apex at v[0]
 *   polygon   v shape:'parallelogram'|'rectangle'|'regular'|'general' n w h pts   (convex only)
 *   parallel  top:['A','B'] bottom:['C','D'] cross:['P','Q'] or ['R','P','Q','S'] theta lean:'right'|'left'
 *   fan       total:180|360 parts:[{deg,label,name}] start      (angles on a line or at a point)
 *   grid      x:[min,max] y:[min,max] points:{A:[x,y]} segments:[['A','B','accent'|'dash'|'arrow']] dots
 *             curves:[{f:function(x){...}, from, to, accent, dash}]  paths:[{pts:[[x,y],...], accent, dash}]
 *             free:true h:220 (axes scaled separately, for speed-time and other graphs) xstep ystep step every xlabel ylabel
 *   cuboid    dims:[l,w,h]  (base ABCD, top EFGH, D is the hidden corner)
 *   circle    on:{A:angleDeg,...} o:'O' (or false) radii:['A'] chords:[['A','B']] poly:['A','B','C','D']
 *             ext:{name:'P', angle, dist, touch:['A','B']} (tangents from P, radius 1)  tangentAt:[{at:'A', names:['T','U']}]
 *   bearing   start:'A' legs:[{name:'B', from, bearing, dist, label:'050°', side:'20 km', dash}] north:['B']
 *             (drawn true to the bearings and distances; north rays are added where a bearing is labelled)
 *   multi     parts:[spec, spec, ...]  places several figures side by side (for similar and congruent shapes)
 * Triangle also takes shape:'sss' sides:[AB,BC,CA] k (scale), so similar triangles can be drawn from their sides.
 * Common keys: side:{AB:'8 cm'}  angle:{A:'65°'}  right:['B']  equal:[['AB','AC']]  extend:[{from,through,name,len}]
 *   rays:[{from,angle,len,name,dash}]  arcs:[{at,from,to,label,r,big}]  lines:[{a,b,dash,label,side,accent}]
 *   points:{name:[x,y]} (names starting "_" are hidden)  dots:[names]  names:false  hide:[names]  nameAt:{A:[dx,dy]}
 *   divide:[{name:'D', a:'A', b:'B', t:0.4}] (a point part-way along a line)  par:[['D','E'],['B','C']] (parallel arrows)
 *   texts:[{at:'A' | [x,y] in graph units, text:'N', dx, dy}]   arrow:['OA','OB'] (arrowhead at the middle of that side, pointing away from the first letter)
 */
EMATH.fig = (function () {
  var esc = EMATH.util.esc;
  var W = 360, MAXH = 290, PAD = 40, PADX = 56, RAD = Math.PI / 180;

  function key2(k) {
    var a = k.indexOf('-') >= 0 ? k.split('-') : k.split('');
    return [a[0], a[1]];
  }
  function same(l, a, b) { return (l.a === a && l.b === b) || (l.a === b && l.b === a); }
  function lineFor(sc, a, b, make) {
    for (var i = 0; i < sc.lines.length; i++) if (same(sc.lines[i], a, b)) return sc.lines[i];
    var l = { a: a, b: b };
    if (make !== false) sc.lines.push(l);
    return l;
  }
  function clampRatio(w, h) {
    var r = w / h;
    if (r > 2.4) w = h * 2.4; else if (r < 1 / 2.4) h = w * 2.4;
    return [w, h];
  }
  function letters(n) { var o = [], i; for (i = 0; i < n; i++) o.push(String.fromCharCode(65 + i)); return o; }

  /* ---- presets: spec -> scene {points, lines, polygon, ...} ---- */
  var presets = {
    triangle: function (spec) {
      var v = spec.v || ['A', 'B', 'C'], shape = spec.shape || 'scalene';
      var d = clampRatio(spec.w || 4, spec.h || 3), w = d[0], h = d[1], pts;
      if (shape === 'equilateral') { w = 4; h = 4 * Math.sqrt(3) / 2; }
      if (spec.pts) pts = spec.pts;
      else if (shape === 'sss') {
        var ab = spec.sides[0], bc = spec.sides[1], ca = spec.sides[2], k = spec.k || 1;
        var ax = (ab * ab + bc * bc - ca * ca) / (2 * bc);
        pts = [[ax * k, Math.sqrt(Math.max(ab * ab - ax * ax, 0.01)) * k], [0, 0], [bc * k, 0]];
      }
      else if (shape === 'right') pts = [[0, h], [0, 0], [w, 0]];
      else if (shape === 'isosceles' || shape === 'equilateral') pts = [[w / 2, h], [0, 0], [w, 0]];
      else pts = [[w * 0.35, h], [0, 0], [w, 0]];
      var sc = { points: {}, lines: [], polygon: v.slice() };
      v.forEach(function (n, i) { sc.points[n] = pts[i]; });
      if (spec.right == null && shape === 'right') spec.right = [v[1]];
      if (spec.equal == null && shape === 'isosceles') spec.equal = [[v[0] + v[1], v[0] + v[2]]];
      if (spec.equal == null && shape === 'equilateral') spec.equal = [[v[0] + v[1], v[1] + v[2], v[0] + v[2]]];
      return sc;
    },
    polygon: function (spec) {
      var shape = spec.shape || 'regular', n = spec.n || (spec.pts ? spec.pts.length : 5), pts, i;
      var d = clampRatio(spec.w || 4, spec.h || 2.4), w = d[0], h = d[1];
      if (spec.pts) pts = spec.pts;
      else if (shape === 'parallelogram') pts = [[0, 0], [w, 0], [w + h * 0.5, h], [h * 0.5, h]];
      else if (shape === 'rectangle') pts = [[0, 0], [w, 0], [w, h], [0, h]];
      else {
        pts = [];
        for (i = 0; i < n; i++) {
          var a = (270 - 180 / n + i * 360 / n) * RAD;
          pts.push([Math.cos(a), Math.sin(a)]);
        }
      }
      var v = spec.v || letters(pts.length);
      var sc = { points: {}, lines: [], polygon: v.slice() };
      v.forEach(function (name, k) { sc.points[name] = pts[k]; });
      return sc;
    },
    parallel: function (spec) {
      var top = spec.top || ['A', 'B'], bot = spec.bottom || ['C', 'D'], cr = spec.cross || ['P', 'Q'];
      var theta = (spec.theta || 65) * RAD, sign = spec.lean === 'left' ? -1 : 1, g = 2;
      var dx = sign * g / Math.tan(theta), L = Math.max(2.2, Math.abs(dx) / 2 + 1.3), ext = 0.45 * g;
      var P = cr.length === 4 ? cr[1] : cr[0], Q = cr.length === 4 ? cr[2] : cr[cr.length - 1];
      var R = cr.length === 4 ? cr[0] : '_up', S = cr.length === 4 ? cr[3] : '_dn';
      var sc = { points: {}, lines: [], polygon: null, centre: [0, 0] };
      var px = dx / 2, ux = ext * dx / g;
      sc.points[top[0]] = [-L, g / 2]; sc.points[top[1]] = [L, g / 2];
      sc.points[bot[0]] = [-L, -g / 2]; sc.points[bot[1]] = [L, -g / 2];
      sc.points[P] = [px, g / 2]; sc.points[Q] = [-px, -g / 2];
      sc.points[R] = [px + ux, g / 2 + ext]; sc.points[S] = [-px - ux, -g / 2 - ext];
      sc.lines.push({ a: top[0], b: top[1] }, { a: bot[0], b: bot[1] }, { a: R, b: S });
      var mx = (-L + (-Math.abs(px))) / 2 + 0.1;
      sc.parallels = [{ a: top[0], b: top[1], x: mx, y: g / 2 }, { a: bot[0], b: bot[1], x: mx, y: -g / 2 }];
      sc.nameAt = {};
      sc.nameAt[P] = [-13 * sign, -10]; sc.nameAt[Q] = [13 * sign, 14];
      sc.nameAt[R] = [8 * sign, -8]; sc.nameAt[S] = [-8 * sign, 14];
      sc.ends = [top[0], top[1], bot[0], bot[1], R, S];
      return sc;
    },
    fan: function (spec) {
      var total = spec.total || 180, start = spec.start != null ? spec.start : (total === 180 ? 0 : 25);
      var sc = { points: { _O: [0, 0] }, lines: [], arcs: [], polygon: null, centre: [0, 0] };
      var cur = start, parts = spec.parts || [], i;
      function pt(k, a) { sc.points['_r' + k] = [Math.cos(a * RAD), Math.sin(a * RAD)]; }
      pt(0, cur); sc.lines.push({ a: '_O', b: '_r0' });
      for (i = 0; i < parts.length; i++) {
        var prev = '_r' + i, next = '_r' + (i + 1);
        cur += parts[i].deg;
        pt(i + 1, cur);
        if (!(total === 360 && i === parts.length - 1)) sc.lines.push({ a: '_O', b: next });
        sc.arcs.push({ at: '_O', from: prev, to: next, label: parts[i].label, r: 26 + (i % 2) * 6, big: parts[i].deg > 180 });
      }
      if (total === 180) { sc.points._l = [-1.15, 0]; sc.points._rr = [1.15, 0]; sc.lines.push({ a: '_l', b: '_rr' }); }
      return sc;
    },
    grid: function (spec) {
      var sc = { points: {}, lines: [], polygon: null, centre: [0, 0], curves: spec.curves || [], paths: spec.paths || [] };
      sc.grid = { x: spec.x, y: spec.y, free: spec.free, h: spec.h, step: spec.step, xstep: spec.xstep, ystep: spec.ystep, every: spec.every, xlabel: spec.xlabel, ylabel: spec.ylabel };
      var pts = spec.points || {};
      Object.keys(pts).forEach(function (n) { sc.points[n] = pts[n]; });
      (spec.segments || []).forEach(function (s) {
        sc.lines.push({ a: s[0], b: s[1], accent: s[2] === 'accent' || s[2] === 'arrow', dash: s[2] === 'dash', arrowFrom: s[2] === 'arrow' ? s[0] : null, arrowEnd: true });
      });
      sc.dotsDefault = Object.keys(pts).filter(function (n) { return n.charAt(0) !== '_'; });
      sc.pointLabels = spec.pointLabels || {};
      return sc;
    },
    circle: function (spec) {
      var cn = spec.o === undefined ? 'O' : (spec.o || '_O');
      var sc = { points: {}, lines: [], circles: [{ at: cn, r: 1 }], polygon: null, centre: [0, 0], dots: [], nameAt: {} };
      sc.points[cn] = [0, 0];
      if (cn.charAt(0) !== '_') { sc.dots.push(cn); sc.nameAt[cn] = [-11, -12]; }
      var on = spec.on || {}, ext = spec.ext;
      Object.keys(on).forEach(function (n) { var a = on[n] * RAD; sc.points[n] = [Math.cos(a), Math.sin(a)]; });
      (spec.radii || []).forEach(function (n) { sc.lines.push({ a: cn, b: n }); });
      (spec.chords || []).forEach(function (c) { sc.lines.push({ a: c[0], b: c[1] }); });
      if (spec.poly) {
        sc.polygon = spec.poly.slice();
        spec.poly.forEach(function (n, i) { sc.lines.push({ a: n, b: spec.poly[(i + 1) % spec.poly.length] }); });
      }
      sc.rights = [];
      if (ext) {
        var phi = (ext.angle || 0) * RAD, d = ext.dist || 2, off = Math.acos(1 / d), touch = ext.touch || [];
        sc.points[ext.name] = [d * Math.cos(phi), d * Math.sin(phi)];
        touch.forEach(function (n, i) {
          var a = phi + (i === 0 ? off : -off);
          sc.points[n] = [Math.cos(a), Math.sin(a)];
          sc.lines.push({ a: ext.name, b: n });
          // the right-angle mark only makes sense when the radius to the point of contact is drawn
          if ((spec.radii || []).indexOf(n) >= 0) sc.rights.push({ at: n, from: cn, to: ext.name });
        });
        if (ext.centreLine) sc.lines.push({ a: cn, b: ext.name, dash: ext.centreLine === 'dash' });
      }
      (spec.tangentAt || []).forEach(function (t) {
        var a = on[t.at] * RAD, len = t.len || 1.1, p = sc.points[t.at];
        sc.points[t.names[0]] = [p[0] - len * Math.sin(a), p[1] + len * Math.cos(a)];
        sc.points[t.names[1]] = [p[0] + len * Math.sin(a), p[1] - len * Math.cos(a)];
        sc.lines.push({ a: t.names[0], b: t.names[1] });
      });
      return sc;
    },
    bearing: function (spec) {
      var start = spec.start || 'A', legs = spec.legs || [], maxd = 0;
      var sc = { points: {}, lines: [], arcs: [], texts: [], polygon: null }, made = {}, used = {};
      sc.points[start] = [0, 0];
      legs.forEach(function (l) { if (l.dist > maxd) maxd = l.dist; });
      function north(n) {
        if (made[n]) return;
        made[n] = true;
        var p = sc.points[n];
        sc.points['_n' + n] = [p[0], p[1] + maxd * 0.45];
        sc.lines.push({ a: n, b: '_n' + n, dash: true });
        sc.texts.push({ at: '_n' + n, text: 'N', dy: -10 });
      }
      legs.forEach(function (l) {
        var from = l.from || start, p = sc.points[from], t = l.bearing * RAD;
        sc.points[l.name] = [p[0] + l.dist * Math.sin(t), p[1] + l.dist * Math.cos(t)];
        // the label goes on the clockwise side of the leg, away from the north arcs
        sc.lines.push({ a: from, b: l.name, label: l.side, dash: l.dash, right: true });
        if (l.label != null) {
          north(from);
          used[from] = (used[from] || 0) + 1;
          // bearing labels sit near the north line (not mid-arc) so that several bearings from one point stay readable
          sc.arcs.push({ at: from, from: '_n' + from, to: l.name, label: l.label, r: 14 + 22 * used[from], big: l.bearing % 360 > 180, near: 0.4 });
        }
      });
      (spec.north || []).forEach(north);
      return sc;
    },
    cuboid: function (spec) {
      var d = spec.dims || [4, 3, 2], l = d[0], wd = d[1] * 0.55, h = d[2], ox = wd * 0.8, oy = wd * 0.6;
      var sc = { points: { A: [0, 0], B: [l, 0], C: [l + ox, oy], D: [ox, oy], E: [0, h], F: [l, h], G: [l + ox, oy + h], H: [ox, oy + h] },
        lines: [], polygon: null, nameAt: { F: [-7, -14] } };
      [['A', 'B'], ['B', 'C'], ['A', 'E'], ['B', 'F'], ['C', 'G'], ['E', 'F'], ['F', 'G'], ['G', 'H'], ['E', 'H']].forEach(function (e) { sc.lines.push({ a: e[0], b: e[1] }); });
      [['A', 'D'], ['D', 'C'], ['D', 'H']].forEach(function (e) { sc.lines.push({ a: e[0], b: e[1], dash: true, faint: true }); });
      return sc;
    }
  };

  /* ---- common keys: side, angle, right, equal, extend, rays, arcs, lines, points ---- */
  function applyCommon(sc, spec) {
    sc.arcs = sc.arcs || []; sc.rights = sc.rights || []; sc.ticks = sc.ticks || []; sc.dots = sc.dots || [];
    sc.parallels = sc.parallels || []; sc.nameAt = Object.assign(sc.nameAt || {}, spec.nameAt || {});
    var P = sc.points;
    Object.keys(spec.points || {}).forEach(function (n) { if (spec.type !== 'grid') P[n] = spec.points[n]; });
    if (sc.polygon && !sc.lines.length) {
      sc.polygon.forEach(function (n, i) { sc.lines.push({ a: n, b: sc.polygon[(i + 1) % sc.polygon.length] }); });
    }
    (spec.divide || []).forEach(function (d) {
      var a = P[d.a], b = P[d.b];
      P[d.name] = [a[0] + (b[0] - a[0]) * d.t, a[1] + (b[1] - a[1]) * d.t];
    });
    (spec.par || []).forEach(function (p) { sc.parallels.push({ a: p[0], b: p[1], t: 0.5 }); });
    sc.texts = (sc.texts || []).concat(spec.texts || []);
    (spec.extend || []).forEach(function (e) {
      var a = P[e.from], b = P[e.through], k = e.len != null ? e.len : 0.5;
      P[e.name] = [b[0] + (b[0] - a[0]) * k, b[1] + (b[1] - a[1]) * k];
      sc.lines.push({ a: e.through, b: e.name });
    });
    (spec.rays || []).forEach(function (r) {
      var a = P[r.from], len = r.len || 1.5, an = (r.angle || 0) * RAD;
      P[r.name] = [a[0] + len * Math.cos(an), a[1] + len * Math.sin(an)];
      sc.lines.push({ a: r.from, b: r.name, dash: r.dash !== false });
    });
    (spec.lines || []).forEach(function (l) { sc.lines.push(Object.assign({}, l)); });
    (spec.segments || []).forEach(function (s) { if (spec.type !== 'grid') sc.lines.push({ a: s[0], b: s[1] }); });
    (spec.arrow || []).forEach(function (k) {
      var ab = key2(k); lineFor(sc, ab[0], ab[1]).arrowFrom = ab[0];
    });
    Object.keys(spec.side || {}).forEach(function (k) {
      var ab = key2(k); lineFor(sc, ab[0], ab[1]).label = spec.side[k];
    });
    var poly = sc.polygon;
    function nb(n) {
      var i = poly ? poly.indexOf(n) : -1;
      return i < 0 ? null : [poly[(i + poly.length - 1) % poly.length], poly[(i + 1) % poly.length]];
    }
    Object.keys(spec.angle || {}).forEach(function (n) {
      var m = nb(n); if (m) sc.arcs.push({ at: n, from: m[0], to: m[1], label: spec.angle[n] });
    });
    (spec.right || []).forEach(function (r) {
      if (typeof r === 'string') { var m = nb(r); if (m) sc.rights.push({ at: r, from: m[0], to: m[1] }); }
      else sc.rights.push(r);
    });
    (spec.arcs || []).forEach(function (a) { sc.arcs.push(a); });
    (spec.equal || []).forEach(function (grp, gi) {
      grp.forEach(function (k) { var ab = key2(k); sc.ticks.push({ a: ab[0], b: ab[1], n: gi + 1 }); });
    });
    (spec.dots || []).forEach(function (n) { sc.dots.push(n); });
    if (sc.dotsDefault) sc.dotsDefault.forEach(function (n) { if (sc.dots.indexOf(n) < 0) sc.dots.push(n); });
    return sc;
  }

  /* ---- scene -> SVG markup ---- */
  function draw(sc, spec) {
    var P = sc.points, names = Object.keys(P), g = sc.grid, i;
    var minx = Infinity, maxx = -Infinity, miny = Infinity, maxy = -Infinity;
    function grow(x, y) { if (x < minx) minx = x; if (x > maxx) maxx = x; if (y < miny) miny = y; if (y > maxy) maxy = y; }
    names.forEach(function (n) { grow(P[n][0], P[n][1]); });
    if (g) { grow(g.x[0], g.y[0]); grow(g.x[1], g.y[1]); }
    (sc.circles || []).forEach(function (c) {
      var o = P[c.at]; grow(o[0] - c.r, o[1] - c.r); grow(o[0] + c.r, o[1] + c.r);
    });
    var spanX = (maxx - minx) || 1, spanY = (maxy - miny) || 1;
    var maxH = g ? 350 : MAXH;
    var s = Math.min((W - 2 * PADX) / spanX, (maxH - 2 * PAD) / spanY);
    if (g) s = Math.min(s, 34);
    var sx = s, sy = s, H;
    if (g && g.free) { sx = (W - 2 * PADX) / spanX; sy = (g.h || 220) / spanY; H = (g.h || 220) + 2 * PAD; }
    else H = Math.max(110, spanY * s + 2 * PAD);
    var ox = (W - spanX * sx) / 2 - minx * sx;
    function X(x) { return ox + x * sx; }
    function Y(y) { return H - PAD - (y - miny) * sy; }
    var PX = {};
    names.forEach(function (n) { PX[n] = [X(P[n][0]), Y(P[n][1])]; });

    var cen = sc.centre ? [X(sc.centre[0]), Y(sc.centre[1])] : (function () {
      var cx = 0, cy = 0, k = 0;
      names.forEach(function (n) { cx += PX[n][0]; cy += PX[n][1]; k++; });
      return [cx / k, cy / k];
    })();
    function f(n) { return Math.round(n * 10) / 10; }
    function txt(x, y, t, cls) {
      return '<text class="f-t ' + cls + '" x="' + f(x) + '" y="' + f(y) + '" text-anchor="middle" dominant-baseline="central">' + esc(t) + '</text>';
    }
    var out = [];

    if (g) {
      var nice = function (span) { return span <= 10 ? 1 : span <= 20 ? 2 : span <= 50 ? 5 : span <= 100 ? 10 : 20; };
      var stx = g.xstep || g.step || nice(g.x[1] - g.x[0]), sty = g.ystep || g.step || nice(g.y[1] - g.y[0]);
      var evx = g.every || stx, evy = g.every || sty, v;
      for (v = Math.ceil(g.x[0] / stx) * stx; v <= g.x[1] + 1e-9; v += stx) out.push('<line class="f-grid" x1="' + f(X(v)) + '" y1="' + f(Y(g.y[0])) + '" x2="' + f(X(v)) + '" y2="' + f(Y(g.y[1])) + '"/>');
      for (v = Math.ceil(g.y[0] / sty) * sty; v <= g.y[1] + 1e-9; v += sty) out.push('<line class="f-grid" x1="' + f(X(g.x[0])) + '" y1="' + f(Y(v)) + '" x2="' + f(X(g.x[1])) + '" y2="' + f(Y(v)) + '"/>');
      var ax = g.y[0] <= 0 && g.y[1] >= 0 ? 0 : g.y[0], ay = g.x[0] <= 0 && g.x[1] >= 0 ? 0 : g.x[0];
      out.push('<line class="f-axis" x1="' + f(X(g.x[0])) + '" y1="' + f(Y(ax)) + '" x2="' + f(X(g.x[1])) + '" y2="' + f(Y(ax)) + '"/>');
      out.push('<line class="f-axis" x1="' + f(X(ay)) + '" y1="' + f(Y(g.y[0])) + '" x2="' + f(X(ay)) + '" y2="' + f(Y(g.y[1])) + '"/>');
      for (v = Math.ceil(g.x[0] / evx) * evx; v <= g.x[1] + 1e-9; v += evx) if (Math.abs(v) > 1e-9) out.push(txt(X(v), Y(ax) + 12, String(Math.round(v * 100) / 100), 'f-tick'));
      for (v = Math.ceil(g.y[0] / evy) * evy; v <= g.y[1] + 1e-9; v += evy) if (Math.abs(v) > 1e-9) out.push(txt(X(ay) - 12, Y(v), String(Math.round(v * 100) / 100), 'f-tick'));
      if (g.xlabel) out.push(txt(X((g.x[0] + g.x[1]) / 2), Y(ax) + 29, g.xlabel, 'f-tick f-axl'));
      else out.push(txt(X(g.x[1]) + 2, Y(ax) - 11, 'x', 'f-tick'));
      if (g.ylabel) out.push(txt(X(ay), Y(g.y[1]) - 15, g.ylabel, 'f-tick f-axl'));
      else out.push(txt(X(ay) + 11, Y(g.y[1]) - 2, 'y', 'f-tick'));
    }

    function poly(ptsPx, cls) {
      if (ptsPx.length > 1) out.push('<polyline class="' + cls + '" points="' + ptsPx.map(function (p) { return f(p[0]) + ',' + f(p[1]); }).join(' ') + '"/>');
    }
    (sc.curves || []).forEach(function (c) {
      var n = 240, run = [], k, x, y, lo = g ? g.y[0] : -Infinity, hi = g ? g.y[1] : Infinity, cls = 'f-curve' + (c.accent ? ' f-acc' : '') + (c.dash ? ' f-dash' : '');
      for (k = 0; k <= n; k++) {
        x = c.from + (c.to - c.from) * k / n;
        y = c.f(x);
        if (isFinite(y) && y >= lo - 1e-9 && y <= hi + 1e-9) run.push([X(x), Y(y)]);
        else { poly(run, cls); run = []; }
      }
      poly(run, cls);
    });
    (sc.paths || []).forEach(function (p) {
      poly(p.pts.map(function (q) { return [X(q[0]), Y(q[1])]; }), 'f-curve' + (p.accent ? ' f-acc' : '') + (p.dash ? ' f-dash' : ''));
    });

    (sc.circles || []).forEach(function (c) {
      out.push('<circle class="f-line" cx="' + f(PX[c.at][0]) + '" cy="' + f(PX[c.at][1]) + '" r="' + f(c.r * sx) + '"/>');
    });

    sc.lines.forEach(function (l) {
      var a = PX[l.a], b = PX[l.b];
      if (!a || !b) return;
      var cls = 'f-line' + (l.dash ? ' f-dash' : '') + (l.faint ? ' f-faint' : '') + (l.accent ? ' f-acc' : '');
      out.push('<line class="' + cls + '" x1="' + f(a[0]) + '" y1="' + f(a[1]) + '" x2="' + f(b[0]) + '" y2="' + f(b[1]) + '"/>');
    });

    sc.lines.forEach(function (l) {
      if (!l.arrowFrom || !PX[l.a] || !PX[l.b]) return;
      var from = PX[l.arrowFrom], to = PX[l.arrowFrom === l.a ? l.b : l.a], dx = to[0] - from[0], dy = to[1] - from[1], len = Math.sqrt(dx * dx + dy * dy) || 1;
      var ux = dx / len, uy = dy / len, k = l.arrowEnd ? 1 : 0.55, tx = from[0] + dx * k, ty = from[1] + dy * k;
      out.push('<polygon class="f-head" points="' + f(tx) + ',' + f(ty) + ' ' + f(tx - ux * 10 - uy * 4.5) + ',' + f(ty - uy * 10 + ux * 4.5) + ' ' + f(tx - ux * 10 + uy * 4.5) + ',' + f(ty - uy * 10 - ux * 4.5) + '"/>');
    });

    (sc.parallels || []).forEach(function (p) {
      var a = PX[p.a], b = PX[p.b], dx = b[0] - a[0], dy = b[1] - a[1], len = Math.sqrt(dx * dx + dy * dy) || 1;
      var ux = dx / len, uy = dy / len;
      var cx = p.t != null ? a[0] + dx * p.t : X(p.x), cy = p.t != null ? a[1] + dy * p.t : Y(p.y);
      out.push('<polyline class="f-line" points="' + f(cx - ux * 7 - uy * 5) + ',' + f(cy - uy * 7 + ux * 5) + ' ' + f(cx + ux * 2) + ',' + f(cy + uy * 2) + ' ' + f(cx - ux * 7 + uy * 5) + ',' + f(cy - uy * 7 - ux * 5) + '"/>');
    });

    (sc.ticks || []).forEach(function (t) {
      var a = PX[t.a], b = PX[t.b], dx = b[0] - a[0], dy = b[1] - a[1], len = Math.sqrt(dx * dx + dy * dy) || 1;
      var ux = dx / len, uy = dy / len, mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, k;
      for (k = 0; k < t.n; k++) {
        var o = (k - (t.n - 1) / 2) * 5, cx = mx + ux * o, cy = my + uy * o;
        out.push('<line class="f-line" x1="' + f(cx - uy * 5) + '" y1="' + f(cy + ux * 5) + '" x2="' + f(cx + uy * 5) + '" y2="' + f(cy - ux * 5) + '"/>');
      }
    });

    function unit(from, to) {
      var dx = PX[to][0] - PX[from][0], dy = PX[to][1] - PX[from][1], len = Math.sqrt(dx * dx + dy * dy) || 1;
      return [dx / len, dy / len];
    }
    (sc.rights || []).forEach(function (r) {
      var o = PX[r.at], u = unit(r.at, r.from), w = unit(r.at, r.to), k = 11;
      out.push('<polyline class="f-line" points="' + f(o[0] + u[0] * k) + ',' + f(o[1] + u[1] * k) + ' ' + f(o[0] + (u[0] + w[0]) * k) + ',' + f(o[1] + (u[1] + w[1]) * k) + ' ' + f(o[0] + w[0] * k) + ',' + f(o[1] + w[1] * k) + '"/>');
    });

    (sc.arcs || []).forEach(function (a) {
      if (!PX[a.at] || !PX[a.from] || !PX[a.to]) return;
      var o = PX[a.at], r = a.r || 22;
      var a1 = Math.atan2(PX[a.from][1] - o[1], PX[a.from][0] - o[0]), a2 = Math.atan2(PX[a.to][1] - o[1], PX[a.to][0] - o[0]);
      var d = a2 - a1;
      while (d > Math.PI) d -= 2 * Math.PI;
      while (d <= -Math.PI) d += 2 * Math.PI;
      if (a.big) d = d > 0 ? d - 2 * Math.PI : d + 2 * Math.PI;
      var sweep = d > 0 ? 1 : 0, large = Math.abs(d) > Math.PI ? 1 : 0;
      out.push('<path class="f-arc" d="M' + f(o[0] + r * Math.cos(a1)) + ' ' + f(o[1] + r * Math.sin(a1)) + ' A' + r + ' ' + r + ' 0 ' + large + ' ' + sweep + ' ' + f(o[0] + r * Math.cos(a2)) + ' ' + f(o[1] + r * Math.sin(a2)) + '"/>');
      if (a.label) {
        // push the label out far enough that its text box (about 7px per character, 14px tall) clears the arc
        var mid = a1 + d / 2, hw = String(a.label).length * 3.8;
        if (a.near != null) mid = a1 + Math.min(a.near, Math.abs(d) / 2);
        var dist = r + 5 + hw * Math.abs(Math.cos(mid)) + 8 * Math.abs(Math.sin(mid)) + (Math.abs(d) < 0.7 ? 8 : 0);
        // in a narrow angle the label must sit where the two arms are far enough apart to hold it
        if (a.near == null) dist = Math.max(dist, Math.min(66, hw / Math.tan(Math.max(0.2, Math.abs(d)) / 2) + 6));
        out.push(txt(o[0] + dist * Math.cos(mid), o[1] + dist * Math.sin(mid), a.label, 'f-ang'));
      }
    });

    sc.lines.forEach(function (l) {
      if (!l.label || !PX[l.a] || !PX[l.b]) return;
      var a = PX[l.a], b = PX[l.b], dx = b[0] - a[0], dy = b[1] - a[1], len = Math.sqrt(dx * dx + dy * dy) || 1;
      var nx = -dy / len, ny = dx / len, mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
      if (!l.right && nx * (mx - cen[0]) + ny * (my - cen[1]) < 0) { nx = -nx; ny = -ny; }
      if (l.side === -1) { nx = -nx; ny = -ny; }
      // clear the line by the label's own half-width/half-height measured along the normal
      var off = 6 + String(l.label).length * 3.6 * Math.abs(nx) + 8 * Math.abs(ny);
      out.push(txt(mx + nx * off, my + ny * off, l.label, 'f-len'));
    });

    (sc.dots || []).forEach(function (n) {
      if (PX[n]) out.push('<circle class="f-dot" cx="' + f(PX[n][0]) + '" cy="' + f(PX[n][1]) + '" r="3.6"/>');
    });

    if (spec.names !== false) {
      var hide = spec.hide || [];
      names.forEach(function (n) {
        if (n.charAt(0) === '_' || hide.indexOf(n) >= 0) return;
        var p = PX[n], at = sc.nameAt[n], dx, dy;
        if (at) { dx = at[0]; dy = at[1]; }
        else {
          dx = p[0] - cen[0]; dy = p[1] - cen[1];
          var len = Math.sqrt(dx * dx + dy * dy);
          if (len < 1) { dx = 0; dy = -1; len = 1; }
          dx = dx / len * 15; dy = dy / len * 15;
          if (g) { dx = 12; dy = -11; }
        }
        var label = (sc.pointLabels && sc.pointLabels[n]) || n;
        out.push(txt(p[0] + dx, p[1] + dy, label, 'f-vt'));
      });
    }

    (sc.texts || []).forEach(function (t) {
      var p = typeof t.at === 'string' ? PX[t.at] : [X(t.at[0]), Y(t.at[1])];
      if (p) out.push(txt(p[0] + (t.dx || 0), p[1] + (t.dy || 0), t.text, 'f-vt'));
    });

    return '<svg class="fig-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + f(H) + '" role="img" aria-label="' + esc(spec.alt || 'Diagram for the question') + '">' +
      out.join('') + '</svg>';
  }

  /* place several scenes side by side, bottoms aligned, for similar / congruent shapes */
  function merge(scs, gap) {
    var out = { points: {}, lines: [], arcs: [], rights: [], ticks: [], dots: [], parallels: [], texts: [], circles: [], nameAt: {}, polygon: null };
    var cursor = 0;
    scs.forEach(function (sc) {
      var minx = Infinity, maxx = -Infinity;
      Object.keys(sc.points).forEach(function (n) {
        minx = Math.min(minx, sc.points[n][0]); maxx = Math.max(maxx, sc.points[n][0]);
      });
      var shift = cursor - minx;
      Object.keys(sc.points).forEach(function (n) { out.points[n] = [sc.points[n][0] + shift, sc.points[n][1]]; });
      ['lines', 'arcs', 'rights', 'ticks', 'dots', 'texts', 'circles'].forEach(function (k) { out[k] = out[k].concat(sc[k] || []); });
      (sc.parallels || []).forEach(function (p) { out.parallels.push(p.t != null ? p : Object.assign({}, p, { x: p.x + shift })); });
      Object.assign(out.nameAt, sc.nameAt || {});
      cursor = maxx + shift + gap;
    });
    return out;
  }

  function render(spec) {
    var s = Object.assign({}, spec), sc;
    if (spec.type === 'multi') {
      sc = merge((spec.parts || []).map(function (p) {
        var c = Object.assign({}, p);
        return applyCommon(presets[c.type](c), c);
      }), spec.gap || 1.6);
    } else {
      var make = presets[spec.type];
      if (!make) return null;
      sc = applyCommon(make(s), s);
    }
    var h = EMATH.util.h;
    return h('figure', { class: 'q-figure', html: draw(sc, s) +
      (spec.scale === true ? '' : '<figcaption class="muted">Not drawn to scale.</figcaption>') });
  }

  return { render: render, types: Object.keys(presets).concat('multi') };
})();
