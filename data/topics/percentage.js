(function () {
  EMATH.registerTopic({
    id: 'percentage', title: 'Percentage',
    strand: 'number-algebra', levels: [1, 2],
    syllabusNote: 'Sec 1-2 (Math syllabus); applied throughout O-Level 4052',
    verified: false,
    objectives: [
      'Convert between fractions, decimals and percentages.',
      'Find a percentage of a quantity, and express one quantity as a percentage of another.',
      'Calculate percentage increase, decrease and change.',
      'Solve reverse-percentage problems, including GST, discounts and simple interest.'
    ],
    explanation: [
      '**Per cent** means "out of 100". 35% = {35|100} = 0.35.',
      { term: 'Percentage of a quantity', def: 'Multiply the quantity by the percentage as a fraction. 35% of 240 = {35|100} × 240 = 84.' },
      { term: 'One quantity as a percentage of another', def: '{part|whole} × 100%.' },
      { term: 'Percentage change', def: '{new - old|old} × 100%. Always divide by the original (old) value.' },
      { term: 'Increase and decrease', def: 'To increase by 15%, multiply by 1.15 (115%). To decrease by 12%, multiply by 0.88 (88%).' },
      { term: 'Reverse percentage', def: 'If the new value is a known percentage of the original, divide to get back. After a 20% discount you pay 80% of the original, so original = new ÷ 0.8.' },
      { term: 'GST', def: 'In Singapore, GST is added to the pre-GST price. Price with 9% GST = pre-GST price × 1.09. Restaurant bills often add a 10% service charge first, then GST on the total.' },
      { term: 'Simple interest', def: 'I = {P × R × T|100}, where P is the principal, R the yearly rate (%) and T the number of years.' }
    ],
    examples: [
      { title: 'Part as a percentage', question: 'Express 18 out of 24 as a percentage.',
        steps: ['Write as a fraction: {18|24} = {3|4}.', 'Multiply by 100%: {3|4} × 100% = 75%.'], answer: '75%' },
      { title: 'A discount', question: 'A jacket costs $85. It is sold at a 20% discount. Find the selling price.',
        steps: ['Discount = 20% of 85 = 0.20 × 85 = $17.', 'Selling price = 85 - 17 = $68.', 'Shortcut: pay 80% of the price, 0.80 × 85 = $68.'], answer: '$68' },
      { title: 'Reverse percentage with GST', question: 'A bag costs $54.50 including 9% GST. Find its price before GST.',
        steps: ['Price including GST is 109% of the original price.', '109% = $54.50, so 1% = 54.50 ÷ 109 = $0.50.', 'Original price = 100% = 100 × 0.50 = $50.'], answer: '$50' }
    ],
    mistakes: [
      'Dividing by the new value instead of the original in a percentage change.',
      'Treating the sale price as 20% of the original when it is 80% (after a 20% discount).',
      'Taking 10% off and then 10% on and expecting the original price. The base changes, so the result is 1% lower.',
      'For reverse percentages, subtracting the percentage instead of dividing. 20% off then 20% on does not return to the start.',
      'Adding GST and service charge together as 19%. They compound: ×1.10 then ×1.09.'
    ],
    formulae: [
      { name: 'Percentage change', text: '{new - old|old} × 100%' },
      { name: 'Reverse percentage', text: 'original = {new value|multiplier}' },
      { name: 'Simple interest', text: 'I = {P × R × T|100}' }
    ],
    summary: [
      'Percent means out of 100; convert to a fraction or decimal first.',
      'Increase: multiply by (100 + p)%. Decrease: multiply by (100 - p)%.',
      'Percentage change always divides by the original value.',
      'Reverse percentage: divide by the multiplier.'
    ],
    viz: null,
    questions: [
      { id: 'p1', level: 'foundation', prompt: 'Find 35% of 240.', answer: 84, hint: '35% = 0.35.', solution: ['35% of 240 = 0.35 × 240 = 84.'] },
      { id: 'p2', level: 'foundation', prompt: 'Express 42 as a percentage of 150.', answer: 28, unit: '%', solution: ['{42|150} × 100% = 28%.'] },
      { id: 'p3', level: 'foundation', prompt: 'Increase 80 by 15%.', answer: 92, hint: 'Multiply by 1.15.', solution: ['115% of 80 = 1.15 × 80 = 92.'] },
      { id: 'p4', level: 'foundation', prompt: 'Decrease 250 by 12%.', answer: 220, hint: 'Multiply by 0.88.', solution: ['88% of 250 = 0.88 × 250 = 220.'] },
      { id: 'p5', level: 'foundation', prompt: 'A pair of shoes rises in price from $40 to $52. Find the percentage increase.', answer: 30, unit: '%', solution: ['Increase = 52 - 40 = $12.', '{12|40} × 100% = 30%.'] },
      { id: 'p6', level: 'foundation', prompt: 'Express each as a percentage.',
        parts: [{ label: '(a)', prompt: '0.375', answer: 37.5, unit: '%' }, { label: '(b)', prompt: '{7|20}', answer: 35, unit: '%' }],
        solution: ['0.375 × 100 = 37.5%.', '{7|20} = {35|100} = 35%.'] },
      { id: 'p7', level: 'standard', prompt: 'A meal costs $40 before any charges. A 10% service charge is added, then 9% GST is charged on the total. Find the final bill.', answer: 47.96, dp: 2, unit: '$',
        hint: 'Multiply by 1.10, then by 1.09.', solution: ['After service charge: 40 × 1.10 = $44.', 'After GST: 44 × 1.09 = $47.96.'] },
      { id: 'p8', level: 'standard', prompt: 'A phone is sold for $480 after a 20% discount. Find its original price.', answer: 600, unit: '$', hint: '$480 is 80% of the original.', solution: ['80% = $480, so 1% = $6.', 'Original price = 100% = $600.'] },
      { id: 'p9', level: 'standard', prompt: 'Aisha scored 36 out of 45 in Test A and 52 out of 80 in Test B.',
        parts: [{ label: '(a)', prompt: 'Her percentage in Test A', answer: 80, unit: '%' }, { label: '(b)', prompt: 'Her percentage in Test B', answer: 65, unit: '%' }],
        solution: ['Test A: {36|45} × 100% = 80%.', 'Test B: {52|80} × 100% = 65%.'] },
      { id: 'p10', level: 'standard', prompt: 'A town\'s population grew from 4.2 million to 5.46 million. Find the percentage increase.', answer: 30, unit: '%', solution: ['Increase = 5.46 - 4.2 = 1.26 million.', '{1.26|4.2} × 100% = 30%.'] },
      { id: 'p11', level: 'standard', prompt: 'Mr Lim invests $5 000 at 2.5% simple interest per year for 3 years.',
        parts: [{ label: '(a)', prompt: 'Find the interest earned.', answer: 375, unit: '$' }, { label: '(b)', prompt: 'Find the total amount after 3 years.', answer: 5375, unit: '$' }],
        solution: ['I = {5000 × 2.5 × 3|100} = $375.', 'Total = 5 000 + 375 = $5 375.'] },
      { id: 'p12', level: 'standard', prompt: 'A school has 800 students; 45% are girls. 60% of the girls take part in a dance CCA.',
        parts: [{ label: '(a)', prompt: 'How many girls take part in the dance CCA?', answer: 216 }, { label: '(b)', prompt: 'What percentage of all students is this?', answer: 27, unit: '%' }],
        solution: ['Girls = 0.45 × 800 = 360.', 'Dance CCA = 0.60 × 360 = 216.', '{216|800} × 100% = 27%.'] },
      { id: 'p13', level: 'standard', prompt: 'An item costing $200 is first increased in price by 10%, and the new price is then decreased by 10%.',
        parts: [{ label: '(a)', prompt: 'Find the final price.', answer: 198, unit: '$' }, { label: '(b)', prompt: 'Find the overall percentage decrease from $200.', answer: 1, unit: '%' }],
        solution: ['After increase: 200 × 1.1 = $220.', 'After decrease: 220 × 0.9 = $198.', 'Overall decrease = {2|200} × 100% = 1%.'] },
      { id: 'p14', level: 'standard', prompt: '15% of a number is 63. Find the number.', answer: 420, solution: ['15% = 63, so 1% = 4.2.', '100% = 420.'] },
      { id: 'p15', level: 'challenge', prompt: 'Sam saves 30% of his salary. His salary then rises by 20% and he saves 40% of his new salary. His new savings are what percentage of his old savings?', answer: 160, unit: '%',
        hint: 'Let the old salary be $100 and compare the savings.', solution: ['Old salary $100: old savings = $30.', 'New salary = $120: new savings = 40% × 120 = $48.', '{48|30} × 100% = 160%.'] }
    ],
    generators: [
      { id: 'percent-of', level: 'foundation', make: function (r) {
        var p = r.pick([5, 10, 15, 20, 25, 30, 35, 40, 45, 60, 75, 80]), n = r.int(2, 40) * 20;
        return { prompt: 'Find ' + p + '% of ' + n + '.', answer: n * p / 100, hint: p + '% = ' + p / 100 + '.',
          solution: [p + '% of ' + n + ' = ' + p / 100 + ' × ' + n + ' = ' + n * p / 100 + '.'] };
      } },
      { id: 'discount', level: 'standard', make: function (r) {
        var price = r.int(4, 30) * 10, d = r.pick([10, 15, 20, 25, 30, 40]), final = price * (100 - d) / 100;
        return { prompt: 'A shirt costs $' + price + '. It is sold at a ' + d + '% discount. Find the selling price.', answer: final, unit: '$',
          hint: 'You pay ' + (100 - d) + '% of the original price.',
          solution: ['Discount = ' + d + '% of ' + price + ' = $' + price * d / 100 + '.', 'Selling price = ' + price + ' - ' + price * d / 100 + ' = $' + final + '.'] };
      } }
    ]
  });
})();
