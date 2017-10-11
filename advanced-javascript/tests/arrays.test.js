const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

const expect = chai.expect;
chai.use(sinonChai);

describe('Arrays', () => {
  describe('`each`', () => {
    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(each).to.be.a('function');
    });
    it('should call callback for each element in the array', () => {
      const callBack = sinon.spy();
      const nums = [5, 10, 15];
      arrayFunctions.each(nums, callBack);
      expect(callBack).to.have.been.calledWith(5);
      expect(callBack).to.have.been.calledWith(10);
      expect(callBack).to.have.been.calledWith(15);
    });
  });

  describe('`map`', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(map).to.be.a('function');
    });
    it('should pass each value in the array to the callback function', () => {
      const callBack = sinon.spy();
      const nums = [5, 10, 15];
      arrayFunctions.map(nums, callBack);
      expect(callBack).to.have.been.calledWith(5);
      expect(callBack).to.have.been.calledWith(10);
      expect(callBack).to.have.been.calledWith(15);
    });
    it('should return an array with correctly mapped values', () => {
      const nums = [5, 10, 15];
      const add1 = num => num + 1;
      expect(arrayFunctions.map(nums, add1)).to.eql([6, 11, 16]);
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce).to.be.a('function');
    });
    it('should return the correct result', () => {
      const nums = [5, 10, 15];
      const callBack = (prev, curr) => prev + curr;
      expect(arrayFunctions.reduce(nums, callBack)).to.equal(30);
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(find).to.be.a('function');
    });
    it('should return the element if it is in the array', () => {
      const nums = [5, 10, 15];
      const callBack = (num) => {
        return num > 10;
      };
      expect(arrayFunctions.find(nums, callBack)).to.equal(15);
    });
    it('should return undefined if the element is not in the array', () => {
      const nums = [5, 10, 15];
      const callBack = (num) => {
        return num > 100;
      };
      expect(arrayFunctions.find(nums, callBack)).to.equal(undefined);
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(filter).to.be.a('function');
    });
    it('should pass each value in the array to the callback function', () => {
      const callBack = sinon.spy();
      const nums = [5, 10, 15];
      arrayFunctions.filter(nums, callBack);
      expect(callBack).to.have.been.calledWith(5);
      expect(callBack).to.have.been.calledWith(10);
      expect(callBack).to.have.been.calledWith(15);
    });

    it('should return an array with the correctly filtered values', () => {
      const nums = [5, 10, 15];
      const callBack = (num) => {
        return num <= 10;
      };
      expect(arrayFunctions.filter(nums, callBack)).to.eql([5, 10]);
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten).to.be.a('function');
    });
    it('should return an unnested array', () => {
      const nums = [1, [2, [3, [4]]]];
      expect(arrayFunctions.flatten(nums)).to.eql([1, 2, 3, 4]);
    });
  });
});
