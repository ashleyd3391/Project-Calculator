const numberButtons = document.querySelectorAll(".button");
const screen = document.querySelector(".calcScreen");
const plus = document.querySelector("#plus");
const num2 = 2


// Basic additon, subtraction, multiplication, and division functions 

function add (num1, num2){
    let addSum = num1 + num2;
    return addSum;
}

function subtract (num1, num2){
    let minusSum = num1 - num2;
    return minusSum;
}

function multiply (num1, num2){
    let timesSum = num1 * num2;
    return timesSum;
}

function divide (num1, num2){
    let divideSum = num1 / num2;
    return divideSum;
}

// Operate function takes operator and calls one of the above functions

function operate (num1, num2){
  
}

//Loop between buttons to display their text content when clicked

numberButtons.forEach((button) =>
  button.addEventListener('click', () => screen.innerHTML = (button.textContent))
)
