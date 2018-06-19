const {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
} = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Objects', () => {
  describe('key', () => {
    it('should return array of object keys', () => {
      const obj = keys({ a:1, b:2, c:3});
      const obj2 = keys({ cat1:'moxie', cat2:'starbuck' });
      const obj3 = keys({ color:'blue', size:'small' });

      expect(obj).toEqual(['a','b','c']);
      expect(obj2).toEqual(['cat1','cat2']);
      expect(obj3).toEqual(['color','size']);
    });
  });

  describe('values', () => {
    it('should return array of object values', () => {
      const obj = values({ a:1, b:2, c:3});
      const obj2 = values({ cat1:'moxie', cat2:'starbuck' });
      const obj3 = values({ color:'blue', size: 'small' });

      expect(obj).toEqual([1,2,3]);
      expect(obj2).toEqual(['moxie','starbuck']);
      expect(obj3).toEqual(['blue', 'small']);
    });
  });

  describe('mapObject', () => {
    it('should map over each key in object and apply callback', () => {
      const x = mapObject({ a:1, b:2, c:3}, num => num*2);
      const y = mapObject({ cat1:'moxie', cat2:'starbuck'}, num => num.length);

      expect(x).toEqual({a:2, b:4, c:6});
      expect(y).toEqual({cat1: 5, cat2: 8});
    });
  });

  describe('pairs', () => {
    it('should return key value pairs as array', () => {
      const obj = pairs({ a:1, b:2, c:3});
      const obj2 = pairs({ cat1:'moxie', cat2:'starbuck' });

      expect(obj).toEqual([['a',1],['b',2],['c',3]]);
      expect(obj2).toEqual([['cat1','moxie'],['cat2','starbuck']]);
    });
  });

  describe('invert', () => {
    it('should switch key and value in key:value pair', () => {
      const obj = invert({ a:1, b:2, c:3});
      const obj2 = invert({ cat1: 'moxie', cat2: 'starbuck' });

      expect(obj).toEqual({ 1:'a', 2:'b', 3:'c' });
      expect(obj2).toEqual({ moxie:'cat1', starbuck:'cat2' });
    });
  });

  describe('defaults', () => {
    it('should set default values', () => {
      const obj = defaults({ a:1, c:3 }, { b:2 });
      const obj2 = defaults({ wallet: true}, {keys: false, phone: true });
      
      expect(obj).toEqual({ a:1, b:2, c:3 });
      expect(obj2).toEqual({ wallet: true, keys: false, phone: true });
    });
  });
  
});
