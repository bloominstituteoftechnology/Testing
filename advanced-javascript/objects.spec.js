const objectFunctions = require("./objects");

// // whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("objects", () => {
  it("fn test", () => {
    for (const key in objectFunctions) {
      expect(typeof objectFunctions[key]).toBe("function");
    }
  });

  describe('keys', () => {
    it('keys test', () => {
      expect(objectFunctions.keys({1:'test',2:'test2'})).toEqual(expect.arrayContaining(["1","2"]))
    })
    it('keys empty test', () => {
      expect(objectFunctions.keys('')).toEqual(expect.arrayContaining([]));
    })
  })

  describe('values', () => {
    it('values test', () => {
      expect(objectFunctions.values({1:'test',2:'test2'})).toEqual(expect.arrayContaining(["test","test2"]))
    })
    it('values empty test', () => {
      expect(objectFunctions.values('')).toEqual(expect.arrayContaining([]));
    })
  })

  describe('mapObject', () => {
    it('mapObject test', () => {
      expect(objectFunctions.mapObject({1:3,2:4}, (e)=>{return e*2})).toEqual(expect.objectContaining({1:6,2:8}))
    })
    it('mapObject nocb test', () => {
      expect(()=>{objectFunctions.mapObject({1:3,2:4})}).toThrow();
    })
    it('mapObject empty test', () => {
      expect(objectFunctions.mapObject('')).toBe('')
    })
  })

  describe('pairs', () => {
    it('pairs test', () => {
      expect(objectFunctions.pairs({1:3,2:4})).toEqual(expect.arrayContaining([["1",3],["2",4]]))
    })
    it('pairs empty test', () => {
      expect(objectFunctions.pairs('')).toEqual(expect.arrayContaining([]));
    })
  })

  describe('invert', () => {
    it('invert test', () => {
      expect(objectFunctions.invert({1:3,2:4})).toEqual(expect.objectContaining({3:"1",4:"2"}))
    })
    it('invert empty test', () => {
      expect(objectFunctions.invert('')).toEqual(expect.arrayContaining([]));
    })
  })

  describe('defaults', () => {
    it('defaults test', () => {
      expect(objectFunctions.defaults({1:3,2:4},{"test":2})).toEqual(expect.objectContaining({"1":3,"2":4,"test":2}))
    })
    it('defaults empty test', () => {
      expect(()=>objectFunctions.defaults('')).toThrow();
    })
  })
});
