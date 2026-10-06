(function () {
  EMATH.registerTopic({
    id: 'indices', title: 'Indices and Standard Form',
    strand: 'number-algebra', levels: [2, 3],
    syllabusNote: 'Sec 2-3 (Math syllabus); standard form is also in the Sec 1 approximation topic',
    verified: false,
    objectives: [
      'Use the laws of indices with integer and fractional indices.',
      'Evaluate zero, negative and fractional indices.',
      'Simplify algebraic expressions involving indices.',
      'Solve simple equations where the unknown is the index, and work with standard form.'
    ],
    explanation: [
      'An **index** (or power) says how many times a number is multiplied by itself. a^n means a × a × ... × a (n times). The index laws let you combine powers of the **same base**.',
      { term: 'Laws of indices', def: 'a^m × a^n = a^(m + n).  a^m ÷ a^n = a^(m - n).  (a^m)^n = a^(mn).  (ab)^n = a^n b^n.' },
      { term: 'Zero and negative indices', def: 'a^0 = 1 (a ≠ 0). a^(-n) = {1|a^n}. So 5^(-2) = {1|25} and (2/3)^(-1) = {3|2}.' },
      { term: 'Fractional indices', def: 'a^({1|2}) = sqrt(a) and a^({1|3}) is the cube root of a. In general a^({m|n}) = (n-th root of a)^m. Take the root first: 8^({2|3}) = 2^2 = 4.' },
      { term: 'Equations with the unknown as an index', def: 'Write both sides with the same base, then equate the indices. 3^x = {1|27} gives 3^x = 3^(-3), so x = -3.' },
      { term: 'Standard form', def: 'A × 10^n with 1 ≤ A < 10 and n an integer. Multiply the A parts and add the indices; then adjust so A is between 1 and 10.' }
    ],
    examples: [
      { title: 'Simplifying with indices', question: 'Simplify {(3x^2y)^3|9x^4y}.',
        steps: ['Numerator: (3x^2y)^3 = 27x^6y^3.', 'Divide: {27x^6y^3|9x^4y} = 3x^(6 - 4) y^(3 - 1) = 3x^2y^2.'], answer: '3x^2y^2' },
      { title: 'Fractional and negative indices', question: 'Evaluate ({27|8})^(-2/3).',
        steps: ['A negative index means take the reciprocal: ({27|8})^(-2/3) = ({8|27})^(2/3).', 'Cube root first: ({8|27})^(1/3) = {2|3}.', 'Then square: ({2|3})^2 = {4|9}.'], answer: '{4|9}' },
      { title: 'Solving for the index', question: 'Solve 2^(2x - 1) = 8^(x - 2).',
        steps: ['Write 8 as 2^3: 8^(x - 2) = 2^(3(x - 2)) = 2^(3x - 6).', 'Equate the indices: 2x - 1 = 3x - 6.', 'x = 5. Check: 2^9 = 512 and 8^3 = 512 ✓.'], answer: 'x = 5' }
    ],
    mistakes: [
      'Adding the indices when the bases are different, or multiplying the bases: 2^3 × 3^2 is not 6^5.',
      'Treating a^(-n) as negative. 2^(-3) = {1|8}, not -8.',
      'Writing 3^0 = 0. Any non-zero number to the power 0 is 1.',
      'Doing (a + b)^2 = a^2 + b^2. The index law (ab)^n = a^n b^n works only for products.',
      'Dividing by the fraction instead of taking the root first for fractional indices.'
    ],
    formulae: [
      { name: 'Product and quotient', text: 'a^m × a^n = a^(m + n),  a^m ÷ a^n = a^(m - n)' },
      { name: 'Power of a power', text: '(a^m)^n = a^(mn)' },
      { name: 'Zero, negative and fractional indices', text: 'a^0 = 1,  a^(-n) = {1|a^n},  a^({m|n}) = (n-th root of a)^m' }
    ],
    summary: [
      'Same base: add indices when multiplying, subtract when dividing, multiply for a power of a power.',
      'a^0 = 1 and a^(-n) = {1|a^n}.',
      'Fractional index: root first, then power.',
      'To solve a^x = a^y type equations, write both sides with the same base and equate the indices.'
    ],
    viz: null,
    questions: [
      { id: 'ix1', level: 'foundation', prompt: '2^3 × 2^4 = 2^n. Find n.', answer: 7, solution: ['Add the indices: 3 + 4 = 7.'] },
      { id: 'ix2', level: 'foundation', prompt: 'Evaluate 3^0.', answer: 1, solution: ['Any non-zero number to the power 0 is 1.'] },
      { id: 'ix3', level: 'foundation', prompt: 'Write 5^(-2) as a fraction.', answer: '1/25', solution: ['5^(-2) = {1|5^2} = {1|25}.'] },
      { id: 'ix4', level: 'foundation', prompt: 'Evaluate 8^(1/3).', answer: 2, solution: ['8^({1|3}) is the cube root of 8, which is 2.'] },
      { id: 'ix5', level: 'foundation', type: 'mcq', prompt: 'Simplify x^5 ÷ x^2.', options: ['x^3', 'x^7', 'x^10', 'x^2.5'], answer: 0, solution: ['Subtract the indices: 5 - 2 = 3, so x^3.'] },
      { id: 'ix6', level: 'foundation', prompt: '(2^3)^2 = 2^n. Find n.', answer: 6, solution: ['Multiply the indices: 3 × 2 = 6.'] },
      { id: 'ix7', level: 'standard', marks: 3, type: 'expression', prompt: 'Simplify {(3x^2y)^3|9x^4y}.', answer: '3x^2y^2', solution: ['(3x^2y)^3 = 27x^6y^3.', '{27x^6y^3|9x^4y} = 3x^2y^2.'] },
      { id: 'ix8', level: 'standard', marks: 2, prompt: 'Solve 3^x = {1|27}.', answer: -3, solution: ['{1|27} = 3^(-3), so x = -3.'] },
      { id: 'ix9', level: 'standard', marks: 2, prompt: 'Solve 9^a = 27.', answer: 1.5, hint: 'Write both sides as powers of 3.', solution: ['9^a = 3^(2a) and 27 = 3^3.', '2a = 3, so a = 1.5.'] },
      { id: 'ix10', level: 'standard', marks: 3, prompt: 'Evaluate ({27|8})^(-2/3) as a fraction.', answer: '4/9',
        hint: 'Reciprocal first, then the cube root, then square.', solution: ['({27|8})^(-2/3) = ({8|27})^(2/3).', 'Cube root: {2|3}. Square: {4|9}.'] },
      { id: 'ix11', level: 'standard', prompt: 'Calculate (3 × 10^5) × (4 × 10^(-2)).',
        parts: [{ label: '(a)', prompt: 'Write the answer as an ordinary number.', answer: 12000, marks: 1 }, { label: '(b)', prompt: 'Write the answer in standard form A × 10^n. Find n.', answer: 4, marks: 1 }],
        solution: ['3 × 4 = 12 and 10^5 × 10^(-2) = 10^3, so the answer = 12 × 10^3 = 12 000.', 'In standard form: 1.2 × 10^4, so n = 4.'] },
      { id: 'ix12', level: 'standard', marks: 3, type: 'expression', prompt: 'Simplify (2a^(-1)b)^(-2), leaving your answer with positive indices.', answer: 'a^2/(4b^2)',
        solution: ['(2a^(-1)b)^(-2) = 2^(-2) a^2 b^(-2).', '= {a^2|4b^2}.'] },
      { id: 'ix13', level: 'standard', marks: 2, prompt: 'Solve 2^(x + 1) = 32.', answer: 4, solution: ['32 = 2^5, so x + 1 = 5.', 'x = 4.'] },
      { id: 'ix14', level: 'standard', marks: 2, prompt: 'Evaluate 16^(3/4).', answer: 8, solution: ['Fourth root of 16 = 2.', '2^3 = 8.'] },
      { id: 'ix15', level: 'challenge', marks: 3, prompt: 'Solve 2^(2x - 1) = 8^(x - 2).', answer: 5,
        hint: 'Write 8 as 2^3.', solution: ['8^(x - 2) = 2^(3x - 6).', '2x - 1 = 3x - 6, so x = 5.'] },
      { id: 'ix16', level: 'challenge', marks: 2, prompt: '3^n + 3^(n + 1) = k × 3^n. Find the value of k.', answer: 4,
        hint: 'Take 3^n out as a common factor.', solution: ['3^(n + 1) = 3 × 3^n.', '3^n + 3 × 3^n = 4 × 3^n, so k = 4.'] }
    ],
    generators: [
      { id: 'index-add', level: 'foundation', make: function (r) {
        var b = r.int(2, 9), m = r.int(2, 9), n = r.int(2, 9);
        return { prompt: b + '^' + m + ' × ' + b + '^' + n + ' = ' + b + '^k. Find k.', answer: m + n, hint: 'Add the indices.', solution: [m + ' + ' + n + ' = ' + (m + n) + '.'] };
      } },
      { id: 'fractional', level: 'standard', make: function (r) {
        var root = r.int(2, 5), p = r.pick([2, 3]), q = r.int(1, 3), base = Math.pow(root, p), val = Math.pow(root, q);
        return { prompt: 'Evaluate ' + base + '^(' + q + '/' + p + ').', answer: val, hint: 'Take the ' + (p === 2 ? 'square' : 'cube') + ' root first, then the power.',
          solution: [(p === 2 ? 'Square' : 'Cube') + ' root of ' + base + ' = ' + root + '.', root + '^' + q + ' = ' + val + '.'] };
      } }
    ]
  });
})();
