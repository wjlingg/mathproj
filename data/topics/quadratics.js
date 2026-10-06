(function () {
  EMATH.registerTopic({
    id: 'quadratics', title: 'Quadratic Equations and Graphs',
    strand: 'number-algebra', levels: [2, 3, 4],
    syllabusNote: 'O-Level syllabus N6.6-6.7 and solving by factorisation (Sec 2); formula, completing the square, graphical method and problems N7.11-7.14 (Sec 3/4).',
    verified: true,
    objectives: [
      'Solve quadratic equations by factorisation, completing the square and the quadratic formula.',
      'Form and solve quadratic equations from word problems, and reject solutions that do not fit.',
      'Find the turning point and line of symmetry of a quadratic graph.',
      'Round answers to the accuracy asked, usually 2 decimal places.'
    ],
    explanation: [
      'A **quadratic equation** can be written ax^2 + bx + c = 0 with a ≠ 0. It has up to two solutions (roots). Always rearrange to make one side 0 before you solve.',
      { term: 'Factorisation', def: 'If (x - p)(x - q) = 0 then x = p or x = q. Use this when the quadratic factorises easily. Never divide both sides by an expression that contains x.' },
      { term: 'Quadratic formula', def: 'For ax^2 + bx + c = 0: x = {-b ± sqrt(b^2 - 4ac)|2a}. Use it when the question says "give your answer correct to 2 decimal places".' },
      { term: 'Completing the square', def: 'x^2 + 2px + c = (x + p)^2 - p^2 + c. Then (x + p)^2 = k gives x = -p ± sqrt(k).' },
      { term: 'Graphs', def: 'The graph of y = ax^2 + bx + c is a parabola. The line of symmetry is x = {-b|2a}, which is halfway between the roots. The turning point lies on that line. If a > 0 it is a minimum, and if a < 0 it is a maximum.' },
      { term: 'Word problems', def: 'Let a letter stand for the unknown, form an equation from the area, product or other condition, solve it, then reject any solution that is negative or not possible.' }
    ],
    examples: [
      { title: 'By factorisation', question: 'Solve x^2 - 5x - 14 = 0.',
        steps: ['Find two numbers with product -14 and sum -5: -7 and 2.', '(x - 7)(x + 2) = 0.', 'x = 7 or x = -2.'], answer: 'x = 7 or x = -2' },
      { title: 'By the formula', question: 'Solve x^2 + 3x - 5 = 0, giving your answers correct to 2 decimal places.',
        steps: ['a = 1, b = 3, c = -5.', 'x = {-3 ± sqrt(9 + 20)|2} = {-3 ± sqrt(29)|2}.', 'x = {-3 + 5.385|2} = 1.19 or x = {-3 - 5.385|2} = -4.19.'], answer: 'x = 1.19 or x = -4.19' },
      { title: 'A word problem', question: 'A rectangle has length (x + 3) cm and width x cm. Its area is 70 cm^2. Find x.',
        steps: ['x(x + 3) = 70, so x^2 + 3x - 70 = 0.', '(x + 10)(x - 7) = 0, so x = -10 or x = 7.', 'A width cannot be negative, so x = 7.'], answer: 'x = 7' }
    ],
    mistakes: [
      'Cancelling an x from both sides of x^2 = 5x. This loses the solution x = 0. Move everything to one side and factorise.',
      'Solving (x - 3)(x + 2) = 6 by setting each bracket equal to 6. The right-hand side must be 0.',
      'Sign errors in the formula, for example using +b instead of -b.',
      'Giving both solutions when one of them is impossible (a negative length).',
      'Rounding too early in the quadratic formula. Keep the full calculator value until the last step.'
    ],
    formulae: [
      { name: 'Quadratic formula', text: 'x = {-b ± sqrt(b^2 - 4ac)|2a}' },
      { name: 'Completing the square', text: 'x^2 + 2px + c = (x + p)^2 + c - p^2' },
      { name: 'Line of symmetry', text: 'x = {-b|2a}' }
    ],
    summary: [
      'Make one side zero, then factorise, complete the square or use the formula.',
      'The formula gives two solutions; reject any that do not make sense in the problem.',
      'The line of symmetry is halfway between the roots.',
      'Round only the final answer.'
    ],
    viz: 'graph-plotter',
    questions: [
      { id: 'qd1', level: 'foundation', prompt: 'Solve x^2 - 7x + 12 = 0. Write down the larger solution.', answer: 4, solution: ['(x - 3)(x - 4) = 0, so x = 3 or x = 4.', 'The larger solution is 4.'] },
      { id: 'qd2', level: 'foundation', type: 'mcq', prompt: 'Solve x^2 = 9.', options: ['x = 3', 'x = 3 or x = -3', 'x = 9', 'x = 9 or x = -9'], answer: 1, solution: ['x = ±sqrt(9) = ±3.'] },
      { id: 'qd3', level: 'foundation', prompt: 'Solve x^2 - 5x = 0. Write down the positive solution.', answer: 5, solution: ['x(x - 5) = 0, so x = 0 or x = 5.', 'The positive solution is 5.'] },
      { id: 'qd5', level: 'foundation', prompt: 'Find the larger x-intercept of the graph of y = x^2 - 4.', answer: 2, solution: ['y = 0: x^2 = 4, so x = 2 or x = -2.', 'The larger is 2.'] },
      { id: 'qd6', level: 'foundation', prompt: 'x = 2 is a solution of x^2 + kx - 10 = 0. Find k.', answer: 3, solution: ['Substitute x = 2: 4 + 2k - 10 = 0.', '2k = 6, so k = 3.'] },
      { id: 'qd7', level: 'standard', marks: 3, prompt: 'Solve x^2 - 5x - 14 = 0. Write down the larger solution.', answer: 7, solution: ['(x - 7)(x + 2) = 0.', 'x = 7 or x = -2. The larger is 7.'] },
      { id: 'qd8', level: 'standard', prompt: 'Solve 2x^2 - 7x + 3 = 0.',
        parts: [{ label: '(a)', prompt: 'Find the smaller solution.', answer: 0.5, marks: 2 }, { label: '(b)', prompt: 'Find the larger solution.', answer: 3, marks: 1 }],
        hint: 'Factorise as (2x - 1)(x - 3).', solution: ['2x^2 - 7x + 3 = (2x - 1)(x - 3) = 0.', 'x = {1|2} or x = 3.'] },
      { id: 'qd9', level: 'standard', prompt: 'Solve x^2 + 3x - 5 = 0, giving your answers correct to 2 decimal places.',
        parts: [{ label: '(a)', prompt: 'The positive solution.', answer: 1.192582, dp: 2, marks: 3 }, { label: '(b)', prompt: 'The negative solution.', answer: -4.192582, dp: 2, marks: 1 }],
        solution: ['x = {-3 ± sqrt(9 + 20)|2} = {-3 ± sqrt(29)|2}.', 'x = 1.19 or x = -4.19.'] },
      { id: 'qd10', level: 'standard', prompt: 'x^2 + 10x + 3 = (x + a)^2 + b.',
        parts: [{ label: '(a)', prompt: 'Find a.', answer: 5, marks: 1 }, { label: '(b)', prompt: 'Find b.', answer: -22, marks: 1 },
                { label: '(c)', prompt: 'Hence solve x^2 + 10x + 3 = 0. Give the smaller solution correct to 2 decimal places.', answer: -9.690416, dp: 2, marks: 2 }],
        solution: ['(x + 5)^2 = x^2 + 10x + 25, so a = 5.', 'x^2 + 10x + 3 = (x + 5)^2 - 22, so b = -22.', '(x + 5)^2 = 22, x = -5 ± sqrt(22). The smaller solution is -5 - 4.690 = -9.69.'] },
      { id: 'qd11', level: 'standard', prompt: 'The length of a rectangle is 3 cm more than its width x cm. The area is 70 cm^2.',
        parts: [{ label: '(a)', prompt: 'Form an equation in x and solve it to find x.', answer: 7, unit: 'cm', marks: 3 }, { label: '(b)', prompt: 'Find the perimeter of the rectangle.', answer: 34, unit: 'cm', marks: 1 }],
        solution: ['x(x + 3) = 70, so x^2 + 3x - 70 = 0.', '(x + 10)(x - 7) = 0, so x = 7 (x cannot be negative).', 'Length = 10 cm. Perimeter = 2(7 + 10) = 34 cm.'] },
      { id: 'qd12', level: 'standard', marks: 3, prompt: 'The product of two consecutive positive integers is 156. Find the larger integer.', answer: 13,
        hint: 'Let the integers be x and x + 1.', solution: ['x(x + 1) = 156, so x^2 + x - 156 = 0.', '(x + 13)(x - 12) = 0, so x = 12 (positive).', 'The larger integer is 13.'] },
      { id: 'qd14', level: 'standard', marks: 3, prompt: 'Solve {6|x} + 1 = x. Write down the positive solution.', answer: 3,
        hint: 'Multiply every term by x.', solution: ['6 + x = x^2, so x^2 - x - 6 = 0.', '(x - 3)(x + 2) = 0.', 'The positive solution is x = 3.'] },
      { id: 'qd15', level: 'standard', prompt: 'The graph of y = x^2 - 6x + 5 has a turning point.',
        parts: [{ label: '(a)', prompt: 'Find the x-coordinate of the turning point.', answer: 3, marks: 1 }, { label: '(b)', prompt: 'Find the y-coordinate of the turning point.', answer: -4, marks: 2 }],
        hint: 'The roots are 1 and 5. The turning point is halfway between them.', solution: ['x^2 - 6x + 5 = (x - 1)(x - 5), so the roots are 1 and 5.', 'The line of symmetry is x = 3.', 'y = 9 - 18 + 5 = -4.'] },
      { id: 'qd16', level: 'challenge', marks: 4, prompt: 'A rectangular garden is 14 m by 9 m. A path of uniform width x m is built around the outside, and the area of the path is 50 m^2. Find x.', answer: 1, unit: 'm',
        hint: 'The new rectangle is (14 + 2x) by (9 + 2x).', solution: ['(14 + 2x)(9 + 2x) - 14 × 9 = 50.', '4x^2 + 46x = 50, so 2x^2 + 23x - 25 = 0.', '(2x + 25)(x - 1) = 0, so x = 1 (x cannot be negative).'] },

      // Sec 4 style: word problems that form quadratics
      { id: 'qd17', level: 'challenge', prompt: 'In March, oranges cost $x per kg. In April the price fell by $1.50 per kg, so $120 buys 4 kg more oranges than in March. The equation reduces to 2x^2 - 3x - 90 = 0.',
        parts: [{ label: '(a)', prompt: 'Solve the equation to find the March price per kg.', answer: 7.5, unit: '$', marks: 3 }, { label: '(b)', prompt: 'Find the April price per kg.', answer: 6, unit: '$', marks: 1 }, { label: '(c)', prompt: 'Find the percentage decrease in price.', answer: 20, unit: '%', marks: 2 }],
        hint: 'The mass in March is {120|x} kg and in April is {120|x - 1.5} kg.', solution: ['{120|x - 1.5} - {120|x} = 4 gives 180 = 4x(x - 1.5), so 2x^2 - 3x - 90 = 0.', 'x = {3 ± sqrt(729)|4} = {3 ± 27|4}, so x = 7.5 (rejecting -6).', 'April price = 7.5 - 1.5 = $6.', '{1.5|7.5} × 100% = 20%.'] },
      { id: 'qd18', level: 'challenge', prompt: 'Pipe A alone takes x hours to fill a tank. Pipe B alone takes 3 hours longer. Together they fill the tank in 4 hours, which gives x^2 - 5x - 12 = 0.',
        parts: [{ label: '(a)', prompt: 'Solve x^2 - 5x - 12 = 0 and write down the positive solution, correct to 2 decimal places.', answer: (5 + Math.sqrt(73)) / 2, dp: 2, unit: 'hours', marks: 3 },
                { label: '(b)', prompt: 'Pipe B alone takes ___ hours and ___ minutes. Find the number of minutes, to the nearest minute.', answer: Math.round((((5 + Math.sqrt(73)) / 2) + 3) % 1 * 60), marks: 1 }],
        hint: '{1|x} + {1|x + 3} = {1|4}.', solution: ['4(x + 3) + 4x = x(x + 3), so x^2 - 5x - 12 = 0.', 'x = {5 ± sqrt(73)|2}, so x = 6.77 hours (the other solution is negative).', 'Pipe B: 6.77 + 3 = 9.77 hours = 9 hours 46 minutes.'] }
    ],
    generators: [
      { id: 'factorise-solve', level: 'foundation', make: function (r) {
        var p = r.int(-8, 8), q = r.int(-8, 8);
        while (p === 0) p = r.int(-8, 8);
        while (q === 0 || p === q || p + q === 0) q = r.int(-8, 8);
        var b = -(p + q), c = p * q, hi = Math.max(p, q), lo = Math.min(p, q);
        var eq = 'x^2 ' + (b < 0 ? '- ' + (-b) : '+ ' + b) + 'x ' + (c < 0 ? '- ' + (-c) : '+ ' + c) + ' = 0';
        return { prompt: 'Solve ' + eq + '. Write down the larger solution.', answer: hi, hint: 'Find two numbers with product ' + c + ' and sum ' + b + '.',
          solution: ['(x ' + (-p < 0 ? '- ' + p : '+ ' + (-p)) + ')(x ' + (-q < 0 ? '- ' + q : '+ ' + (-q)) + ') = 0.', 'x = ' + lo + ' or x = ' + hi + '. The larger is ' + hi + '.'] };
      } },
      { id: 'formula', level: 'standard', make: function (r) {
        var b, c, d;
        do { b = r.int(1, 7); c = -r.int(1, 9); d = b * b - 4 * c; } while (Math.sqrt(d) % 1 === 0);
        var x = (-b + Math.sqrt(d)) / 2;
        return { prompt: 'Solve x^2 + ' + b + 'x - ' + (-c) + ' = 0. Give the positive solution correct to 2 decimal places.', answer: x, dp: 2,
          hint: 'Use the quadratic formula with a = 1.', solution: ['x = {-' + b + ' ± sqrt(' + b + '^2 + ' + (-4 * c) + ')|2} = {-' + b + ' ± sqrt(' + d + ')|2}.', 'The positive solution is ' + x.toFixed(2) + '.'] };
      } }
    ]
  });
})();
