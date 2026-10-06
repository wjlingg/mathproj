EMATH.views.topic = function (root, id) {
  var h = EMATH.util.h, rm = EMATH.rm;
  var t = EMATH.topics[id];
  if (!t) { EMATH.views.notFound(root); return; }
  var st = EMATH.store.topicStats(id), total = EMATH.bank(t).length;

  root.appendChild(h('nav', { class: 'crumbs', 'aria-label': 'Breadcrumb' }, h('a', { href: '#/home' }, 'Topics'), ' / ', t.title));
  root.appendChild(h('header', { class: 'topic-head' },
    h('h1', { tabindex: '-1', id: 'page-title' }, t.title),
    h('p', { class: 'muted' }, t.syllabusNote),
    t.verified ? null : h('p', { class: 'flag' }, 'Syllabus placement not yet checked against the MOE documents.'),
    h('div', { class: 'hero-actions' },
      h('a', { class: 'btn primary', href: '#/practice/' + id }, 'Practise (' + st.solved + '/' + total + ' solved)'),
      h('a', { class: 'btn ghost', href: '#/quiz/' + id }, 'Quiz me on this'))));

  function section(title, body, cls) { return h('section', { class: 'block ' + (cls || '') }, h('h2', {}, title), body); }

  root.appendChild(section('What you will learn', h('ul', {}, t.objectives.map(function (o) { return h('li', { html: rm(o) }); }))));

  var key = h('div', { class: 'prose' });
  var dl = null;
  t.explanation.forEach(function (e) {
    if (typeof e === 'string') { dl = null; key.appendChild(h('p', { html: rm(e) })); }
    else {
      if (!dl) { dl = h('dl', { class: 'defs' }); key.appendChild(dl); }
      dl.appendChild(h('dt', {}, e.term)); dl.appendChild(h('dd', { html: rm(e.def) }));
    }
  });
  root.appendChild(section('Key ideas', key));

  if (t.viz && EMATH.viz[t.viz]) {
    var box = h('div');
    root.appendChild(section('Try it', box, 'viz-block'));
    EMATH.viz[t.viz](box);
  }

  var ex = h('div', { class: 'examples' });
  t.examples.forEach(function (e, i) {
    ex.appendChild(h('article', { class: 'example' },
      h('h3', {}, 'Example ' + (i + 1) + ': ' + e.title),
      h('p', { class: 'q-prompt', html: rm(e.question) }),
      EMATH.walkthrough(e.steps, '<strong>Answer:</strong> ' + rm(e.answer))));
  });
  root.appendChild(section('Worked examples', ex));

  root.appendChild(section('Common mistakes', h('ul', { class: 'mistakes' }, t.mistakes.map(function (m) { return h('li', { html: rm(m) }); }))));
  root.appendChild(section('Formulae', h('ul', { class: 'formulae' }, t.formulae.map(function (f) { return h('li', {}, h('strong', {}, f.name + ': '), h('span', { html: rm(f.text) })); }))));
  root.appendChild(section('Summary', h('ul', {}, t.summary.map(function (s) { return h('li', { html: rm(s) }); }))));
  root.appendChild(h('div', { class: 'hero-actions' }, h('a', { class: 'btn primary', href: '#/practice/' + id }, 'Start practising')));
};
