const assert = require('chai').assert;
const funcs = require('../src/project-2');
const expect = require('chai').expect;

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('PROJECT 2', () => {
  let standardMockArray = [];

  beforeEach(() => {
    standardMockArray = ['Chicken Tendies', 'Coconuts'];
  });
  afterEach(() => {
    standardMockArray = [];
  });

  describe('getBiggest', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should return a number', () => {
      const getBiggest = funcs.getBiggest;
      const testCall = getBiggest(3, 4);
      assert.typeOf(testCall, 'number');
    });
    it('should return the larger number given two numbers', () => {
      const getBiggest = funcs.getBiggest;
      const testCall = getBiggest(3, 4);
      assert.strictEqual(testCall, 4);
    });
  });
  describe('greeting', () => {
    it('should be a function', () => {
      expect(funcs.greeting).to.be.a('function');
    });
    it('should return Guten Tag! if passed German', () => {
      expect(funcs.greeting('German')).to.equal('Guten Tag!');
    });
    it('should return Hola! if passed Spanish', () => {
      expect(funcs.greeting('Spanish')).to.equal('Hola!');
    });
    it('should return Hello! if passed any other string', () => {
      expect(funcs.greeting('French')).to.equal('Hello!');
    });
  });

  describe('isTenOrFive', () => {
    it('should be a function', () => {
      expect(funcs.isTenOrFive).to.be.a('function');
    });
    it('should return true if passed 5', () => {
      expect(funcs.isTenOrFive(5)).to.equal(true);
    });
    it('should return true if passed 10', () => {
      expect(funcs.isTenOrFive(10)).to.equal(true);
    });
    it('should return false if not passed 5 or 10', () => {
      expect(funcs.isTenOrFive(5)).to.equal(true);
    });
  });

  describe('isInRange', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('should return true given a number that is less than fifty and greater than 20', () => {
      const isInRange = funcs.isInRange;
      assert.equal(isInRange(25), true);
    });
    it('should return false given a number that is not less than fifty and greater than 20', () => {
      const isInRange = funcs.isInRange;
      assert.equal(isInRange(19), false);
    });
    it('should return a boolean value', () => {
      const isInRange = funcs.isInRange;
      assert.isBoolean(isInRange(40), 'should return true');
    });
  });

  describe('isInteger', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('should return true if passed an integer', () => {
      const isInteger = funcs.isInteger;
      assert.equal(isInteger(5), true);
    });
    it('should return false if passed a number that is not an integer', () => {
      const isInteger = funcs.isInteger;
      assert.equal(isInteger(4.5), false);
    });
    it('should return a boolean value', () => {
      const isInteger = funcs.isInteger;
      assert.isBoolean(isInteger(5), 'should return true');
    });
  });

  describe('fizzBuzz', () => {
    it('should be a function', () => {
      expect(funcs.fizzBuzz).to.be.a('function');
    });
    it('should return `fizzbuzz` given a multiple of both 3 and 5', () => {
      expect(funcs.fizzBuzz(30)).to.equal('fizzbuzz');
    });
    it('should return `fizz` given a multiple of five', () => {
      expect(funcs.fizzBuzz(10)).to.equal('buzz');
    });
    it('should return `buzz` if passed 9', () => {
      expect(funcs.fizzBuzz(9)).to.equal('fizz');
    });
  });

  describe('isPrime', () => {
    it('should be a function', () => {
      expect(funcs.isPrime).to.be.a('function');
    });
    it('should return true if passed a prime number', () => {
      expect(funcs.isPrime(3)).to.be.true;
    });
    it('should return false if pass a non prime number', () => {
      expect(funcs.isPrime(4)).to.be.false;
    });
  });

  describe('returnFirst', () => {
    it('should be a function', () => {
      expect(funcs.returnFirst).to.be.a('function');
    });
    it('should return the first item in array when given an array', () => {
      expect(funcs.returnFirst([1, 2, 3])).to.equal(1);
    });
    it('should return a number when given an array of numbers', () => {
      expect(funcs.returnFirst([1, 2, 3])).to.be.a('number');
    });
    it('should return a string when given an array of strings', () => {
      expect(funcs.returnFirst(['one', 'two', 'three'])).to.be.a('string');
    });
  });

  describe('returnLast', () => {
    it('should be a function', () => {
      expect(funcs.returnLast).to.be.a('function');
    });
    it('should return the last item in an array when given an array', () => {
      expect(funcs.returnLast([1, 2, 3])).to.equal(3);
    });
    it('should return a number when given an array of numbers', () => {
      expect(funcs.returnFirst([1, 2, 3])).to.be.a('number');
    });
    it('should return a string when given an array of strings', () => {
      expect(funcs.returnFirst(['cat', 'dog', 'cow'])).to.be.a('string');
    });
  });

  describe('getArrayLength', () => {
    it('should be a function', () => {
      expect(funcs.getArrayLength).to.be.a('function');
    });
    it('should return length of array when passed an array', () => {
      expect(funcs.getArrayLength([1, 2, 3, 4])).to.equal(4);
    });
    it('should return a number when given an array', () => {
      expect(funcs.getArrayLength([1, 2, 3, 4])).to.be.a('number');
    });
  });

  describe('incrementByOne', () => {
    it('should be a function', () => {
      expect(funcs.incrementByOne).to.be.a('function');
    });
    it('should return [2, 3, 4] if passed [1, 2, 3]', () => {
      expect(funcs.incrementByOne([1, 2, 3])).to.eql([2, 3, 4]);
    });
    it('should return an array if passed an array', () => {
      expect(funcs.incrementByOne([1, 2, 3])).to.be.a('array');
    });
  });

  describe('addItemToArray', () => {
    it('should be a function', () => {
      expect(funcs.incrementByOne).to.be.a('function');
    });
    it('should return [1, 2, 3] if passed [1, 2], 3', () => {
      expect(funcs.addItemToArray([1, 2], 3)).to.eql([1, 2, 3]);
    });
    it('should return an array if passed an array', () => {
      expect(funcs.addItemToArray([1, 2], 3)).to.be.a('array');
    });
  });

  describe('addItemToFront', () => {
    it('should be a function', () => {
      expect(funcs.addItemToFront).to.be.a('function');
    });
    it('should return [1, 2, 3] if passed [2, 3], 1', () => {
      expect(funcs.addItemToFront([2, 3], 1)).to.eql([1, 2, 3]);
    });
    it('should return an array when passed an array', () => {
      expect(funcs.addItemToFront([2, 3], 1)).to.be.a('array');
    });
  });

  describe('wordsToSentence', () => {
    it('should be a function', () => {
      expect(funcs.wordsToSentence).to.be.a('function');
    });
    it('should return hi cole if passed ["hi", "cole"]', () => {
      expect(funcs.wordsToSentence(['hi', 'cole'])).to.equal('hi cole');
    });
    it('should return a string when passed an array of strings', () => {
      expect(funcs.wordsToSentence(['hi', 'cole'])).to.be.a('string');
    });
  });

  describe('contains', () => {
    it('should be a function', () => {
      expect(funcs.contains).to.be.a('function');
    });
    it('should return true when passed [1, 2, 3] and 1', () => {
      expect(funcs.contains([1, 2, 3], 1)).to.equal(true);
    });
    it('should return false when passed [1, 2, 3] and 4', () => {
      expect(funcs.contains([1, 2, 3], 4)).to.equal(false);
    });
  });

  describe('addNumbers', () => {
    it('should be a function', () => {
      expect(funcs.addNumbers).to.be.a('function');
    });
    it('sjould return 6 if passed [1, 2, 3]', () => {
      expect(funcs.addNumbers([1, 2, 3])).to.equal(6);
    });
    it('should return a number when passed an array', () => {
      expect(funcs.addNumbers([1, 2, 3])).to.be.a('number');
    });
  });

  describe('averageTestScore', () => {
    it('should be a function', () => {
      expect(funcs.averageTestScore).to.be.a('function');
    });
    it('should return 90 when passed [100, 90, 80]', () => {
      expect(funcs.averageTestScore([100, 90, 80])).to.equal(90);
    });
    it('should return a number when passed an array', () => {
      expect(funcs.averageTestScore([100, 90, 80])).to.be.a('number');
    });
  });

  describe('largestNumber', () => {
    it('should be a function', () => {
      expect(funcs.largestNumber).to.be.a('function');
    });
    it('should return 3 if passed [1, 2, 3]', () => {
      expect(funcs.largestNumber([1, 2, 3])).to.equal(3);
    });
    it('should return a number when passed an array', () => {
      expect(funcs.largestNumber([1, 2, 3])).to.be.a('number');
    });
  });
});
