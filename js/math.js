/*
 * Answer checker. Accepts equivalent forms:
 *   numeric: 0.5 = 1/2 = 50%;  mixed numbers "2 1/2";  units/“x =” prefixes stripped;
 *            dp / sf rounding rules enforced when a part states them
 *   expression: compared numerically at many points, so 2(x+3) matches 2x+6
 *   ratio: 6:8 is equivalent to 3:4 but flagged if not simplified
 */
EMATH.math = (function () {
  var gcd = EMATH.util.gcd;

  var UNIT_RE = /\s*(?:sq\.?\s*)?(?:km\/h|m\/s|cm|mm|km|ml|kg|min|mins|hrs?|hours?|years?|yrs?|units?|dollars?|m|l|g|s|h)(?:\^?[23²³])?\.?\s*$/i;

  function parseNum(raw) {
    var s = String(raw).trim().replace(/[−–]/g, '-').replace(/,/g, '').replace(/\s+/g, ' ');
    s = s.replace(/^[a-z]\s*=\s*/i, '').replace(/^\$\s*/, '');
    var pct = false;
    if (/%$/.test(s)) { pct = true; s = s.slice(0, -1).trim(); }
    s = s.replace(UNIT_RE, '').trim();
    var v = null, m;
    if ((m = s.match(/^(-?)(\d+) (\d+)\s*\/\s*(\d+)$/))) {
      if (+m[4] !== 0) v = (m[1] ? -1 : 1) * (+m[2] + +m[3] / +m[4]);
    } else if ((m = s.match(/^(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)$/))) {
      if (+m[2] !== 0) v = +m[1] / +m[2];
    } else if (/^-?(\d+\.?\d*|\.\d+)$/.test(s)) {
      v = +s;
    }
    if (v === null || !isFinite(v)) return null;
    return { v: v, pct: pct, s: s };
  }

  function roundDp(x, dp) { return Number(Math.round(Number(x + 'e' + dp)) + 'e-' + dp); }

  function answerValue(a) { return typeof a === 'number' ? a : parseNum(a).v; }

  function gradeNumeric(part, input) {
    var p = parseNum(input);
    if (!p) return { ok: false, note: 'Enter a number, a fraction such as 3/4, or a decimal.' };
    var u = p.pct && part.unit !== '%' ? p.v / 100 : p.v;
    var exp = answerValue(part.answer);
    var fracAnswer = typeof part.answer === 'string' && /\//.test(part.answer);
    var target = exp, tol = 1e-6 * Math.max(1, Math.abs(exp)), note = '';
    if (part.dp != null) { target = roundDp(exp, part.dp); tol = 1e-7; }
    else if (part.sf != null) { target = Number(exp.toPrecision(part.sf)); tol = 1e-7 * Math.max(1, Math.abs(exp)); }
    else if (part.tol != null) tol = part.tol;
    else if (fracAnswer && /\./.test(p.s)) { tol = 0.0005 + 1e-9; note = 'Exact value: ' + part.answer; }
    var ok = Math.abs(u - target) <= tol;
    if (!ok) {
      if ((part.dp != null || part.sf != null) && Math.abs(u - exp) <= 1e-6 * Math.max(1, Math.abs(exp))) {
        note = 'Right value, but round it to ' + (part.dp != null ? part.dp + ' d.p.' : part.sf + ' s.f.') + '.';
      }
      return { ok: false, note: note };
    }
    var fm = String(input).trim().match(/^-?(\d+)\s*\/\s*(\d+)$/);
    if (fm && gcd(+fm[1], +fm[2]) > 1) note = 'Correct, but simplify the fraction.';
    return { ok: true, note: note };
  }

  /* ---- algebra: tiny expression compiler ---- */
  function compile(src) {
    src = String(src).replace(/\s+/g, '').replace(/[−–]/g, '-').replace(/×/g, '*').replace(/÷/g, '/')
      .replace(/\[/g, '(').replace(/\]/g, ')').replace(/²/g, '^2').replace(/³/g, '^3');
    var toks = src.match(/\d+\.?\d*|\.\d+|[a-zA-Z]|[-+*\/^()]/g) || [];
    if (!toks.length || toks.join('') !== src) throw new Error('bad');
    var i = 0, vars = {};
    function peek() { return toks[i]; }
    function expr() {
      var l = term();
      while (peek() === '+' || peek() === '-') {
        const op = toks[i++], r = term(), L = l;
        l = op === '+' ? function (e) { return L(e) + r(e); } : function (e) { return L(e) - r(e); };
      }
      return l;
    }
    function term() {
      var l = unary();
      for (;;) {
        var p = peek(), r, L = l;
        if (p === '*' || p === '/') {
          i++; r = unary();
          l = p === '*' ? (function (L, r) { return function (e) { return L(e) * r(e); }; })(L, r)
                        : (function (L, r) { return function (e) { return L(e) / r(e); }; })(L, r);
        } else if (p === '(' || (p && /^[a-zA-Z]$/.test(p))) {
          r = power();
          l = (function (L, r) { return function (e) { return L(e) * r(e); }; })(L, r);
        } else break;
      }
      return l;
    }
    function unary() {
      if (peek() === '-') { i++; var v = unary(); return function (e) { return -v(e); }; }
      if (peek() === '+') { i++; return unary(); }
      return power();
    }
    function power() {
      var b = atom();
      if (peek() === '^') { i++; var x = unary(); return function (e) { return Math.pow(b(e), x(e)); }; }
      return b;
    }
    function atom() {
      var t = toks[i++];
      if (t === undefined) throw new Error('bad');
      if (/^[\d.]/.test(t)) { var n = parseFloat(t); return function () { return n; }; }
      if (/^[a-zA-Z]$/.test(t)) { vars[t] = 1; return function (e) { return e[t]; }; }
      if (t === '(') { var v = expr(); if (toks[i++] !== ')') throw new Error('bad'); return v; }
      throw new Error('bad');
    }
    var f = expr();
    if (i !== toks.length) throw new Error('bad');
    return { f: f, vars: Object.keys(vars) };
  }

  var SAMPLES = [1.7, -2.3, 3.1, 0.6, -1.4, 2.9, 4.2, -3.7, 0.9, -0.5, 5.3, 1.1];

  function exprEqual(a, b) {
    var A = compile(a), B = compile(b);
    var vars = A.vars.concat(B.vars.filter(function (v) { return A.vars.indexOf(v) < 0; }));
    var good = 0;
    for (var k = 0; k < SAMPLES.length; k++) {
      var env = {};
      vars.forEach(function (v, j) { env[v] = SAMPLES[(k + j * 5) % SAMPLES.length]; });
      var x = A.f(env), y = B.f(env);
      var fx = isFinite(x), fy = isFinite(y);
      if (fx !== fy) return false;
      if (!fx) continue;
      if (Math.abs(x - y) > 1e-6 * Math.max(1, Math.abs(x), Math.abs(y))) return false;
      good++;
    }
    return good >= 3;
  }

  function gradeExpression(part, input) {
    var raw = String(input);
    var eq;
    try { eq = exprEqual(raw, part.answer); }
    catch (e) { return { ok: false, note: 'Could not read that expression. Use e.g. 2x+6 or 3(x-2).' }; }
    if (!eq) return { ok: false, note: '' };
    if (part.form === 'factorised' && raw.indexOf('(') < 0) return { ok: false, note: 'Equivalent, but it is not factorised.' };
    if (part.form === 'expanded' && raw.indexOf('(') >= 0) return { ok: false, note: 'Equivalent, but brackets should be expanded.' };
    return { ok: true, note: '' };
  }

  function parseRatio(s) {
    var bits = String(s).trim().replace(/\s*(to|:)\s*/gi, ':').split(':');
    if (bits.length < 2) return null;
    var nums = bits.map(function (b) { return /^\d+$/.test(b.trim()) ? +b : NaN; });
    if (nums.some(isNaN) || nums.every(function (n) { return n === 0; })) return null;
    return nums;
  }
  function reduceRatio(a) { var g = a.reduce(gcd); return a.map(function (n) { return n / g; }); }

  function gradeRatio(part, input) {
    var u = parseRatio(input);
    if (!u) return { ok: false, note: 'Write the ratio like 3:4 using whole numbers.' };
    var e = parseRatio(part.answer), ru = reduceRatio(u), re = reduceRatio(e);
    if (ru.length !== re.length || ru.some(function (n, i) { return n !== re[i]; })) return { ok: false, note: '' };
    if (part.simplest !== false && u.some(function (n, i) { return n !== ru[i]; })) return { ok: false, note: 'Equivalent, but not in simplest form.' };
    return { ok: true, note: '' };
  }

  function gradePart(part, input) {
    if (part.type === 'mcq') {
      if (input == null || input === '') return { ok: false, note: 'Choose an option.' };
      return { ok: +input === part.answer, note: '' };
    }
    if (input == null || String(input).trim() === '') return { ok: false, note: 'Type an answer first.' };
    if (part.type === 'expression') return gradeExpression(part, input);
    if (part.type === 'ratio') return gradeRatio(part, input);
    return gradeNumeric(part, input);
  }

  /* Answer as HTML (for "show solution" and quiz review) */
  function formatAnswer(part) {
    var a = part.answer, out;
    if (part.type === 'mcq') return EMATH.rm(part.options[a]);
    if (typeof a === 'number') {
      out = part.dp != null ? a.toFixed(part.dp) : String(Number(a.toPrecision(10)));
      if (part.sf != null) out = String(Number(a.toPrecision(part.sf)));
    } else if (part.type !== 'expression' && part.type !== 'ratio' && /^-?\d+\/\d+$/.test(a)) {
      var m = a.split('/');
      out = '{' + m[0] + '|' + m[1] + '}';
    } else out = a;
    var html = EMATH.rm(out);
    if (part.unit === '$') html = '$' + html;
    else if (part.unit) html += ' ' + EMATH.util.esc(part.unit);
    return html;
  }

  return { parseNum: parseNum, gradePart: gradePart, exprEqual: exprEqual, roundDp: roundDp, formatAnswer: formatAnswer };
})();
