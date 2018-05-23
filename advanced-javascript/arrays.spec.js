const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('each', () => {
    it('invokes cb for every array element', () => {
      const each = arrayFunctions.each;

      expect(typeof each).toBe('function');
    });
  });
//----------------------------------------------------------------------------------------------  


  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      const Ex1 = map([2, 4, 6], num => num*2);

      expect(typeof map).toBe('function');
      expect(Ex1).toEqual([4, 8, 12]);
    });
  });
//----------------------------------------------------------------------------------------------  


  describe('reduce', () => {
    it('reduces array to one value', () => {
      const reduce = arrayFunctions.reduce;
      const Ex1 = reduce([2, 2, 2], (num, acc) => acc + num);
      const Ex2 = reduce([1, 1, 1], (num, acc) => acc * num);
      const Ex3 = reduce([1, 2, 3], (num, acc) => acc);

      expect(Ex1).toEqual(6);
      expect(Ex2).toEqual(1);
      expect(Ex3).toEqual(3);
    });
  });
  //----------------------------------------------------------------------------------------------  


  describe('find', () => {
    it('find a value within array', () => {
      const find = arrayFunctions.find;
      const Ex1 = find([1, 2, 3], num => num === 2);
      const Ex2 = find([1, 2, 3], num => num === 0);
      const Ex3 = find([1, 2, 3, 4, 3], num => num === 3);

      expect(Ex1).toEqual(2);
      expect(Ex2).toEqual(undefined);
      expect(Ex3).toEqual(3);
    });
  });
//----------------------------------------------------------------------------------------------  


  describe('filter', () => { //not sure why my filter isn't passing the test... 
        it('filter arrays elements by cb', () => {
          const filter = arrayFunctions.filter;
          const Ex1 = filter([], num => num === 1);
          const Ex2 = filter([1,2,3], num => num === 2);
          const Ex3 = filter([1,2,3,4,5,3], num => num === 3)
          
          expect(Ex1).toEqual([])
          expect(Ex2).toEqual([2]);
          expect(Ex3).toEqual([3, 3]);
        });
      });
  //----------------------------------------------------------------------------------------------      
    
  describe('flatten', () => {
    it('multi-dimensional array to a one-dimentional array', () => {
      const flatten = arrayFunctions.flatten;
      const Ex1 = flatten([2, 4, [6, 8, [10, 12]]]);
      const Ex2 = flatten([2, 4, 6]);
      const Ex3 = flatten({ key: "value" });
      
      expect(Ex1).toEqual([2, 4, 6, 8, 10, 12]);
      expect(Ex2).toEqual([2, 4, 6]);
      expect(Ex3).toEqual([]);
    });
  });
}); 