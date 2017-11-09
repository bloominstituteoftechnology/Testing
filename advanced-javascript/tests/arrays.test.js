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
    it('should call the cb for each element of array with the element value and index', () => {
      const spy = sinon.spy();
      const arr = [1, 2, 4];
      each(arr, spy);
      arr.forEach((v, i) => {
        expect(spy.getCall(i)).to.have.be.calledWith(arr[i], i);
      });
      expect(spy).to.have.been.callCount(arr.length);
    });
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(map).to.be.an('function');
    });
    it('map should call callback for each element', () => {
      const spy = sinon.spy();
      const arr = [1, 2, 3];
      const mapped = map(arr, spy);
      mapped.forEach((dummy, i) => {
        expect(spy.getCall(i)).to.have.be.calledWith(arr[i]);
      });
      expect(spy).to.have.been.callCount(arr.length);
    });
  });

  describe('`reduce`', () => {
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });
    it('reduce should call callback for each element', () => {
      const add = (memo, item) => {
        return memo + item;
      };
      const arr = [1, 2, 3, 4];
      expect(reduce(arr, add)).to.be.eq(10);
      const multiply = (memo, item) => {
        return memo * item;
      };
      expect(reduce(arr, multiply, 5)).to.be.eq(120);
    });
  });

  describe('`find`', () => {
    const find = arrayFunctions.find;
    it('should be a function', () => {
      expect(find).to.be.an('function');
    });
    it('should find the matching value', () => {
      const spy = sinon.stub();
      spy.withArgs(4).returns(true);
      const arr = [1, 2, 3, 4, 5, 6];
      expect(find(arr, spy)).to.be.eq(4);
    });
  });

  describe('`filter`', () => {
    const filter = arrayFunctions.filter;
    it('should be a function', () => {
      expect(filter).to.be.a('function');
    });
    it('should find the matching values', () => {
      const spy = sinon.stub();
      spy.withArgs(4).returns(true);
      spy.withArgs(6).returns(true);
      const arr = [1, 2, 3, 4, 5, 6];
      expect(filter(arr, spy)).to.be.eql([4, 6]);
    });
  });

  describe('`flatten`', () => {
    const flatten = arrayFunctions.flatten;
    it('should be a function', () => {
      expect(flatten).to.be.a('function');
    });
    it('should flatten array', () => {
      const arr = [1, 2, [3, 4], 5, [6, [7, 8, 9]]];
      expect(flatten(arr)).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });
});
