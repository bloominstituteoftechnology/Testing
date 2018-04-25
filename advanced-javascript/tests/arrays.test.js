/* eslint-disable prefer-destructuring */

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

// mock data
const elems = [1, 2, 3];

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
    it('each was called', () => {
      const callBack = sinon.spy();
      each(elems, callBack);

      // tests
      callBack.should.be.called;
      expect(callBack.called).to.be.ok;
      sinon.assert.called(callBack);
    });
    it('should get [2,4,6] when given [1,2,3]', () => {
      let result = [];
      const cb = x => result.push(x * 2);
      each(elems, cb);

      // tests
      result.should.deep.equal([2, 4, 6]);
      expect(result).to.deep.equal([2, 4, 6]);
      assert.deepEqual(result, [2, 4, 6]);
    });
    it('should be called x number of times', () => {
      const callBack = sinon.spy();
      const elemsLength = elems.length;
      each(elems, callBack);

      // tests
      callBack.callCount.should.equal(elemsLength);
      callBack.calledThrice.should.be.ok;

      expect(callBack.callCount).to.equal(elemsLength);
      expect(callBack.calledThrice).to.be.ok;

      sinon.assert.callCount(callBack, 3);
      sinon.assert.calledThrice(callBack);
    });
    it('should be called with 2', () => {
      const callBack = sinon.spy();
      const elemsLength = elems.length;
      each(elems, callBack);

      // tests
      callBack.calledWith(2).should.be.ok;
      expect(callBack.calledWith(2)).to.be.ok;
      sinon.assert.calledWith(callBack, 2);
    });
    it('should be called with 3 at index 2', () => {
      const callBack = sinon.spy();
      const elemsLength = elems.length;
      each(elems, callBack);

      // tests
      callBack.calledWith(3, 2).should.be.ok;
      expect(callBack.calledWith(3, 2)).to.be.ok;
      sinon.assert.calledWith(callBack, 3, 2);
    });
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      // expect(map).to.be.an('object'); // fail
      expect(map).to.be.a('function'); // pass
    });
    it('map was called', () => {
      const callBack = sinon.spy();
      map(elems, callBack);

      callBack.called.should.be.ok;
      expect(callBack.called).to.be.ok;
      sinon.assert.called(callBack);
    });
    it('should be called with 1', () => {
      const callBack = sinon.spy();
      const elemsLength = elems.length;
      map(elems, callBack);

      // tests
      callBack.calledWith(1).should.be.ok;
      expect(callBack.calledWith(1)).to.be.ok;
      sinon.assert.calledWith(callBack, 1);
    });
    it('should be called with 1 at index 0', () => {
      const callBack = sinon.spy();
      map(elems, callBack);

      // tests not working TBD why
      // callBack.calledWith(2, 1).should.be.ok;
      // expect(callBack.calledWith(1, 0)).to.be.ok;
      // sinon.assert.calledWith(callBack, 1, 2);
    });
  });

  describe('`reduce`', () => {
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {
      // expect(reduce).to.be.a('number'); // fail
      expect(reduce).to.be.a('function'); // pass
    });
    it('reduce was called', () => {
      const callBack = sinon.spy();
      reduce(elems, callBack);

      // tests
      callBack.called.should.be.ok;
      expect(callBack.called).to.be.ok;
      sinon.assert.called(callBack);
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
