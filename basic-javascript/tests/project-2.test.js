const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('PROJECT 2', () => {
  let standardMockArray = [];

  beforeEach(() => {
    standardMockArray = ['Chicken Tendies', 'Conconuties'];
  });


  afterEach(() => {
    standardMockArray = [];
  });

  describe('getBiggest', () => {
    const getBiggest = funcs.getBiggest;
    it('should be a function', () => {
      assert.typeOf(getBiggest, 'function');
    });
    it('should return a number', () => {
      const testCall = getBiggest(10,20);
      assert.typeOf(testCall, 'number');
    });
    it('should return a specific number', () => {
      const testCall = getBiggest(10,20);
      assert.strictEqual(testCall, 20);
    });
  });

  describe('greeting', () => {
    const greeting = funcs.greeting;
    it('should be a function', () => {
      assert.typeOf(greeting, 'function');
    });
    it('should return a string', () => {
      const testCall = greeting(German);
      assert.typeOf(testCall, 'string');
    });
    it('should return a specific language', () => {
      const testCall = greeting(German);
      assert.strictEqual(testCall, 'Guten Tag!');
    });
  });

  describe('isTenOrFive', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('should be a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return a boolean', () => {
      const testCall = isTenOrFive(5);
      assert.typeOf(testCall, 'true');
    });
    it('should return a boolean', () => {
      const testCall = isTenOrFive(10);
      assert.typeOf(testCall, 'true');
    });
    it('should return a boolean', () => {
      const testCall = isTenOrFive(4);
      assert.typeOf(testCall, 'false');
    });
  });

  describe('isInRange', () => {});

  describe('isInteger', () => {});

  describe('fizzBuzz', () => {});

  describe('isPrime', () => {});

  describe('returnFirst', () => {});

  describe('returnLast', () => {});

  describe('getArrayLength', () => {});

  describe('incrementByOne', () => {});

  describe('addItemToArray', () => {});

  describe('addItemToFront', () => {});

  describe('wordsToSentence', () => {});

  describe('contains', () => {});

  describe('addNumbers', () => {});

  describe('averageTestScore', () => {});

  describe('largestNumber', () => {});

});