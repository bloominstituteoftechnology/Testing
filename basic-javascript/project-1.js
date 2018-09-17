/* eslint-disable arrow-parens */

// made as helpers

const areNums = (...vals) => {
  return vals.every(val => {
    return typeof val === 'number' && !isNaN(val);
  });
};

const areStrs = (...vals) => {
  return vals.every(val => {
    return typeof val === 'string';
  });
};

// given

const multiplyByTen = num => {
  num = +num;
  return areNums(num)
    ? num * 10
    : null;
};

const subtractFive = num => {
  num = +num;
  return areNums(num)
    ? num - 5
    : null;
};

const areSameLength = (str1, str2) => {
  return areStrs(str1, str2)
    ? str1.length === str2.length
    : null;
};

const areEqual = (x, y) => {
  x = +x, y = +y;
  return areNums(x, y)
    ? x === y
    : null;
};

const lessThanNinety = num => {
  num = +num;
  return areNums(num)
    ? num < 90
    : null;
};

const greaterThanFifty = num => {
  num = +num;
  return areNums(num)
    ? num > 50
    : null;
};

const add = (x, y) => {
  x = +x, y = +y;
  return areNums(x, y)
    ? x + y
    : null;
};

const subtract = (x, y) => {
  x = +x, y = +y;
  return areNums(x, y)
    ? x - y
    : null;
};

const divide = (x, y) => {
  x = +x, y = +y;
  return areNums(x, y)
    ? x / y
    : null;
};

const multiply = (x, y) => {
  x = +x, y = +y;
  return areNums(x, y)
    ? x * y
    : null;
};

const getRemainder = (x, y) => {
  x = +x, y = +y;
  return areNums(x, y)
    ? x % y
    : null;
};

const isEven = num => {
  num = +num;
  return areNums(num)
    ? num % 2 === 0
    : null;
};

const isOdd = num => {
  num = +num;
  return areNums(num)
    ? num % 2 !== 0
    : null;
};

const square = num => {
  num = +num;
  return areNums(num)
    ? num * num
    : null;
};

const cube = num => {
  num = +num;
  return areNums(num)
    ? num ** 3
    : null;
};

const raiseToPower = (num, exponent) => {
  num = +num, exponent = +exponent;
  return areNums(num, exponent)
    ? num ** exponent
    : null;
};

const roundNumber = num => {
  num = +num
  return areNums(num)
    ? Math.round(num)
    : null;
};

const roundUp = num => {
  num = +num
  return areNums(num)
    ? Math.ceil(num)
    : null;
};

const addExclamationPoint = str => {
  return areStrs(str)
    ? (str += '!')
    : null;
};

const combineNames = (first, last) => {
  return areStrs(first, last)
    ? `${first} ${last}`
    : null;
};

const getGreeting = name => {
  return areStrs(name)
    ? `Hello ${name}!`
    : null;
};

const getRectangleArea = (length, width) => {
  length = +length, width = +width;
  return areNums(length, width)
    ? length * width
    : null;
};

const getTriangleArea = (base, height) => {
  base = +base, height = +height;
  return areNums(base, height)
    ? 0.5 * base * height
    : null;
};

const getCircleArea = radius => {
  return areNums(radius)
    ? Math.PI * radius ** 2
    : null;
};

const getRectangularPrismVolume = (length, width, height) => {
  width= +width, height = +height, length = +length;
  return areNums(width, height, length)
    ? width * height * length
    : null;
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
