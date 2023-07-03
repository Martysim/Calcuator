let arrOfNumAnsOper = [];

document.getElementById('clearButton').addEventListener('click', handleClear);
document.getElementById('negateButton').addEventListener('click', handleNegate);
document.getElementById('percentageButton').addEventListener('click', handlePercentage);
document.getElementById('divideButton').addEventListener('click', handleOperator);

document.getElementById('sevenButton').addEventListener('click', handleNumberClick);
document.getElementById('eightButton').addEventListener('click', handleNumberClick);
document.getElementById('nineButton').addEventListener('click', handleNumberClick);
document.getElementById('multiplyButton').addEventListener('click', handleOperatorClick);

document.getElementById('fourButton').addEventListener('click', handleNumberClick);
document.getElementById('fiveButton').addEventListener('click', handleNumberClick);
document.getElementById('sixButton').addEventListener('click', handleNumberClick);
document.getElementById('subtractButton').addEventListener('click', handleOperatorClick);

document.getElementById('oneButton').addEventListener('click', handleNumberClick);
document.getElementById('twoButton').addEventListener('click', handleNumberClick);
document.getElementById('threeButton').addEventListener('click', handleNumberClick);
document.getElementById('addButton').addEventListener('click', handleOperatorClick);

document.getElementById('zeroButton').addEventListener('click', handleNumberClick);
document.getElementById('decimalButton').addEventListener('click', decimal);
document.getElementById('equalsButton').addEventListener('click', performOperation);


function handleClear() {
    arrOfNumAnsOper = [];
    updateResult('');
};

function handleNegate() {
    if (arrOfNumAnsOper.length > 0) {
        const currentNumber = arrOfNumAnsOper[arrOfNumAnsOper.length - 1];
        updateResult(-currentNumber);
    };
};

function handlePercentage() {
    if (arrOfNumAnsOper.length > 0) {
        const currentNumber = arrOfNumAnsOper[arrOfNumAnsOper.length - 1];
        const percentage = currentNumber / 100;
        arrOfNumAnsOper[arrOfNumAnsOper.length - 1] = percentage;
        updateResult(percentage);
    };
};

function handleOperator(event) {
    if (arrOfNumAnsOper.length >= 3) {
        performOperation();
    };

    const operator = event.target.textContent;
    if (arrOfNumAnsOper.length === 1) {
        arrOfNumAnsOper.push(operator);
    };
};

function handleNumberClick(event) {

    const number = event.target.textContent;
    let lastElement = arrOfNumAnsOper[arrOfNumAnsOper.length - 1];
    if ((typeof lastElement === 'number') || (lastElement && lastElement.includes('.'))) {
        const lastNumber = lastElement;
        const newNumber = parseFloat(`${lastNumber}${number}`);
        arrOfNumAnsOper[arrOfNumAnsOper.length - 1] = newNumber;
        updateResult(newNumber);
    } else {
        arrOfNumAnsOper.push(Number(number));
        updateResult(number);
    };
};

function handleOperatorClick(event) {
    if (arrOfNumAnsOper.length >= 3) {
        performOperation();
    };

    const operator = event.target.textContent;
    arrOfNumAnsOper[1] = operator;
    console.log(arrOfNumAnsOper);
};

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
        case '×':
            result = operand1 * operand2;
            break;
        case '÷':
            result = operand1 / operand2;
            break;
        default:
            result = 'Error';
            break;
    };

    arrOfNumAnsOper = [result];
    updateResult(result);
};

function updateResult(result) {
    const resultElement = document.querySelector('.result');
    resultElement.textContent = result;
    console.log(arrOfNumAnsOper);

};

function decimal() {
    let lastItem = arrOfNumAnsOper[arrOfNumAnsOper.length - 1];

    if (typeof lastItem === 'number' && !Number.isInteger(lastItem)) {
        return;
    };

    arrOfNumAnsOper[arrOfNumAnsOper.length - 1] = `${lastItem}.`;
    updateResult(`${lastItem}.`);
};
