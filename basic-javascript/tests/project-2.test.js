/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('`getBiggest`', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should return a number', () => {
        const getBiggest = funcs.getBiggest;
        assert.typeOf(getBiggest(2, 3), 'number');
      });
      it('should return bigger number', () => {
        const getBiggest = funcs.getBiggest;
        assert.equal(getBiggest(1, 2), 2);
      });
  });

describe('`greeting`', () => {
    it('should be a function', () => {
        const greeting = funcs.greeting;
        assert.typeOf(greeting, 'function');
    });
    it('should return a string', () => {
        const greeting = funcs.greeting;
        assert.typeOf(greeting('German'), 'string');
        });
    it('should return the correct greeting', () => {
        const greeting = funcs.greeting;
        assert.equal(greeting('German'), 'Guten Tag!');
    });
});


describe('`isTenOrFive`', () => {
    it('should be a function', () => {
        const isTenOrFive = funcs.isTenOrFive;
        assert.typeOf(isTenOrFive, 'function');
    });
    it('should return a boolean', () => {
        const isTenOrFive = funcs.isTenOrFive;
        assert.typeOf(isTenOrFive(2), 'boolean');
    });
    it('should return true if 5', () => {
        const isTenOrFive = funcs.isTenOrFive;
        assert.equal(isTenOrFive(5), true);
    });
});

describe('`isInRange`', () => {
    it('should be a function', () => {
        const isInRange = funcs.isInRange;
        assert.typeOf(isInRange, 'function');
    });
    it('should return a boolean', () => {
        const isInRange = funcs.isInRange;
        assert.typeOf(isInRange(2), 'boolean');
    });
    it('should return false if out of range', () => {
        const isInRange = funcs.isInRange;
        assert.equal(isInRange(2), false);
    });
});

describe('`isInteger`', () => {
    it('should be a function', () => {
        const isInteger = funcs.isInteger;
        assert.typeOf(isInteger, 'function');
    });
    it('should return a boolean', () => {
        const isInteger = funcs.isInteger;
        assert.typeOf(isInteger(2), 'boolean');
    });
    it('should return true if integer', () => {
        const isInteger = funcs.isInteger;
        assert.equal(isInteger(2), true);
    });
});

describe('`fizzBuzz`', () => {
    it('should be a function', () => {
        const fizzBuzz = funcs.fizzBuzz;
        assert.typeOf(fizzBuzz, 'function');
    });
    it('should return a string if num is divisible by 3 or 5', () => {
        const fizzBuzz = funcs.fizzBuzz;
        assert.typeOf(fizzBuzz(9), 'string');
    });
    it('should return buzz given 25', () => {
        const fizzBuzz = funcs.fizzBuzz;
        assert.equal(fizzBuzz(25), 'buzz');
    });
});

describe('`isPrime`', () => {
    it('should be a function', () => {
        const isPrime = funcs.isPrime;
        assert.typeOf(isPrime, 'function');
    });
    it('should return a boolean', () => {
        const isPrime = funcs.isPrime;
        assert.typeOf(isPrime(2, 3), 'boolean');
    });
    it('should return true given 7', () => {
        const isPrime = funcs.isPrime;
        assert.equal(isPrime(7), true);
    });
});

describe('`returnFirst`', () => {
    it('should be a function', () => {
        const returnFirst = funcs.returnFirst;
        assert.typeOf(returnFirst, 'function');
    });
    it('should return first entry in the array', () => {
        const returnFirst = funcs.returnFirst;
        assert.equal(returnFirst([0,1]), 0);
    });
});

describe('`returnLast`', () => {
    it('should be a function', () => {
        const returnLast = funcs.returnLast;
        assert.typeOf(returnLast, 'function');
    });
    it('should return Last entry in the array', () => {
        const returnLast = funcs.returnLast;
        assert.equal(returnLast([0,1]), 1);
    });
});

describe('`getArrayLength`', () => {
    it('should be a function', () => {
        const getArrayLength = funcs.getArrayLength;
        assert.typeOf(getArrayLength, 'function');
    });
    it('should return a number', () => {
        const getArrayLength = funcs.getArrayLength;
        assert.typeOf(getArrayLength([]), 'number');
    });
    it('should return array length', () => {
        const getArrayLength = funcs.getArrayLength;
        assert.equal(getArrayLength([]), 0);
    });
});

describe('`incrementByOne`', () => {
    it('should be a function', () => {
        const incrementByOne = funcs.incrementByOne;
        assert.typeOf(incrementByOne, 'function');
    });
    it('should return a number', () => {
        const incrementByOne = funcs.incrementByOne;
        assert.typeOf(incrementByOne([1]), 'array');
    });
    it('should return incremented array', () => {
        const incrementByOne = funcs.incrementByOne;
        assert.deepEqual(incrementByOne([1,2]), [2,3]);
    });
});

describe('`addItemToArray`', () => {
    it('should be a function', () => {
        const addItemToArray = funcs.addItemToArray;
        assert.typeOf(addItemToArray, 'function');
    });
    it('should return an array', () => {
        const addItemToArray = funcs.addItemToArray;
        assert.typeOf(addItemToArray([], 1), 'array');
    });
    it('should return bigger number', () => {
        const addItemToArray = funcs.addItemToArray;
        assert.deepEqual(addItemToArray([], 1), [1]);
    });
});

describe('`addItemToFront`', () => {
    it('should be a function', () => {
        const addItemToFront = funcs.addItemToFront;
        assert.typeOf(addItemToFront, 'function');
    });
    it('should return an array', () => {
        const addItemToFront = funcs.addItemToFront;
        assert.typeOf(addItemToFront([2], 3), 'array');
    });
    it('should return bigger number', () => {
        const addItemToFront = funcs.addItemToFront;
        assert.deepEqual(addItemToFront([1], 2), [2,1]);
    });
});

describe('`wordsToSentence`', () => {
    it('should be a function', () => {
        const wordsToSentence = funcs.wordsToSentence;
        assert.typeOf(wordsToSentence, 'function');
    });
    it('should return string', () => {
        const wordsToSentence = funcs.wordsToSentence;
        assert.typeOf(wordsToSentence(['t']), 'string');
    });
    it('should return concatonated strings', () => {
        const wordsToSentence = funcs.wordsToSentence;
        assert.equal(wordsToSentence(['t','o']), 't o');
    });
});

describe('`contains`', () => {
    it('should be a function', () => {
        const contains = funcs.contains;
        assert.typeOf(contains, 'function');
    });
    it('should return a boolean', () => {
        const contains = funcs.contains;
        assert.typeOf(contains([], 1), 'boolean');
    });
    it('should return true if arr contains item', () => {
        const contains = funcs.contains;
        assert.equal(contains([1], 1), true);
    });
});

describe('`addNumbers`', () => {
    it('should be a function', () => {
        const addNumbers = funcs.addNumbers;
        assert.typeOf(addNumbers, 'function');
    });
    it('should return a number', () => {
        const addNumbers = funcs.addNumbers;
        assert.typeOf(addNumbers([2,3]), 'number');
    });
    it('should return bigger number', () => {
        const addNumbers = funcs.addNumbers;
        assert.equal(addNumbers([1, 2]), 3);
    });
});

describe('`averageTestScore`', () => {
    it('should be a function', () => {
        const averageTestScore = funcs.averageTestScore;
        assert.typeOf(averageTestScore, 'function');
    });
    it('should return a number', () => {
        const averageTestScore = funcs.averageTestScore;
        assert.typeOf(averageTestScore([3,3]), 'number');
    });
    it('should return average test score', () => {
        const averageTestScore = funcs.averageTestScore;
        assert.equal(averageTestScore([2, 2]), 2);
    });
});

describe('`largestNumber`', () => {
    it('should be a function', () => {
        const largestNumber = funcs.largestNumber;
        assert.typeOf(largestNumber, 'function');
    });
    it('should return a number', () => {
        const largestNumber = funcs.largestNumber;
        assert.typeOf(largestNumber([2, 3]), 'number');
    });
    it('should return bigger number', () => {
        const largestNumber = funcs.largestNumber;
        assert.equal(largestNumber([1, 2]), 2);
    });
});
