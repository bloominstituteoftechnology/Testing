/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  return num * 10;
};

const subtractFive = num => {
  return num - 5;
};

const areSameLength = (str1, str2) => {
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  return x === y;
};

const lessThanNinety = num => {
  if (num < 90) {
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
  return x + y;
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

// ! ================ custom, Code Challenge
const myGetProduct = arr => {
	return arr
    .map(el => arr
      .filter(elem => elem !== el))
      .map(array => array
        .reduce((a, b) => a * b));
}

const getProduct = (arr) => {
  const ans = [];
  let soFar = 1;
  
  for (let i = 0; i < arr.length; i++) {
    ans[i] = soFar;
    soFar *= arr[i];
  }
  
  soFar = 1;
  
  for (let i = arr.length -1; i >=0; i--) {
    ans[i] *= soFar;
    soFar *= arr[i];
  }
  return ans;
}

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
  myGetProduct,
  getProduct
};
