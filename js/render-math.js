/*
 * Tiny markup -> safe HTML for maths.
 *   {a|b}        fraction            sqrt(expr)   square root (no nested parens inside)
 *   x^2  x^(-3)  superscript         **bold**
 * Input is HTML-escaped first, so authored content cannot inject markup.
 */
EMATH.rm = function (s) {
  s = EMATH.util.esc(String(s));
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/sqrt\(([^()]+)\)/g, '<span class="rad">&radic;<span class="rad-in">$1</span></span>');
  s = s.replace(/\{([^{}|]+)\|([^{}|]+)\}/g, '<span class="frac"><span class="num">$1</span><span class="den">$2</span></span>');
  s = s.replace(/\^\(([^()]+)\)/g, '<sup>$1</sup>').replace(/\^(-?\d+|[a-z])/g, '<sup>$1</sup>');
  return s;
};
