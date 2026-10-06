(function () {
  EMATH.registerTopic({
    id: 'averages', title: 'Mean, Median and Mode',
    strand: 'stats-prob', levels: [2, 3],
    syllabusNote: 'Sec 2-3 (Math syllabus); builds on the Sec 1 data handling topic',
    verified: false,
    objectives: [
      'Find the mean, median and mode from lists, frequency tables, stem-and-leaf diagrams and grouped data.',
      'Find a missing value or frequency when the mean, median or mode is given.',
      'Combine the means of groups and see how adding or removing a value changes the mean.',
      'Choose a suitable average and justify the choice.'
    ],
    explanation: [
      'This topic extends the Sec 1 work to larger and more complicated data sets. Data may be given as a **frequency table**, a **stem-and-leaf diagram** or **grouped intervals**, and the question often leaves one value unknown.',
      { term: 'Frequency table', def: 'Number of values n = Σf. Mean = {Σfx|Σf}. Median = the value in position {n + 1|2}. Mode = the value with the greatest frequency.' },
      { term: 'Grouped data', def: 'The exact values are not known, so use the **midpoint** of each interval as x and give an **estimate** of the mean = {Σfx|Σf}.' },
      { term: 'Missing values', def: 'Use totals. If the mean of n values is m then the total is nm. Add or remove values from the total, then divide by the new number of values.' },
      { term: 'Combined groups', def: 'Mean of both groups = {total of group 1 + total of group 2|number in both groups}. Do not just average the two means.' },
      { term: 'Which average?', def: 'The mean uses every value but is pulled by extreme values. The median is better when there are extreme values. The mode is best for the most common item, such as the most popular shoe size.' }
    ],
    examples: [
      { title: 'Frequency table', question: 'The numbers of goals scored by a team: 0 goals (3 games), 1 (6), 2 (9), 3 (7), 4 (5). Find the mean, median and mode.',
        steps: ['Number of games = 3 + 6 + 9 + 7 + 5 = 30.', 'Σfx = 0 + 6 + 18 + 21 + 20 = 65, so mean = 65 ÷ 30 = 2.17 (2 d.p.).', 'The median is between the 15th and 16th values. Cumulative frequencies: 3, 9, 18, ... so both are 2. Median = 2.', 'The highest frequency is 9, so mode = 2.'], answer: 'mean 2.17, median 2, mode 2' },
      { title: 'A missing frequency', question: 'The number of siblings of some students: 0 (3 students), 1 (7), 2 (x), 3 (5). The mean is 1.5. Find x.',
        steps: ['Σfx = 0 + 7 + 2x + 15 = 22 + 2x.', 'Number of students = 15 + x.', '{22 + 2x|15 + x} = 1.5, so 22 + 2x = 22.5 + 1.5x.', '0.5x = 0.5, so x = 1.'], answer: 'x = 1' },
      { title: 'Grouped data', question: 'Marks: 0-9 (2 students), 10-19 (6), 20-29 (9), 30-39 (3). Estimate the mean mark.',
        steps: ['Midpoints: 4.5, 14.5, 24.5, 34.5.', 'Σfx = 2 × 4.5 + 6 × 14.5 + 9 × 24.5 + 3 × 34.5 = 9 + 87 + 220.5 + 103.5 = 420.', 'Σf = 20, so the estimated mean = 420 ÷ 20 = 21.'], answer: '21' }
    ],
    mistakes: [
      'Dividing Σfx by the number of rows in the table instead of Σf.',
      'For grouped data, using the interval ends instead of the midpoints, or presenting the answer as an exact value.',
      'Giving the frequency as the mode instead of the value with the highest frequency.',
      'Averaging two group means without weighting by the group sizes.',
      'Finding the median position as {n|2} without checking whether n is odd or even.'
    ],
    formulae: [
      { name: 'Mean from a frequency table', text: '{Σfx|Σf}' },
      { name: 'Median position', text: 'the {n + 1|2}th value' },
      { name: 'Estimated mean (grouped data)', text: '{Σf × midpoint|Σf}' }
    ],
    summary: [
      'Frequency table: Σfx ÷ Σf for the mean; use cumulative frequency for the median.',
      'Grouped data: use midpoints and say the mean is an estimate.',
      'Use totals (n × mean) to find missing values and to combine groups.',
      'Choose the median when there are extreme values.'
    ],
    viz: null,
    questions: [
      { id: 'av1', level: 'foundation', prompt: 'Find the mean of 12, 15, 11, 18, 14 and 20.', answer: 15, solution: ['Total = 90.', '90 ÷ 6 = 15.'] },
      { id: 'av2', level: 'foundation', prompt: 'Find the median of 4, 8, 6, 10, 2, 12, 9.', answer: 8, hint: 'Put the numbers in order first.', solution: ['In order: 2, 4, 6, 8, 9, 10, 12.', 'The middle (4th) value is 8.'] },
      { id: 'av3', level: 'foundation', prompt: 'In a frequency table, the scores 1, 2 and 3 have frequencies 4, 7 and 5. Find the mode.', answer: 2, solution: ['The highest frequency is 7, which is for the score 2.'] },
      { id: 'av4', level: 'foundation', type: 'mcq', prompt: 'A list of house prices includes one extremely expensive mansion. Which average is the best measure of a typical house price?', options: ['Mean', 'Median', 'Range', 'Mode'], answer: 1, solution: ['The mean is pulled up by the extreme value. The median is not affected as much.'] },
      { id: 'av5', level: 'foundation', prompt: 'The mean of 5 numbers is 8. Find their total.', answer: 40, solution: ['Total = 5 × 8 = 40.'] },
      { id: 'av6', level: 'foundation', prompt: 'The daily temperatures (°C) were 21, 25, 19, 28 and 23. Find the range.', answer: 9, solution: ['Range = 28 - 19 = 9.'] },
      { id: 'av7', level: 'standard', prompt: 'The numbers of goals scored by a team in 30 games: 0 goals (3 games), 1 (6), 2 (9), 3 (7), 4 (5).',
        parts: [{ label: '(a)', prompt: 'Find the mean number of goals, correct to 2 decimal places.', answer: 2.166667, dp: 2, marks: 3 },
                { label: '(b)', prompt: 'Find the median.', answer: 2, marks: 2 }, { label: '(c)', prompt: 'Find the mode.', answer: 2, marks: 1 }],
        solution: ['Σfx = 0 + 6 + 18 + 21 + 20 = 65. Mean = 65 ÷ 30 = 2.17.', 'The 15th and 16th values are both 2 (cumulative frequency 3, 9, 18), so the median is 2.', 'The highest frequency is 9, so the mode is 2.'] },
      { id: 'av8', level: 'standard', marks: 3, prompt: 'The number of siblings of some students: 0 siblings (3 students), 1 sibling (7), 2 siblings (x students), 3 siblings (5). The mean is 1.5. Find x.', answer: 1,
        hint: 'Σfx = 22 + 2x and Σf = 15 + x.', solution: ['(22 + 2x) ÷ (15 + x) = 1.5.', '22 + 2x = 22.5 + 1.5x, so 0.5x = 0.5 and x = 1.'] },
      { id: 'av9', level: 'standard', marks: 2, prompt: 'In a frequency table, the value 1 has frequency 4, the value 2 has frequency x, the value 3 has frequency 7 and the value 4 has frequency 5. 3 is the only mode. Find the largest possible value of x.', answer: 6,
        solution: ['For 3 to be the only mode, its frequency 7 must be greater than every other frequency.', 'So x < 7, and the largest whole number is 6.'] },
      { id: 'av10', level: 'standard', marks: 3, prompt: 'The marks of 20 students are grouped: 0-9 (2 students), 10-19 (6), 20-29 (9), 30-39 (3). Estimate the mean mark.', answer: 21,
        hint: 'Use the midpoints 4.5, 14.5, 24.5 and 34.5.', solution: ['Σfx = 2 × 4.5 + 6 × 14.5 + 9 × 24.5 + 3 × 34.5 = 420.', 'Estimated mean = 420 ÷ 20 = 21.'] },
      { id: 'av11', level: 'standard', prompt: 'A stem-and-leaf diagram (key: 1 | 2 means 12) shows test marks. Stem 1: 2, 5, 8. Stem 2: 0, 3, 3, 6, 9. Stem 3: 1, 4, 4, 7. Stem 4: 0, 2, 5.',
        parts: [{ label: '(a)', prompt: 'How many students are there?', answer: 15, marks: 1 }, { label: '(b)', prompt: 'Find the median mark.', answer: 29, marks: 2 },
                { label: '(c)', prompt: 'What percentage of the students scored at least 34?', answer: 40, unit: '%', marks: 2 }],
        solution: ['3 + 5 + 4 + 3 = 15 students.', 'The 8th value is the median: 29.', 'Marks of at least 34: 34, 34, 37, 40, 42, 45, which is 6 students. {6|15} × 100% = 40%.'] },
      { id: 'av12', level: 'standard', marks: 3, prompt: 'The mean height of 8 boys is 160 cm and the mean height of 12 girls is 155 cm. Find the mean height of all 20 students.', answer: 157, unit: 'cm',
        solution: ['Boys total = 8 × 160 = 1 280. Girls total = 12 × 155 = 1 860.', 'Mean = (1 280 + 1 860) ÷ 20 = 157 cm.'] },
      { id: 'av13', level: 'standard', marks: 2, prompt: 'The mean of 6 test marks is 70. After a seventh test the mean of all 7 marks is 72. Find the seventh mark.', answer: 84,
        solution: ['Total of 6 = 420. Total of 7 = 7 × 72 = 504.', 'Seventh mark = 504 - 420 = 84.'] },
      { id: 'av14', level: 'standard', marks: 2, prompt: 'The six numbers 4, 7, x, 12, 15 and 20 are in ascending order. Their median is 11. Find x.', answer: 10,
        hint: 'With six values the median is the mean of the 3rd and 4th values.', solution: ['(x + 12) ÷ 2 = 11, so x + 12 = 22 and x = 10.'] },
      { id: 'av15', level: 'challenge', marks: 3, prompt: 'The mean of 4 numbers is 9. A fifth number is added and the mean becomes 10. A sixth number y is then added and the mean becomes 11. Find y.', answer: 16,
        solution: ['Total of 4 = 36. Total of 5 = 50 (fifth number = 14).', 'Total of 6 = 66.', 'y = 66 - 50 = 16.'] },
      { id: 'av16', level: 'challenge', marks: 3, prompt: 'The values 2, 4, 6 and 8 have frequencies 3, 5, k and 2. The mean is 5. Find k.', answer: 8,
        solution: ['Σfx = 6 + 20 + 6k + 16 = 42 + 6k, and Σf = 10 + k.', '(42 + 6k) ÷ (10 + k) = 5, so 42 + 6k = 50 + 5k.', 'k = 8.'] },

      // Sec 3 content: standard deviation (formula is given in the exam)
      { id: 'av17', level: 'challenge', marks: 3, prompt: 'Find the standard deviation of 2, 4, 4, 4, 5, 5, 7, 9. Use SD = sqrt({Σx^2|n} - mean^2).', answer: 2,
        solution: ['Mean = 40 ÷ 8 = 5.', 'Σx^2 = 4 + 16 + 16 + 16 + 25 + 25 + 49 + 81 = 232, so {Σx^2|n} = 29.', 'SD = sqrt(29 - 25) = 2.'] },
      { id: 'av18', level: 'challenge', marks: 2, type: 'mcq', prompt: 'Class A has a mean mark of 65 and a standard deviation of 4. Class B has a mean mark of 65 and a standard deviation of 10. Which class has more consistent marks?', options: ['Class A', 'Class B'], answer: 0,
        solution: ['A smaller standard deviation means the marks are closer to the mean, so Class A is more consistent.'] },
      { id: 'av19', level: 'challenge', marks: 3, prompt: 'The values 1, 2 and 3 have frequencies 2, 5 and 3. Find the standard deviation.', answer: 0.7,
        hint: 'SD = sqrt({Σfx^2|Σf} - ({Σfx|Σf})^2).', solution: ['Σf = 10, Σfx = 2 + 10 + 9 = 21, so the mean = 2.1.', 'Σfx^2 = 2 + 20 + 27 = 49, so {Σfx^2|Σf} = 4.9.', 'SD = sqrt(4.9 - 4.41) = sqrt(0.49) = 0.7.'] },
      { id: 'av20', level: 'challenge', marks: 3, prompt: 'Five numbers have a mean of 10 and a standard deviation of 3. Find the sum of the squares of the five numbers, Σx^2.', answer: 545,
        solution: ['SD^2 = {Σx^2|n} - mean^2.', '9 = {Σx^2|5} - 100, so {Σx^2|5} = 109.', 'Σx^2 = 545.'] }
    ],
    generators: [
      { id: 'median', level: 'foundation', make: function (r) {
        var n = r.pick([5, 7, 9]), vals = [], i;
        for (i = 0; i < n; i++) vals.push(r.int(2, 40));
        var sorted = vals.slice().sort(function (a, b) { return a - b; }), med = sorted[(n - 1) / 2];
        return { prompt: 'Find the median of ' + vals.join(', ') + '.', answer: med, hint: 'Put the numbers in order first.',
          solution: ['In order: ' + sorted.join(', ') + '.', 'The middle value is ' + med + '.'] };
      } },
      { id: 'freq-mean', level: 'standard', make: function (r) {
        var f, sum, n, values = [1, 2, 3, 4, 5], tries = 0, i;
        do {
          f = values.map(function () { return r.int(1, 9); });
          n = f.reduce(function (s, v) { return s + v; }, 0);
          sum = f.reduce(function (s, v, j) { return s + v * values[j]; }, 0);
          tries++;
        } while ((sum * 100) % n !== 0 && tries < 400);
        if ((sum * 100) % n !== 0) { f = [1, 2, 4, 2, 1]; n = 10; sum = 1 + 4 + 12 + 8 + 5; }
        var rows = values.map(function (v, j) { return v + ' (' + f[j] + ' students)'; }).join(', ');
        var terms = values.map(function (v, j) { return v + ' × ' + f[j]; }).join(' + ');
        return { prompt: 'The scores in a quiz were: score ' + rows + '. Find the mean score.', answer: sum / n,
          hint: 'Mean = Σfx ÷ Σf.', solution: ['Σf = ' + n + ' and Σfx = ' + terms + ' = ' + sum + '.', 'Mean = ' + sum + ' ÷ ' + n + ' = ' + sum / n + '.'] };
      } }
    ]
  });
})();
