const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.


describe('Arrays', () => {
  describe('each', () => {
    it('it should be a function', () => {
      const each = arrayFunctions.each
      expect(typeof each).toBe('function')
    });
  });
  describe('map', () => {
    it('should map over an array and apply the callback to each item', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
      expect(map([1,2,3], num => num * 2)).toEqual([2,4,6])
    });
  });
  describe('reduce', () => {
    it('removes first item in array', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
      expect(reduce([1,2,3,4], (num, acc) => acc + num)).toEqual(10);
      expect(reduce([1,2,3,4], (num, acc) => acc * num)).toEqual(24);
    })
    
  })
});




