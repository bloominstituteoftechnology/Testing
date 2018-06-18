const helpers = require('./project-1');

// start testing!

describe('project-1', () => {
    describe('multiplyByTen', () => {
        it('returns NaN when given a non numeric value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('two')).toBeNaN();
            expect(helpers.multiplyByTen(false)).toEqual(0);
            expect(helpers.multiplyByTen(true)).toEqual(10);
        })
        it('should return the given number multiplied by ten', () => {
            const num = 10;
            const num1 = -10;
            expect(helpers.multiplyByTen(num)).toBe(100);
            expect(helpers.multiplyByTen(num1)).toBe(-100);

        });
    });
    describe('subtractFive', () => {
        it('returns NaN when subtracted by a non numeric value', () => {
            expect(helpers.subtractFive(undefined)).toBeNaN();
            expect(helpers.subtractFive('two')).toBeNaN();
            expect(helpers.subtractFive(false)).toEqual(-5);
            expect(helpers.subtractFive(true)).toEqual(-4);
        })
        it('should return given number subtracted by 5', () => {
            expect(helpers.subtractFive(10)).toBe(5);
            expect(helpers.subtractFive(-5)).toBe(-10);
        })
    })
    describe('areSameLength', () => {
        it(' if strings are not the same length', () => {
            const str1 = "same";
            const str2 = "not same";
            expect(helpers.areSameLength(str1, str2)).toBe(false);
        })
        it('if strings are same length', () => {
            expect(helpers.areSameLength("ave", "red")).toBe(true);
        })
    })
    describe('areEqual', () => {
        it('returns true if x and y are equal', () => {
            expect(helpers.areEqual("3", "3")).toBeTruthy();
        })
        it('returns false if x and y are not equal', () => {
            expect(helpers.areEqual("3", "4")).toBeFalsy();
        })
    });
    describe('lessThanNinety', () => {
        it('returns false if number is greater than or equal 90', () => {
            expect(helpers.lessThanNinety(90)).toBeFalsy();
            expect(helpers.lessThanNinety(91)).toBeFalsy();
        })
        it('returns true if number is less than 90', () => {
            expect(helpers.lessThanNinety(89)).toBeTruthy();
            expect(helpers.lessThanNinety(-1)).toBeTruthy();
        })
    });
    describe('greaterThanFifty', () => {
        it('returns false if number is less than or equal to 50', () => {
            expect(helpers.greaterThanFifty(50)).toBeFalsy();
            expect(helpers.greaterThanFifty(49)).toBeFalsy();
        })
        it('returns true if number is greater than 50', () => {
            expect(helpers.greaterThanFifty(51)).toBeTruthy();
        });
    });
    describe('add', () => {
        it('returns NaN if given non numerical value', () => {
            expect(helpers.add(undefined)).toBeNaN()
        })
        it('correctly returns sum of two given numbers', () => {
            expect(helpers.add(3, 4)).toBe(7);
            expect(helpers.add(-3, 4)).toBe(1);
        });
    });
    describe("Subtract", () => {
        it('returns result of subtraction of two numbers correctly', () => {
            expect(helpers.subtract(3, 4)).toBe(-1);
        })
        it('returns NaN when given a non numerical value', () => {
            expect(helpers.subtract(3, undefined)).toBeNaN();
        });
    });
    describe("divide", () => {
        it('returns result of the division of two correctly', () => {
            expect(helpers.divide(10, 2)).toBe(5);
        })
        it('returns NaN when given NaN', () => {
            expect(helpers.divide(undefined)).toBeNaN();
        });
    });
    describe("multiply", () => {
        it('returns correct product of two numbers', () => {
            expect(helpers.multiply(3, 4)).toBe(12);
            expect(helpers.multiply(-3, 4)).toBe(-12);
        })
        it('returns NaN when given NaN', () => {
            expect(helpers.multiply(undefined)).toBeNaN();
        });
    });
    describe("getRemainder", () => {
        it('returns modulo correctly', () => {
            expect(helpers.getRemainder(10, 5)).toBe(0)
            expect(helpers.getRemainder(12, 5)).toBe(2)
        })
        it('returns NaN if given NaN', () => {
            expect(helpers.getRemainder(undefined)).toBeNaN();
        });
    });
    describe('isEven', () => {
        it('returns true if number is even', () => {
            expect(helpers.isEven(4)).toBeTruthy();
        })
        it('returns false is number is odd', () => {
            expect(helpers.isEven(3)).toBeFalsy();
        });
    });
    describe('isOdd', () => {
        it('returns true if odd', () => {
            expect(helpers.isOdd(3)).toBeTruthy();
        })
        it('returns false if even', () => {
            expect(helpers.isOdd(2)).toBeFalsy();
        });
    });
    describe('square', () => {
        it('returns the correct square of given number', () => {
            expect(helpers.square(3)).toBe(9);
            expect(helpers.square(-3)).toBe(9);
        })
        it('returns NaN if given NaN', () => {
            expect(helpers.square(undefined)).toBeNaN();
        });
    });
    describe('cube', () => {
        it('returns the number cubed correctly', () => {
            expect(helpers.cube(2)).toBe(8);
        })
        it('returns NaN if given NaN', () => {
            expect(helpers.cube(undefined)).toBeNaN();
        });
    });
    describe('raiseToPower', () => {
        it('returns result of given number to given exponent correctly', () => {
            expect(helpers.raiseToPower(2, 2)).toBe(4);
        })
        it('returns NaN if given NaN', () => {
            expect(helpers.raiseToPower(undefined)).toBeNaN();
        });
    });
    describe('roundNumber', () => {
        it('returns a rounded number correctly', () => {
            expect(helpers.roundNumber(3.6)).toBe(4);
            expect(helpers.roundNumber(3.4)).toBe(3)
        })
        it('returns NaN if given NaN', () => {
            expect(helpers.roundNumber(undefined)).toBeNaN();
        });
    });
    describe('roundUp', () => {
        it('returns number rounded up correctly', () => {
            expect(helpers.roundUp(3.4)).toBe(4);
        })
        it('returns NaN if given NaN', () => {
            expect(helpers.roundUp(undefined)).toBeNaN();
        });
    });
    describe('addExlamationPoint', () => {
        
    })
});


// an idea for a test
// another idea
// Write down ideas
//should return the right ammount given a numeric value
// as soon as you think what if, try and write a test for that.