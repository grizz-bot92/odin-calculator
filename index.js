let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let resetDisplay = false;

const calculator = document.getElementById('calculator');
const button = document.querySelectorAll('button'); 
const display = document.getElementById('display');

button.forEach(button => {
    button.addEventListener('click', event => {
        let buttonValue = event.target.value;
        if (!isNaN(buttonValue)) {
            if (display.textContent === '0' || resetDisplay) {
                display.textContent = buttonValue;
                resetDisplay = false;
            } else {
                display.textContent += buttonValue;
            }
        } else if (buttonValue === 'clear') {
            clearCalculator();
        } else if (buttonValue === '='){
            equals();
        } else{
            if (firstOperand === null){
                firstOperand = parseFloat(display.textContent);
            } else if (currentOperator) {
                calculateFunction();
            } 
            currentOperator = buttonValue;
            resetDisplay = true;
        }   
    });
});

const clearCalculator = () =>{
    display.textContent = '0';
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    resetDisplay = false;
};

const equals = () => {
    if(firstOperand !== null && currentOperator !== null){
        secondOperand = parseFloat(display.textContent);
        let result = operate(firstOperand, currentOperator, secondOperand);
        display.textContent = result;
        firstOperand = result;
        currentOperator = null;
        resetDisplay = true;

    };
};

const calculateFunction = () => {
    secondOperand = parseFloat(display.textContent);
    firstOperand = operate(firstOperand, currentOperator, secondOperand);
    display.textContent = firstOperand;
    currentOperator = null;

};


function operate(num1, operator, num2){
    switch(operator){
        case 'add':  
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply': 
            return num1 * num2;
        case 'divide':
            if(num2 === 0){
                return "WTF";
            } else{
                return num1 / num2;
            }
        default:
            return 'WTF';
        } 
};

