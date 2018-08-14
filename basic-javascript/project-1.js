/* eslint-disable arrow-parens */

const multiplyByTen = (...num) => {
  if (num.length > 1) {
    throw new Error(
      `This function works with one argument. You passed in ${num.length}.`,
    );
  }
  // NaN is type number
  if (typeof num[0] === 'number' && !isNaN(num[0])) {
    if (num[0] > Number.MAX_SAFE_INTEGER / 10)
      throw new Error('Number too big to calculate');
    if (num[0] < Number.MIN_SAFE_INTEGER / 10)
      throw new Error('Number too small to calculate');
    return num[0] * 10;
  } else {
    throw new Error('Must have a number to calculate');
  }
};

const subtractFive = num => {
  if (typeof num === 'number' && !isNaN(num)) {
    if (num < Number.MIN_SAFE_INTEGER + 5)
      throw new Error('Number too small to calculate');
    return num - 5;
  }
  throw new Error('Must have a number to calculate');
};

const areSameLength = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string')
    throw new Error('Must have two strings!');
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  if (
    typeof x === 'number' &&
    !isNaN(x) &&
    typeof y === 'number' &&
    !isNaN(y)
  ) {
    if (
      x < Number.MAX_SAFE_INTEGER &&
      x > Number.MIN_SAFE_INTEGER &&
      y < Number.MAX_SAFE_INTEGER &&
      y > Number.MIN_SAFE_INTEGER
    ) {
      return x === y;
    } else {
      throw new Error('values are out of range for comparison');
    }
  } else {
    throw new Error('Must have two numbers!');
  }
};

const lessThanNinety = num => {
  if (typeof num === 'number' && !isNaN(num) && num < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = num => {
  if (typeof num === 'number' && !isNaN(num) && num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  if (
    typeof x === 'number' &&
    !isNaN(x) &&
    typeof y === 'number' &&
    !isNaN(y)
  ) {
    let sum = x + y;
    if (sum > Number.MAX_SAFE_INTEGER) {
      throw new Error('Sum is too large to calculate');
    } else return sum;
  } else {
    throw new Error('Must have two numbers!');
  }
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
  getRectangularPrismVolume,
};
