/*
 * Shared question UI. EMATH.normQ(q) gives every question a parts[] array.
 * EMATH.questionForm(q, {quiz:true}) -> {el, grade(show), reveal()}
 */
EMATH.normQ = function (q) {
  if (q.parts) {
    q.parts.forEach(function (p) { if (!p.type) p.type = 'numeric'; if (p.marks == null) p.marks = 1; });
    return q;
  }
  var p = { prompt: '', answer: q.answer, unit: q.unit, dp: q.dp, sf: q.sf, tol: q.tol, form: q.form,
            simplest: q.simplest, options: q.options, type: q.type || 'numeric', marks: q.marks || 1 };
  return Object.assign({}, q, { parts: [p] });
};

EMATH.LEVELS = { foundation: 'Foundation', standard: 'Standard', challenge: 'Challenge' };

EMATH.solutionBlock = function (q, animated) {
  var h = EMATH.util.h, rm = EMATH.rm;
  q = EMATH.normQ(q);
  var answers = q.parts.map(function (p) {
    return (p.label ? p.label + ' ' : '') + EMATH.math.formatAnswer(p);
  });
  var finalHtml = '<strong>Answer:</strong> ' + answers.join(' &nbsp;&middot;&nbsp; ');
  var steps = q.solution || [];
  if (animated) return EMATH.walkthrough(steps, finalHtml);
  return h('div', { class: 'walkthrough' },
    steps.length ? h('ol', { class: 'steps' }, steps.map(function (s) { return h('li', { html: rm(s) }); })) : null,
    h('div', { class: 'final-answer', html: finalHtml }));
};

EMATH.questionForm = function (q, opts) {
  opts = opts || {};
  var h = EMATH.util.h, rm = EMATH.rm;
  q = EMATH.normQ(q);
  var uid = 'q' + Math.random().toString(36).slice(2, 8);
  var rows = [];

  var form = h('form', { class: 'qcard', novalidate: true, autocomplete: 'off' });
  var marks = q.parts.reduce(function (s, p) { return s + p.marks; }, 0);
  form.appendChild(h('div', { class: 'q-meta' },
    h('span', { class: 'chip lvl-' + q.level }, EMATH.LEVELS[q.level] || q.level),
    h('span', { class: 'muted' }, '[' + marks + (marks === 1 ? ' mark' : ' marks') + ']')));
  if (q.prompt) form.appendChild(h('p', { class: 'q-prompt', html: rm(q.prompt) }));

  q.parts.forEach(function (p, i) {
    var fb = h('div', { class: 'fb', 'aria-live': 'polite' });
    var control, getVal;
    if (p.type === 'mcq') {
      var name = uid + '-' + i;
      control = h('div', { class: 'mcq' }, p.options.map(function (o, k) {
        return h('label', { class: 'opt' }, h('input', { type: 'radio', name: name, value: String(k) }), h('span', { html: rm(o) }));
      }));
      getVal = function () { var c = control.querySelector('input:checked'); return c ? c.value : null; };
    } else {
      var inp = h('input', { type: 'text', class: 'ans', inputmode: p.type === 'numeric' ? 'text' : 'text',
        autocapitalize: 'off', spellcheck: 'false', 'aria-label': 'Answer ' + (p.label || '') });
      control = h('span', { class: 'ans-wrap' },
        p.unit === '$' ? h('span', { class: 'unit' }, '$') : null, inp,
        p.unit && p.unit !== '$' ? h('span', { class: 'unit' }, p.unit) : null);
      getVal = function () { return inp.value; };
    }
    var row = h('div', { class: 'part' },
      h('div', { class: 'part-q' },
        p.label ? h('span', { class: 'part-label' }, p.label) : null,
        p.prompt ? h('span', { html: rm(p.prompt) }) : null,
        h('span', { class: 'muted part-marks' }, q.parts.length > 1 ? '[' + p.marks + ']' : '')),
      h('div', { class: 'part-in' }, control, fb));
    form.appendChild(row);
    rows.push({ part: p, row: row, fb: fb, get: getVal });
  });

  var solutionHost = h('div', { class: 'solution-host' });
  var hintHost = h('div', { class: 'hint-host', 'aria-live': 'polite' });

  function grade(show) {
    var got = 0, all = true;
    rows.forEach(function (r) {
      var res = EMATH.math.gradePart(r.part, r.get());
      if (res.ok) got += r.part.marks; else all = false;
      if (show) {
        r.row.classList.toggle('ok', res.ok);
        r.row.classList.toggle('bad', !res.ok);
        r.fb.textContent = (res.ok ? '✓ Correct. ' : '✗ Not quite. ') + (res.note || '');
      }
    });
    return { got: got, total: marks, all: all };
  }

  function reveal() {
    solutionHost.innerHTML = '';
    solutionHost.appendChild(EMATH.solutionBlock(q, true));
  }

  if (!opts.quiz) {
    var btns = h('div', { class: 'q-actions' },
      h('button', { type: 'submit', class: 'btn primary' }, 'Check'),
      q.hint ? h('button', { type: 'button', class: 'btn ghost', onclick: function () {
        hintHost.innerHTML = ''; hintHost.appendChild(h('div', { class: 'hint', html: '<strong>Hint:</strong> ' + rm(q.hint) }));
      } }, 'Hint') : null,
      h('button', { type: 'button', class: 'btn ghost', onclick: reveal }, 'Show me how'));
    form.appendChild(btns);
    form.appendChild(hintHost);
    form.appendChild(solutionHost);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (opts.quiz) return;
    var res = grade(true);
    if (opts.onChecked) opts.onChecked(res);
  });

  return { el: form, grade: grade, reveal: reveal, q: q };
};
