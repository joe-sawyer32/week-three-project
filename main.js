var buttonArray = document.querySelectorAll("#calculator>div");
var display = document.querySelector(".display");

var theEquation = "";
var decimalString = "";

// *********************

function clearEquation() {
  theEquation = "";
  display.textContent = theEquation;
}

function calculate() {
  var result;
  theEquation = result;
  display.textContent = theEquation;
}

function trimStrings(lastIndex) {
  theEquation = theEquation.substr(0, lastIndex);
  decimalString = decimalString.substr(0, lastIndex);
}

function addToStrings(char) {
  theEquation += char;
  if (char == "x" || char) decimalString += char;
  display.textContent = theEquation;
}

function canAddDecimal() {
  for (let i = 0; i < decimalString.length; i++) {
    if (decimalString[i] == ".") {
      return false;
    }
  }
}

function addToEquation(element) {
  var button = element;
  var buttonType = button.className;
  var thisChar = button.textContent;

  //   if (char == "-") {
  //     if (theEquation.length == 0) {
  //       theEquation += char;
  //     } else if (lastChar != "." && lastChar != "-") {
  //       theEquation += char;
  //     } else if (buttonType == "operator" && getpreviousChar(lastIndex, char)) {
  //       console.log(theEquation);
  //       theEquation = theEquation.substr(0, lastIndex);
  //       console.log(theEquation);
  //       theEquation += char;
  //     }

  //     display.textContent = theEquation;
  //   }

  if (theEquation.length == 0) {
    if (thisChar != "x" && thisChar != "/" && thisChar != "+") {
      addToStrings(thisChar);
    }
  } else {
    var lastIndex = theEquation.length - 1;
    var lastChar = theEquation[lastIndex];

    switch (lastChar) {
      case "+":
      case "x":
      case "/":
        if (buttonType == "num" || thisChar == "." || thisChar == "-") {
          addToStrings(thisChar);
        } else {
          trimStrings(lastIndex);
          addToStrings(thisChar);
        }
        break;
      case ".":
        if (buttonType == "num") {
          addToStrings(thisChar);
        }
        break;
      case "-":
        // if (buttonType == "num" || thisChar == "." || thisChar == "-") {
        //   addToStrings(thisChar);
        // } else {
        //   trimStrings(lastIndex);
        //   addToStrings(thisChar);
        // }
        break;
      default:
        if (thisChar == ".") {
          console.log("MADE IT THIS FAR");
          if (canAddDecimal()) {
            addToStrings(thisChar);
          }
        } else {
          addToStrings(thisChar);
        }
        break;
    }
  }
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
