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

describe('Arrays', () => {

  describe('`each`', () => {
    const each = arrayFunctions.each;
    it('should be a function', () => {
      expect(each).to.be.a('function');
    });
    it('should invoke the callback with `SOMETHING AMAZING`', () => {
      const cb = sinon.spy();
      const elements = [ 1, 2, 3 ];
      each(elements, cb);
      for (let i = 0; i < elements.length; i++) {
    		expect(cb).to.have.been.calledWith(elements[i]);
    	};
    });
    it('should invoke a callback `ONCE`', () => {
      const cb = sinon.spy();
      const elements = [ 1 ];
      each(elements, cb);
      expect(cb).to.have.been.calledOnce;
    });
    it('should invoke a callback `THRICE`', () => {
      const cb = sinon.spy();
      const elements = [ 1, 2, 3 ];
      each(elements, cb);
      expect(cb).to.have.been.calledThrice;
    });
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(map).to.be.an('function');
    });
    it('should return an `Array`', () => {
      const cb = sinon.spy();
      const elements = [ 1 ];
      expect(map(elements, cb)).to.be.an('array');
    });
    it('should return a different array than passed in', () => {
      const cb = sinon.spy();
      const elements = [ 1, 2, 3 ];
      expect(map(elements, cb)).to.not.equal(elements);
    });
    it('should invoke the mapped callback with `SOMETHING AMAZING`', () => {
      const cb = sinon.spy();
      const elements = [ 1, 2, 3 ];
      map(elements, cb);
      for (let i = 0; i < elements.length; i++) {
        expect(cb).to.have.been.calledWith(elements[i]);
      };
    });
    it('should invoke a callback `THRICE`', () => {
      const cb = sinon.spy();
      const elements = [ 1, 2, 3 ];
      map(elements, cb);
      expect(cb).to.have.been.calledThrice;
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce).to.be.a('function');
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(find).to.be.an('function');
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(filter).to.be.a('function');
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten).to.be.a('function');
    });
  });

});
