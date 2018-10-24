/* eslint-disable arrow-parens */

const multiplyByTen = (num) => {
	if (!num || typeof num !== 'number') throw new Error('Only numbers supported!');
	return num * 10;
};

const subtractFive = (num) => {
	if (!num || typeof num !== 'number') throw new Error('Only numbers supported!');
	return num - 5;
};

const areSameLength = (str1, str2) => {
	if (!(str1 || str2) || typeof str1 !== 'string' || typeof str2 !== 'string') throw new Error('Provide strings to function!');
	return str1.length === str2.length;
};

const areEqual = (x, y) => {
	if (!(x || y) || typeof x !== 'number' || typeof y !== 'number') throw new Error('Only numbers supported!');
	return x === y;
};

const lessThanNinety = (num) => {
	if (!num || typeof num !== 'number') throw new Error('Only numbers supported!');
	// if (num < 90) {
	// 	return true;
	// }
	// return false;
	return num < 90 ? true : false;
};

const greaterThanFifty = (num) => {
	if (!num || typeof num !== 'number') throw new Error('Only numbers supported!');
	// if (num > 50) {
	// 	return true;
	// }
	// return false;
	return num > 50 ? true : false;
};

const add = (x, y) => {
	if (!x || !y || typeof x !== 'number' || typeof y !== 'number') throw new Error('Only numbers supported!');
	return x + y;
};

const subtract = (x, y) => {
	if (!x || !y || typeof x !== 'number' || typeof y !== 'number') throw new Error('Only numbers supported!');
	return x - y;
};

const divide = (x, y) => {
	if (!(x || y) || typeof x !== 'number' || typeof y !== 'number') throw new Error('Only numbers supported!');
	return x / y;
};

const multiply = (x, y) => {
	if (!x || !y || typeof x !== 'number' || typeof y !== 'number') throw new Error('Only numbers supported!');
	return x * y;
};

const getRemainder = (x, y) => {
	if (!x || !y || typeof x !== 'number' || typeof y !== 'number') throw new Error('Only numbers supported!');
	return x % y;
};

const isEven = (num) => {
	if (!num || typeof num !== 'number') throw new Error('Only numbers supported!');
	// if (num % 2 === 0) {
	// 	return true;
	// }
	// return false;
	return num % 2 === 0 ? true : false;
};

const isOdd = (num) => {
	if (!num || typeof num !== 'number') throw new Error('Only numbers supported!');
	// if (num % 2 === 0) {
	// 	return false;
	// }
	// return true;
	return num % 2 === 0 ? false : true;
};

const square = (num) => {
	if (!num || typeof num !== 'number') throw new Error('Only numbers supported!');
	return num * num;
};

const cube = (num) => {
	if (!num || typeof num !== 'number') throw new Error('Only numbers supported!');
	return num * num * num;
};

const raiseToPower = (num, exponent) => {
	if (!num || !exponent || typeof num !== 'number' || typeof exponent !== 'number') throw new Error('Only numbers supported!');
	return num ** exponent;
};

const roundNumber = (num) => {
	if (!num || typeof num !== 'number') throw new Error('Only numbers supported!');
	return Math.round(num);
};

const roundUp = (num) => {
	if (!num || typeof num !== 'number') throw new Error('Only numbers supported!');
	return Math.ceil(num);
};

const addExclamationPoint = (str) => {
	if (!str) throw new Error('Input required!');
	return (str += '!');
};

const combineNames = (firstName, lastName) => {
	if (!firstName || !lastName || typeof firstName !== 'string' || typeof lastName !== 'string') throw new Error('Only strings supported!');
	return `${firstName} ${lastName}`;
};

const getGreeting = (name) => {
	if (!name || typeof name !== 'string') throw new Error('Only strings supported!');
	return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
	if (!length || !width || typeof length !== 'number' || typeof width !== 'number') throw new Error('Only numbers supported!');
	return length * width;
};

const getTriangleArea = (base, height) => {
	if (!base || !height || typeof base !== 'number' || typeof height !== 'number') throw new Error('Only numbers supported!');
	return 0.5 * base * height;
};

const getCircleArea = (radius) => {
	if (!radius || typeof radius !== 'number') throw new Error('Only numbers supported!');
	return Math.PI * radius * radius;
};

const getRectangularPrismVolume = (length, width, height) => {
	if (!length || !width || !height || typeof length !== 'number' || typeof width !== 'number' || typeof height !== 'number')
		throw new Error('Only numbers supported!');
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
