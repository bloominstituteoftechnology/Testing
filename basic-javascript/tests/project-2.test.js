/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
// brought in expect and should
const should = require('chai').should();
const expect = require('chai').expect;

const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2', () => {
  describe('getBiggest', () => {
    const { getBiggest } = funcs;
    it('it should be a function', () => {
      // assert.typeOf(getBiggest, 'object'); // fail
      getBiggest.should.be.a('function'); // pass
    });
  });
  describe('greeting', () => {
    const { greeting } = funcs;
    it('it should be a function', () => {
      // expect(greeting).to.be.an('object'); // fail
      expect(greeting).to.be.a('function'); // pass
    });
  });
  describe('isTenOrFive', () => {
    const { isTenOrFive } = funcs;
    it('it should be a function', () => {
      // isTenOrFive.should.be.an('object'); // fail
      isTenOrFive.should.be.a('function'); // pass
    });
  });
  describe('isInRange', () => {
    const { isInRange } = funcs;
    it('it should be a function', () => {
      // assert.typeOf(isInRange, 'object'); // fail
      assert.typeOf(isInRange, 'function'); // pass
    });
  });
  describe('isInteger', () => {
    const { isInteger } = funcs;
    it('it should be a function', () => {
      // expect(isInteger).to.be.an('object'); // fail
      expect(isInteger).to.be.a('function'); // pass
    });
  });
  describe('fizzBuzz', () => {
    const { fizzBuzz } = funcs;
    it('it should be a function', () => {
      // fizzBuzz.should.be.an('object'); // fail
      fizzBuzz.should.be.an('function'); // pass
    });
  });
  describe('isPrime', () => {
    const { isPrime } = funcs;
    it('it should be a function', () => {
      // assert.typeOf(isPrime, 'object'); // fail
      assert.typeOf(isPrime, 'function'); // pass
    });
  });
  describe('returnFirst', () => {
    const { returnFirst } = funcs;
    it('it should be a function', () => {
      // expect(isInteger).to.be.an('object'); // fail
      expect(returnFirst).to.be.a('function'); // pass
    });
  });
  describe('returnLast', () => {
    const { returnLast } = funcs;
    it('it should be a function', () => {
      // returnLast.should.be.an('object'); // fail
      returnLast.should.be.an('function'); // pass
    });
  });
  describe('getArrayLength', () => {
    const { getArrayLength } = funcs;
    it('it should be a function', () => {
      // assert.typeOf(getArrayLength, 'object'); // fail
      assert.typeOf(getArrayLength, 'function'); // pass
    });
  });
  describe('incrementByOne', () => {
    const { isInteger } = funcs;
    it('it should be a function', () => {
      // expect(isInteger).to.be.an('object'); // fail
      expect(isInteger).to.be.a('function'); // pass
    });
  });
  describe('addItemToArray', () => {
    const { addItemToArray } = funcs;
    it('it should be a function', () => {
      // addItemToArray.should.be.an('object'); // fail
      addItemToArray.should.be.an('function'); // pass
    });
  });
  describe('addItemToFront', () => {
    const { addItemToFront } = funcs;
    it('it should be a function', () => {
      // assert.typeOf(addItemToFront, 'object'); // fail
      assert.typeOf(addItemToFront, 'function'); // pass
    });
  });
  describe('wordsToSentence', () => {
    const { isInteger } = funcs;
    it('it should be a function', () => {
      // expect(isInteger).to.be.an('object'); // fail
      expect(isInteger).to.be.a('function'); // pass
    });
  });
  describe('contains', () => {
    const { contains } = funcs;
    it('it should be a function', () => {
      // contains.should.be.an('object'); // fail
      contains.should.be.an('function'); // pass
    });
  });
  describe('addNumbers', () => {
    const { addNumbers } = funcs;
    it('it should be a function', () => {
      // assert.typeOf(addNumbers, 'object'); // fail
      assert.typeOf(addNumbers, 'function'); // pass
    });
  });
  describe('averageTestScore', () => {
    const { isInteger } = funcs;
    it('it should be a function', () => {
      // expect(isInteger).to.be.an('object'); // fail
      expect(isInteger).to.be.a('function'); // pass
    });
  });
  describe('largestNumber', () => {
    const { largestNumber } = funcs;
    it('it should be a function', () => {
      // largestNumber.should.be.an('object'); // fail
      largestNumber.should.be.an('function'); // pass
    });
  });
});
