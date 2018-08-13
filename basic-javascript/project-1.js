/* eslint-disable arrow-parens */

// one test checked
const multiplyByTen = num => {
  return num * 10;
};

// one test checked
const subtractFive = num => {
  return num - 5;
};

// one test checked
const areSameLength = (str1, str2) => {
  return str1.length === str2.length;
};

// one test checked
const areEqual = (x, y) => {
  return x === y;
};

// one test checked
const lessThanNinety = num => {
  if (num < 90) {
    return true;
  }
  return false;
};

// one test checked
const greaterThanFifty = num => {
  if (num > 50) {
    return true;
  }
  return false;
};

// one test checked
const add = (x, y) => {
  return x + y;
};

// one test checked
const subtract = (x, y) => {
  return x - y;
};

// one test checked
const divide = (x, y) => {
  return x / y;
};

// one test checked
const multiply = (x, y) => {
  return x * y;
};

// one test checked
const getRemainder = (x, y) => {
  return x % y;
};

// one test checked
const isEven = num => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

// one test checked
const isOdd = num => {
  if (num % 2 === 0) {
    return false;
  }
  return true;
};

// one test checked
const square = num => {
  return num * num;
};

// one test checked
const cube = num => {
  return num * num * num;
};

// one test checked
const raiseToPower = (num, exponent) => {
  return num ** exponent;
};

// one test checked
const roundNumber = num => {
  return Math.round(num);
};

// one test checked
const roundUp = num => {
  return Math.ceil(num);
};

const addExclamationPoint = str => {
  return (str += '!');
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
