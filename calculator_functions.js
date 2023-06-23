let arrOfNumAnsOper = [];

function number(value) {
    if (['+', '-', '*', '/', '='].includes(value)) {
        performOperation();
    } else {
        arrOfNumAnsOper.push(Number(value));
    }
}

function performOperation() {
    const operand1 = arrOfNumAnsOper[0];
    const operator = arrOfNumAnsOper[1];
    const operand2 = arrOfNumAnsOper[2];
    let result;

    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            result = 'Error';
            break;
    }

    arrOfNumAnsOper = [result];
    updateResult(result);
}

function updateResult(result) {
    const resultElement = document.querySelector('.result');
    resultElement.textContent = result;
}

