const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});

  describe('jest', () => {
    test('should run tests', () => {
        //test everything
    });
    
    it('should run tests using it() in addition to test()', () => {
        // Arrange : set up the world
        // Act : execute the code you're testing
        // Assert : check that it works
    });
  });

  describe('keys', () => {
    

    it('should return the keys from the argument object', () => {
      const expected = ['a', 'b', 'c'];

      const actual = objectFunctions.keys({
        a: 'valueA', 
        b: 'valueB', 
        c: 'valueC'
      });

      expect(actual).toEqual(expected);
    });
  });

  describe('values', () => {
    it('should return the values from the argument object', () => {
      const expected = ['valueA', 'valueB', 'valueC'];

      const actual = objectFunctions.values({
        a: 'valueA', 
        b: 'valueB', 
        c: 'valueC'
      });

      expect(actual).toEqual(expected);
    });

  });

  describe('mapObject', () => {
    it('should be an object', () => {});
    
  });

});
