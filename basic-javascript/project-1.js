/* eslint-disable arrow-parens */

// -- arithmatic operations --
// str nums are coerced to nums when multiplying, dividing, subtracting
// concatenation only happens with addition
// arr.length === 0 => 0
// arr.length === 1 => arr[0]
// arr.length > 1 => NaN
// obj => NaN
// str num => num */- num
// str num => str + str(both coerced to strings)
// str !num => NaN
// bool true => 1
// bool false => 0
// undefined => NaN
// null => 0
// NaN !== NaN => need to use isNaN() instead to check


// works with number strings, not with arrays
const multiplyByTen = num => {
  let v1;
  if (typeof num === 'object' || typeof num === 'boolean') {
    return 'Please provide a number';
  } else {
    v1 = num * 10;
    if (isNaN(v1)) {
      return 'Please provide a number';
    } else {return v1}
  }
};


// works with number strings, not with arrays
const subtractFive = num => {
  let v1;
  if (typeof num === 'object' || typeof num === 'boolean') {
    return 'Please provide a number';
  } else {
    v1 = num - 5;
    if (isNaN(v1)) {
      return 'Please provide a number';
    } else {return v1}
  }
};


// -- strings and arrays and .length--
// 'one' === [o,n,e] => true
// only strings and arrays can compare with .length
// anything else .length === undefined
// null/undefined break with .length

const areSameLength = (str1, str2) => {
  let v1;
  if (
    !Array.isArray(str1) ||
    !Array.isArray(str2) ||
    typeof str1 !== 'string' ||
    typeof str2 !== 'string'
  ) { 
    return 'Please provide a pair of strings or arrays to compare';
  } else {
    v1 = str1.length === str2.length;
    if (typeof v1 !== 'boolean') {
      return 'Please provide a pair of strings or arrays to compare';
    } else {
      return v1;
    }
  }
};


// You can compare anything
const areEqual = (x, y) => {
  v1 = x === y;
  if (typeof v1 !== 'boolean') {
    return 'unable to compare, check inputs';
  } else {
    return v1;
  }
};


// does not work with number strings or arrays
const lessThanNinety = num => {
  if (typeof num !== 'number') {
    return 'please provide a number';
  } else {
    if (num < 90) {
      return true;
    }
    return false;
  }
};


// does not work with number strings or arrays
const greaterThanFifty = num => {
  if (typeof num !== 'number') {
    return 'please provide a number';
  } else {
    if (num > 50) {
      return true;
    }
    return false;
  }
};


// only works with numbers, strings will coerce+concat
const add = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return 'please provide a number';
  }
  return x + y;
};


// only works with numbers, strings will coerce+concat
const subtract = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return 'please provide a number';
  }
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
