const tests = [
  { name: 'Test 1', args: [1, 1], expected: 'passing' },
  { name: 'Test 2', args: ['1', 1], expected: 'failing' },
  { name: 'Test 3', args: [1e2, 100], expected: 'passing' },
  { name: 'Test 4', args: [NaN, NaN], expected: 'failing' },
  { name: 'Test 5', args: [null, undefined], expected: 'failing' },
  { name: 'Test 6', args: [undefined, undefined], expected: 'passing' },
  { name: 'Test 7', args: [true, false], expected: 'failing' },
  { name: 'eighth', args: [false, true], expected: 'failing' },
  { name: 'ninth', args: [false, false], expected: 'passing' },
];

function compareThem(first, second) {

  return first === second ? 'passing' : 'failing';

}

testing(compareThem, tests);
