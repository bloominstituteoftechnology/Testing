/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  if (isNaN(num)) return false;
  return num * 10;
};

const subtractFive = num => {
  if (isNaN(num)) return false;
  return num - 5;
};

const areSameLength = (str1, str2) => {
  str1 = `${str1}`;
  str2 = `${str2}`;
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  return x === y;
};

const lessThanNinety = num => {
  if (isNaN(num)) return false;
  if (num < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = num => {
  if (isNaN(num)) return false;
  if (num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  if (isNaN(x) || isNaN(y)) return false;
  return x + y;
};

const subtract = (x, y) => {
  if (isNaN(x) || isNaN(y)) return false;
  return x - y;
};

const divide = (x, y) => {
  if (isNaN(x) || isNaN(y)) return false;
  return x / y;
};

const multiply = (x, y) => {
  if (isNaN(x) || isNaN(y)) return false;
  return x * y;
};

const getRemainder = (x, y) => {
  if (isNaN(x) || isNaN(y)) return false;
  return x % y;
};

const isEven = num => {
  if (isNaN(num)) return false;
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isOdd = num => {
  if (isNaN(num)) return false;
  if (num % 2 === 0) {
    return false;
  }
  return true;
};

const square = num => {
  if (isNaN(num)) return false;
  return num * num;
};

const cube = num => {
  if (isNaN(num)) return false;
  return num * num * num;
};

const raiseToPower = (num, exponent) => {
  if (isNaN(num) || isNaN(exponent)) return false;
  return num ** exponent;
};

const roundNumber = num => {
  if (isNaN(num)) return false;
  return Math.round(num);
};

const roundUp = num => {
  if (isNaN(num)) return false;
  return Math.ceil(num);
};

const addExclamationPoint = str => {
  str = `${str}`;
  return (str += '!');
};

const combineNames = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

const getGreeting = name => {
  return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
  if (isNaN(length) || isNaN(width)) return false;
  if (length < 0 || width < 0) return false;
  return length * width;
};

const getTriangleArea = (base, height) => {
  if (isNaN(base) || isNaN(height)) return false;
  if (base < 0 || height < 0) return false;
  return 0.5 * base * height;
};

const getCircleArea = radius => {
  if (isNaN(radius) || radius < 0) return false;
  return Number((Math.PI * radius * radius).toFixed(2));
};

const getRectangularPrismVolume = (length, width, height) => {
  if (isNaN(length) || isNaN(width) || isNaN(height)) return false;
  if (length < 0 || width < 0 || height < 0) return false;
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
