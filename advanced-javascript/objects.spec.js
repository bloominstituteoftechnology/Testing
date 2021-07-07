const objectFunctions = require('./objects');

const bj = {
  firstName : 'bee',
  secondName : 'jay'
}

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});

  describe('keys', () => {
    it('should return keys', () => {
      expect(objectFunctions.keys(bj)).toEqual(["firstName","secondName"])
    })
  })

  describe('values', () => {
    it('should return values', () => {
      expect(objectFunctions.values(bj)).toEqual(["bee","jay"])
    })
  })

  describe('mapObject', () => {
    let bj2 = Object.assign({},bj);
    it('should mapObject', () => {
      expect(objectFunctions.mapObject(bj2, item => item+"baby")).toEqual({
        "firstName": "beebaby",
        "secondName": "jaybaby"
      })
    })
  })


  describe('pairs', () => {
    it('should return pairs', () => {
      expect(objectFunctions.pairs(bj)).toEqual([["firstName", "bee"], ["secondName","jay"]])
    })
  })

  describe('invert', () => {
    it('should return invert', () => {
      expect(objectFunctions.invert(bj)).toEqual({
        "bee": "firstName",
        "jay": "secondName"
      })
    })
  })

  describe('defaults', () => {
    it('should return defaults', () => {
      expect(objectFunctions.defaults({"firstName": "samar"}, {"firstName": "sam"})).toEqual({
        "firstName": "samar",
      })
      expect(objectFunctions.defaults({"firstName": "samar"}, {"Name": "sam"})).toEqual({
        "firstName": "samar",
        "Name": "sam"
      })
    })
  })

});
