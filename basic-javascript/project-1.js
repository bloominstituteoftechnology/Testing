/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  if (num != null && !isNaN(num)) {
    return num * 10;
  } else {
    return 0;
  }
};

const subtractFive = num => {
  if (num === undefined) {
    return "please input a number";
  } else if (isNaN(num)) {
    return "please input a number, not a word";
  } else {
    return num - 5;
  }
};

const areSameLength = (str1, str2) => {
  if (typeof str1 === undefined || typeof str2 === undefined) {
    throw "You must input something to compare";
  } else {
    return str1.length === str2.length;
  }
};

const areEqual = (x, y) => {
  return x === y;
};

const lessThanNinety = num => {
  if (!isNaN(num)) {
    if (num < 90) {
      return true;
    } else {
      return false;
    }
  } else {
    throw "You must input a number";
  }
};

const greaterThanFifty = num => {
  if (!isNaN(num)) {
    if (num > 50) {
      return true;
    }
    return false;
  } else {
    throw "You must input a number";
  }
};

const add = (x, y) => {
  if (isNaN(x) || isNaN(y)) {
    throw "You can only add numbers";
  } else {
    return x + y;
  }
};

const subtract = (x, y) => {
  if(isNaN(x) || isNaN(y)){
    throw 'You can only subtract numbers'
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
  getRectangularPrismVolume
};
