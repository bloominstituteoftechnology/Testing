const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});

  describe('keys()', () => {
      it('should return keys for given object', () => {
          const expected = ["name", "age"];
          const actual = objectFunctions.keys({name : 'abc', age : 20});
          expect(actual).toEqual(expected);
      });
  });

  describe('values()', () => {
    it('should provide value', () => {
        const expected = ["abc", 20];
        const actual = objectFunctions.values({name : 'abc', age : 20});
        expect(actual).toEqual(expected);
    });
  });

  //mapObject...


  describe('pairs()', () => {
    it('should return an array with the key and value', () => {
        const expected = [["name", "abc"]];
        const actual = objectFunctions.pairs({name: 'abc'});
        expect(actual).toEqual(expected);
    });
  });

  describe('invert()', () => {
    it('should map the object', () => {
        const expected = {"abc" : "name"};
        const actual = objectFunctions.invert({name: 'abc'});
        expect(actual).toEqual(expected);
    });
  });



 
});
