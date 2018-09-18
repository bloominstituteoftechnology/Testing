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
  num = parseFloat(num, 10);
  if (num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  return parseFloat(x, 10) + parseFloat(y, 10);
};

const subtract = (x, y) => {
  return parseFloat(x, 10) - parseFloat(y, 10);
};

const divide = (x, y) => {
  return parseFloat(x, 10) / parseFloat(y, 10);
};

const multiply = (x, y) => {
  return parseFloat(x, 10) * parseFloat(y, 10);
};

const getRemainder = (x, y) => {
  return parseFloat(x, 10) % parseFloat(y, 10);
};

const isEven = num => {
  if (typeof num !== "number" && typeof num !== "string") {
    return false;
  }
  num = parseFloat(num, 10);
  if (num % 2 === 0 && typeof num === "number") {
    return true;
  }
  return false;
};

const isOdd = num => {
  if (typeof num !== "number" && typeof num !== "string") {
    return false;
  }
  num = parseFloat(num, 10);
  if (num % 2 === 0) {
    return false;
  }
  if (isNaN(num)) {
    return false;
  }

  return true;
};

const square = num => {
  num = parseFloat(num, 10);
  if (isNaN(num)) {
    return false;
  }
  return num * num;
};

const cube = num => {
  num = parseFloat(num, 10);
  if (isNaN(num)) {
    return false;
  }
  return num * num * num;
};

const raiseToPower = (num, exponent) => {
  num = parseFloat(num, 10);
  if (isNaN(num)) {
    return false;
  }
  return num ** exponent;
};

const roundNumber = num => {
  num = parseFloat(num, 10);
  if (isNaN(num)) {
    return false;
  }
  return Math.round(num);
};

const roundUp = num => {
  num = parseFloat(num, 10);
  if (isNaN(num)) {
    return false;
  }
  return Math.ceil(num);
};

const addExclamationPoint = str => {
  if (
    typeof str !== "number" &&
    typeof str !== "string" &&
    Array.isArray(str) === false
  ) {
    return false;
  }
  if (typeof str === "number" || Array.isArray(str) === true) {
    str = str.toString();
  }
  return (str += "!");
};

const combineNames = (firstName, lastName) => {
  if (typeof firstName !== "string") {
    return false;
  }
  if (typeof lastName !== "string") {
    return false;
  }
  return `${firstName} ${lastName}`;
};

const getGreeting = name => {
  if (typeof name !== "string") {
    return false;
  }
  return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
  return parseFloat(length, 10) * parseFloat(width, 10);
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
