/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  if (typeof num !== "number") return undefined;
  return num * 10;
};

const subtractFive = num => {
  if (typeof num !== "number") return undefined;
  return parseFloat(num) - 5;
};

const areSameLength = (str1, str2) => {
  if (typeof str1 !== "string" || typeof str2 !== "string") return undefined;
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  return x === y;
};

const lessThanNinety = num => {
  if (typeof num !== "number") return undefined;
  if (num < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = num => {
  if (typeof num !== "number") return undefined;
  if (num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") return undefined;
  return x + y;
};

const subtract = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") return undefined;
  return x - y;
};

const divide = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") return undefined;
  return x / y;
};

const multiply = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") return undefined;
  return x * y;
};

const getRemainder = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") return undefined;
  return x % y;
};

const isEven = num => {
  if (typeof num !== "number") return undefined;
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isOdd = num => {
  if (typeof num !== "number") return undefined;
  if (num % 2 === 1) {
    return true;
  }
  return false;
};

const square = num => {
  if (typeof num !== "number") return undefined;
  return num * num;
};

const cube = num => {
  if (typeof num !== "number") return undefined;
  return num * num * num;
};

const raiseToPower = (num, exponent) => {
  if (typeof num !== "number" || typeof exponent !== "number") return undefined;
  return num ** exponent;
};

const roundNumber = num => {
  if (typeof num !== "number") return undefined;
  return Math.round(num);
};

const roundUp = num => {
  if (typeof num !== "number") return undefined;
  return Math.ceil(num);
};

const addExclamationPoint = str => {
  if (typeof str !== "string") return undefined;
  return (str += "!");
};

const combineNames = (firstName, lastName) => {
  if (typeof firstName !== "string" || typeof lastName !== "string")
    return undefined;
  return `${firstName} ${lastName}`;
};

const getGreeting = name => {
  if (typeof star !== "string") return undefined;
  return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
  if (typeof length !== "number" || typeof width !== "number") return undefined;
  return length * width;
};

const getTriangleArea = (base, height) => {
  if (typeof base !== "number" || typeof height !== "number") return undefined;
  return 0.5 * base * height;
};

const getCircleArea = radius => {
  if (typeof radius !== "number") return undefined;
  return Math.PI * radius * radius;
};

const getRectangularPrismVolume = (length, width, height) => {
  if (
    typeof length !== "number" ||
    typeof width !== "number" ||
    typeof height !== "number"
  )
    return undefined;
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
