(function () {
  EMATH.registerTopic({
    id: 'mensuration', title: 'Perimeter, Area and Volume',
    strand: 'geometry', levels: [1, 2, 3],
    syllabusNote: 'Sec 1-3 (Math syllabus); this bank covers plane figures, circles, cuboids and cylinders (Sec 1), plus cones, spheres and sectors (Sec 3)',
    verified: false,
    objectives: [
      'Find the perimeter and area of rectangles, triangles, parallelograms, trapezia and circles.',
      'Find the area and perimeter of composite figures.',
      'Find the volume and surface area of cuboids and cylinders.',
      'Convert between units of length, area, volume and capacity.'
    ],
    explanation: [
      '**Perimeter** is the distance around a shape (a length). **Area** is the space inside (square units). **Volume** is the space inside a solid (cubic units). Always check that every length is in the same unit before you calculate.',
      { term: 'Areas', def: 'Rectangle: l × w. Triangle: {1|2} × base × height. Parallelogram: base × height. Trapezium: {1|2}(a + b)h. Circle: πr^2.' },
      { term: 'Circle', def: 'Circumference = 2πr = πd. A semicircle has perimeter πr + 2r (the curve plus the diameter).' },
      { term: 'Solids', def: 'Cuboid: V = l × w × h. Prism or cylinder: V = base area × height, so the cylinder has V = πr^2h. Curved surface area of a cylinder = 2πrh.' },
      { term: 'Unit conversion', def: 'Lengths: 1 m = 100 cm. Areas: 1 m^2 = 10 000 cm^2. Volumes: 1 m^3 = 1 000 000 cm^3. Capacity: 1 litre = 1 000 cm^3 = 1 000 ml.' },
      { term: 'Composite figures', def: 'Split into simple shapes, find each area, then add or subtract. For the perimeter, only count the outside edges.' }
    ],
    examples: [
      { title: 'A composite figure', question: 'A shape is a rectangle 12 cm by 8 cm with a semicircle of diameter 8 cm attached to one of the 8 cm sides. Find its area and perimeter, correct to 2 decimal places.',
        steps: ['Rectangle area = 12 × 8 = 96 cm^2.', 'Semicircle area = {1|2} × π × 4^2 = 25.13 cm^2 (radius 4).', 'Area = 96 + 25.13 = 121.13 cm^2.', 'Perimeter: 12 + 12 + 8 + the curve. The curve is half of 2π(4) = 12.57 cm. The 8 cm side where the semicircle is attached is not on the outside.', 'Perimeter = 32 + 12.57 = 44.57 cm.'],
        answer: 'Area 121.13 cm², perimeter 44.57 cm' },
      { title: 'Volume and capacity', question: 'A fish tank is 50 cm long, 30 cm wide and 40 cm high. How many litres of water does it hold when it is full?',
        steps: ['Volume = 50 × 30 × 40 = 60 000 cm^3.', '1 litre = 1 000 cm^3.', 'Capacity = 60 000 ÷ 1 000 = 60 litres.'], answer: '60 litres' },
      { title: 'Cylinder', question: 'A cylinder has radius 5 cm and height 12 cm. Find its volume, correct to 1 decimal place.',
        steps: ['V = πr^2h = π × 5^2 × 12 = 300π.', '300π = 942.477...', 'V = 942.5 cm^3 (1 d.p.).'], answer: '942.5 cm³' }
    ],
    mistakes: [
      'Using the slant side instead of the perpendicular height in a triangle, parallelogram or trapezium.',
      'Forgetting to halve for a triangle, a trapezium or a semicircle.',
      'Using the diameter in place of the radius in πr^2 or 2πr.',
      'Converting areas with 100 instead of 10 000 (cm^2 to m^2), or volumes with 1 000 instead of 1 000 000.',
      'Including the shared edge in the perimeter of a composite figure.'
    ],
    formulae: [
      { name: 'Area of a trapezium', text: '{1|2}(a + b)h' },
      { name: 'Circle', text: 'C = 2πr,  A = πr^2' },
      { name: 'Cylinder', text: 'V = πr^2h,  curved surface area = 2πrh' },
      { name: 'Cuboid surface area', text: '2(lw + lh + wh)' }
    ],
    summary: [
      'Use perpendicular heights and the same units throughout.',
      'Split composite figures into simple shapes; only outside edges count for perimeter.',
      'Prism and cylinder: volume = base area × height.',
      '1 litre = 1 000 cm^3; 1 m^2 = 10 000 cm^2; 1 m^3 = 1 000 000 cm^3.'
    ],
    viz: null,
    questions: [
      { id: 'me1', level: 'foundation', prompt: 'A rectangle is 14 cm long and 9 cm wide. Find its area.', answer: 126, unit: 'cm²', solution: ['Area = 14 × 9 = 126 cm^2.'] },
      { id: 'me2', level: 'foundation', prompt: 'A triangle has a base of 12 cm and a perpendicular height of 7 cm. Find its area.', answer: 42, unit: 'cm²', solution: ['Area = {1|2} × 12 × 7 = 42 cm^2.'] },
      { id: 'me3', level: 'foundation', prompt: 'A trapezium has parallel sides of 8 cm and 12 cm, and the distance between them is 5 cm. Find its area.', answer: 50, unit: 'cm²', solution: ['Area = {1|2}(8 + 12) × 5 = 50 cm^2.'] },
      { id: 'me4', level: 'foundation', prompt: 'A circle has radius 7 cm. Find its circumference, correct to 2 decimal places.', answer: 43.982297, dp: 2, unit: 'cm', solution: ['C = 2πr = 2 × π × 7 = 43.98 cm (2 d.p.).'] },
      { id: 'me5', level: 'foundation', prompt: 'A cuboid is 6 cm by 5 cm by 4 cm. Find its volume.', answer: 120, unit: 'cm³', solution: ['V = 6 × 5 × 4 = 120 cm^3.'] },
      { id: 'me6', level: 'foundation', prompt: 'Convert 2.5 m² to cm².', answer: 25000, unit: 'cm²', hint: '1 m^2 = 100 × 100 cm^2.', solution: ['1 m^2 = 10 000 cm^2.', '2.5 × 10 000 = 25 000 cm^2.'] },
      { id: 'me7', level: 'standard', prompt: 'A circle has radius 6 cm. Find its area, correct to 2 decimal places.', answer: 113.097336, dp: 2, unit: 'cm²', solution: ['A = π × 6^2 = 36π = 113.10 cm^2 (2 d.p.).'] },
      { id: 'me8', level: 'standard', prompt: 'A cylinder has radius 5 cm and height 12 cm. Find its volume, correct to 2 decimal places.', answer: 942.477796, dp: 2, unit: 'cm³', solution: ['V = π × 5^2 × 12 = 300π = 942.48 cm^3.'] },
      { id: 'me9', level: 'standard', prompt: 'A shape is made from a rectangle 12 cm by 8 cm and a semicircle of diameter 8 cm attached to one of the 8 cm sides.',
        parts: [{ label: '(a)', prompt: 'Find the area, correct to 2 decimal places.', answer: 121.132741, dp: 2, unit: 'cm²', marks: 3 }, { label: '(b)', prompt: 'Find the perimeter, correct to 2 decimal places.', answer: 44.566371, dp: 2, unit: 'cm', marks: 3 }],
        hint: 'The semicircle has radius 4 cm. The attached 8 cm side is not part of the outside.', solution: ['(a) 96 + {1|2} × π × 4^2 = 96 + 25.13 = 121.13 cm^2.', '(b) Curve = π × 4 = 12.57 cm. Perimeter = 12 + 12 + 8 + 12.57 = 44.57 cm.'] },
      { id: 'me10', level: 'standard', marks: 2, prompt: 'A rectangular tank is 50 cm by 30 cm by 40 cm. How many litres of water does it hold when full?', answer: 60, unit: 'litres',
        solution: ['V = 50 × 30 × 40 = 60 000 cm^3.', '60 000 ÷ 1 000 = 60 litres.'] },
      { id: 'me11', level: 'standard', prompt: 'A triangle has area 84 cm² and base 14 cm. Find its perpendicular height.', answer: 12, unit: 'cm', hint: 'Use Area = {1|2} × base × height.', solution: ['84 = {1|2} × 14 × h = 7h.', 'h = 12 cm.'] },
      { id: 'me12', level: 'standard', prompt: 'A cuboid has volume 360 cm³, length 10 cm and width 6 cm. Find its height.', answer: 6, unit: 'cm', solution: ['360 = 10 × 6 × h = 60h.', 'h = 6 cm.'] },
      { id: 'me13', level: 'standard', marks: 2, prompt: 'Find the total surface area of a cuboid 8 cm by 5 cm by 3 cm.', answer: 158, unit: 'cm²',
        solution: ['Faces: 2(8 × 5) + 2(8 × 3) + 2(5 × 3) = 80 + 48 + 30 = 158 cm^2.'] },
      { id: 'me14', level: 'standard', marks: 2, prompt: 'A cylindrical tin has radius 7 cm and height 10 cm. Find the area of its curved surface, correct to 2 decimal places.', answer: 439.822972, dp: 2, unit: 'cm²',
        solution: ['Curved surface area = 2πrh = 2 × π × 7 × 10 = 140π.', '= 439.82 cm^2 (2 d.p.).'] },
      { id: 'me15', level: 'challenge', marks: 4, prompt: 'A cuboid tank 80 cm by 50 cm by 60 cm is filled with water to {3|4} of its height. All the water is poured into an empty cylindrical bucket of radius 20 cm. Find the height of water in the bucket, correct to 1 decimal place.', answer: 143.239449, dp: 1, unit: 'cm',
        hint: 'The volume of water stays the same. Then use V = πr^2h for the bucket.', solution: ['Water height in the tank = {3|4} × 60 = 45 cm.', 'Volume = 80 × 50 × 45 = 180 000 cm^3.', 'In the bucket: π × 20^2 × h = 180 000, so h = 180 000 ÷ (400π) = 143.2 cm (1 d.p.).'] },
      { id: 'me16', level: 'challenge', marks: 3, prompt: 'A ring-shaped metal washer has outer radius 10 cm and inner radius 6 cm. Find the area of the metal, correct to 2 decimal places.', answer: 201.06193, dp: 2, unit: 'cm²',
        solution: ['Area = π × 10^2 - π × 6^2 = π(100 - 36) = 64π.', '= 201.06 cm^2 (2 d.p.).'] },

      // Sec 3 content: cones, spheres, sectors
      { id: 'me17', level: 'standard', prompt: 'A cone has base radius 6 cm and vertical height 8 cm.',
        parts: [{ label: '(a)', prompt: 'Find its slant height.', answer: 10, unit: 'cm', marks: 1 },
                { label: '(b)', prompt: 'Find its volume, correct to 2 decimal places.', answer: 96 * Math.PI, dp: 2, unit: 'cm³', marks: 2 },
                { label: '(c)', prompt: 'Find its curved surface area, correct to 2 decimal places.', answer: 60 * Math.PI, dp: 2, unit: 'cm²', marks: 2 }],
        hint: 'Volume = {1|3}πr^2h. Curved surface area = πrl.', solution: ['Slant height l = sqrt(6^2 + 8^2) = 10 cm.', 'V = {1|3} × π × 36 × 8 = 96π = 301.59 cm^3.', 'Curved surface area = π × 6 × 10 = 60π = 188.50 cm^2.'] },
      { id: 'me18', level: 'standard', prompt: 'A sphere has radius 9 cm.',
        parts: [{ label: '(a)', prompt: 'Find its volume, correct to 2 decimal places.', answer: 972 * Math.PI, dp: 2, unit: 'cm³', marks: 2 },
                { label: '(b)', prompt: 'Find its surface area, correct to 2 decimal places.', answer: 324 * Math.PI, dp: 2, unit: 'cm²', marks: 2 }],
        hint: 'V = {4|3}πr^3 and surface area = 4πr^2.', solution: ['V = {4|3} × π × 729 = 972π = 3 053.63 cm^3.', 'Surface area = 4 × π × 81 = 324π = 1 017.88 cm^2.'] },
      { id: 'me19', level: 'standard', prompt: 'A sector of a circle has radius 12 cm and angle 150°.',
        parts: [{ label: '(a)', prompt: 'Find the arc length, correct to 2 decimal places.', answer: 10 * Math.PI, dp: 2, unit: 'cm', marks: 2 },
                { label: '(b)', prompt: 'Find the area of the sector, correct to 2 decimal places.', answer: 60 * Math.PI, dp: 2, unit: 'cm²', marks: 2 }],
        hint: 'The sector is {150|360} of the whole circle.', solution: ['Arc length = {150|360} × 2π × 12 = 10π = 31.42 cm.', 'Area = {150|360} × π × 12^2 = 60π = 188.50 cm^2.'] },
      { id: 'me20', level: 'standard', prompt: 'A sector has radius 8 cm and angle 1.2 radians. Use arc length = rθ and sector area = {1|2}r^2θ.',
        parts: [{ label: '(a)', prompt: 'Find the arc length.', answer: 9.6, unit: 'cm', marks: 1 }, { label: '(b)', prompt: 'Find the area of the sector.', answer: 38.4, unit: 'cm²', marks: 2 }],
        solution: ['Arc length = 8 × 1.2 = 9.6 cm.', 'Area = {1|2} × 8^2 × 1.2 = 38.4 cm^2.'] },
      { id: 'me21', level: 'challenge', marks: 4, prompt: 'A solid is made of a cone on top of a hemisphere, both with radius 6 cm. The height of the cone is 8 cm. Find the volume of the solid, correct to 2 decimal places.', answer: 240 * Math.PI, dp: 2, unit: 'cm³',
        hint: 'Volume of a hemisphere = {2|3}πr^3.', solution: ['Hemisphere: {2|3} × π × 216 = 144π.', 'Cone: {1|3} × π × 36 × 8 = 96π.', 'Total = 240π = 753.98 cm^3.'] },
      { id: 'me22', level: 'challenge', marks: 4, prompt: 'A solid metal cone of radius 6 cm and height 8 cm is melted and recast into a solid sphere. Find the radius of the sphere, correct to 2 decimal places.', answer: Math.cbrt(72), dp: 2, unit: 'cm',
        solution: ['Volume of the cone = 96π.', '{4|3}πr^3 = 96π, so r^3 = 72.', 'r = 4.16 cm.'] },

      // Sec 4 style: composite solids and pyramids
      { id: 'me23', level: 'challenge', prompt: 'A solid is a hemisphere of radius 5 cm on top of a cylinder of radius 5 cm and height 10 cm.',
        parts: [{ label: '(a)', prompt: 'Find the total surface area, correct to 2 decimal places.', answer: 175 * Math.PI, dp: 2, unit: 'cm²', marks: 3 }, { label: '(b)', prompt: 'Find the volume, correct to 2 decimal places.', answer: (1000 / 3) * Math.PI, dp: 2, unit: 'cm³', marks: 3 }],
        hint: 'The surface is the curved part of the hemisphere, the curved part of the cylinder and the base circle.', solution: ['Hemisphere curved area = 2π × 25 = 50π. Cylinder curved area = 2π × 5 × 10 = 100π. Base = 25π.', 'Total = 175π = 549.78 cm^2.', 'Volume = {2|3}π × 125 + π × 25 × 10 = {250|3}π + 250π = {1000|3}π = 1 047.20 cm^3.'] },
      { id: 'me24', level: 'challenge', prompt: 'A pyramid has a square base of side 8 cm and a vertical height of 9 cm. The vertex is directly above the centre of the base.',
        parts: [{ label: '(a)', prompt: 'Find the volume. Volume of a pyramid = {1|3} × base area × height.', answer: 192, unit: 'cm³', marks: 2 }, { label: '(b)', prompt: 'Find the slant height of a triangular face (the height from the vertex to the midpoint of a base edge), correct to 2 decimal places.', answer: Math.sqrt(97), dp: 2, unit: 'cm', marks: 2 }],
        solution: ['V = {1|3} × 64 × 9 = 192 cm^3.', 'Slant height^2 = 9^2 + 4^2 = 97, so the slant height = 9.85 cm.'] }
    ],
    generators: [
      { id: 'rect-area', level: 'foundation', make: function (r) {
        var l = r.int(5, 20), w = r.int(3, 15);
        return { prompt: 'A rectangle is ' + l + ' cm long and ' + w + ' cm wide. Find its area.', answer: l * w, unit: 'cm²',
          hint: 'Area = length × width.', solution: ['Perimeter = 2(' + l + ' + ' + w + ') = ' + 2 * (l + w) + ' cm.', 'Area = ' + l + ' × ' + w + ' = ' + l * w + ' cm^2.'] };
      } },
      { id: 'cylinder-vol', level: 'standard', make: function (r) {
        var rad = r.int(2, 12), h = r.int(3, 20), v = Math.PI * rad * rad * h;
        return { prompt: 'A cylinder has radius ' + rad + ' cm and height ' + h + ' cm. Find its volume, correct to 2 decimal places.', answer: v, dp: 2, unit: 'cm³',
          hint: 'V = πr^2h.', solution: ['V = π × ' + rad + '^2 × ' + h + ' = ' + rad * rad * h + 'π.', '= ' + v.toFixed(2) + ' cm^3 (2 d.p.).'] };
      } }
    ]
  });
})();
