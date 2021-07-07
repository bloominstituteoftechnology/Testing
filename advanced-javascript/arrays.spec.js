const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.


describe('Arrays', () => {
  describe('map', () => {
    const map = arrayFunctions.map;
    const elements = [1, 2, 3];
    const incrementOne = num => num + 1;
    const decrementOne = num => num - 1;
    it('should be a function', () => {
      expect(typeof map(elements,incrementOne)).toBe('object');
    });
    describe('Returns an array with the appropriate values:',() => {
      it('returns [2,3,4] given [1,2,3] and incrementOne',() => {
        expect(map(elements,incrementOne)).toEqual([2,3,4]);
      });
      it('returns [0,1,2] given [1,2,3] and decrementOne',() => {
        expect(map(elements,decrementOne)).toEqual([0,1,2]);
      });
    });
  });

  describe('reduce', () => {
    const reduce = arrayFunctions.reduce;
    const sum = (a, b) => a + b;
    const concatenate = (accum, letter) => accum += letter;
    const elements = [1, 2, 3];
    const letters = ['h','e','l','l','o']
    describe('Returns a single value according to callback:',() => {
      it('returns 6 given [1,2,3] and incrementOne',() => {
        expect(reduce(elements,sum)).toBe(6);
      });
      it('returns hello given [h,e,l,l,o] and concatenate',() => {
        expect(reduce(letters,concatenate,"")).toEqual('hello');
      });
    });
  });

  describe('find', () => {
    const find = arrayFunctions.find;
    // Callback functions and Dummy Data
    const findTheBestBase = num => num === 12;
    const findBeer = str => str === 'beer';
    const findMeaningInLife = str => str === 'meaning';
    const numbers = [2, 8, 10, 12, 16];
    const words = ['water','juice','beer','emptiness','soda']
    describe('Finds elements appropriately:',() => {
      it(`returns 12 given ${numbers} and findTheBestBase`,() => {
        expect(find(numbers,findTheBestBase)).toBe(12);
      });
      it(`returns beer given ${words} and findBeer`,() => {
        expect(find(words,findBeer)).toBe('beer');
      });
      it(`returns undefined given ${words} and findMeaningInLife`,() => {
        expect(find(words,findMeaningInLife)).toBeUndefined();
      });
    });
  });

  describe('filter', () => {
    const filter = arrayFunctions.filter;
    // Callback functions and Dummy Data
    const findTheBestBase = num => num === 12;
    const filterOddsOut = num => num % 2 === 0;
    const findMeaningInLife = str => str === 'meaning';
    const numbers = [2, 8, 10, 12, 16];
    const moreNumbers = [1,2,3,4,5,6];
    describe('Filters elements appropriately:',() => {
      it(`returns [12] given ${numbers} and findTheBestBase`,() => {
        expect(filter(numbers,findTheBestBase)).toEqual([12]);
      });
      it(`returns [2,4,6] given ${moreNumbers} and filterOddsOut`,() => {
        expect(filter(moreNumbers,filterOddsOut)).toEqual([2,4,6]);
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

