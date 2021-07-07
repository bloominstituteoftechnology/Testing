/* eslint-disable arrow-parens */

// -- What Ifs -- 
// Argument(s) = undefined
// Argument(s) = null
// Argument(s) = string
// Argument(s) = number
// Argument(s) = negative number
// Argument(s) = floats
// Argument(s) = number/sum larger than Number.MAX_VALUE
// Argument(s) = NaN
// Argument(s) = Array
// Argument(s) = Object
// Argument(s) = Function
// Look out for coercion and concatenation
// Look out for truthy and falsy values



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
// missing arg => undefined

const areSameLength = (str1, str2) => {
  if (str1 === undefined || str2 === undefined) {
    return 'Please provide a pair of strings or arrays to compare';
  }

  if (str1 === null || str2 === null) {
    return 'Please provide a pair of strings or arrays to compare';
  }

  let v1;
  if (
    !Array.isArray(str1) &&
    typeof str1 !== 'string' ||
    !Array.isArray(str2) &&
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
  if (x === undefined || y === undefined) {
    return 'Please provide two values to compare';
  }

  if (x === null || y === null) {
    return 'Please provide two values to compare';
  }

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
  if (x === undefined || y === undefined) {
    return 'Please provide two values';
  }

  if (x === null || y === null) {
    return 'Please provide two values';
  }

  if (typeof x !== 'number' || typeof y !== 'number') {
    return 'please provide two numbers';
  }

  return x + y;
};


// works with numbers and number strings
const subtract = (x, y) => {
  let v1;

  if (x === undefined || y === undefined) {
    return 'Please provide two values';
  }

  if (typeof x === 'object' || typeof x === 'boolean') {
    return 'Please provide two numbers';
  }

  if (typeof y === 'object' || typeof y === 'boolean') {
    return 'Please provide two numbers';
  }

  v1 = x - y;

  if (isNaN(v1)) {
    return 'Please provide a number';
  }

  return x - y;
};


// works with numbers and number strings
const divide = (x, y) => {
  let v1;
  if (x === undefined || y === undefined) {
    return 'Please provide two values';
  }

  if (typeof x === 'object' || typeof x === 'boolean') {
    return 'Please provide two numbers';
  }

  if (typeof y === 'object' || typeof y === 'boolean') {
    return 'Please provide two numbers';
  }

  v1 = x / y;

  if (isNaN(v1)) {
    return 'Please provide a number';
  }

  return x / y;
};


// works with numbers and number strings
const multiply = (x, y) => {
  let v1;
  if (x === undefined || y === undefined) {
    return 'Please provide two values';
  }

  if (typeof x === 'object' || typeof x === 'boolean') {
    return 'Please provide two numbers';
  }

  if (typeof y === 'object' || typeof y === 'boolean') {
    return 'Please provide two numbers';
  }

  v1 = x * y;

  if (isNaN(v1)) {
    return 'Please provide a number';
  }

  return x * y;
};


// works with numbers and number strings
const getRemainder = (x, y) => {
  if (x === undefined || y === undefined) {
    return 'Please provide two values';
  }

  if (typeof x === 'object' || typeof x === 'boolean') {
    return 'Please provide two numbers';
  }

  if (typeof y === 'object' || typeof y === 'boolean') {
    return 'Please provide two numbers';
  }

  v1 = x % y;

  if (isNaN(v1)) {
    return 'Please provide a number';
  }

  return x % y;
};


// works with numbers and number strings
const isEven = num => {
  if (num === undefined) {
    return 'Please provide a value';
  }

  if (typeof num === 'object' || typeof num === 'boolean') {
    return 'Please provide a number';
  }

  if (num % 2 === 0) {
    return true;
  }
  return false;
};


// works with numbers and number strings
const isOdd = num => {
  if (num === undefined) {
    return 'Please provide a value';
  }

  if (typeof num === 'object' || typeof num === 'boolean') {
    return 'Please provide a number';
  }

  if (num % 2 === 0) {
    return false;
  }
  return true;
};


// works with numbers and number strings
const square = num => {
  if (num === undefined) {
    return 'Please provide a value';
  }

  if (typeof num === 'object' || typeof num === 'boolean') {
    return 'Please provide a number';
  }

  return num * num;
};


// works with numbers and number strings
const cube = num => {
  if (num === undefined) {
    return 'Please provide a value';
  }

  if (typeof num === 'object' || typeof num === 'boolean') {
    return 'Please provide a number';
  }

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
