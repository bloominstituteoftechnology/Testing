const arrF = require('./arrays')

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('each', () => {
    it('should be a function', () => {
      const each = arrF.each
      expect(typeof each).toBe('function')
    })
    it('should accept an array and a callback function', () => {
      const elements = [ 3, 4, 23, 3 ]
      const cb = element => {
        element * 2
      }
      expect(elements.length).toBeGreaterThan(0)
      expect(typeof cb).toBe('function')
    })

    it('should invoke the callback function at least once', () => {
      const mockCallback = jest.fn()

      const elements = [ 3, 4, 3, 3 ]
      arrF.each(elements, mockCallback)
      expect(mockCallback).toHaveBeenCalled()
    })
  })

  describe('map', () => {
    it('should accept an array and a callback function', () => {
      const elements = [ 3, 4, 23, 3 ]
      const cb = element => {
        element * 2
      }
      expect(elements.length).toBeGreaterThan(0)
      expect(typeof cb).toBe('function')
    })
    it('should invoke the callback function at least once', () => {
      const mockCallback = jest.fn()
      const elements = [ 3, 4, 3, 3 ]
      arrF.map(elements, mockCallback)
      expect(mockCallback).toHaveBeenCalled()
    })

    it('should execute the callback on each array item', () => {
      const elements = [ 1, 2, 3, 4 ]
      const cb = item => item * 2
      const mock = jest.fn(() => {
        return arrF.map(elements, cb)
      })
      expect(mock(elements, cb)).toEqual([ 2, 4, 6, 8 ])
    })
  })
})
