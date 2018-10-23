/* eslint-disable arrow-parens */

const nonNumberTypeError = 'Value must be a number.';
const nonStringTypeError = 'Value must be a string.';
const nonArrayTypeError = 'Value must be an array.';
const emptyArrayError = 'Array cannot be empty.';

const getBiggest = (x, y) => {
	if (typeof(x) !== 'number' || typeof(y) !== 'number') throw new Error(nonNumberTypeError);
	if (x > y) {
		return x;
	} else if (x === y) {
		return y;
	}
	return y;
};

const greeting = language => {
	if (typeof(language) !== 'string') throw new Error(nonStringTypeError);
	switch (language) {
		case 'German':
		return 'Guten Tag!';
		case 'Spanish':
		return 'Hola!';
		default:
		return 'Hello!';
	}
};

const isTenOrFive = num => {
	if (typeof(num) !== 'number') throw new Error(nonNumberTypeError);
	if (num === 10 || num === 5) {
		return true;
	}
	return false;
};

const isInRange = num => {
	if (typeof(num) !== 'number') throw new Error(nonNumberTypeError);
	if (num < 50 && num > 20) {
		return true;
	}
	return false;
};

const isInteger = num => {
	if (typeof(num) !== 'number') throw new Error(nonNumberTypeError);
	if (Math.floor(num) === num) {
		return true;
	}
	return false;
};

const fizzBuzz = num => {
	if (typeof(num) !== 'number') throw new Error(nonNumberTypeError);
	if (num % 5 === 0 && num % 3 === 0) {
		return 'fizzbuzz';
	} else if (num % 5 === 0) {
		return 'buzz';
	} else if (num % 3 === 0) {
		return 'fizz';
	}
	return num;
};

const isPrime = num => {
	if (typeof(num) !== 'number') throw new Error(nonNumberTypeError);
	if (num < 0) {
		return false;
	}
	if (num === 1 || num === 0) {
		return false;
	}
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
};

const returnFirst = arr => {
	if (!Array.isArray(arr)) throw new Error(nonArrayTypeError);
	if (!arr.length) throw new Error(emptyArrayError);
	return arr[0];
};

const returnLast = arr => {
	if (!Array.isArray(arr)) throw new Error(nonArrayTypeError);
	if (!arr.length) throw new Error(emptyArrayError);
	return arr[arr.length - 1];
};

const getArrayLength = arr => {
	if (!Array.isArray(arr)) throw new Error(nonArrayTypeError);
	return arr.length;
};

const incrementByOne = arr => {
	if (!Array.isArray(arr)) throw new Error(nonArrayTypeError);
	if (!arr.length) throw new Error(emptyArrayError);
	for (let i = 0; i < arr.length; i++) {
		if (typeof(arr[i]) !== 'number') throw new Error(nonNumberTypeError);
		arr[i]++;
	}
	return arr;
};

const addItemToArray = (arr, item) => {
	if (!Array.isArray(arr)) throw new Error(nonArrayTypeError);
	if (item === undefined) throw new Error('Item cannot be undefined.');
	arr.push(item);
	return arr;
};

const addItemToFront = (arr, item) => {
	if (!Array.isArray(arr)) throw new Error(nonArrayTypeError);
	if (item === undefined) throw new Error('Item cannot be undefined.');
	arr.unshift(item);
	return arr;
};

const wordsToSentence = words => {
	if (!Array.isArray(words)) throw new Error(nonArrayTypeError);
	if (!words.length) throw new Error(emptyArrayError);
	let newSentence = '';
	for (let i = 0; i < words.length; i++) {
		if (typeof(words[i]) !== 'string') throw new Error(nonStringTypeError);
		if (i === 0) {
			newSentence += `${words[i]}`;
		} else {
			newSentence += ` ${words[i]}`;
		}
	}
	return newSentence;
};

const contains = (arr, item) => {
	if (!Array.isArray(arr)) throw new Error(nonArrayTypeError);
	if (item === undefined) throw new Error('Item cannot be undefined.');
	let itemCounter = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === item) {
			itemCounter++;
		}
	}
	if (itemCounter > 0) {
		return true;
	}
	return false;
};

const addNumbers = numbers => {
	if (!Array.isArray(numbers)) throw new Error(nonArrayTypeError);
	let sumOfNumbers = 0;
	for (let i = 0; i < numbers.length; i++) {
		if (typeof(numbers[i]) !== 'number') throw new Error(nonNumberTypeError);
		sumOfNumbers += numbers[i];
	}
	return sumOfNumbers;
};

const averageTestScore = testScores => {
  let totalSumScores = 0;
  let numberOfScore = 0;
  for (let i = 0; i < testScores.length; i++) {
    totalSumScores += testScores[i];
    numberOfScore++;
  }
  return totalSumScores / numberOfScore;
};

const largestNumber = numbers => {
  let biggestInteger = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggestInteger) {
      biggestInteger = numbers[i];
    }
  }
  return biggestInteger;
};

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
};
