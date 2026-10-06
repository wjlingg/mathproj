/*
 * Tiny markup -> safe HTML for maths.
 *   {a|b}        fraction            sqrt(expr)   square root (no nested parens inside)
 *   x^2  x^(-3)  superscript         **bold**
 *   mat(1,2;3,4)  matrix (columns split by commas, rows by semicolons)
 *   vec(3,-2)     column vector
 *   Keep brackets, quotes and & out of matrix entries; use decimals rather than fractions.
 * Input is HTML-escaped first, so authored content cannot inject markup.
 */
EMATH.rm = function (s) {
  s = EMATH.util.esc(String(s));
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  function grid(rows) {
    var cols = Math.max.apply(null, rows.map(function (r) { return r.length; }));
    var cells = rows.map(function (r) { return r.map(function (c) { return '<span>' + c.trim() + '</span>'; }).join(''); }).join('');
    return '<span class="mat"><span class="mat-grid" style="grid-template-columns:repeat(' + cols + ',auto)">' + cells + '</span></span>';
  }
  s = s.replace(/\bmat\(([^()]*)\)/g, function (m, body) { return grid(body.split(';').map(function (r) { return r.split(','); })); });
  s = s.replace(/\bvec\(([^()]*)\)/g, function (m, body) { return grid(body.split(',').map(function (c) { return [c]; })); });
  s = s.replace(/sqrt\(([^()]+)\)/g, '<span class="rad">&radic;<span class="rad-in">$1</span></span>');
  s = s.replace(/\{([^{}|]+)\|([^{}|]+)\}/g, '<span class="frac"><span class="num">$1</span><span class="den">$2</span></span>');
  s = s.replace(/\^\(([^()]+)\)/g, '<sup>$1</sup>').replace(/\^(-?\d+|[a-z])/g, '<sup>$1</sup>');
  return s;
};
