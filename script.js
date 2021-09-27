//Calculator variables
let calcMem = 0;
let displayValue = '';
let displayNumValue;
let operatorChoice;
let calcMemPrev;
let equalPressed = 0;
let operatorPressed = 0;
let operatorActive = 0;
let memStorage = 0;

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
    if (operatorPressed > 0) {
        equalPressed = 0;
        operatorPressed = 0;
    }
    if (equalPressed > 0) {
        displayValue = operate(operatorChoice, displayNumValue, calcMemPrev);
    } else {
        calcMemPrev = parseFloat(displayValue);
        displayValue = operate(operatorChoice, calcMem, displayNumValue);
    }
    displayNumValue = parseFloat(displayValue)
    calcDisplay.textContent = parseFloat(displayValue.toFixed(9 - Math.floor(displayNumValue).toString().length));
    displayValue = ''
    equalPressed++
    operatorEnable()
    operatorActive = 0

}
const operatorEnable = function() {
    addBtn.disabled = false;
    divideBtn.disabled = false;
    multiplyBtn.disabled = false;
    subtractBtn.disabled = false;
    commaBtn.disabled = false;
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
const memCallBtn = document.querySelector('.memCall');
const onOffBtn = document.querySelector('.onOff');
const themeBtn = document.querySelector('.theme');

    //divs
const calcDisplay = document.querySelector('.display');

//Button onclick
clearBtn.onclick = function() {
    calcDisplay.textContent = "";
    calcMem = 0;
    displayValue = ''
    displayNumValue = 0;
    calcMemPrev = 0;
    equalPressed = 0;
    operatorEnable()
    operatorActive = 0
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
    if (operatorActive !== 1) {
        calcMem = displayNumValue;
        displayValue = '';
    }
    operatorChoice = 'add'
    operatorEnable();
    this.disabled = true
    operatorPressed++
    operatorActive = 1;
}
subtractBtn.onclick = function() {
    if (operatorActive !== 1) {
        calcMem = displayNumValue;
        displayValue = '';
    }
    operatorChoice = 'subtract'
    operatorEnable();
    this.disabled = true
    operatorPressed++
    operatorActive = 1;
}
divideBtn.onclick = function() {
    if (operatorActive !== 1) {
        calcMem = displayNumValue;
        displayValue = '';
    }
    operatorChoice = 'divide'
    operatorEnable();
    this.disabled = true
    operatorPressed++
    operatorActive = 1;
}
multiplyBtn.onclick = function() {
    if (operatorActive !== 1) {
        calcMem = displayNumValue;
        displayValue = '';
    }
    operatorChoice = 'multiply'
    operatorEnable();
    this.disabled = true
    operatorPressed++
    operatorActive = 1;
}
equalsBtn.onclick = calculate
memAddBtn.onclick = function() {
    memStorage += displayNumValue;
}
memSubtractBtn.onclick = function() {
    memStorage -= displayNumValue;
}
memClearBtn.onclick = function() {
    memStorage = 0;
}
memCallBtn.onclick = function() {
    displayNumValue = memStorage;
    calcDisplay.textContent = parseFloat(displayNumValue.toFixed(9 - Math.floor(displayNumValue).toString().length));
}