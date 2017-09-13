const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

const expect = chai.expect;
chai.use(sinonChai);

const each = arrayFunctions.each;
const map = arrayFunctions.map;
const reduce = arrayFunctions.reduce;
const find = arrayFunctions.find;
const filter = arrayFunctions.filter;
const flatten = arrayFunctions.flatten;

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
// hint 3. - if the function you're testing requires a * callback *, make sure you use a spy like sinon

describe('Arrays', () => {
  describe('`each`', () => {
    const callBack = sinon.spy();
    each([1, 2, 3], callBack);
    it('should be a function', () => {
      expect(each).to.be.a('function');
    });
    it('should call callback for each element in the array', () => {
      // expect(callBack).to.have.been.called; linter sucks
      expect(callBack).to.have.been.calledWith(1, 0);
      expect(callBack).to.have.been.calledWith(2, 1);
      expect(callBack).to.have.been.calledWith(3, 2);
    });
  });

  describe('`map`', () => {
    const callBack = sinon.spy(n => n * 2);
    const mappedArr = map([1, 2, 3], callBack);
    it('should be a function', () => {
      expect(map).to.be.an('function');
    });
    it('should call callback on each value', () => {
      // expect(callBack).to.have.been.called; linter sucks
      expect(callBack).to.have.been.calledWith(1);
      expect(callBack).to.have.been.calledWith(2);
      expect(callBack).to.have.been.calledWith(3);
    });
    it('should return an a new array with each value change according to the callback', () => {
      expect(mappedArr).to.have.ordered.members([2, 4, 6]);
    });
  });

  describe('`reduce`', () => {
    const callBack = sinon.spy((memo, item) => memo + item);
    const sum = reduce([1, 2, 3], callBack);
    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });
    it('should call callback on each value', () => {
      // expect(callBack).to.have.been.called; linter sucks
      expect(callBack).to.have.been.calledWith(1, 2);
      expect(callBack).to.have.been.calledWith(3, 3);
    });
    it('should sum the values', () => {
      expect(sum).to.equal(6);
    });
    it('should be able to handle memo', () => {
      const total = reduce([1, 2, 3], callBack, 5);
      expect(total).to.equal(11);
    });
  });

  describe('`find`', () => {
    const callBack = sinon.spy(v => v === 3);
    const found = find([1, 2, 3], callBack);
    const missing = find([1, 2, 4], callBack);
    it('should be a function', () => {
      expect(find).to.be.an('function');
    });
    it('should callBack on each element', () => {
      // expect(callBack).to.have.been.called; linter sucks
      expect(callBack).to.have.been.calledWith(1);
      expect(callBack).to.have.been.calledWith(2);
      expect(callBack).to.have.been.calledWith(3);
    });
    it('should return element if the item is in the array', () => {
      expect(found).to.equal(3);
    });
    it('should return undefined if the element is not in the array', () => {
      expect(missing).to.equal(undefined);
    });
  });

  describe('`filter`', () => {
    const callBack = sinon.spy(v => v > 1);
    const filtered = filter([1, 2, 3], callBack);
    it('should be a function', () => {
      expect(filter).to.be.a('function');
    });
    it('should callBack on each element', () => {
      // expect(callBack).to.have.been.called; linter sucks
      expect(callBack).to.have.been.calledWith(1);
      expect(callBack).to.have.been.calledWith(2);
      expect(callBack).to.have.been.calledWith(3);
    });
    it('should return an array of all the values that the callBack deems true', () => {
      expect(filtered).to.have.ordered.members([2, 3]);
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      expect(flatten).to.be.a('function');
    });
    it('should take an nested array and return the array flattened', () => {
      expect(flatten([1, 2, 3, [3, [5, 6]]])).to.have.ordered.members([1, 2, 3, 3, 5, 6]);
      expect(flatten([1, 5, 15])).to.have.ordered.members([1, 5, 15]);
      expect(flatten([[[[[[4, 5, 6]]]]]])).to.have.ordered.members([4, 5, 6]);
    });
  });
});
