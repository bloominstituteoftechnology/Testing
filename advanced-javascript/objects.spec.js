const objF = require('./objects')

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('keys', () => {
    it('should accept an object as an argument', () => {
      const obj = { a: 2, b: 3 }
      expect(typeof obj).toBe('object')
    })
    it('should return an array of keys', () => {
      const obj = { a: 3, b: 3 }
      expect(objF.keys(obj)).toEqual([ 'a', 'b' ])
    })
  })

  describe('values', () => {
    it('should accept an object as an argument', () => {
      const obj = { a: 2, b: 3 }
      expect(typeof obj).toBe('object')
    })
    it('should return an array of values', () => {
      const obj = { a: 3, b: 3 }
      expect(objF.values(obj)).toEqual([ 3, 3 ])
    })
  })

  describe('mapObject', () => {
    it('should accept an object and a callback as an argument', () => {
      const obj = { a: 2, b: 3 }
      const cb = key => key * 2
      expect(typeof obj).toBe('object')
      expect(typeof cb).toBe('function')
    })
    it('should return a new object with mapped values', () => {
      const obj = { a: 3, b: 3 }
      const cb = key => key * 2
      expect(objF.mapObject(obj, cb)).toEqual({ a: 6, b: 6 })
    })
  })

  describe('pairs', () => {
    it('should accept an object as an argument', () => {
      const obj = { a: 2, b: 3 }
      expect(typeof obj).toBe('object')
    })
    it('should return a new array with mapped pairs', () => {
      const obj = { a: 3, b: 3 }
      expect(objF.pairs(obj)).toEqual([ [ 'a', 3 ], [ 'b', 3 ] ])
    })
  })

  describe('invert', () => {
    it('should accept an object and a callback as an argument', () => {
      const obj = { a: 2, b: 3 }
      expect(typeof obj).toBe('object')
    })
    it('should return an inverted object', () => {
      const obj = { a: 3, b: 3 }
      expect(objF.invert(obj)).toEqual({ '3': 'b' })
    })
  })

  describe('defaults', () => {
    it('should accept two objects as arguments', () => {
      const obj = { a: 2, b: 3 }
      const defaultProps = { history: { params: '/' } }
      expect(typeof obj).toBe('object')
      expect(typeof defaultProps).toBe('object')
    })
    it('should return an object with matching keys, values as defaultProps ', () => {
      const obj = { history: { params: '/' }, props: 'test' }
      const defaultProps = { history: { params: '/' } }
      expect(objF.defaults(obj, defaultProps)).toEqual({ history: { params: '/' }, props: 'test' })
    })
  })
})
