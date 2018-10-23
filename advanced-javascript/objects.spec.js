const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {

  const addOne = (key) => {
    return key += 1
  }

  it('should be an object', () => {
    expect(typeof objectFunctions.keys({a:1, b:2, c:3})).toBe('object')
    expect(typeof objectFunctions.values({a:1, b:2, c:3})).toBe('object')
    expect(typeof objectFunctions.mapObject({a:1, b:2, c:3}, addOne )).toBe('object')
    expect(typeof objectFunctions.pairs({a:1, b:2, c:3})).toBe('object')
    expect(typeof objectFunctions.invert({a:1, b:2, c:3})).toBe('object')
    // expect(typeof objectFunctions.defaults({a:1, b:2, c:3})).toBe('object')  lost on this one
  });

  it('should return all the keys', () => {
    expect( objectFunctions.keys({a:1, b:2, c:3})).toEqual(['a', 'b', 'c'])
  });


  it('should return all the values', () => {
    expect( objectFunctions.values({a:1, b:2, c:3})).toEqual([1,2,3])
  })

  it('should return a new object with values modified', () => {
    expect( objectFunctions.mapObject({a:1, b:2, c:3}, addOne)).toEqual({a:2, b:3, c:4})
  })

  it('should return an array of pairs', () => {
    expect( objectFunctions.pairs({a:1, b:2, c:3})).toEqual([['a', 1], ['b', 2], ['c', 3]])
  })

  it('should swap keys with values', () => {
    expect( objectFunctions.invert({a:1, b:2, c:3})).toEqual({'1':'a', '2':'b', '3':'c'})
  })

  // it('should return all the values', () => {
  //   expect( objectFunctions.values({a:1, b:2, c:3})).toEqual([1,2,3])
  // })

});
