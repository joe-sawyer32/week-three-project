// var calculator = document.querySelector("#calculator");
var buttonArray = document.querySelectorAll("#calculator>div");
// console.log(calculator);
// console.log(calcArray);
var display = document.querySelector(".display");

// var numDivs = calculator.querySelectorAll(".num");
// var opDivs = calculator.querySelectorAll(".operator");
// var decimal = calculator.querySelector(".decimalPoint");

var equationChars = [];
var theEquation = "";

// function extractEquationChars(selector) {
//   var array = calculator.querySelectorAll(selector);
//   for (let i = 0; i < array.length; i++) {
//     equationChars.push(array[i].textContent);
//   }
// }

// extractEquationChars(".num");
// extractEquationChars(".operator");
// extractEquationChars("#decimalPoint");

// var clear = document.querySelector(".clear").textContent;
// console.log(clear);
// var equal = document.querySelector(".evaluator").textContent;
// var display = document.querySelector(".display").textContent;

// function extractChar(element) {
//   var type = element.className;
//   if (type != "clear" && type != "display" && type != "evaluator") {
//     equationChars.push(element.textContent);
//   }
// }

// function addFunctionality(element) {
//   var type = element.className;
// }

// function toDisplay(string) {}

// *********************

function clearEquation() {
  theEquation = "";
  display.textContent = theEquation;
}

function calculate() {}

function addToEquation(char) {
  console.log(char);
  theEquation += char;
  console.log(theEquation);
  display.textContent = theEquation;
}

function setButton(element) {
  var buttonType = element.className;
  var buttonChar = element.textContent;
  if (buttonType == "clear") {
    element.addEventListener("click", clearEquation);
  } else if (buttonType == "evaluator") {
    element.addEventListener("click", calculate);
  } else {
    equationChars.push(buttonChar);
    element.addEventListener("click", function() {
      addToEquation(buttonChar);
    });
  }
}

for (let i = 0; i < buttonArray.length; i++) {
  var button = buttonArray[i];
  setButton(button);
  // extractChar(button);
  // addFunctionality(button);
  //   console.log(equationChars);
}

// setButtons(calcArray);
