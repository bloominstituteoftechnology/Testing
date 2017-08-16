const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

const expect = chai.expect;
const assert = chai.assert;
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
    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(each).to.be.a('function');
    });
    // begin here
    it('should use the callback function on each of its elements', () => {
      const each = arrayFunctions.each;
      const cb = sinon.stub();
      cb.withArgs(0, 1, 2, 3, 4).returns(1);
      const arr = [1, 2, 3, 4];
      each(arr, cb);
      expect(cb).to.have.callCount(4);
    });
  });

  describe('`map`', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(map).to.be.a('function');
    });
    it('should pass each element to the callback function', () => {
      const map = arrayFunctions.map;
      const arr = [1, 2, 3, 4];
      const cb = sinon.stub();
      cb.withArgs(1, 2, 3, 4).returns(1);
      const result = map(arr, cb);
      expect(cb).to.have.callCount(4);
    });
    it('should push the results into the returned array', () => {
      const map = arrayFunctions.map;
      const arr = [1, 2, 3, 4];
      const arr2 = [2, 4, 6, 8];
      const cb = x => x * 2;
      const result2 = map(arr, cb);
      expect(result2).to.deep.equal(arr2);
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
      expect(find).to.be.a('function');
    });
    it('should return pass each element to the callback function', () => {
      const find = arrayFunctions.find;
      const arr = [1, 2, 3, 4];
      const cb = sinon.stub();
      cb.withArgs(1, 2, 3, 4).returns(1);
      find(arr, cb);
      expect(cb).to.have.callCount(4);
    });
    it('should return the first true result', () => {
      const find = arrayFunctions.find;
      const arr = [1, 2, 3, 4];
      const cb = (x) => {
        if (x === 4) return true;
        return false;
      };
      assert.equal(find(arr, cb), 4);
    });
    it('should return undefined if none of the results come back true', () => {
      const find = arrayFunctions.find;
      const arr = [1, 2, 3, 4];
      const cb = (x) => {
        if (x > 4) return true;
        return false;
      };
      assert.equal(find(arr, cb), undefined);
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(filter).to.be.a('function');
    });
    it('should return pass each element to the callback function', () => {
      const filter = arrayFunctions.filter;
      const arr = [1, 2, 3, 4];
      const cb = sinon.stub();
      cb.withArgs(1, 2, 3, 4).returns(true);
      filter(arr, cb);
      expect(cb).to.have.callCount(4);
    });
    it('should properly filter each element through the callback function', () => {
      const filter = arrayFunctions.filter;
      const arr = [1, 2, 3, 4];
      const cb = (x) => {
        return x > 1;
      };
      const result = filter(arr, cb);
      expect(result).to.deep.equal([2, 3]);
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten).to.be.a('function');
    });
    it('should return a single, unnested array', () => {
      const flatten = arrayFunctions.flatten;
      const arr = [1, [2, 3, [4]], 5];
      flatten(arr);
      for (let i = 0; i < arr.lenghth; i++) {
        assert.typeOf(arr[i], 'number');
      }
    });
  });
});
