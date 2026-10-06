(function () {
  EMATH.registerTopic({
    id: 'probability', title: 'Probability (simple, combined, tree diagrams)',
    strand: 'stats-prob', levels: [2, 3, 4],
    syllabusNote: 'Sec 2 (simple probability); combined events and tree diagrams in O-Level 4052 Sec 3/4',
    verified: false,
    objectives: [
      'List a sample space and find the probability of an event.',
      'Use P(not E) = 1 - P(E) and know that probabilities lie between 0 and 1.',
      'Combine independent and dependent events using "and" (multiply) and "or" (add).',
      'Draw and use tree diagrams, with and without replacement.'
    ],
    explanation: [
      'If all outcomes are equally likely, **P(E) = {number of favourable outcomes|total number of outcomes}**. A probability is always between 0 (impossible) and 1 (certain), and can be written as a fraction, decimal or percentage.',
      { term: 'Complement', def: 'P(E does not happen) = 1 - P(E). Useful for "at least one" questions: P(at least one) = 1 - P(none).' },
      { term: 'Mutually exclusive events (OR)', def: 'If A and B cannot both happen, P(A or B) = P(A) + P(B).' },
      { term: 'Independent events (AND)', def: 'If one event does not affect the other, P(A and B) = P(A) × P(B). Two coin tosses and two days of weather are typical examples.' },
      { term: 'Tree diagrams', def: 'Each branch carries a probability. Multiply along branches to get the probability of an outcome, add the outcomes that fit the event. The branches from a single point add up to 1.' },
      { term: 'With and without replacement', def: 'With replacement the second-stage probabilities are the same as the first. Without replacement, the total (and the number of that colour) decreases, so the probabilities change.' }
    ],
    examples: [
      { title: 'A single event', question: 'A fair six-sided die is rolled. Find the probability of getting a prime number.',
        steps: ['Sample space: 1, 2, 3, 4, 5, 6, so 6 equally likely outcomes.', 'Primes: 2, 3, 5, so 3 favourable outcomes.', 'P(prime) = {3|6} = {1|2}.'], answer: '{1|2}' },
      { title: 'Using the complement', question: 'A bag has 5 red and 3 blue balls. One is picked at random. Find the probability that it is not red.',
        steps: ['P(red) = {5|8}.', 'P(not red) = 1 - {5|8} = {3|8}.', 'Check: that is also P(blue) = {3|8} ✓.'], answer: '{3|8}' },
      { title: 'Without replacement', question: 'A bag has 4 red and 6 blue marbles. Two are picked without replacement. Find the probability that (a) both are red, (b) they are different colours.',
        steps: ['First pick: P(R) = {4|10}, P(B) = {6|10}. After a red is removed: P(R) = {3|9}, P(B) = {6|9}. After a blue is removed: P(R) = {4|9}, P(B) = {5|9}.', '(a) P(RR) = {4|10} × {3|9} = {12|90} = {2|15}.', '(b) P(RB) + P(BR) = {4|10} × {6|9} + {6|10} × {4|9} = {24|90} + {24|90} = {48|90} = {8|15}.'], answer: '(a) {2|15}  (b) {8|15}' },
      { title: 'Independent events', question: 'A fair coin is tossed and a fair die is rolled. Find the probability of a head and a 6.',
        steps: ['The two events are independent.', 'P(head and 6) = P(head) × P(6) = {1|2} × {1|6} = {1|12}.'], answer: '{1|12}' }
    ],
    mistakes: [
      'Not listing all outcomes, e.g. treating "one head, one tail" as a single outcome from two coins (HT and TH are different).',
      'Adding probabilities for "and" instead of multiplying.',
      'Forgetting to reduce the second-stage denominator when not replacing.',
      'Using decimals too early and rounding. Keep exact fractions.',
      'Giving a probability greater than 1 or a negative one: check that your answer is between 0 and 1.'
    ],
    formulae: [
      { name: 'Probability of an event', text: 'P(E) = {n(E)|n(S)}' },
      { name: 'Complement', text: 'P(not E) = 1 - P(E)' },
      { name: 'Independent events', text: 'P(A and B) = P(A) × P(B)' },
      { name: 'Mutually exclusive events', text: 'P(A or B) = P(A) + P(B)' }
    ],
    summary: [
      'P(E) = favourable ÷ total, between 0 and 1.',
      'AND means multiply along a branch; OR means add the branches.',
      '"At least one" is usually 1 - P(none).',
      'Without replacement: decrease the total (and the matching count).'
    ],
    viz: 'prob-tree',
    questions: [
      { id: 'b1', level: 'foundation', prompt: 'A fair die is rolled. Find the probability of getting an even number greater than 2.', answer: '1/3', solution: ['Favourable: 4 and 6, so 2 outcomes out of 6.', 'P = {2|6} = {1|3}.'] },
      { id: 'b2', level: 'foundation', prompt: 'A card is drawn at random from cards numbered 1 to 20. Find the probability that it is a multiple of 4.', answer: '1/4', solution: ['Multiples of 4: 4, 8, 12, 16, 20, so 5 outcomes.', 'P = {5|20} = {1|4}.'] },
      { id: 'b3', level: 'foundation', prompt: 'A bag has 6 red and 4 green counters. One is picked at random. Find the probability that it is green.', answer: '2/5', solution: ['P(green) = {4|10} = {2|5}.'] },
      { id: 'b4', level: 'foundation', prompt: 'The probability that it rains tomorrow is 0.35. Find the probability that it does not rain.', answer: 0.65, hint: 'P(not E) = 1 - P(E).', solution: ['1 - 0.35 = 0.65.'] },
      { id: 'b5', level: 'foundation', prompt: 'A fair spinner has 8 equal sectors numbered 1 to 8. Find the probability of spinning a factor of 12.', answer: '5/8', solution: ['Factors of 12 up to 8: 1, 2, 3, 4, 6, so 5 outcomes.', 'P = {5|8}.'] },
      { id: 'b6', level: 'foundation', type: 'mcq', prompt: 'Which of these cannot be a probability?', options: ['0.3', '{1|2}', '1.2', '0'], answer: 2, solution: ['A probability is never more than 1, so 1.2 is impossible.'] },
      { id: 'b7', level: 'standard', prompt: 'Two fair coins are tossed. Find the probability of getting at least one head.', answer: '3/4', hint: 'List: HH, HT, TH, TT.', solution: ['Sample space: HH, HT, TH, TT.', 'At least one head: HH, HT, TH, 3 outcomes out of 4.', 'P = {3|4}.'] },
      { id: 'b8', level: 'standard', prompt: 'Two fair dice are rolled and the scores added.',
        parts: [{ label: '(a)', prompt: 'Find the probability that the sum is 7.', answer: '1/6' }, { label: '(b)', prompt: 'Find the probability that the sum is 9.', answer: '1/9' }],
        hint: 'There are 36 equally likely outcomes.', solution: ['Sum 7: (1,6) (2,5) (3,4) (4,3) (5,2) (6,1), so {6|36} = {1|6}.', 'Sum 9: (3,6) (4,5) (5,4) (6,3), so {4|36} = {1|9}.'] },
      { id: 'b9', level: 'standard', prompt: 'A bag contains 3 red and 2 blue balls. Two balls are drawn at random without replacement.',
        parts: [{ label: '(a)', prompt: 'Find the probability that both are red.', answer: '3/10' }, { label: '(b)', prompt: 'Find the probability that one is red and one is blue.', answer: '3/5' }],
        solution: ['(a) {3|5} × {2|4} = {6|20} = {3|10}.', '(b) P(RB) + P(BR) = {3|5} × {2|4} + {2|5} × {3|4} = {6|20} + {6|20} = {12|20} = {3|5}.'] },
      { id: 'b10', level: 'standard', prompt: 'The same bag (3 red and 2 blue balls) is used, but this time the ball is replaced after each draw.',
        parts: [{ label: '(a)', prompt: 'Find the probability that both are blue.', answer: '4/25' }, { label: '(b)', prompt: 'Find the probability that at least one is red.', answer: '21/25' }],
        hint: 'With replacement the probabilities do not change.', solution: ['(a) {2|5} × {2|5} = {4|25}.', '(b) 1 - P(both blue) = 1 - {4|25} = {21|25}.'] },
      { id: 'b11', level: 'standard', prompt: 'In a class of 40 students, 25 like football, 18 like basketball and 8 like both. A student is chosen at random. Find the probability that the student likes neither sport.', answer: '1/8',
        hint: 'Use n(A ∪ B) = n(A) + n(B) - n(A ∩ B).', solution: ['Students who like at least one sport = 25 + 18 - 8 = 35.', 'Neither = 40 - 35 = 5.', 'P = {5|40} = {1|8}.'] },
      { id: 'b12', level: 'standard', prompt: 'The probability that a train arrives on time on any day is 0.9, independently of other days.',
        parts: [{ label: '(a)', prompt: 'Find the probability it is on time on both Monday and Tuesday.', answer: 0.81 }, { label: '(b)', prompt: 'Find the probability it is late on at least one of the two days.', answer: 0.19 }],
        solution: ['(a) 0.9 × 0.9 = 0.81.', '(b) 1 - 0.81 = 0.19.'] },
      { id: 'b13', level: 'standard', prompt: 'The probability that Ali wins a game is 0.6, independently each time. He plays twice. Find the probability that he wins exactly one game.', answer: 0.48,
        hint: 'Win-lose or lose-win.', solution: ['P(win, lose) = 0.6 × 0.4 = 0.24.', 'P(lose, win) = 0.4 × 0.6 = 0.24.', 'Total = 0.48.'] },
      { id: 'b14', level: 'challenge', prompt: 'A box has 5 red, 3 blue and 2 yellow cubes. Two are drawn without replacement. Find the probability that both have the same colour.', answer: '14/45',
        hint: 'Find P(RR), P(BB) and P(YY) and add.', solution: ['P(RR) = {5|10} × {4|9} = {20|90}.', 'P(BB) = {3|10} × {2|9} = {6|90}.', 'P(YY) = {2|10} × {1|9} = {2|90}.', 'Total = {28|90} = {14|45}.'] },
      { id: 'b15', level: 'challenge', prompt: 'A bag has 4 red and some blue balls. The probability of picking red is {2|5}.',
        parts: [{ label: '(a)', prompt: 'How many balls are in the bag?', answer: 10 }, { label: '(b)', prompt: 'Two balls are picked without replacement. Find the probability that both are red.', answer: '2/15' }],
        solution: ['{4|n} = {2|5} so n = 10.', 'P(both red) = {4|10} × {3|9} = {12|90} = {2|15}.'] },

      // Exam-style: original items, mark allocations modelled on school papers.
      { id: 'bx1', level: 'standard', prompt: 'A bag contains 24 balls: 9 are red, 7 are yellow and the rest are green. A ball is chosen at random.',
        parts: [{ label: '(a)', prompt: 'Find the probability that the ball is either red or yellow.', answer: '2/3', marks: 1 },
                { label: '(b)', prompt: 'x more red balls are added to the bag so that the probability of choosing a red ball becomes {1|2}. Find x.', answer: 6, marks: 3 }],
        hint: 'After adding x red balls there are 9 + x red balls out of 24 + x.', solution: ['Red or yellow = 16 balls. P = {16|24} = {2|3}.', '{9 + x|24 + x} = {1|2}.', '2(9 + x) = 24 + x, so 18 + 2x = 24 + x and x = 6.'] },
      { id: 'bx2', level: 'standard', prompt: 'A box has 8 red pens and 4 blue pens. Two pens are taken at random, one after the other, without replacement.',
        parts: [{ label: '(a)', prompt: 'Find the probability that both pens are blue.', answer: '1/11', marks: 2 },
                { label: '(b)', prompt: 'Find the probability that the two pens are of different colours.', answer: '16/33', marks: 2 }],
        hint: 'For (b), add P(red then blue) and P(blue then red).', solution: ['P(both blue) = {4|12} × {3|11} = {12|132} = {1|11}.', 'P(red, blue) = {8|12} × {4|11} = {32|132}.', 'P(blue, red) = {4|12} × {8|11} = {32|132}.', 'P(different) = {64|132} = {16|33}.'] }
    ],
    generators: []
  });
})();
