(function () {
  var gcd = EMATH.util.gcd;

  EMATH.registerTopic({
    id: 'integers-rationals', title: 'Integers, Rational Numbers and Real Numbers',
    strand: 'number-algebra', levels: [1],
    syllabusNote: 'O-Level syllabus N1.3-1.6 (Sec 1).',
    verified: true,
    objectives: [
      'Calculate with negative numbers and apply the order of operations.',
      'Add, subtract, multiply and divide fractions and mixed numbers.',
      'Compare and order fractions, decimals and percentages.',
      'Tell rational numbers from irrational numbers, and use squares and square roots.'
    ],
    explanation: [
      '**Integers** are whole numbers, including negatives: ..., -2, -1, 0, 1, 2, ... A **rational number** can be written as {a|b} with a and b integers and b ≠ 0. Terminating and recurring decimals are rational. A number such as sqrt(10) or π cannot be written that way and is **irrational**. Together they make the **real numbers**.',
      { term: 'Signs', def: 'Adding a negative is subtracting. Subtracting a negative is adding. Same signs multiply or divide to give positive; different signs give negative.' },
      { term: 'Order of operations', def: 'Brackets, then indices (powers and roots), then multiplication and division from left to right, then addition and subtraction from left to right.' },
      { term: 'Fractions', def: 'To add or subtract, use a common denominator. To multiply, multiply tops and bottoms. To divide, multiply by the reciprocal. Change mixed numbers to improper fractions first.' },
      { term: 'Ordering', def: 'To compare fractions, decimals and percentages, change them all to the same form, usually decimals.' },
      { term: '"Fraction of the remainder"', def: 'Work with the fraction left after each step. If 2/5 is spent, 3/5 remains, and 1/3 of that is {1|3} × {3|5} = {1|5} of the original.' }
    ],
    examples: [
      { title: 'Negative numbers and order of operations', question: 'Evaluate -3 + 4 × (-2) - (-5).',
        steps: ['Multiply first: 4 × (-2) = -8.', 'The expression is -3 + (-8) - (-5) = -3 - 8 + 5.', '-3 - 8 = -11, and -11 + 5 = -6.'], answer: '-6' },
      { title: 'Mixed numbers', question: 'Evaluate 2 {1|3} - 1 {5|6}.',
        steps: ['Improper fractions: 2 {1|3} = {7|3} and 1 {5|6} = {11|6}.', 'Common denominator 6: {14|6} - {11|6} = {3|6}.', 'Simplify: {1|2}.'], answer: '{1|2}' },
      { title: 'A fraction of the remainder', question: 'Sara spends {1|4} of her money on a book and {1|3} of the remainder on lunch. She has $30 left. How much did she have at first?',
        steps: ['After the book, {3|4} remains.', 'Lunch = {1|3} × {3|4} = {1|4} of the original.', 'Left = {3|4} - {1|4} = {1|2} of the original.', '{1|2} = $30, so she had $60 at first.'], answer: '$60' }
    ],
    mistakes: [
      'Writing -3^2 = 9. The square applies only to the 3, so -3^2 = -9, while (-3)^2 = 9.',
      'Adding fractions by adding the denominators: {1|3} + {1|4} is not {2|7}.',
      'Dividing by a fraction without flipping it, or flipping the wrong fraction.',
      'Treating "2/5 spent, then 1/3 of the remainder" as 2/5 + 1/3. The second fraction is of what is left.',
      'Thinking every square root is irrational. sqrt(16) = 4 is rational; sqrt(10) is not.'
    ],
    formulae: [
      { name: 'Dividing fractions', text: '{a|b} ÷ {c|d} = {a|b} × {d|c}' },
      { name: 'Adding fractions', text: '{a|b} + {c|d} = {ad + bc|bd}' },
      { name: 'Signs', text: '(-)(-) = +,  (-)(+) = -' }
    ],
    summary: [
      'Brackets, indices, then × ÷, then + -, working left to right.',
      'Change mixed numbers to improper fractions before multiplying or dividing.',
      'Compare different forms by converting to decimals.',
      'Rational numbers can be written as a fraction of integers; sqrt of a non-square integer is irrational.'
    ],
    viz: null,
    questions: [
      { id: 'il1', level: 'foundation', prompt: 'Evaluate -7 + 12.', answer: 5, solution: ['Start at -7 and move 12 to the right: 5.'] },
      { id: 'il2', level: 'foundation', prompt: 'Evaluate (-4) × (-6).', answer: 24, solution: ['Two negatives multiply to give a positive: 24.'] },
      { id: 'il3', level: 'foundation', prompt: 'Evaluate -18 ÷ 3.', answer: -6, solution: ['Different signs give a negative: -6.'] },
      { id: 'il4', level: 'foundation', type: 'mcq', prompt: 'Which of these is an irrational number?', options: ['sqrt(16)', '{22|7}', 'sqrt(10)', '0.25'], answer: 2, hint: 'Which one is not a perfect square, fraction or terminating decimal?', solution: ['sqrt(16) = 4, {22|7} is a fraction and 0.25 = {1|4}, so all three are rational.', 'sqrt(10) cannot be written as a fraction, so it is irrational.'] },
      { id: 'il5', level: 'foundation', prompt: 'Evaluate {3|4} + {5|6}.', answer: '19/12', hint: 'Use the common denominator 12.', solution: ['{3|4} = {9|12} and {5|6} = {10|12}.', '{9|12} + {10|12} = {19|12} = 1 {7|12}.'] },
      { id: 'il6', level: 'foundation', prompt: 'Write 0.375 as a fraction in its simplest form.', answer: '3/8', solution: ['0.375 = {375|1000}.', 'Divide top and bottom by 125: {3|8}.'] },
      { id: 'il7', level: 'standard', marks: 2, prompt: 'Evaluate (-5)^2 - 3 × (-4) ÷ 2.', answer: 31,
        hint: 'Powers first, then × and ÷ from left to right.', solution: ['(-5)^2 = 25.', '3 × (-4) = -12, and -12 ÷ 2 = -6.', '25 - (-6) = 31.'] },
      { id: 'il8', level: 'standard', marks: 2, prompt: 'Evaluate 3 {1|5} - 1 {3|4}. Give your answer as a fraction or mixed number in its simplest form.', answer: '29/20',
        hint: 'Change to improper fractions: {16|5} - {7|4}.', solution: ['{16|5} - {7|4} = {64|20} - {35|20}.', '= {29|20} = 1 {9|20}.'] },
      { id: 'il9', level: 'standard', marks: 2, prompt: 'Evaluate {3|4} ÷ {9|10}.', answer: '5/6',
        hint: 'Multiply by the reciprocal of {9|10}.', solution: ['{3|4} × {10|9} = {30|36}.', 'Simplify by 6: {5|6}.'] },
      { id: 'il10', level: 'standard', prompt: 'At night the temperature in a city was -6 °C. By noon it had risen by 11 °C. By evening it had fallen by 15 °C.',
        parts: [{ label: '(a)', prompt: 'Find the temperature at noon (°C).', answer: 5, marks: 1 }, { label: '(b)', prompt: 'Find the temperature in the evening (°C).', answer: -10, marks: 1 }],
        solution: ['Noon: -6 + 11 = 5 °C.', 'Evening: 5 - 15 = -10 °C.'] },
      { id: 'il11', level: 'standard', type: 'mcq', prompt: 'Which is the largest of these numbers?', options: ['{3|5}', '0.62', '61%', '{5|8}'], answer: 3, hint: 'Write each as a decimal.', solution: ['{3|5} = 0.6, 0.62, 61% = 0.61 and {5|8} = 0.625.', 'The largest is {5|8}.'] },
      { id: 'il12', level: 'standard', marks: 3, prompt: 'Evaluate 12 - 3(2 - 5)^2 ÷ 9.', answer: 9,
        solution: ['Bracket: 2 - 5 = -3.', 'Power: (-3)^2 = 9.', '3 × 9 ÷ 9 = 3.', '12 - 3 = 9.'] },
      { id: 'il13', level: 'standard', marks: 3, prompt: 'Aisha spent {2|5} of her money on a book. She then spent {1|3} of the remainder on lunch. She had $18 left. How much money did she have at first?', answer: 45, unit: '$',
        hint: 'Lunch is {1|3} of {3|5} of the original.', solution: ['After the book: {3|5} remains.', 'Lunch = {1|3} × {3|5} = {1|5} of the original.', 'Left = {3|5} - {1|5} = {2|5} of the original.', '{2|5} = $18, so 1 unit = $9 and the original = 5 × 9 = $45.'] },
      { id: 'il14', level: 'challenge', marks: 3, prompt: 'Evaluate 1 ÷ ({1|2} - {1|3}).', answer: 6,
        solution: ['{1|2} - {1|3} = {3|6} - {2|6} = {1|6}.', '1 ÷ {1|6} = 6.'] },
      { id: 'il15', level: 'challenge', marks: 2, prompt: 'How many integers lie between sqrt(40) and sqrt(90)?', answer: 3,
        hint: 'Estimate: 6^2 = 36, 7^2 = 49, 9^2 = 81, 10^2 = 100.', solution: ['sqrt(40) is between 6 and 7 (about 6.3).', 'sqrt(90) is between 9 and 10 (about 9.5).', 'The integers between are 7, 8 and 9: 3 integers.'] },
      { id: 'il16', level: 'challenge', marks: 3, prompt: 'A tank is {3|8} full. After 36 litres of water are added, it is {7|8} full. Find the capacity of the tank in litres.', answer: 72, unit: 'litres',
        solution: ['Water added = {7|8} - {3|8} = {4|8} of the tank.', '{4|8} = 36 litres, so {1|8} = 9 litres.', 'Capacity = 8 × 9 = 72 litres.'] }
    ],
    generators: [
      { id: 'integer-ops', level: 'foundation', make: function (r) {
        var a = r.int(2, 9), b = r.int(2, 9), c = r.int(2, 20);
        var val = (-a) * b + c;
        return { prompt: 'Evaluate (-' + a + ') × ' + b + ' + ' + c + '.', answer: val,
          hint: 'Multiply before you add.',
          solution: ['(-' + a + ') × ' + b + ' = -' + a * b + '.', '-' + a * b + ' + ' + c + ' = ' + val + '.'] };
      } },
      { id: 'fraction-sum', level: 'standard', make: function (r) {
        var d1, d2, n1, n2, n, d, g;
        do {
          d1 = r.pick([2, 3, 4, 5, 6]); d2 = r.pick([3, 4, 5, 6, 8]); n1 = r.int(1, d1 - 1); n2 = r.int(1, d2 - 1);
          n = n1 * d2 + n2 * d1; d = d1 * d2; g = gcd(n, d); n /= g; d /= g;
        } while (d1 === d2 || d === 1);
        return { prompt: 'Evaluate {' + n1 + '|' + d1 + '} + {' + n2 + '|' + d2 + '}. Give your answer as a fraction or mixed number in its simplest form.', answer: n + '/' + d,
          hint: 'Use a common denominator of ' + d1 * d2 + '.',
          solution: ['{' + n1 + '|' + d1 + '} + {' + n2 + '|' + d2 + '} = {' + n1 * d2 + '|' + d1 * d2 + '} + {' + n2 * d1 + '|' + d1 * d2 + '} = {' + (n1 * d2 + n2 * d1) + '|' + d1 * d2 + '}.', 'Simplified: {' + n + '|' + d + '}.'] };
      } }
    ]
  });
})();
