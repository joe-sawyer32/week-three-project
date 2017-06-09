// var calculator = document.querySelector("#calculator");
var calcArray = document.querySelectorAll("#calculator>div");
// console.log(calculator);
// console.log(calcArray);

// var numDivs = calculator.querySelectorAll(".num");
// var opDivs = calculator.querySelectorAll(".operator");
// var decimal = calculator.querySelector(".decimalPoint");

var equationChars = [];

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

function extractChar(element) {
  var type = element.className;
  if (type != "clear" && type != "display" && type != "evaluator") {
    equationChars.push(element.textContent);
  }
}

function addFunctionality(element) {
  var type = element.className;
}

function setButtons(array) {
  for (let i = 0; i < array.length; i++) {
    var button = array[i];
    extractChar(button);
    addFunctionality(button);
    console.log(equationChars);
  }
}

setButtons(calcArray);
