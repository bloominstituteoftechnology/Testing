const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => { // main test suite

  describe('`getBiggest`', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it(`should return 'x'`, () => {
      const getBiggest = funcs.getBiggest;
      const x = 10; const y = 8;
      const result = getBiggest(x, y)
      assert.equal(result, x);
    });
    it(`should return 'y' when 'x' === 'y'`, () => {
      const getBiggest = funcs.getBiggest;
      const x = 10; const y = 10;
      const result = getBiggest(x, y)
      assert.equal(result, y);
    });
    it(`should return y`, () => {
      const getBiggest = funcs.getBiggest;
      const x = 10; const y = 20;
      const result = getBiggest(x, y)
      assert.equal(result, y);
    });
  });

  describe(`'greeting'`, () => {
    it(`should be a function`, () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should return correct greeting for German, English, and Spanish', () => {
      const greeting = funcs.greeting;
      const german = greeting('German');
      const english = greeting('English');
      const spanish = greeting('Spanish');
      const base = greeting('random language');
      assert.equal(german, 'Guten Tag!');
      assert.equal(english, 'Hello!');
      assert.equal(spanish, 'Hola!');
      assert.equal(base, 'Hello!');
    });
  });

  describe(`isTenOrFive`, () => {
    it(`should be a function`, () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it(`should return a boolean`, () => {
      const isTenOrFive = funcs.isTenOrFive;
      const result = isTenOrFive(6);
      assert.isBoolean(result);
    });
    it(`should return true for '5' and '10'`, () => {
      const isTenOrFive = funcs.isTenOrFive;
      const fiveResult = isTenOrFive(5);
      const tenResult = isTenOrFive(10);
      assert.isOk(fiveResult);
      assert.isOk(tenResult);
    });
    it(`should return false`, () => {
      const isTenOrFive = funcs.isTenOrFive;
      const sixResult = isTenOrFive(6);
      assert.isNotOk(sixResult);
    });
  });

  describe('isInRange', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function')
    });
    it('should return a boolean', () => {
      const isInRange = funcs.isInRange;
      const result = isInRange(11);
      assert.isBoolean(result);
    });
    it('should return true', () => {
      const isInRange = funcs.isInRange;
      const result = isInRange(30);
      assert.isOk(result);
    });
    it('should return false', () => {
      const isInRange = funcs.isInRange;
      const result = isInRange(78);
      assert.isNotOk(result);
    });
  });

  describe('isInteger', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('should return a boolean', () => {
      const isInteger = funcs.isInteger;
      const result = isInteger(3);
      assert.isBoolean(result);
    });
    it('should return true', () => {
      const isInteger = funcs.isInteger;
      const threeResult = isInteger(3);
      const tenResult = isInteger(10);
      assert.isOk(threeResult);
      assert.isOk(tenResult);
    });
    it('should return false', () => {
      const isInteger = funcs.isInteger;
      const result = isInteger(3.32);
      assert.isNotOk(result);
    });
  });

  describe('fizzBuzz', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return fizz', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const result = fizzBuzz(3);
      assert.equal(result, 'fizz');
    });
    it('should return buzz', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const result = fizzBuzz(5);
      assert.equal(result, 'buzz');
    });
    it('should return fizzbuzz', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const result = fizzBuzz(15);
      assert.equal(result, 'fizzbuzz');
    });
    it('should return back the number passed in', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const result = fizzBuzz(1);
      assert.equal(result, 1);
    });

  });

  describe('isPrime', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function')
    });
    it('should return a boolean', () => {
      const isPrime = funcs.isPrime;
      const result = isPrime(2);
      assert.isBoolean(result);
    });
    it('should return false for negative numbers', () => {
      const isPrime = funcs.isPrime;
      const result = isPrime(-1);
      assert.isNotOk(result);
    });
    it('should return false', () => {
      const isPrime = funcs.isPrime;
      const oneResult = isPrime(1);
      const zeroResult = isPrime(0);
      const twelveResult = isPrime(12)
      assert.isNotOk(oneResult);
      assert.isNotOk(zeroResult);
      assert.isNotOk(twelveResult);
    });
    it('should return true', () => {
      const isPrime = funcs.isPrime;
      const elevenResult = isPrime(11);
      const seventeenResult = isPrime(17);
      assert.isOk(elevenResult);
      assert.isOk(seventeenResult);
    });
  });

  describe('returnFirst', () => {
    it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
    it('should return the first item from array', () => {
      const returnFirst = funcs.returnFirst;
      const array = [10, 11, 12];
      const arrayTwo = [100, 110, 120];
      const result = returnFirst(array);
      const resultTwo = returnFirst(arrayTwo);
      assert.equal(result, 10);
      assert.equal(resultTwo, 100);
    });
  });

  describe('returnLast', () => {
    it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
    it('should return the last number in the arraay', () => {
      const returnLast = funcs.returnLast;
      const array = [10, 11, 12];
      const result = returnLast(array)
      assert.equal(result, 12);
    });
  });

  describe('getArrayLength', () => {
    it('should be a fuction', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return the lenght of the array', () => {
      const getArrayLength = funcs.getArrayLength;
      const array = [10, 11, 12, 13, 14];
      const result = getArrayLength(array);
      assert.equal(result, 5);
    });
  });

  describe('incrementByOne', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
    it('should return an array', () => {
      const incrementByOne = funcs.incrementByOne;
      const array = [10, 11, 12, 13, 14];
      const result = incrementByOne(array);
      assert.typeOf(result, 'array');
    });
    it('should increment each element in the array by one', () => {
      const incrementByOne = funcs.incrementByOne;
      const array = [10, 11, 12, 13, 14];
      const expectedResult = [11, 12, 13, 14, 15];
      const result = incrementByOne(array);
      assert.sameOrderedMembers(result, expectedResult);
    });
  });

  describe('addItemToArray', () => {
    it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    });
    it('should return an array', () => {
      const addItemToArray = funcs.addItemToArray;
      const array = [1, 2, 3, 4];
      const result = addItemToArray(array);
      assert.typeOf(result, 'array');
    });
    it('should add the item passed to the end of the array', () => {
      const addItemToArray = funcs.addItemToArray;
      const array = [1, 2, 3, 4];
      const lastItem = addItemToArray(array, 8)[array.length - 1];
      assert.equal(lastItem, 8);
    });
  });

  describe('addItemToFront', () => {
    it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    });
    it('should retrn an array', () => {
      const addItemToFront = funcs.addItemToFront;
      const array = [10, 11, 12];
      const result = addItemToFront(array, 9);
      assert.typeOf(result, 'array');
    });

    it('should return the item passed as the first item in the array', () => {
      const addItemToFront = funcs.addItemToFront;
      const array = [10, 11, 12];
      const result = addItemToFront(array, 9)[0];
      assert.equal(result, 9);
    });
  });

  describe('wordsToSentence', () => {
    it('should be a function ', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function')
    });
    it('should return a string', () => {
      const wordsToSentence = funcs.wordsToSentence;
      const words = ['Hello', 'my', 'name', 'is', 'John']
      const result = wordsToSentence(words);
      assert.typeOf(result, 'string');
    });
    it('should return the `Hello my name is John`', () => {
      const wordsToSentence = funcs.wordsToSentence;
      const words = ['Hello', 'my', 'name', 'is', 'John']
      const result = wordsToSentence(words);
      assert.equal(result, 'Hello my name is John');
    });
  });

  describe('contains', () => {
    it('should be a function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    });
    it('should return a bolean', () => {
      const contains = funcs.contains;
      const array = [1, 2, 3, 4, 5];
      const result = contains(array, 3);
      assert.isBoolean(result);
    });
    it('should return true', () => {
      const contains = funcs.contains;
      const array = [1, 2, 3, 4, 5];
      const result = contains(array, 3);
      assert.isOk(result);
    });
    it('should return false', () => {
      const contains = funcs.contains;
      const array = [1, 2, 3, 4, 5];
      const result = contains(array, 10);
      assert.isNotOk(result);
    });
  });

  describe('addNumbers', () => {
    it('should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function')
    });
    it('should return a number', () => {
      const addNumbers = funcs.addNumbers;
      const nums = [10, 20, 30];
      const result = addNumbers(nums);
      assert.typeOf(result, 'number');
    });
    it('should return 60', () => {
      const addNumbers = funcs.addNumbers;
      const nums = [10, 20, 30];
      const result = addNumbers(nums);
      assert.equal(result, 60);
    });
  });

  describe('averageTestScore', () => {
    it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    });
    it('should return a number', () => {
      const averageTestScore = funcs.averageTestScore;
      const nums = [100, 80, 100];
      const result = averageTestScore(nums);
      assert.typeOf(result, 'number');
    });
    it('should return the average of the scores', () => {
      const averageTestScore = funcs.averageTestScore;
      const nums = [100, 80, 100];
      const result = Math.floor(averageTestScore(nums));
      assert.equal(result, 93);
    });
  });

  describe('largestNumber', () => {
    it('should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    });
    it('should return a number', () => {
      const largestNumber = funcs.largestNumber;
      const nums = [568, 8932, 36];
      const result = largestNumber(nums);
      assert.typeOf(result, 'number');
    });
    it('should return the largest number in the array', () => {
      const largestNumber = funcs.largestNumber;
      const nums = [568, 8932, 36];
      const result = largestNumber(nums);
      assert.equal(result, 8932);
    });
  });













});
