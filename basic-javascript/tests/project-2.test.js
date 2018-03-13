/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {

	describe('getBiggest', () => {
		it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should return the bigger number between x and y', () => {
    	const { getBiggest } = funcs;
    	let result;
    	result = getBiggest(10, 9);
    	assert.equal(result, 10);
    });
	});

	describe('greeting', () => {
		it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should return a greeting in the given language', () => {
    	const { greeting } = funcs;
    	let result;
    	result = greeting('German');
    	assert.equal(result, 'Guten Tag!');

    	result = greeting('Spanish');
    	assert.equal(result, 'Hola!');

    	result = greeting('Anything Else');
    	assert.equal(result, 'Hello!');
    });
	});

	describe('isTenOrFive', () => {
		it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return true if num is 10 or 5', () => {
    	const { isTenOrFive } = funcs;
    	let result;
    	result = isTenOrFive(10);
    	assert.equal(result, true);

    	result = isTenOrFive(5);
    	assert.equal(result, true);

    	result = isTenOrFive(1);
    	assert.equal(result, false);
    });
	});

	describe('isInRange', () => {
		it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('should return true if num is between 20 and 50', () => {
    	const { isInRange } = funcs;
    	let result;
    	result = isInRange(10);
    	assert.equal(result, false);

    	result = isInRange(5);
    	assert.equal(result, false);

    	result = isInRange(45);
    	assert.equal(result, true);
    });
	});

	describe('isInteger', () => {
		it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('should return true if num is an integer', () => {
    	const { isInteger } = funcs;
    	let result;
    	result = isInteger(10);
    	assert.equal(result, true);

    	result = isInteger(5.5);
    	assert.equal(result, false);

    	result = isInteger(45.1);
    	assert.equal(result, false);
    });
	});

	describe('fizzBuzz', () => {
		it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return fizz', () => {
    	const { fizzBuzz } = funcs;
    	let result;
    	result = fizzBuzz(9);
    	assert.equal(result, 'fizz');

    	result = fizzBuzz(27);
    	assert.equal(result, 'fizz');
    });
    it('should return buzz', () => {
    	const { fizzBuzz } = funcs;
    	let result;
    	result = fizzBuzz(25);
    	assert.equal(result, 'buzz');

    	result = fizzBuzz(50);
    	assert.equal(result, 'buzz');
    });
    it('should return fizzbuzz', () => {
    	const { fizzBuzz } = funcs;
    	let result;
    	result = fizzBuzz(15);
    	assert.equal(result, 'fizzbuzz');

    	result = fizzBuzz(45);
    	assert.equal(result, 'fizzbuzz');
    });
	});

	describe('isPrime', () => {
		it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
    it('should return true if num is prime', () => {
    	const { isPrime } = funcs;
    	let result;
    	result = isPrime(10);
    	assert.equal(result, false, 'num: 10');

    	result = isPrime(13);
    	assert.equal(result, true, 'num: 13');

    	result = isPrime(45);
    	assert.equal(result, false, 'num: 45');
    });
	});

	describe('returnFirst', () => {
		it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
    it('should return first element of array', () => {
    	const { returnFirst } = funcs;
    	let result;
    	result = returnFirst([8, 7, 3, 2]);
    	assert.equal(result, 8);
    });
	});

	describe('returnLast', () => {
		it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
    it('should return last element of array', () => {
    	const { returnLast } = funcs;
    	let result;
    	result = returnLast([8, 7, 3, 2]);
    	assert.equal(result, 2);
    });
	});

	describe('getArrayLength', () => {
		it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return length of the array', () => {
    	const { getArrayLength } = funcs;
    	let result;
    	result = getArrayLength([8, 7, 3, 2]);
    	assert.equal(result, 4);
    });
	});

	describe('incrementByOne', () => {
		it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
    it('should increment each element by one in array', () => {
    	const { incrementByOne } = funcs;
    	let result;
    	let arr = [8, 7, 3, 2];
    	result = incrementByOne(arr.slice());
    	for (let i = 0; i < result.length; i++) {
    		assert.equal(result[i], arr[i] + 1);
    	};
    });
    it('should return an array', () => {
    	const { incrementByOne } = funcs;
    	let result;
    	result = incrementByOne([8, 7, 3, 2]);
    	assert.isArray(result);
    });
	});

	describe('addItemToArray', () => {
		it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    });
    it('should add item to the array', () => {
    	const { addItemToArray } = funcs;
    	let result;
    	result = addItemToArray([8, 7, 3, 2], 'newItem');
    	assert.include(result, 'newItem');
    });
    it('should return an array', () => {
    	const { addItemToArray } = funcs;
    	let result;
    	result = addItemToArray([8, 7, 3, 2]);
    	assert.isArray(result);
    });
	});

	describe('addItemToFront', () => {
		it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    });
    it('should add item to first element of array', () => {
    	const { addItemToFront } = funcs;
    	let result;
    	result = addItemToFront([8, 7, 3, 2], 'newItem');
    	assert.equal(result[0], 'newItem');
    });
    it('should return an array', () => {
    	const { addItemToFront } = funcs;
    	let result;
    	result = addItemToFront([8, 7, 3, 2]);
    	assert.isArray(result);
    });
	});

	describe('wordsToSentence', () => {
		it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should contain all items from input array', () => {
    	const { wordsToSentence } = funcs;
    	let result;
    	let words = ['I', 'will', 'become', 'a', 'web', 'developer'];
    	result = wordsToSentence(words);
    	words.forEach((e) => {
    		assert.include(result, e);
    	});
    });
    it('should return a string', () => {
    	const { wordsToSentence } = funcs;
    	let result;
    	result = wordsToSentence(['I', 'will', 'become', 'a', 'web', 'developer']);
    	assert.isString(result);
    });
	});

	describe('contains', () => {
		it('should be a function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    });
    it('should contain item in array', () => {
    	const { contains } = funcs;
    	let result;
    	let words = ['I', 'will', 'become', 'a', 'web', 'developer'];
    	result = contains(words, 'become');
    	assert.equal(result, true, 'item: `become`');

    	result = contains(words, 'Guelmis');
    	assert.equal(result, false, 'item: `Guelmis`');
    });
    it('should return a boolean', () => {
    	const { contains } = funcs;
    	let result;
    	result = contains(['I', 'will', 'become', 'a', 'web', 'developer'], 'will');
    	assert.isBoolean(result);
    });
	});

	describe('addNumbers', () => {
		it('should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
    });
    it('should return the sum of all numbers', () => {
    	const { addNumbers } = funcs;
    	let result;
    	result = addNumbers([1, 2, 3]);
    	assert.equal(result, 6);
    });
    it('should return a number', () => {
    	const { addNumbers } = funcs;
    	let result;
    	result = addNumbers([1, 2, 3]);
    	assert.isNumber(result);
    });
	});

	describe('averageTestScore', () => {
		it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    });
    it('should return the average', () => {
    	const { averageTestScore } = funcs;
    	let result;
    	result = averageTestScore([100, 65, 76]);
    	result = Math.round(result);
    	assert.equal(result, 80);
    });
    it('should return a number', () => {
    	const { averageTestScore } = funcs;
    	let result;
    	result = averageTestScore([1, 2, 3]);
    	assert.isNumber(result);
    });
	});

	describe('largestNumber', () => {
		it('should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    });
    it('should return the largest number', () => {
    	const { largestNumber } = funcs;
    	let result;
    	result = largestNumber([1, 2, 3, 100, 50, 300, 40]);
    	assert.equal(result, 300);
    });
    it('should return a number', () => {
    	const { largestNumber } = funcs;
    	let result;
    	result = largestNumber([1, 2, 3, 100, 50, 300, 40]);
    	assert.isNumber(result);
    });
	});

});
