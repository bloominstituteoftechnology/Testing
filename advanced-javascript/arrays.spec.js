const {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
} = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('each', () => {
    it('should invoke cb for each array item',() => {
      expect(typeof each).toBe('function');
    });
  });
  
  describe('map', () => {
    it('should be a function', () => {
//      const map = arrayFunctions.map;
//      expect(typeof map).toBe('object');
      const arr = map([1,2,3], num => num*2);
      expect(typeof map).toBe('function');
      expect(arr).toEqual([2,4,6]);
    });
  });

  describe('reduce', () => {
    it('reduces array to value',() => {
      const arr = reduce([1,2,3], (num,acc) => acc + num);
      const arr2 = reduce([1,2,3], (num,acc) => acc * num);
      const arr3 = reduce([1,2,3], (num,acc) => acc);
      const arr4 = reduce([true,false], (num,acc) => acc + num);
      
      expect(arr).toEqual(6);
      expect(arr2).toEqual(6);
      expect(arr3).toEqual(3);
      expect(arr4).toEqualNaN;
      
    });
  });

  describe('find', () => {
    it('finds value in array', () => {
      const arr = find([1,2,3], num => num === 2);
      const arr2 = find([1,2,3], num => num === 0);
      const arr3 = find([true,false], bool => bool === true);
      const arr4 = find(['smart','ass'], str => str === 'butt');

      expect(arr).toEqual(2);
      expect(arr2).toEqual(undefined);
      expect(arr3).toEqual(true);
      expect(arr4).toEqual(undefined);
			
    });
  });

  describe('filter', () => {
    it('filters array values based on callback', () => {
      const arr = filter([1,2,3], num => num === 2);
      const arr2 = filter([], num => num === 4);

      expect(arr).toEqual([2]);
      expect(arr2).toEqual([]);
    });
  });

  describe('flatten',() => {
    it('should flatten nested arrays into a single array', () => {
      const arr = flatten([1,2,3,[4,5],6]);
      const arr2 = flatten([1,2,3]);

      expect(arr).toEqual([1,2,3,4,5,6]);
      expect(arr2).toEqual([1,2,3]);
    });
  });
  
  
  
});
