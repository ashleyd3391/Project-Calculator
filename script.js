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
      sign.addEventListener("click", changeSign);
const percent = document.querySelector("#percent");
      percent.addEventListener("click", percentage);

const clear = document.querySelector("#clear");
      clear.addEventListener("click", reset);
const deleteNumber = document.querySelector("#delete");
      deleteNumber.addEventListener("click", undo);

//Values
let previousValue = "";
let currentValue = "";
let operator = "";
let operators = ["+","-","*","/" ];

//Loop between buttons to display their text content when clicked

    numberButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            updateNumber(e.target.textContent);
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

};

function addition() {
    let operator = "+";
    screen2.textContent = `${previousValue}` + operator + `${currentValue}` + "=";
    screen.textContent = (previousValue += currentValue);
};

function subtraction() {
    let operator = "-";
    screen2.textContent = `${previousValue}` + operator + (currentValue * -1) + "=";
    screen.textContent = (previousValue -= (currentValue * -1));

};

function multiplication(){
    let operator = "*";
    screen2.textContent = `${previousValue}` + operator + `${currentValue}` + "=";
    screen.textContent = (previousValue *= currentValue);
 
};

function division(){
    let operator = "/";
    screen2.textContent = `${previousValue}` + operator + `${currentValue}` + "=";
    screen.textContent = (previousValue /= currentValue);
};

function calculate(){
    previousValue = Number(screen2.textContent);
    currentValue = Number(screen.textContent);

    if(screen.textContent.includes("+")){

        addition();
    }
    
    else if(screen.textContent.includes("-")){

        subtraction();
    }

    else if(screen.textContent.includes("*")){

        multiplication();
    }


    else{

        division();
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

    

function changeSign(){


        if(Number(screen2.textContent) >= -1 || Number(screen.textContent) >= -1){
            currentValue = screen.textContent;
            screen2.textContent = (currentValue) * -1;
            currentValue = "";
            previousValue = Number(screen2.textContent);
            screen2.textContent = previousValue;
        }



        else if(Number(screen2.textContent) <= -1 || Number(screen.textContent) <= -1)
        
            {
                screen2.textContent = Number(screen2.textContent) * -1;
                previousValue = screen2.textContent;
                currentValue = "";
            }

            
};

function percentage(){
    previousValue = Number(screen.textContent);
    screen2.textContent = previousValue /= 100;
};

function undo(){
  
        screen.textContent = screen.textContent.slice(0, -1);
        previousValue = Number(screen.textContent);
        screen2.textContent = previousValue;
};



//Next Steps:
//  1. Fix multiplication error
//  2. Fix division error
//  3. Make delete button functional
//  4. Make percentage button functional
//  5. Make decimal button functional
//  6. Make sign button functional
