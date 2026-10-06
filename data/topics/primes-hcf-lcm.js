(function () {
  var gcd = EMATH.util.gcd;

  EMATH.registerTopic({
    id: 'primes-hcf-lcm', title: 'Primes, HCF and LCM',
    strand: 'number-algebra', levels: [1],
    syllabusNote: 'Sec 1 (Math syllabus); used again in simplifying fractions and ratios',
    verified: false,
    objectives: [
      'Identify prime numbers and write a number as a product of prime factors in index notation.',
      'Find the HCF and LCM using prime factorisation.',
      'Use prime factors to find squares, square roots, cubes and cube roots.',
      'Solve word problems that need an HCF (equal groups) or an LCM (repeating events).'
    ],
    explanation: [
      'A **prime number** has exactly two factors, 1 and itself. 2 is the only even prime, and 1 is not prime. Every whole number greater than 1 can be written as a product of primes in only one way (apart from order).',
      { term: 'Prime factorisation', def: 'Divide repeatedly by the smallest prime that goes in. 360 = 2 × 2 × 2 × 3 × 3 × 5 = 2^3 × 3^2 × 5.' },
      { term: 'HCF', def: 'The highest common factor. Take each **common** prime to its **smallest** power.' },
      { term: 'LCM', def: 'The lowest common multiple. Take **every** prime that appears, to its **largest** power.' },
      { term: 'Perfect squares and cubes', def: 'A number is a perfect square when every prime power in its factorisation has an even index, and a perfect cube when every index is a multiple of 3.' },
      { term: 'Which one do I need?', def: 'Cutting or sharing into equal pieces, "greatest possible size": HCF. Events that repeat together, "next time at the same moment": LCM.' }
    ],
    examples: [
      { title: 'HCF and LCM by prime factors', question: 'Find the HCF and LCM of 84 and 126.',
        steps: ['84 = 2^2 × 3 × 7 and 126 = 2 × 3^2 × 7.', 'HCF: common primes 2, 3, 7 at the smallest powers = 2 × 3 × 7 = 42.', 'LCM: every prime at the largest power = 2^2 × 3^2 × 7 = 252.', 'Check: HCF × LCM = 42 × 252 = 10 584 = 84 × 126 ✓.'],
        answer: 'HCF = 42, LCM = 252' },
      { title: 'Making a perfect square', question: 'Find the smallest positive integer k such that 120k is a perfect square.',
        steps: ['120 = 2^3 × 3 × 5.', 'For a perfect square every index must be even. 2 has index 3, 3 has index 1, 5 has index 1.', 'Multiply by 2 × 3 × 5 = 30 to make the indices 4, 2, 2.', '120 × 30 = 3 600 = 60^2 ✓.'],
        answer: 'k = 30' },
      { title: 'A repeating-event problem', question: 'Two buses leave a bus stop together at 8:00 am. One leaves every 12 minutes and the other every 18 minutes. When do they next leave together?',
        steps: ['They leave together again after a number of minutes that is a multiple of both 12 and 18.', '12 = 2^2 × 3 and 18 = 2 × 3^2, so LCM = 2^2 × 3^2 = 36.', '36 minutes after 8:00 am is 8:36 am.'],
        answer: '8:36 am' }
    ],
    mistakes: [
      'Calling 1 a prime number, or 9 and 51 primes (9 = 3 × 3 and 51 = 3 × 17).',
      'Stopping the factor tree too early, e.g. 2 × 90 instead of 2 × 2 × 3 × 3 × 5.',
      'For HCF, taking the largest powers (that is the LCM rule). HCF uses the smallest powers of the common primes only.',
      'For LCM, leaving out a prime that appears in only one of the numbers.',
      'Mixing up the two word-problem types. "Equal pieces, as long as possible" is HCF; "together again" is LCM.'
    ],
    formulae: [
      { name: 'Product rule for two numbers', text: 'HCF × LCM = a × b' },
      { name: 'HCF', text: 'common primes, smallest powers' },
      { name: 'LCM', text: 'all primes, largest powers' }
    ],
    summary: [
      'A prime has exactly two factors. Break a number into primes with a factor tree or repeated division.',
      'HCF: common primes, smallest powers. LCM: all primes, largest powers.',
      'For two numbers, HCF × LCM = the product of the two numbers.',
      'Perfect square: all indices even. Perfect cube: all indices multiples of 3.'
    ],
    viz: null,
    questions: [
      { id: 'pl1', level: 'foundation', type: 'mcq', prompt: 'Which of these numbers is a prime number?', options: ['51', '57', '59', '63'], answer: 2, hint: 'Test the primes 2, 3, 5, 7.', solution: ['51 = 3 × 17, 57 = 3 × 19 and 63 = 7 × 9.', '59 has no factor other than 1 and 59, so it is prime.'] },
      { id: 'pl2', level: 'foundation', prompt: 'Find the HCF of 18 and 24.', answer: 6, solution: ['Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24.', 'The highest common factor is 6.'] },
      { id: 'pl3', level: 'foundation', prompt: 'Find the LCM of 6 and 8.', answer: 24, solution: ['Multiples of 6: 6, 12, 18, 24. Multiples of 8: 8, 16, 24.', 'The lowest common multiple is 24.'] },
      { id: 'pl4', level: 'foundation', type: 'mcq', prompt: 'Which shows 180 as a product of its prime factors?', options: ['2^2 × 3^2 × 5', '2^3 × 3 × 5', '2 × 3^2 × 10', '4 × 9 × 5'], answer: 0, hint: 'Every factor must be prime.', solution: ['180 = 2 × 90 = 2 × 2 × 45 = 2 × 2 × 3 × 15 = 2 × 2 × 3 × 3 × 5.', 'In index notation: 2^2 × 3^2 × 5.'] },
      { id: 'pl5', level: 'foundation', prompt: 'How many prime numbers are there between 20 and 40?', answer: 4, solution: ['The primes are 23, 29, 31 and 37.', 'So there are 4.'] },
      { id: 'pl6', level: 'foundation', prompt: 'Find the value of sqrt(1764).', answer: 42, hint: '1764 = 2^2 × 3^2 × 7^2.', solution: ['1764 = 2^2 × 3^2 × 7^2 = (2 × 3 × 7)^2.', 'So sqrt(1764) = 42.'] },
      { id: 'pl7', level: 'standard', prompt: 'Written as products of prime factors, 1176 = 2^3 × 3 × 7^2 and 3780 = 2^2 × 3^3 × 5 × 7.',
        parts: [{ label: '(a)', prompt: 'Find the HCF of 1176 and 3780.', answer: 84, marks: 2 }, { label: '(b)', prompt: 'Find the LCM of 1176 and 3780.', answer: 52920, marks: 2 }],
        hint: 'HCF: common primes, smallest powers. LCM: all primes, largest powers.',
        solution: ['HCF = 2^2 × 3 × 7 = 84.', 'LCM = 2^3 × 3^3 × 5 × 7^2 = 8 × 27 × 5 × 49 = 52 920.'] },
      { id: 'pl8', level: 'standard', marks: 3, prompt: 'Find the smallest positive integer k such that 540k is a perfect square.', answer: 15,
        hint: 'Write 540 as a product of primes first.', solution: ['540 = 2^2 × 3^3 × 5.', 'The indices of 3 and 5 are odd, so multiply by 3 × 5 = 15.', '540 × 15 = 8 100 = 90^2 ✓.'] },
      { id: 'pl9', level: 'standard', marks: 3, prompt: 'Find the smallest positive integer n such that 252n is a perfect cube.', answer: 294,
        hint: 'For a perfect cube every index must be a multiple of 3.', solution: ['252 = 2^2 × 3^2 × 7.', 'Make the indices 3, 3, 3: multiply by 2 × 3 × 7^2 = 294.', '252 × 294 = 74 088 = 42^3 ✓.'] },
      { id: 'pl10', level: 'standard', prompt: 'A school bell and a library alarm ring together at 9:00 am. The bell rings every 12 minutes and the alarm every 18 minutes.',
        parts: [{ label: '(a)', prompt: 'After how many minutes do they next ring together?', answer: 36, unit: 'min', marks: 2 },
                { label: '(b)', prompt: 'How many times do they ring together from 9:00 am to 12:00 noon, counting both 9:00 am and 12:00 noon?', answer: 6, marks: 2 }],
        hint: 'They ring together every LCM(12, 18) minutes.', solution: ['12 = 2^2 × 3 and 18 = 2 × 3^2, so LCM = 36 minutes.', 'From 9:00 to 12:00 is 180 minutes, and 180 ÷ 36 = 5 gaps.', 'Rings together: 9:00, 9:36, 10:12, 10:48, 11:24, 12:00, which is 6 times.'] },
      { id: 'pl11', level: 'standard', prompt: 'Two ropes, 168 cm and 252 cm long, are cut into pieces of equal length with no rope left over. The pieces are as long as possible.',
        parts: [{ label: '(a)', prompt: 'Find the length of each piece.', answer: 84, unit: 'cm', marks: 2 }, { label: '(b)', prompt: 'Find the total number of pieces.', answer: 5, marks: 1 }],
        hint: 'The longest equal piece that divides both lengths is the HCF.', solution: ['168 = 2^3 × 3 × 7 and 252 = 2^2 × 3^2 × 7.', 'HCF = 2^2 × 3 × 7 = 84 cm.', 'Pieces: 168 ÷ 84 = 2 and 252 ÷ 84 = 3, so 5 pieces.'] },
      { id: 'pl12', level: 'standard', type: 'mcq', prompt: 'Express 756 as a product of its prime factors.', options: ['2^2 × 3^3 × 7', '2^3 × 3^2 × 7', '2^2 × 3^2 × 21', '4 × 27 × 7'], answer: 0, solution: ['756 = 2 × 378 = 2 × 2 × 189 = 2 × 2 × 3 × 63 = 2 × 2 × 3 × 3 × 21 = 2 × 2 × 3 × 3 × 3 × 7.', '= 2^2 × 3^3 × 7.'] },
      { id: 'pl13', level: 'standard', prompt: 'Find the smallest 3-digit number that is divisible by 6, 8 and 9.', answer: 144,
        hint: 'Find the LCM first, then look for its smallest multiple with 3 digits.', solution: ['6 = 2 × 3, 8 = 2^3, 9 = 3^2, so LCM = 2^3 × 3^2 = 72.', 'Multiples of 72: 72, 144, ...', 'The smallest 3-digit one is 144.'] },
      { id: 'pl14', level: 'challenge', marks: 3, prompt: 'The HCF of two numbers is 12 and their LCM is 180. One of the numbers is 36. Find the other number.', answer: 60,
        hint: 'HCF × LCM = product of the two numbers.', solution: ['12 × 180 = 36 × x.', 'x = 2 160 ÷ 36 = 60.', 'Check: HCF(36, 60) = 12 ✓ and LCM(36, 60) = 180 ✓.'] },
      { id: 'pl15', level: 'challenge', prompt: 'Written as a product of prime factors, 450 = 2 × 3^2 × 5^2.',
        parts: [{ label: '(a)', prompt: 'Find the smallest positive integer p such that 450p is a perfect cube.', answer: 60, marks: 2 },
                { label: '(b)', prompt: 'Find the smallest positive integer q such that 450 ÷ q is a perfect square.', answer: 2, marks: 2 }],
        hint: 'In (b), divide away only the primes that have an odd index.', solution: ['(a) Make every index 3: multiply by 2^2 × 3 × 5 = 60. 450 × 60 = 27 000 = 30^3.', '(b) Only 2 has an odd index, so q = 2. 450 ÷ 2 = 225 = 15^2.'] },

      // Sec 4 style
      { id: 'pl16', level: 'standard', prompt: '216 boys and 252 girls join a camp. They form as many groups as possible so that each group has the same number of boys and the same number of girls.',
        parts: [{ label: '(a)', prompt: 'Find the greatest number of groups.', answer: 36, marks: 2 }, { label: '(b)', prompt: 'How many boys are in each group?', answer: 6, marks: 1 }, { label: '(c)', prompt: 'How many girls are in each group?', answer: 7, marks: 1 }],
        solution: ['216 = 2^3 × 3^3 and 252 = 2^2 × 3^2 × 7, so HCF = 2^2 × 3^2 = 36 groups.', 'Boys: 216 ÷ 36 = 6. Girls: 252 ÷ 36 = 7.'] },
      { id: 'pl17', level: 'challenge', prompt: '440 = 2^3 × 5 × 11, and the LCM of 440 and B is 1 320.',
        parts: [{ label: '(a)', prompt: 'If B = 6, find the HCF of 440 and B.', answer: 2, marks: 1 }, { label: '(b)', prompt: 'If the HCF of 440 and B is 55, find B.', answer: 165, marks: 2 }],
        hint: 'HCF × LCM = 440 × B.', solution: ['HCF(440, 6) = 2.', '55 × 1 320 = 440 × B, so B = 72 600 ÷ 440 = 165.', 'Check: 165 = 3 × 5 × 11, so the LCM is 2^3 × 3 × 5 × 11 = 1 320 ✓.'] }
    ],
    generators: [
      { id: 'hcf', level: 'foundation', make: function (r) {
        var g = r.int(2, 9), m, n;
        do { m = r.int(2, 9); n = r.int(2, 9); } while (m === n || gcd(m, n) !== 1);
        var a = g * m, b = g * n;
        return { prompt: 'Find the HCF of ' + a + ' and ' + b + '.', answer: g, hint: 'List the factors, or use prime factors.',
          solution: [a + ' = ' + g + ' × ' + m + ' and ' + b + ' = ' + g + ' × ' + n + ', where ' + m + ' and ' + n + ' share no common factor.', 'HCF = ' + g + '.'] };
      } },
      { id: 'lcm', level: 'standard', make: function (r) {
        var g = r.int(2, 6), m, n;
        do { m = r.int(2, 9); n = r.int(2, 9); } while (m === n || gcd(m, n) !== 1);
        var a = g * m, b = g * n, l = g * m * n;
        return { prompt: 'Find the LCM of ' + a + ' and ' + b + '.', answer: l, hint: 'LCM = a × b ÷ HCF.',
          solution: ['HCF of ' + a + ' and ' + b + ' is ' + g + '.', 'LCM = ' + a + ' × ' + b + ' ÷ ' + g + ' = ' + l + '.'] };
      } }
    ]
  });
})();
