const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
//create a test object to use for tests
let testObj = {
  a: 'a',
  b: 'b',
  c: 'c',
  one: 1,
  two: 2,
  three: 3,
  subObj: {
    yes: 'yes',
    no: 'no'
  }
};

//reset the test object back to original before each test
beforeEach(() => {
  testObj = null;

  testObj = {
    a: 'a',
    b: 'b',
    c: 'c',
    one: 1,
    two: 2,
    three: 3,
    subObj: {
      yes: 'yes',
      no: 'no'
    }
  };
});

describe('objects', () => {
  describe('keys', () => {
    it('should return all the top level keys in testObj', () => {
      let results = objectFunctions.keys(testObj);

      expect(results).toEqual(['a', 'b', 'c', 'one', 'two', 'three', 'subObj']);
    })
  });//end of keys
  describe('values', () => {
    it('should return all the top level values in testObj', () => {
      let results = objectFunctions.values(testObj);

      expect(results).toEqual(['a', 'b', 'c', 1, 2, 3, { yes: 'yes', no: 'no'}]);
    });
  });//end values
  describe('mapObject', () => {
    it('should map over top level keys calling the cb on them', () => {
      let results = objectFunctions.mapObject(testObj, i => isNaN(i) ? i : i + 5);
      const resultObj = {
        a: 'a',
        b: 'b',
        c: 'c',
        one: 6,
        two: 7,
        three: 8,
        subObj: {
          yes: 'yes',
          no: 'no'
        }
      };

      //should map over all top level keys and if key is a number, increase by 5, else leave it alone
      expect(results).toEqual(resultObj);
    });
  });//end mapObject
  describe('pairs', () => {
    it('should return an array consisting of [key, value] pairs', () => {
      let results = objectFunctions.pairs(testObj);

      expect(results).toEqual([['a', 'a'],
                                ['b', 'b'],
                                ['c', 'c'],
                                ['one', 1],
                                ['two', 2],
                                ['three', 3],
                                ['subObj', {yes: 'yes', no: 'no'}]
                              ]);
    });
  });//end pairs
  describe('invert', () => {
    it('should swap keys with their values', () => {
      const swapTestObj = {
        a: 'z',
        b: 'y',
        c: 'x',
      };
      const resultObj = {
        z: 'a',
        y: 'b',
        x: 'c',
      };

      let results = objectFunctions.invert(swapTestObj);

      expect(results).toEqual(resultObj);
    });
  });//end describe
  describe('defaults', () => {
    it('should return an object with default key value pairs added if they do not exist', () => {
      const resultObj = {
        a: 'a',
        b: 'b',
        c: 'c',
        one: 1,
        two: 2,
        three: 3,
        subObj: {
          yes: 'yes',
          no: 'no'
        },
        default: 'default',
        another: 'another'
      };

      let results = objectFunctions.defaults(testObj, {default: 'default', another: 'another'});

      expect(results).toEqual(resultObj);
    });
  });//end defaults
});
