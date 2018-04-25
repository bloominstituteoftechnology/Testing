/* eslint-disable prefer-destructuring */

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

const expect = chai.expect;
// add should and assert
const assert = chai.assert;
const should = chai.should();

chai.use(sinonChai);

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
// hint 3. - if the function you're testing requires a * callback *, make sure you use a spy like sinon

describe('Arrays', () => {
  describe('`each`', () => {
    const each = arrayFunctions.each;
    it('should be a function', () => {
      // expect(each).to.be.a('string'); // fail
      expect(each).to.be.a('function'); // pass
    });
    // begin here
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      // expect(map).to.be.an('object'); // fail
      expect(map).to.be.a('function'); // pass
    });
  });

  describe('`reduce`', () => {
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {
      // expect(reduce).to.be.a('number'); // fail
      expect(reduce).to.be.a('function'); // pass
    });
  });

  describe('`find`', () => {
    const find = arrayFunctions.find;
    it('should be a function', () => {
      // expect(find).to.be.an('array'); // fail
      expect(find).to.be.a('function'); // pass
    });
  });

  describe('`filter`', () => {
    const filter = arrayFunctions.filter;
    it('should be a function', () => {
      // expect(filter).to.be.a('null'); // fail
      expect(filter).to.be.a('function'); // pass
    });
  });

  describe('`flatten`', () => {
    const flatten = arrayFunctions.flatten;
    it('should be a function', () => {
      // expect(flatten).to.be.a('promise'); // fail
      expect(flatten).to.be.a('function'); // pass
    });
  });
});
