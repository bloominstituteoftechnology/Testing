/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  if(num && isNaN(num) || typeof num === 'boolean') return false
  return num * 10;
};

const subtractFive = num => {
  if(isNaN(num) || num === null) return false
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
};//5

const greaterThanFifty = num => {
  if (num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  if(isNaN(x) || isNaN(y)) return false
  return Number(x) + Number(y);
};

const subtract = (x = 0, y = 0) => {
  if(isNaN(x) || x === null) return y
  if(isNaN(y) || y === null) return x
  return x - y;
};

const divide = (x, y) => {
  return Math.floor(x / y);
};

const multiply = (x, y) => {
  if(isNaN(x) || isNaN(y)) return false
  return x * y;
};//10

const getRemainder = (x, y) => {
  if(isNaN(x) || isNaN(y)) return false
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
  if(isNaN(num)) return false
  return num * num;
};

const cube = num => {
  if(isNaN(num)) return false
  return num * num * num;
};//15

const raiseToPower = (num, exponent) => {
  if(isNaN(num) || isNaN(exponent)) return false
  return num ** exponent;
};

const roundNumber = num => {
  if(Math.round(num) < 0) return 0
  return Math.round(num);
};

const roundUp = num => {
  if(Math.ceil(num) < 0) return 0
  return Math.ceil(num);
};

const addExclamationPoint = str => {
  return (str += '!');
};

const combineNames = (firstName, lastName) => {
  if(!firstName && !lastName) return ''
  if(!firstName) return lastName
  if(!lastName) return firstName
  return `${firstName} ${lastName}`;
};//20

const getGreeting = name => {
  if(!name) return false
  return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
  if(isNaN(length) || isNaN(width)) return false
  return length * width;
};

const getTriangleArea = (base, height) => {
  if(isNaN(base) || isNaN(height)) return false
  return 0.5 * base * height;
};

const getCircleArea = radius => {
  if(isNaN(radius) || radius === null) return false
  return Number((Math.PI * radius * radius).toFixed(2));
};

const getRectangularPrismVolume = (length, width, height) => {
  if((isNaN(length) || length === null) ||
     (isNaN(width) || width === null) ||
     (isNaN(height) || height === null))
     return false
  return width * height * length;
};//25

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
