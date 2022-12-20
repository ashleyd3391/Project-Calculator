//Buttons
const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");

//Display
const screen = document.querySelector(".calcScreen");
const screen2 = document.querySelector(".calcScreen2");

//Operators
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const divide = document.querySelector("#divide")
const equal = document.querySelector("#equal");
    equal.addEventListener("click", calculate);
const decimal = document.querySelector("#decimal");
const sign = document.querySelector("#sign");
const percent = document.querySelector("#percent");
const clear = document.querySelector("#clear");
const deleteNumber = document.querySelector("#delete");

//Values
let previousValue = "";
let currentValue = "";
let operator = "";

//Loop between buttons to display their text content when clicked

    numberButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            updateNumber(e.target.textContent)
            screen2.textContent = currentValue;
        
        });
    });


    
        operatorButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                updateNumber(e.target.textContent);
                screen2.textContent = previousValue + " " + operator;
                screen.textContent = currentValue;
            });
        });

function updateNumber(number){
    if(currentValue.length <= 5) {
        currentValue += number;
        screen.textContent = currentValue;
    }
}


function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = "";

}


function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    screen.textContent = previousValue += currentValue;
    
};



//Resets calculator
function reset(){
clear.addEventListener("click", () => screen.innerHTML = "0");
clear.addEventListener("click", () => screen2.innerHTML = "0");
};

reset();
