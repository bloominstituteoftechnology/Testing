/* eslint-disable arrow-parens */
const isNumeric = num => {
  return !(isNaN(num) || num === null);
};

const multiplyByTen = num => {
  return isNumeric(num) ? num * 10 : false;
};

const subtractFive = num => {
  return isNumeric(num) ? num - 5 : false;
};

const areSameLength = (str1, str2) => {
  return typeof str1 === 'string' && typeof str2 === 'string'
    ? str1.length === str2.length
    : false;
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

const add = (x, y) => {
  return isNumeric(x) && isNumeric(y) ? x + y : false;
};

const subtract = (x, y) => {
  return isNumeric(x) && isNumeric(y) ? x - y : false;
};

const divide = (x, y) => {
  return isNumeric(x) && isNumeric(y) ? x / y : false;
};

const multiply = (x, y) => {
  return isNumeric(x) && isNumeric(y) ? x * y : false;
};

const getRemainder = (x, y) => {
  return isNumeric(x) && isNumeric(y) ? x % y : false;
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
  return isNumeric(num) ? num * num : false;
};

const cube = num => {
  return isNumeric(num) ? num * num * num : false;
};

const raiseToPower = (num, exponent) => {
  return isNumeric(num) && isNumeric(exponent) ? num ** exponent : false;
};

const roundNumber = num => {
  return isNumeric(num) ? Math.round(num) : false;
};

const roundUp = num => {
  return isNumeric(num) ? Math.ceil(num) : false;
};

const addExclamationPoint = str => {
  return typeof str === 'string' ? (str += '!') : false;
};

const combineNames = (firstName, lastName) => {
  return typeof firstName === 'string' && typeof lastName === 'string'
    ? `${firstName} ${lastName}`
    : false;
};

const getGreeting = name => {
  return typeof name === 'string' ? `Hello ${name}!` : false;
};

const getRectangleArea = (length, width) => {
  return isNumeric(length) && isNumeric(width) ? length * width : false;
};

const getTriangleArea = (base, height) => {
  return isNumeric(base) && isNumeric(height) ? 0.5 * base * height : false;
};

const getCircleArea = radius => {
  return isNumeric(radius) ? Math.PI * radius * radius : false;
};

const getRectangularPrismVolume = (length, width, height) => {
  return isNumeric(length) && isNumeric(width) && isNumeric(height)
    ? width * height * length
    : false;
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
