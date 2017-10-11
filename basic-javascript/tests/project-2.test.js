const assert = require('chai').assert;
const funcs = require('../src/project-2');
const expect = require('chai').expect;
// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-1 Functions', () => {
  describe('`getBiggest`', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should return the bigger number', () => {
      const getBiggest = funcs.getBiggest;
      expect(getBiggest(5, 10)).to.equal(10);
      expect(getBiggest(2222, 2221)).to.equal(2222);
    });
    it('should return either number if numbers are the same', () => {
      const getBiggest = funcs.getBiggest;
      expect(getBiggest(123, 123)).to.equal(123);
    });
  });

  describe('`greeting`', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should return a German greeting', () => {
      const greeting = funcs.greeting;
      expect(greeting('German')).to.equal('Guten Tag!');
    });
    it('should return a Spanish greeting', () => {
      const greeting = funcs.greeting;
      expect(greeting('Spanish')).to.equal('Hola!');
    });
    it('should return a default greeting', () => {
      const greeting = funcs.greeting;
      expect(greeting('Human')).to.equal('Hello!');
      expect(greeting('English')).to.equal('Hello!');
      expect(greeting(5687875)).to.equal('Hello!');
    });
  });

  describe('`isTenOrFive`', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return a boolean', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive(23), 'boolean');
    });
    it('should return true for 10 or 5', () => {
      const isTenOrFive = funcs.isTenOrFive;
      expect(isTenOrFive(5)).to.equal(true);
      expect(isTenOrFive(10)).to.equal(true);
    });
    it('should return false for 10 or 5', () => {
      const isTenOrFive = funcs.isTenOrFive;
      expect(isTenOrFive(6)).to.equal(false);
      expect(isTenOrFive(10.1)).to.equal(false);
    });
  });

  describe('`isInRange`', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('should return a boolean', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange(20), 'boolean');
    });
    it('should return true if between 20 and 50', () => {
      const isInRange = funcs.isInRange;
      expect(isInRange(20.1)).to.equal(true);
      expect(isInRange(49.9)).to.equal(true);
    });
    it('should return false if less than or equal to 20 or greater than or equal to 50', () => {
      const isInRange = funcs.isInRange;
      expect(isInRange(20)).to.equal(false);
      expect(isInRange(50)).to.equal(false);
      expect(isInRange(10)).to.equal(false);
      expect(isInRange(60)).to.equal(false);
    });
  });

  describe('`isInteger`', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('should return a boolean', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger(2.2), 'boolean');
    });
    it('should return true if the number passed is an integer', () => {
      const isInteger = funcs.isInteger;
      expect(isInteger(10)).to.equal(true);
      expect(isInteger(-2)).to.equal(true);
    });
    it('should return false if less than or equal to 20 or greater than or equal to 50', () => {
      const isInteger = funcs.isInteger;
      expect(isInteger(2.1)).to.equal(false);
    });
  });

  describe('`fizzBuzz`', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return fizzbuzz if divisible by both 3 and 5', () => {
      const fizzBuzz = funcs.fizzBuzz;
      expect(fizzBuzz(15)).to.equal('fizzbuzz');
    });
    it('should return fizz if divisible by 3', () => {
      const fizzBuzz = funcs.fizzBuzz;
      expect(fizzBuzz(21)).to.equal('fizz');
      expect(fizzBuzz(3)).to.equal('fizz');
    });
    it('should return buzz if divisible by 5', () => {
      const fizzBuzz = funcs.fizzBuzz;
      expect(fizzBuzz(25)).to.equal('buzz');
      expect(fizzBuzz(5)).to.equal('buzz');
    });
  });

  describe('`isPrime`', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
    it('should return false if the number is negative', () => {
      const isPrime = funcs.isPrime;
      expect(isPrime(-2)).to.equal(false);
    });
    it('should return false if the number is not prime', () => {
      const isPrime = funcs.isPrime;
      expect(isPrime(12)).to.equal(false);
    });
    it('should return false if the number is 0 or 1', () => {
      const isPrime = funcs.isPrime;
      expect(isPrime(0)).to.equal(false);
      expect(isPrime(1)).to.equal(false);
    });
    it('should return true if number is prime', () => {
      const isPrime = funcs.isPrime;
      expect(isPrime(13)).to.equal(true);
      expect(isPrime(23)).to.equal(true);
    });
  });

  describe('`returnFirst`', () => {
    it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
    it('should return first item of an array', () => {
      const returnFirst = funcs.returnFirst;
      expect(returnFirst([12, 13, 12, 1, 3])).to.equal(12);
      expect(returnFirst([4])).to.equal(4);
    });
  });

  describe('`returnLast`', () => {
    it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
    it('should return last item of an array', () => {
      const returnLast = funcs.returnLast;
      expect(returnLast([12, 13, 12, 1, 3])).to.equal(3);
      expect(returnLast([4])).to.equal(4);
    });
  });

  describe('`getArrayLength`', () => {
    it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return a number', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength(['gazoo']), 'number');
    });
    it('should return length of an array', () => {
      const getArrayLength = funcs.getArrayLength;
      expect(getArrayLength(['foo', 'bar', 'banana', 1, 3])).to.equal(5);
      expect(getArrayLength(['Cole Ferguson'])).to.equal(1);
      expect(getArrayLength([])).to.equal(0);
    });
  });

  describe('`incrementByOne`', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
    it('should return an array', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne([1]), 'array');
    });
    it('should increment every number by 1', () => {
      const incrementByOne = funcs.incrementByOne;
      expect(incrementByOne([1, 2, 3, 7])[2]).to.equal(4);
      expect(incrementByOne([100000])[0]).to.equal(100001);
    });
  });

  describe('`addItemToArray`', () => {
    it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    });
    it('should return an array', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray([1, 2], 3), 'array');
    });
    it('should add second argument to the end of the array', () => {
      const addItemToArray = funcs.addItemToArray;
      expect(addItemToArray(['this', 'that'], 'the other')[2]).to.equal('the other');
    });
  });

  describe('`addItemToFront`', () => {
    it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    });
    it('should return an array', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront([1, 2], 3), 'array');
    });
    it('should add second argument to the beginning of the array', () => {
      const addItemToFront = funcs.addItemToFront;
      expect(addItemToFront(['old', 'dog'], 'this')[0]).to.equal('this');
    });
  });

  describe('`wordsToSentence`', () => {
    it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should return a string', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence(['Somebody', 'once', 'told', 'me']), 'string');
    });
    it('should add a space between words', () => {
      const wordsToSentence = funcs.wordsToSentence;
      expect(wordsToSentence(['Somebody', 'once', 'told', 'me'])).to.equal('Somebody once told me');
    });
    it('should handle one word', () => {
      const wordsToSentence = funcs.wordsToSentence;
      expect(wordsToSentence(['Hey'])).to.equal('Hey');
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
  });

  describe('`averageTestScore`', () => {
    it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    });
  });

  describe('`largestNumber`', () => {
    it('should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    });
  });
});
