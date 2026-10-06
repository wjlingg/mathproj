(function () {
  EMATH.registerTopic({
    id: 'sequences', title: 'Number Patterns and Sequences',
    strand: 'number-algebra', levels: [2, 3],
    syllabusNote: 'Sec 1-3 (Math syllabus); placement to be confirmed',
    verified: false,
    objectives: [
      'Continue a number pattern and describe the rule.',
      'Find the nth term of an arithmetic sequence and use it to find terms.',
      'Decide whether a number is a term of a sequence.',
      'Work with patterns made from shapes or matchsticks, and with other common sequences.'
    ],
    explanation: [
      'A **sequence** is a list of numbers that follows a rule. In an **arithmetic sequence** the same number d (the **common difference**) is added each time. If the first term is a, the nth term is **a + (n - 1)d**, which simplifies to dn + (a - d).',
      { term: 'Finding the nth term', def: 'Find the common difference d. The nth term starts as dn. Compare dn with the first term to find what to add or subtract. 5, 9, 13, ... has d = 4, so 4n + 1.' },
      { term: 'Is it a term?', def: 'Set the nth-term formula equal to the number and solve for n. If n is a positive whole number, it is a term; otherwise it is not.' },
      { term: 'Other sequences', def: 'Square numbers n^2: 1, 4, 9, 16, ... Triangle numbers {n(n + 1)|2}: 1, 3, 6, 10, ... Each term as the sum of the previous two: 2, 3, 5, 8, 13, ... Each term multiplied by a constant r (a geometric sequence): 3, 6, 12, 24, ...' },
      { term: 'Patterns from shapes', def: 'Draw the first few figures, count, and look at how much is added each time. 5, 9, 13 matchsticks add 4 each time, so figure n needs 4n + 1.' },
      { term: 'Number of terms', def: 'To find how many terms are in 7, 10, 13, ..., 100, solve the nth-term formula = 100 for n.' }
    ],
    examples: [
      { title: 'The nth term', question: 'Find the nth term of 5, 9, 13, 17, ... Hence find the 100th term and decide whether 150 is a term.',
        steps: ['The common difference is 4, so the nth term starts with 4n.', '4 × 1 = 4 but the first term is 5, so add 1: nth term = 4n + 1.', '100th term = 4 × 100 + 1 = 401.', '4n + 1 = 150 gives n = 37.25, which is not a whole number, so 150 is not a term.'], answer: '4n + 1; 401; no' },
      { title: 'A matchstick pattern', question: 'Figure 1 uses 4 matchsticks, figure 2 uses 7 and figure 3 uses 10. Which figure uses 100 matchsticks?',
        steps: ['3 more matchsticks each time, so the formula is 3n + c.', 'Figure 1: 3 + c = 4, so c = 1. Figure n uses 3n + 1.', '3n + 1 = 100, so 3n = 99 and n = 33.'], answer: 'Figure 33' },
      { title: 'Counting the terms', question: 'How many terms are there in 7, 10, 13, ..., 100?',
        steps: ['d = 3, so the nth term is 3n + 4.', '3n + 4 = 100, so 3n = 96 and n = 32.'], answer: '32 terms' }
    ],
    mistakes: [
      'Using the first term as the coefficient of n, instead of the common difference.',
      'Forgetting the "+ c" part: 4n is not the nth term of 5, 9, 13, ...',
      'Saying a number is a term when the n you find is a fraction.',
      'Mixing up the position n and the term value in the answer.',
      'Counting the number of terms as (last - first) ÷ d, forgetting to add 1.'
    ],
    formulae: [
      { name: 'Arithmetic sequence', text: 'nth term = a + (n - 1)d' },
      { name: 'Triangle numbers', text: '{n(n + 1)|2}' },
      { name: 'Sum of first n terms', text: '{n|2}[2a + (n - 1)d]' }
    ],
    summary: [
      'Find the common difference d; the nth term is dn + (a - d).',
      'To test whether a number is a term, solve for n and check it is a positive integer.',
      'Number of terms: solve the nth-term formula = last term.',
      'Draw and count for shape patterns, then fit a formula.'
    ],
    viz: null,
    questions: [
      { id: 'sq1', level: 'foundation', prompt: 'Write down the next term of 3, 7, 11, 15, ...', answer: 19, solution: ['The common difference is 4.', '15 + 4 = 19.'] },
      { id: 'sq2', level: 'foundation', prompt: 'Find the common difference of the sequence 20, 17, 14, 11, ...', answer: -3, solution: ['17 - 20 = -3.'] },
      { id: 'sq3', level: 'foundation', prompt: 'The nth term of a sequence is 3n - 2. Find the 10th term.', answer: 28, solution: ['3 × 10 - 2 = 28.'] },
      { id: 'sq4', level: 'foundation', type: 'mcq', prompt: 'Which is the nth term of 5, 8, 11, 14, ...?', options: ['3n + 2', '3n - 2', '5n + 3', 'n + 3'], answer: 0, solution: ['The common difference is 3, so 3n + c.', 'First term: 3 + c = 5, so c = 2. nth term = 3n + 2.'] },
      { id: 'sq5', level: 'foundation', prompt: 'The nth term of a sequence is n^2 + 1. Find the 7th term.', answer: 50, solution: ['7^2 + 1 = 49 + 1 = 50.'] },
      { id: 'sq6', level: 'foundation', prompt: 'Find the 8th term of the square numbers 1, 4, 9, 16, ...', answer: 64, solution: ['The nth term is n^2, so the 8th term is 64.'] },
      { id: 'sq7', level: 'standard', marks: 2, prompt: 'The first term of an arithmetic sequence is 40 and the common difference is -6. Find the 9th term.', answer: -8,
        solution: ['9th term = 40 + 8 × (-6) = 40 - 48 = -8.'] },
      { id: 'sq8', level: 'standard', prompt: 'A sequence is 7, 11, 15, 19, ...',
        parts: [{ label: '(a)', prompt: 'Write down an expression for the nth term.', type: 'expression', answer: '4n+3', marks: 2 },
                { label: '(b)', prompt: 'Find the 50th term.', answer: 203, marks: 1 },
                { label: '(c)', prompt: 'Is 300 a term of this sequence?', type: 'mcq', options: ['Yes', 'No'], answer: 1, marks: 2 }],
        solution: ['d = 4 and 4 + 3 = 7, so the nth term is 4n + 3.', '4 × 50 + 3 = 203.', '4n + 3 = 300 gives n = 74.25, not a whole number, so 300 is not a term.'] },
      { id: 'sq9', level: 'standard', prompt: 'A sequence is 20, 17, 14, 11, ...',
        parts: [{ label: '(a)', prompt: 'Write down an expression for the nth term.', type: 'expression', answer: '23-3n', marks: 2 },
                { label: '(b)', prompt: 'Find the first term of the sequence that is negative.', answer: -1, marks: 2 }],
        solution: ['d = -3 and 20 + 3 = 23, so the nth term is 23 - 3n.', '23 - 3n < 0 gives n > 7.67, so n = 8.', 'The 8th term is 23 - 24 = -1.'] },
      { id: 'sq10', level: 'standard', prompt: 'Figures are made from matchsticks. Figure 1 uses 5 matchsticks, figure 2 uses 9 and figure 3 uses 13.',
        parts: [{ label: '(a)', prompt: 'How many matchsticks are in figure 10?', answer: 41, marks: 1 },
                { label: '(b)', prompt: 'Write down an expression, in terms of n, for the number of matchsticks in figure n.', type: 'expression', answer: '4n+1', marks: 2 },
                { label: '(c)', prompt: 'Which figure has 101 matchsticks?', answer: 25, marks: 2 }],
        solution: ['4 more each time: figure n has 4n + 1.', 'Figure 10: 4 × 10 + 1 = 41.', '4n + 1 = 101, so n = 25.'] },
      { id: 'sq11', level: 'standard', prompt: 'The nth triangle number is {n(n + 1)|2}.',
        parts: [{ label: '(a)', prompt: 'Find the 10th triangle number.', answer: 55, marks: 1 }, { label: '(b)', prompt: 'Which triangle number is equal to 210?', answer: 20, marks: 3 }],
        hint: 'In (b), solve n(n + 1) = 420 by trying numbers near sqrt(420).', solution: ['10 × 11 ÷ 2 = 55.', 'n(n + 1) = 420. Since 20 × 21 = 420, n = 20.'] },
      { id: 'sq12', level: 'standard', prompt: 'The 4th term of an arithmetic sequence is 17 and the 9th term is 42.',
        parts: [{ label: '(a)', prompt: 'Find the common difference.', answer: 5, marks: 2 }, { label: '(b)', prompt: 'Find the first term.', answer: 2, marks: 1 }, { label: '(c)', prompt: 'Find the 20th term.', answer: 97, marks: 1 }],
        hint: 'From the 4th term to the 9th term there are 5 steps.', solution: ['5d = 42 - 17 = 25, so d = 5.', 'First term = 17 - 3 × 5 = 2.', '20th term = 2 + 19 × 5 = 97.'] },
      { id: 'sq13', level: 'standard', prompt: 'In the sequence 2, 3, 5, 8, 13, ... each term after the second is the sum of the two terms before it. Find the 8th term.', answer: 55,
        solution: ['2, 3, 5, 8, 13, 21, 34, 55.', 'The 8th term is 55.'] },
      { id: 'sq14', level: 'challenge', marks: 2, prompt: 'The sequence 3, 6, 12, 24, ... is formed by multiplying by 2 each time. Find the 8th term.', answer: 384,
        solution: ['The nth term is 3 × 2^(n - 1).', '8th term = 3 × 2^7 = 3 × 128 = 384.'] },
      { id: 'sq15', level: 'challenge', marks: 3, prompt: 'How many terms are there in the sequence 7, 10, 13, ..., 100?', answer: 32,
        solution: ['The nth term is 3n + 4.', '3n + 4 = 100, so n = 32.'] },
      { id: 'sq16', level: 'challenge', marks: 3, prompt: 'Find the sum of the first 10 terms of 3, 7, 11, 15, ...', answer: 210,
        hint: 'Sum = {n|2}[2a + (n - 1)d].', solution: ['a = 3, d = 4, n = 10.', 'Sum = {10|2}[2 × 3 + 9 × 4] = 5 × 42 = 210.'] },

      // Sec 4 style: quadratic nth term and odd-number pattern
      { id: 'sq17', level: 'challenge', prompt: 'The first four terms of a sequence are 3, 8, 15, 24, ... The nth term is n^2 + 2n.',
        parts: [{ label: '(a)', prompt: 'Find the 5th term.', answer: 35, marks: 1 }, { label: '(b)', prompt: 'Find and simplify T(k + 1) - T(k) in terms of k. T(k + 1) - T(k) =', type: 'expression', answer: '2k+3', marks: 2 },
                { label: '(c)', prompt: 'Can two consecutive terms differ by 10?', type: 'mcq', options: ['Yes', 'No, because the difference is always odd'], answer: 1, marks: 1 }],
        solution: ['T5 = 25 + 10 = 35.', 'T(k + 1) - T(k) = (k + 1)^2 + 2(k + 1) - k^2 - 2k = 2k + 3.', '2k + 3 is always odd, so it can never equal 10.'] },
      { id: 'sq18', level: 'challenge', prompt: 'Row n of a pattern adds the first n + 1 odd numbers: row 1: 1 + 3 = 4, row 2: 1 + 3 + 5 = 9, row 3: 1 + 3 + 5 + 7 = 16. Row n gives (n + 1)^2, ending at the odd number k.',
        parts: [{ label: '(a)', prompt: 'Is it possible for a row to have a sum of 200?', type: 'mcq', options: ['Yes', 'No, 200 is not a perfect square'], answer: 1, marks: 1 },
                { label: '(b)', prompt: 'Express k in terms of n. k =', type: 'expression', answer: '2n+1', marks: 1 }, { label: '(c)', prompt: 'How many odd integers are there from 1 to 49?', answer: 25, marks: 1 }, { label: '(d)', prompt: 'Find 1 + 3 + 5 + ... + 49.', answer: 625, marks: 1 }],
        solution: ['The sums are perfect squares and 200 is not.', 'Row n ends at 2n + 1 (row 1 ends at 3).', 'The odd numbers 1 to 49: (49 + 1) ÷ 2 = 25 of them.', 'Their sum is 25^2 = 625.'] }
    ],
    generators: [
      { id: 'kth-term', level: 'foundation', make: function (r) {
        var a = r.int(2, 20), d = r.pick([-5, -4, -3, 2, 3, 4, 5, 6, 7]), k = r.int(8, 25);
        var t = [a, a + d, a + 2 * d, a + 3 * d];
        return { prompt: 'The first four terms of an arithmetic sequence are ' + t.join(', ') + '. Find the ' + k + 'th term.', answer: a + (k - 1) * d,
          hint: 'Find the common difference, then use a + (n - 1)d.',
          solution: ['Common difference d = ' + d + '.', k + 'th term = ' + a + ' + ' + (k - 1) + ' × (' + d + ') = ' + (a + (k - 1) * d) + '.'] };
      } },
      { id: 'find-n', level: 'standard', make: function (r) {
        var d = r.int(2, 9), c = r.int(-5, 9), n = r.int(10, 40), v = d * n + c;
        return { prompt: 'The nth term of a sequence is ' + d + 'n ' + (c < 0 ? '- ' + (-c) : '+ ' + c) + '. Which term is equal to ' + v + '?', answer: n,
          hint: 'Solve ' + d + 'n ' + (c < 0 ? '- ' + (-c) : '+ ' + c) + ' = ' + v + '.',
          solution: [d + 'n ' + (c < 0 ? '- ' + (-c) : '+ ' + c) + ' = ' + v + ', so ' + d + 'n = ' + (v - c) + '.', 'n = ' + n + '.'] };
      } }
    ]
  });
})();
