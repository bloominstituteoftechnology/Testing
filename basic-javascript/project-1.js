/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  const intNum = parseInt(num);

  if (typeof intNum !== 'number') {
    return false;
  }
  else {
    return intNum * 10;
  }
};

const subtractFive = num => {
  const intNum = parseInt(num);

  if (typeof intNum !== 'number') {
    return false;
  }
  else {
    return intNum - 5;
  }
};

const areSameLength = (str1, str2) => {
  const strOne = str1.toString();
  const strTwo = str2.toString();

  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    if ((typeof x === 'string' || typeof y === 'string') && (typeof x !== 'boolean' || typeof y !== 'boolean')) {
      const strX = x.toString();
      const strY = y.toString();

      return strX===strY;
    }
    else {
      return x === y;
    }
  }
  return x === y;
};

const lessThanNinety = num => {
  const intNum = parseInt(num);

  if (typeof intNum !== 'number') {
    return false;
  }
  else {
    if (intNum < 90) {
      return true;
    }
    return false;
  }
};

const greaterThanFifty = num => {
  const intNum = parseInt(num);

  if (typeof intNum !== 'number') {
    return false;
  }
  else {
    if (intNum > 50) {
      return true;
    }
    return false;
  }
};

const add = (x, y) => {
  const numX = parseInt(x);
  const numY = parseInt(y);

  if (numX===NaN && numY===NaN) {
    return false;
  }
  else {
    return (numX || 0) + (numY || 0);
  }
};


const subtract = (x, y) => {
  const numX = parseInt(x);
  const numY = parseInt(y);

  if (numX===undefined) {
    return false;
  }
  else if (numY === undefined) {
    return numX;
  }
  else {
    return numX - numY;
  }
};

const divide = (x, y) => {
  const numX = parseInt(x);
  const numY = parseInt(y);

  if (numX===undefined || numY===undefined) {
    return false;
  }
  else {
    return numX/numY;
  }
};

const multiply = (x, y) => {
  const numX = parseInt(x);
  const numY = parseInt(y);

  if (numX===undefined || numY===undefined) {
    return false;
  }
  else {
    return numX*numY;
  }
};

const getRemainder = (x, y) => {
  const numX = parseInt(x);
  const numY = parseInt(y);

  if (numX===undefined || numY===undefined) {
    return false;
  }
  else {
    return numX%numY;
  }
}

const isEven = num => {
  const intNum = parseInt(num);

  if (intNum !== undefined) {
    if (intNum % 2 === 0) {
      return true;
    }
    return false;
  }
  else {
    return false;
  }
}


const isOdd = num => {
  const intNum = parseInt(num);

  if (intNum !== undefined) {
    if (intNum % 2 === 0) {
      return false;
    }
    return true;
  }
  else {
    return false;
  }
};

const square = num => {
  const intNum = parseInt(num);

  if (intNum !== undefined) {
    return intNum * intNum;
  }
  else {
    return false;
  }
};

const cube = num => {
  const intNum = parseInt(num);

  if (intNum !== undefined) {
    return intNum * intNum * intNum;
  }
  else {
    return false;
  }
};

const raiseToPower = (num, exponent) => {
  const intNum = parseInt(num);
  const intPow = parseInt(exponent);

  if (intNum !== undefined && intNum !== undefined) {
    return intNum ** intPow;
  }
  else {
    return false;
  }
};

const roundNumber = num => {
  const intNum = parseInt(num);

  if (intNum !== undefined) {
    return Math.round(intNum);
  }
  else {
    return false;
  }
};

const roundUp = num => {
  const intNum = parseInt(num);

  if (intNum !== NaN) {
    return Math.ceil(intNum);
  }
  else {
    return false;
  }
};

const addExclamationPoint = str => {
  const myStr = str.toString();

  return (myStr += '!');
};

const combineNames = (firstName, lastName) => {
  const first = firstName.toString();
  const last = lastName.toString();

  return `${first} ${last}`;
};

const getGreeting = name => {
  const user = name.toString();
  return `Hello ${user}!`;
};

const getRectangleArea = (length, width) => {
  const l = parseInt(length);
  const w = parseInt(width);

  if (l === NaN || w === NaN) {
    return false;
  }
  else {
    return l * w;
  }
};

const getTriangleArea = (base, height) => {
  const b = parseInt(base);
  const h = parseInt(height);

  if (b === NaN || h === NaN) {
    return false;
  }
  else {
    return 0.5 * b * h;
  }
};

const getCircleArea = radius => {
  const rad = parseInt(radius);

  if (rad === NaN) {
    return false;
  }
  return Math.PI * rad * rad;
};

const getRectangularPrismVolume = (length, width, height) => {
  const l = parseInt(length);
  const w = parseInt(width);
  const h = parseInt(height);

  if (l === NaN || w === NaN || h === NaN) {
    return false;
  }
  else {
    return w * h * l;
  }
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
