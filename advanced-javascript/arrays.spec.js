const arrayFunctions = require('./arrays');
const helpers = require("../basic-javascript/project-1");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  it('fn test', () => {
      for (const key in arrayFunctions) {
        expect(typeof arrayFunctions[key]).toBe('function');
      }
  });

  // describe('each', () => {
  //   it('each test', () => {
  //     expect(arrayFunctions.each([1,2,3],helpers.add).toEqual(expect.arrayContaining([1,3,5]))
  //   )})})

  describe('map', () => {
    it('map test', () => {
      expect(arrayFunctions.map([1,2,3],helpers.square)).toEqual(expect.arrayContaining([1,4,9]))
    })
    it('map empty test', () => {
      expect(arrayFunctions.map("",helpers.square)).toHaveLength(0)
    })
  })
  
  describe('reduce', () => {
    it('reduce test', () => {
      expect(arrayFunctions.reduce([1,2,3],helpers.add)).toBe(6)
    })
    it('reduce empty test', () => {
      expect( ()=> {arrayFunctions.reduce('',helpers.add)}).toThrow();
    })
  })

  describe('find', () => {
    it('find test', () => {
      expect(arrayFunctions.find([1,2,3],helpers.isOdd)).toBe(1)
    })
    it('reduce empty test', () => {
      expect(arrayFunctions.find('',helpers.isOdd)).toBeUndefined();
    })
  })

  describe('filter', () => {
    it('filter test', () => {
      expect(arrayFunctions.filter([1,2,3],helpers.isOdd)).toEqual(expect.arrayContaining([1,3]))
    })
    it('reduce empty test', () => {
      expect(arrayFunctions.filter("",helpers.isOdd)).toHaveLength(0)
    })
  })
  describe('flatten', () => {
    it('flatten test', () => {
      expect(arrayFunctions.flatten([1,2,[3,4]],helpers.isOdd)).toEqual(expect.arrayContaining([1,2,3,4]))
    })
    it('no flatten test', () => {
      expect(arrayFunctions.flatten([1,2,3,4],helpers.isOdd)).toEqual(expect.arrayContaining([1,2,3,4]))
    })
    it('reduce empty test', () => {
      expect(arrayFunctions.flatten("",helpers.isOdd)).toHaveLength(0)
    })
  })
  
});
