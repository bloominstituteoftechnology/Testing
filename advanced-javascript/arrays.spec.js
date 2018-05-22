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
      // arrange
      const each = arrayFunctions.each;
      const elements = [1, 2, 3];
      const cb = (elements) => {
        return elements * 2
      }

      // act
      const actual = each(elements, cb)

      // assert
      expect(typeof each).toBe('function');
    })
  })

  describe('map', () => {
    it('should be a function', () => {
      // arrange
      const map = arrayFunctions.map;
      const random = [1, 2, 3]
      const cb = (params) => {
        return params * 2
      }

      // act
      const actual = map(random, cb)

      // assert

      expect(typeof map).toBe('function');
    });
    it('should be an array', () => {
      // arrange
      const map = arrayFunctions.map;
      const random = [1, 2, 3]
      const cb = (params) => {
        return params * 2
      }
      const expected = '[2,4,6]';

      // act
      const actual = map(random, cb)

      // assert

      expect(JSON.stringify(actual)).toBe(expected);
    });
  });

  describe('reduce', () => {
    it('should check if it is a function', () => {
      // arrange
      const reduce = arrayFunctions.reduce;

      // assert
      expect(typeof reduce).toBe('function');
    })
    it('should return the value after the elements have been reduced', () => {
      // arrange
      const reduce = arrayFunctions.reduce;
      const expected = [1, 2, 3]
      const cb = (total, item) => {
        return total + item;
      }

      // act
      const actual = reduce(expected, cb)
      
      // assert
      expect(actual).toEqual(6)
    })
  })

  describe('find', () => {
    it('should check if function', () => {
      // arrange
      const find = arrayFunctions.find;
      
      // assert
      expect(typeof find).toBe('function')
    })
    
    it('should find if the value is inside the array', () => {
      // arrange
      const find = arrayFunctions.find;
      const elements = ['i', 'a'];
      const cb = (params) => {
        return params === 'a'
      }

      // act
      const actual = find(elements, cb)

      // assert
      expect(actual).toBe('a')
    })

    it('should return undefined if not found', () => {
      // arrange
      const find = arrayFunctions.find;
      const elements = ['i', 'a'];
      const cb = (params) => {
        return params === 'x'
      }

      // act
      const actual = find(elements, cb)

      // assert
      expect(actual).toBe(undefined)
    })
  })

});
