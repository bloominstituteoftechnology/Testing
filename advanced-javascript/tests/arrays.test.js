const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

const { expect } = chai;
chai.use(sinonChai);

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
// hint 3. - if the function you're testing requires a * callback *, make sure you use a spy like sinon

describe('Arrays', () => {
  let dataArray = [];

  beforeEach(() => {
    dataArray = ['apples', 'bananas', 'oranges', 'kiwi', 'strawberry'];
  });

  afterEach(() => {
    dataArray = [];
  });

  describe('`each`', () => {
    const { each } = arrayFunctions;
    const callback = sinon.spy();

    it('should be a function', () => {
      expect(each).to.be.a('function');
    });

    it('should execute callback function atleast once', () => {
      each(dataArray, callback);
      expect(callback).to.have.callCount(dataArray.length);
    });
  });

  describe('`map`', () => {
    const { map } = arrayFunctions;
    const callback = sinon.spy();

    it('should be a function', () => {
      expect(map).to.be.an('function');
    });

    it('should execute callback function atleast once', () => {
      const arrayMap = map(dataArray, callback);
      expect(callback).to.have.callCount(dataArray.length);
    });

    it('should return new array', () => {
      const arrayMap = map(dataArray, callback);
      expect(arrayMap).to.have.lengthOf(dataArray.length);
      expect(arrayMap).to.not.equal(dataArray);
    });
  });

  describe('`reduce`', () => {
    const { reduce } = arrayFunctions;
    const callback = sinon.spy();

    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });

    it('should execute callback function atleast once', () => {
      const arrayReduced = reduce(dataArray, callback);
      expect(callback).to.have.callCount(dataArray.length);
    });

    it('should return correct sum using reduce', () => {
      const arraySum = reduce([1, 2, 3, 4], (a, b) => a + b);
      expect(arraySum).to.be.a('number');
      expect(arraySum).to.equal(10);
    });
  });

  describe('`find`', () => {
    const { find } = arrayFunctions;

    it('should be a function', () => {
      expect(find).to.be.an('function');
    });

    it('should find the item we are searching for', () => {
      const callBack = (element) => {
        return element === 'turtle' ? element : undefined;
      };
      const foundElement = find([1, 2, 'turtle', 'blue'], callBack);
      expect(foundElement).to.equal('turtle');
    });

    it('should return an item with the same type as what we are seaching for', () => {
      const callBack = (element) => {
        return element === 3 ? element : undefined;
      };
      const foundElement = find([1, 3, 'orange', 'banana'], callBack);
      expect(foundElement).to.be.a('number');
    });
  });

  describe('`filter`', () => {
    const { filter } = arrayFunctions;

    it('should be a function', () => {
      expect(filter).to.be.a('function');
    });

    it('should return items that meet the filter', () => {
      const callBack = (element) => { return element > 10; };
      const filteredArray = filter([1, 133, 244, 32, 3], callBack);
      expect(filteredArray).to.eql([133, 244, 32]);
    });

    it('should return an array', () => {
      const callBack = (element) => { return element > 1; };
      const filteredArray = filter([1, 2, 3], callBack);
      expect(filteredArray).to.be.an('array');
    });
  });

  describe('`flatten`', () => {
    const { flatten } = arrayFunctions;

    it('should be a function', () => {
      expect(flatten).to.be.a('function');
    });

    it('should flatten nested arrays', () => {
      const flatArray = flatten([1, 2, [3, [4]]]);
      expect(flatArray).to.eql([1, 2, 3, 4]);
    });

    it('should return an array', () => {
      const flatArray = flatten([1, 2, [3, [4, [5]]]]);
      expect(flatArray).to.be.an('array');
    });
  });
});
