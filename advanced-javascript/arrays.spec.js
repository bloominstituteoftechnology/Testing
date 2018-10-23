const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  // map
  describe('should map over each object in the array', () => {
    test('test that the array map method is doubling each of the values in the array',() => {
      expect(arrayFunctions.map([2, 3, 4, 5], num => {
        return num * 2;
      })
      ).toEqual([4, 6, 8, 10]);
    });

    test('test that map returns the type function', () => {
      expect(typeof arrayFunctions.map).toBe('function');
    });
    });

    // each
    describe('should perform an operation on each object in the array', () => {
      test('test that each function returns the length of each string', () => {
        expect(arrayFunctions.each(['howdy', 'there', 'partner'], word => {
          return word.length;
        })
      ).toEqual([5, 5, 7])
    })
    test('test that the function returns all words to uppercase', () => {
      expect(arrayFunctions.each(['make', 'me', 'capitalized'], word => {
        return word.toUpperCase();
      })
      ).toEqual(['MAKE', 'ME', 'CAPITALIZED'])
    })
    test('test that each is a function type', () => {
      expect(typeof arrayFunctions.each).toBe('function');
    })
  })


    // reduce
    describe('should reduce all values to a single value', () => {
      test('should add the given numbers', () => {
        expect(arrayFunctions.reduce([3, 7], (x, y) => {
          return x + y;
        })
        ).toEqual(10);
      })

      test('reduce should be a function', () => {
        expect(typeof arrayFunctions.reduce).toBe('function');
      })
    })

    // find
    describe('should find element in an array', () => {
      test('tests if 100 is found in [400, 300, 200, 100, 0]', () => {
        expect(arrayFunctions.find([400, 300, 200, 100, 0], x => {
          if(x === 100){
            return x;
          }
        })).toBe(100)
      })
      test('find should be a function', () => {
        expect(typeof arrayFunctions.find).toBe('function')
      })
    })
    // filter
    describe('should remove all values that are not the filter value', () => {
      test('should find 3 two times in array [1, 2, 3, 4, 5, 4, 3, 2, 1]', () => {
        expect(arrayFunctions.filter([1, 2, 3, 4, 5, 4, 3, 2, 1], x => {
          if(x === 3){
            return x;
          }
        })).toEqual([3, 3])
      })
      test('should be a function', () => {
        expect(typeof arrayFunctions.filter).toBe('function')
      })
    })
  
    // flatten
    describe('should merge all nested arrays into one array', () => {
      test('should merge the nested arrays', () => {
        expect(arrayFunctions.flatten([1, 2, [3, 4, [5]]])).toEqual([1, 2, 3, 4, 5])
      })
      test('should be a function', () => {
        expect(typeof arrayFunctions.flatten).toBe('function')
      })
    })
})