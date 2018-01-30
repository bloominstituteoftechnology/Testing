const assert = require('chai').assert;
const funcs = require('../src/project-2');
const expect = require('chai').expect;

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
  
  describe('`getBiggest`', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    // begin here
    it('should give specific output by given input', () => {
      const getBiggest = funcs.getBiggest;
      assert.equal(getBiggest(5, 8), 8);
    });
    it('should have correct type output', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest(4, 8), 'number');
    });
  });

  describe('`greeting`', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    // begin here
    it('should give specific output by given input', () => {
      const greeting = funcs.greeting;
      assert.equal(greeting('German'), 'Guten Tag!');
    });
    it('should give specific output by given input', () => {
      const greeting = funcs.greeting;
      assert.equal(greeting('Chinese'), 'Hello!');
    });
    it('should have correct type output', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting('Chinese'), 'string');
    });
  });

  describe('`isTenOrFive`', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    // begin here
    it('should give specific output by given input', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.equal(isTenOrFive(5), true);
    });
    it('should have correct type output', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive(4), 'boolean');
    });
  });

  describe('`isInRange`', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    // begin here
    it('should give specific output by given input', () => {
      const isInRange = funcs.isInRange;
      assert.equal(isInRange(5), false);
    });
    it('should have correct type output', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange(4), 'boolean');
    });
  });
  
  describe('`isInteger`', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    // begin here
    it('should give specific output by given input', () => {
      const isInteger = funcs.isInteger;
      assert.equal(isInteger(5), true);
    });
    it('should have correct type output', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger(4.6), 'boolean');
    });
  });

  describe('`fizzBuzz`', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    // begin here
    it('should give specific output by given input', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(5), 'buzz');
    });
    it('should give specific output by given input', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(15), 'fizzbuzz');
    });
    it('should have correct type output', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz(6), 'string');
    });
  });

  describe('`isPrime`', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
    // begin here
    it('should give specific output by given input', () => {
      const isPrime = funcs.isPrime;
      assert.equal(isPrime(5), true);
    });
    it('should give specific output by given input', () => {
      const isPrime = funcs.isPrime;
      assert.equal(isPrime(15), false);
    });
    it('should have correct type output', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime(6), 'boolean');
    });
  });

  describe('`returnFirst`', () => {
    it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
    // begin here
    it('should give specific output by given input', () => {
      const returnFirst = funcs.returnFirst;
      assert.equal(returnFirst([1, 2, 4]), 1);
    });
    it('should give specific output by given input', () => {
      const returnFirst = funcs.returnFirst;
      assert.equal(returnFirst(['1', '2', '4']), '1');
    });
    it('should have correct type output', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst([]), 'undefined');
    });
  });

  describe('`returnLast`', () => {
    it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
    // begin here
    it('should give specific output by given input', () => {
      const returnLast = funcs.returnLast;
      assert.equal(returnLast([1, 2, 4]), 4);
    });
    it('should give specific output by given input', () => {
      const returnLast = funcs.returnLast;
      assert.equal(returnLast(['1', '2', '4']), '4');
    });
    it('should have correct type output', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast([]), 'undefined');
    });
  });

  describe('`getArrayLength`', () => {
    it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
    // begin here
    it('should give specific output by given input', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.equal(getArrayLength([1, 2, 4]), 3);
    });
    it('should give specific output by given input', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.equal(getArrayLength(['1', '2']), 2);
    });
    it('should have correct type output', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength([]), 'number');
    });
  });

  describe('`incrementByOne`', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
    // begin here
    it('should give specific output by given input', () => {
      const incrementByOne = funcs.incrementByOne;
      expect(incrementByOne([1,2,3])).to.include(4);
    });
    it('should have correct type output', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne([1, 3]), 'array');
    });
  });

  describe('`addItemToArray`', () => {
    it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    });
    // begin here
    it('should give specific output by given input', () => {
      const addItemToArray = funcs.addItemToArray;
      expect(addItemToArray([1,2,3], 5)).to.include(5);
    });
    it('should have correct type output', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray([1, 3]), 'array');
    });
  });

  describe('`addItemToFront`', () => {
    it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    });
    // begin here
    it('should give specific output by given input', () => {
      const addItemToFront = funcs.addItemToFront;
      const arr = [1,2,3];
      addItemToFront(arr, 5);
      expect(arr[0]).to.equal(5);
    });
    it('should have correct type output', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront([1, 3], 5), 'array');
    });
  });

  describe('`wordsToSentence`', () => {
    it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
    });
    // begin here
    it('should give specific output by given input', () => {
      const wordsToSentence = funcs.wordsToSentence;
      const arr = ['hello', 'world', '!'];
      expect(wordsToSentence(arr)).to.equal('hello world !');
    });
    it('should have correct type output', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence(['ni', 'hao']), 'string');
    });
  });

  describe('`contains`', () => {
    it('should be a function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    });
    // begin here
    it('should give specific output by given input', () => {
      const contains = funcs.contains;
      const arr = ['hello', 'world', '!'];
      expect(contains(arr, '!')).to.equal(true);
    });
    it('should have correct type output', () => {
      const contains = funcs.contains;
      assert.typeOf(contains(['ni', 'hao'], 'hello'), 'boolean');
    });
  });

  describe('`addNumbers`', () => {
    it('should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
    });
    // begin here
    it('should give specific output by given input', () => {
      const addNumbers = funcs.addNumbers;
      const arr = [1, 3, 5];
      expect(addNumbers(arr)).to.equal(9);
    });
    it('should have correct type output', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers([1,4]), 'number');
    });
  });

  describe('`averageTestScore`', () => {
    it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    });
    // begin here
    it('should give specific output by given input', () => {
      const averageTestScore = funcs.averageTestScore;
      const arr = [1, 3, 5];
      expect(averageTestScore(arr)).to.equal(3);
    });
    it('should have correct type output', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore([1,4]), 'number');
    });
  });

  describe('`largestNumber`', () => {
    it('should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    });
    // begin here
    it('should give specific output by given input', () => {
      const largestNumber = funcs.largestNumber;
      const arr = [1, 3, 5];
      expect(largestNumber(arr)).to.equal(5);
    });
    it('should have correct type output', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber([1,4]), 'number');
    });
  });

});