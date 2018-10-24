/* eslint-disable arrow-parens */

// errors
const {
	nonNumberTypeError,
	nonStringTypeError,
	emptyStringError,
	divideByZeroError,
	negativeDimensionError,
} = require('../errors/index.js');

const multiplyByTen = num => {
	if (typeof(num) !== 'number' || (num + '') === 'NaN') throw new Error(nonNumberTypeError);
	return num * 10;
};

const subtractFive = num => {
	if (typeof(num) !== 'number' || (num + '') === 'NaN') throw new Error(nonNumberTypeError);
	return num - 5;
};

const areSameLength = (str1, str2) => {
	if (typeof(str1) !== 'string' || typeof(str2) !== 'string') throw new Error(nonStringTypeError);
	return str1.length === str2.length;
};

const areEqual = (x, y) => {
	if (typeof(x) !== typeof(y)) return false;
	if (typeof(x) === 'object') return JSON.stringify(x) === JSON.stringify(y);
	if (typeof(x) === 'function') return x.toString() === y.toString();
	return x === y;
};

const lessThanNinety = num => {
	if (typeof(num) !== 'number' || (num + '') === 'NaN') throw new Error(nonNumberTypeError);
	if (num < 90) {
		return true;
	}
	return false;
};

const greaterThanFifty = num => {
	if (typeof(num) !== 'number' || (num + '') === 'NaN') throw new Error(nonNumberTypeError);
	if (num > 50) {
		return true;
	}
	return false;
};

const add = (x, y) => {
	if (
		typeof(x) !== 'number' ||
		typeof(y) !== 'number' ||
		(x + '') === 'NaN' ||
		(y + '') === 'NaN'
	) throw new Error(nonNumberTypeError);
	return x + y;
};

const subtract = (x, y) => {
	if (
		typeof(x) !== 'number' ||
		typeof(y) !== 'number' ||
		(x + '') === 'NaN' ||
		(y + '') === 'NaN'
	) throw new Error(nonNumberTypeError);
	return x - y;
};

const divide = (x, y) => {
	if (
		typeof(x) !== 'number' ||
		typeof(y) !== 'number' ||
		(x + '') === 'NaN' ||
		(y + '') === 'NaN'
	) throw new Error(nonNumberTypeError);
	if (y === 0) throw new Error(divideByZeroError);
	return x / y;
};

const multiply = (x, y) => {
	if (
		typeof(x) !== 'number' ||
		typeof(y) !== 'number' ||
		(x + '') === 'NaN' ||
		(y + '') === 'NaN'
	) throw new Error(nonNumberTypeError);
	return x * y;
};

const getRemainder = (x, y) => {
	if (
		typeof(x) !== 'number' ||
		typeof(y) !== 'number' ||
		(x + '') === 'NaN' ||
		(y + '') === 'NaN'
	) throw new Error(nonNumberTypeError);
	if (y === 0) throw new Error(divideByZeroError);
	return (x % y) === -0 ? 0 : (x % y);
};

const isEven = num => {
	if (typeof(num) !== 'number' || (num + '') === 'NaN') throw new Error(nonNumberTypeError);
	if (num % 2 === 0) {
		return true;
	}
	return false;
};

const isOdd = num => {
	if (typeof(num) !== 'number' || (num + '') === 'NaN') throw new Error(nonNumberTypeError);
	// if its divisible by 2, return false
	if (num % 2 === 0) {
		return false;
	}
	// if its an integer return true
	if (Math.floor(num) === num) {
		return true;
	}
	// else return false
	return false;
};

const square = num => {
	if (typeof(num) !== 'number' || (num + '') === 'NaN') throw new Error(nonNumberTypeError);
	return num * num;
};

const cube = num => {
	if (typeof(num) !== 'number' || (num + '') === 'NaN') throw new Error(nonNumberTypeError);
	return num * num * num;
};

const raiseToPower = (num, exponent) => {
	if (
		typeof(num) !== 'number' ||
		typeof(exponent) !== 'number' ||
		(num + '') === 'NaN' ||
		(exponent + '') === 'NaN'
	) throw new Error(nonNumberTypeError);
	return num ** exponent;
};

const roundNumber = num => {
	if (typeof(num) !== 'number' || (num + '') === 'NaN') throw new Error(nonNumberTypeError);
	return Math.round(num);
};

const roundUp = num => {
	if (typeof(num) !== 'number' || (num + '') === 'NaN') throw new Error(nonNumberTypeError);
	return Math.ceil(num);
};

const addExclamationPoint = str => {
	if (typeof(str) !== 'string') throw new Error(nonStringTypeError);
	return (str += '!');
};

const combineNames = (firstName, lastName) => {
	if (typeof(firstName) !== 'string' || typeof(lastName) !== 'string') throw new Error(nonStringTypeError);
	if (!firstName || !lastName) throw new Error(emptyStringError);
	return `${firstName} ${lastName}`;
};

const getGreeting = name => {
	if (typeof(name) !== 'string') throw new Error(nonStringTypeError);
	if (!name) throw new Error(emptyStringError);
	return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
	if (
		typeof(length) !== 'number' ||
		typeof(width) !== 'number' ||
		(length + '') === 'NaN' ||
		(width + '') === 'NaN'
	) throw new Error(nonNumberTypeError);
	if (length < 0 || width < 0) throw new Error(negativeDimensionError);
	return length * width;
};

const getTriangleArea = (base, height) => {
	if (
		typeof(base) !== 'number' ||
		typeof(height) !== 'number' ||
		(base + '') === 'NaN' ||
		(height + '') === 'NaN'
	) throw new Error(nonNumberTypeError);
	if (base < 0 || height < 0) throw new Error(negativeDimensionError);
	return 0.5 * base * height;
};

const getCircleArea = radius => {
	if (typeof(radius) !== 'number' || (radius + '') === 'NaN') throw new Error(nonNumberTypeError);
	if (radius < 0) throw new Error(negativeDimensionError);
	return Math.PI * radius * radius;
};

const getRectangularPrismVolume = (length, width, height) => {
	if (
		typeof(length) !== 'number' ||
		typeof(width) !== 'number' ||
		typeof(height) !== 'number' ||
		(length + '') === 'NaN' ||
		(width + '') === 'NaN' ||
		(height + '') === 'NaN'
	) throw new Error(nonNumberTypeError);
	if (length < 0 || width < 0 || height < 0) throw new Error(negativeDimensionError);
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
	getRectangularPrismVolume,
};
