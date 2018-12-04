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

    it('should execute the callback on each item and return a new array of those items', () => {
      const elements = [ 1, 2, 3, 4 ]
      const cb = item => item * 2
      const mock = jest.fn(() => {
        return arrF.map(elements, cb)
      })
      expect(mock(elements, cb)).toEqual([ 2, 4, 6, 8 ])
    })
  })
  describe('reduce', () => {
    it('should accept an array, a calback, and a number', () => {
      const elements = [ 3, 4, 23, 3 ]
      const cb = element => {
        element * 2
      }
      const memo = elements.shift()
      expect(elements.length).toBeGreaterThan(0)
      expect(typeof cb).toBe('function')
      expect(typeof memo).toBe('number')
    })
    it('should invoke the callback function at least once', () => {
      const mockCallback = jest.fn()
      const elements = [ 3, 4, 3, 3 ]
      arrF.reduce(elements, mockCallback)
      expect(mockCallback).toHaveBeenCalled()
    })

    it('should reduce the array and return a number', () => {
      const elements = [ 1, 2, 3, 4 ]
      const cb = (memo = elements.shift(), item) => (memo += item)
      const mock = jest.fn(() => {
        return arrF.reduce(elements, cb, (memo = elements.shift()))
      })
      expect(mock(elements, cb, (memo = elements.shift()))).toEqual(9)
    })
  })
  describe('find', () => {
    it('should accept an array and a callback function', () => {
      const elements = [ 3, 4, 23, 3 ]
      const cb = element => {
        return element === 3
      }
      expect(elements.length).toBeGreaterThan(0)
      expect(typeof cb).toBe('function')
    })
    it('should invoke the callback function at least once', () => {
      const mockCallback = jest.fn()
      const elements = [ 3, 4, 3, 3 ]
      arrF.find(elements, mockCallback)
      expect(mockCallback).toHaveBeenCalled()
    })

    it('should return the first true element in the array', () => {
      const elements = [ 1, 2, 3, 4 ]
      const cb = item => item === 2
      const mock = jest.fn(() => {
        return arrF.find(elements, cb)
      })
      expect(mock(elements, cb)).toBeTruthy()
      expect(mock(elements, cb)).toBe(2)
    })
  })

  describe('filter', () => {
    it('should accept an array and a callback function', () => {
      const elements = [ 2, 4, 23, 2 ]
      const cb = element => {
        element === 2
      }
      expect(elements.length).toBeGreaterThan(0)
      expect(typeof cb).toBe('function')
    })
    it('should invoke the callback function at least once', () => {
      const mockCallback = jest.fn()
      const elements = [ 3, 4, 3, 3 ]
      arrF.filter(elements, mockCallback)
      expect(mockCallback).toHaveBeenCalled()
    })

    it('should return a filtered array', () => {
      const elements = [ 1, 2, 3, 2 ]
      const cb = item => item === 2
      const mock = jest.fn(() => {
        return arrF.filter(elements, cb)
      })
      expect(mock(elements, cb)).toEqual([ 2, 2 ])
    })
  })
  describe('flatten', () => {
    it('should accept an array', () => {
      const elements = [ [ 3, 4 ], 23, 3 ]

      expect(elements.length).toBeGreaterThan(0)
    })
    it('should invoke the callback function at least once', () => {
      const elements = [ [ 3, 4 ], 3, 3 ]
      const mock = jest.fn(() => {
        arrF.flatten(elements)
      })
      mock(elements)
      expect(mock).toHaveBeenCalledWith(elements)
    })

    it('should return a one dimensional array', () => {
      const elements = [ [ 1, 2 ], 3, 4 ]
      const mock = jest.fn(() => {
        return arrF.flatten(elements)
      })
      expect(mock(elements)).toEqual([ 1, 2, 3, 4 ])
    })
  })
})
