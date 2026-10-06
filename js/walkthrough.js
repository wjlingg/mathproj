/* "Show me how": reveal worked steps one at a time. */
EMATH.walkthrough = function (steps, finalHtml) {
  var h = EMATH.util.h, rm = EMATH.rm;
  var shown = 0;
  var list = h('ol', { class: 'steps' });
  var final = h('div', { class: 'final-answer', hidden: true, html: finalHtml || '' });
  var next = h('button', { type: 'button', class: 'btn small', onclick: function () { reveal(shown + 1); } }, 'Show next step');
  var all = h('button', { type: 'button', class: 'btn small ghost', onclick: function () { reveal(steps.length); } }, 'Show all');
  var bar = h('div', { class: 'wt-bar' }, next, all);

  function reveal(n) {
    while (shown < Math.min(n, steps.length)) {
      list.appendChild(h('li', { class: 'step-in', html: rm(steps[shown]) }));
      shown++;
    }
    if (shown >= steps.length) {
      bar.hidden = true;
      if (finalHtml) final.hidden = false;
    }
  }

  var root = h('div', { class: 'walkthrough' }, list, bar, final);
  reveal(1);
  if (!steps.length) { bar.hidden = true; if (finalHtml) final.hidden = false; }
  return root;
};
