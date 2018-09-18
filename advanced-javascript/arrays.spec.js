const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('each', () => {
    it('should be a function', () => {
      const each = arrayFunctions.map;
      expect(typeof each).toBe('function');
    });

    it('should call for each item and do something for each call', () => {
      const mockCallback = jest.fn(x => 5 + x);
      arrayFunctions.each([0, 1, 2], mockCallback);
      //calls it 3 times, one for each item in array
      expect(mockCallback.mock.calls.length).toBe(3);

      //first argument of first call should be 0
      expect(mockCallback.mock.calls[0][0]).toBe(0);

      //first argument of second call should be 1
      expect(mockCallback.mock.calls[1][0]).toBe(1);

      //first argument of third call should be 2
      expect(mockCallback.mock.calls[2][0]).toBe(2);

      //return value of first call to function should be 5
      expect(mockCallback.mock.results[0].value).toBe(5);

      //return value of second call should be 6
      expect(mockCallback.mock.results[1].value).toBe(6);

      //return value of third call should be 7
      expect(mockCallback.mock.results[2].value).toBe(7);
    });
  });//end of each
  describe('map', () => {
    it('should return an array with different values', () => {
      const mockCallback = jest.fn(x => x ** 2);
      let results = arrayFunctions.map([4, 5, 6], mockCallback);

      //calls it 3 times, one for each item in array
      expect(mockCallback.mock.calls.length).toBe(3);

      //first argument of second call should 5
      expect(mockCallback.mock.calls[1][0]).toBe(5);

      //return value of second call should be 25
      expect(mockCallback.mock.results[1].value).toBe(25);

      //should return updated array
      expect(results).toEqual([16, 25, 36]);
    });
  });//end of map
  describe('reduce', () => {
    it('should reduce an array down to a single value', () => {
      let results = arrayFunctions.reduce([1, 3, 5, 6], (p, v) => p+v);

      //should add all the numbers in array up to 15
      expect(results).toEqual(15);
    })
  });//end of reduce
  describe('find', () => {
    it('should return the first item matching criteria in cb', () => {
      const arr = [
        {
          id: 0,
          name: 'John'
        },
        {
          id: 1,
          name: 'Elizabeth'
        },
        {
          id: 2,
          name: 'Richard'
        }
      ];

      let results = arrayFunctions.find(arr, i => i.name ==='Richard');

      //should return the Richard object
      expect(results).toEqual({id: 2, name: 'Richard'});
    });
  });//end of find
  describe('filter', () => {
    it('should return an array of items from array that match callback', () => {
      const arr = [
        {
          id: 0,
          task: 'task 1',
          completed: true,
        },
        {
          id: 1,
          task: 'task 2',
          completed: false
        },
        {
          id: 2,
          task: 'task 3',
          completed: true,
        },
        {
          id: 3,
          task: 'task 4',
          completed: false
        }
      ];

      let results = arrayFunctions.filter(arr, i => !i.completed);

      //should return array of objects where completed property is false
      expect(results).toEqual([{id: 1, task: 'task 2', completed: false},
                              {id: 3, task: 'task 4', completed: false}]);
    });
  });//end of filter
  describe('flatten', () => {
    it('should return array with arrays inside flattened into a single array', () => {
      const arr = [1, 2, [3, 4], 5, [6, 7, 8]];

      let results = arrayFunctions.flatten(arr);

      //should return an array of all values with no sub arrays
      expect(results).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });
});
