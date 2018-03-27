/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    const getBiggest = funcs.getBiggest;
    it('should be a function', () => {
      assert.typeOf(getBiggest, 'function');
    });
    it('should return x if x is larger than y', () => {
      const compare = getBiggest(9, 8);
      assert.equal(compare, 9);
    });
    it('should return y if x equals to y', () => {
      const compare = getBiggest(8, 8);
      assert.equal(compare, 8);
    });
    it('should return y if y is larger than x', () => {
      const compare = getBiggest(8, 9);
      assert.equal(compare, 9);
    });
  });

  describe('`greeting`', () => {
    const greeting = funcs.greeting;
    it('should be a function', () => {
      assert.typeOf(greeting, 'function');
    });
    it('should return \'Guten Tag!\' if \'German\'', () => {
      const greet = greeting('German');
      assert.equal(greet, 'Guten Tag!');
    });
    it('should return \'Hola!\' if \'Spanish\'', () => {
      const greet = greeting('Spanish');
      assert.equal(greet, 'Hola!');
    });
    it('should return \'Hello!\' as default', () => {
      const greet = greeting();
      assert.equal(greet, 'Hello!');
    });
  });

  describe('`isTenOrFive`', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('should be a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return true if num is 10 or 5', () => {
      const num = isTenOrFive(10);
      assert.equal(num, true);
    });
    it('should return true if num is 10 or 5', () => {
      const num = isTenOrFive(5);
      assert.equal(num, true);
    });
    it('should return false if num is NOT 10 or 5', () => {
      const num = isTenOrFive(7);
      assert.equal(num, false);
    });
  });

  describe('`isInRange`', () => {
    const isInRange = funcs.isInRange;
    it('should be a function', () => {
      assert.typeOf(isInRange, 'function');
    });
    it('should return true if num is in range', () => {
      const checkRange = isInRange(30);
      assert.equal(checkRange, true);
    });
    it('shold return fase if num is not in range', () => {
      const checkRange = isInRange(10);
      assert.equal(checkRange, false);
    });
  });

  describe('`isInteger`', () => {
    const isInteger = funcs.isInteger;
    it('should be a function', () => {
      assert.typeOf(isInteger, 'function');
    });
    it('should returntrue if num is an integer', () => {
      const checkInteger = isInteger(8);
      assert.equal(checkInteger, true);
    });
    it('should return false if num is not an integer', () => {
      const checkInteger = isInteger(5.4);
      assert.equal(checkInteger, false);
    });
  });

  describe('`fizzBuzz`', () => {
    const fizzBuzz = funcs.fizzBuzz;
    it('should be a function', () => {
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return \'fizzbuzz\' if divisible by 5 and 3', () => {
      const fb = fizzBuzz(15);
      assert.equal(fb, 'fizzbuzz');
    });
    it('should return \'buzz\' if divisible by 5', () => {
      const fb = fizzBuzz(25);
      assert.equal(fb, 'buzz');
    });
    it('should return \'fizz\' if divisible by 3', () => {
      const fb = fizzBuzz(24);
      assert.equal(fb, 'fizz');
    });
  });

  describe('`isPrime`', () => {
    const isPrime = funcs.isPrime;
    it('should be a function', () => {
      assert.typeOf(isPrime, 'function');
    });
    it('should return false if less than 0', () => {
      const checkPrime = isPrime(-1);
      assert.equal(checkPrime, false);
    });
    it('should return false if num equals 1', () => {
      const checkPrime = isPrime(1);
      assert.equal(checkPrime, false);
    });
    it('should return false if num equals 0', () => {
      const checkPrime = isPrime(0);
      assert.equal(checkPrime, false);
    });
    it('should return false if not prime', () => {
      const checkPrime = isPrime(20);
      assert.equal(checkPrime, false);
    });
  });

  describe('`returnFirst`', () => {
    const returnFirst = funcs.returnFirst;
    it('should be a function', () => {
      assert.typeOf(returnFirst, 'function');
    });
    it('should return first item of an array', () => {
      const arr = ['apple', 'monkey', 'banana'];
      const firstItem = returnFirst(arr);
      assert.equal(firstItem, 'apple');
    });
  });

  describe('`returnLast`', () => {
    const returnLast = funcs.returnLast;
    it('should be a function', () => {
      assert.typeOf(returnLast, 'function');
    });
    it('should return last item of an array', () => {
      const arr = ['apple', 'monkey', 'banana'];
      const lastItem = returnLast(arr);
      assert.equal(lastItem, 'banana');
    });
  });

  describe('`getArrayLength`', () => {
    const getArrayLength = funcs.getArrayLength;
    it('should be a function', () => {
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return array length', () => {
      const arr = ['apple', 'monkey', 'banana'];
      const arrLength = getArrayLength(arr);
      assert.equal(arrLength, 3);
    });
  });

  describe('`incrementByOne`', () => {
    const incrementByOne = funcs.incrementByOne;
    it('should be a function', () => {
      assert.typeOf(incrementByOne, 'function');
    });
    it('should return array items incremented by one', () => {
      const arr = [5, 9, 6, 4, 8];
      const increment = incrementByOne(arr);
      assert.includeOrderedMembers(increment, [6, 10, 7, 5, 9]);
    });
  });

  describe('`addItemToArray`', () => {
    const addItemToArray = funcs.addItemToArray;
    it('should be a function', () => {
      assert.typeOf(addItemToArray, 'function');
    });
    it('should return an array with item added to the end', () => {
      const arr = [5, 9, 6, 4, 8];
      const addItem = addItemToArray(arr, 4);
      assert.includeOrderedMembers(addItem, [5, 9, 6, 4, 8, 4]);
    });
  });

  describe('`addItemToFront`', () => {
    const addItemToFront = funcs.addItemToFront;
    it('should be a function', () => {
      assert.typeOf(addItemToFront, 'function');
    });
    it('should return an array with item added to the front', () => {
      const arr = [5, 9, 6, 4, 8];
      const addItem = addItemToFront(arr, 4);
      assert.includeOrderedMembers(addItem, [4, 5, 9, 6, 4, 8]);
    });
  });

  describe('`wordsToSentence`', () => {
    const wordsToSentence = funcs.wordsToSentence;
    it('should be a function', () => {
      assert.typeOf(wordsToSentence, 'function');
    });
  });

  describe('`contains`', () => {
    const contains = funcs.contains;
    it('should be a function', () => {
      assert.typeOf(contains, 'function');
    });
  });

  describe('`addNumbers`', () => {
    const addNumbers = funcs.addNumbers;
    it('should be a function', () => {
      assert.typeOf(addNumbers, 'function');
    });
  });

  describe('`averageTestScore`', () => {
    const averageTestScore = funcs.averageTestScore;
    it('should be a function', () => {
      assert.typeOf(averageTestScore, 'function');
    });
  });

  describe('`largestNumber`', () => {
    const largestNumber = funcs.largestNumber;
    it('should be a function', () => {
      assert.typeOf(largestNumber, 'function');
    });
  });
});
