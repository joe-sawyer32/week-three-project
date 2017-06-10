var buttonArray = document.querySelectorAll("#calculator>div");
var display = document.querySelector(".display");

var theEquation = "";

// *********************

function clearEquation() {
  theEquation = "";
  display.textContent = theEquation;
}

function calculate() {}

function getPreviousChar(index, char) {
  let lastChar = theEquation[index];
  return (
    (lastChar == "x" ||
      lastChar == "/" ||
      lastChar == "-" ||
      lastChar == "+") &&
    char != "-"
  );
}

function addToEquation(element) {
  var button = element;
  var buttonType = button.className;
  var char = button.textContent;
  var lastIndex = theEquation.length - 1;
  var lastChar = theEquation[lastIndex];
  if (char == "-") {
    if (theEquation.length == 0) {
      theEquation += char;
    } else if ((lastChar != ".") && (lastChar != "-")) {
            theEquation += char;
        } else if (buttonType == "operator" && previousChar(lastIndex, char)) {
    console.log(theEquation);
    theEquation = theEquation.substr(0, lastIndex);
    console.log(theEquation);
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
  } else if (buttonType != "display") {
    button.addEventListener("click", function() {
      addToEquation(button);
    });
  }
}

for (let i = 0; i < buttonArray.length; i++) {
  var button = buttonArray[i];
  setButton(button);
}
