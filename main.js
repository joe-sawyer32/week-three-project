var buttonArray = document.querySelectorAll("#calculator>div");
var display = document.querySelector(".display");

var theEquation = "";
var decimalString = "";
var subCount = 0;

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
  console.log(theEquation);
  display.textContent = theEquation;
}

function updateDecimalString(char) {
  if (char == "") {
    decimalString = "";
  } else {
    decimalString += char;
  }
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
  }
}

function handleOperator(op) {
  if (decimalString.length == 0) {
    if (op.id == "sub") {
      addToEquation(op.textContent);
    } else {
      var lastChar = theEquation[length - 1];
      if (
        lastChar == "*" ||
        lastChar == "/" ||
        lastChar == "+" ||
        lastChar == "-"
      ) {
      }
    }
  } else {
    switch (decimalString[length - 1]) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        break;

      default:
        break;
    }
  }
}

// function trimStrings(lastIndex) {
//   theEquation = theEquation.substr(0, lastIndex);
//   decimalString = decimalString.substr(0, lastIndex);
// }

// function addToStrings(char) {
//   if (char == "-") {
//     subCount++;
//     console.log(subCount);
//     if (subCount > 2) {
//       return;
//     }
//   }
//   theEquation += char;
//   if (
//     char == "x" ||
//     char == "+" ||
//     char == "/" ||
//     (char == "-" && subCount == 1)
//   ) {
//     decimalString = "";
//   } else {
//     if (char != "-") {
//       subCount = 0;
//     }
//     decimalString += char;
//   }
//   display.textContent = theEquation;
// }

// function addToEquation(element) {
//   var button = element;
//   var buttonType = button.className;
//   var thisChar = button.textContent;

//   if (theEquation.length == 0) {
//     if (thisChar != "x" && thisChar != "/" && thisChar != "+") {
//       addToStrings(thisChar);
//     }
//   } else {
//     var lastIndex = theEquation.length - 1;
//     var lastChar = theEquation[lastIndex];

//     switch (lastChar) {
//       case "+":
//       case "x":
//       case "/":
//       case "-":
//         if (buttonType == "num" || thisChar == "." || thisChar == "-") {
//           addToStrings(thisChar);
//         } else {
//           trimStrings(lastIndex);
//           addToStrings(thisChar);
//         }
//         break;
//       case ".":
//         if (buttonType == "num") {
//           addToStrings(thisChar);
//         }
//         break;
//       default:
//         if (thisChar == ".") {
//           if (canAddDecimal()) {
//             addToStrings(thisChar);
//           }
//         } else {
//           addToStrings(thisChar);
//         }
//         break;
//     }
//   }
// }

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

for (let i = 0; i < buttonArray.length; i++) {
  var button = buttonArray[i];
  setButton(button);
}
