/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {
  describe('`fizzBuzz`', () => {
    it('should be a function', () => {
      const { fizzBuzz } = funcs;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return the correct value', () => {
      const { fizzBuzz } = funcs;
      const test = [15, 5, 3, 10, 1, 0, -15, 8];
      const results = [
        'fizzbuzz',
        'buzz',
        'fizz',
        'buzz',
        1,
        'fizzbuzz',
        'fizzbuzz',
        8,
      ];
      test.forEach((each, idx) => {
        assert.equal(fizzBuzz(each), results[idx]);
      });
    });
  });
  describe('`greeting`', () => {
    const { greeting } = funcs;
    it('should be a function', () => {
      assert.typeOf(greeting, 'function');
    });
    it('should return the right greeting', () => {
      const langs = ['German', 'Spanish', 'Chinese'];
      const results = ['Guten Tag!', 'Hola!', 'Hello!'];
      langs.forEach((lang, idx) => {
        assert.equal(greeting(lang), results[idx]);
      });
    });
  });
});
