const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
    describe('multiplyByTen', () => {
        it('should run tests', () => {});
        it('should multiply by ten', () => {
            const expected = 100;
            const actual = helpers.multiplyByTen(10);
            expect(actual).toEqual(expected);
        });
        it('should return NaN when not provided a number', () => {
            const result = helpers.multiplyByTen();
            expect(result).toBe(NaN);
        });
    });

    describe('subtractFive', () => {
        it('should subtract five', () => {
            const expected = 10;
            const actual = helpers.subtractFive(15);
            expect(actual).toEqual(expected);
        });
        it('should return NaN when not provided a number', () => {
            const result = helpers.subtractFive();
            expect(result).toBe(NaN);
        });
    });

    describe('areSameLength', () => {
        it('should determine same length', () => {
            const result = helpers.areSameLength('apples', 'oranges');
            expect(result).toBe(false);
        });
        it('should throw an error when not provided an input', () => {
            expect(() => areSameLength()).toThrow();
        });
        it('should throw an error when only provided one input', () => {
            expect(() => areSameLength('apples')).toThrow();
        });
        it('should return undefined when not provided correct input', () => {
            const result = helpers.areSameLength(4, 55);
            expect(result).toBe(undefined);
        });
    });

    describe('areEqual', () => {
        it('should determine equality of numbers', () => {
            const result = helpers.areEqual(3, 6);
            expect(result).toBe(false);
        });
        it('should determine equality of strings', () => {
            const result = helpers.areEqual('bananas', 'bananas');
            expect(result).toBe(true);
        });
        it('should determine equality of objects', () => {
            const obj1 = { foo: 45 };
            const obj2 = { foo: 45 };
            expect(obj1).toEqual(obj2);
            expect(obj1).not.toBe(obj2);
        });
        it('should determine equality of symbols', () => {
            const sym1 = Symbol();
            const sym2 = Symbol();
            expect(sym1).not.toEqual(sym2);
        });
    });

    describe('lessThanNinety', () => {
        it('should determine whether number is less than ninety', () => {
            const result = helpers.lessThanNinety(67);
            expect(result).toBe(true);
        });
        it('should determine whether string is less than ninety', () => {
            const result = helpers.lessThanNinety('80');
            expect(result).toBe(true);
        });
        it('should return false when provided an invalid input', () => {
            const obj1 = { num: 91 };
            // destructure
            const result = helpers.lessThanNinety(obj1['num']);
            expect(result).toBe(false);
        });
        it('should return false when not provided an input', () => {
            const result = helpers.lessThanNinety();
            expect(result).toBe(false); 
        });
    });

    describe('greaterThanFifty', () => {
        it('should determine whether number is greater than fifty', () => {
            const result = helpers.greaterThanFifty(74);
            expect(result).toBe(true);
        });
        it('should determine whether string is greater than fifty', () => {
            const result = helpers.greaterThanFifty('43');
            expect(result).toBe(false);
        });
        it('should return false when provided an invalid input', () => {
            const result = helpers.greaterThanFifty(true);
            expect(result).toBe(false);
        });
        it('should return false when not provided an input', () => {
            const result = helpers.greaterThanFifty();
            expect(result).toBe(false); 
        });
    });

    describe('add', () => {
        it('should add numbers', () => {
            const expected = 7;
            const actual = helpers.add(3, 4);
            expect(actual).toEqual(expected);
        });
        it('should add strings', () => {
            const expected = 9;
            const actual = helpers.add('1','8');
            expect(actual).toEqual(expected);
        });
        it('should return zero when provided alternative input', () => {
            const result = helpers.add(null, undefined);
            expect(result).toEqual(0);
        });
        it('should return zero when provided an invalid input', () => {
            const result = helpers.add([1, 2], [3, 4]);
            expect(result).toEqual(0);
        });
    });

    describe('subtract', () => {
        it('should subtract numbers', () => {
            const expected = 16;
            const actual = helpers.subtract(24,8);
            expect(actual).toEqual(expected);
        })
    });
});
