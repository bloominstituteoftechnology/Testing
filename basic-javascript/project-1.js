/* eslint-disable arrow-parens */

const numberCheck = 'input must be a number';
const numbersCheck = 'inputs must be numbers';

const multiplyByTen = num => {
  if (num === undefined){
    return false;
  }else{
  return num * 10;
  }
};

const subtractFive = num => {
  if (typeof num === !Number){
    number = Number(num);
    return number-5;
  } else if (num === undefined){
    return false;
  }else{
  return num - 5;
  }
};

const areSameLength = (str1, str2) => {
  if (!str1 || !str2) {
    const message = 'must input two strings'
    return message;
  } else if (str1.length === str2.length);{
    return true;
  } 
};

const areEqual = (x, y) => {
  if ( x === !Number || y === !Number){
    return false;
  }else if (!x || !y) {
    return 'both values must be defined'
  }else{
  return x === y;
  }
};

const lessThanNinety = num => {
  if (num === !Number){
    return 'value must be a number';
  }else if (num < 90) {
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
  if (typeof(x) !== 'number' || typeof(y) !== 'number'){
    return 'values must both be numbers';
  }
  const a = x || 0;
  const b = y || 0;
  return a + b;
};

const subtract = (x, y) => {
  if (typeof(x) !== 'number' || typeof(y) !== 'number'){
    return 'values must both be numbers';
  }
  const a = x || 0;
  const b = y || 0;
  return a - b;
};

const divide = (x, y) => {
  if ((!x && x !==0) || (!y && y!==0)) return 'must have two numbers'
  else if (typeof(x) !=='number'|| typeof(y) !== 'number') 
    return 'both values must be numbers';
  else if (y === 0) return 'cannot divide by 0';
  return x / y;
};

const multiply = (x, y) => {
  if ((!x && x !==0) || (!y && y!==0)) 
  {return 'must have two numbers';
}else if (typeof(x) !=='number'|| typeof(y) !== 'number') 
  return 'both values must be numbers';
  return x * y; 
};

const getRemainder = (x, y) => {
  if ((!x && x !==0) || (!y && y!==0)) {
    return 'must have two numbers'
  }else if (typeof(x) !=='number'|| typeof(y) !== 'number') {
    return 'both values must be numbers';
  }else if (y === 0){ return 'cannot divide by 0'};
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
  getRectangularPrismVolume
};
