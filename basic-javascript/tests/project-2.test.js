const chai = require('chai');
const funcs = require('../src/project-2');

const { assert } = chai;

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project Two', () => {
  let dataArray = [];

  beforeEach(() => {
    dataArray = ['apples', 'bananas', 'oranges', 'strawberry'];
  });

  afterEach(() => {
    dataArray = [];
  });

  describe('getBiggest', () => {
    const { getBiggest } = funcs;

    it('getBiggest should be a function', () => {
      assert.typeOf(getBiggest, 'function');
    });

    it('should return a number', () => {
      assert.typeOf(getBiggest(12, 42), 'number');
    });

    it('should be return 42', () => {
      assert.equal(getBiggest(12, 42), 42);
    });
  });

  describe('greeting', () => {
    const { greeting } = funcs;

    it('greeting should be a function', () => {
      assert.typeOf(greeting, 'function');
    });

    it('should return a string', () => {
      assert.typeOf(greeting('Spanish'), 'string');
    });

    it('should be return "words"', () => {
      assert.equal(greeting('Spanis'), 'Hello!');
    });
  });

  describe('isTenOrFive', () => {
    const { isTenOrFive } = funcs;

    it('isTenOrFive should be a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    });

    it('should return a boolean', () => {
      assert.typeOf(isTenOrFive(5), 'boolean');
    });

    it('should be return true', () => {
      assert.equal(isTenOrFive(8), false);
    });
  });

  describe('isInRange', () => {
    const { isInRange } = funcs;

    it('isInRange should be a function', () => {
      assert.typeOf(isInRange, 'function');
    });

    it('should return a boolean', () => {
      assert.typeOf(isInRange(35), 'boolean');
    });

    it('should be return true', () => {
      assert.equal(isInRange(20), false, 'Should return true called with 35.');
    });
  });

  describe('isInteger', () => {
    const { isInteger } = funcs;

    it('isInteger should be a function', () => {
      assert.typeOf(isInteger, 'function');
    });

    it('should return a boolean', () => {
      assert.typeOf(isInteger(35), 'boolean');
    });

    it('should be return false', () => {
      assert.equal(isInteger(35.1), false);
    });
  });

  describe('fizzBuzz', () => {
    const { fizzBuzz } = funcs;

    it('fizzBuzz should be a function', () => {
      assert.typeOf(fizzBuzz, 'function');
    });

    it('should return a a string or a number', () => {
      assert.typeOf(fizzBuzz(15), 'string');
      assert.typeOf(fizzBuzz(14), 'number');
    });

    it('should be return fizzbuzz', () => {
      assert.equal(fizzBuzz(15), 'fizzbuzz');
    });
  });

  describe('isPrime', () => {
    const { isPrime } = funcs;

    it('isPrime should be a function', () => {
      assert.typeOf(isPrime, 'function');
    });

    it('should return boolean', () => {
      assert.typeOf(isPrime(15), 'boolean');
    });

    it('should be return true', () => {
      assert.equal(isPrime(15), false);
    });
  });

  describe('returnFirst', () => {
    const { returnFirst } = funcs;

    it('returnFirst should be a function', () => {
      assert.typeOf(returnFirst, 'function');
    });

    it('should return string', () => {
      assert.typeOf(returnFirst(dataArray), 'string');
    });

    it('should be return first', () => {
      assert.equal(returnFirst(dataArray), 'apples');
    });
  });

  describe('returnLast', () => {
    const { returnLast } = funcs;

    it('returnLast should be a function', () => {
      assert.typeOf(returnLast, 'function');
    });

    it('should return string', () => {
      assert.typeOf(returnLast(dataArray), 'string');
    });

    it('should be return fourth', () => {
      assert.equal(returnLast(dataArray), 'strawberry');
    });
  });

  describe('getArrayLength', () => {
    const { getArrayLength } = funcs;

    it('getArrayLength should be a function', () => {
      assert.typeOf(getArrayLength, 'function');
    });

    it('should return number', () => {
      assert.typeOf(getArrayLength(dataArray), 'number');
    });

    it('should be return four', () => {
      assert.equal(getArrayLength(dataArray), 4);
    });
  });

  describe('incrementByOne', () => {
    const { incrementByOne } = funcs;

    it('incrementByOne should be a function', () => {
      assert.typeOf(incrementByOne, 'function');
    });

    it('should return number', () => {
      const temp = [1, 2, 3];
      assert.typeOf(incrementByOne(temp)[0], 'number');
    });

    it('should be return array + 1 across its contents', () => {
      const temp = [1, 2, 3];
      assert.equal(incrementByOne(temp)[2], 4);
    });
  });

  describe('addItemToArray', () => {
    const { addItemToArray } = funcs;

    it('addItemToArray should be a function', () => {
      assert.typeOf(addItemToArray, 'function');
    });

    it('should return array', () => {
      const temp = [1, 2, 3];
      assert.typeOf(addItemToArray(temp, 4), 'array');
    });

    it('should be return array a new item in its contents', () => {
      const temp = [1, 2, 3];
      assert.equal(addItemToArray(temp, 4)[temp.length - 1], 4);
    });
  });

  describe('addItemToFront', () => {
    const { addItemToFront } = funcs;

    it('addItemToFront should be a function', () => {
      assert.typeOf(addItemToFront, 'function');
    });

    it('should return array', () => {
      const temp = [1, 2, 3];
      assert.typeOf(addItemToFront(temp, 4), 'array');
    });

    it('should be return array a new item in its contents', () => {
      const temp = [1, 2, 3];
      assert.equal(addItemToFront(temp, 4)[0], 4, 'Should return an array with 4 at the front index.');
    });
  });

  describe('wordsToSentence', () => {
    const { wordsToSentence } = funcs;

    it('wordsToSentence should be a function', () => {
      assert.typeOf(wordsToSentence, 'function');
    });

    it('should return string', () => {
      assert.typeOf(wordsToSentence(dataArray), 'string');
    });

    it('should be return a string', () => {
      assert.equal(wordsToSentence(dataArray), 'apples bananas oranges strawberry');
    });
  });

  describe('contains', () => {
    const { contains } = funcs;

    it('contains should be a function', () => {
      assert.typeOf(contains, 'function');
    });

    it('should return a boolean', () => {
      assert.typeOf(contains(dataArray, 'first'), 'boolean');
    });

    it('should return true', () => {
      assert.equal(contains(dataArray, 'bananas'), true, 'should return true');
    });
  });

  describe('addNumbers', () => {
    const { addNumbers } = funcs;

    it('addNumbers should be a function', () => {
      assert.typeOf(addNumbers, 'function');
    });

    it('should return a number', () => {
      const temp = [1, 2, 3];
      assert.typeOf(addNumbers(temp), 'number');
    });

    it('should return 6', () => {
      const temp = [1, 2, 3];
      assert.equal(addNumbers(temp), 6);
    });
  });

  describe('averageTestScore', () => {
    const { averageTestScore } = funcs;

    it('averageTestScore should be a function', () => {
      assert.typeOf(averageTestScore, 'function');
    });

    it('should return a number', () => {
      const temp = [1, 2, 3];
      assert.typeOf(averageTestScore(temp), 'number');
    });

    it('should return 2', () => {
      const temp = [1, 2, 3];
      assert.equal(averageTestScore(temp), 2, 'should return 2');
    });
  });

  describe('largestNumber', () => {
    const { largestNumber } = funcs;

    it('largestNumber should be a function', () => {
      assert.typeOf(largestNumber, 'function');
    });

    it('should return a number', () => {
      const numbersList = [1, 2, 3];
      assert.typeOf(largestNumber(numbersList), 'number');
    });

    it('should return the largest number', () => {
      const numbersList = [1, 20, 3];
      assert.equal(largestNumber(numbersList), 20);
    });
  });
});
