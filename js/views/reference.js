EMATH.views.reference = function (root) {
  var h = EMATH.util.h, rm = EMATH.rm;
  root.appendChild(h('h1', { tabindex: '-1', id: 'page-title' }, 'Formulae & glossary'));

  var groups = {};
  EMATH.formulae.forEach(function (f) { (groups[f.strand] = groups[f.strand] || []).push(f); });
  EMATH.readyTopics().forEach(function (t) {
    var strand = EMATH.syllabus.strands.filter(function (s) { return s.id === t.strand; })[0].name;
    t.formulae.forEach(function (f) { (groups[strand] = groups[strand] || []).push({ name: f.name + ' (' + t.title.split(' (')[0] + ')', text: f.text }); });
  });
  root.appendChild(h('h2', {}, 'Formulae'));
  Object.keys(groups).forEach(function (s) {
    root.appendChild(h('section', { class: 'block' }, h('h3', {}, s),
      h('ul', { class: 'formulae' }, groups[s].map(function (f) { return h('li', {}, h('strong', {}, f.name + ': '), h('span', { html: rm(f.text) })); }))));
  });

  root.appendChild(h('h2', {}, 'Glossary'));
  var list = h('dl', { class: 'defs' });
  var search = h('input', { type: 'search', placeholder: 'Search terms', 'aria-label': 'Search glossary', class: 'ans search' });
  function draw() {
    var q = search.value.trim().toLowerCase();
    list.innerHTML = '';
    EMATH.glossary.filter(function (g) { return !q || (g.term + ' ' + g.def).toLowerCase().indexOf(q) >= 0; })
      .sort(function (a, b) { return a.term.localeCompare(b.term); })
      .forEach(function (g) { list.appendChild(h('dt', {}, g.term)); list.appendChild(h('dd', { html: rm(g.def) })); });
    if (!list.children.length) list.appendChild(h('dd', {}, 'No matching terms.'));
  }
  search.addEventListener('input', draw);
  root.appendChild(search); root.appendChild(list);
  draw();
};
