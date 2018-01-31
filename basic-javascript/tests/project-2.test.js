const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
  let standardMockArray = [];

  beforeEach(() => {
    standardMockArray = ['Chicken Nuggets', 'Coconuts'];
  });

  afterEach(() => {
    standardMockArray = [];
  });

  describe('`getBiggest`', () => {
    const getBiggest = funcs.getBiggest;
    const threeBiggerThanTwo = getBiggest(3, 2);
    it('should be a function', () => {
      assert.typeOf(getBiggest, 'function');
    });
    it('should return 3', () => {
      assert.equal(threeBiggerThanTwo, 3);
    });
    it('should return a number', () => {
      assert.typeOf(threeBiggerThanTwo, 'number');
    });
  });

  describe('`greeting`', () => {
    const greeting = funcs.greeting;
    const spanishGreet = greeting('Spanish');
    it('should be a function', () => {
      assert.typeOf(greeting, 'function');
    });
    it('should return `Hola!`', () => {
      assert.equal(spanishGreet, 'Hola!');
    });
  });

  describe('`isTenOrFive`', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
  });

  describe('`isInRange`', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
  });

  describe('`isInteger`', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
  });

  describe('`fizzBUzz`', () => {
    const fizzBUzz = funcs.fizzBuzz;
    const fifteen = fizzBUzz(15);
    it('should be a function', () => {
      assert.typeOf(fizzBUzz, 'function');
    });
    it('should return `fizzbuzz`', () => {
      assert.equal(fifteen, 'fizzbuzz');
      assert.isString(fifteen);
    });
  });

  describe('`isPrime`', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
  });

  describe('`returnFirst`', () => {
    const  {returnFirst} = funcs;
    
    it('should be a function', () => {
      assert.typeOf(returnFirst, 'function');
    });
    it('should return a specific value based on passed in array', () => {
      const myValue = standardMockArray[0];
      const testCall = returnFirst(standardMockArray);
      assert.strictEqual(testCall, myValue);
    });
  });

  describe('`returnLast`', () => {
    it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
  });

  describe('`getArrayLength`', () => {
    it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
  });

  describe('`incrementByOne`', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
  });

  describe('`addItemToArray`', () => {
    it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    });
  });

  describe('`addItemToFront`', () => {
    it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    });
  });

  describe('`wordsToSentence`', () => {
    it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
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
