var buttonArray = document.querySelectorAll("#calculator>div");
var display = document.querySelector(".display");

var theEquation = "";

// *********************

function clearEquation() {
  theEquation = "";
  display.textContent = theEquation;
}

function calculate() {}

function addToEquation(element) {
  var button = element;
  var buttonType = button.className;
  if (buttonType == "operator") {
    //   if (theEquation.length > 0) {
    //     let lastIndex = theEquation.length - 1;
    //     let lastChar = theEquation[lastIndex];
    //     if (
    //       lastChar == "x" ||
    //       lastChar == "/" ||
    //       lastChar == "-" ||
    //       lastChar == "+"
    //     ) {
    //       theEquation = theEquation.substr(0, lastIndex);
    //     }
    //   }
  }
  theEquation += char;
  display.textContent = theEquation;
}

function setButton(element) {
  var button = element;
  var buttonType = button.className;
  if (buttonType == "clear") {
    button.addEventListener("click", clearEquation);
  } else if (buttonType == "evaluator") {
    button.addEventListener("click", calculate);
  } else {
    button.addEventListener("click", function() {
      addToEquation(button);
    });
  }
}

for (let i = 0; i < buttonArray.length; i++) {
  var button = buttonArray[i];
  setButton(button);
}
