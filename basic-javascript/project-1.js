/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  if (typeof num !== "number" && typeof num !== "string") {
    return 0;
  }
  if (typeof num === "string" && num.match(/[a-zA-Z]/g)) {
    return 0;
  }
  return parseFloat(num) * 10 || 0;
};

const subtractFive = num => {
  if (typeof num !== "number" && typeof num !== "string") {
    return 0;
  }
  if (typeof num === "string" && num.match(/[a-zA-Z]/g)) {
    return 0;
  }
  return parseFloat(num, 10) - 5 || 0;
};

const areSameLength = (str1, str2) => {
  if (
    typeof str1 !== "number" &&
    typeof str1 !== "string" &&
    Array.isArray(str1) === false
  ) {
    return false;
  }
  if (
    typeof str2 !== "number" &&
    typeof str2 !== "string" &&
    Array.isArray(str2) === false
  ) {
    return false;
  }
  if (typeof str1 === "number" || Array.isArray(str1) === true) {
    str1 = str1.toString();
  }
  if (typeof str2 === "number" || Array.isArray(str2) === true) {
    str2 = str2.toString();
  }
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  return parseFloat(x, 10) === parseFloat(y, 10);
};

const lessThanNinety = num => {
  num = parseFloat(num, 10);
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
  return x + y;
};

const subtract = (x, y) => {
  return x - y;
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
