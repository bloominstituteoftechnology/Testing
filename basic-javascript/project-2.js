/* eslint-disable arrow-parens */

const getBiggest = (x, y) => {
	if (typeof x !== 'number' || typeof y !== 'number') throw new Error('Numbers only!');
	if (x > y) {
		return x;
	} else if (x === y) {
		return y;
	}
	return y;
};

const greeting = (language) => {
	switch (language) {
		case 'German':
			return 'Guten Tag!';
		case 'Spanish':
			return 'Hola!';
		default:
			return 'Hello!';
	}
};

const isTenOrFive = (num) => {
	if (num === 10 || num === 5) {
		return true;
	}
	return false;
};

const isInRange = (num) => {
	if (num < 50 && num > 20) {
		return true;
	}
	return false;
};

const isInteger = (num) => {
	if (Math.floor(num) === num) {
		return true;
	}
	return false;
};

const fizzBuzz = (num) => {
	if (typeof num !== 'number') throw new Error('Numbers only!');
	if (num % 5 === 0 && num % 3 === 0) {
		return 'fizzbuzz';
	} else if (num % 5 === 0) {
		return 'buzz';
	} else if (num % 3 === 0) {
		return 'fizz';
	}
	return num;
};

const isPrime = (num) => {
	if (typeof num !== 'number') throw new Error('Numbers only!');
	// if (num < 0) {
	// 	return false;
	// }
	// if (num === 1 || num === 0) {
	// 	return false;
	// }
	if (num < 2) return false;
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
};

const returnFirst = (arr) => {
	if (!Array.isArray(arr)) throw new Error('Arrays only!');
	if (arr.length === 0) return undefined;
	return arr[0];
};

const returnLast = (arr) => {
	if (!Array.isArray(arr)) throw new Error('Arrays only!');
	if (arr.length === 0) return undefined;
	return arr[arr.length - 1];
};

const getArrayLength = (arr) => {
	if (!Array.isArray(arr)) throw new Error('Arrays only!');
	if (arr.length === 0) return undefined;
	return arr.length;
};

const incrementByOne = (arr) => {
	if (!Array.isArray(arr)) throw new Error('Arrays only!');
	if (arr.length === 0) return undefined;
	for (let i = 0; i < arr.length; i++) {
		arr[i]++;
	}
	return arr;
};

const addItemToArray = (arr, item) => {
	if (!Array.isArray(arr)) throw new Error('Need an array here!');
	if (item === null || item === undefined || typeof item === 'function') throw new Error('Need an item here!');
	arr.push(item);
	return arr;
};

const addItemToFront = (arr, item) => {
	if (!Array.isArray(arr)) throw new Error('Need an array here!');
	if (item === null || item === undefined || typeof item === 'function') throw new Error('Need an item here!');
	arr.unshift(item);
	return arr;
};

const wordsToSentence = (words) => {
	if (!Array.isArray(words)) throw new Error('Only arrays supported!');
	for (let j = 0; j < words.length; j++) {
		if (typeof words[j] !== 'string' && typeof words[j] !== 'number') throw new Error('Only alpha-numeric values in the array!');
	}
	let newSentence = '';
	for (let i = 0; i < words.length; i++) {
		if (i === 0) {
			newSentence += `${words[i]}`;
		} else {
			newSentence += ` ${words[i]}`;
		}
	}
	return newSentence;
};

const contains = (arr, item) => {
	if (!Array.isArray(arr)) throw new Error('Please pass in an array!');
	if (typeof item !== 'string' && typeof item !== 'number') return false;

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

const addNumbers = (numbers) => {
	if (!Array.isArray(numbers)) throw new Error('Arrays only!');
	let sumOfNumbers = 0;
	for (let i = 0; i < numbers.length; i++) {
		if (typeof numbers[i] === 'number') sumOfNumbers += numbers[i];
	}
	return sumOfNumbers;
};

const averageTestScore = (testScores) => {
	if (!Array.isArray(testScores)) throw new Error('Please pass an array!');
	let totalSumScores = 0;
	let numberOfScore = 0;
	for (let i = 0; i < testScores.length; i++) {
		if (typeof testScores[i] === 'number') {
			totalSumScores += testScores[i];
			numberOfScore++;
		}
	}
	return totalSumScores / numberOfScore;
};

const largestNumber = (numbers) => {
	if (!Array.isArray(numbers)) throw new Error('Please pass an array!');
	let numsExist = numbers.some((num) => typeof num === 'number');
	if (!numsExist) return null;

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
