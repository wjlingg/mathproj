EMATH.views.practice = function (root, id) {
  var h = EMATH.util.h;
  var t = EMATH.topics[id];
  if (!t) { EMATH.views.notFound(root); return; }
  var all = EMATH.bank(t), level = 'all', idx = 0, current = null;

  var qHost = h('div'), status = h('p', { class: 'muted', 'aria-live': 'polite' }), nav = h('div', { class: 'q-nav' });
  var chips = h('div', { class: 'chips', role: 'group', 'aria-label': 'Filter by difficulty' });

  function pool() { return level === 'all' ? all : all.filter(function (q) { return q.level === level; }); }

  [['all', 'All'], ['foundation', 'Foundation'], ['standard', 'Standard'], ['challenge', 'Challenge']].forEach(function (l) {
    chips.appendChild(h('button', { type: 'button', class: 'chip-btn' + (l[0] === level ? ' on' : ''), 'data-l': l[0], 'aria-pressed': String(l[0] === level), onclick: function () {
      level = l[0]; idx = 0;
      Array.prototype.forEach.call(chips.children, function (c) { var on = c.getAttribute('data-l') === level; c.classList.toggle('on', on); c.setAttribute('aria-pressed', String(on)); });
      show(pool()[0]);
    } }, l[1]));
  });

  function show(q) {
    var p = pool();
    if (!q) { qHost.innerHTML = ''; qHost.appendChild(h('p', { class: 'muted' }, 'No questions at this level yet.')); status.textContent = ''; return; }
    current = q;
    var recorded = false;
    var f = EMATH.questionForm(q, { onChecked: function (res) {
      if (!recorded) { recorded = true; EMATH.store.record(id, q.id, res.all); updateStatus(); }
    } });
    qHost.innerHTML = '';
    qHost.appendChild(f.el);
    updateStatus();
  }

  function updateStatus() {
    var p = pool(), st = EMATH.store.topicStats(id);
    status.textContent = (current && current.generated && current.id.indexOf('gen-') === 0 ? 'Fresh random question' : 'Question ' + (idx + 1) + ' of ' + p.length) +
      '  ·  ' + st.solved + ' of ' + all.length + ' solved overall';
  }

  function move(d) { var p = pool(); idx = (idx + d + p.length) % p.length; show(p[idx]); }

  nav.appendChild(h('button', { type: 'button', class: 'btn ghost', onclick: function () { move(-1); } }, '← Previous'));
  nav.appendChild(h('button', { type: 'button', class: 'btn', onclick: function () { move(1); } }, 'Next →'));
  if ((t.generators || []).length) {
    nav.appendChild(h('button', { type: 'button', class: 'btn ghost', onclick: function () {
      var gs = t.generators.filter(function (g) { return level === 'all' || g.level === level; });
      if (!gs.length) gs = t.generators;
      show(EMATH.generate(t, gs[Math.floor(Math.random() * gs.length)]));
    } }, 'Fresh random question'));
  }

  root.appendChild(h('nav', { class: 'crumbs', 'aria-label': 'Breadcrumb' }, h('a', { href: '#/home' }, 'Topics'), ' / ', h('a', { href: '#/topic/' + id }, t.title), ' / Practice'));
  root.appendChild(h('h1', { tabindex: '-1', id: 'page-title' }, 'Practise: ' + t.title));
  root.appendChild(chips); root.appendChild(status); root.appendChild(qHost); root.appendChild(nav);
  show(pool()[0]);
};
