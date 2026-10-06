EMATH.views.home = function (root) {
  var h = EMATH.util.h, S = EMATH.syllabus;
  var level = 0;
  var grid = h('div');

  var chips = h('div', { class: 'chips', role: 'group', 'aria-label': 'Filter by level' });
  [{ id: 0, name: 'All levels' }].concat(S.levels).forEach(function (l) {
    var b = h('button', { type: 'button', class: 'chip-btn' + (l.id === level ? ' on' : ''), 'aria-pressed': String(l.id === level), onclick: function () {
      level = l.id;
      Array.prototype.forEach.call(chips.children, function (c, i) { var on = (i === 0 && level === 0) || (i > 0 && S.levels[i - 1].id === level); c.classList.toggle('on', on); c.setAttribute('aria-pressed', String(on)); });
      draw();
    } }, l.name);
    chips.appendChild(b);
  });

  function card(t) {
    var data = EMATH.topics[t.id];
    var lv = t.levels.map(function (n) { return 'Sec ' + n; }).join(', ');
    if (!data) {
      return h('div', { class: 'card soon' },
        h('h3', {}, t.title), h('p', { class: 'muted' }, lv),
        h('span', { class: 'badge' }, 'Coming soon'),
        t.check ? h('p', { class: 'flag small' }, 'Check against MOE: ' + t.check) : null);
    }
    var st = EMATH.store.topicStats(t.id), total = EMATH.bank(data).length;
    return h('a', { class: 'card ready', href: '#/topic/' + t.id },
      h('h3', {}, data.title), h('p', { class: 'muted' }, lv),
      h('div', { class: 'meter', role: 'img', 'aria-label': st.solved + ' of ' + total + ' questions solved' },
        h('span', { style: 'width:' + Math.round(100 * st.solved / total) + '%' })),
      h('p', { class: 'small muted' }, st.solved + ' / ' + total + ' solved'),
      data.verified ? null : h('span', { class: 'flag small' }, 'Check against MOE syllabus'));
  }

  function draw() {
    grid.innerHTML = '';
    S.strands.forEach(function (s) {
      var items = S.topics.filter(function (t) { return t.strand === s.id && (!level || t.levels.indexOf(level) >= 0); });
      if (!items.length) return;
      items.sort(function (a, b) { return (EMATH.topics[b.id] ? 1 : 0) - (EMATH.topics[a.id] ? 1 : 0); });
      grid.appendChild(h('section', { class: 'strand' }, h('h2', {}, s.name), h('div', { class: 'cards' }, items.map(card))));
    });
  }

  root.appendChild(h('section', { class: 'hero' },
    h('h1', {}, 'Singapore E-Math, one topic at a time'),
    h('p', {}, 'Clear notes, worked examples you can step through, and practice questions with instant marking. Covers Secondary 1 to 4 Mathematics and O-Level Elementary Mathematics.'),
    h('div', { class: 'hero-actions' },
      h('a', { class: 'btn primary', href: '#/quiz' }, 'Take a quiz'),
      h('a', { class: 'btn ghost', href: '#/reference' }, 'Formulae & glossary'))));
  root.appendChild(chips);
  root.appendChild(grid);
  draw();
};
