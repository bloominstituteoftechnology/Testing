/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
  describe('`largestNumber`', () => {
    it('should be a function', () => {
      const { largestNumber } = funcs;
      assert.typeOf(largestNumber, 'function');
    });
    it('should return a number', () => {
      const { largestNumber } = funcs;
      const result = largestNumber([1]);
      assert.typeOf(result, 'number');
    });
    it('should return the correct number', () => {
      const { largestNumber } = funcs;
      const result = largestNumber([1, 7, 4, 32, 1, 0, -1000, 2, 90, 80]);
      assert.equal(result, 90);
    });
  });

  describe('`fizzBuzz`', () => {
    it('should be a function', () => {
      const { fizzBuzz } = funcs;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return the correct value', () => {
      const { fizzBuzz } = funcs;
      const FIZZBUZZ = 'fizzbuzz';
      const BUZZ = 'buzz';
      const FIZZ = 'fizz';

      const tests = [15, 5, 3, 1, 0, -15];
      const results = [FIZZBUZZ, BUZZ, FIZZ, 1, FIZZBUZZ, FIZZBUZZ];

      tests.forEach((each, i) => {
        assert.equal(fizzBuzz(each), results[i]);
      });
    });
  });
});
