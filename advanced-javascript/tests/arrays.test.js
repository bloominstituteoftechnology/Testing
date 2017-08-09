const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');
const expect = chai.expect;
chai.use(sinonChai);

// we've gone ahead and gotten a start here for you, 
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work. 
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
// hint 3. - if the function you're testing requires a * callback *, make sure you use a spy like sinon
const elem = [1, 2, 3];
const cb = sinon.spy();

describe('Arrays', () => {

  describe('`each`', () => {
    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(each).to.be.a('function');
    });
    // begin here
    it('should invoke the cb with array provided', () => {
      const each = arrayFunctions.each;
      each(elem, cb);
      for (let i = 0; i < elem.length; i++) {
        expect(cb).to.be.calledWith(elem[i]);
      }
    });
  });

  describe('`map`', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(map).to.be.an('function');
    });
    it('should return an array', () => {
      const map = arrayFunctions.map;
      expect(map([1, 2, 3], sinon.spy())).to.be.an('array');
    });
    it('should invoke the cb with array provided', () => {
      const map = arrayFunctions.map;
      map(elem, cb);
      for (let i = 0; i < elem.length; i++) {
        expect(cb).to.be.calledWith(elem[i]);
      }
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce).to.be.a('function');
    });
    it('should invoke the cb with array provided', () => {
      const reduce = arrayFunctions.reduce;
      reduce(elem, cb);
      for (let i = 0; i < elem.length; i++) {
        expect(cb).to.be.calledWith(elem[i]);
      }
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(find).to.be.an('function');
    });
    it('should invoke the cb with array provided', () => {
      const find = arrayFunctions.find;
      find(elem, cb);
      for (let i = 0; i < elem.length; i++) {
        expect(cb).to.be.calledWith(elem[i]);
      }
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(filter).to.be.a('function');
    });
    it('should invoke the cb with array provided', () => {
      const filter = arrayFunctions.filter;
      filter(elem, cb);
      for (let i = 0; i < elem.length; i++) {
        expect(cb).to.be.calledWith(elem[i]);
      }
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten).to.be.a('function');
    });
    it('should invoke the cb with array provided', () => {
      const flatten = arrayFunctions.flatten;
      flatten(elem, cb);
      for (let i = 0; i < elem.length; i++) {
        expect(cb).to.be.calledWith(elem[i]);
      }
    });
  });
  
});
