const helpers = require('./project-1');

// start testing!
describe('project-1', ()=> {
    describe('multiplyByTen', ()=> {
        it('return NaN when given a non-numeric value',() => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('two')).toBeNaN();
            expect(helpers.multiplyByTen(false)).toEqual(0);
            expect(helpers.multiplyByTen(true)).toEqual(10);
        });
        it('should return the given number multiplied by 10', () => {});
    });
})

describe('project-1', () => {
    describe('subTractFive', () => {
        it('returns NaN when given a non-numeric value', () => {
            expect(helpers.subtractFive(undefined)).toBeNaN();
            expect(helpers.subtractFive('apple')).toBeNaN();
            expect(helpers.subtractFive(false)).toEqual(-5);
            expect(helpers.subtractFive(true)).toEqual(-4);
        })
        it('should return the given number subtracted by 5', () => {});
    })
})

describe('project-1', () => {
    describe('areSameLength', () => {
        it('returns false when given non string', () => {
            //expect(helpers.areSameLength(undefined)).toBeFalsy()
            expect(helpers.areSameLength('apple', 'car')).toEqual(false);
            expect(helpers.areSameLength('apple', 4)).toEqual(false);
            expect(helpers.areSameLength('car', 'bat')).toEqual(true);
        })
        it('returns true when the length of strings are equal', () => {})
    })
})

describe('project-1', () => {
    describe('areEqual', () => {
        it('returns false when two arguments are not equal', () => {
            //expect(helpers.areEqual(undefined)).toEqual(false);
            expect(helpers.areEqual(1, 2)).toBeFalsy();
            expect(helpers.areEqual(1,false)).toEqual(false);
        })
        it('returns true when the two arguments are equal', () => {})
    })
})

describe('project-1', () => {
    describe('lessThanNinety', () => {
        it('returns false when num is non-numeric', () => {
            expect(helpers.lessThanNinety('A')).toBeFalsy();
            expect(helpers.lessThanNinety(undefined)).toBeFalsy();
        })
        it('return false when number is greater than ninety', () => {
            expect(helpers.lessThanNinety(100)).toBeFalsy();
        })
        it('returns true when the number is less than ninety', () => {})
    })
})

describe('project-1', () => {
    describe('greaterThanFifty', () => {
        it('returns false when num is non-numeric', () => {
            expect(helpers.greaterThanFifty('A')).toBeFalsy();
            expect(helpers.greaterThanFifty(undefined)).toBeFalsy();
        })
        it('returns false when number is less than Fifty', () => {
            expect(helpers.greaterThanFifty(20)).toBeFalsy();
        })
        it('returns true when number is greater than fifty', () => {})
    })
})

describe('project-1', () => {
    describe('add', () => {
        it('returns NaN if argument is non-numeric', () => {
            expect(helpers.add(undefined)).toBeNaN();
        })
        it(' returns x if argument is false', () => {
            expect(helpers.add(2,false)).toEqual(2);
        })
        it('returns x + y if both arguments are true', () => {})
    })
})

describe('project-1', () => {
    describe('subtract', () => {
        it('returns NaN if argument is non-numeric', () => {
            expect(helpers.subtract(undefined)).toBeNaN();
            expect(helpers.subtract('String')).toBeNaN();
        })
        it(' returns x if argument is false', () => {
            expect(helpers.subtract(2, false)).toEqual(2);
        })
        it('returns x - y if both arguments are true', () => { })
    })
})

describe('project-1', () => {
    describe('divide', () => {
        it('returns NaN if argument is non-numeric', () => {
            expect(helpers.divide(undefined)).toBeNaN();
            expect(helpers.divide('String')).toBeNaN();
        })
        it('returns x if argument is true', () => {
            expect(helpers.divide(2,true)).toEqual(2)
        })
        it('returns x/y if both arguments are true', () => {})
    })
})

describe('multiply', () => {
    describe('multiply', () => {
        it('returns NaN if argument is non-numeric', () => {
            expect(helpers.multiply(undefined)).toBeNaN();
            expect(helpers.multiply('String')).toBeNaN();
        })
        it('returns x if argument is false', () => {
            expect(helpers.multiply(2,false)).toEqual(0)
        })
        it('returns x*y if both arguments are true', () => {})
    })
})
