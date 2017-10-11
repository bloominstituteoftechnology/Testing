const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Fucntions', () => {
  describe('getBiggest', () => {
    it('getBiggest should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should return biggest number', () => {
      const getBiggest = funcs.getBiggest;
      assert.equal(getBiggest(7, 70), 70);
    });
  });

  describe('greeting', () => {
    it('greeting should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('Default should be Hello!', () => {
      const greeting = funcs.greeting;
      assert.equal(greeting('English'), 'Hello!');
    });
    it('German should be Hello!', () => {
      const greeting = funcs.greeting;
      assert.equal(greeting('German'), 'Guten Tag!');
    });
    it('Spanish should be Hello!', () => {
      const greeting = funcs.greeting;
      assert.equal(greeting('Spanish'), 'Hola!');
    });
  });

  describe('isTenOrFive', () => {
    it('isTenOrFive should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should be equal 10 or 5', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.equal(isTenOrFive(10), true);
    });
  });

  describe('isInRange', () => {
    it('isInRange should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('should return true if num is greater than 20 and less than 50', () => {
      const isInRange = funcs.isInRange;
      assert.equal(isInRange(40), true);
    });
    it('should return false is num is less than 20 or greater than 50', () => {
      const isInRange = funcs.isInRange;
      assert.equal(isInRange(10), false);
    });
  });

  describe('isInteger', () => {
    it('isInteger should be a funtion', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('should return true if num is an integer', () => {
      const isInteger = funcs.isInteger;
      assert.equal(isInteger(1), true);
    });
    it('should return false if num is not an integer', () => {
      const isInteger = funcs.isInteger;
      assert.equal(isInteger('string'), false);
    });
  });

  describe('fizzBuzz', () => {
    it('fizzBuzz should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return fizzbuzz if divisible by 5 and 3', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(15), 'fizzbuzz');
    });
    it('should return buzz if divisible by 5', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(10), 'buzz');
    });
    it('should return fizz if divisible by 3', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(9), 'fizz');
    });
    it('should return number if not divisible', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(4), 4);
    });
  });

  describe('isPrime', () => {
    it('isPrime should be a function', () => {
      const isPrime = funcs.isInteger;
      assert.typeOf(isPrime, 'function');
    });
    it('should return true if number is a prime', () => {
      const isPrime = funcs.isPrime;
      assert.equal(isPrime(7), true);
    });
    it('should return false if number is not prime', () => {
      const isPrime = funcs.isPrime;
      assert.equal(isPrime(4), false);
    });
  });

  describe('returnFirst', () => {
    it('returnFirst should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
    it('should return the first of the array', () => {
      const returnFirst = funcs.returnFirst;
      assert.equal(returnFirst([1, 2, 3]), 1);
    });
  });

  describe('returnLast', () => {
    it('returnLast should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
    it('should return the last of the array', () => {
      const returnLast = funcs.returnLast;
      assert.equal(returnLast([1, 2, 3]), 3);
    });
  });

  describe('getArrayLength', () => {
    it('getArrayLength should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
    it('incrementByOne', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.equal(getArrayLength([1, 2, 3]), 3);
    });
  });

  describe('incrementByOne', () => {
    it('incrementByOne should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
    it('should increment number by one', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.deepEqual(incrementByOne([1, 2, 3]), [2, 3, 4]);
    });
  });

  describe('addItemToArray', () => {
    it('addItemToArray should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    });
    it('should add the item to end of the array', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.deepEqual(addItemToArray([1, 2, 3], 4), [1, 2, 3, 4]);
    });
  });

  describe('addItemToFront', () => {
    it('addItemToFront should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    });
    it('should add the item to the beginning of the array', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.deepEqual(addItemToFront([2, 3, 4], 1), [1, 2, 3, 4]);
    });
  });

  describe('wordsToSentence', () => {
    it('wordsToSentence should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should return a sentence from the array of words', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.equal(wordsToSentence(['this', 'is', 'a', 'sentence']), 'this is a sentence');
    });
  });

  describe('contains', () => {
    it('contains should be a function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    });
    it('should return true is array contains the item', () => {
      const contains = funcs.contains;
      assert.equal(contains([1, 2, 3], 3), true);
    });
    it('should return false is array does not contain the item', () => {
      const contains = funcs.contains;
      assert.equal(contains([1, 2, 3], 7), false);
    });
  });

  describe('addNumbers', () => {
    it('addNumbers should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
    });
    it('should add the array of numbers', () => {
      const addNumbers = funcs.addNumbers;
      assert.equal(addNumbers([2, 2, 2, 2]), 8);
    });
  });

  describe('averageTestScore', () => {
    it('averageTestScore should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    });
    it('should return the Average of the array of numbers', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.equal(averageTestScore([85.2, 88.5, 90, 100]), 90.925);
    });
  });

  describe('largestNumber', () => {
    it('largestNumber should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    });
    it('should return the largest number in the array', () => {
      const largestNumber = funcs.largestNumber;
      assert.equal(largestNumber([2, 33, 77, 5, 6, 44, 87, 5, 6, 777, 3, 445]), 777);
    });
  });
});
