const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('each', () => {      
    const each = arrayFunctions.each
    it('should be a function', () => {
      expect(typeof each).toBe('function')
    })
    it('should invoke a callback function with items of the array and index of the array item', () => {
      const mockFn = jest.fn()
      each([1,2,3,4,5], mockFn)

      expect(mockFn.mock.calls.length).toBe(5)
      expect(mockFn.mock.calls[0][0]).toBe(1)
      expect(mockFn.mock.calls[0][1]).toBe(0)
      expect(mockFn.mock.calls[1][0]).toBe(2)
      expect(mockFn.mock.calls[1][1]).toBe(1)
      expect(mockFn.mock.calls[2][0]).toBe(3)
      expect(mockFn.mock.calls[2][1]).toBe(2)
      expect(mockFn.mock.calls[3][0]).toBe(4)
      expect(mockFn.mock.calls[3][1]).toBe(3)
      expect(mockFn.mock.calls[4][0]).toBe(5)
      expect(mockFn.mock.calls[4][1]).toBe(4)
    })
  })
  describe('map', () => {    
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(typeof map).toBe('function');
    });
    it('should loop through an array and push items into the array', () => {
      const map1 = map([2, 4, 6], num => num * 2)
      const map2 = map([.2, .3, .5], num => num + 2)
      const map3 = map(['sudo', 'does', 'sudo'], num => num + num)
      const map4 = map([-2, 0, -5], num => num + 5)

      expect(map1).toEqual([4, 8, 12])
      expect(map2).toEqual([2.2, 2.3, 2.5])
      expect(map3).toEqual(['sudosudo', 'doesdoes', 'sudosudo'])
      expect(map4).toEqual([3, 5, 0])
    })
  });
  describe('reduce', () => {
      const reduce = arrayFunctions.reduce    
      it('should be a function', () => {
      expect(typeof reduce).toBe('function')
    })
    it('should reduce an array to a single value', () => {
    const reduce1 = reduce([1,2,3], (num, total) => num + total)
    const reduce2 = reduce([5, 10, 15], (num, total) => num + total + 5)

    expect(reduce1).toEqual(6)
    expect(reduce2).toEqual(40)      
    })
  })
  describe('find', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find
      expect(typeof find).toBe('function')
    })
  })
  describe('filter', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter
      expect(typeof filter).toBe('function')
    })
  })
  describe('flatten', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten
      expect(typeof flatten).toBe('function')
    })
  })
});
