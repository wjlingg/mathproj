(function () {
  EMATH.registerTopic({
    id: 'inequalities', title: 'Linear Inequalities',
    strand: 'number-algebra', levels: [2],
    syllabusNote: 'Sec 2 (Math syllabus)',
    verified: false,
    objectives: [
      'Solve linear inequalities, including those with brackets and fractions.',
      'Reverse the inequality sign when multiplying or dividing by a negative number.',
      'Find integer solutions of an inequality, including combined inequalities.',
      'Form and solve inequalities from word problems.'
    ],
    explanation: [
      'An inequality is solved like an equation, with one important difference. **When you multiply or divide both sides by a negative number, reverse the inequality sign.** Adding or subtracting never changes the sign.',
      { term: 'Symbols', def: '< less than, > greater than, ≤ less than or equal to, ≥ greater than or equal to. On a number line, an open circle means the end value is not included (< or >), and a closed circle means it is included (≤ or ≥).' },
      { term: 'Integer solutions', def: 'First solve, then list the whole numbers that fit. x < 7 has the greatest integer 6. x ≤ 7 has the greatest integer 7. x > -2.5 has the smallest integer -2.' },
      { term: 'Combined inequalities', def: 'To solve -3 < 2x + 1 ≤ 9, do the same step to all three parts: subtract 1 to get -4 < 2x ≤ 8, then divide by 2 to get -2 < x ≤ 4.' },
      { term: 'Word problems', def: 'Define the unknown, write the condition ("at most" is ≤, "less than" is <, "at least" is ≥), solve, then interpret: a number of people or items must be a whole number.' },
      { term: 'Check', def: 'Substitute one value inside your solution set and one just outside it into the original inequality.' }
    ],
    examples: [
      { title: 'Solving with brackets', question: 'Solve 4(x + 1) < 2x + 18 and write down the greatest integer that satisfies it.',
        steps: ['Expand: 4x + 4 < 2x + 18.', 'Subtract 2x and 4: 2x < 14.', 'Divide by 2: x < 7.', 'x must be less than 7, so the greatest integer is 6.'], answer: 'x < 7; 6' },
      { title: 'A negative coefficient', question: 'Solve 5 - 3x > 17.',
        steps: ['Subtract 5: -3x > 12.', 'Divide by -3 and **reverse the sign**: x < -4.', 'Check x = -5: 5 - 3(-5) = 20 > 17 ✓.'], answer: 'x < -4' },
      { title: 'A combined inequality', question: 'List the integers x such that -3 < 2x + 1 ≤ 9.',
        steps: ['Subtract 1 from all parts: -4 < 2x ≤ 8.', 'Divide all parts by 2: -2 < x ≤ 4.', 'Integers: -1, 0, 1, 2, 3, 4 (6 of them).'], answer: '-1, 0, 1, 2, 3, 4' }
    ],
    mistakes: [
      'Not reversing the sign when dividing or multiplying by a negative number: -2x > 6 gives x < -3, not x > -3.',
      'Including the end value when the sign is < or >, or leaving it out when the sign is ≤ or ≥.',
      'Giving the integer 7 as the greatest integer for x < 7.',
      'Doing a step to only the middle part of a combined inequality.',
      'Giving a non-integer answer to a word problem about people or items.'
    ],
    formulae: [
      { name: 'Reverse the sign when', text: 'multiplying or dividing by a negative number' },
      { name: 'Combined inequality', text: 'a < f(x) ≤ b: apply every step to all three parts' }
    ],
    summary: [
      'Solve as for an equation, but reverse the sign when multiplying or dividing by a negative.',
      'Strict < and > exclude the end value; ≤ and ≥ include it.',
      'For integer solutions, solve first, then list or count the whole numbers that fit.',
      'Read "at most", "at least" and "more than" carefully.'
    ],
    viz: null,
    questions: [
      { id: 'in1', level: 'foundation', type: 'mcq', prompt: 'Solve x + 5 > 12.', options: ['x > 7', 'x < 7', 'x > 17', 'x < 17'], answer: 0, solution: ['Subtract 5 from both sides: x > 7.'] },
      { id: 'in2', level: 'foundation', prompt: 'Find the greatest integer x such that 3x ≤ 20.', answer: 6, solution: ['x ≤ {20|3} = 6.67...', 'The greatest integer is 6.'] },
      { id: 'in3', level: 'foundation', type: 'mcq', prompt: 'Solve 2x < -8.', options: ['x < -4', 'x > -4', 'x < 4', 'x > 4'], answer: 0, solution: ['Divide by 2 (positive, so the sign stays): x < -4.'] },
      { id: 'in4', level: 'foundation', prompt: 'Find the smallest integer x such that x > -2.5.', answer: -2, solution: ['The integers greater than -2.5 are -2, -1, 0, ...', 'The smallest is -2.'] },
      { id: 'in5', level: 'foundation', type: 'mcq', prompt: 'Solve -2x > 6.', options: ['x > -3', 'x < -3', 'x > 3', 'x < 3'], answer: 1, hint: 'Dividing by a negative number reverses the sign.', solution: ['Divide by -2 and reverse the sign: x < -3.'] },
      { id: 'in6', level: 'foundation', prompt: 'How many integers x satisfy -2 ≤ x < 3?', answer: 5, solution: ['The integers are -2, -1, 0, 1, 2.', 'There are 5.'] },
      { id: 'in7', level: 'standard', marks: 3, prompt: 'Solve 4(x + 1) < 2x + 18. Write down the greatest integer that satisfies the inequality.', answer: 6,
        solution: ['4x + 4 < 2x + 18, so 2x < 14 and x < 7.', 'The greatest integer is 6.'] },
      { id: 'in8', level: 'standard', marks: 3, prompt: 'Solve 5 - 3x > 17. Write down the greatest integer that satisfies it.', answer: -5, hint: 'Remember to reverse the sign when you divide by -3.',
        solution: ['-3x > 12, so x < -4.', 'The greatest integer less than -4 is -5.'] },
      { id: 'in9', level: 'standard', marks: 3, prompt: 'Solve {2x - 1|3} ≥ 5. Write down the smallest integer that satisfies it.', answer: 8,
        solution: ['Multiply by 3: 2x - 1 ≥ 15.', '2x ≥ 16, so x ≥ 8.', 'The smallest integer is 8.'] },
      { id: 'in10', level: 'standard', marks: 3, prompt: 'Solve {x|2} + 3 ≥ 2x - 3. Write down the greatest integer that satisfies it.', answer: 4,
        hint: 'Multiply every term by 2.', solution: ['x + 6 ≥ 4x - 6.', '12 ≥ 3x, so x ≤ 4.', 'The greatest integer is 4.'] },
      { id: 'in11', level: 'standard', prompt: 'Consider the inequality -3 < 2x + 1 ≤ 9.',
        parts: [{ label: '(a)', prompt: 'How many integers satisfy it?', answer: 6, marks: 3 }, { label: '(b)', prompt: 'Find the sum of these integers.', answer: 9, marks: 1 }],
        solution: ['-4 < 2x ≤ 8, so -2 < x ≤ 4.', 'The integers are -1, 0, 1, 2, 3, 4: 6 integers.', 'Sum = -1 + 0 + 1 + 2 + 3 + 4 = 9.'] },
      { id: 'in12', level: 'standard', marks: 3, prompt: 'Find the largest prime number x such that 3x - 7 < 40.', answer: 13,
        solution: ['3x < 47, so x < 15.67.', 'The primes below 15.67 are 2, 3, 5, 7, 11, 13.', 'The largest is 13.'] },
      { id: 'in13', level: 'standard', marks: 3, prompt: 'Mei has $50. She buys 5 pens at $1.40 each and some notebooks at $3.20 each. What is the greatest number of notebooks she can buy?', answer: 13,
        hint: 'Let the number of notebooks be n, and write 7 + 3.2n ≤ 50.', solution: ['Pens cost 5 × 1.40 = $7.', '7 + 3.2n ≤ 50, so 3.2n ≤ 43 and n ≤ 13.44.', 'She can buy at most 13 notebooks.'] },
      { id: 'in14', level: 'standard', marks: 3, prompt: 'A taxi charges $4 flag-down plus $0.60 per km. Aisha has at most $15 to spend. What is the greatest whole number of km she can travel?', answer: 18, unit: 'km',
        solution: ['4 + 0.6d ≤ 15.', '0.6d ≤ 11, so d ≤ 18.33.', 'The greatest whole number of km is 18.'] },
      { id: 'in15', level: 'challenge', marks: 4, prompt: 'How many integers x satisfy 2x - 5 < 3x + 1 ≤ x + 11?', answer: 11,
        hint: 'Solve the two parts separately: 2x - 5 < 3x + 1, and 3x + 1 ≤ x + 11.', solution: ['2x - 5 < 3x + 1 gives -6 < x.', '3x + 1 ≤ x + 11 gives 2x ≤ 10, so x ≤ 5.', 'So -6 < x ≤ 5. The integers are -5, -4, ..., 5.', 'There are 11.'] },
      { id: 'in16', level: 'challenge', marks: 3, prompt: 'The sum of three consecutive integers is less than 50. What is the greatest possible value of the largest of the three integers?', answer: 17,
        hint: 'Let the integers be n, n + 1, n + 2.', solution: ['n + (n + 1) + (n + 2) < 50, so 3n + 3 < 50 and n < 15.67.', 'The greatest n is 15, so the integers are 15, 16, 17 (sum 48).', 'The largest is 17.'] }
    ],
    generators: [
      { id: 'one-step', level: 'foundation', make: function (r) {
        var a = r.int(2, 6), b = r.int(1, 12), c = r.int(a * 3 + b, a * 12 + b + 5), bound = (c - b) / a, g = Math.ceil(bound) - 1;
        return { prompt: 'Find the greatest integer x such that ' + a + 'x + ' + b + ' < ' + c + '.', answer: g,
          hint: 'Solve for x first, then think about the integers below it.',
          solution: [a + 'x < ' + c + ' - ' + b + ' = ' + (c - b) + ', so x < ' + (c - b) + '/' + a + ' = ' + Math.round(bound * 100) / 100 + '.', 'The greatest integer is ' + g + '.'] };
      } },
      { id: 'bracket', level: 'standard', make: function (r) {
        var p = r.int(4, 7), q = r.int(1, 4), rr = r.int(1, p - 2), s = r.int(p * q + 5, p * q + 40);
        var lhs = (p - rr), rhs = s - p * q, g = Math.floor(rhs / lhs);
        return { prompt: 'Find the greatest integer x such that ' + p + '(x + ' + q + ') ≤ ' + rr + 'x + ' + s + '.', answer: g,
          hint: 'Expand the bracket first.',
          solution: ['Expand: ' + p + 'x + ' + p * q + ' ≤ ' + rr + 'x + ' + s + '.', lhs + 'x ≤ ' + rhs + ', so x ≤ ' + Math.round(rhs / lhs * 100) / 100 + '.', 'The greatest integer is ' + g + '.'] };
      } }
    ]
  });
})();
