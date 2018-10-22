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
	let trimmedString = str.trim();
	return (trimmedString += "!");
};

const combineNames = (firstName, lastName) => {
	let trimFirstName = firstName.trim();
	let trimLastName = lastName.trim();
	return `${trimFirstName} ${trimLastName}`;
};

const getGreeting = name => {
	let trimName = name.trim();
	return `Hello ${trimName}!`;
};

const getRectangleArea = (length, width) => {
	if (isNaN(length)) {
		return false;
	} else if (isNaN(width)) {
		return false;
	}
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
