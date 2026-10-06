(function () {
  var signed = EMATH.util.signed;

  EMATH.registerTopic({
    id: 'algebra', title: 'Algebraic Manipulation and Linear Equations',
    strand: 'number-algebra', levels: [1, 2, 3],
    syllabusNote: 'Sec 1-2 (Math syllabus); factorisation and manipulation continue in O-Level 4052 Sec 3',
    verified: false,
    objectives: [
      'Simplify, expand and factorise algebraic expressions.',
      'Solve linear equations, including brackets and fractions.',
      'Change the subject of a formula.',
      'Form and solve equations from word problems.'
    ],
    explanation: [
      'An **expression** such as 3x + 5 has no equals sign. An **equation** such as 3x + 5 = 20 says two things are equal and can be solved.',
      { term: 'Collecting like terms', def: 'Only terms with the same letters and powers combine: 5a + 3b - 2a + 4b = 3a + 7b.' },
      { term: 'Expanding', def: 'Multiply every term inside the bracket: 3(2x - 4) = 6x - 12. For two brackets, multiply each term by each term: (x + 3)(x + 5) = x^2 + 8x + 15.' },
      { term: 'Factorising', def: 'The reverse of expanding. Take out the highest common factor: 6x + 15 = 3(2x + 5). For x^2 + bx + c, find two numbers that multiply to c and add to b.' },
      { term: 'Solving a linear equation', def: 'Do the same thing to both sides. Expand brackets, collect x-terms on one side, numbers on the other, then divide. With fractions, multiply through by the common denominator first.' },
      { term: 'Changing the subject', def: 'Treat the formula as an equation and "undo" operations in reverse order. From y = 3x - 5: add 5, then divide by 3, giving x = {y + 5|3}.' },
      { term: 'Word problems', def: 'Let a letter stand for the unknown, write an equation from the information, solve it, then answer in words and check.' }
    ],
    examples: [
      { title: 'Expand and simplify', question: 'Expand and simplify 3(2x - 4) - 2(x - 5).',
        steps: ['Expand the first bracket: 3(2x - 4) = 6x - 12.', 'Expand the second: -2(x - 5) = -2x + 10 (watch the sign: -2 × -5 = +10).', 'Collect like terms: 6x - 2x - 12 + 10 = 4x - 2.'], answer: '4x - 2' },
      { title: 'Equation with brackets', question: 'Solve 5(x - 2) = 3x + 8.',
        steps: ['Expand: 5x - 10 = 3x + 8.', 'Subtract 3x from both sides: 2x - 10 = 8.', 'Add 10: 2x = 18.', 'Divide by 2: x = 9.', 'Check: 5(9 - 2) = 35 and 3(9) + 8 = 35 ✓.'], answer: 'x = 9' },
      { title: 'Equation with fractions', question: 'Solve {2x + 1|3} = {x + 4|2}.',
        steps: ['Multiply both sides by 6 (the LCM of 3 and 2): 2(2x + 1) = 3(x + 4).', 'Expand: 4x + 2 = 3x + 12.', 'Subtract 3x and subtract 2: x = 10.', 'Check: {21|3} = 7 and {14|2} = 7 ✓.'], answer: 'x = 10' }
    ],
    mistakes: [
      'Sign errors when expanding a negative: -2(x - 5) is -2x + 10, not -2x - 10.',
      'Combining unlike terms, such as 3x + 2 = 5x.',
      '(x + 3)^2 is not x^2 + 9. The middle term 6x is missing.',
      'Doing an operation to one side only, or to only part of one side.',
      'When multiplying an equation with fractions by a number, forgetting to multiply every term.'
    ],
    formulae: [
      { name: 'Difference of two squares', text: 'a^2 - b^2 = (a + b)(a - b)' },
      { name: 'Perfect squares', text: '(a ± b)^2 = a^2 ± 2ab + b^2' },
      { name: 'Linear equation ax + b = c', text: 'x = {c - b|a}' }
    ],
    summary: [
      'Combine like terms only; expand every term inside brackets.',
      'Solve equations by doing the same to both sides; clear fractions first.',
      'Factorise by taking out the HCF, then look for patterns.',
      'In word problems, define the unknown, form an equation, solve, answer, check.'
    ],
    viz: 'graph-plotter',
    questions: [
      { id: 'a1', level: 'foundation', type: 'expression', prompt: 'Simplify 5a + 3b - 2a + 4b.', answer: '3a+7b', form: 'expanded', solution: ['Collect a-terms: 5a - 2a = 3a.', 'Collect b-terms: 3b + 4b = 7b.'] },
      { id: 'a2', level: 'foundation', type: 'expression', prompt: 'Expand 4(x + 3).', answer: '4x+12', form: 'expanded', solution: ['4 × x = 4x and 4 × 3 = 12.'] },
      { id: 'a3', level: 'foundation', type: 'expression', prompt: 'Factorise 6x + 15 completely.', answer: '3(2x+5)', form: 'factorised', hint: 'What is the highest common factor of 6 and 15?', solution: ['HCF of 6 and 15 is 3.', '6x + 15 = 3(2x + 5).'] },
      { id: 'a4', level: 'foundation', prompt: 'Solve 3x - 7 = 11.', answer: 6, hint: 'Add 7 to both sides first.', solution: ['3x = 18.', 'x = 6.'] },
      { id: 'a5', level: 'foundation', prompt: 'Find the value of 3x^2 - 2x + 1 when x = -2.', answer: 17, hint: 'Square first: (-2)^2 = 4.', solution: ['3(-2)^2 = 3 × 4 = 12.', '-2x = -2 × -2 = 4.', '12 + 4 + 1 = 17.'] },
      { id: 'a6', level: 'standard', type: 'expression', prompt: 'Expand and simplify (x + 3)(x + 5).', answer: 'x^2+8x+15', form: 'expanded', solution: ['x × x = x^2, x × 5 = 5x, 3 × x = 3x, 3 × 5 = 15.', 'x^2 + 5x + 3x + 15 = x^2 + 8x + 15.'] },
      { id: 'a7', level: 'standard', type: 'expression', prompt: 'Factorise x^2 + 7x + 12.', answer: '(x+3)(x+4)', form: 'factorised', hint: 'Find two numbers that multiply to 12 and add to 7.', solution: ['3 × 4 = 12 and 3 + 4 = 7.', 'x^2 + 7x + 12 = (x + 3)(x + 4).'] },
      { id: 'a8', level: 'standard', prompt: 'Solve 4(2x - 1) = 5x + 11.', answer: 5, solution: ['Expand: 8x - 4 = 5x + 11.', '3x = 15.', 'x = 5.'] },
      { id: 'a9', level: 'standard', prompt: 'Solve {x|3} + {x|2} = 10.', answer: 12, hint: 'Multiply every term by 6.', solution: ['Multiply by 6: 2x + 3x = 60.', '5x = 60, so x = 12.'] },
      { id: 'a10', level: 'standard', prompt: 'Solve {3x - 1|4} = {x + 5|2}.', answer: 11, solution: ['Multiply by 4: 3x - 1 = 2(x + 5).', '3x - 1 = 2x + 10.', 'x = 11.'] },
      { id: 'a11', level: 'standard', type: 'expression', prompt: 'Make x the subject of y = 3x - 5.', answer: '(y+5)/3', solution: ['Add 5 to both sides: y + 5 = 3x.', 'Divide by 3: x = {y + 5|3}.'] },
      { id: 'a12', level: 'standard', type: 'mcq', prompt: 'Which is the solution of 2x - 5 > 7?', options: ['x > 6', 'x < 6', 'x > 1', 'x > 12'], answer: 0, solution: ['Add 5: 2x > 12.', 'Divide by 2 (positive, so the sign stays): x > 6.'] },
      { id: 'a13', level: 'standard', prompt: 'A taxi charges a $4 flag-down fee plus $0.60 for every km. Mei pays $13.00. How many km did she travel?', answer: 15, unit: 'km',
        hint: 'Let the distance be d km and form an equation: 4 + 0.6d = 13.', solution: ['4 + 0.6d = 13.', '0.6d = 9.', 'd = 15 km.'] },
      { id: 'a14', level: 'challenge', prompt: 'Consider the expression (x + 4)^2 - (x - 2)^2.',
        parts: [{ label: '(a)', prompt: 'Expand and simplify (x + 4)^2 - (x - 2)^2. Give the coefficient of x.', answer: 12 },
                { label: '(b)', prompt: 'Hence solve (x + 4)^2 - (x - 2)^2 = 60.', answer: 4 }],
        solution: ['(x + 4)^2 = x^2 + 8x + 16 and (x - 2)^2 = x^2 - 4x + 4.', 'Subtract: 12x + 12.', 'So 12x + 12 = 60, 12x = 48, x = 4.'] },
      { id: 'a15', level: 'challenge', prompt: 'Mei\'s age is 3 times Ben\'s age. In 6 years\' time the sum of their ages will be 52. How old is Mei now?', answer: 30, unit: 'years',
        hint: 'Let Ben\'s age be b. Mei is 3b.', solution: ['Now: Ben = b, Mei = 3b. In 6 years: (b + 6) + (3b + 6) = 52.', '4b + 12 = 52, so b = 10.', 'Mei = 3 × 10 = 30.'] },
      { id: 'a16', level: 'challenge', prompt: 'A rectangle has length (3x + 2) cm and width (x + 4) cm. Its perimeter is 52 cm.',
        parts: [{ label: '(a)', prompt: 'Find x.', answer: 5 }, { label: '(b)', prompt: 'Find the area (cm²).', answer: 153, unit: 'cm²' }],
        solution: ['Perimeter = 2(4x + 6) = 52, so 4x + 6 = 26 and x = 5.', 'Length = 17 cm, width = 9 cm.', 'Area = 17 × 9 = 153 cm².'] }
    ],
    generators: [
      { id: 'linear', level: 'foundation', make: function (r) {
        var x = r.int(-8, 12), a = r.int(2, 9), b = r.int(-12, 12) || 5, c = a * x + b;
        return { prompt: 'Solve ' + a + 'x ' + signed(b) + ' = ' + c + '.', answer: x, hint: 'Undo the ' + (b < 0 ? 'subtraction' : 'addition') + ' first.',
          solution: [a + 'x = ' + c + ' ' + signed(-b) + ' = ' + (c - b) + '.', 'x = ' + (c - b) + ' ÷ ' + a + ' = ' + x + '.'] };
      } },
      { id: 'bracket', level: 'standard', make: function (r) {
        var x = r.int(1, 10), a = r.int(2, 6), b = r.int(1, 9), c = a * (x + b);
        return { prompt: 'Solve ' + a + '(x + ' + b + ') = ' + c + '.', answer: x,
          solution: ['Divide by ' + a + ': x + ' + b + ' = ' + (x + b) + '.', 'x = ' + x + '.'] };
      } },
      { id: 'expand', level: 'standard', make: function (r) {
        var p = r.int(2, 6), q = r.int(1, 7), s = r.int(1, 7), t = r.int(2, 5), A = p + t, B = p * q - t * s;
        var ans = A + 'x' + (B === 0 ? '' : (B < 0 ? '-' : '+') + Math.abs(B));
        return { type: 'expression', form: 'expanded', prompt: 'Expand and simplify ' + p + '(x + ' + q + ') + ' + t + '(x - ' + s + ').', answer: ans,
          solution: [p + '(x + ' + q + ') = ' + p + 'x + ' + p * q + ' and ' + t + '(x - ' + s + ') = ' + t + 'x - ' + t * s + '.', 'Collect: ' + ans.replace(/([+-])/, ' $1 ') + '.'] };
      } }
    ]
  });
})();
