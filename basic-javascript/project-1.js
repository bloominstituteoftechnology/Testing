/* eslint-disable arrow-parens */

const nonNumberTypeError = 'Value must be a number.';
const nonStringTypeError = 'Value must be a string.';

const multiplyByTen = num => {
	if (typeof(num) !== 'number') throw new Error(nonNumberTypeError);
	return num * 10;
};

const subtractFive = num => {
	if (typeof(num) !== 'number') throw new Error(nonNumberTypeError);
	return num - 5;
};

const areSameLength = (str1, str2) => {
	if (typeof(str1) !== 'string' || typeof(str2) !== 'string') throw new Error(nonStringTypeError);
	return str1.length === str2.length;
};

const areEqual = (x, y) => {
	return x === y;
};

const lessThanNinety = num => {
	if (typeof(num) !== 'number') throw new Error(nonNumberTypeError);
	if (num < 90) {
		return true;
	}
	return false;
};

const greaterThanFifty = num => {
	if (typeof(num) !== 'number') throw new Error(nonNumberTypeError);
	if (num > 50) {
		return true;
	}
	return false;
};

const add = (x, y) => {
	if (typeof(x) !== 'number' || typeof(y) !== 'number') throw new Error(nonNumberTypeError);
	return x + y;
};

const subtract = (x, y) => {
	if (typeof(x) !== 'number' || typeof(y) !== 'number') throw new Error(nonNumberTypeError);
	return x - y;
};

const divide = (x, y) => {
	if (typeof(x) !== 'number' || typeof(y) !== 'number') throw new Error(nonNumberTypeError);
	if (y === 0) throw new Error('Cannot divide by zero.');
	return x / y;
};

const multiply = (x, y) => {
	if (typeof(x) !== 'number' || typeof(y) !== 'number') throw new Error(nonNumberTypeError);
	return x * y;
};

const getRemainder = (x, y) => {
	if (typeof(x) !== 'number' || typeof(y) !== 'number') throw new Error(nonNumberTypeError);
	if (y === 0) throw new Error('Cannot divide by zero.');
	return (x % y) === -0 ? 0 : (x % y);
};

const isEven = num => {
	if (typeof(num) !== 'number') throw new Error(nonNumberTypeError);
	if (num % 2 === 0) {
		return true;
	}
	return false;
};

const isOdd = num => {
	if (typeof(num) !== 'number') throw new Error(nonNumberTypeError);
	if (num % 2 === 0) {
		return false;
	}
	return true;
};

const square = num => {
	if (typeof(num) !== 'number') throw new Error(nonNumberTypeError);
	return num * num;
};

const cube = num => {
	if (typeof(num) !== 'number') throw new Error(nonNumberTypeError);
	return num * num * num;
};

const raiseToPower = (num, exponent) => {
	if (typeof(num) !== 'number' || typeof(exponent) !== 'number') throw new Error(nonNumberTypeError);
	return num ** exponent;
};

const roundNumber = num => {
	if (typeof(num) !== 'number') throw new Error(nonNumberTypeError);
	return Math.round(num);
};

const roundUp = num => {
	if (typeof(num) !== 'number') throw new Error(nonNumberTypeError);
	return Math.ceil(num);
};

const addExclamationPoint = str => {
	if (typeof(str) !== 'string') throw new Error(nonStringTypeError);
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
