let result = "";
const calculator = document.getElementById('calculator');
const button = document.querySelectorAll('button'); 
const number = document.querySelectorAll('.operand');
const operator = document.querySelectorAll('.operator');
const display = document.getElementById('display');
let val = button.value;

number.forEach(number => {
    number.addEventListener('click', event =>{
        let value = event.target.value;
        if(display.textContent === '0'){
           display.textContent = value; 
        } else {
            display.textContent += value;;
        };
        
        
    });
});



function operate(num1, operator, num2){
    switch(operator){
        case 'add':  
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply': 
            return num1 * num2;
        case 'divide': 
            return num1 / num2;
    }
};

console.log(operate(7, 'add',6))

