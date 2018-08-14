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
    /* prettier-ignore */
    typeof x === 'number' && !isNaN(x) &&
    typeof y === 'number' && !isNaN(y)
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
  if (
    /* prettier-ignore */
    typeof x === 'number' && !isNaN(x) &&
    typeof y === 'number' && !isNaN(y)
  ) {
    let difference = x - y;
    if (difference < Number.MIN_SAFE_INTEGER) {
      throw new Error('Difference is too small to calculate');
    } else return difference;
  } else {
    throw new Error('Must have two numbers!');
  }
};

const divide = (x, y) => {
  if (y === 0) throw new Error("Divisor can't be zero");
  if (
    /* prettier-ignore */
    typeof x === 'number' && !isNaN(x) &&
    typeof y === 'number' && !isNaN(y)
  ) {
    let quotient = x / y;
    if (quotient < Number.MIN_SAFE_INTEGER) {
      throw new Error('Quotient is too small to calculate');
    } else return quotient;
  } else {
    throw new Error('Must have two numbers!');
  }
};

const multiply = (x, y) => {
  if (
    /* prettier-ignore */
    typeof x === 'number' && !isNaN(x) &&
    typeof y === 'number' && !isNaN(y)
  ) {
    let product = x * y;
    if (product > Number.MAX_SAFE_INTEGER) {
      throw new Error('Product is too small to calculate');
    } else return product;
  } else {
    throw new Error('Must have two numbers!');
  }
};

const getRemainder = (x, y) => {
  if (y === 0) throw new Error("Divisor can't be zero");
  if (
    /* prettier-ignore */
    typeof x === 'number' && !isNaN(x) &&
    typeof y === 'number' && !isNaN(y)
  ) {
    let remainder = x % y;
    return remainder;
  } else {
    throw new Error('Must have two numbers!');
  }
};

const isEven = num => {
  if (typeof num === 'number' && !isNaN(num)) {
    return num % 2 === 0;
  } else {
    throw new Error('Must have a number!');
  }
};

const isOdd = num => {
  if (typeof num === 'number' && !isNaN(num)) {
    return num % 2 === 1;
  } else {
    throw new Error('Must have a number!');
  }
};

const square = num => {
  if (typeof num === 'number' && !isNaN(num)) {
    let squared = num * num;
    if (squared > Number.MAX_SAFE_INTEGER)
      throw new Error('Number too big to square accurately');
    return squared;
  } else {
    throw new Error('Must have a number!');
  }
};

const cube = num => {
  if (typeof num === 'number' && !isNaN(num)) {
    let cubed = num * num * num;
    if (cubed > Number.MAX_SAFE_INTEGER)
      throw new Error('Number too big to cube accurately');
    return cubed;
  } else {
    throw new Error('Must have a number!');
  }
};

const raiseToPower = (num, exponent) => {
  if (
    /* prettier-ignore */
    typeof num === 'number' && !isNaN(num) &&
    typeof exponent === 'number' && !isNaN(exponent)
  ) {
    let powered = Math.pow(num, exponent);
    if (powered > Number.MAX_SAFE_INTEGER)
      throw new Error('Number too big to exponentiate accurately');
    else return powered;
  } else {
    throw new Error('Must have two numbers!');
  }
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
