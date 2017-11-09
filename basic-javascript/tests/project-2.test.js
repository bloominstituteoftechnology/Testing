const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should return a number', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest(2, 6), 'number');
    });
    it('should return the correct outcome', () => {
      const getBiggest = funcs.getBiggest;
      assert.equal(getBiggest(2, 5), 5);
      assert.equal(getBiggest(40, -60), 40);
    });
  });

  describe('`greeting`', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should return a number', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting(2, 6), 'string');
    });
    it('should return the correct outcome', () => {
      const greeting = funcs.greeting;
      assert.equal(greeting('German'), 'Guten Tag!');
      assert.equal(greeting(), 'Hello!');
    });
  });

  describe('`isTenOrFive`', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return a boolean', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive(4), 'boolean');
    });
    it('should return the correct outcome', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.equal(isTenOrFive(5), true);
      assert.equal(isTenOrFive(10), true);
      assert.equal(isTenOrFive({}), false);
    });
  });

  describe('`isInRange`', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('should return a boolean', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange(4), 'boolean');
    });
    it('should return the correct outcome', () => {
      const isInRange = funcs.isInRange;
      assert.equal(isInRange(5), false);
      assert.equal(isInRange(25), true);
      assert.equal(isInRange({}), false);
    });
  });

  describe('`isInteger`', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('should return a boolean', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger(4), 'boolean');
    });
    it('should return the correct outcome', () => {
      const isInteger = funcs.isInteger;
      assert.equal(isInteger(5.3), false);
      assert.equal(isInteger(25), true);
      assert.equal(isInteger(NaN), false);
    });
  });

  describe('`fizzBuzz`', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return a number or a string', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz(3), 'string');
      assert.typeOf(fizzBuzz(4), 'number');
    });
    it('should return the correct outcome', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(15), 'fizzbuzz');
      assert.equal(fizzBuzz(3), 'fizz');
      assert.equal(fizzBuzz(5), 'buzz');
      assert.equal(fizzBuzz(4), 4);
    });
  });

  describe('`isPrime`', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.isFunction(isPrime);
    });
    it('should return a boolean', () => {
      const isPrime = funcs.isPrime;
      assert.isBoolean(isPrime(3));
    });
    it('should return the correct outcome', () => {
      const isPrime = funcs.isPrime;
      assert.equal(isPrime(10), false);
      assert.equal(isPrime(3), true);
      assert.equal(isPrime(1), false);
    });
  });

  describe('`returnFirst`', () => {
    it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.isFunction(returnFirst);
    });
    it('should return the first value', () => {
      const returnFirst = funcs.returnFirst;
      assert.equal(returnFirst([3, 4, 5]), 3);
      assert.equal(returnFirst([]), undefined);
    });
  });

  describe('`returnLast`', () => {
    it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.isFunction(returnLast);
    });
    it('should return the last value', () => {
      const returnLast = funcs.returnLast;
      assert.equal(returnLast([3, 4, null]), null);
      assert.equal(returnLast([]), undefined);
    });
  });

  describe('`getArrayLength`', () => {
    it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.isFunction(getArrayLength);
    });
    it('should return an array length', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.equal(getArrayLength([3, 4, null]), 3);
      assert.equal(getArrayLength([]), 0);
    });
  });

  describe('`incrementByOne`', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.isFunction(incrementByOne);
    });
    it('should return an array', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.isArray(incrementByOne([23, 4]));
    });
    it('should return increment by one', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.sameMembers(incrementByOne([23, 4]), [24, 5]);
    });
  });

  describe('`addItemToArray`', () => {
    it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.isFunction(addItemToArray);
    });
    it('should return an array', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.isArray(addItemToArray([23, 4], 4));
    });
    it('should add item to an array', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.lengthOf(addItemToArray([3, 4, 6], 5), 4);
      assert.include(addItemToArray([3, 4, 6], 2), 2);
    });
  });

  describe('`addItemToFront`', () => {
    it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.isFunction(addItemToFront);
    });
    it('should return an array', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.isArray(addItemToFront([23, 4], 4));
    });
    it('should add item to the front of array', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.lengthOf(addItemToFront([3, 4, 6], 5), 4);
      assert.include(addItemToFront([3, 4, 6], 2), 2);
      assert.strictEqual(addItemToFront([3, 4, 6], 2)[0], 2);
    });
  });

  describe('`wordsToSentence`', () => {
    it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.isFunction(wordsToSentence);
    });
    it('should return a string', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence(), 'string');
    });
    it('should concat words to sentence', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.equal(wordsToSentence(['the', 'tea', 'has', 'been', 'served']), 'the tea has been served');
    });
  });

  describe('`contains`', () => {
    it('should be a function', () => {
      const contains = funcs.contains;
      assert.isFunction(contains);
    });
    it('should return a boolean', () => {
      const contains = funcs.contains;
      assert.isBoolean(contains([3, 5, 6], 4));
    });
    it('should contain an item', () => {
      const contains = funcs.contains;
      assert.equal(contains([3, 4, 6], 3), true);
      assert.equal(contains([3, null, 6], NaN), false);
    });
  });

  describe('`addNumbers`', () => {
    it('should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.isFunction(addNumbers);
    });
    it('should return a number', () => {
      const addNumbers = funcs.addNumbers;
      assert.isNumber(addNumbers([3, 5, 6]));
    });
    it('should return a sum', () => {
      const addNumbers = funcs.addNumbers;
      assert.strictEqual(addNumbers([3, 4, 6]), 13);
      assert.strictEqual(addNumbers([13, 24, 46]), 83);
    });
  });

  describe('`averageTestScore`', () => {
    it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.isFunction(averageTestScore);
    });
    it('should return a number', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.isNumber(averageTestScore([3, 5, 6]));
    });
    it('should return an average', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.strictEqual(averageTestScore([2, 4, 6]), 4);
      assert.strictEqual(averageTestScore([10, 20, 42]), 24);
    });
  });

  describe('`largestNumber`', () => {
    it('should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.isFunction(largestNumber);
    });
    it('should return a number', () => {
      const largestNumber = funcs.largestNumber;
      assert.isNumber(largestNumber([3, 5, 6]));
    });
    it('should return the largest number', () => {
      const largestNumber = funcs.largestNumber;
      assert.strictEqual(largestNumber([2, 4, 6]), 6);
      assert.strictEqual(largestNumber([10, 345, 20, 42]), 345);
    });
  });
});
