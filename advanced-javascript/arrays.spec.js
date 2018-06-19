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
      const array=[];
      const arr = each([1,2,3], num => array.push(num +1));
      const arr2 = each([1,2,3], num => num + 1);

      expect(typeof each).toBe('function');
      expect(array).toEqual([2,3,4]);
      expect(arr2).toEqual(undefined);
    });
  });
  
  describe('map', () => {
    it('should be a function', () => {
      expect(typeof map).toBe('function');
      const arr = map([1,2,3], num => num*2);
      const arr2 = map(['blue', 'green', 'yellow'], colors => colors.length);
      const arr3 = map([73.3589,1.5], num => Math.floor(num));
      
      expect(arr).toEqual([2,4,6]);
      expect(arr2).toEqual([4,5,6]);
      expect(arr3).toEqual([73,1]);
     		       
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
      const arr4 = find(['tabby','calico'], str => str === 'torbie');

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
      const arr3 = filter(['green','blue','yellow'], color => color === 'blue');
      const arr4 = filter([true, true], bool => bool === false);

      expect(arr).toEqual([2]);
      expect(arr2).toEqual([]);
      expect(arr3).toEqual(['blue']);
      expect(arr4).toEqual([]);
    });
  });

  describe('flatten',() => {
    it('should flatten nested arrays into a single array', () => {
      const arr = flatten([1,2,3,[4,5],6]);
      const arr2 = flatten([1,2,3]);
      const arr3 = flatten(['a',['b','c','d'],['e']]);
     
      expect(arr).toEqual([1,2,3,4,5,6]);
      expect(arr2).toEqual([1,2,3]);
      expect(arr3).toEqual(['a','b','c','d','e']);
    });
  });
  
  
  
});
