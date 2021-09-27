//Calculator variables
let calcMem = 0;
let displayValue = '';
let displayNumValue;
let operatorChoice;

//Calculator basic functions
const add = function(a, b) {
    return a + b;	
    };
    
const subtract = function(a, b) {
    return a - b;	
    };
const multiply = function(a, b) {
    return a * b;
}
const divide = function(a, b) {
    return a / b;
}

//Calculator Operations
const operate = function(operator, a, b) {
    if(operator == 'add') {
        return add(a, b);
    }
    if(operator == 'subtract') {
        return subtract(a, b);
    }
    if(operator == 'multiply') {
        return multiply(a, b);
    }
    if(operator == 'divide') {
        return divide(a, b);
    }
}
const calculate = function() {
    displayValue = operate(operatorChoice, calcMem, displayNumValue);
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
    calcMem = displayNumValue;
    displayValue = ''
}
const operatorEnable = function() {
    addBtn.disabled = false;
    divideBtn.disabled = false;
    multiplyBtn.disabled = false;
    subtractBtn.disabled = false;
}
//Element Selectors
    //buttons
const clearBtn = document.querySelector('.ce');
const oneBtn = document.querySelector('.one');
const twoBtn = document.querySelector('.two');
const threeBtn = document.querySelector('.three');
const fourBtn = document.querySelector('.four');
const fiveBtn = document.querySelector('.five');
const sixBtn = document.querySelector('.six');
const sevenBtn = document.querySelector('.seven');
const eightBtn = document.querySelector('.eight');
const nineBtn = document.querySelector('.nine');
const commaBtn = document.querySelector('.comma');
const zeroBtn = document.querySelector('.zero');
const equalsBtn = document.querySelector('.equals');
const multiplyBtn = document.querySelector('.multiply');
const subtractBtn = document.querySelector('.subtract');
const addBtn = document.querySelector('.add');
const divideBtn = document.querySelector('.divide');
const memClearBtn = document.querySelector('.memClear');
const memAddBtn = document.querySelector('.memAdd');
const memSubtractBtn = document.querySelector('.memSubtract');

    //divs
const calcDisplay = document.querySelector('.display');

//Button onclick
clearBtn.onclick = function() {
    calcDisplay.textContent = "";
    calcMem = 0;
    displayValue = ''
    displayNumValue = 0;
    }
oneBtn.onclick = function() {
    displayValue += '1'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
}
twoBtn.onclick = function() {
    displayValue += '2'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
}
threeBtn.onclick = function() {
    displayValue += '3'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
}
fourBtn.onclick = function() {
    displayValue += '4'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
}
fiveBtn.onclick = function() {
    displayValue += '5'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
}
sixBtn.onclick = function() {
    calcDisplay.textContent = displayValue;
    displayValue += '6'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
}
sevenBtn.onclick = function() {
    displayValue += '7'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
}
eightBtn.onclick = function() {
    displayValue += '8'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
}
nineBtn.onclick = function() {
    displayValue += '9'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
}
zeroBtn.onclick = function() {
    displayValue += '0'
    displayNumValue = parseFloat(displayValue)
    calcDisplay.textContent = displayNumValue;

}
commaBtn.onclick = function() {
    displayValue += '.'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
    commaBtn.disabled = true;
}
addBtn.onclick = function() {
    if (calcMem != 0) {
        calculate();
    } else {
    calcMem = displayNumValue;
    displayValue = '';
    }
    operatorChoice = 'add'
}
subtractBtn.onclick = function() {
    if (calcMem != 0) {
        calculate()
    } else {
    calcMem = displayNumValue;
    displayValue = '';
    }
    operatorChoice = 'subtract'
}
divideBtn.onclick = function() {
    if (calcMem != 0) {
        calcMem /= displayNumValue;
        calcDisplay.textContent = calcMem;
        displayValue = '';
    } else {
    calcMem = displayNumValue;
    displayValue = '';
    }
    operatorChoice = 'divide'
}
multiplyBtn.onclick = function() {
    if (calcMem != 0) {
        calcMem *= displayNumValue;
        calcDisplay.textContent = calcMem;
        displayValue = '';
    } else {
    calcMem = displayNumValue;
    displayValue = '';
    }
    operatorChoice = 'multiply'
}
equalsBtn.onclick = calculate