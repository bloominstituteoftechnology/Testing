/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  return num * 10;
};

const subtractFive = num => {
  return num - 5;
};

const areSameLength = (str1, str2) => {
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
  if (typeof num !== 'number') {
    return false;
  } else if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isOdd = num => {
  if (typeof num !== 'number') {
    return false;
  } if (num % 2 === 0) {
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
  return (str += '!');
};

const combineNames = (firstName, lastName) => {
  if (typeof firstName !== 'string' && typeof lastName === 'string') {
    return lastName;
  } else if (typeof firstName === 'string' && typeof lastName !== 'string') {
    return firstName;
  } else if (typeof firstName !== 'string' && typeof lastName !== 'string') {
    return false;
  } return `${firstName} ${lastName}`;
};

const getGreeting = name => {
  if (typeof name !== 'string') {
    return false;
  } return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
  if (typeof (length || width) !== 'number') {
    return false;
  } return length * width;
};

const getTriangleArea = (base, height) => {
  if (typeof (base || height) !== 'number') {
    return false;
  } return 0.5 * base * height;
};

const getCircleArea = radius => {
  if (typeof (radius) !== 'number') {
    return false;
  } return Math.PI * radius * radius;
};

const getRectangularPrismVolume = (length, width, height) => {
  if (typeof (length || width || height) !== 'number') {
    return false;
  } return width * height * length;
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
