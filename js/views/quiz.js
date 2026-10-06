/* Quiz / mock mode: no feedback until the end, then a scored review. */
EMATH.views.quiz = function (root, preset) {
  var h = EMATH.util.h, rm = EMATH.rm;
  root.appendChild(h('h1', { tabindex: '-1', id: 'page-title' }, 'Quiz'));
  var host = h('div');
  root.appendChild(host);
  setup();

  function setup() {
    host.innerHTML = '';
    var topics = EMATH.readyTopics();
    var sel = h('select', { id: 'qz-topic' }, h('option', { value: 'all' }, 'All topics (mixed)'),
      topics.map(function (t) { return h('option', { value: t.id, selected: t.id === preset }, t.title); }));
    var lvl = h('select', { id: 'qz-level' }, [['any', 'Any difficulty'], ['foundation', 'Foundation'], ['standard', 'Standard'], ['challenge', 'Challenge']].map(function (l) { return h('option', { value: l[0] }, l[1]); }));
    var cnt = h('select', { id: 'qz-count' }, [5, 10, 15].map(function (n) { return h('option', { value: n, selected: n === 10 }, n + ' questions'); }));
    host.appendChild(h('form', { class: 'setup', onsubmit: function (e) { e.preventDefault(); start(sel.value, lvl.value, +cnt.value); } },
      h('p', { class: 'muted' }, 'Answer every question, then submit to see your marks and full worked solutions.'),
      h('label', { for: 'qz-topic' }, 'Topic'), sel,
      h('label', { for: 'qz-level' }, 'Difficulty'), lvl,
      h('label', { for: 'qz-count' }, 'Length'), cnt,
      h('button', { class: 'btn primary', type: 'submit' }, 'Start quiz')));
  }

  function start(topicId, level, count) {
    var r = EMATH.util.rng();
    var ts = topicId === 'all' ? EMATH.readyTopics() : [EMATH.topics[topicId]];
    var pool = [];
    ts.forEach(function (t) { EMATH.bank(t).forEach(function (q) { if (level === 'any' || q.level === level) pool.push(q); }); });
    pool = EMATH.util.shuffle(pool, r);
    var qs = pool.slice(0, count);
    /* top up with fresh generated questions if the pool is short */
    var guard = 0;
    while (qs.length < count && guard++ < 50) {
      var gens = [];
      ts.forEach(function (t) { (t.generators || []).forEach(function (g) { if (level === 'any' || g.level === level) gens.push([t, g]); }); });
      if (!gens.length) break;
      var pair = gens[Math.floor(Math.random() * gens.length)];
      qs.push(EMATH.generate(pair[0], pair[1]));
    }
    if (!qs.length) { host.innerHTML = ''; host.appendChild(h('p', {}, 'No questions match those settings.')); host.appendChild(h('button', { class: 'btn', onclick: setup }, 'Back')); return; }
    run(qs, topicId);
  }

  function run(qs, topicId) {
    var i = 0, forms = [], results = [];
    function render() {
      host.innerHTML = '';
      var q = qs[i];
      var f = EMATH.questionForm(q, { quiz: true });
      forms[i] = f;
      var last = i === qs.length - 1;
      host.appendChild(h('div', { class: 'quiz-progress' }, h('span', {}, 'Question ' + (i + 1) + ' of ' + qs.length),
        h('div', { class: 'meter' }, h('span', { style: 'width:' + Math.round(100 * i / qs.length) + '%' }))));
      host.appendChild(f.el);
      host.appendChild(h('div', { class: 'q-actions' }, h('button', { class: 'btn primary', type: 'button', onclick: function () {
        results[i] = f.grade(false);
        if (last) finish(); else { i++; render(); }
      } }, last ? 'Submit quiz' : 'Next →')));
      var first = f.el.querySelector('input'); if (first) first.focus();
    }
    function finish() {
      var got = 0, total = 0;
      results.forEach(function (r, k) { got += r.got; total += r.total; EMATH.store.record(qs[k].topicId, qs[k].id, r.all); });
      EMATH.store.addQuiz({ date: new Date().toISOString(), topic: topicId, got: got, total: total, n: qs.length });
      host.innerHTML = '';
      var pct = Math.round(100 * got / total);
      host.appendChild(h('section', { class: 'score' }, h('h2', {}, 'Score: ' + got + ' / ' + total + ' (' + pct + '%)'),
        h('p', { class: 'muted' }, pct >= 80 ? 'Strong work. Try a Challenge quiz next.' : pct >= 50 ? 'Good progress. Review the solutions below and try again.' : 'Revisit the topic notes, then retry. Each solution below shows the steps.'),
        h('div', { class: 'hero-actions' }, h('button', { class: 'btn primary', onclick: setup }, 'New quiz'), h('a', { class: 'btn ghost', href: '#/dashboard' }, 'Dashboard'))));
      qs.forEach(function (q, k) {
        var r = results[k];
        host.appendChild(h('article', { class: 'review ' + (r.all ? 'ok' : 'bad') },
          h('h3', {}, 'Question ' + (k + 1) + (r.all ? ' ✓' : ' ✗') + '  (' + r.got + '/' + r.total + ')'),
          q.prompt ? h('p', { class: 'q-prompt', html: rm(q.prompt) }) : null,
          EMATH.normQ(q).parts.map(function (p) { return p.prompt ? h('p', { html: (p.label || '') + ' ' + rm(p.prompt) }) : null; }),
          EMATH.solutionBlock(q, false)));
      });
    }
    render();
  }
};
