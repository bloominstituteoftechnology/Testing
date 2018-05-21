/* eslint-disable arrow-parens */

const multiplyByTen = num => { //PASSES
  return num * 10;
};

const subtractFive = num => {  // passed
  return num - 5;
};

const areSameLength = (str1, str2) => {    //PASSED
  return str1.length === str2.length;
};

const areEqual = (x, y) => {    //PASSED
  return x === y;
};

const lessThanNinety = num => {  // passed
  if (num < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = num => { // PASSED
  if (num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {   //PASSED
  return x + y;
};

const subtract = (x, y) => {    // PASSED
  return x - y;
};

const divide = (x, y) => {  //PASSED
  return x / y;
};

const multiply = (x, y) => {  //PASSED
  return x * y;
};

const getRemainder = (x, y) => {    //PASSED
  return x % y;
};

const isEven = num => {   //PASSED
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isOdd = num => {    //PASSED
  if (num % 2 === 0) {
    return false;
  }
  return true;
};

const square = num => {   //PASSED
  return num * num;
};

const cube = num => {   //PASED
  return num * num * num;
};

const raiseToPower = (num, exponent) => {   //PASSED
  return num ** exponent;
};

const roundNumber = num => {    //PASSED
  return Math.round(num);
};

const roundUp = num => {    //PASSED
  return Math.ceil(num);
};

const addExclamationPoint = str => { //PASSED
  return (str += '!');
};

const combineNames = (firstName, lastName) => {   //PASSED
  return `${firstName} ${lastName}`;
};

const getGreeting = name => {     //PASSED
  return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => { //PASSED
  return length * width;
};

const getTriangleArea = (base, height) => {   //PASSED
  return 0.5 * base * height;
};

const getCircleArea = radius => {   //PASSED
  return Math.PI * radius * radius;
};

const getRectangularPrismVolume = (length, width, height) => {
  return width * height * length; //PASSED
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
