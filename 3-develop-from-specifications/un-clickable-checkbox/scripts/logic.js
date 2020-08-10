const tests = [
  { name: 'Test 1', args: [3, 5], expected: '3px,5px' },
  { name: 'Test 2', args: [333, 522], expected: '333px,522px' },
  { name: 'Test 3', args: [223, 335], expected: '223px,335px' },
  { name: 'Test 4', args: [1223, 903], expected: '1223px,903px' },

];

function coordinatesToStyle(x, y) {

  return `${x}px,${y}px`;
}

testing(coordinatesToStyle, tests);
