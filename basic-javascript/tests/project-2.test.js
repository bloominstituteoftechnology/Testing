const assert = require('chai').assert;
const funcs = require('../src/project-2');

describe('Project Two', () => {
  let mockArray = [];
  beforeEach(() => {
    mockArray = ['first', 'second', 'third', 'fourth'];
  });

  afterEach(() => {
    mockArray = [];
  });

  describe('getBiggest', () => {
    it('getBiggest should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.isFunction(getBiggest, 'getBiggest is a function');
    });

    it('should return a number', () => {
      const getBiggest = funcs.getBiggest;
      assert.isNumber(getBiggest(12, 42), 'getBiggest is a number');
    });

    it('should be return 42', () => {
      const getBiggest = funcs.getBiggest;
      assert.equal(getBiggest(12, 42), 42, 'getBiggest is 42');
    });
  });

  describe('greeting', () => {
    it('greeting should be a function', () => {
      const greeting = funcs.greeting;
      assert.isFunction(greeting, 'greeting is a function');
    });

    it('should return a string', () => {
      const greeting = funcs.greeting;
      assert.isString(greeting('Spanish'), 'Should return Hola! A string.');
    });

    it('should be return "words"', () => {
      const greeting = funcs.greeting;
      assert.equal(greeting('Spanis'), 'Hello!', 'Don\'t Holla at me');
    });
  });

  describe('isTenOrFive', () => {
    it('isTenOrFive should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.isFunction(isTenOrFive, 'isTenOrFive is a function');
    });

    it('should return a boolean', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.isBoolean(isTenOrFive(5), 'Should return true.');
    });

    it('should be return true', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.equal(isTenOrFive(8), false, 'Should return true called with 10.');
    });
  });

  describe('isInRange', () => {
    it('isInRange should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.isFunction(isInRange, 'isInRange is a function');
    });

    it('should return a boolean', () => {
      const isInRange = funcs.isInRange;
      assert.isBoolean(isInRange(35), 'Should return true.');
    });

    it('should be return true', () => {
      const isInRange = funcs.isInRange;
      assert.equal(isInRange(20), false, 'Should return true called with 35.');
    });
  });

  describe('isInteger', () => {
    it('isInteger should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.isFunction(isInteger, 'isInteger is a function');
    });

    it('should return a boolean', () => {
      const isInteger = funcs.isInteger;
      assert.isBoolean(isInteger(35), 'Should return true.');
    });

    it('should be return false', () => {
      const isInteger = funcs.isInteger;
      assert.equal(isInteger(35.1), false, 'Should return true called with 35.');
    });
  });

  describe('fizzBuzz', () => {
    it('fizzBuzz should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.isFunction(fizzBuzz, 'fizzBuzz is a function');
    });

    it('should return a a string or a number', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.isString(fizzBuzz(15), 'Should return fizzbuzz.');
      assert.isNumber(fizzBuzz(14), 'Should return number.');
    });

    it('should be return fizzbuzz', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(15), 'fizzbuzz', 'Should return fizzbuzz with 15.');
    });
  });

  describe('isPrime', () => {
    it('isPrime should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.isFunction(isPrime, 'isPrime is a function');
    });

    it('should return boolean', () => {
      const isPrime = funcs.isPrime;
      assert.isBoolean(isPrime(15), 'Should return false.');
    });

    it('should be return true', () => {
      const isPrime = funcs.isPrime;
      assert.equal(isPrime(15), false, 'Should return false with 15.');
    });
  });

  describe('returnFirst', () => {
    it('returnFirst should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.isFunction(returnFirst, 'returnFirst is a function');
    });

    it('should return string', () => {
      const returnFirst = funcs.returnFirst;
      assert.isString(returnFirst(mockArray), 'Should return string in this case.');
    });

    it('should be return first', () => {
      const returnFirst = funcs.returnFirst;
      assert.equal(returnFirst(mockArray), 'first', 'Should return first.');
    });
  });

  describe('returnLast', () => {
    it('returnLast should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.isFunction(returnLast, 'returnLast is a function');
    });

    it('should return string', () => {
      const returnLast = funcs.returnLast;
      assert.isString(returnLast(mockArray), 'Should return string in this case.');
    });

    it('should be return fourth', () => {
      const returnLast = funcs.returnLast;
      assert.equal(returnLast(mockArray), 'fourth', 'Should return first.');
    });
  });

  describe('getArrayLength', () => {
    it('getArrayLength should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.isFunction(getArrayLength, 'getArrayLength is a function');
    });

    it('should return number', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.isNumber(getArrayLength(mockArray), 'Should return number.');
    });

    it('should be return four', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.equal(getArrayLength(mockArray), 4, 'Should return 4.');
    });
  });

  describe('incrementByOne', () => {
    it('incrementByOne should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.isFunction(incrementByOne, 'incrementByOne is a function');
    });

    it('should return number', () => {
      const incrementByOne = funcs.incrementByOne;
      const temp = [1,2,3];
      assert.isNumber(incrementByOne(temp)[0], 'Should return number in this case.');
    });

    it('should be return array + 1 across its contents', () => {
      const incrementByOne = funcs.incrementByOne;
      const temp = [1,2,3];
      assert.equal(incrementByOne(temp)[2], 4, 'Should return an array with +1, like the context of a clampedArray.');
    });
  });

  describe('addItemToArray', () => {
    it('addItemToArray should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.isFunction(addItemToArray, 'addItemToArray is a function');
    });

    it('should return array', () => {
      const addItemToArray = funcs.addItemToArray;
      const temp = [1,2,3];
      assert.isArray(addItemToArray(temp, 4), 'Should return array.');
    });

    it('should be return array a new item in its contents', () => {
      const addItemToArray = funcs.addItemToArray;
      const temp = [1,2,3];
      assert.equal(addItemToArray(temp, 4)[temp.length - 1], 4, 'Should return an array with 4 at the last index.');
    });
  });

  describe('addItemToFront', () => {
    it('addItemToFront should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.isFunction(addItemToFront, 'addItemToFront is a function');
    });

    it('should return array', () => {
      const addItemToFront = funcs.addItemToFront;
      const temp = [1,2,3];
      assert.isArray(addItemToFront(temp, 4), 'Should return array.');
    });

    it('should be return array a new item in its contents', () => {
      const addItemToFront = funcs.addItemToFront;
      const temp = [1,2,3];
      assert.equal(addItemToFront(temp, 4)[0], 4, 'Should return an array with 4 at the front index.');
    });
  });

  describe('wordsToSentence', () => {
    it('wordsToSentence should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.isFunction(wordsToSentence, 'wordsToSentence is a function');
    });

    it('should return string', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.isString(wordsToSentence(mockArray), 'Should return a string.');
    });

    it('should be return a string', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.equal(wordsToSentence(mockArray), 'first second third fourth', 'Should return a string.');
    });
  });

  describe('contains', () => { // array , item > bool
    it('contains should be a function', () => {
      const contains = funcs.contains;
      assert.isFunction(contains, 'contains is a function');
    });

    it('should return a boolean', () => {
      const contains = funcs.contains;
      assert.isBoolean(contains(mockArray, 'first'), 'Should return a boolean value.');
    });

    it('should return true', () => {
      const contains = funcs.contains;
      assert.equal(contains(mockArray, 'fourth'), true, 'should return true');
    });
  });

  describe('addNumbers', () => {
    it('contains should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.isFunction(addNumbers, 'addNumbers is a function');
    });

    it('should a sum of a given array', () => {
      const addNumbers = funcs.addNumbers;
      assert.equal(addNumbers([1, 2, 3, 4, 5]), 15, 'Should return a correct sum value.');
    });

    it('should return a number', () => {
      const addNumbers = funcs.addNumbers;
      assert.isNumber(addNumbers([1, 32, 44]), true, 'should return true');
    });
  });

  describe('averageTestScore', () => {
   it('contains should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.isFunction(averageTestScore, 'averageTestScore is a function');
    });

    it('should return a mean of a given array', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.equal(averageTestScore([1, 2, 3, 4, 5]), 3, 'Should return a correct mean value.');
    });

    it('should return a number', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.isNumber(averageTestScore([1, 32, 44]), true, 'should return true');
    });
  });

  describe('largestNumber', () => {
    it('contains should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.isFunction(largestNumber, 'addNumbers is a function');
    });

    it('should the largest number from a given array', () => {
      const largestNumber = funcs.largestNumber;
      assert.equal(largestNumber([1, 2, 3, 4, 5]), 5, 'Should return the largest value.');
    });

    it('should return a number', () => {
      const largestNumber = funcs.largestNumber;
      assert.isNumber(largestNumber([1, 32, 44]), true, 'should return true');
    });
  });
});
