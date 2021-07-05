/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  return num * 10 || 0;
};

const subtractFive = num => {
  return num - 5;
};

const areSameLength = (str1, str2) => {
  if (!str1 || !str2) return false;

  str1 = str1.toString();
  str2 = str2.toString();

  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  return x === y;
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

const add = (x = 0, y = 0) => {
  if (
    Number.isNaN(Number.parseFloat(x)) ||
    Number.isNaN(Number.parseFloat(y))
  ) {
    return 0;
  }
  return parseFloat(x) + parseFloat(y);
};

const subtract = (x = 0, y = 0) => {
  if (
    Number.isNaN(Number.parseFloat(x)) ||
    Number.isNaN(Number.parseFloat(y))
  ) {
    return 0;
  }
  return parseFloat(x) - parseFloat(y);
};

const divide = (x, y = 1) => {
  if (y === 0) {
    throw "Can't divide by zero";
  }
  return x / y;
};

const multiply = (x = 1, y = 1) => {
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
