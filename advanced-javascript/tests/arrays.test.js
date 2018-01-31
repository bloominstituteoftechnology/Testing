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
  let testArray = [];
  beforeEach(() => {
    testArray = [1, 2, 3];
  });

  afterEach(() => {
    testArray = [];
  });

  describe('`each`', () => {
    const each = arrayFunctions.each;
    it('should be a function', () => {
      expect(each).to.be.a('function');
    });
    it('should call a callback for each item of the array', () => {
      const callBack = sinon.spy();
      each(testArray, callBack);
      expect(callBack).to.have.callCount(3);
    });
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(map).to.be.an('function');
    });
    it('should call a callback for each item of the array', () => {
      const callBack = sinon.spy();
      map(testArray, callBack);
      expect(callBack).to.have.callCount(3);
    });
  });

  describe('`reduce`', () => {
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });
    it('should call a callback for each item of the array and ', () => {
      const callBack = sinon.spy();
      const array = [1, 2, 3];
      const callback = (total, sum) => total + 1;
      expect(arrayFunctions.reduce(array, callback)).to.equal(7);
    });
    it('should call a callback for each item of the array', () => {
      const callBack = sinon.spy();
      reduce(testArray, callBack);
      expect(callBack).to.have.callCount(3);
    });
  });

  describe('`find`', () => {
    const find = arrayFunctions.find;
    it('should be a function', () => {
      expect(find).to.be.an('function');
    });
    it('should call a callback for each item of the array', () => {
      const callBack = sinon.spy();
      find(testArray, callBack);
      expect(callBack).to.have.callCount(3);
    });
  });

  describe('`filter`', () => {
    const filter = arrayFunctions.filter;
    it('should be a function', () => {
      expect(filter).to.be.a('function');
    });
    it('should call a callback for each item of the array', () => {
      const callBack = sinon.spy();
      filter(testArray, callBack);
      expect(callBack).to.have.callCount(3);
    });
  });

  describe('`flatten`', () => {
    const flatten = arrayFunctions.flatten;
    it('should be a function', () => {
      expect(flatten).to.be.a('function');
    });
    it('should call a callback for each item of the array', () => {
      const callBack = sinon.spy();
      flatten(testArray, callBack);
      expect(callBack).to.have.callCount(3);
    });
  });

});

