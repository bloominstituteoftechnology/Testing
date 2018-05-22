const arrayFunctions = require('../advanced-javascript/arrays.js');
const jsFuncs = require("../basic-javascript/project-1");
const {add, multiply, subtract} = jsFuncs;
// we've gone ahead and gotten a start here for you, except, for some reason,
// none of our current assertions are working. first step is to make sure all
// these assertions work. then make sure you have at least 2-3 more assertions
// for every function. hint 1. - you need to pass data to the functions and get
// expected output. hint 2. - you should test the data type being called back,
// and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('map', () => {
    it('Should return a mapped array with values being changed', () => {
      const map = arrayFunctions.map;
      const numsArr = [1, 2, 3, 4];
      expect(map(numsArr, val => val * 2)).toEqual([2, 4, 6, 8])
    });
  });
});

it('Should reduce value based on callback', () => {
  const reduce = arrayFunctions.reduce;
  const numsArr = [1, 2, 3, 4];
  expect(reduce(numsArr, add)).toBe(10)
  expect(reduce(numsArr, subtract)).toBe(-5)
});

it('Should return a item if found and return undefinied if item is not found', () => {
  const find = arrayFunctions.find;
  const Touhou = ['Reimu', 'Sakuya', 'Marisa', 'ZUN'];
  const numsArr = [1, 2, 3, 4, 5];
  expect(find(numsArr, val => val === 3)).toBe(3);
  expect(find(Touhou, val => val === 'Reimu')).toBe('Reimu');
  expect(find(Touhou, val => val === 'Sanae')).toBeUndefined();

});

it('Should return a filtered value based on callback', () => {
const filter = arrayFunctions.filter;
const numsArr = [1, 2, 3, 4, 5];
expect(filter(numsArr, val => val < 3)).toEqual([1, 2])
})

it('Should return an array', () => {
  const flatten = arrayFunctions.flatten
  const numsArr = [1, 2, 3, 4, 5];
  expect(flatten(numsArr)).toEqual([1, 2, 3, 4, 5])
})


