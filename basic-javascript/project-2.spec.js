const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe.only('project-2.js', () => {
	describe('', () => {
		// const getBiggest = (x, y) => {
		// 	if (x > y) {
		// 		return x;
		// 	} else if (x === y) {
		// 		return y;
		// 	}
		// 	return y;
		// };
	});

	describe('greeting()', () => {
		// const greeting = (language) => {
		// 	switch (language) {
		// 		case 'German':
		// 			return 'Guten Tag!';
		// 		case 'Spanish':
		// 			return 'Hola!';
		// 		default:
		// 			return 'Hello!';
		// 	}
		// };
	});

	describe('isTenOrFive()', () => {
		// const isTenOrFive = (num) => {
		// 	if (num === 10 || num === 5) {
		// 		return true;
		// 	}
		// 	return false;
		// };
	});

	describe('isInRange()', () => {
		// const isInRange = (num) => {
		// 	if (num < 50 && num > 20) {
		// 		return true;
		// 	}
		// 	return false;
		// };
	});

	describe('isInteger()', () => {
		// const isInteger = (num) => {
		// 	if (Math.floor(num) === num) {
		// 		return true;
		// 	}
		// 	return false;
		// };
	});

	describe('fizzBuzz()', () => {
		// const fizzBuzz = (num) => {
		// 	if (num % 5 === 0 && num % 3 === 0) {
		// 		return 'fizzbuzz';
		// 	} else if (num % 5 === 0) {
		// 		return 'buzz';
		// 	} else if (num % 3 === 0) {
		// 		return 'fizz';
		// 	}
		// 	return num;
		// };
	});

	describe('isPrime()', () => {
		// const isPrime = (num) => {
		// 	if (num < 0) {
		// 		return false;
		// 	}
		// 	if (num === 1 || num === 0) {
		// 		return false;
		// 	}
		// 	for (let i = 2; i < num; i++) {
		// 		if (num % i === 0) {
		// 			return false;
		// 		}
		// 	}
		// 	return true;
		// };
	});

	describe('returnFirst()', () => {
		// const returnFirst = (arr) => {
		// 	return arr[0];
		// };
	});

	describe('returnLast()', () => {
		// const returnLast = (arr) => {
		// 	return arr[arr.length - 1];
		// };
	});

	describe('getArrayLength()', () => {
		// const getArrayLength = (arr) => {
		// 	return arr.length;
		// };
	});

	describe('incrementByOne()', () => {
		// const incrementByOne = (arr) => {
		// 	for (let i = 0; i < arr.length; i++) {
		// 		arr[i]++;
		// 	}
		// 	return arr;
		// };
	});

	describe('addItemToArray()', () => {
		// const addItemToArray = (arr, item) => {
		// 	arr.push(item);
		// 	return arr;
		// };
	});

	describe('addItemToFront()', () => {
		// const addItemToFront = (arr, item) => {
		// 	arr.unshift(item);
		// 	return arr;
		// };
	});

	describe('wordsToSentence()', () => {
		// const wordsToSentence = (words) => {
		// 	let newSentence = '';
		// 	for (let i = 0; i < words.length; i++) {
		// 		if (i === 0) {
		// 			newSentence += `${words[i]}`;
		// 		} else {
		// 			newSentence += ` ${words[i]}`;
		// 		}
		// 	}
		// 	return newSentence;
		// };
	});

	describe('contains()', () => {
		// const contains = (arr, item) => {
		// 	let itemCounter = 0;
		// 	for (let i = 0; i < arr.length; i++) {
		// 		if (arr[i] === item) {
		// 			itemCounter++;
		// 		}
		// 	}
		// 	if (itemCounter > 0) {
		// 		return true;
		// 	}
		// 	return false;
		// };
	});

	describe('addNumbers()', () => {
		// const addNumbers = (numbers) => {
		// 	let sumOfNumbers = 0;
		// 	for (let i = 0; i < numbers.length; i++) {
		// 		sumOfNumbers += numbers[i];
		// 	}
		// 	return sumOfNumbers;
		// };
	});

	describe('averageTestScore()', () => {
		// const averageTestScore = (testScores) => {
		// 	let totalSumScores = 0;
		// 	let numberOfScore = 0;
		// 	for (let i = 0; i < testScores.length; i++) {
		// 		totalSumScores += testScores[i];
		// 		numberOfScore++;
		// 	}
		// 	return totalSumScores / numberOfScore;
		// };
	});

	describe('largestNumber()', () => {
		// const largestNumber = (numbers) => {
		// 	let biggestInteger = 0;
		// 	for (let i = 0; i < numbers.length; i++) {
		// 		if (numbers[i] > biggestInteger) {
		// 			biggestInteger = numbers[i];
		// 		}
		// 	}
		// 	return biggestInteger;
		// };
	});
});
