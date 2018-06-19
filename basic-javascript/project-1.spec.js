// {   multiplyByTen,
//     subtractFive,
//     areSameLength,
//     areEqual,
//     lessThanNinety,
//     greaterThanFifty,
//     add,
//     subtract,
//     divide,
//     multiply,
//     getRemainder,
//     isEven,
//     isOdd,
//     square,
//     cube,
//     raiseToPower,
//     roundNumber,
//     roundUp,
//     addExclamationPoint,
//     combineNames,
//     getGreeting,
//     getRectangleArea,
//     getTriangleArea,
//     getCircleArea,
//     getRectangularPrismVolume
//   }

const helpers = require('./project-1');

describe('project-1', () => {
    describe('multiplyByTen', () => {
      it('returns NaN when given a non numeric value', () => {
        expect(helpers.multiplyByTen(undefined)).toBeNaN();
        expect(helpers.multiplyByTen('two')).toBeNaN();
      });
  
      it('should return the given number multiplied by 10', () => {
        expect(helpers.multiplyByTen(1)).toEqual(10);
        expect(helpers.multiplyByTen(5)).toEqual(50);
        expect(helpers.multiplyByTen(0)).toEqual(0);
      });
    });

    describe('subtractFive', () => {
      it('returns NaN when given non numeric value', () => {
        // practice breaking up parts of test
        let expected = NaN;
        let outcome = helpers.subtractFive("five");
        expect(outcome).toEqual(expected);
      })
      it('should return the given number minus 5', () => {
        expect(helpers.subtractFive(5)).toEqual(0);
        expect(helpers.subtractFive(-10)).toEqual(-15);
        expect(helpers.subtractFive(1000)).toEqual(995);
      })
    })

    describe('areSameLength', () => {
      it('returns false if lenghts are not the same', () => {
        expect(helpers.areSameLength('hello', 'hi')).toBeFalsy();
      })
      it('returns true if lengths are the same', () => {
        expect(helpers.areSameLength('hola', 'aloh')).toBeTruthy();
        expect(helpers.areSameLength(true, false)).toBeTruthy();
      })
    })

    describe('areEqual', () => {
      it('returns true if deeply equal', () => {
        // try using different methods
        expect(helpers.areEqual('hello', 'hello')).toStrictEqual(true);
        expect(helpers.areEqual(1, 1)).toBeTruthy();
        expect(helpers.areEqual(['s'].length, 1)).toBeTruthy();
        expect(helpers.areEqual(null, null)).toEqual(true);
        expect(helpers.areEqual(undefined, undefined)).toEqual(true);
      })
      it('returns false if given NaN', () => {
        expect(helpers.areEqual(NaN, NaN)).toEqual(false);
      })
      it('returns false if values are not deeply equal', () => {
        expect(helpers.areEqual(null, undefined)).toStrictEqual(false);
        expect(helpers.areEqual('one', 'two')).toEqual(false);
        expect(helpers.areEqual(1, '1')).toBeFalsy();
      })
    })
    
    describe('lessThanNinety', () => {
      it('returns true if less than ninety', () => {
        expect(helpers.lessThanNinety(2)).toBeTruthy();
        expect(helpers.lessThanNinety(89.5)).toBeTruthy();
        expect(helpers.lessThanNinety(-10000000000)).toBeTruthy();
      })
      it('returns true if input is boolean or evaluates to 0', () => {
        expect(helpers.lessThanNinety(false)).toBeTruthy();
        expect(helpers.lessThanNinety(null)).toBeTruthy();
        expect(helpers.lessThanNinety(true)).toBeTruthy();
      })
      it('returns false if value is greater than or equal to ninety', () => {
        expect(helpers.lessThanNinety(90)).toBeFalsy();
        expect(helpers.lessThanNinety('90')).toBeFalsy();
        expect(helpers.lessThanNinety(900)).toBeFalsy();
        expect(helpers.lessThanNinety(89.99999999999999 + .0000000001)).toBeFalsy();
      })
    })

    describe('greaterThanFifty', () => {
      it('returns true if value is greater than fifty', () => {
        expect(helpers.greaterThanFifty(51)).toBeTruthy();
        expect(helpers.greaterThanFifty('51')).toBeTruthy();
        expect(helpers.greaterThanFifty(10000000)).toBeTruthy();
      })
      it('returns false if value is less than or equal to fifty', () => {
        expect(helpers.greaterThanFifty(50)).toBeFalsy();
        expect(helpers.greaterThanFifty('50')).toBeFalsy();
        expect(helpers.greaterThanFifty(-10000)).toBeFalsy();
      })
      it('returns false if input is boolean or evaluates to 0', () => {
        expect(helpers.greaterThanFifty(false)).toBeFalsy();
        expect(helpers.greaterThanFifty(null)).toBeFalsy();
        expect(helpers.greaterThanFifty(true)).toBeFalsy();
        expect(helpers.greaterThanFifty(undefined)).toBeFalsy();
        expect(helpers.greaterThanFifty(NaN)).toBeFalsy();
      })
    })

    describe('add', () => {
      it('returns sum of two numbers', () => {
        expect(helpers.add(1,2)).toStrictEqual(3);
        expect(helpers.add(100,100)).toEqual(200);
        expect(helpers.add(5,2)).toBe(7);
        expect(helpers.add(3,6)).toBeGreaterThan(6);
        expect(helpers.add(3,6)).toBeLessThan(10);
      })
      it('returns a number if input is number, string if input is string', () => {
        expect(typeof helpers.add(1,1)).toBe('number');
        expect(typeof helpers.add('1', 'one')).toBe('string');
        expect(typeof helpers.add(1, '1')).toBe('string');
      })
      it('returns NaN if input is not a number or string', () => {
        expect(helpers.add(undefined, 10)).toBeNaN();
        expect(helpers.add(NaN, 10)).toBeNaN();
      })
      it('returns 0, 1, or 2 if inputs are a combination of true and false', () => {
        expect(helpers.add(false, false)).toBe(0);
        expect(helpers.add(true, true)).toBe(2);
        expect(helpers.add(false, true)).toEqual(1);
      })
    })

    describe('subtract', () => {
      it('returns difference of two numbers', () => {
        expect(helpers.subtract(2,1)).toStrictEqual(1);
        expect(helpers.subtract(100,100)).toEqual(0);
        expect(helpers.subtract(5,2)).toBe(3);
        expect(helpers.subtract(3,6)).toBeGreaterThan(-6);
        expect(helpers.subtract(3,6)).toBeLessThan(0);
      })
      it('returns a number whether input is number or string', () => {
        expect(typeof helpers.subtract(1,1)).toBe('number');
        expect(typeof helpers.subtract(1, '1')).toBe('number');
        expect(typeof helpers.subtract('one', '1')).toBe('number');
      })
      it('returns NaN if input is not a number or string', () => {
        expect(helpers.subtract(undefined, 10)).toBeNaN();
        expect(helpers.subtract(NaN, 10)).toBeNaN();
      })
      it('returns -1, 0, or 1 if inputs are a combination of true and false', () => {
        expect(helpers.subtract(false, false)).toBe(0);
        expect(helpers.subtract(true, true)).toBe(0);
        expect(helpers.subtract(false, true)).toEqual(-1);
        expect(helpers.subtract(true, false)).toEqual(1);
      })
    })

    describe('divide', () => {
      it('returns quotient of two numbers', () => {
        expect(helpers.divide(2,1)).toStrictEqual(2);
        expect(helpers.divide(100,100)).toEqual(1);
        expect(helpers.divide(6,2)).toBe(3);
        expect(helpers.divide(30,6)).toBeGreaterThan(4);
        expect(helpers.divide(30,6)).toBeLessThan(6);
      })
      it('returns a number whether input is number or string', () => {
        expect(typeof helpers.divide(1,1)).toBe('number');
        expect(typeof helpers.divide(1, '1')).toBe('number');
        expect(typeof helpers.divide('one', '1')).toBe('number');
      })
      it('returns NaN if input is not a number or string', () => {
        expect(helpers.divide(undefined, 10)).toBeNaN();
        expect(helpers.divide(NaN, 10)).toBeNaN();
      })
      it('returns 0, or 1 if inputs are boolean and dividend is true', () => {
        expect(helpers.divide(true, true)).toBe(1);
        expect(helpers.divide(false, true)).toEqual(0);
      })
      it('returns infinity if positive/0 and NaN if 0/0', () => {
        expect(helpers.divide(true, false)).toBe(Infinity);
        expect(helpers.divide(1, 0)).toBe(Infinity);
        expect(helpers.divide(1000000, 0)).toBe(Infinity);
        expect(helpers.divide(-1, 0)).toBe(-Infinity);
        expect(helpers.divide(false, false)).toBeNaN();
        expect(helpers.divide(0, 0)).toBeNaN();
      })
    })

    describe('multiply', () => {
      it('returns product of two numbers', () => {
        expect(helpers.multiply(2,1)).toStrictEqual(2);
        expect(helpers.multiply(100,100)).toEqual(10000);
        expect(helpers.multiply(6,2)).toBe(12);
        expect(helpers.multiply(3,6)).toBeGreaterThan(15);
        expect(helpers.multiply(3,6)).toBeLessThan(20);
      })
      it('returns a number whether input is number or string', () => {
        expect(typeof helpers.multiply(1,1)).toBe('number');
        expect(typeof helpers.multiply(1, '1')).toBe('number');
        expect(typeof helpers.multiply('one', '1')).toBe('number');
      })
      it('returns NaN if input is not a number or string', () => {
        expect(helpers.multiply(undefined, 10)).toBeNaN();
        expect(helpers.multiply(NaN, 10)).toBeNaN();
      })
      it('returns 0, or 1 if inputs are a combination of true and false', () => {
        expect(helpers.multiply(true, true)).toBe(1);
        expect(helpers.multiply(false, true)).toEqual(0);
        expect(helpers.multiply(false, false)).toEqual(0);
      })
    })

    describe('getRemainder')
  });
// start testing!
