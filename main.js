var buttonArray = document.querySelectorAll("#calculator>div");
var display = document.querySelector(".display");

var theEquation;
var decimalString;

// *********************

function clearEquation() {
  theEquation = "";
  decimalString = "";
  display.textContent = theEquation;
}

function calculate() {
  var result;
  theEquation = result;
  display.textContent = theEquation;
}

function addToEquation(char) {
  theEquation += char;
  console.log("the equation after update: ", theEquation);
  display.textContent = theEquation;
}

function updateDecimalString(char) {
  if (char == "") {
    decimalString = "";
  } else {
    decimalString += char;
  }
  console.log("decimal string after update: ", decimalString);
}

function canAddDecimal() {
  for (let i = 0; i < decimalString.length; i++) {
    if (decimalString[i] == ".") {
      return false;
    }
  }
  return true;
}

function handleDecimal() {
  if (canAddDecimal()) {
    addToEquation(".");
    updateDecimalString(".");
  }
}

function operatorToReplace() {
  var lastIndex = theEquation.length - 1;
  var lastChar = theEquation[lastIndex];
  console.log("last char of equation: ", lastChar);
  if (
    lastChar == "x" ||
    lastChar == "/" ||
    lastChar == "+" ||
    lastChar == "-"
  ) {
    return true;
  } else {
    return false;
  }
}

function isDigitString(char) {
  if (
    char == "0" ||
    char == "1" ||
    char == "2" ||
    char == "3" ||
    char == "4" ||
    char == "5" ||
    char == "6" ||
    char == "7" ||
    char == "8" ||
    char == "9"
  ) {
    return true;
  } else {
    return false;
  }
}

function handleOperator(op) {
  console.log("decimal string on click: ", decimalString);
  console.log("decimal string length: ", decimalString.length);
  if (decimalString == "") {
    if (op.id == "sub") {
      updateDecimalString(op.textContent);
      addToEquation(op.textContent);
    } else if (operatorToReplace()) {
      theEquation = theEquation.substr(0, theEquation.length - 1);
      addToEquation(op.textContent);
    }
  } else {
    var lastIndex = decimalString.length - 1;
    var lastChar = decimalString[lastIndex];
    if (lastChar == ".") {
      updateDecimalString("0");
      addToEquation("0");
      addToEquation(op.textContent);
      updateDecimalString("");
    } else if (isDigitString(lastChar)) {
      addToEquation(op.textContent);
      updateDecimalString("");
    }
  }
}

function setButton(element) {
  var button = element;
  var buttonType = button.className;
  if (buttonType == "clear") {
    button.addEventListener("click", function() {
      clearEquation();
    });
  } else if (buttonType == "evaluator") {
    button.addEventListener("click", function() {
      calculate();
    });
  } else if (buttonType == "num") {
    button.addEventListener("click", function() {
      addToEquation(button.textContent);
      updateDecimalString(button.textContent);
    });
  } else if (buttonType == "decimalPoint") {
    button.addEventListener("click", function() {
      handleDecimal();
    });
  } else if (buttonType == "operator") {
    button.addEventListener("click", function() {
      handleOperator(button);
    });
  }
}

clearEquation();
for (let i = 0; i < buttonArray.length; i++) {
  var button = buttonArray[i];
  setButton(button);
}
