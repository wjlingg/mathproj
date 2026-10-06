(function () {
  EMATH.registerTopic({
    id: 'approximation', title: 'Approximation and Estimation',
    strand: 'number-algebra', levels: [1],
    syllabusNote: 'O-Level syllabus N1.7 (Sec 1). Standard form is Sec 3/4 (see Indices and Standard Form).',
    verified: true,
    objectives: [
      'Round to a given number of decimal places or significant figures.',
      'Estimate answers by rounding each number to 1 significant figure.',
      'Decide whether an estimate is an over-estimate or an under-estimate.',
      'Use full calculator values in a calculation and round only the final answer to the accuracy asked.'
    ],
    explanation: [
      '**Decimal places (d.p.)** count digits after the decimal point. **Significant figures (s.f.)** count from the first non-zero digit. To round, look at the digit just after the place you keep: 5 or more rounds up, 4 or less leaves the digit alone.',
      { term: 'Significant figures', def: 'In 0.004 067 the first significant figure is 4. To 2 s.f. it is 0.0041. Zeros between or after non-zero digits count (0.03050 has 4 s.f.); leading zeros do not.' },
      { term: 'Estimation', def: 'Round each number to 1 significant figure first, then calculate. 19.7 × 4.2 ÷ 0.51 ≈ 20 × 4 ÷ 0.5 = 160.' },
      { term: 'Over or under?', def: 'If you rounded up numbers that you multiply, the estimate is too big. Rounding a number you divide by up makes the answer smaller. Reason through each number.' },
      { term: 'Do not round too soon', def: 'Keep full calculator values through the working, and round only the final answer to the accuracy asked.' }
    ],
    examples: [
      { title: 'Significant figures', question: 'Write 0.004 567 correct to 2 significant figures.',
        steps: ['The first significant figure is 4 (the zeros before it do not count).', 'The 2 s.f. are 4 and 5. The next digit is 6, so round the 5 up to 6.', 'Answer: 0.0046.'], answer: '0.0046' },
      { title: 'Estimation by rounding', question: 'Estimate 19.7 × 4.2 ÷ 0.51 by rounding each number to 1 significant figure.',
        steps: ['19.7 ≈ 20, 4.2 ≈ 4, 0.51 ≈ 0.5.', '20 × 4 = 80 and 80 ÷ 0.5 = 160.'], answer: '160' },
      { title: 'Calculator accuracy', question: 'Calculate {8.45|15.2 - 2.31^2}, correct to 3 significant figures.',
        steps: ['Work out the denominator and keep every digit: 2.31^2 = 5.3361, so 15.2 - 5.3361 = 9.8639.', '8.45 ÷ 9.8639 = 0.85665...', 'Round only at the end: 0.857 (3 s.f.).'], answer: '0.857' }
    ],
    mistakes: [
      'Counting leading zeros as significant figures (0.0046 has 2 s.f., not 4).',
      'Rounding at every step of a long calculation and ending with an inaccurate answer.',
      'Rounding down when the next digit is 5 or more: 40 672 to 3 s.f. is 40 700, not 40 600.',
      'Dropping the zeros when rounding a whole number: 3 846 to the nearest hundred is 3 800, not 38.',
      'Estimating with numbers rounded to the nearest whole number instead of 1 significant figure.'
    ],
    formulae: [
      { name: 'Estimate', text: 'round each number to 1 s.f., then calculate' }
    ],
    summary: [
      'Rounding: look at the next digit; 5 or more rounds up.',
      'Significant figures start at the first non-zero digit.',
      'Estimate with 1 s.f. numbers; reason about whether it is an over- or under-estimate.',
      'Keep full accuracy until the final step, then round once.'
    ],
    viz: null,
    questions: [
      { id: 'ap1', level: 'foundation', prompt: 'Write 5.678 correct to 1 decimal place.', answer: 5.678, dp: 1, solution: ['The digit after the first decimal place is 7, so round up: 5.7.'] },
      { id: 'ap2', level: 'foundation', prompt: 'Write 40 672 correct to 3 significant figures.', answer: 40672, sf: 3, hint: 'The 4th significant figure is 7.', solution: ['The first 3 s.f. are 4, 0, 6. The next digit is 7, so round the 6 up to 7.', 'Answer: 40 700.'] },
      { id: 'ap3', level: 'foundation', prompt: 'Write 0.004 567 correct to 2 significant figures.', answer: 0.004567, sf: 2, solution: ['The first significant figure is 4.', 'The first 2 s.f. are 4 and 5, and the next digit is 6, so round up: 0.0046.'] },
      { id: 'ap4', level: 'foundation', type: 'mcq', prompt: 'Write 2.0449 correct to 3 significant figures.', options: ['2.04', '2.05', '2.045', '2.1'], answer: 0, solution: ['The first 3 s.f. are 2, 0, 4. The next digit is 4, so do not round up.', 'Answer: 2.04.'] },
      { id: 'ap5', level: 'foundation', prompt: 'Write 3 846 correct to the nearest hundred.', answer: 3800, solution: ['The tens digit is 4, so round down: 3 800.'] },
      { id: 'ap6', level: 'foundation', prompt: 'How many significant figures does 0.03050 have?', answer: 4, hint: 'Leading zeros do not count; the zero at the end does.', solution: ['The significant figures are 3, 0, 5, 0.', 'So there are 4.'] },
      { id: 'ap7', level: 'standard', marks: 2, prompt: 'Estimate 19.7 × 4.2 ÷ 0.51 by rounding each number to 1 significant figure.', answer: 160,
        solution: ['19.7 ≈ 20, 4.2 ≈ 4 and 0.51 ≈ 0.5.', '20 × 4 ÷ 0.5 = 160.'] },
      { id: 'ap8', level: 'standard', marks: 2, prompt: 'Calculate {8.45|15.2 - 2.31^2}, correct to 3 significant figures.', answer: 0.856657, sf: 3,
        hint: 'Work out the denominator on your calculator first and keep all the digits.', solution: ['2.31^2 = 5.3361, so the denominator = 15.2 - 5.3361 = 9.8639.', '8.45 ÷ 9.8639 = 0.8566... = 0.857 (3 s.f.).'] },
      { id: 'ap9', level: 'standard', prompt: 'Kumar buys a pair of shoes for $79.90 and 3 shirts at $24.85 each.',
        parts: [{ label: '(a)', prompt: 'By rounding each price to the nearest dollar, estimate his total spending ($).', answer: 155, marks: 2 },
                { label: '(b)', prompt: 'Calculate the exact total ($).', answer: 154.45, dp: 2, marks: 1 },
                { label: '(c)', prompt: 'Is the estimate more than or less than the exact total?', type: 'mcq', options: ['More than', 'Less than'], answer: 0, marks: 1 }],
        solution: ['Estimate: 80 + 3 × 25 = $155.', 'Exact: 79.90 + 3 × 24.85 = 79.90 + 74.55 = $154.45.', 'The estimate $155 is more than $154.45.'] },
      { id: 'ap10', level: 'standard', marks: 2, prompt: 'A rectangular field measures 18.4 m by 12.7 m. Find its area correct to 3 significant figures.', answer: 233.68, sf: 3, unit: 'm²',
        solution: ['Area = 18.4 × 12.7 = 233.68 m².', 'To 3 s.f. = 234 m².'] },
      { id: 'ap11', level: 'standard', marks: 2, prompt: 'A car uses 18.7 litres of petrol to travel 250 km. Find the distance travelled per litre, correct to 2 decimal places.', answer: 13.368984, dp: 2, unit: 'km',
        solution: ['250 ÷ 18.7 = 13.368...', '= 13.37 km per litre (2 d.p.).'] },
    ],
    generators: [
      { id: 'round-dp', level: 'foundation', make: function (r) {
        var dp = r.pick([1, 2, 3]), x, n, digit;
        do { n = r.int(10000, 99999); digit = Math.floor(n / Math.pow(10, 3 - dp)) % 10; } while (digit === 5);
        x = n / 10000;
        var shown = x.toFixed(4);
        return { prompt: 'Write ' + shown + ' correct to ' + dp + ' decimal place' + (dp > 1 ? 's' : '') + '.', answer: x, dp: dp,
          hint: 'Look at the digit after the ' + (dp === 1 ? 'first' : dp === 2 ? 'second' : 'third') + ' decimal place.',
          solution: [shown + ' = ' + x.toFixed(dp) + ' (' + dp + ' d.p.).'] };
      } },
      { id: 'round-sf', level: 'standard', make: function (r) {
        var sf = r.pick([2, 3]), x, digit;
        do { x = r.int(10000, 99999); digit = Math.floor(x / Math.pow(10, 4 - sf)) % 10; } while (digit === 5);
        var scale = r.pick([1, 10, 100]);
        var val = x * scale / 10000;
        var shown = String(val);
        return { prompt: 'Write ' + shown + ' correct to ' + sf + ' significant figures.', answer: val, sf: sf,
          hint: 'Count ' + sf + ' digits from the first non-zero digit, then look at the next one.',
          solution: [shown + ' = ' + Number(val.toPrecision(sf)) + ' (' + sf + ' s.f.).'] };
      } }
    ]
  });
})();
