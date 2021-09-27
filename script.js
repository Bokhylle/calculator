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
let multActive = 0;
let addActive = 0;
let subActive = 0;
let divideActive = 0;
let multiPressMem = 0;
let decimalPlacesVar;

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
const chooseDecimalPos = function() {
    let length = Math.floor(displayNumValue).toString().length;
    if(length > 8) {
        decimalPlacesVar = 8;
    } else {
        decimalPlacesVar = length + 1
    }
    let roundingNo = 1000000000;
    for (let i = 0; i < decimalPlacesVar; i++) {
        roundingNo /= 10
    }
    return roundingNo;
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
    let displayVar = (Math.round(displayNumValue * chooseDecimalPos()) / chooseDecimalPos())
    calcDisplay.textContent = displayVar
    displayValue = ''
    equalPressed++
    operatorEnable()
    multiPress();
    operatorActive = 0
    multiPressMem = 0;

}
const multiPressCalculate = function() {
    displayValue = operate(operatorChoice, calcMem, multiPressMem);
    displayNumValue = parseFloat(displayValue)
    let displayVar = (Math.round(displayNumValue * chooseDecimalPos()) / chooseDecimalPos())
    calcDisplay.textContent = displayVar
    displayValue = '';
}
const operatorEnable = function() {
    addBtn.disabled = false;
    divideBtn.disabled = false;
    multiplyBtn.disabled = false;
    subtractBtn.disabled = false;
    commaBtn.disabled = false;
}
const multiPress = function() {
    multActive = 0;
    addActive = 0;
    subActive = 0;
    divideActive = 0;
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
const invertBtn = document.querySelector('.invert');

    //divs
const calcDisplay = document.querySelector('.numberDisp');

//Button onclick
clearBtn.onclick = function() {
    calcDisplay.textContent = "";
    calcMem = 0;
    displayValue = ''
    displayNumValue = 0;
    calcMemPrev = 0;
    equalPressed = 0;
    operatorEnable()
    operatorActive = 0;
    multiPressMem = 0;
    decimalPlacesVar = 0
    multiPress()
    }
oneBtn.onclick = function() {
    //     if (calcDisplay.textContent.length >= 9 && operatorActive == 0) {
    //     return
    // }
    // Functionality if digit limit is needed
    displayValue += '1'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
}
twoBtn.onclick = function() {
    //     if (calcDisplay.textContent.length >= 9 && operatorActive == 0) {
    //     return
    // }
    // Functionality if digit limit is needed
    displayValue += '2'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
}
threeBtn.onclick = function() {
    //     if (calcDisplay.textContent.length >= 9 && operatorActive == 0) {
    //     return
    // }
    // Functionality if digit limit is needed
    displayValue += '3'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
}
fourBtn.onclick = function() {
    //     if (calcDisplay.textContent.length >= 9 && operatorActive == 0) {
    //     return
    // }
    // Functionality if digit limit is needed
    displayValue += '4'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
}
fiveBtn.onclick = function() {
    //     if (calcDisplay.textContent.length >= 9 && operatorActive == 0) {
    //     return
    // }
    // Functionality if digit limit is needed
    displayValue += '5'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
}
sixBtn.onclick = function() {
    // if (calcDisplay.textContent.length >= 9 && operatorActive == 0) {
    //     return
    // }
    // Functionality if digit limit is needed
    displayValue += '6'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
}
sevenBtn.onclick = function() {
    //     if (calcDisplay.textContent.length >= 9 && operatorActive == 0) {
    //     return
    // }
    // Functionality if digit limit is needed
    displayValue += '7'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
}
eightBtn.onclick = function() {
    //     if (calcDisplay.textContent.length >= 9 && operatorActive == 0) {
    //     return
    // }
    // Functionality if digit limit is needed
    displayValue += '8'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
}
nineBtn.onclick = function() {
    //     if (calcDisplay.textContent.length >= 9 && operatorActive == 0) {
    //     return
    // }
    // Functionality if digit limit is needed
    displayValue += '9'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
}
zeroBtn.onclick = function() {
    //     if (calcDisplay.textContent.length >= 9 && operatorActive == 0) {
    //     return
    // }
    // Functionality if digit limit is needed
    displayValue += '0'
    displayNumValue = parseFloat(displayValue)
    calcDisplay.textContent = displayNumValue;

}
commaBtn.onclick = function() {
    //     if (calcDisplay.textContent.length >= 9 && operatorActive == 0) {
    //     return
    // }
    // Functionality if digit limit is needed
    displayValue += '.'
    calcDisplay.textContent = displayValue;
    displayNumValue = parseFloat(displayValue)
    commaBtn.disabled = true;
}
addBtn.onclick = function() {
    if (addActive == 1) {
        multiPressMem = displayNumValue;
        multiPressCalculate()
        addActive = 2;
        calcMem = displayNumValue
        return;
    }
    if(addActive == 2){
        multiPressCalculate()
        calcMem = displayNumValue
        return;
    }
    if (operatorActive == 1) {
        if(subActive > 1 || divideActive > 1 || multActive > 1) {
            multiPressCalculate()
            multiPress()
            addActive = 1;
        } else {
            calculate();
        }
    }
    calcMem = displayNumValue;
    displayValue = '';
    operatorChoice = 'add'
    operatorEnable();
    multiPress()
    addActive = 1;
    operatorPressed++
    operatorActive = 1;
}
subtractBtn.onclick = function() {
    if (subActive == 1) {
        multiPressMem = displayNumValue;
        multiPressCalculate()
        subActive = 2;
        calcMem = displayNumValue
        return;
    }
    if(subActive == 2){
        multiPressCalculate()
        calcMem = displayNumValue
        return;
    }
    if (operatorActive == 1 ) {
        if(addActive > 1 || divideActive > 1 || multActive > 1) {
            multiPressCalculate()
            multiPress()
            subActive = 1;
        } else {
            calculate();
        }
    }  
    calcMem = displayNumValue;
    displayValue = '';
    operatorChoice = 'subtract'
    operatorEnable();
    subActive = 1;
    operatorPressed++
    operatorActive = 1;
}
divideBtn.onclick = function() {
    if (divideActive == 1) {
        multiPressMem = displayNumValue;
        multiPressCalculate()
        divideActive = 2;
        calcMem = displayNumValue
        return;
    }
    if(divideActive == 2){
        multiPressCalculate()
        calcMem = displayNumValue
        return;
    }
    if (operatorActive == 1) {
        if(addActive > 1 || subActive > 1 || multActive > 1) {
            multiPressCalculate()
            multiPress()
            divideActive = 1;
        } else {
            calculate();
        }
    }
    calcMem = displayNumValue;
    displayValue = '';
    operatorChoice = 'divide'
    operatorEnable();
    divideActive = 1;
    operatorPressed++
    operatorActive = 1;
}
multiplyBtn.onclick = function() {
    if (multActive == 1) {
        multiPressMem = displayNumValue;
        multiPressCalculate()
        multActive = 2;
        calcMem = displayNumValue
        return;
    }
    if(multActive == 2){
        multiPressCalculate()
        calcMem = displayNumValue
        return;
    }
    if (operatorActive == 1) {
        if(addActive > 1 || divideActive > 1 || subActive > 1) {
            multiPressCalculate()
            multiPress()
            multActive = 1;
        } else {
            calculate();
        }
    }
    calcMem = displayNumValue;
    displayValue = '';
    operatorChoice = 'multiply'
    operatorEnable();
    multActive = 1;
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
// invertBtn.onclick = function() {

// }