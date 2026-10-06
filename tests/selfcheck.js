/*
 * Self-check: paste into the browser console on the running site.
 * Every question's own answer (static bank + 60 seeded variants per generator)
 * must be accepted by the answer checker. Expect `bad: 0`.
 */
(function () {
  var E = window.EMATH, bad = [], n = 0;

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
  });

  console.log('checked: ' + n + ', bad: ' + bad.length, bad);
  return { checked: n, bad: bad };
})();
