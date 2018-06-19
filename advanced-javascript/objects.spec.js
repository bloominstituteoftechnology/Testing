const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
// keys: 
describe('keys', () => {
  let keys = objectFunctions.keys
  it('should return an array of keys', () => {
    // Array check 1
    let expected = "object"
    let actual = typeof keys({ a: 1, b: 2, c: 3 })
    expect(actual).toBe(expected)
  });
  it('should return an array with length 3', () => {
    // array check #2
    let actual = keys({ a: 1, b: 2, c: 3 })
    expect(actual).toHaveLength(3)
  });
  it('should return an array with keys a,b,c given { a: 1, b: 2, c: 3 }', () => {
    // specific check for outcome abc
    let expected = ['a', 'b', 'c']
    let actual = keys({ a: 1, b: 2, c: 3 })
    expect(actual).toEqual(expected)
  });
});

describe('values', () => {
  let values = objectFunctions.values
  it('should return an array of values', () => {
    // Array check 1
    let expected = "object"
    let actual = typeof values({ a: 1, b: 2, c: 3 })
    expect(actual).toBe(expected)
  });
  it('should return an array with length 3', () => {
    // array check #2
    let actual = values({ a: 1, b: 2, c: 3 })
    expect(actual).toHaveLength(3)
  });
  it('should return an array with values a,b,c given { a: 1, b: 2, c: 3 }', () => {
    // specific check for outcome 123
    let expected = [1, 2, 3]
    let actual = values({ a: 1, b: 2, c: 3 })
    expect(actual).toEqual(expected)
  });
});

describe('mapObject', () => {
  let mapObject = objectFunctions.mapObject
  it('should return an object', () => {
    // Object check 1
    let expected = "object"
    let actual = typeof mapObject({ a: 1, b: 2, c: 3 }, e => e)
    expect(actual).toBe(expected)
  });
  it('should not have a length', () => {
    // exclude the option that we got passed an array instead of an object
    let actual = typeof mapObject({ a: 1, b: 2, c: 3 }, e => e)
    expect(actual).not.toHaveLength()
  })
  it('should return an object with each value incremented by 1', () => {
    let actual = mapObject({ a: 1, b: 2, c: 3 }, e => e + 1)
    expect(actual).toEqual({ a: 2, b: 3, c: 4 })
  });
})

describe('pairs', () => {
  let pairs = objectFunctions.pairs
  it('should return an array of subarrays containing key + value pairs', () => {
    // Array check 1
    let expected = "object"
    let actual = typeof pairs({ a: 1, b: 2, c: 3 })
    expect(actual).toBe(expected)
  });
  it('should return an array with length 3', () => {
    // Array check #2 
    let actual = pairs({ a: 1, b: 2, c: 3 })
    expect(actual).toHaveLength(3)
  })
  it('should return an array with subarrays of [[a, 1][b, 2][c, 3]]', () => {
    // Array check #2 
    let expected = [['a', 1], ['b', 2], ['c', 3]]
    let actual = pairs({ a: 1, b: 2, c: 3 })
    expect(actual).toEqual(expected)
  })
})

describe('invert', () => {
  let invert = objectFunctions.invert
  it('should return an object', () => {
    expect(typeof invert({ a: 1, b: 2, c: 3 })).toBe("object")
  })
  it('should return an object in which keys and values are switched', () => {
    expect(invert({ a: 1, b: 2, c: 3 })).toEqual({ "1": "a", "2": "b", "3": "c" })
  })
})

describe('defaults', () => {
  let defaults = objectFunctions.defaults
  it('should return an object', () => {
    expect(typeof defaults({ a: 1, b: 2, c: 3 }, { a: 2, b: 3, c: 4 })).toBe("object")
  })
  it('should transfer the missing defaultProps to obj', () => {
    let expected = { a: 1, b: 2, c: 3, d: 5 }
    let actual = defaults({ a: 1, b: 2, c: 3 }, { a: 2, b: 3, c: 4, d: 5 })
    expect(actual).toEqual(expected)
  })
})
