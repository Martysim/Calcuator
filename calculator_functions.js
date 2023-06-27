let arrOfNumAnsOper = [];
// for in

const clearButton = document.getElementById('clearButton');//.getel
const negateButton = document.getElementById('negateButton');
const percentageButton = document.getElementById('percentageButton');
const divideButton = document.getElementById('divideButton');

const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');
const multiplyButton = document.getElementById('multiplyButton');

const fourButton = document.getElementById('fourButton');
const fiveButton = document.getElementById('fiveButton');
const sixButton = document.getElementById('sixButton');
const subtractButton = document.getElementById('subtractButton');

const oneButton = document.getElementById('oneButton');
const twoButton = document.getElementById('twoButton');
const threeButton = document.getElementById('threeButton');
const addButton = document.getElementById('addButton');

const zeroButton = document.getElementById('zeroButton');
const decimalButton = document.getElementById('decimalButton');
const equalsButton = document.getElementById('equalsButton');


clearButton.addEventListener('click', handleClear);
negateButton.addEventListener('click', handleNegate);
percentageButton.addEventListener('click', handlePercentage);
divideButton.addEventListener('click', handleOperator);

sevenButton.addEventListener('click', handleNumberClick);
eightButton.addEventListener('click', handleNumberClick);
nineButton.addEventListener('click', handleNumberClick);
multiplyButton.addEventListener('click', handleOperatorClick);

fourButton.addEventListener('click', handleNumberClick);
fiveButton.addEventListener('click', handleNumberClick);
sixButton.addEventListener('click', handleNumberClick);
subtractButton.addEventListener('click', handleOperatorClick);

oneButton.addEventListener('click', handleNumberClick);
twoButton.addEventListener('click', handleNumberClick);
threeButton.addEventListener('click', handleNumberClick);
addButton.addEventListener('click', handleOperatorClick);

zeroButton.addEventListener('click', handleNumberClick);
decimalButton.addEventListener('click', handleNumberClick);
equalsButton.addEventListener('click', handleEqualClick);
// ==?


function handleClear() {
    arrOfNumAnsOper = [];
    updateResult('');
};

function handleNegate() {
    if (arrOfNumAnsOper.length > 0) {
        const currentNumber = arrOfNumAnsOper[arrOfNumAnsOper.length - 1];
        arrOfNumAnsOper[arrOfNumAnsOper.length - 1] = -currentNumber;
        updateResult(arrOfNumAnsOper[arrOfNumAnsOper.length - 1]);
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

function handleOperator() {
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
    //
    if (typeof arrOfNumAnsOper[arrOfNumAnsOper.length - 1] === 'number') {
        const lastNumber = arrOfNumAnsOper[arrOfNumAnsOper.length - 1];
        const newNumber = Number(`${lastNumber}${number}`);
        arrOfNumAnsOper[arrOfNumAnsOper.length - 1] = newNumber;
        updateResult(newNumber);
    } else {
        arrOfNumAnsOper.push(Number(number));
        updateResult(number);
    }
    //
};



function handleOperatorClick(event) {
    if (arrOfNumAnsOper.length >= 3) {
        performOperation();
    };

    const operator = event.target.textContent;
    arrOfNumAnsOper.push(operator);
};
//pogledni
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
    };

    arrOfNumAnsOper = [result];
    updateResult(result);
};

function updateResult(result) {
    const resultElement = document.querySelector('.result');
    resultElement.textContent = result;
};

function handleEqualClick() {
    performOperation();
};

console.log(arrOfNumAnsOper);
