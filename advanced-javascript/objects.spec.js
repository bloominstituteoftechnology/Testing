const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {


  describe('keys', () => {
    it('should be a function', () => {
      const keys = objectFunctions.keys;
      const obj = {
        project: 'Advanced Javascript',
        typeof: "Objects"
      };
      const B = ['project','typeof'];
      const keyProd = keys(obj);
      console.log('KeyProd: ',keyProd);
      expect(typeof keys).toBe('function');
      expect(keyProd).toEqual(B);

      
     });
  });

  describe('values', () => {
    it('should be a function', () => { 
      const values = objectFunctions.values;
      const obj = {
        project: 'Advanced Javascript',
        typeof: "Objects"
      };
      const key_value = ['Advanced Javascript',"Objects"];
      const vprod = values(obj);
      // console.log('vprod: ',vprod);
      expect(typeof values).toBe('function');
      expect(vprod).toEqual(key_value);
    });
  });

  describe('mapObject', () => {
    it('should be a function', () => { 
      const mapObject = objectFunctions.mapObject;
      const obj = {
        project: 'Advanced Javascript',
        typeof: "Objects"
      };
      const cb = (key_value) => {
        // console.log('Key value: ',key_value);
        return key_value;
      }
      const vprod = mapObject(obj, cb);
      // console.log('result of mapObject:', vprod)
      
      expect(typeof mapObject).toBe('function');
      expect(vprod).toBe(obj);
    });
  });

  describe('pairs', () => {
    it('should be a function', () => {
      const pairs = objectFunctions.pairs;
      const obj = {
        project: 'Advanced Javascript',
        typeof: "Objects"
      };
      const arr = [['project', 'Advanced Javascript'],['typeof', "Objects"]]
      const pairsProd = pairs(obj);
      // console.log('pairsProd: ', pairsProd)
      expect(typeof pairs).toBe('function');
      expect(pairsProd).toEqual(arr);
     });
  });

  describe('invert', () => {
    it('should be a function', () => { 
      const invert = objectFunctions.invert;
      const obj = {
        project: 'Advanced Javascript',
        typeof: "Objects"
      };
      const inversion = {
        'Advanced Javascript': 'project',
        'Objects': 'typeof'
      }
      const invertProd = invert(obj);
      // console.log('invert: ',invertProd);
      expect(typeof invert).toBe('function');
      expect(typeof invertProd).toBe('object')
      expect(invertProd).toEqual(inversion);
    });
  });
  describe('defaults', () => {
    it('should be a function', () => {
      const defaults = objectFunctions.defaults;
      const obj = {
        project: 'Advanced Javascript',
        typeof: "Objects"
      };
      const defProd = defaults(obj, obj);
      // console.log('Default prod: ',defProd)
      expect(typeof defaults).toBe('function');
      expect(defProd).toBe(obj);
      expect(typeof defProd).toBe('object')

     });
  });
})
