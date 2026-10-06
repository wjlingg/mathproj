(function () {
  EMATH.registerTopic({
    id: 'cumulative-frequency', title: 'Cumulative Frequency and Box Plots',
    strand: 'stats-prob', levels: [3, 4],
    syllabusNote: 'O-Level syllabus S1.11-1.16 (Sec 3/4). Values read from graphs are given in the question.',
    verified: true,
    objectives: [
      'Read the median, quartiles, interquartile range and percentiles from a cumulative frequency curve.',
      'Read a box-and-whisker plot and use the quartiles to count and compare data.',
      'Estimate the mean and standard deviation from grouped data.',
      'Compare data sets using a measure of centre and a measure of spread, and spot misleading graphs.'
    ],
    explanation: [
      'Because the papers show curves and plots, the questions here **give you the values you would read from the graph**. The skill is knowing which values to use and what they mean.',
      { term: 'Quartiles on a cumulative frequency curve', def: 'For n values, the lower quartile Q1 is at cumulative frequency {n|4}, the median at {n|2} and the upper quartile Q3 at {3n|4}. Read across from the cumulative frequency axis to the curve, then down to the horizontal axis.' },
      { term: 'Interquartile range and range', def: 'IQR = Q3 - Q1 (the spread of the middle half). Range = largest - smallest. The IQR is not affected by extreme values.' },
      { term: 'Box plot', def: 'The box runs from Q1 to Q3 with a line at the median, and the whiskers go to the smallest and largest values. A quarter of the data lies in each section: below Q1, Q1 to the median, the median to Q3, and above Q3.' },
      { term: 'Percentiles', def: 'The 90th percentile is the value below which 90% of the data lie, read at cumulative frequency 0.9n. A percentage above a value = 100% - the percentage below.' },
      { term: 'Grouped data', def: 'Use the midpoint of each class. Mean = {Σfx|Σf}. Standard deviation = sqrt({Σfx^2|Σf} - mean^2). A smaller standard deviation means the data are more consistent.' },
      { term: 'Comparing', def: 'Compare a measure of centre (median or mean) **and** a measure of spread (IQR or standard deviation), and say what they mean in the situation.' }
    ],
    examples: [
      { title: 'Reading a curve', question: 'A cumulative frequency curve shows the ages of 120 residents. The curve passes through (66, 30), (71, 60) and (75, 90). Estimate the median age and the interquartile range.',
        steps: ['n = 120, so Q1 is at cumulative frequency 30, the median at 60 and Q3 at 90.', 'Median = 71, Q1 = 66 and Q3 = 75.', 'IQR = 75 - 66 = 9 years.'], answer: 'median 71, IQR 9' },
      { title: 'Box plot counts', question: 'A box plot for 80 students has minimum 12, Q1 = 20, median 26, Q3 = 35 and maximum 52. How many students scored at most 35?',
        steps: ['35 is the upper quartile, which is the value with 75% of the data at or below it.', '75% of 80 = 60 students.'], answer: '60 students' },
      { title: 'Grouped mean and standard deviation', question: 'The times of 50 runners: 10 < t ≤ 20: 6 runners, 20 < t ≤ 30: 14, 30 < t ≤ 40: 18, 40 < t ≤ 50: 12. Estimate the mean and standard deviation.',
        steps: ['Midpoints: 15, 25, 35, 45.', 'Σfx = 6 × 15 + 14 × 25 + 18 × 35 + 12 × 45 = 1 610, so mean = 1 610 ÷ 50 = 32.2.', 'Σfx^2 = 6 × 225 + 14 × 625 + 18 × 1225 + 12 × 2025 = 1 350 + 8 750 + 22 050 + 24 300 = 56 450.', 'SD = sqrt(1129 - 1036.84) = sqrt(92.16) = 9.6.'], answer: 'mean 32.2, SD 9.6' }
    ],
    mistakes: [
      'Reading the median at the wrong cumulative frequency, such as at the total instead of half the total.',
      'Giving Q3 instead of the IQR, or the median instead of the range.',
      'Using the class boundaries instead of the midpoints for grouped data.',
      'Comparing only the averages and ignoring the spread.',
      'Saying "most of the data are small" from a histogram with a misleading axis. Check the scale.'
    ],
    formulae: [
      { name: 'Quartile positions', text: 'Q1 at {n|4},  median at {n|2},  Q3 at {3n|4}' },
      { name: 'Interquartile range', text: 'IQR = Q3 - Q1' },
      { name: 'Standard deviation', text: 'sqrt({Σfx^2|Σf} - mean^2)' }
    ],
    summary: [
      'Read quartiles at {n|4}, {n|2} and {3n|4} on the cumulative frequency axis.',
      'IQR = Q3 - Q1; each section of a box plot holds a quarter of the data.',
      'Grouped data: midpoints give estimates of the mean and standard deviation.',
      'Compare both the centre and the spread, and watch for misleading scales.'
    ],
    viz: null,
    questions: [
      { id: 'cf2', level: 'foundation', prompt: 'For the same box plot, find the interquartile range.', answer: 15, solution: ['IQR = 35 - 20 = 15.'] },
      { id: 'cf3', level: 'foundation', prompt: 'On a cumulative frequency curve for 80 values, at what cumulative frequency is the median read?', answer: 40, solution: ['The median is at {80|2} = 40.'] },
      { id: 'cf4', level: 'foundation', type: 'mcq', prompt: 'What percentage of the data lies below the upper quartile?', options: ['25%', '50%', '75%', '100%'], answer: 2, solution: ['The upper quartile has 75% of the data below it.'] },
      { id: 'cf5', level: 'foundation', prompt: 'Frequencies for the classes 0 < x ≤ 10, 10 < x ≤ 20 and 20 < x ≤ 30 are 5, 12 and 20. Find the cumulative frequency at x = 20.', answer: 17, solution: ['5 + 12 = 17.'] },
      { id: 'cf7', level: 'standard', prompt: 'A box plot for 80 students shows minimum 12, Q1 = 20, median 26, Q3 = 35 and maximum 52.',
        parts: [{ label: '(a)', prompt: 'How many students scored at most 35?', answer: 60, marks: 2 }, { label: '(b)', prompt: 'How many students scored between the median and the upper quartile?', answer: 20, marks: 1 }, { label: '(c)', prompt: 'How many students scored more than 20?', answer: 60, marks: 1 }],
        solution: ['35 is Q3, so 75% of 80 = 60 students scored at most 35.', 'Between the median and Q3 is a quarter of the data: 20 students.', 'More than Q1 = 20 means the top 75%: 60 students.'] },
      { id: 'cf8', level: 'standard', prompt: 'A cumulative frequency curve shows the ages of 120 elderly residents. It passes through (66, 30), (71, 60) and (75, 90), and also through (64, 24).',
        parts: [{ label: '(a)', prompt: 'Find the median age.', answer: 71, marks: 1 }, { label: '(b)', prompt: 'Find the interquartile range.', answer: 9, marks: 2 }, { label: '(c)', prompt: 'What percentage of the residents are aged 64 or older?', answer: 80, unit: '%', marks: 2 }],
        solution: ['Median = age at cumulative frequency 60 = 71.', 'Q1 = 66 (CF 30) and Q3 = 75 (CF 90), so IQR = 9.', '24 are younger than 64, so 120 - 24 = 96 are 64 or older. {96|120} = 80%.'] },
      { id: 'cf9', level: 'standard', marks: 2, prompt: 'From a cumulative frequency curve, the 10th percentile is 60 and the 90th percentile is 80. Find the range of ages of the middle 80% of the data.', answer: 20,
        solution: ['80 - 60 = 20.'] },
      { id: 'cf10', level: 'standard', marks: 2, type: 'mcq', prompt: 'Class A has median 62 and interquartile range 8. Class B has median 58 and interquartile range 20. Which class has the more consistent marks?', options: ['Class A', 'Class B'], answer: 0,
        solution: ['A smaller interquartile range means the middle half of the marks is closer together, so Class A is more consistent.'] },
      { id: 'cf11', level: 'standard', prompt: 'The times of 40 runners are grouped: 0 < t ≤ 10 (4 runners), 10 < t ≤ 20 (11), 20 < t ≤ 30 (15), 30 < t ≤ 40 (10).',
        parts: [{ label: '(a)', prompt: 'The median time is in the class with which upper limit?', answer: 30, marks: 1 }, { label: '(b)', prompt: 'How many runners took more than 30 minutes?', answer: 10, marks: 1 }, { label: '(c)', prompt: 'What percentage of the runners took more than 30 minutes?', answer: 25, unit: '%', marks: 1 }],
        solution: ['Cumulative frequencies: 4, 15, 30, 40. The 20th and 21st values are in the class 20 < t ≤ 30.', '10 runners took more than 30 minutes.', '{10|40} = 25%.'] },
      { id: 'cf12', level: 'standard', prompt: 'The times of 50 runners: 10 < t ≤ 20 (6 runners), 20 < t ≤ 30 (14), 30 < t ≤ 40 (18), 40 < t ≤ 50 (12).',
        parts: [{ label: '(a)', prompt: 'Estimate the mean time.', answer: 32.2, marks: 2 }, { label: '(b)', prompt: 'Estimate the standard deviation.', answer: 9.6, marks: 2 }],
        hint: 'Use the midpoints 15, 25, 35, 45.', solution: ['Σfx = 90 + 350 + 630 + 540 = 1 610, so mean = 32.2.', 'Σfx^2 = 1 350 + 8 750 + 22 050 + 24 300 = 56 450, so {Σfx^2|Σf} = 1 129.', 'SD = sqrt(1129 - 32.2^2) = sqrt(92.16) = 9.6.'] },
      { id: 'cf14', level: 'standard', marks: 2, type: 'mcq', prompt: 'A bar chart of the number of students studying in a library over 3 years has a vertical axis that starts at 400 instead of 0. Why is this misleading?', options: ['Differences between the bars look much bigger than they are', 'The bars look smaller than they are', 'The years are in the wrong order', 'It hides the units'], answer: 0,
        solution: ['Starting the axis at 400 cuts off the bottom of the bars, so small differences look like large changes.'] },
      { id: 'cf15', level: 'standard', prompt: 'A histogram shows the times taken by 100 participants in a challenge: 0-2 min (10), 2-4 min (25), 4-6 min (40), 6-8 min (20) and 8-10 min (5). A participant who takes at most 4 minutes is a fast finisher.',
        parts: [{ label: '(a)', prompt: 'Find the probability that a participant chosen at random is a fast finisher.', answer: '7/20', marks: 1 },
                { label: '(b)', prompt: 'Two participants are chosen at random. Find the probability that both are fast finishers.', answer: '119/990', marks: 2 },
                { label: '(c)', prompt: 'Three participants are chosen at random. Find the probability that at least one is a fast finisher, correct to 3 significant figures.', answer: 1 - (65 * 64 * 63) / (100 * 99 * 98), sf: 3, marks: 2 }],
        solution: ['Fast finishers = 10 + 25 = 35, so P = {35|100} = {7|20}.', 'P(both) = {35|100} × {34|99} = {1190|9900} = {119|990}.', 'P(none) = {65|100} × {64|99} × {63|98} = 0.2701, so P(at least one) = 1 - 0.2701 = 0.730.'] },
      { id: 'cf16', level: 'challenge', marks: 2, type: 'mcq', prompt: 'A weighing scale was found to read 2 kg too high for every student. After the readings are corrected, what happens to the median and the interquartile range?', options: ['The median decreases by 2 and the IQR is unchanged', 'Both decrease by 2', 'The median is unchanged and the IQR decreases by 2', 'Both are unchanged'], answer: 0,
        solution: ['Subtracting 2 from every value shifts all quartiles down by 2.', 'The median decreases by 2, but Q3 - Q1 stays the same.'] }
    ],
    generators: [
      { id: 'iqr', level: 'foundation', make: function (r) {
        var q1 = r.int(10, 40), q3 = q1 + r.int(6, 30), med = Math.round((q1 + q3) / 2);
        return { prompt: 'In a box plot, the lower quartile is ' + q1 + ', the median is ' + med + ' and the upper quartile is ' + q3 + '. Find the interquartile range.', answer: q3 - q1,
          hint: 'IQR = Q3 - Q1.', solution: ['IQR = ' + q3 + ' - ' + q1 + ' = ' + (q3 - q1) + '.'] };
      } },
      { id: 'quartile-count', level: 'standard', make: function (r) {
        var n = 4 * r.int(8, 30), q3 = r.int(40, 90);
        return { prompt: 'The marks of ' + n + ' students are shown in a box plot. The upper quartile is ' + q3 + ' marks. How many students scored more than ' + q3 + ' marks?', answer: n / 4,
          hint: 'A quarter of the data lies above the upper quartile.', solution: ['{' + n + '|4} = ' + n / 4 + ' students.'] };
      } }
    ]
  });
})();
