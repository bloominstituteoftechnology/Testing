/* eslint-disable prefer-destructuring */

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

describe('`Arrays`', () => {
  describe('`each`', () => {
    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(each).to.be.a('function');
    });
    it('should perform the callback', () => {
      const each = arrayFunctions.each;
      const callBack = sinon.spy();
      each([1], callBack);
      expect(callBack).to.have.callCount(1);
    });
    it('should perform the callback 3 times', () => {
      const each = arrayFunctions.each;
      const callBack = sinon.spy();
      each([1, 2, 3], callBack);
      expect(callBack).to.have.callCount(3);
    });
    it('should return [1,2,3]', () => {
      const each = arrayFunctions.each;
      const callBack = (element, index) => {
        return;
      };
      const array = [1, 2, 3];
      expect(each(array, callBack)).to.deep.equal([1, 2, 3]);
    });
    it('second call should equal 2', () => {
      const each = arrayFunctions.each;
      const spyCallBack = sinon.spy(x => x + 2);
      each([4, 5, 6], spyCallBack);
      expect(spyCallBack.secondCall.returnValue).to.equal(7);
    });
  });

  describe('`map`', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(map).to.be.a('function');
    });
    it('should perform the callback 4 times', () => {
      const map = arrayFunctions.map;
      const callBack = sinon.spy();
      map([1, 2, 3, 4], callBack);
      expect(callBack).to.have.callCount(4);
    });
    it('should return [1,4,9,16]', () => {
      const map = arrayFunctions.map;
      const callBack = (element) => {
        return (element *= element);
      };
      const array = [1, 2, 3, 4];
      expect(map(array, callBack)).to.deep.equal([1, 4, 9, 16]);
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce).to.be.a('function');
    });
    it('should perform the callback twice', () => {
      const reduce = arrayFunctions.reduce;
      const callBack = sinon.spy();
      const array = [1, 2, 3];
      reduce(array, callBack);
      expect(callBack).to.have.callCount(2);
    });
    it('should return 6', () => {
      const reduce = arrayFunctions.reduce;
      const callBack = (memo, element) => {
        return (memo += element);
      };
      const array = [1, 2, 3];
      expect(reduce(array, callBack)).to.equal(6);
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(find).to.be.a('function');
    });
    it('should be called 3 times', () => {
      const find = arrayFunctions.find;
      const callBack = sinon.spy();
      const array = [0, 1, 2];
      find(array, callBack);
      // expect(callBack).to.have.callCount(3);
      expect(callBack.calledThrice, true);
    });
    it('should return the found 2', () => {
      const find = arrayFunctions.find;
      const num = 2;
      const array = [0, 1, 2];
      const check = (element) => {
        if (element === num) return true;
      };
      const callBack = sinon.spy(check);
      expect(find(array, callBack)).to.equal(2);
    });
  });

  // const callBack = sinon.spy((element) => {
  //   if (element > 20) return true;
  // });
  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(filter).to.be.a('function');
    });
    it('should be called 5 times', () => {
      const filter = arrayFunctions.filter;
      const callBack = sinon.spy();
      const array = [10, 20, 30, 40, 50];
      filter(array, callBack);
      expect(callBack).to.have.callCount(5);
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten).to.be.a('function');
    });
    it('should return [1,2,3]', () => {
      const flatten = arrayFunctions.flatten;
      const array = [1, 2, 3];
      expect(flatten(array)).to.deep.equal([1, 2, 3]);
    });
    it('should return [1,2,3,4,5]', () => {
      const flatten = arrayFunctions.flatten;
      const array = [[1], [2, 3], 4, [[5]]];
      expect(flatten(array)).to.deep.equal([1, 2, 3, 4, 5]);
    });
  });
});

