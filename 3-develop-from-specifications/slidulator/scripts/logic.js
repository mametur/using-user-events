const testMe = [
  { name: 'Test 1', args: ['add', 4, 5], expected: 9 },
  { name: 'Test 2', args: ['subtract', 4, 5], expected: -1 },
  { name: 'Test 3', args: ['multiply', 4, 5], expected: 20 },
  { name: 'Test 4', args: ['divide', 4, 5], expected: .8 },
  { name: 'Test 5', args: ['toad', 4, 5], expected: 'invalid operation' },
  { name: 'Test 6', args: ['', 4, 5], expected: 'invalid operation' },
];

function doMath(op, a, b) {

  const firstOperand = Number(a);
  const secondOperand = Number(b);
  let output = 0;
  switch (op) {
    case 'add':
      output = firstOperand + secondOperand;
      break;
    case 'subtract':
      output = firstOperand - secondOperand;
      break;
    case 'multiply':
      output = firstOperand * secondOperand;
      break;
    case 'divide':
      output = firstOperand / secondOperand;
      break;
    default:
      output = 'invalid operation';
      break;
  }
  return output;
}

testing(doMath, testMe);
