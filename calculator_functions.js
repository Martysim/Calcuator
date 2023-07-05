let arrOfNumAnsOper = [0];
const OPERATORS = {
    PLUS: "+",
    MINUS: "-",
    DOUBLE: "×",
    DIVISION: "÷"
};

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
    arrOfNumAnsOper = [0];
    updateResult('0');
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

        let result;
        const operator = arrOfNumAnsOper[1];
        switch (operator) {
            case OPERATORS.PLUS:
                arrOfNumAnsOper[0] += (arrOfNumAnsOper[0] * percentage);
                break;
            case OPERATORS.MINUS:
                arrOfNumAnsOper[0] -= (arrOfNumAnsOper[0] * percentage);
                break;
            case OPERATORS.DOUBLE:
                arrOfNumAnsOper[0] *= (arrOfNumAnsOper[0] * percentage);
                braak;
            case OPERATORS.DIVISION:
                arrOfNumAnsOper[0] /= (arrOfNumAnsOper[0] * percentage);
                break;
            default:
                arrOfNumAnsOper[arrOfNumAnsOper.length - 1] = percentage
        };
        result = arrOfNumAnsOper[0];
        arrOfNumAnsOper = [result]
        updateResult(arrOfNumAnsOper);
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
        case OPERATORS.PLUS:
            result = operand1 + operand2;
            break;
        case OPERATORS.MINUS:
            result = operand1 - operand2;
            break;
        case OPERATORS.DOUBLE:
            result = operand1 * operand2;
            break;
        case OPERATORS.DIVISION:
            result = operand1 / operand2;
            break;
        default:
            result = 'Error';
            break;
    };

    result = parseFloat(result.toFixed(2));
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

    if (lastItem === OPERATORS.PLUS ||
        lastItem === OPERATORS.MINUS ||
        lastItem === OPERATORS.DOUBLE ||
        lastItem === OPERATORS.DIVISION) {

        arrOfNumAnsOper[2] = "0";
        lastItem = 0;

    };

    arrOfNumAnsOper[arrOfNumAnsOper.length - 1] = `${lastItem}.`;
    updateResult(`${lastItem}.`);
};
