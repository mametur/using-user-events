// the tests are fine!
const getPartialStringTests = [
  { name: 'Test 1', args: ['tall', 4, 5], expected: '' },
  { name: 'Test 2', args: ['888()888', 1, 3], expected: '88(' },
  { name: 'Test 3', args: ['falling trees', 0, 4], expected: 'fall' },
  { name: 'Test 4', args: ['mangrove', 1, 5], expected: 'angro' },
  { name: 'Test 5', args: ['everafter', -1, 2], expected: 'r' },
  { name: 'Test 6', args: ['everafter', -1, 3], expected: 'r' },
  { name: 'Test 7', args: ['everafter', -2, 1], expected: 'e' },
  { name: 'Test 8', args: ['everafter', -3, 3], expected: 'ter' },
];

// fix the function
function getPartialString(str, beginIndex, endIndex) {
  if (beginIndex >= 0) {
    return str.substring(beginIndex, beginIndex + endIndex);
  }
  else {
    return str.substring(str.length + beginIndex, str.length + beginIndex + endIndex)
  }

}

testing(getPartialString, getPartialStringTests);
