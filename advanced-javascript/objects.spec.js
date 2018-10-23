const oF = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe.only('objects', () => {
  it('should be an object', () => { });

  describe('keys', () => {
    it('should be a function', () => {
      expect(typeof oF.keys).toEqual('function')
    })
    it('should return the keys of an object', () => {
      expect(oF.keys({ first: 1, second: 2, third: 3 })).toEqual(["first", "second", "third"])
    })
  })

  describe('values', () => {
    it('should be a function', () => {
      expect(typeof oF.values).toEqual('function')
    })
    it('should return the values of an object', () => {
      expect(oF.values({ first: 1, second: 2, third: 3 })).toEqual([1, 2, 3])
    })
  })

  describe('mapObject', () => {
    it('should be a function', () => {
      expect(typeof oF.mapObject).toEqual('function')
    })
    it('should return an object', () => {
      expect(typeof oF.mapObject({ first: 1, second: 2, third: 3 }, n => n + 1)).toEqual("object")
    })
    it('should map over an object', () => {
      expect(oF.mapObject({ first: 1, second: 2, third: 3 }, n => n + 1)).toEqual({ first: 2, second: 3, third: 4 })
    })
  })

  describe('pairs', () => {
    it('should be a function', () => {
      expect(typeof oF.pairs).toEqual('function')
    })
    it('should return an object', () => {
      expect(typeof oF.pairs({ first: 1, second: 2, third: 3 }, n => n + 1)).toEqual("object")
    })
    it('should return key value arrays', () => {
      expect(oF.pairs({ first: 1, second: 2, third: 3 })).toEqual([['first', 1], ['second', 2], ['third', 3]])
    })
  })

  describe('invert', () => {
    it('should be a function', () => {
      expect(typeof oF.invert).toEqual('function')
    })
    it('should return an object', () => {
      expect(typeof oF.invert({ first: 1, second: 2, third: 3 }, n => n + 1)).toEqual("object")
    })
    it('should return inverted key value arrays', () => {
      expect(oF.invert({ first: 1, second: 2, third: 3 })).toEqual({ 1: 'first', 2: 'second', 3: 'third' })
    })
  })

  describe('defaults', () => {
    it('should be a function', () => {
      expect(typeof oF.defaults).toEqual('function')
    })
    it('should return an object', () => {
      expect(typeof oF.defaults({ first: 1, second: 2, third: 3 }, { first: 0, second: 1, third: 2 })).toEqual("object")
    })
    it('should return an object default key/value pairs if none exists', () => {
      expect(oF.defaults({ fourth: 'd' }, { first: 'a', second: 'b', third: 'c' })).toEqual({ first: 'a', second: 'b', third: 'c', fourth: 'd' })
    })
  })
});
