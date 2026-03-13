// GET ALL THE ELEMENTS FROM HTML
const screen = document.getElementById('screen');

const numbers = document.getElementsByClassName('number');
const operands = document.getElementsByClassName('operand');
const clear = document.getElementsByClassName('clear');
const equal = document.getElementsByClassName('equal');
const del = document.getElementsByClassName('delete');
const dot = document.getElementsByClassName('dot');

const [n1, n2, n3, n4, n5, n6, n7, n8, n9] = numbers;
const [plus, minus, multiply, divide, exponent, modulus] = operands;

// FUNCTIONS FOR CALCULATOR AND TO ADD VALUES TO THE SCREEN.
function addNumbers(number) {
    let value = screen.value;
    screen.value =  `${value}${number}`;
}

function addOperands(operator) {
    // ONE OPERAND AT A TIME.
    let expression = screen.value;
    let operators = ['+', '-', '/', '*', '**'];

    for (let operand of operators) {
        if (expression.includes(operand)) {
            alert('Invalid expression. You can only use one operand at a time.');
            return;
        }
    }

    expression = `${expression}${operator}`;
    screen.value = expression;
}

function clearScreen() {
    screen.value = '';
}

function deleteValue() {
    let value = screen.value;
    value = value.slice(0, (value.length - 1));
    screen.value = value;
}

function calculate() {
    let expression = screen.value;
    let calculation = eval(expression);

    screen.value = '';
    screen.value = calculation;
}