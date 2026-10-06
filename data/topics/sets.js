(function () {
  EMATH.registerTopic({
    id: 'sets', title: 'Set Language and Notation',
    strand: 'number-algebra', levels: [3],
    syllabusNote: 'Sec 3 (Math syllabus); placement to be confirmed',
    verified: false,
    objectives: [
      'Use set notation: ∈, ∉, ⊂, ∪, ∩, the universal set ξ, the complement A′ and the empty set.',
      'List the elements of a set from a description, and count them.',
      'Use n(A ∪ B) = n(A) + n(B) - n(A ∩ B) to solve counting problems.',
      'Interpret and solve problems that are normally shown with a Venn diagram.'
    ],
    explanation: [
      'A **set** is a collection of objects called **elements**. Sets are written with curly brackets, for example A = {2, 4, 6}. The number of elements in A is written n(A). The **universal set** ξ contains every element under consideration.',
      { term: 'Notation', def: 'x ∈ A: x is an element of A. A ⊂ B: every element of A is in B (A is a subset of B). A ∪ B (union): in A or B or both. A ∩ B (intersection): in both A and B. A′ (complement): in ξ but not in A. ∅ is the empty set.' },
      { term: 'Counting rule', def: 'n(A ∪ B) = n(A) + n(B) - n(A ∩ B). Subtracting the overlap avoids counting it twice.' },
      { term: 'Neither', def: 'The number in neither set is n(ξ) - n(A ∪ B).' },
      { term: 'Only A', def: 'The number in A only is n(A) - n(A ∩ B).' },
      { term: 'Venn diagrams', def: 'Start with the overlap n(A ∩ B), then fill in "only A" and "only B", then the outside region. The total of all regions must equal n(ξ).' }
    ],
    examples: [
      { title: 'Listing and counting', question: 'ξ = {1, 2, 3, ..., 12}, A = {even numbers} and B = {multiples of 3}. Find n(A ∩ B), n(A ∪ B) and n((A ∪ B)′).',
        steps: ['A = {2, 4, 6, 8, 10, 12} and B = {3, 6, 9, 12}.', 'A ∩ B = {6, 12}, so n(A ∩ B) = 2.', 'n(A ∪ B) = 6 + 4 - 2 = 8.', '(A ∪ B)′ = {1, 5, 7, 11}, so n((A ∪ B)′) = 12 - 8 = 4.'], answer: '2, 8, 4' },
      { title: 'A survey', question: 'In a group of 60 students, 36 play football, 28 play basketball and 12 play both. How many play neither?',
        steps: ['n(F ∪ B) = 36 + 28 - 12 = 52.', 'Neither = 60 - 52 = 8.'], answer: '8' },
      { title: 'Finding the overlap', question: 'n(ξ) = 50, n(A) = 30, n(B) = 25 and n(A ∪ B) = 42. Find n(A ∩ B).',
        steps: ['42 = 30 + 25 - n(A ∩ B).', 'n(A ∩ B) = 55 - 42 = 13.'], answer: '13' }
    ],
    mistakes: [
      'Adding n(A) and n(B) without subtracting the overlap.',
      'Confusing ∪ (or) with ∩ (and).',
      'Forgetting the elements outside both sets: they are in A′ ∩ B′ and count toward n(ξ).',
      'Mixing up "only A" (n(A) - n(A ∩ B)) with n(A).',
      'Counting a repeated element twice when listing a set.'
    ],
    formulae: [
      { name: 'Union', text: 'n(A ∪ B) = n(A) + n(B) - n(A ∩ B)' },
      { name: 'Complement', text: 'n(A′) = n(ξ) - n(A)' },
      { name: 'Neither', text: 'n(ξ) - n(A ∪ B)' }
    ],
    summary: [
      '∪ means "or" (everything in either set), ∩ means "and" (the overlap).',
      'n(A ∪ B) = n(A) + n(B) - n(A ∩ B).',
      'Complement: everything in ξ that is not in the set.',
      'Fill a Venn diagram from the overlap outwards and check that the regions add up to n(ξ).'
    ],
    viz: null,
    questions: [
      { id: 'st1', level: 'foundation', prompt: 'A = {prime numbers less than 20}. Find n(A).', answer: 8, solution: ['A = {2, 3, 5, 7, 11, 13, 17, 19}.', 'n(A) = 8.'] },
      { id: 'st2', level: 'foundation', type: 'mcq', prompt: 'Which symbol means "is an element of"?', options: ['∈', '⊂', '∪', '∩'], answer: 0, solution: ['x ∈ A means x is an element of A.'] },
      { id: 'st3', level: 'foundation', prompt: 'A = {1, 2, 3, 4, 5} and B = {4, 5, 6, 7}. Find n(A ∩ B).', answer: 2, solution: ['A ∩ B = {4, 5}, so n(A ∩ B) = 2.'] },
      { id: 'st4', level: 'foundation', prompt: 'A = {1, 2, 3, 4, 5} and B = {4, 5, 6, 7}. Find n(A ∪ B).', answer: 7, solution: ['A ∪ B = {1, 2, 3, 4, 5, 6, 7}, so n(A ∪ B) = 7.'] },
      { id: 'st5', level: 'foundation', prompt: 'ξ = {1, 2, 3, ..., 10} and A = {2, 4, 6, 8, 10}. Find n(A′).', answer: 5, solution: ['A′ = {1, 3, 5, 7, 9}, so n(A′) = 5.'] },
      { id: 'st6', level: 'foundation', type: 'mcq', prompt: 'What does A ⊂ B mean?', options: ['Every element of A is in B', 'A and B have no common element', 'B is empty', 'A and B have the same number of elements'], answer: 0, solution: ['A ⊂ B means A is a subset of B.'] },
      { id: 'st7', level: 'standard', prompt: 'ξ = {1, 2, 3, ..., 12}, A = {even numbers} and B = {multiples of 3}.',
        parts: [{ label: '(a)', prompt: 'Find n(A ∩ B).', answer: 2, marks: 2 }, { label: '(b)', prompt: 'Find n(A ∪ B).', answer: 8, marks: 2 }, { label: '(c)', prompt: 'Find n((A ∪ B)′).', answer: 4, marks: 2 }],
        solution: ['A = {2, 4, 6, 8, 10, 12}, B = {3, 6, 9, 12}.', 'A ∩ B = {6, 12}: 2.', 'n(A ∪ B) = 6 + 4 - 2 = 8.', '12 - 8 = 4.'] },
      { id: 'st8', level: 'standard', prompt: 'Of 60 students, 36 play football, 28 play basketball and 12 play both.',
        parts: [{ label: '(a)', prompt: 'How many play neither sport?', answer: 8, marks: 3 }, { label: '(b)', prompt: 'How many play football only?', answer: 24, marks: 2 }],
        solution: ['n(F ∪ B) = 36 + 28 - 12 = 52, so neither = 60 - 52 = 8.', 'Football only = 36 - 12 = 24.'] },
      { id: 'st9', level: 'standard', marks: 3, prompt: 'n(ξ) = 50, n(A) = 30, n(B) = 25 and n(A ∪ B) = 42. Find n(A ∩ B).', answer: 13,
        solution: ['n(A ∪ B) = n(A) + n(B) - n(A ∩ B).', '42 = 55 - n(A ∩ B), so n(A ∩ B) = 13.'] },
      { id: 'st10', level: 'standard', prompt: 'n(ξ) = 60 and n(A′) = 24. B is a subset of A and n(B) = 15.',
        parts: [{ label: '(a)', prompt: 'Find n(A).', answer: 36, marks: 2 }, { label: '(b)', prompt: 'Find n(A ∩ B′), the number in A but not in B.', answer: 21, marks: 2 }],
        solution: ['n(A) = 60 - 24 = 36.', 'Since B ⊂ A, the number in A but not in B is 36 - 15 = 21.'] },
      { id: 'st11', level: 'standard', prompt: 'ξ = {integers from 1 to 20}, P = {prime numbers} and Q = {odd numbers}.',
        parts: [{ label: '(a)', prompt: 'Find n(P ∩ Q).', answer: 7, marks: 2 }, { label: '(b)', prompt: 'Find n(P ∪ Q).', answer: 11, marks: 3 }],
        hint: 'P = {2, 3, 5, 7, 11, 13, 17, 19}. The only prime that is not odd is 2.', solution: ['P has 8 elements, Q has 10, and P ∩ Q = {3, 5, 7, 11, 13, 17, 19} has 7.', 'n(P ∪ Q) = 8 + 10 - 7 = 11.'] },
      { id: 'st12', level: 'standard', marks: 3, prompt: 'In a class of 40 students, 22 like Maths, 18 like Science and 5 like neither. Find the number who like both subjects.', answer: 5,
        solution: ['Students who like at least one = 40 - 5 = 35.', '35 = 22 + 18 - n(both), so n(both) = 5.'] },
      { id: 'st13', level: 'standard', prompt: 'n(A) = 12 and n(B) = 9, and the universal set has 18 elements.',
        parts: [{ label: '(a)', prompt: 'Find the greatest possible value of n(A ∩ B).', answer: 9, marks: 2 }, { label: '(b)', prompt: 'Find the least possible value of n(A ∩ B).', answer: 3, marks: 2 }],
        hint: 'The greatest overlap happens when B ⊂ A. The least is forced when A ∪ B is as big as ξ.', solution: ['(a) At most the size of the smaller set: 9.', '(b) n(A ∪ B) ≤ 18, so 21 - n(A ∩ B) ≤ 18 and n(A ∩ B) ≥ 3.'] },
      { id: 'st14', level: 'standard', marks: 2, prompt: 'A = {x : x is an integer, 2 < x ≤ 7}. Find n(A).', answer: 5, solution: ['A = {3, 4, 5, 6, 7}, so n(A) = 5.'] },
      { id: 'st15', level: 'challenge', prompt: 'In a group of 50 people, everyone speaks at least one of English and Mandarin. 30 speak English and 28 speak Mandarin.',
        parts: [{ label: '(a)', prompt: 'How many speak both languages?', answer: 8, marks: 2 }, { label: '(b)', prompt: 'How many speak English only?', answer: 22, marks: 1 }],
        solution: ['50 = 30 + 28 - both, so both = 8.', 'English only = 30 - 8 = 22.'] },
      { id: 'st16', level: 'challenge', marks: 3, prompt: 'Of 100 students, 60 read newspaper A, 50 read newspaper B and 30 read both. What percentage read neither?', answer: 20, unit: '%',
        solution: ['n(A ∪ B) = 60 + 50 - 30 = 80.', 'Neither = 100 - 80 = 20, which is 20%.'] }
    ],
    generators: [
      { id: 'union', level: 'foundation', make: function (r) {
        var a = r.int(8, 25), b = r.int(8, 25), both = r.int(2, Math.min(a, b) - 2);
        return { prompt: 'n(A) = ' + a + ', n(B) = ' + b + ' and n(A ∩ B) = ' + both + '. Find n(A ∪ B).', answer: a + b - both, hint: 'n(A ∪ B) = n(A) + n(B) - n(A ∩ B).',
          solution: ['n(A ∪ B) = ' + a + ' + ' + b + ' - ' + both + ' = ' + (a + b - both) + '.'] };
      } },
      { id: 'neither', level: 'standard', make: function (r) {
        var a = r.int(15, 35), b = r.int(15, 35), both = r.int(4, 12), nei = r.int(2, 10), total = a + b - both + nei;
        return { prompt: 'In a group of ' + total + ' people, ' + a + ' like tea, ' + b + ' like coffee and ' + both + ' like both. How many like neither?', answer: nei,
          hint: 'Find the number who like at least one drink first.', solution: ['At least one: ' + a + ' + ' + b + ' - ' + both + ' = ' + (a + b - both) + '.', 'Neither = ' + total + ' - ' + (a + b - both) + ' = ' + nei + '.'] };
      } }
    ]
  });
})();
