const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  const obj = {a:22,b:33,c:44}
  const secondObj={x:55,y:120,z:200}
  describe('keys',()=>{
  it('should be an object', () => {
    const keys = objectFunctions.keys
    const kObj = keys(obj)
    expect(typeof kObj).toBe('object')

  });
  it('should return the keys of the object', () => {
    const keys = objectFunctions.keys
    const kObj = keys(obj)
    expect(kObj).toEqual( ["a", "b", "c"])

  });
})
describe('values',()=>{
  it('should be an object', () => {
    const values = objectFunctions.values
    const vObj = values(obj)
    expect(typeof vObj).toBe('object')

  });
  it('should return the values', () => {
    const values = objectFunctions.values
    const vObj = values(obj)
    expect(vObj).toEqual([22, 33, 44])

  });
});
describe('mapObj',()=>{
  it('should be an object', () => {
    const mapObject = objectFunctions.mapObject
    const mObj = mapObject(obj, ()=>'map')
    expect(typeof mObj).toBe('object')

  });  it('should return an object with the value passed in mapped to each key', () => {
    const mapObject = objectFunctions.mapObject
    const mObj = mapObject(obj, ()=>2)
    expect(mObj).toEqual({"a": 2, "b": 2, "c": 2})

  });
});

describe('pairs',()=>{
  it('should be an object', () => {
    const pairs = objectFunctions.pairs
    const pObj = pairs(obj)
    expect(typeof pObj).toBe('object')

  });
  it('should an array of of the key and value inside an array', () => {
    const pairs = objectFunctions.pairs
    const pObj = pairs(secondObj)
    expect(pObj).toEqual([["x", 55], ["y", 120], ["z", 200]])

  });
});

describe('invert',()=>{
  it('should be an object', () => {
    const invert = objectFunctions.invert
    const iObj = invert(obj)
    expect(typeof iObj).toBe('object')

  });
  it('should invert and change numbers to strings', () => {
    const invert = objectFunctions.invert
    const iObj = invert(secondObj)
    expect(iObj).toEqual( {"120": "y", "200": "z", "55": "x"})

  });

});
describe('defualts',()=>{
  it('should be an object', () => {
    const defaults = objectFunctions.defaults
    const dObj = defaults(obj, secondObj)
    expect(typeof dObj).toBe('object')

  });
  it('should return the default objects keys and values prepended to the the passed in object ', () => {
    const defaults = objectFunctions.defaults
    const dObj = defaults(secondObj, obj)
    expect(dObj).toEqual( {"120": "y", "2": "c", "200": "z", "55": "x"})

  });
});

});//wrapper describe
