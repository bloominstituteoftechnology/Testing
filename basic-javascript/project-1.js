/* eslint-disable arrow-parens */
//1
const multiplyByTen = num => {
  return num * 10;
}; //Done

//2
const subtractFive = num => {
  return num - 5;
}; //Done

//3
const areSameLength = (str1, str2) => {
  return str1.length === str2.length;
}; //Done

//4
const areEqual = (x, y) => {
  return x === y;
}; //Done

//5
const lessThanNinety = num => {
  if (num < 90) {
    return true;
  }
  return false;
}; //Done

//6
const greaterThanFifty = num => {
  if (num > 50) {
    return true;
  }
  return false;
}; //Done

//7
const add = (x, y) => {
  return x + y;
}; //Done

//8
const subtract = (x, y) => {
  return x - y;
}; //Done

//9
const divide = (x, y) => {
  return x / y;
}; //Done

//10
const multiply = (x, y) => {
  return x * y;
}; //Done

//11
const getRemainder = (x, y) => {
  return x % y;
}; //Done

//12
const isEven = num => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}; //Done

//13
const isOdd = num => {
  if (num % 2 === 0) {
    return false;
  }
  return true;
}; //Done

//14
const square = num => {
  return num * num;
}; //Done

//15
const cube = num => {
  return num * num * num;
}; //Done

//16
const raiseToPower = (num, exponent) => {
  return num ** exponent;
}; //Done

//17
const roundNumber = num => {
  return Math.round(num);
}; //Done

//18
const roundUp = num => {
  return Math.ceil(num);
}; //Done

//19
const addExclamationPoint = str => {
  return (str += '!');
}; //Done

//20
const combineNames = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
}; //Done

//21
const getGreeting = name => {
  return `Hello ${name}!`;
}; //Done

//22
const getRectangleArea = (length, width) => {
  return length * width;
}; //Done

//23
const getTriangleArea = (base, height) => {
  return 0.5 * base * height;
}; //Done

//24
const getCircleArea = radius => {
  return Math.PI * radius * radius;
}; //Done

//25
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
