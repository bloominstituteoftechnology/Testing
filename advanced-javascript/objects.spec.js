const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  const obj = {a:22,b:33,c:44}
  describe('keys',()=>{
  it('should be an object', () => {
    const keys = objectFunctions.keys
    const kObj = keys(obj)
    expect(typeof kObj).toBe('object')

  });
})
describe('values',()=>{
  it('should be an object', () => {
    const values = objectFunctions.values
    const vObj = values(obj)
    expect(typeof vObj).toBe('object')

  });
});
describe('mapObj',()=>{
  it('should be an object', () => {
    const mapObject = objectFunctions.mapObject
    const mObj = mapObject(obj, ()=>'map')
    expect(typeof mObj).toBe('object')

  });
});

describe('pairs',()=>{
  it('should be an object', () => {
    const pairs = objectFunctions.pairs
    const pObj = pairs(obj)
    expect(typeof pObj).toBe('object')

  });
});
describe('defualts',()=>{
  it('should be an object', () => {
    const defaults = objectFunctions.defaults
    const dObj = defaults(obj, "default")
    expect(typeof dObj).toBe('object')

  });
});

});//wrapper describe
