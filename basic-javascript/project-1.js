/* eslint-disable arrow-parens */
//done
const multiplyByTen = num => {
  return num * 10;
};
//done
const subtractFive = num => {
  return num - 5;
};
//done
const areSameLength = (str1, str2) => {
  return str1.length === str2.length;
};
//done
const areEqual = (x, y) => {
  return x === y;
};
//done
const lessThanNinety = num => {
  if (num < 90) {
    return true;
  }
  return false;
};
//done
const greaterThanFifty = num => {
  if (num > 50) {
    return true;
  }
  return false;
};
//done
const add = (x, y) => {
  return x + y;
};
//done
const subtract = (x, y) => {
  return x - y;
};
//done
const divide = (x, y) => {
  return x / y;
};
//done
const multiply = (x, y) => {
  return x * y;
};
//done
const getRemainder = (x, y) => {
  return x % y;
};
//done
const isEven = num => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
//done
const isOdd = num => {
  if (num % 2 === 0) {
    return false;
  }
  return true;
};
//done
const square = num => {
  return num * num;
};
//done
const cube = num => {
  return num * num * num;
};
//done
const raiseToPower = (num, exponent) => {
  return num ** exponent;
};
//done
const roundNumber = num => {
  return Math.round(num);
};
//done
const roundUp = num => {
  return Math.ceil(num);
};
//done
const addExclamationPoint = str => {
  return (str += '!');
};
//done
const combineNames = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};
//done
const getGreeting = name => {
  return `Hello ${name}!`;
};
//done
const getRectangleArea = (length, width) => {
  return length * width;
};
//done
const getTriangleArea = (base, height) => {
  return 0.5 * base * height;
};
//done
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
