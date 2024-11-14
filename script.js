let display = document.getElementById('display');
let currentInput = '';

function inputDigit(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    display.innerText = currentInput;
}

function inputOperator(operator) {
    const lastChar = currentInput[currentInput.length - 1];
    if ('+-*/'.includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + operator;
    } else {
        currentInput += operator;
    }
    display.innerText = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    display.innerText = currentInput;
}

function deleteLastDigit() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0';
    }
    display.innerText = currentInput;
}

function resetCalculator() {
    currentInput = '0';
    display.innerText = currentInput;
}

let themeState = 0;

function setTheme(position) {
    themeState = position;
    updateTheme();
}

// function changeTheme() {
//     themeState = (themeState + 1) % 3;
//     updateTheme();
// }

function updateTheme() {
    if (themeState === 0) {
        document.body.className = 'theme-default';
    } else if (themeState === 1) {
        document.body.className = 'theme-middle';
    } else if (themeState === 2) {
        document.body.className = 'theme-right';
    }
}
