const helpers = require('./project-1');

describe('helpers.js', () => {
    describe('jest', () => {
      test('should run tests', () => {
      });
  
      it('should run tests using it() in addition to test()', () => {
      });
    });
  
    describe('toEqual() matcher', () => {
      it('should check deep equality', () => {
        const a = { foo: 'bar' };
        const b = { foo: 'bar' };
  
        expect(a).toEqual(b);
      });
    });
  
    describe('multiplyByTen()', () => {
      it('should multiply provided number by ten', () => {
        const expected = 100;
  
        const actual = helpers.multiplyByTen(10);
  
        expect(actual).toEqual(expected);
      });
  
      it('should return 0 when called with no value', () => {
        const product = helpers.multiplyByTen();
  
        expect(product).toBe(0);
      });

      it('should throw error when called with a string', () => {
        expect(() => {
          helpers.multiplyByTen('five');
        }).toThrow();
      });
    });
  });

//   const multiplyByTen = num => {
//     // if (!num || typeof num === 'string') {
//     //   return 0;
//     // }
//     if (!num) {
//       return 0;
//     }
  
//     if (typeof num === 'string') {
//       throw new Error('value must be a number');
//     }
  
//     return num * 10;
//   };