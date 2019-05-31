const helpers = require('./project-1');


// start testing!
describe('multiplyByTen', () => {
    describe('multiplyByTen', () => {
        it('return NaN when given a non numeric value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('two')).toBeNaN();
        })
        it('should return the given number multiplied by 10', () => {
            expect(helpers.multiplyByTen(2).toBe(20));
            expect(helpers.multiplyByTen(-4).toBe(-40));
        });
    });
})

describe('subtractFive', () => {
    it('return NaN when given a non numeric value', () => {
        expect(helpers.subtractFive(undefined)).toBeNaN();
        expect(helpers.subtractFive('two')).toBeNaN();
    })
    it('should return the given number multiplied by 10', () => {
        expect(helpers.subtractFive(2).toBe(20));
        expect(helpers.subtractFive(-4).toBe(-40));
    });
})

describe('areSameLength', () => {
    it('return true for two strings having same length', () => {
        expect(helpers.areSameLength("hello", "hi")).tobe(false)
        expect(helpers.areSameLength("the cake is a lie","")).tobe(false)
        expect(helpers.areSameLength("42", "24")).tobe(true)
        expect(helpers.areSameLength("  ", "  ")).tobe(true)
    }) 
})

describe('areEqual', () => {
    it('returns true when x = y', () => {
        expect(helpers.areEqual(' ',' ')).toBeTruthy();
        expect(helpers.areEqual('12','12')).toBeTruthy();
        expect(helpers.areEqual('We all make choices in life, but in the end our choices make us.','We all make choices in life, but in the end our choices make us.')).toBeTruthy();
    })
    it('returns false when x !== y', () => {
        expect(helpers.areEqual('1',' ')).toBeFalsy();
        expect(helpers.areEqual('1','2')).toBeFalsy();
        expect(helpers.areEqual('hi','hello')).toBeFalsy();
    })
})

describe('lessThanNinety', () => {
    it('returns true when num is less than 90', () => {
        expect(helpers.lessThanNinety(89)).toBeTruthy();
        expect(helpers.lessThanNinety("50")).toBeTruthy();
    })
    it('returns false when num is greater than than 89', () => {
        expect(helpers.lessThanNinety(90)).toBeFalsy();
        expect(helpers.lessThanNinety("90")).toBeFalsy();
    })
})
describe('greaterThanFifty', () => {
    it('returns true when num is greater than 50', () => {
        expect(helpers.greaterThanFifty(51)).toBeTruthy();
        expect(helpers.greaterThanFifty("70")).toBeTruthy();
    })
    it('returns false when num is greater than than 89', () => {
        expect(helpers.greaterThanFifty(50)).toBeFalsy();
        expect(helpers.greaterThanFifty("49")).toBeFalsy();
    })
})


describe('add', () => {
    it('returns sum of x and y', () => {
        expect(helpers.add(2,3)).toBe(5);
        expect(helpers.add("2", "3")).toBe(5);
        expect(helpers.add(6,250)).toBe(256);
        expect(helpers.add(1000,290)).toBe(1290);
    })
    it('returns NaN when given nonnumeric values', () => {
        expect(helpers.add(undefined, undefined)).toBeNaN();
        expect(helpers.add('two', 'five')).toBeNaN();
    })
})
describe('subtract', () => {
    it('returns minus of x and y', () => {
        expect(helpers.subtract(2,3)).toBe(-1);
        expect(helpers.subtract("2", "3")).toBe(-1);
        expect(helpers.subtract(6,250)).toBe(-244);
        expect(helpers.subtract(1000,290)).toBe(710);
    })
    it('returns NaN when given nonnumeric values', () => {
        expect(helpers.subtract(undefined, undefined)).toBeNaN();
        expect(helpers.subtract('two', 'five')).toBeNaN();
    })
})
describe('divide', () => {
    it('returns division of x and y', () => {
        expect(helpers.divide(10,5)).toBe(2);
        expect(helpers.divide("10", "5")).toBe(2);
        expect(helpers.divide(50,5)).toBe(10);
        expect(helpers.divide(1000,100)).toBe(10);
    })
    it('returns NaN when given nonnumeric values', () => {
        expect(helpers.divide(undefined, undefined)).toBeNaN();
        expect(helpers.divide('two', 'five')).toBeNaN();
    })
})
describe('multiply', () => {
    it('returns multiplication of x and y', () => {
        expect(helpers.multiply(2,3)).toBe(6);
        expect(helpers.multiply("2", "3")).toBe(6);
        expect(helpers.multiply(6,200)).toBe(1200);
        expect(helpers.multiply(1000,10)).toBe(10000);
    })
    it('returns NaN when given nonnumeric values', () => {
        expect(helpers.multiply(undefined, undefined)).toBeNaN();
        expect(helpers.multiply('two', 'five')).toBeNaN();
    })
})
