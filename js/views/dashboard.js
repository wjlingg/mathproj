EMATH.views.dashboard = function (root) {
  var h = EMATH.util.h;
  root.appendChild(h('h1', { tabindex: '-1', id: 'page-title' }, 'Your progress'));
  root.appendChild(h('p', { class: 'muted' }, 'Saved in this browser only. Nothing is sent anywhere.'));

  var topics = EMATH.readyTopics(), att = 0, cor = 0, solved = 0, bankTotal = 0;
  var rows = topics.map(function (t) {
    var s = EMATH.store.topicStats(t.id), total = EMATH.bank(t).length;
    att += s.att; cor += s.cor; solved += s.solved; bankTotal += total;
    return { t: t, s: s, total: total, acc: s.att ? Math.round(100 * s.cor / s.att) : null };
  });

  root.appendChild(h('div', { class: 'stats' },
    stat(solved + ' / ' + bankTotal, 'questions solved'),
    stat(att, 'attempts'),
    stat(att ? Math.round(100 * cor / att) + '%' : '-', 'accuracy')));

  var weak = rows.filter(function (r) { return r.s.att >= 3 && r.acc < 60; });
  if (weak.length) {
    root.appendChild(h('div', { class: 'callout' }, h('strong', {}, 'Worth revisiting: '),
      weak.map(function (r, i) { return [i ? ', ' : '', h('a', { href: '#/topic/' + r.t.id }, r.t.title)]; })));
  }

  root.appendChild(h('h2', {}, 'By topic'));
  rows.forEach(function (r) {
    root.appendChild(h('div', { class: 'row-topic' },
      h('a', { href: '#/practice/' + r.t.id }, r.t.title),
      h('div', { class: 'meter', role: 'img', 'aria-label': r.s.solved + ' of ' + r.total + ' solved' }, h('span', { style: 'width:' + Math.round(100 * r.s.solved / r.total) + '%' })),
      h('span', { class: 'small muted' }, r.s.solved + '/' + r.total + ' solved · ' + (r.acc == null ? 'no attempts' : r.acc + '% accuracy'))));
  });

  var quizzes = EMATH.store.get().quizzes;
  root.appendChild(h('h2', {}, 'Recent quizzes'));
  if (!quizzes.length) root.appendChild(h('p', { class: 'muted' }, 'No quizzes taken yet.'));
  else root.appendChild(h('ul', {}, quizzes.slice(0, 8).map(function (q) {
    var d = new Date(q.date), name = q.topic === 'all' ? 'Mixed' : (EMATH.topics[q.topic] ? EMATH.topics[q.topic].title : q.topic);
    return h('li', {}, d.toLocaleDateString() + ' · ' + name + ' · ' + q.got + '/' + q.total + ' (' + Math.round(100 * q.got / q.total) + '%)');
  })));

  root.appendChild(h('p', {}, h('button', { class: 'btn ghost', type: 'button', onclick: function () {
    if (confirm('Reset all saved progress on this device?')) { EMATH.store.reset(); location.reload(); }
  } }, 'Reset progress')));

  function stat(v, l) { return h('div', { class: 'stat' }, h('div', { class: 'stat-v' }, String(v)), h('div', { class: 'muted small' }, l)); }
};

EMATH.views.notFound = function (root) {
  var h = EMATH.util.h;
  root.appendChild(h('h1', { tabindex: '-1', id: 'page-title' }, 'Page not found'));
  root.appendChild(h('p', {}, h('a', { href: '#/home' }, 'Back to topics')));
};
