(function () {
  EMATH.registerTopic({
    id: 'curve-graphs', title: 'Graphs of Functions and Their Features',
    strand: 'number-algebra', levels: [4],
    syllabusNote: 'Sec 4 (Math syllabus); placement to be confirmed. Drawing and tangent questions are given as values to calculate',
    verified: false,
    objectives: [
      'Complete tables of values for quadratic, cubic and reciprocal functions.',
      'Recognise the shape and key features of the graphs of y = ax^n and of y = {a|x}.',
      'Find a suitable straight line to draw so that a given equation can be solved from a graph.',
      'Find the equation of a quadratic from its features, and the gradient of a tangent from two points.'
    ],
    explanation: [
      'Graph questions have three typical parts: **complete a table** by substituting, **draw** the curve and **use it** to read off values or solve an equation. Here the values are given so that you can practise the calculations.',
      { term: 'Shapes', def: 'y = x^2 and y = ax^2 + bx + c: a parabola (a "U" if a > 0, an "∩" if a < 0). y = x^3: an S-shape through the origin. y = {a|x}: a hyperbola in two parts that never touches either axis; the axes are **asymptotes**.' },
      { term: 'Why the curve does not touch the y-axis', def: 'For y = {a|x} or y = x + {4|x}, x = 0 would need division by 0, so there is no point on the y-axis.' },
      { term: 'Turning points and symmetry', def: 'A parabola is symmetric about the vertical line through its turning point. The roots are the same distance either side. In y = (x - p)^2 + q the turning point is (p, q).' },
      { term: 'Solving equations by a line', def: 'To solve an equation using the curve y = f(x), rewrite the equation as f(x) = (something). The "something" is the line to draw. For the curve y = x^2 - 2x - 3, the equation x^2 - 4x - 1 = 0 becomes x^2 - 2x - 3 = 2x - 2, so draw y = 2x - 2.' },
      { term: 'Gradient of a tangent', def: 'The gradient of the curve at a point is the gradient of the tangent there. From two points on the tangent: {y₂ - y₁|x₂ - x₁}.' }
    ],
    examples: [
      { title: 'Finding the line to draw', question: 'The curve y = x^2 - 2x - 3 is drawn. Find the equation of the straight line to draw to solve x^2 - 4x - 1 = 0.',
        steps: ['Subtract the equation to be solved from the curve equation: x^2 - 2x - 3 = x^2 - 4x - 1 + (2x - 2).', 'So x^2 - 4x - 1 = 0 is the same as x^2 - 2x - 3 = 2x - 2.', 'Draw the line y = 2x - 2. Its intersections with the curve give the solutions.'], answer: 'y = 2x - 2' },
      { title: 'A parabola from its turning point', question: 'The curve y = ax^2 + bx + 6 has its maximum point at (2, 14). Find a and b.',
        steps: ['The line of symmetry is x = {-b|2a} = 2, so b = -4a.', 'At x = 2: 4a + 2b + 6 = 14.', 'Substitute b = -4a: 4a - 8a + 6 = 14, so -4a = 8 and a = -2.', 'b = -4 × (-2) = 8.'], answer: 'a = -2, b = 8' },
      { title: 'A reciprocal curve', question: 'Use the curve y = x + {4|x} to solve x^2 - 5x + 4 = 0.',
        steps: ['Divide the equation by x: x - 5 + {4|x} = 0.', 'So x + {4|x} = 5.', 'Draw the horizontal line y = 5. The curve cuts it at x = 1 and x = 4.'], answer: 'draw y = 5; x = 1 or x = 4' }
    ],
    mistakes: [
      'Using a rough curve to read values that do not match the table.',
      'Joining the two branches of a reciprocal graph across the y-axis.',
      'Forgetting that a negative number cubed is negative: (-2)^3 = -8, not 8.',
      'Drawing the line y = (the right-hand side) without moving every term to match the curve.',
      'Reading the gradient from two points on the curve instead of two points on the tangent.'
    ],
    formulae: [
      { name: 'Turning point of y = (x - p)^2 + q', text: '(p, q)' },
      { name: 'Line of symmetry', text: 'x = {-b|2a}' },
      { name: 'Gradient', text: '{y₂ - y₁|x₂ - x₁}' }
    ],
    summary: [
      'Substitute carefully to complete tables; use brackets for negative x.',
      'Reciprocal graphs have two branches and never touch the axes.',
      'To solve an equation from a curve, rearrange so that one side is the curve, and draw the other side.',
      'Use the line of symmetry and turning point to find the equation of a parabola.'
    ],
    viz: 'graph-plotter',
    questions: [
      { id: 'cg1', level: 'foundation', prompt: 'Find y when x = -2 on the curve y = x^2 - 3.', answer: 1, solution: ['y = (-2)^2 - 3 = 4 - 3 = 1.'] },
      { id: 'cg2', level: 'foundation', prompt: 'Find y when x = 4 on the curve y = {12|x}.', answer: 3, solution: ['y = {12|4} = 3.'] },
      { id: 'cg3', level: 'foundation', type: 'mcq', prompt: 'What does the graph of y = {1|x} look like?', options: ['Two separate curves, in the 1st and 3rd quadrants', 'A parabola', 'A straight line through the origin', 'An S-shaped cubic'], answer: 0, solution: ['y = {1|x} is a hyperbola with two branches, and x and y always have the same sign.'] },
      { id: 'cg4', level: 'foundation', prompt: 'Write down the x-coordinate of the line of symmetry of y = (x - 2)^2 + 1.', answer: 2, solution: ['The turning point is (2, 1), so the line of symmetry is x = 2.'] },
      { id: 'cg5', level: 'foundation', prompt: 'Find y when x = -2 on the curve y = x^3.', answer: -8, solution: ['(-2)^3 = -8.'] },
      { id: 'cg6', level: 'foundation', type: 'mcq', prompt: 'The curve y = x^2 + c has its turning point at', options: ['(0, c)', '(c, 0)', '(0, 0)', '(-c, 0)'], answer: 0, solution: ['y = x^2 + c is y = x^2 moved up by c, so the turning point is (0, c).'] },
      { id: 'cg7', level: 'standard', prompt: 'A table is made for y = x + {4|x}.',
        parts: [{ label: '(a)', prompt: 'Find y when x = 0.5.', answer: 8.5, marks: 1 }, { label: '(b)', prompt: 'Find y when x = -2.', answer: -4, marks: 1 },
                { label: '(c)', prompt: 'Why does the curve not touch the y-axis?', type: 'mcq', options: ['x = 0 would make {4|x} undefined', 'The curve is always above the x-axis', 'The curve is a straight line', 'y cannot be positive'], answer: 0, marks: 1 }],
        solution: ['x = 0.5: 0.5 + {4|0.5} = 0.5 + 8 = 8.5.', 'x = -2: -2 + {4|-2} = -2 - 2 = -4.', 'At x = 0, {4|x} is not defined, so there is no point on the y-axis.'] },
      { id: 'cg8', level: 'standard', prompt: 'The curve y = x^2 - 2x - 3 is drawn. To solve x^2 - 4x - 1 = 0, a straight line y = ax + b is drawn on the same axes.',
        parts: [{ label: '(a)', prompt: 'Find a.', answer: 2, marks: 2 }, { label: '(b)', prompt: 'Find b.', answer: -2, marks: 1 }],
        hint: 'x^2 - 2x - 3 = (x^2 - 4x - 1) + 2x - 2.', solution: ['x^2 - 4x - 1 = 0 means x^2 - 2x - 3 = 2x - 2.', 'So the line is y = 2x - 2: a = 2 and b = -2.'] },
      { id: 'cg9', level: 'standard', prompt: 'The curve y = x + {4|x} is drawn. The equation x^2 - 5x + 4 = 0 is solved by drawing the line y = k.',
        parts: [{ label: '(a)', prompt: 'Find k.', answer: 5, marks: 2 }, { label: '(b)', prompt: 'Write down the larger solution of x^2 - 5x + 4 = 0.', answer: 4, marks: 2 }],
        solution: ['Divide x^2 - 5x + 4 = 0 by x: x + {4|x} = 5, so k = 5.', 'x^2 - 5x + 4 = (x - 1)(x - 4), so x = 1 or x = 4. The larger is 4.'] },
      { id: 'cg10', level: 'standard', prompt: 'The curve y = ax^2 + bx + 6 has its maximum point at (2, 14).',
        parts: [{ label: '(a)', prompt: 'Find a.', answer: -2, marks: 2 }, { label: '(b)', prompt: 'Find b.', answer: 8, marks: 2 }],
        hint: 'The line of symmetry is x = {-b|2a} = 2.', solution: ['b = -4a.', 'At x = 2: 4a + 2b + 6 = 14, so 4a - 8a + 6 = 14 and a = -2.', 'b = 8.'] },
      { id: 'cg11', level: 'standard', prompt: 'The curve y = (x - 2)^2 - 9 is a parabola.',
        parts: [{ label: '(a)', prompt: 'Find the larger x-intercept.', answer: 5, marks: 2 }, { label: '(b)', prompt: 'Find the y-intercept.', answer: -5, marks: 1 }, { label: '(c)', prompt: 'Find the minimum value of y.', answer: -9, marks: 1 }],
        solution: ['y = 0: (x - 2)^2 = 9, so x - 2 = ±3 and x = 5 or x = -1.', 'x = 0: y = 4 - 9 = -5.', 'The turning point is (2, -9), so the minimum is -9.'] },
      { id: 'cg12', level: 'standard', prompt: 'The curve y = x^3 - x^2 - 6x = x(x - 3)(x + 2).',
        parts: [{ label: '(a)', prompt: 'Find the largest x-intercept.', answer: 3, marks: 2 }, { label: '(b)', prompt: 'Find y when x = -1.', answer: 4, marks: 1 }],
        solution: ['y = 0 when x = 0, x = 3 or x = -2. The largest is 3.', 'x = -1: -1 - 1 + 6 = 4.'] },
      { id: 'cg13', level: 'standard', marks: 2, prompt: 'A tangent is drawn to a curve at the point where x = 1.5. It passes through (1.5, 2.1) and (3.5, 5.3). Find the gradient of the curve at x = 1.5.', answer: 1.6,
        solution: ['Gradient = {5.3 - 2.1|3.5 - 1.5} = {3.2|2} = 1.6.'] },
      { id: 'cg14', level: 'standard', marks: 3, prompt: 'y = {24|x}. The value of x is increased by 50%. Find the percentage decrease in y, correct to 1 decimal place.', answer: 100 / 3, dp: 1, unit: '%',
        solution: ['New x = 1.5x, so new y = {24|1.5x} = {y|1.5} = 0.667y.', 'Decrease = 1 - 0.667 = 0.333 = 33.3%.'] },
      { id: 'cg15', level: 'standard', type: 'mcq', marks: 1, prompt: 'The graph of y = -x^2 + 4 is', options: ['an ∩ shape with maximum point (0, 4)', 'a U shape with minimum point (0, 4)', 'an ∩ shape with maximum point (4, 0)', 'a straight line'], answer: 0,
        solution: ['The coefficient of x^2 is negative, so the parabola is ∩-shaped, and the turning point is (0, 4).'] },
      { id: 'cg16', level: 'challenge', prompt: 'The curve y = ax^2 + bx + c passes through (0, -3), (1, 0) and (3, 12).',
        parts: [{ label: '(a)', prompt: 'Find a.', answer: 1, marks: 2 }, { label: '(b)', prompt: 'Find b.', answer: 2, marks: 2 }],
        hint: 'Substitute each point and solve simultaneously.', solution: ['(0, -3) gives c = -3.', '(1, 0): a + b - 3 = 0, so a + b = 3.', '(3, 12): 9a + 3b - 3 = 12, so 3a + b = 5.', 'Subtract: 2a = 2, so a = 1 and b = 2.'] }
    ],
    generators: [
      { id: 'evaluate', level: 'foundation', make: function (r) {
        var a = r.int(1, 4), b = r.int(-5, 5), c = r.int(-6, 6), x = r.int(-3, 3), v = a * x * x + b * x + c;
        var eq = 'y = ' + (a === 1 ? '' : a) + 'x^2 ' + (b < 0 ? '- ' + (-b) : '+ ' + b) + 'x ' + (c < 0 ? '- ' + (-c) : '+ ' + c);
        return { prompt: 'Find y when x = ' + x + ' on the curve ' + eq + '.', answer: v, hint: 'Use brackets for a negative x.',
          solution: ['y = ' + a + '(' + x + ')^2 + (' + b + ')(' + x + ') + (' + c + ') = ' + v + '.'] };
      } },
      { id: 'minimum', level: 'standard', make: function (r) {
        var p = r.int(-5, 5), q = r.int(-9, 9);
        var b = -2 * p, c = p * p + q, eq = 'y = x^2 ' + (b < 0 ? '- ' + (-b) : '+ ' + b) + 'x ' + (c < 0 ? '- ' + (-c) : '+ ' + c);
        if (b === 0) eq = 'y = x^2 ' + (c < 0 ? '- ' + (-c) : '+ ' + c);
        return { prompt: 'The curve ' + eq + ' has a minimum point. Find the minimum value of y.', answer: q,
          hint: 'The line of symmetry is x = {-b|2a}. Put that value of x into the equation.', solution: ['The line of symmetry is x = ' + p + '.', 'y = ' + (p * p) + ' + (' + b + ')(' + p + ') + (' + c + ') = ' + q + '.'] };
      } }
    ]
  });
})();
