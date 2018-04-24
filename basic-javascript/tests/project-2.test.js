/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should return x is greater than y', () => {
      const x = 15;
      const y = 10;
      assert.equal(funcs.getBiggest(x, y), x);
    });
    it('should return 15 if equal', () => {
      const x = 15;
      const y = 15;
      assert.equal(funcs.getBiggest(x, y), y);
    });
  });

  describe('`greeting`', () => {
    describe('`greeting`', () => {
      it('should be a function', () => {
        const language = funcs.greeting;
        assert.typeOf(language, 'function');
      });

      it('should return Guten tag!', () => {
        const language = funcs.greeting;
        assert.equal(language('German'), 'Guten Tag!');
      });

      it('should return Guten tag!', () => {
        const language = funcs.greeting;
        assert.equal(language('Spanish'), 'Hola!');
      });

      it('should return Guten tag!', () => {
        const language = funcs.greeting;
        assert.equal(language('default'), 'Hello!');
      });
    });
  });

  describe('`isTenOrFive`', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('should be a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    });

    it('should return true', () => {
      const num = 10;
      const numOne = 5;
      assert.equal(isTenOrFive(num, numOne), true);
    });
    it('should return false', () => {
      const num = 4;
      const numOne = 6;
      assert.equal(isTenOrFive(num, numOne), false);
    });
  });

  describe('`isInRange`', () => {
    const isInRange = funcs.isInRange;
    it('should be a function', () => {
      assert.typeOf(isInRange, 'function');
    });

    it('should return true if num is less than 50 and num1 is greater than 20', () => {
      const num = 34,
        num1 = 19;
      assert.equal(isInRange(34 && 19), false);
    });
    it('should return false num is less than 50 and num1 is greater than 20', () => {
      const num = 25,
        num1 = 32;
      assert.equal(isInRange(25 && 32), true);
    });
  });

  describe('`isInteger`', () => {
    const isInteger = funcs.isInteger;
    it('should be a function', () => {
      assert.typeOf(isInteger, 'function');
    });

    it('should return true if num equal when rounded', () => {
      const num = 27,
        num1 = 27;
      assert.equal(isInteger(27 === 27), false);
    });
    it('should return false if num is equal when rounded', () => {
      const num = 38,
        num1 = 39;
      assert.equal(isInteger(38 && 39), true);
    });
  });

  describe('`fizzBuzz`', () => {
    const fizzBuzz = funcs.fizzBuzz;

    it('should be a string', () => {
      assert.typeOf(fizzBuzz, 'function');
    });
    const num = 15;

    it('should return fizzbuzz', () => {
      assert.equal(fizzBuzz(num), 'fizzbuzz');
    });
    it('it should return buzz', () => {
      assert.equal(fizzBuzz(5), 'buzz');
    });
    it('should return fizz', () => {
      assert.equal(fizzBuzz(3), 'fizz');
    });

    it('should return num', () => {
      assert.equal(fizzBuzz(2), 2);
    });
  });

  describe('`isPrime`', () => {
    const isPrime = funcs.isPrime;
    it('should be a function', () => {
      assert.typeOf(isPrime, 'function');
    });
    it('should return false if number < 0', () => {
      const num = -1;
      assert.equal(isPrime(num), false);
    });
    it('should return false if number === 0 || number === 1', () => {
      const num1 = 0;
      const num2 = 1;
      assert.equal(isPrime(num1, num2), false);
    });
    it('should return false if number is not prime', () => {
      const num = 4,
        num1 = 6;
      assert.equal(isPrime(num, num1), false);
    });
    it('should return true if number is prime', () => {
      const num = 3,
        num1 = 5,
        num2 = 7;
      assert.equal(isPrime(num, num1, num2), true);
    });
  });

  describe('`returnFirst`', () => {
    const returnFirst = funcs.returnFirst;
    it('should be a function', () => {
      assert.typeOf(returnFirst, 'function');
    });
    it('should return the first element of the array', () => {
      assert.equal(returnFirst([1, 2, 3]), 1);
    });
  });

  describe('`returnLast`', () => {
    const returnLast = funcs.returnLast;
    it('should be a function', () => {
      assert.typeOf(returnLast, 'function');
    });
    it('should return the last element of the array', () => {
      assert.equal(returnLast([1, 2, 3]), 3);
    });
  });

  describe('`getArrayLength`', () => {
    const getArrayLength = funcs.getArrayLength;
    it('should be a function', () => {
      assert.typeOf(getArrayLength, 'function');
    });
    // it('should return the correct array length', () => {
    //     assert.equal(getArrayLength([1,2,3]), );
    // });
  });

  describe('`incrementByOne`', () => {
    const incrementByOne = funcs.incrementByOne;
    it('should be a function', () => {
      assert.typeOf(incrementByOne, 'function');
    });
    it('should return the array after incrementing all the elements in it', () => {
      assert.equal(incrementByOne([1, 2, 3]), [2, 3, 4]);
    });
  });

  describe('`addItemToFront`', () => {
    const addItemToFront = funcs.addItemToFront;
    it('should be a function', () => {
      assert.typeOf(addItemToFront, 'function');
    });
    it('should add an item to the front of an array', () => {
      assert.equal(funcs.addItemToFront([1, 2, 3], 4), [4, 1, 2, 3]);
    });
  });

  describe('`wordsToSentence`', () => {
    const wordsToSentence = funcs.wordsToSentence;
    it('should be a function', () => {
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should return the array after incrementing all the elements in it', () => {
      assert.equal(wordsToSentence(['This', 'is', 'a', 'sentence']), 'This is a sentence');
    });
  });

  describe('`contains`', () => {
    it('should be a function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    });
  });

  describe('`addNumbers`', () => {
    it('should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
    });

    it('should add the numbers together', () => {
      const numbers = [1, 2, 3];
      const sumofnums = funcs.addNumbers(numbers);
      assert.equal(sumofnums, 6);
    });
  });

  describe('`averageTestScore`', () => {
    it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    });

    it('should average test scroes', () => {
      const testScore = [1, 2, 3];
      const totalScore = funcs.averageTestScore(testScore);
      assert.equal(totalScore, 2);
    });
  });

  describe('`largestNumber`', () => {
    it('should be a functiçon', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    });
  });
});
