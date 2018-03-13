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

describe('Arrays', () => {
  describe('`each`', () => {
    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(each).to.be.a('function');
    });
    it('should run the callback on each element of array', () => {
      const { each } = arrayFunctions;
      let str = '';
      const words = ['Hello', 'World', '!'];
      each(words, (elem) => {
        str += elem;
      });
      expect(str).to.equal('HelloWorld!');
    });
    it('should pass the element and the index to the callback', () => {
      const { each } = arrayFunctions;
      let count = 0;
      each([1, 2, 3, 4], (elem, i) => {
        count += elem + i;
      });
      expect(count).to.equal(16);
    });
    it('should invoke the cb on all elements', () => {
      const { each } = arrayFunctions;
      const elements = [1, 2, 3];
      const cb = sinon.spy();
      each(elements, cb)
      expect(cb).to.have.callCount(elements.length);
    });
  });

  describe('`map`', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(map).to.be.an('function');
    });
    it('should return an array', () => {
      const { map } = arrayFunctions;
      const result = map([1, 2, 3], num => num + 1);
      expect(result).to.be.an('array');
    });
    it('should pass each element through the callback', () => {
      const { map } = arrayFunctions;
      const result = map([1, 2, 3], num => num + 1);
      expect(result).to.deep.equal([2, 3, 4]);
    });
    it('should invoke the cb on all elements', () => {
      const { map } = arrayFunctions;
      const elements = [1, 2, 3, 4];
      const cb = sinon.spy();
      map(elements, cb)
      expect(cb).callCount(elements.length);
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce).to.be.a('function');
    });
    it('should reduce all elements to a single value', () => {
      const { reduce } = arrayFunctions;
      const arr = [5, 2, 9, 14, 20];
      const result = reduce(arr, (accumulator, currentVal) => (accumulator + currentVal));
      expect(result).to.equal(50);
    });
    it('should accept a memo argument', () => {
      const { reduce } = arrayFunctions;
      const arr = [5, 2, 9, 14, 20];
      const result = reduce(arr, (accumulator, currentVal) => (accumulator + currentVal), 10);
      expect(result).to.equal(60);
    });
    it('should handle different types of data', () => {
      const { reduce } = arrayFunctions;
      let arr = ['G', 'u', 'e', 'l', 'm', 'i', 's'];
      const result = reduce(arr, (accumulator, currentVal) => (accumulator + currentVal));
      expect(result).to.be.equal('Guelmis');
    });
    it('should invoke the cb on all elements except one', () => {
      const { reduce } = arrayFunctions;
      let arr = ['G', 'u', 'e', 'l', 'm', 'i', 's'];
      const cb = sinon.spy();
      const result = reduce(arr, cb);
      expect(cb).to.have.callCount(6);
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(find).to.be.an('function');
    });
    it('should return the value of the first element to satisfy the testing function', () => {
      const { find } = arrayFunctions;
      const result = find([1, 2, 3, 4], (number) => (number === 3));
      expect(result).to.be.equal(3);
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(filter).to.be.a('function');
    });
    it('should return an empty array if no element passes the testing function', () => {
      const { filter } = arrayFunctions;
      const arr = ['a', 'b', 'c', 'b'];
      const result = filter(arr, letter => (letter === 'z'));
      expect(result).to.have.lengthOf(0);
    });
    it('should return an array', () => {
      const { filter } = arrayFunctions;
      const arr = ['a', 'b', 'c', 'b'];
      const result = filter(arr, letter => (letter === 'b'));
      expect(result).to.be.an('array');
    });
    it('should return an array', () => {
      const { filter } = arrayFunctions;
      const arr = ['a', 'b', 'c', 'b'];
      const result = filter(arr, letter => (letter === 'b'));
      expect(result).to.be.an('array');
    });
    it('should return an array with elements that pass the testing function', () => {
      const { filter } = arrayFunctions;
      const arr = ['a', 'b', 'c', 'b'];
      const result = filter(arr, letter => ((letter === 'b') || (letter === 'c')));
      expect(result[0]).to.equal('b');
      expect(result[1]).to.equal('c');
      expect(result[2]).to.equal('b');
      expect(result).to.have.lengthOf(3);
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten).to.be.a('function');
    });
    it('should return a flatten array', () => {
      const flatten = arrayFunctions.flatten;
      const arr = [3, 5, 2, [9], [25, 30]];
      const result = flatten(arr);
      expect(result).to.deep.equal([3, 5, 2, 9, 25, 30]);
    });
    it('should return a flatten array no matter the inception', () => {
      const flatten = arrayFunctions.flatten;
      const arr = [3, 5, 2, [[[[[9]]]]], [25, [[[30]]]]];
      const result = flatten(arr);
      expect(result).to.deep.equal([3, 5, 2, 9, 25, 30]);
    });
    it('should return an array', () => {
      const flatten = arrayFunctions.flatten;
      const arr = [3, 5, 2, [9], [25, 30]];
      const result = flatten(arr);
      expect(result).to.be.an('array');
    });
  });
});
