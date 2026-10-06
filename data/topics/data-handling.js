(function () {
  EMATH.registerTopic({
    id: 'data-handling', title: 'Data Handling and Statistical Diagrams',
    strand: 'stats-prob', levels: [1, 2],
    syllabusNote: 'Sec 1-2 (Math syllabus); mean, median and mode are revisited in the averages topic',
    verified: false,
    objectives: [
      'Read and interpret tables, bar charts, pie charts, dot diagrams and stem-and-leaf diagrams.',
      'Calculate the mean, median, mode and range, including from a frequency table.',
      'Find pie-chart angles and use them to find frequencies.',
      'Use averages to compare data sets and to find missing values.'
    ],
    explanation: [
      'Statistics questions usually give a table or diagram in the paper. Here the data are written out in words, so read them carefully and write the values in order before you start.',
      { term: 'Mean, median, mode, range', def: 'Mean = total ÷ number of values. Median = the middle value when the data are in order (for an even number of values, the mean of the middle two). Mode = the most frequent value. Range = largest - smallest.' },
      { term: 'Frequency table', def: 'The number of values is the total of the frequencies. Mean = {sum of (value × frequency)|total frequency}. Use the cumulative frequency to find the middle position for the median.' },
      { term: 'Pie chart', def: 'The sector angle for a category = {frequency|total} × 360°. To go back, frequency = {angle|360°} × total.' },
      { term: 'Stem-and-leaf diagram', def: 'Each value is split into a stem (the leading digits) and a leaf (the last digit). The leaves are listed in order on each stem, and the key says what a value means.' },
      { term: 'Missing values', def: 'If the mean of n values is m, their total is n × m. Use totals to add or remove a value or to join two groups.' }
    ],
    examples: [
      { title: 'A frequency table', question: 'The scores of 20 students in a quiz are: score 1 (2 students), score 2 (5 students), score 3 (8 students), score 4 (3 students), score 5 (2 students). Find the mean and the median.',
        steps: ['Total of scores = 1×2 + 2×5 + 3×8 + 4×3 + 5×2 = 2 + 10 + 24 + 12 + 10 = 58.', 'Mean = 58 ÷ 20 = 2.9.', 'The median is the mean of the 10th and 11th values. Cumulative frequency: 2, 7, 15, ... so the 10th and 11th values are both 3.', 'Median = 3.'],
        answer: 'mean 2.9, median 3' },
      { title: 'Pie chart angles', question: '240 students choose a favourite CCA. The sector for Sports is 150°. How many students chose Sports?',
        steps: ['The full circle 360° represents 240 students.', 'Sports = {150|360} × 240 = 100 students.'], answer: '100 students' },
      { title: 'Using totals', question: 'The mean of 10 numbers is 15. One number x is removed and the mean of the remaining 9 numbers is 14. Find x.',
        steps: ['Total of 10 numbers = 10 × 15 = 150.', 'Total of 9 numbers = 9 × 14 = 126.', 'x = 150 - 126 = 24.'], answer: '24' }
    ],
    mistakes: [
      'Finding the median without putting the data in order first.',
      'For an even number of values, giving one of the middle values instead of the mean of the two.',
      'Averaging the mean of two groups without weighting by group size.',
      'Using the frequency as the data value, or dividing by the number of rows in the table instead of the total frequency.',
      'Pie chart: dividing by 100 instead of by the total number of items.'
    ],
    formulae: [
      { name: 'Mean', text: '{sum of values|number of values}' },
      { name: 'Mean from a frequency table', text: '{Σfx|Σf}' },
      { name: 'Pie chart angle', text: '{frequency|total} × 360°' }
    ],
    summary: [
      'Order the data, then find the median, mode and range; the mean uses the total.',
      'Frequency table: Σfx ÷ Σf for the mean, cumulative frequency for the median.',
      'Pie chart angle = {frequency|total} × 360°.',
      'Total = number of values × mean; use totals to find missing values.'
    ],
    viz: null,
    questions: [
      { id: 'dh1', level: 'foundation', prompt: 'Find the mean of 4, 7, 9, 12 and 13.', answer: 9, solution: ['Total = 4 + 7 + 9 + 12 + 13 = 45.', '45 ÷ 5 = 9.'] },
      { id: 'dh2', level: 'foundation', prompt: 'Find the median of 3, 9, 4, 7, 12, 5.', answer: 6, hint: 'Put the numbers in order first.', solution: ['In order: 3, 4, 5, 7, 9, 12.', 'There are 6 values, so the median is the mean of the 3rd and 4th: (5 + 7) ÷ 2 = 6.'] },
      { id: 'dh3', level: 'foundation', prompt: 'Find the mode of 2, 5, 3, 5, 4, 2, 5.', answer: 5, solution: ['5 appears 3 times, more than any other value.'] },
      { id: 'dh4', level: 'foundation', prompt: 'In a survey of 120 students, 30 chose basketball. What angle represents basketball on a pie chart?', answer: 90, unit: '°', solution: ['{30|120} × 360° = 90°.'] },
      { id: 'dh5', level: 'foundation', prompt: 'Find the range of 12, 5, 19 and 8.', answer: 14, solution: ['Range = 19 - 5 = 14.'] },
      { id: 'dh6', level: 'foundation', type: 'mcq', prompt: 'Which diagram is best for showing how a whole is divided into parts?', options: ['Pie chart', 'Line graph', 'Scatter graph', 'Histogram'], answer: 0, solution: ['A pie chart shows each category as a fraction of the whole.'] },
      { id: 'dh7', level: 'standard', marks: 2, prompt: 'The mean of 8 numbers is 12.5. A ninth number is added and the mean becomes 13. Find the ninth number.', answer: 17,
        solution: ['Total of 8 numbers = 8 × 12.5 = 100.', 'Total of 9 numbers = 9 × 13 = 117.', 'Ninth number = 117 - 100 = 17.'] },
      { id: 'dh8', level: 'standard', prompt: 'The quiz scores of 20 students are: score 1 (2 students), score 2 (5), score 3 (8), score 4 (3) and score 5 (2).',
        parts: [{ label: '(a)', prompt: 'Find the mean score.', answer: 2.9, marks: 2 }, { label: '(b)', prompt: 'Find the median score.', answer: 3, marks: 1 }, { label: '(c)', prompt: 'Find the mode.', answer: 3, marks: 1 }],
        solution: ['Total = 2 + 10 + 24 + 12 + 10 = 58. Mean = 58 ÷ 20 = 2.9.', 'The 10th and 11th values are both 3, so the median is 3.', 'The most frequent score is 3.'] },
      { id: 'dh9', level: 'standard', prompt: 'A stem-and-leaf diagram (key: 1 | 2 means 12) shows the marks of 11 students. Stem 1: leaves 2, 5, 5. Stem 2: leaves 1, 4, 7, 7, 7. Stem 3: leaves 3, 8. Stem 4: leaf 1.',
        parts: [{ label: '(a)', prompt: 'Find the median mark.', answer: 27, marks: 2 }, { label: '(b)', prompt: 'Find the mode.', answer: 27, marks: 1 }, { label: '(c)', prompt: 'Find the range.', answer: 29, marks: 1 }],
        hint: 'Write the 11 values out in order first.', solution: ['The values: 12, 15, 15, 21, 24, 27, 27, 27, 33, 38, 41.', 'The 6th value is the middle: 27, so the median is 27 (check: 5 values below, 5 above).', 'Mode = 27 (three times).', 'Range = 41 - 12 = 29.'] },
      { id: 'dh10', level: 'standard', prompt: '240 students are asked for their favourite CCA. On a pie chart, Sports has a sector of 150° and Music has 90°. The remaining students chose Art.',
        parts: [{ label: '(a)', prompt: 'Find the angle for Art.', answer: 120, unit: '°', marks: 1 }, { label: '(b)', prompt: 'How many students chose Music?', answer: 60, marks: 2 }, { label: '(c)', prompt: 'How many students chose Sports?', answer: 100, marks: 1 }],
        solution: ['Art = 360 - 150 - 90 = 120°.', 'Music = {90|360} × 240 = 60.', 'Sports = {150|360} × 240 = 100.'] },
      { id: 'dh11', level: 'standard', marks: 3, prompt: 'The mean of 5 numbers is 14 and the mean of 3 other numbers is 6. Find the mean of all 8 numbers.', answer: 11,
        hint: 'Find the total of each group.', solution: ['Total of 5 numbers = 70.', 'Total of 3 numbers = 18.', 'Mean of all 8 = 88 ÷ 8 = 11.'] },
      { id: 'dh12', level: 'standard', marks: 2, prompt: 'The mean of five numbers is 7. Four of the numbers are 3, 9, 6 and 10. Find the fifth number.', answer: 7,
        solution: ['Total = 5 × 7 = 35.', '3 + 9 + 6 + 10 = 28.', 'Fifth number = 35 - 28 = 7.'] },
      { id: 'dh13', level: 'standard', prompt: 'A bar chart shows the number of books borrowed from a library in one week: Monday 24, Tuesday 18, Wednesday 30, Thursday 12, Friday 36.',
        parts: [{ label: '(a)', prompt: 'Find the total number of books borrowed.', answer: 120, marks: 1 }, { label: '(b)', prompt: 'What percentage were borrowed on Friday?', answer: 30, unit: '%', marks: 2 }, { label: '(c)', prompt: 'On a pie chart, what angle would Wednesday have?', answer: 90, unit: '°', marks: 2 }],
        solution: ['24 + 18 + 30 + 12 + 36 = 120.', '{36|120} × 100% = 30%.', '{30|120} × 360° = 90°.'] },
      { id: 'dh14', level: 'challenge', marks: 3, prompt: 'The mean of 10 numbers is 15. When one number x is removed, the mean of the remaining 9 numbers is 14. Find x.', answer: 24,
        solution: ['Total of 10 = 150 and total of 9 = 126.', 'x = 150 - 126 = 24.'] },
      { id: 'dh15', level: 'challenge', marks: 3, prompt: 'Five numbers in ascending order are 3, 5, x, 9 and 12. Their mean is equal to their median. Find x.', answer: 7.25,
        hint: 'The median of five numbers in order is the third one, x.', solution: ['The median is x.', 'Mean = {3 + 5 + x + 9 + 12|5} = {29 + x|5}.', '{29 + x|5} = x, so 29 + x = 5x and 4x = 29.', 'x = 7.25, which fits between 5 and 9 ✓.'] },
      { id: 'dh16', level: 'challenge', marks: 3, prompt: 'Class A has 30 students with a mean test mark of 62. Class B has 20 students with a mean test mark of 72. Find the mean mark of all 50 students.', answer: 66,
        hint: 'Do not simply average 62 and 72. Find each class total first.', solution: ['Class A total = 30 × 62 = 1 860.', 'Class B total = 20 × 72 = 1 440.', 'Mean = (1 860 + 1 440) ÷ 50 = 66.'] }
    ],
    generators: [
      { id: 'mean', level: 'foundation', make: function (r) {
        var n = r.int(4, 6), m = r.int(16, 40), vals = [], sum = 0, i;
        for (i = 0; i < n - 1; i++) { var v = m + r.int(-3, 3); vals.push(v); sum += v; }
        vals.push(n * m - sum);
        return { prompt: 'Find the mean of ' + vals.join(', ') + '.', answer: m, hint: 'Mean = total ÷ number of values.',
          solution: ['Total = ' + vals.join(' + ') + ' = ' + n * m + '.', 'Mean = ' + n * m + ' ÷ ' + n + ' = ' + m + '.'] };
      } },
      { id: 'pie-angle', level: 'standard', make: function (r) {
        var total = r.pick([60, 90, 120, 180, 360]), part = r.int(5, Math.floor(total / 3)), angle = part * 360 / total;
        return { prompt: 'In a survey of ' + total + ' people, ' + part + ' chose tea. What angle represents tea on a pie chart?', answer: angle, unit: '°',
          hint: 'Angle = fraction × 360°.', solution: ['{' + part + '|' + total + '} × 360° = ' + angle + '°.'] };
      } }
    ]
  });
})();
