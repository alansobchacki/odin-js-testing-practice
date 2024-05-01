// A capitalize function that takes a string and returns it with the first character capitalized.
function capitalize(string) {
  if (typeof string === "number") {
    return `Error - ${string} is not a string.`;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

// A reverseString function that takes a string and returns it reversed.
function reverseString(string) {
  if (typeof string === "number") {
    return `Error - ${string} is not a string.`;
  }

  return string.split("").reverse().join("");
}

// A calculator object that contains functions for the basic operations:
// add, subtract, divide, and multiply.
// Each of these functions should take two numbers and return the correct calculation.

class Calculator {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }

  add() {
    return this.firstNumber + this.secondNumber;
  }

  subtract() {
    return this.firstNumber - this.secondNumber;
  }

  divide() {
    return this.firstNumber / this.secondNumber;
  }

  multiply() {
    return this.firstNumber * this.secondNumber;
  }
}

// A caesarCipher function that takes a string and a shift factor
// and returns it with each character “shifted”.
function caesarCipher(message, shiftValue) {
  let result = "";

  for (let i = 0; i < message.length; i += 1) {
    let char = message[i];

    if (char.match(/[a-z]/i)) {
      const code = message.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shiftValue) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shiftValue) % 26) + 97);
      }
    }

    result += char;
  }

  return result;
}

// An analyzeArray function that takes an array of numbers and returns
// an object with the following properties: average, min, max, and length.
function analyzeArray(array) {
  const highestNumber = Math.max(...array);
  const lowestNumber = Math.min(...array);
  const averageNumber = array.reduce((a, b) => a + b) / array.length;

  const object = {
    average: averageNumber,
    min: lowestNumber,
    max: highestNumber,
    length: array.length,
  };

  return object;
}

export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };
