/* eslint-disable arrow-parens */

const isNum = val => {
  return val === 0 || typeof val/1 === 'number';
}

const isNumOrParsedStrNum = val => {
  const parsed = parseFloat(val)
  return typeof parsed === 'number' && Boolean(val) || parsed === 0;
}

const isNan = val => {
  return (isNum(val) === false && typeof val === 'number')
}

const isEmptyStr = val => {
  return !Boolean(val) && typeof val === 'string';
}

const valType = (valArr) => {
  if (Object.prototype.toString.call(valArr).slice(8, -1) !== 'Array') {
    valArr = [valArr]
  }
  return valArr.map(val => Object.prototype.toString.call(val).slice(8, -1))
}

const convertStrNum = strNum => {
  return parseFloat(strNum)
}

const multiplyByTen = num => {
  return parseFloat(num) * 10;
};

const subtractFive = num => {
  return parseFloat(num) - 5;
};

const areSameLength = (str1, str2) => {
  // if (typeof str1 !== 'string' || typeof str2 !== 'string') {
  //   throw new Error('Parameters must be strings')
  // }
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  return x === y;
};

const lessThanNinety = num => {
  return num < 90 ? true: false;
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
  // return num ** exponent;
  return Math.pow(num, exponent);
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
  isNum, 
  valType,
  isNumOrParsedStrNum,
  isNan,
  isEmptyStr,
  convertStrNum,
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
