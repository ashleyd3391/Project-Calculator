//Buttons
const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");

//Display
const screen = document.querySelector(".calcScreen");
const screen2 = document.querySelector(".calcScreen2");

//Operators
const plus = document.querySelector("#plus");
      plus.addEventListener("click", handleOperator);

const minus = document.querySelector("#minus");
      minus.addEventListener("click", handleOperator);

const times = document.querySelector("#times");
      times.addEventListener("click", handleOperator);

const divide = document.querySelector("#divide");
      divide.addEventListener("click", handleOperator);

const equal = document.querySelector("#equal");
      equal.addEventListener("click", calculate);
      
const decimal = document.querySelector("#decimal");
const sign = document.querySelector("#sign");
const percent = document.querySelector("#percent");

const clear = document.querySelector("#clear");
      clear.addEventListener("click", reset);
const deleteNumber = document.querySelector("#delete");

//Values
let previousValue = "";
let currentValue = "";
let operator = "";
let operators = ["+","-","*","/" ];

//Loop between buttons to display their text content when clicked

    numberButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            updateNumber(e.target.textContent)
            previousValue = parseInt(screen.textContent);
        
        });
    });


    
        operatorButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                updateNumber(e.target.textContent);

            
                

               

            });
        });

function updateNumber(number){
    if(currentValue.length <= 5) {
        currentValue += number;
        screen.textContent = currentValue + " ";
    }
}


function handleOperator(operator) {
   
    screen2.textContent = previousValue;
    screen.textContent = currentValue;
    currentValue = "";


    
}


function calculate(){
    previousValue = parseInt(screen2.textContent);
    currentValue = parseInt(screen.textContent);

    
    if(screen.textContent.includes("+")){

        function addition() {
            let operator = "+";
            screen2.textContent = `${previousValue}` + operator + `${currentValue}` + "=";
            screen.textContent = (previousValue += currentValue);
        }

        addition();
    }
    
    else if(screen.textContent.includes("-")){

        function subtraction() {
            let operator = "-";
            screen2.textContent = `${previousValue}` + operator + (currentValue * -1) + "=";
            screen.textContent = (previousValue -= (currentValue * -1));

        }

        subtraction();
    }

    else if(screen.textContent.includes("*")){

        function multiplication() {
            let operator = "*";
            screen2.textContent = `${previousValue}` + operator + `${currentValue}` + "=";
            screen.textContent = (previousValue *= currentValue);

        }

        multiplication();
    }

   
        
    };



//Resets calculator
function reset(){
previousValue = "";
currentValue = "";
operator = ""
screen2.textContent = "0";
screen.textContent = "0";
};


//Next Steps:
//  1. Fix multiplication error
//  2. Fix division error
//  3. Make delete button functional
//  4. Make percentage button functional
//  5. Make decimal button functional
//  6. Make sign button functional
