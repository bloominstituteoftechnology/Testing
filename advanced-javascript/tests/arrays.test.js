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
    it('should run the callback', () => {
      const tA = ['one', 'two', 'three'];
      const cb = sinon.spy();
      each(tA, cb);
      expect(cb.called).to.equal(true);
    });
    it('should run the callback for each item', () => {
      const tA = ['one', 'two', 'three'];
      const cb = sinon.spy();
      each(tA, cb);
      expect(cb.callCount).to.equal(3);
    });
    it('should pass index to the callback', () => {
      const tA = ['one', 'two', 'three'];
      const indexes = [];
      const cb = (element, index) => { 
        indexes.push(index);
      };
      each(tA, cb);
      expect(indexes.join()).to.equal([0, 1, 2].join());
    });
    it('should pass elements to the callback', () => {
      const tA = ['one', 'two', 'three'];
      const elements = [];
      const cb = (element, index) => { 
        elements.push(element);
      };
      each(tA, cb);
      expect(elements.join()).to.equal(tA.join());
    });
  
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    const tA = ['one', 'two', 'three'];
    const modded = ['one potato', 'two potato', 'three potato'];
    const cb = (item) => {
      item = item + ' potato';
      return item;
    }
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(map).to.be.an('function');
    });
    it('should return an array', () => {
      const map = arrayFunctions.map;
      expect(map(tA, cb)).to.be.an('array');
    });
    it('should return an array with correct cb mods', () => {
      const map = arrayFunctions.map;
      expect(map(tA, cb)).to.deep.equal(modded);
    });
    it('should run the callback', () => {
      const cbSpy = sinon.spy();
      map(tA, cbSpy);
      expect(cbSpy.called).to.equal(true);
    });
    it('should run the callback for each item', () => {
      const cbSpy = sinon.spy();
      map(tA, cbSpy);
      expect(cbSpy.callCount).to.equal(3);
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
