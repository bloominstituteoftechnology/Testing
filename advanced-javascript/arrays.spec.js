const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.





describe('Arrays', () => {
  describe('each', () => {
    it('cb is function', () => {
      
      expect(typeof arrayFunctions.each).toBe('function');
      // console.log(arrayFunctions.map([1,2,3], item => item  ))
    })
  })


  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;      
      expect(typeof map).toBe('function');
      expect(map([1,2,3], item => item + 1)).toEqual([2,3,4])      
    });
  });

  describe('reduce', () => {
    it('will do reduce things', () => {
      expect(typeof arrayFunctions.reduce).toBe('function')
      expect(arrayFunctions.reduce([59,9,3,4,9], (item,memo) => item+memo )).toEqual(84)
    })
  })

  describe('find', () => {
    it('find stuff', () => {
      expect(arrayFunctions.find(['d',9,3,4,9], (item) => item === 3 )).toEqual(3)
    })
  })

  describe('filter', () => {
    it('filter stuff', () => {
      expect(arrayFunctions.filter(['d',9,3,4,9], (item) => item === 3 )).toEqual([3])
    })
  })

  describe('flatten', () => {
    it('flatten stuff', () => {
      expect(arrayFunctions.flatten([10,9,3,4,[10,5,9,[5,1]]])).toEqual([ 10, 9, 3, 4, 10, 5, 9, 5, 1 ])
    })
  })
});
 