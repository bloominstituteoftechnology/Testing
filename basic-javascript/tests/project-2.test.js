/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-2');

const errMess = 'nooo why fail??';

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {
  describe('getBiggest', () => {
    const getBiggest = funcs.getBiggest;
    it('should be a function', () => {
      expect(getBiggest).to.be.a('function');
      assert.typeOf(getBiggest, 'function');
    });
    it('should be return a number', () => {
      expect(getBiggest(2, 4)).to.be.a('number');
      assert.typeOf(getBiggest(2, 4), 'number');
    });
    it('value should be 4', () => {
      expect(getBiggest(2, 4)).to.equal(4);
      assert.equal(getBiggest(2, 4), 4);
    });
  });

  describe('greeting', () => {
    const greeting = funcs.greeting;
    it('should be a function', () => {
      expect(greeting).to.be.a('function');
      assert.typeOf(greeting, 'function');
    });
    it('should be return a number', () => {
      expect(greeting('Spanish')).to.be.a('string');
      assert.typeOf(greeting('Spanish'), 'string');
    });
    it('value should be Hola!', () => {
      expect(greeting('Spanish')).to.equal('Hola!');
      assert.equal(greeting('Spanish'), 'Hola!');
    });
  });

  describe('isTenOrFive', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('should be a function', () => {
      expect(isTenOrFive).to.be.a('function');
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should be return a number', () => {
      expect(isTenOrFive(10)).to.be.a('boolean');
      assert.typeOf(isTenOrFive(10), 'boolean');
    });
    it('value should be true', () => {
      expect(isTenOrFive(10)).to.equal(true);
      assert.equal(isTenOrFive(10), true);
    });
  });

  describe('isInRange', () => {
    const isInRange = funcs.isInRange;
    it('should be a function', () => {
      expect(isInRange).to.be.a('function');
      assert.typeOf(isInRange, 'function');
    });
    it('should be return a number', () => {
      expect(isInRange(25)).to.be.a('boolean');
      assert.typeOf(isInRange(25), 'boolean');
    });
    it('value should be true', () => {
      expect(isInRange(25)).to.equal(true);
      assert.equal(isInRange(25), true);
    });
  });

  describe('isInteger', () => {
    const isInteger = funcs.isInteger;
    it('should be a function', () => {
      expect(isInteger).to.be.a('function');
      assert.typeOf(isInteger, 'function');
    });
    it('should be return a number', () => {
      expect(isInteger(25)).to.be.a('boolean');
      assert.typeOf(isInteger(25), 'boolean');
    });
    it('value should be true', () => {
      expect(isInteger(25)).to.equal(true);
      assert.equal(isInteger(25), true);
    });
  });

  describe('`fizzBuzz`', () => {
    const fizzBuzz = funcs.fizzBuzz;
    it('should be a function', () => {
      expect(fizzBuzz).to.be.a('function');
      assert.typeOf(fizzBuzz, 'function');
    });
    // begin here
    it('should have a return type of number', () => {
      expect(fizzBuzz(5)).to.be.a('string');
      assert.typeOf(fizzBuzz(7), 'number');
    });
    it('should have a value of 7', () => {
      expect(fizzBuzz(5)).to.equal('buzz');
      assert.equal(fizzBuzz(7), 7);
    });
  });

  describe('isPrime', () => {
    const isPrime = funcs.isPrime;
    it('should be a function', () => {
      expect(isPrime).to.be.a('function');
      assert.typeOf(isPrime, 'function');
    });
    it('should be return a number', () => {
      expect(isPrime(13)).to.be.a('boolean');
      assert.typeOf(isPrime(13), 'boolean');
    });
    it('value should be true', () => {
      expect(isPrime(13)).to.equal(true);
      assert.equal(isPrime(13), true);
    });
  });

  describe('returnFirst', () => {
    const returnFirst = funcs.returnFirst;
    it('should be a function', () => {
      expect(returnFirst).to.be.a('function');
      assert.typeOf(returnFirst, 'function');
    });
    // it('should be return a number', () => {
    //   expect(returnFirst(13)).to.be.a('boolean');
    //   assert.typeOf(returnFirst(13), 'boolean');
    // });
    it('value should be true', () => {
      expect(returnFirst([1,2])).to.equal(1);
      assert.equal(returnFirst([1,2]), 1);
    });
  });

  describe('returnLast', () => {
    const returnLast = funcs.returnLast;
    it('should be a function', () => {
      expect(returnLast).to.be.a('function');
      assert.typeOf(returnLast, 'function');
    });
    // it('should be return a number', () => {
    //   expect(returnLast(13)).to.be.a('boolean');
    //   assert.typeOf(returnLast(13), 'boolean');
    // });
    it('value should be true', () => {
      expect(returnLast([1,2])).to.equal(2);
      assert.equal(returnLast([1,2]), 2);
    });
  });
});
