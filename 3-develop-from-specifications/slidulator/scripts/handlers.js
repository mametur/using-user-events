function showResult(event) {

    const firstOperand = this.left.value;
    const secondOperand = this.right.value;
    const operator = this.operation.value;

    // call core logic

    const result = doMath(operator, firstOperand, secondOperand);

    // show result to user
    document.getElementById('program-output').innerHTML = `Result: ${result}`

    // developer friends

    console.log('firstOperand: ', typeof firstOperand, firstOperand);
    console.log('secondOperand', typeof secondOperand, secondOperand);
    console.log('operator ', typeof operator, operator);
    console.log('result', typeof result, result);


}