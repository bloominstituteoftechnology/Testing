const arrayFunctions = require('../arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('map', () => {
    const map = arrayFunctions.map;
    const elements = [1,2,3,4];
    const incrementOne = num => num + 1;
    const decrementOne = num => num - 1;    
    it('should be a function', () => {
      expect(typeof map(elements, incrementOne)).toBe('object');
    });
    describe('returns an array with the appropriate values:', () => {
      it('return [2,3,4,5] given [1,2,3,4] and incrementOne', () => {
        expect(map(elements, incrementOne)).toEqual([2,3,4,5]);
      });
      it('return [0,1,2,3] given [1,2,3,4] and decrementOne', () => {
        expect(map(elements, decrementOne)).toEqual([0,1,2,3]);
      });
    });
  });

  describe('reduce', () => {
    const reduce = arrayFunctions.reduce;
    const sum = (a, b) => a + b;
    const concat = (accum, letter) => accum += letter;
    const elements = [1, 2, 3];
    const letters = ['h', 'o', 'l', 'a']

    describe('Returns a value according to callback', () => {
      it('return 6 given [1,2,3] and sum', () => {
        expect(reduce(elements, sum)).toBe(6);
      });
      it('returns hola given [h,o,l,a] and concat', () => {
        expect(reduce(letters, concat)).toBe('hola');
      });
    });
  });

  describe('find', () => {
    const find = arrayFunctions.find;
    const findBestName = str => str === 'fernando';
    const findNumber = number => number === 1991;
    const words = ['luis','carlos','john','will','fernando']
    const numbers = [1989,1990,1991,1992,1993,1994];

    describe('finds an item inside an array', () => {
      it('returns fernando when given findBestName and words', () => {
        expect(find(words, findBestName)).toBe('fernando');
      });
      it('returns 1991 when given findNumber and numbers', () => {
        expect(find(numbers, findNumber)).toBe(1991);
      });
    });
  });

  describe('filter', () => {
    const filter = arrayFunctions.filter;
    const filterNames = str => str.length > 6;
    const filterByFirstLetter = str => str[0] === 'f';
    const names = ['fernando', 'juan carlos', 'alan', 'mike', 'alfonso', 'fernanda'];

    describe('creates a new array with filtered information', () => {
      it('returns [fernando, juan carlos, alfonso] when given names and filterNames', () => {
        expect(filter(names, filterNames)).toEqual(['fernando','juan carlos','alfonso','fernanda']);
      });
      it('returns [fernando] given filteredByFirstLetter and names', () => {
        expect(filter(names, filterByFirstLetter)).toEqual(['fernando','fernanda']);
      });
    });
  });

  describe('flatten', () => {
    const flatten = arrayFunctions.flatten;
    // Dummy Data
    const dummy = [1, [2], [[3]]];
    const dummier = [[1,[2,[3]]]];
    const dummiest = [];
    describe('Flattens elements appropriately:',() => {
      it(`returns [1,2,3] given ${dummy}`,() => {
        expect(flatten(dummy)).toEqual([1,2,3]);
      });
      it(`returns [1,2,3] given ${dummier}`,() => {
        expect(flatten(dummier)).toEqual([1,2,3]);
      });
      it(`returns [] given empty array`,() => {
        expect(flatten(dummiest)).toEqual([]);
      });
    });
  });  
});
