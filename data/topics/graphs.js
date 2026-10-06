(function () {
  EMATH.registerTopic({
    id: 'graphs', title: 'Linear Graphs and Simultaneous Equations',
    strand: 'number-algebra', levels: [2, 3],
    syllabusNote: 'Sec 2-3 (Math syllabus); this bank covers straight lines, simultaneous equations and values from graphs of simple quadratics',
    verified: false,
    objectives: [
      'Find the gradient, y-intercept and equation of a straight line.',
      'Recognise parallel lines and find where a line cuts the axes.',
      'Solve simultaneous linear equations by elimination or substitution, and from word problems.',
      'Read values from tables and graphs of simple quadratic relationships.'
    ],
    explanation: [
      'A straight line has the equation **y = mx + c**, where m is the **gradient** and c is the **y-intercept**. The line crosses the x-axis where y = 0. Parallel lines have the same gradient.',
      { term: 'Gradient', def: 'm = {y₂ - y₁|x₂ - x₁} = {change in y|change in x}. A line that goes down to the right has a negative gradient.' },
      { term: 'Finding the equation', def: 'Find m from two points, then use one point in y = mx + c to find c. Check with the other point.' },
      { term: 'Simultaneous equations', def: 'To solve two equations in x and y, eliminate one unknown by making its coefficients equal and adding or subtracting, or substitute one equation into the other. Then find the second unknown and check in both equations.' },
      { term: 'Where lines meet', def: 'The solution of two simultaneous linear equations is the point where their graphs cross.' },
      { term: 'Word problems', def: 'Let the two unknowns be x and y (for example the price of an adult and a child ticket), write one equation for each situation, then solve.' }
    ],
    examples: [
      { title: 'Equation of a line', question: 'Find the equation of the line through A(1, 3) and B(5, 11), and the value of y when x = 10.',
        steps: ['Gradient = {11 - 3|5 - 1} = {8|4} = 2.', 'Use y = 2x + c with A(1, 3): 3 = 2 + c, so c = 1.', 'The equation is y = 2x + 1.', 'When x = 10: y = 21.'], answer: 'y = 2x + 1; y = 21' },
      { title: 'Simultaneous equations', question: 'Solve x + y = 15 and 3x + 2y = 38.',
        steps: ['From the first equation, y = 15 - x.', 'Substitute: 3x + 2(15 - x) = 38, so x + 30 = 38 and x = 8.', 'y = 15 - 8 = 7.', 'Check: 3(8) + 2(7) = 38 ✓.'], answer: 'x = 8, y = 7' },
      { title: 'A word problem', question: '2 adult tickets and 3 child tickets cost $31. 1 adult ticket and 4 child tickets cost $28. Find the price of each ticket.',
        steps: ['Let adult = a and child = c: 2a + 3c = 31 and a + 4c = 28.', 'From the second, a = 28 - 4c. Substitute: 2(28 - 4c) + 3c = 31, so 56 - 5c = 31 and c = 5.', 'a = 28 - 20 = 8.', 'Adult $8, child $5.'], answer: 'adult $8, child $5' }
    ],
    mistakes: [
      'Calculating the gradient as {x₂ - x₁|y₂ - y₁} (upside down).',
      'Mixing up the order of the points, so the top and bottom differences have opposite signs.',
      'Sign errors when subtracting one equation from another. Add the equations when the coefficients have opposite signs.',
      'Finding x and forgetting to find y.',
      'Reading y-intercept as the value of x where the line crosses the y-axis. The y-intercept is the y-value when x = 0.'
    ],
    formulae: [
      { name: 'Straight line', text: 'y = mx + c' },
      { name: 'Gradient', text: 'm = {y₂ - y₁|x₂ - x₁}' },
      { name: 'Parallel lines', text: 'same gradient' }
    ],
    summary: [
      'y = mx + c: m is the gradient, c is the y-intercept.',
      'Gradient from two points: change in y over change in x.',
      'Solve simultaneous equations by elimination or substitution, and check in both.',
      'Parallel lines have equal gradients.'
    ],
    viz: 'graph-plotter',
    questions: [
      { id: 'gr1', level: 'foundation', prompt: 'Find the gradient of the line passing through (0, 1) and (2, 7).', answer: 3, solution: ['Gradient = {7 - 1|2 - 0} = 3.'] },
      { id: 'gr2', level: 'foundation', prompt: 'Write down the y-intercept of the line y = 4 - 3x.', answer: 4, solution: ['When x = 0, y = 4.'] },
      { id: 'gr3', level: 'foundation', prompt: 'Find the value of y when x = -2 on the line y = 3x - 2.', answer: -8, solution: ['y = 3(-2) - 2 = -6 - 2 = -8.'] },
      { id: 'gr4', level: 'foundation', type: 'mcq', prompt: 'Which line is parallel to y = 2x + 5?', options: ['y = 2x - 1', 'y = 5x + 2', 'y = -2x + 5', 'y = {x|2}'], answer: 0, solution: ['Parallel lines have the same gradient, 2.'] },
      { id: 'gr5', level: 'foundation', prompt: 'Find the x-intercept of the line y = 2x - 6.', answer: 3, solution: ['At the x-axis, y = 0.', '0 = 2x - 6, so x = 3.'] },
      { id: 'gr6', level: 'foundation', prompt: 'Find the gradient of the line y = -{x|2} + 3.', answer: -0.5, solution: ['The coefficient of x is -{1|2}, so the gradient is -0.5.'] },
      { id: 'gr7', level: 'standard', prompt: 'The points A(1, 3) and B(5, 11) lie on a straight line.',
        parts: [{ label: '(a)', prompt: 'Find the gradient of AB.', answer: 2, marks: 1 },
                { label: '(b)', prompt: 'Find the equation of the line. y =', type: 'expression', answer: '2x+1', marks: 2 },
                { label: '(c)', prompt: 'Find y when x = 10.', answer: 21, marks: 1 }],
        solution: ['Gradient = {11 - 3|5 - 1} = 2.', '3 = 2(1) + c, so c = 1 and y = 2x + 1.', 'x = 10: y = 21.'] },
      { id: 'gr8', level: 'standard', prompt: 'A line passes through (-2, 5) and (4, -1).',
        parts: [{ label: '(a)', prompt: 'Find its gradient.', answer: -1, marks: 2 }, { label: '(b)', prompt: 'Find its y-intercept.', answer: 3, marks: 2 }],
        solution: ['Gradient = {-1 - 5|4 - (-2)} = {-6|6} = -1.', 'y = -x + c. Using (4, -1): -1 = -4 + c, so c = 3.'] },
      { id: 'gr9', level: 'standard', prompt: 'Solve the simultaneous equations x + y = 15 and 3x + 2y = 38.',
        parts: [{ label: '(a)', prompt: 'Find x.', answer: 8, marks: 2 }, { label: '(b)', prompt: 'Find y.', answer: 7, marks: 1 }],
        hint: 'Write y = 15 - x and substitute.', solution: ['3x + 2(15 - x) = 38, so x + 30 = 38 and x = 8.', 'y = 15 - 8 = 7.'] },
      { id: 'gr10', level: 'standard', prompt: 'Solve the simultaneous equations 3x + 2y = 16 and 5x - 2y = 16.',
        parts: [{ label: '(a)', prompt: 'Find x.', answer: 4, marks: 2 }, { label: '(b)', prompt: 'Find y.', answer: 2, marks: 1 }],
        hint: 'Add the equations to eliminate y.', solution: ['Add: 8x = 32, so x = 4.', 'Substitute: 12 + 2y = 16, so y = 2.'] },
      { id: 'gr11', level: 'standard', prompt: '2 adult tickets and 3 child tickets cost $31. 1 adult ticket and 4 child tickets cost $28.',
        parts: [{ label: '(a)', prompt: 'Find the price of an adult ticket.', answer: 8, unit: '$', marks: 3 }, { label: '(b)', prompt: 'Find the price of a child ticket.', answer: 5, unit: '$', marks: 1 }],
        solution: ['2a + 3c = 31 and a + 4c = 28.', 'a = 28 - 4c, so 56 - 5c = 31 and c = 5.', 'a = 28 - 20 = 8.'] },
      { id: 'gr12', level: 'standard', prompt: 'The lines y = 2x - 1 and y = x + 4 meet at the point P.',
        parts: [{ label: '(a)', prompt: 'Find the x-coordinate of P.', answer: 5, marks: 2 }, { label: '(b)', prompt: 'Find the y-coordinate of P.', answer: 9, marks: 1 }],
        solution: ['At P: 2x - 1 = x + 4, so x = 5.', 'y = 5 + 4 = 9.'] },
      { id: 'gr13', level: 'standard', prompt: 'A table is made for y = x^2 - 4x + 3.',
        parts: [{ label: '(a)', prompt: 'Find y when x = -1.', answer: 8, marks: 1 }, { label: '(b)', prompt: 'Find y when x = 2.5.', answer: -0.75, marks: 1 },
                { label: '(c)', prompt: 'The graph is symmetrical. Write down the x-value at the lowest point.', answer: 2, marks: 2 }],
        hint: 'For (c), y = 3 at x = 0 and also at x = 4. The line of symmetry is halfway between.', solution: ['x = -1: 1 + 4 + 3 = 8.', 'x = 2.5: 6.25 - 10 + 3 = -0.75.', 'y = 3 at x = 0 and x = 4, so the lowest point is at x = 2.'] },
      { id: 'gr14', level: 'standard', prompt: 'A ball is thrown up. Its height h metres after t seconds is h = 20t - 5t^2.',
        parts: [{ label: '(a)', prompt: 'Find h when t = 3.', answer: 15, unit: 'm', marks: 1 }, { label: '(b)', prompt: 'At what time does the ball return to the ground?', answer: 4, unit: 's', marks: 2 },
                { label: '(c)', prompt: 'Find the maximum height, which occurs halfway through the flight.', answer: 20, unit: 'm', marks: 2 }],
        solution: ['t = 3: 60 - 45 = 15 m.', 'h = 0: 5t(4 - t) = 0, so t = 4 s.', 'Halfway: t = 2. h = 40 - 20 = 20 m.'] },
      { id: 'gr15', level: 'challenge', prompt: 'A line is parallel to y = 3x - 1 and passes through (2, 9).',
        parts: [{ label: '(a)', prompt: 'Find its equation. y =', type: 'expression', answer: '3x+3', marks: 2 }, { label: '(b)', prompt: 'Find the x-coordinate of the point where it crosses the x-axis.', answer: -1, marks: 2 }],
        solution: ['The gradient is 3: y = 3x + c. At (2, 9): 9 = 6 + c, so c = 3.', 'y = 0: 3x + 3 = 0, so x = -1.'] },
      { id: 'gr16', level: 'challenge', marks: 4, prompt: 'The lines 2x + y = 10 and x - y = -1 meet at P. Each line also meets the x-axis. Find the area of the triangle formed by the two lines and the x-axis.', answer: 12, unit: 'units²',
        hint: 'Find P, then the two x-intercepts.', solution: ['Add the equations: 3x = 9, so x = 3, and y = 4. P = (3, 4).', '2x + y = 10 meets the x-axis at (5, 0). x - y = -1 meets it at (-1, 0).', 'Base = 5 - (-1) = 6, height = 4.', 'Area = {1|2} × 6 × 4 = 12.'] }
    ],
    generators: [
      { id: 'gradient', level: 'foundation', make: function (r) {
        var m = r.pick([-4, -3, -2, -1, 2, 3, 4, 5]), x1 = r.int(-3, 3), y1 = r.int(-5, 5), dx = r.int(1, 4), x2 = x1 + dx, y2 = y1 + m * dx;
        return { prompt: 'Find the gradient of the line passing through (' + x1 + ', ' + y1 + ') and (' + x2 + ', ' + y2 + ').', answer: m,
          hint: 'Gradient = change in y ÷ change in x.', solution: ['Gradient = {' + y2 + ' - (' + y1 + ')|' + x2 + ' - (' + x1 + ')} = {' + (y2 - y1) + '|' + dx + '} = ' + m + '.'] };
      } },
      { id: 'simultaneous', level: 'standard', make: function (r) {
        var a, b, d, e, x = r.int(-3, 6), y = r.int(-3, 6);
        do { a = r.int(1, 5); b = r.int(1, 5); d = r.int(1, 5); e = r.int(-5, -1); } while (a * e - b * d === 0);
        var c = a * x + b * y, f = d * x + e * y;
        return { prompt: 'Solve the simultaneous equations ' + a + 'x + ' + b + 'y = ' + c + ' and ' + d + 'x - ' + (-e) + 'y = ' + f + '. Give the value of x.', answer: x,
          hint: 'Use elimination or substitution, then check both equations.',
          solution: ['The solution is x = ' + x + ', y = ' + y + '.', 'Check: ' + a + '(' + x + ') + ' + b + '(' + y + ') = ' + c + ' ✓ and ' + d + '(' + x + ') - ' + (-e) + '(' + y + ') = ' + f + ' ✓.'] };
      } }
    ]
  });
})();
