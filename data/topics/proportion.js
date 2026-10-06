(function () {
  EMATH.registerTopic({
    id: 'proportion', title: 'Direct and Inverse Proportion',
    strand: 'number-algebra', levels: [2, 3],
    syllabusNote: 'Sec 2-3 (Math syllabus); placement to be confirmed',
    verified: false,
    objectives: [
      'Write and use equations for direct proportion (y = kx) and inverse proportion (y = k/x).',
      'Handle proportions involving squares, cubes and square roots.',
      'Find the constant k from one pair of values, then answer further questions.',
      'Find percentage changes caused by a change in a proportional quantity.'
    ],
    explanation: [
      'Two quantities are in **direct proportion** if y = kx for a constant k: when x doubles, y doubles. They are in **inverse proportion** if y = {k|x}, or xy = k: when x doubles, y halves. The same ideas work for powers, for example y ∝ x^2 means y = kx^2.',
      { term: 'Method', def: 'Step 1: write the relationship with k. Step 2: put in the known pair of values and find k. Step 3: write the equation with k filled in. Step 4: use it for the new value.' },
      { term: 'Notation', def: 'y ∝ x means "y is directly proportional to x". y ∝ {1|x} means "y is inversely proportional to x".' },
      { term: 'Effects of changes', def: 'If y ∝ x^2 and x is multiplied by 3, y is multiplied by 3^2 = 9. If y ∝ x^3 and x is multiplied by 2, y is multiplied by 8. For inverse proportion y ∝ {1|x}, x × 2 gives y ÷ 2.' },
      { term: 'Percentage change', def: 'Write the multiplier, then convert. If x increases by 50%, x becomes 1.5x. For y ∝ x^2 the multiplier for y is 1.5^2 = 2.25, an increase of 125%.' },
      { term: 'Real-life examples', def: 'Direct: cost and number of items, exchange rates, mass and volume. Inverse: workers and days, speed and time for a fixed distance.' }
    ],
    examples: [
      { title: 'y proportional to x squared', question: 'y is directly proportional to x^2. When x = 5, y = 75. Find (a) y in terms of x, (b) y when x = 8, (c) x when y = 108 (x > 0).',
        steps: ['y = kx^2. Put in x = 5, y = 75: 75 = 25k, so k = 3.', '(a) y = 3x^2.', '(b) x = 8: y = 3 × 64 = 192.', '(c) 108 = 3x^2, so x^2 = 36 and x = 6 (x is positive).'],
        answer: 'y = 3x^2; 192; x = 6' },
      { title: 'Inverse proportion', question: '5 workers can build a wall in 12 days. How long would 3 workers need, working at the same rate?',
        steps: ['Days × workers is constant: 12 × 5 = 60.', 'With 3 workers: days = 60 ÷ 3 = 20.'], answer: '20 days' },
      { title: 'A percentage change', question: 'y is directly proportional to x^2. If x is increased by 50%, find the percentage increase in y.',
        steps: ['New x = 1.5x.', 'New y = k(1.5x)^2 = 2.25 kx^2 = 2.25y.', 'Increase = 2.25 - 1 = 1.25 = 125%.'], answer: '125%' }
    ],
    mistakes: [
      'Using y = kx when the question says "directly proportional to the square of x". The relationship is y = kx^2.',
      'Writing y = k ÷ x for direct proportion, or y = kx for inverse proportion.',
      'Forgetting to find k first and trying to scale numbers by guesswork.',
      'Doubling x and doubling y for y ∝ x^2. Doubling x multiplies y by 4.',
      'Giving the multiplier as the percentage change. A multiplier of 2.25 is a 125% increase, not 225%.'
    ],
    formulae: [
      { name: 'Direct proportion', text: 'y = kx,  {y|x} = k' },
      { name: 'Inverse proportion', text: 'y = {k|x},  xy = k' },
      { name: 'Square, cube, root', text: 'y = kx^2,  y = kx^3,  y = k × sqrt(x)' }
    ],
    summary: [
      'Write the equation with k, use one pair of values to find k, then answer the question.',
      'Direct: y = kx. Inverse: y = {k|x}.',
      'For y ∝ x^n, multiplying x by m multiplies y by m^n.',
      'Convert multipliers to percentages at the end.'
    ],
    viz: null,
    questions: [
      { id: 'pr1', level: 'foundation', prompt: 'y is directly proportional to x. When x = 3, y = 15. Find y when x = 8.', answer: 40, solution: ['y = kx, and 15 = 3k so k = 5.', 'When x = 8: y = 5 × 8 = 40.'] },
      { id: 'pr2', level: 'foundation', type: 'mcq', prompt: 'Which equation shows y inversely proportional to x?', options: ['y = 5x', 'y = {12|x}', 'y = x + 3', 'y = x^2'], answer: 1, solution: ['In inverse proportion, xy is a constant. Only y = {12|x} has xy = 12.'] },
      { id: 'pr3', level: 'foundation', prompt: '6 pens cost $4.50. Find the cost of 10 such pens.', answer: 7.5, unit: '$', solution: ['1 pen = 4.50 ÷ 6 = $0.75.', '10 pens = $7.50.'] },
      { id: 'pr4', level: 'foundation', prompt: 'y is inversely proportional to x. When x = 4, y = 6. Find y when x = 8.', answer: 3, hint: 'xy is constant.', solution: ['xy = 4 × 6 = 24.', 'When x = 8: y = 24 ÷ 8 = 3.'] },
      { id: 'pr5', level: 'foundation', type: 'mcq', prompt: 'y is directly proportional to x^2. If x is doubled, y is', options: ['doubled', 'tripled', 'multiplied by 4', 'increased by 2'], answer: 2, solution: ['y = kx^2. With 2x: k(2x)^2 = 4kx^2, so y is multiplied by 4.'] },
      { id: 'pr6', level: 'foundation', prompt: '5 workers take 12 days to paint a school. How many days would 3 workers take?', answer: 20, unit: 'days', solution: ['Workers × days = 5 × 12 = 60.', '60 ÷ 3 = 20 days.'] },
      { id: 'pr7', level: 'standard', prompt: 'y is directly proportional to x^2. When x = 5, y = 75.',
        parts: [{ label: '(a)', prompt: 'Write down an equation connecting y and x. y =', type: 'expression', answer: '3x^2', marks: 2 },
                { label: '(b)', prompt: 'Find y when x = 8.', answer: 192, marks: 1 },
                { label: '(c)', prompt: 'Find x when y = 108, given that x > 0.', answer: 6, marks: 2 }],
        solution: ['y = kx^2, 75 = 25k, so k = 3 and y = 3x^2.', 'x = 8: y = 3 × 64 = 192.', '108 = 3x^2, x^2 = 36, x = 6.'] },
      { id: 'pr8', level: 'standard', prompt: 'y is inversely proportional to x. When x = 6, y = 10.',
        parts: [{ label: '(a)', prompt: 'Write down an equation connecting y and x. y =', type: 'expression', answer: '60/x', marks: 2 },
                { label: '(b)', prompt: 'Find y when x = 15.', answer: 4, marks: 1 },
                { label: '(c)', prompt: 'Find x when y = 2.5.', answer: 24, marks: 1 }],
        solution: ['xy = 6 × 10 = 60, so y = {60|x}.', 'x = 15: y = 60 ÷ 15 = 4.', 'y = 2.5: x = 60 ÷ 2.5 = 24.'] },
      { id: 'pr9', level: 'standard', prompt: 'y is directly proportional to the square root of x. When x = 16, y = 12.',
        parts: [{ label: '(a)', prompt: 'Find y when x = 64.', answer: 24, marks: 2 }, { label: '(b)', prompt: 'Find x when y = 21.', answer: 49, marks: 2 }],
        hint: 'y = k × sqrt(x).', solution: ['12 = k × sqrt(16) = 4k, so k = 3 and y = 3 sqrt(x).', 'x = 64: y = 3 × 8 = 24.', '21 = 3 sqrt(x), so sqrt(x) = 7 and x = 49.'] },
      { id: 'pr10', level: 'standard', marks: 3, prompt: 'y is directly proportional to x^2. If x is increased by 50%, find the percentage increase in y.', answer: 125, unit: '%',
        solution: ['New x = 1.5x, so new y = k(1.5x)^2 = 2.25 kx^2 = 2.25y.', 'Increase = 1.25 = 125%.'] },
      { id: 'pr11', level: 'standard', marks: 2, prompt: 'The surface area of a sphere is directly proportional to the square of its radius. The radius is decreased by 10%. Find the percentage decrease in the surface area.', answer: 19, unit: '%',
        solution: ['New radius = 0.9r, so new area = 0.9^2 × area = 0.81 × area.', 'Decrease = 1 - 0.81 = 0.19 = 19%.'] },
      { id: 'pr12', level: 'standard', marks: 2, prompt: 'A car travels a journey at 80 km/h and takes 3 hours. How many hours would the same journey take at 60 km/h?', answer: 4, unit: 'hours',
        hint: 'Speed × time = distance, which stays the same.', solution: ['Distance = 80 × 3 = 240 km.', 'Time at 60 km/h = 240 ÷ 60 = 4 hours.'] },
      { id: 'pr13', level: 'standard', marks: 2, prompt: 'S$1 = RM 3.40. Mei changes RM 255 into Singapore dollars. How much does she get?', answer: 75, unit: '$',
        solution: ['S$ = RM ÷ 3.40 = 255 ÷ 3.40 = 75.'] },
      { id: 'pr14', level: 'challenge', marks: 3, prompt: 'y is inversely proportional to x^2. When x = 3, y = 2. Find y when x = 6.', answer: 0.5,
        hint: 'y = k ÷ x^2.', solution: ['2 = k ÷ 9, so k = 18.', 'x = 6: y = 18 ÷ 36 = 0.5.'] },
      { id: 'pr15', level: 'challenge', marks: 2, type: 'ratio', prompt: 'The volume of a sphere is directly proportional to the cube of its radius. Two spheres have radii 4 cm and 6 cm. Find the ratio of their volumes in its simplest form.', answer: '8:27',
        solution: ['Ratio of radii = 4 : 6 = 2 : 3.', 'Ratio of volumes = 2^3 : 3^3 = 8 : 27.'] },
      { id: 'pr16', level: 'challenge', marks: 3, prompt: 'A model of a statue is made to a scale of 1 : 20 using the same material. The model has a mass of 2.5 kg. Find the mass of the statue in kg.', answer: 20000, unit: 'kg',
        hint: 'Mass is proportional to volume, and volume to length cubed.', solution: ['Length scale factor from model to statue = 20.', 'Volume (and mass) scale factor = 20^3 = 8 000.', 'Mass of statue = 2.5 × 8 000 = 20 000 kg.'] }
    ],
    generators: [
      { id: 'direct', level: 'foundation', make: function (r) {
        var k = r.int(2, 9), x1 = r.int(2, 8), x2 = r.int(9, 20);
        return { prompt: 'y is directly proportional to x. When x = ' + x1 + ', y = ' + k * x1 + '. Find y when x = ' + x2 + '.', answer: k * x2,
          hint: 'Find k = y ÷ x first.', solution: ['y = kx, and ' + k * x1 + ' = ' + x1 + 'k so k = ' + k + '.', 'When x = ' + x2 + ': y = ' + k + ' × ' + x2 + ' = ' + k * x2 + '.'] };
      } },
      { id: 'inverse', level: 'standard', make: function (r) {
        var c = r.pick([12, 24, 36, 48, 60, 72]), divs = [2, 3, 4, 6, 8, 12].filter(function (d) { return c % d === 0; });
        var x1 = r.pick(divs), x2 = r.pick(divs.filter(function (d) { return d !== x1; }));
        return { prompt: 'y is inversely proportional to x. When x = ' + x1 + ', y = ' + c / x1 + '. Find y when x = ' + x2 + '.', answer: c / x2,
          hint: 'xy is constant.', solution: ['xy = ' + x1 + ' × ' + c / x1 + ' = ' + c + '.', 'When x = ' + x2 + ': y = ' + c + ' ÷ ' + x2 + ' = ' + c / x2 + '.'] };
      } }
    ]
  });
})();
