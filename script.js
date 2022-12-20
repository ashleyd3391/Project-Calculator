//Buttons
const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");

//Display
const screen = document.querySelector(".calcScreen");

//Operators
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const divide = document.querySelector("#divide")
const equal = document.querySelector("#equal");
const decimal = document.querySelector("#decimal");
const sign = document.querySelector("#sign");
const percent = document.querySelector("#percent");
const clear = document.querySelector("#clear");
const deleteNumber = document.querySelector("#delete");

//Values


//Loop between buttons to display their text content when clicked

numberButtons.forEach((button) =>
    button.addEventListener('click', () => screen.innerHTML = (button.textContent))
);

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => screen.innerHTML = (button.textContent))
);

clear.addEventListener("click", () => screen.innerHTML = "0");


equal.addEventListener("click", operate());