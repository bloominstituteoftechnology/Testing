/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  if (typeof num !== "number") {
    num = parseInt(num, 10);
    return num * 10;
  } else {
    return num * 10;
  }
};

const subtractFive = num => {
  if (isNaN(num)) {
    return "missing number";
  } else {
    return num - 5;
  }
};
const areSameLength = (str1, str2) => {
  if (str1 && str2) {
    return str1.length === str2.length;
  } else {
    return "missing one of the arguments";
  }
};

const areEqual = (x, y) => {
  if (typeof x === "object" || typeof y === "object") {
    for (let i = 0; i < y.length; i++) {
      if (x[i] !== y[i]) {
        return false;
      } else {
        return true;
      }
    }
  } else {
    return x === y;
  }
};

const lessThanNinety = num => {
  if (num < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = num => {
  if (num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  if (typeof x === "string" || typeof y === "string") {
    x = parseFloat(x);
    y = parseFloat(y);
    if (isNaN(x) || isNaN(y)) {
      return "Provide a number";
    } else {
      return x + y;
    }
  } else {
    return x + y;
  }
};
// finished up to here

const subtract = (x, y) => {
  if (typeof x === "string" || typeof y === "string") {
    x = parseFloat(x);
    y = parseFloat(y);
    if (isNaN(x) || isNaN(y)) {
      return "Provide a number";
    } else {
      return x - y;
    }
  } else {
    return x - y;
  }
};

const divide = (x, y) => {
  return x / y;
};

const multiply = (x, y) => {
  return x * y;
};

const getRemainder = (x, y) => {
  return x % y;
};

const isEven = num => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isOdd = num => {
  if (num % 2 === 0) {
    return false;
  }
  return true;
};

const square = num => {
  return num * num;
};

const cube = num => {
  return num * num * num;
};

const raiseToPower = (num, exponent) => {
  return num ** exponent;
};

const roundNumber = num => {
  return Math.round(num);
};

const roundUp = num => {
  return Math.ceil(num);
};

const addExclamationPoint = str => {
  return (str += "!");
};

const combineNames = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

const getGreeting = name => {
  return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
  return length * width;
};

const getTriangleArea = (base, height) => {
  return 0.5 * base * height;
};

const getCircleArea = radius => {
  return Math.PI * radius * radius;
};

const getRectangularPrismVolume = (length, width, height) => {
  return width * height * length;
};

module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume,
};
