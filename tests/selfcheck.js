/*
 * Self-check: paste into the browser console on the running site.
 * Expect `bad: 0` and empty `leftovers`, `dupIds` and `generatorBad`.
 *   1. Every question's own answer (static bank + 60 seeded variants per generator)
 *      must be accepted by the answer checker.
 *   2. No authored string may leave raw markup after EMATH.rm (for example a sqrt( with
 *      nested brackets, an unmatched {a|b}, or an unrendered mat( / vec( ).
 *   3. Question ids must be unique within each topic.
 *   4. A wider run of generator seeds must all mark themselves correct and be finite.
 * Tip: the dev server lets the browser cache .js files, so hard-reload after editing data.
 */
(function () {
  var E = window.EMATH, bad = [], n = 0, leftovers = [], dupIds = [], generatorBad = [];

  function selfAnswer(p) {
    if (p.type === 'mcq') return String(p.answer);
    if (p.type === 'expression' || p.type === 'ratio') return p.answer;
    if (typeof p.answer === 'number') {
      if (p.dp != null) return p.answer.toFixed(p.dp);
      if (p.sf != null) return String(Number(p.answer.toPrecision(p.sf)));
      return String(p.answer);
    }
    return p.answer;
  }

  function scanMarkup(label, v) {
    if (typeof v === 'string') {
      var text = E.rm(v).replace(/<[^>]+>/g, '');
      if (/sqrt\(|\*\*|\bmat\(|\bvec\(|\{[^{}]*\|[^{}]*\}/.test(text)) leftovers.push(label + ' => ' + v.slice(0, 80));
    } else if (Array.isArray(v)) {
      v.forEach(function (x) { scanMarkup(label, x); });
    } else if (v && typeof v === 'object') {
      Object.keys(v).forEach(function (k) { if (k !== 'answer') scanMarkup(label + '.' + k, v[k]); });
    }
  }

  E.readyTopics().forEach(function (t) {
    var qs = E.bank(t).slice();
    (t.generators || []).forEach(function (g) {
      for (var s = 1; s <= 60; s++) qs.push(E.generate(t, g, s, true));
    });
    qs.forEach(function (q) {
      E.normQ(q).parts.forEach(function (p) {
        n++;
        var r = E.math.gradePart(p, selfAnswer(p));
        if (!r.ok) bad.push({ id: q.id, answer: p.answer, note: r.note });
      });
    });

    ['explanation', 'examples', 'mistakes', 'formulae', 'summary'].forEach(function (k) { scanMarkup(t.id + '.' + k, t[k]); });
    t.questions.forEach(function (q) { scanMarkup(t.id + ':' + q.id, q); });

    var seen = {};
    t.questions.forEach(function (q) { if (seen[q.id]) dupIds.push(t.id + ':' + q.id); seen[q.id] = true; });

    (t.generators || []).forEach(function (g) {
      for (var s = 100; s < 400; s++) {
        E.normQ(E.generate(t, g, s, true)).parts.forEach(function (p) {
          if (typeof p.answer === 'number' && !isFinite(p.answer)) generatorBad.push(t.id + ':' + g.id + ':' + s);
          else if (!E.math.gradePart(p, selfAnswer(p)).ok) generatorBad.push(t.id + ':' + g.id + ':' + s);
        });
      }
    });
  });

  var out = { checked: n, bad: bad, leftovers: leftovers, dupIds: dupIds, generatorBad: generatorBad.slice(0, 10) };
  console.log('checked: ' + n + ', bad: ' + bad.length + ', leftovers: ' + leftovers.length + ', dupIds: ' + dupIds.length + ', generatorBad: ' + generatorBad.length, out);
  return out;
})();
