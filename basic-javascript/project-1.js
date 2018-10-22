/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  if (!num) return "Please provide a number."
  return num * 10;
};

const subtractFive = num => {
  if (!num) return "Please provide a number."
  return num - 5;
};

const areSameLength = (str1, str2) => {
  if (!str1) return "Please provide the first string."
  else if (!str2) return "Please provide the second string."
  else if (!str1 && !str2) return "Please provide 2 strings."
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  if (!x) return "Please provide the first value."
  else if (!y) return "Please provide the second value."
  else if (!x && !y) return "Please provide 2 values."
  return x === y;
};

const lessThanNinety = num => {
  if (!num) return "Please provide a number."
  else if (num < 90) return true;
  return false;
};

const greaterThanFifty = num => {
  if (!num) return "Please provide a number."
  if (num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  if (!x) return "Please provide the first value."
  else if (!y) return "Please provide the second value."
  else if (!x && !y) return "Please provide 2 values."
  return x + y;
};

const subtract = (x, y) => {
  if (!x) return "Please provide the first value."
  else if (!y) return "Please provide the second value."
  else if (!x && !y) return "Please provide 2 values."
  return x - y;
};

const divide = (x, y) => {
  if (!x) return "Please provide the first value."
  else if (!y) return "Please provide the second value."
  else if (!x && !y) return "Please provide 2 values."
  return x / y;
};

const multiply = (x, y) => {
  if (!x) return "Please provide the first value."
  else if (!y) return "Please provide the second value."
  else if (!x && !y) return "Please provide 2 values."
  return x * y;
};

const getRemainder = (x, y) => {
  if (!x) return "Please provide the first value."
  else if (!y) return "Please provide the second value."
  else if (!x && !y) return "Please provide 2 values."
  return x % y;
};

const isEven = num => {
  if (!num) return "Please provide a number."
  else if (num % 2 === 0) return true;
  return false;
};

const isOdd = num => {
  if (!num) return "Please provide a number."
  else if (num % 2 === 0) {
    return false;
  }
  return true;
};

const square = num => {
  if (!num) return "Please provide a number."
  return num * num;
};

const cube = num => {
  if (!num) return "Please provide a number."
  return num * num * num;
};

const raiseToPower = (num, exponent) => {
  if (!num) return "Please provide a number."
  else if (!exponent) return "Please provide an exponent."
  else if (!num && !exponent) return "Please provide a number and an exponent."
  return num ** exponent;
};

const roundNumber = num => {
  if (!num) return "Please provide a number."
  return Math.round(num);
};

const roundUp = num => {
  if (!num) return "Please provide a number."
  return Math.ceil(num);
};

const addExclamationPoint = str => {
  if (!str) return "Please provide a str."
  return (str += '!');
};

const combineNames = (firstName, lastName) => {
  if (!firstName) return "Please provide the first name."
  else if (!lastName) return "Please provide the second name."
  else if (!firstName && !lastName) return "Please provide the first and last names."
  return `${firstName} ${lastName}`;
};

const getGreeting = name => {
  if (!name) return "Please provide a name."
  return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
  if (!length) return "Please provide the length."
  else if (!width) return "Please provide the width."
  else if (!length && !width) return "Please provide the length and width."
  return length * width;
};

const getTriangleArea = (base, height) => {
  if (!base) return "Please provide the base."
  else if (!height) return "Please provide the height."
  else if (!base && !height) return "Please provide the base and height."
  return 0.5 * base * height;
};

const getCircleArea = radius => {
  if (!radius) return "Please provide a radius."
  return Math.PI * radius * radius;
};

const getRectangularPrismVolume = (length, width, height) => {
  if (!length) return "Please provide the length."
  else if (!width) return "Please provide the width."
  else if (!height) return "Please provide the height."
  else if (!length && !width && !height) return "Please provide the length, width, and height."
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
