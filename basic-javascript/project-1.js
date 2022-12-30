/* eslint-disable arrow-parens */

const multiplyByTen = num => {
	if (typeof num !== 'number') {
    return undefined;
  } 
  return num * 10;
};

const subtractFive = num => {
  if (typeof num !== 'number') {
    return undefined;
  }return num - 5;
};

const areSameLength = (str1, str2) => {
	if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return false;
  }
  if (typeof str1 === undefined || typeof str2 === undefined) {
    return false;
  }
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  if (typeof str1 === undefined || typeof str2 === undefined) {
    return false;
  }
  return x === y;
};

const lessThanNinety = num => {
  if (typeof num !== 'number') {
    return undefined;
  }
  if (num < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = num => {
  if (typeof num !== 'number') {
    return undefined;
  }
  if (num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number' ) {
    return undefined;
  }
  return x + y;
};

const subtract = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number' ) {
    return undefined;
  }
  return x - y;
};

const divide = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number' || y === 0 ) {
    return undefined;
  }
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
  if ((typeof num !== 'number') || (num % 2 === 0) ) {
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
  return `${firstName} ${lastName}`;
};

const getGreeting = name => {
  return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
  if ((typeof length !== 'number' || typeof width !== 'number') || (length < 0  || width < 0)) {
    return undefined;}
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