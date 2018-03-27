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
      assert.typeOf(compare, 'number');
      assert.equal(compare, 9);
    });
    it('should return y if x equals to y', () => {
      const compare = getBiggest(8, 8);
      assert.typeOf(compare, 'number');
      assert.equal(compare, 8);
    });
    it('should return y if y is larger than x', () => {
      const compare = getBiggest(8, 9);
      assert.typeOf(compare, 'number');
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
      assert.typeOf(greet, 'string');
      assert.equal(greet, 'Guten Tag!');
    });
    it('should return \'Hola!\' if \'Spanish\'', () => {
      const greet = greeting('Spanish');
      assert.typeOf(greet, 'string');
      assert.equal(greet, 'Hola!');
    });
    it('should return \'Hello!\' as default', () => {
      const greet = greeting();
      assert.typeOf(greet, 'string');
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
      assert.typeOf(num, 'boolean');
      assert.equal(num, true);
    });
    it('should return true if num is 10 or 5', () => {
      const num = isTenOrFive(5);
      assert.typeOf(num, 'boolean');
      assert.equal(num, true);
    });
    it('should return false if num is NOT 10 or 5', () => {
      const num = isTenOrFive(7);
      assert.typeOf(num, 'boolean');
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
      assert.typeOf(checkRange, 'boolean');
      assert.equal(checkRange, true);
    });
    it('shold return fase if num is not in range', () => {
      const checkRange = isInRange(10);
      assert.typeOf(checkRange, 'boolean');
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
      assert.typeOf(checkInteger, 'boolean');
      assert.equal(checkInteger, true);
    });
    it('should return false if num is not an integer', () => {
      const checkInteger = isInteger(5.4);
      assert.typeOf(checkInteger, 'boolean');
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
      assert.typeOf(fb, 'string');
      assert.equal(fb, 'fizzbuzz');
    });
    it('should return \'buzz\' if divisible by 5', () => {
      const fb = fizzBuzz(25);
      assert.typeOf(fb, 'string');
      assert.equal(fb, 'buzz');
    });
    it('should return \'fizz\' if divisible by 3', () => {
      const fb = fizzBuzz(24);
      assert.typeOf(fb, 'string');
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
      assert.typeOf(checkPrime, 'boolean');
      assert.equal(checkPrime, false);
    });
    it('should return false if num equals 1', () => {
      const checkPrime = isPrime(1);
      assert.typeOf(checkPrime, 'boolean');
      assert.equal(checkPrime, false);
    });
    it('should return false if num equals 0', () => {
      const checkPrime = isPrime(0);
      assert.typeOf(checkPrime, 'boolean');
      assert.equal(checkPrime, false);
    });
    it('should return false if not prime', () => {
      const checkPrime = isPrime(20);
      assert.typeOf(checkPrime, 'boolean');
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
      assert.typeOf(firstItem, 'string');
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
      assert.typeOf(lastItem, 'string');
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
      assert.typeOf(arrLength, 'number');
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
      assert.typeOf(increment, 'array');
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
      assert.typeOf(addItem, 'array');
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
      assert.typeOf(addItem, 'array');
      assert.includeOrderedMembers(addItem, [4, 5, 9, 6, 4, 8]);
    });
  });

  describe('`wordsToSentence`', () => {
    const wordsToSentence = funcs.wordsToSentence;
    it('should be a function', () => {
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should return a sentence with words', () => {
      const arr = ['i', 'need', 'million', 'dollars'];
      const sentence = wordsToSentence(arr);
      assert.typeOf(sentence, 'string');
      assert.equal(sentence, 'i need million dollars');
    });
  });

  describe('`contains`', () => {
    const contains = funcs.contains;
    it('should be a function', () => {
      assert.typeOf(contains, 'function');
    });
    it('should return true if the item count is greater than 0', () => {
      const arr = ['taco', 'burrito', 'taco', 'quesadilla', 'sopes'];
      const itemCount = contains(arr, 'taco');
      assert.typeOf(itemCount, 'boolean');
      assert.equal(itemCount, true);
    });
    it('should return false if the item does not exist', () => {
      const arr = ['taco', 'burrito', 'taco', 'quesadilla', 'sopes'];
      const itemCount = contains(arr, 'pizza');
      assert.typeOf(itemCount, 'boolean');
      assert.equal(itemCount, false);
    });
  });

  describe('`addNumbers`', () => {
    const addNumbers = funcs.addNumbers;
    it('should be a function', () => {
      assert.typeOf(addNumbers, 'function');
    });
    it('should return sum of all numbers in array', () => {
      const arr = [1, 2, 3, 4, 5];
      const arrSum = addNumbers(arr);
      assert.typeOf(arrSum, 'number');
      assert.equal(arrSum, 15);
    });
  });

  describe('`averageTestScore`', () => {
    const averageTestScore = funcs.averageTestScore;
    it('should be a function', () => {
      assert.typeOf(averageTestScore, 'function');
    });
    it('should return average of all test scores', () => {
      const arr = [99, 55, 87, 90, 100];
      const avgScore = averageTestScore(arr);
      assert.typeOf(avgScore, 'number');
      assert.equal(avgScore, 86.2);
    });
  });

  describe('`largestNumber`', () => {
    const largestNumber = funcs.largestNumber;
    it('should be a function', () => {
      assert.typeOf(largestNumber, 'function');
    });
    it('should return the largest number', () => {
      const arr = [100, 5, 8, 10, 99];
      const largest = largestNumber(arr);
      assert.typeOf(largest, 'number');
      assert.equal(largest, 100);
    });
  });
});
