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
      const result = getBiggest(5, 3);
      assert.typeOf(result, 'number');
    });
    it('should return the correct result', () => {
      const getBiggest = funcs.getBiggest;
      const result = getBiggest(5, 3);
      assert.equal(result, 5);
    });
  });
  describe('`greeting`', () => {
    it('should return Guten Tag!', () => {
      const greeting = funcs.greeting;
      const result = greeting('German');
      assert.equal(result, 'Guten Tag!');
    });
    it('should return Hello!', () => {
      const greeting = funcs.greeting;
      const result = greeting('English');
      assert.equal(result, 'Hello!');
    });
    it('should return Hola!', () => {
      const greeting = funcs.greeting;
      const result = greeting('Spanish');
      assert.equal(result, 'Hola!');
    });
    it('should return Hello!', () => {
      const greeting = funcs.greeting;
      const result = greeting();
      assert.equal(result, 'Hello!');
    });
  });
  describe('`isTenOrFive`', () => {
    it('should return true', () => {
      const isTenOrFive = funcs.isTenOrFive;
      const result = isTenOrFive(10);
      assert.equal(result, true);
    });
    it('should return true', () => {
      const isTenOrFive = funcs.isTenOrFive;
      const result = isTenOrFive(5);
      assert.equal(result, true);
    });
    it('should return false', () => {
      const isTenOrFive = funcs.isTenOrFive;
      const result = isTenOrFive(6);
      assert.equal(result, false);
    });
  });
  describe('`isInRange`', () => {
    it('should return true', () => {
      const isInRange = funcs.isInRange;
      const result = isInRange(30);
      assert.equal(result, true);
    });
    it('should return false', () => {
      const isInRange = funcs.isInRange;
      const result = isInRange(15);
      assert.equal(result, false);
    });
  });
  describe('`isInteger`', () => {
    it('should return true', () => {
      const isInteger = funcs.isInteger;
      const result = isInteger(30);
      assert.equal(result, true);
    });
    it('should return false', () => {
      const isInteger = funcs.isInteger;
      const result = isInteger(15.15);
      assert.equal(result, false);
    });
  });
  describe('`should return fizzBuzz`', () => {
    it('should return true', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const result = fizzBuzz(15);
      assert.equal(result, 'fizzbuzz');
    });
    it('should return fizz', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const result = fizzBuzz(3);
      assert.equal(result, 'fizz');
    });
    it('should return buzz', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const result = fizzBuzz(5);
      assert.equal(result, 'buzz');
    });
    it('should return 2', () => {
      const fizzBuzz = funcs.fizzBuzz;
      const result = fizzBuzz(2);
      assert.equal(result, 2);
    });
  });
  describe('`isPrime`', () => {
    it('should return false', () => {
      const isPrime = funcs.isPrime;
      const result = isPrime(10);
      assert.equal(result, false);
    });
    it('should return false', () => {
      const isPrime = funcs.isPrime;
      const result = isPrime(-5);
      assert.equal(result, false);
    });
    it('should return true', () => {
      const isPrime = funcs.isPrime;
      const result = isPrime(17);
      assert.equal(result, true);
    });
  });
  describe('`returnFirst`', () => {
    it('should return 1', () => {
      const returnFirst = funcs.returnFirst;
      const testArray = [1, 2, 3, 4];
      const result = returnFirst(testArray);
      assert.equal(result, 1);
    });
  });
  describe('`returnLast`', () => {
    it('should return 4', () => {
      const returnLast = funcs.returnLast;
      const testArray = [1, 2, 3, 4];
      const result = returnLast(testArray);
      assert.equal(result, 4);
    });
  });
  describe('`getArrayLength`', () => {
    it('should return 4', () => {
      const getArrayLength = funcs.getArrayLength;
      const testArray = [1, 2, 3, 4];
      const result = getArrayLength(testArray);
      assert.equal(result, 4);
    });
  });
  describe('`incrementByOne`', () => {
    it('should return [2, 3, 4, 5]', () => {
      const incrementByOne = funcs.incrementByOne;
      let testArray = [1, 2, 3, 4];
      const result = incrementByOne(testArray);
      assert.includeOrderedMembers(result, [2, 3, 4, 5] );
    });
  });
  describe('`addItemToArray`', () => {
    it('should return [1, 2, 3, 4, 5]', () => {
      const addItemToArray = funcs.addItemToArray;
      const testArray = [1, 2, 3, 4];
      const result = addItemToArray(testArray, 5);
      assert.includeOrderedMembers(result, [1, 2, 3, 4, 5] );
    });
  });
  describe('`addItemToFront`', () => {
    it('should return [1, 2, 3, 4, 5]', () => {
      const addItemToFront = funcs.addItemToFront;
      const testArray = [2, 3, 4, 5];
      const result = addItemToFront(testArray, 1);
    assert.includeOrderedMembers(result, [1, 2, 3, 4, 5] );
    });
  });
  // describe('`wordsToSentence`', () => {
  //   it('should return 4', () => {
  //     const wordsToSentence = funcs.wordsToSentence;
  //     const testArray = [1, 2, 3, 4];
  //     const result = wordsToSentence(testArray);
  //     assert.equal(result, 4);
  //   });
  // });
  // describe('`contains`', () => {
  //   it('should return 4', () => {
  //     const contains = funcs.contains;
  //     const testArray = [1, 2, 3, 4];
  //     const result = contains(testArray);
  //     assert.equal(result, 4);
  //   });
  // });
  // describe('`addNumbers`', () => {
  //   it('should return 4', () => {
  //     const addNumbers = funcs.addNumbers;
  //     const testArray = [1, 2, 3, 4];
  //     const result = addNumbers(testArray);
  //     assert.equal(result, 4);
  //   });
  // });
  // describe('`averageTestScore`', () => {
  //   it('should return 4', () => {
  //     const averageTestScore = funcs.averageTestScore;
  //     const testArray = [1, 2, 3, 4];
  //     const result = averageTestScore(testArray);
  //     assert.equal(result, 4);
  //   });
  // });
  // describe('`largestNumber`', () => {
  //   it('should return 4', () => {
  //     const largestNumber = funcs.largestNumber;
  //     const testArray = [1, 2, 3, 4];
  //     const result = largestNumber(testArray);
  //     assert.equal(result, 4);
  //   });
  // });
});