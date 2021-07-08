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

describe('project-1', () => {
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

describe('getRemainder', () => {
    describe('getRemainder', () => {
        it('returns NaN if argument is non-numeric', () => {
            expect(helpers.getRemainder(undefined)).toBeNaN();
            expect(helpers.getRemainder('String')).toBeNaN();
        })
        it('returns x if argument is false', () => {
            expect(helpers.getRemainder(2, false)).toBeNaN()
        })
        it('returns a remainder if the arguments are both true', () => {})
    })
})

describe('isEven', () => {
    describe('isEven', () => {
        it('returns false if argument is non-numeric', () => {
            expect(helpers.isEven(undefined)).toBeFalsy();
            expect(helpers.isEven('String')).toBeFalsy();
        })
        it('returns false if argument is true', () => {
            expect(helpers.isEven(true)).toBeFalsy();
        })
        it('return true if argument is divisible by 2', () => {})
        })
})

describe('project-1', () => {
    describe('isOdd', () => {
        it('returns true if argument is non-numeric', () => {
            expect(helpers.isOdd(undefined)).toBeTruthy();
            expect(helpers.isOdd('String')).toBeTruthy();
        })
        it('returns true if argument is true', () => {
            expect(helpers.isOdd(true)).toBeTruthy();
        })
        it('return false if argument is divisible by 2', () => { })
    })
})

describe('project-1', () => {
    describe('square', () => {
        it('returns NaN if argument is non-numberic', () => {
            expect(helpers.square("string")).toBeNaN();
            expect(helpers.square(undefined)).toBeNaN();
        })
        it('should return the product of num * num', () => {})
    })
})

describe('project-1', () => {
    describe('cube', () => {
        it('returns NaN if argument is non-numberic', () => {
            expect(helpers.cube("string")).toBeNaN();
            expect(helpers.cube(undefined)).toBeNaN();
        })
        it('should return the product of num * num * num', () => { })
    })
})

describe('project-1', () => {
    describe('raiseToPower', () => {
        it('returns NaN if argument is non-numberic', () => {
            expect(helpers.raiseToPower("string")).toBeNaN();
            expect(helpers.raiseToPower(undefined)).toBeNaN();
        })
        it('returns number if exponent is true', () => {
            expect(helpers.raiseToPower(12,true)).toEqual(12);
        })
        it('should return a product of number to a certain power', () => {})
    })
})

describe('project-1', () => {
    describe('roundNumber', () => {
        it('returns NaN if argument is non-numberic', () => {
            expect(helpers.roundNumber("string")).toBeNaN();
            expect(helpers.roundNumber(undefined)).toBeNaN();
        })
        it('returns a 1 if the argument is true', () => {
            expect(helpers.roundNumber(true)).toEqual(1);
        })
        it('returns a 0 if the argument is false', () => {
            expect(helpers.roundNumber(false)).toEqual(0);
        })
        it('returns a given number rounded up', () => {})
    })
})

describe('project-1', () => {
    describe('roundUp', () => {
        it('returns NaN if argument is non-numberic', () => {
            expect(helpers.roundNumber("string")).toBeNaN();
            expect(helpers.roundNumber(undefined)).toBeNaN();
        })
        it('returns a 1 if the argument is true', () => {
            expect(helpers.roundNumber(true)).toEqual(1);
        })
        it('returns a 0 if the argument is false', () => {
            expect(helpers.roundNumber(false)).toEqual(0);
        })
        it('returns a given number rounded up', () => { })
    })
})

describe('project-1', () => {
    describe('addExclamationPoint', () => {
        it('returns a string length', () => {
            expect(helpers.addExclamationPoint('cat')).toHaveLength(4);
            expect(helpers.addExclamationPoint('cat')).toEqual('cat!');
        })
    })
})

describe('project-1', () => {
    describe('combineNames', () => {
        it('returns a string length', () => {
            expect(helpers.combineNames('Adam', 'Smith')).toHaveLength(10);
        })
        it('returns the string as intended', () => {
            expect(helpers.combineNames('Adam', 'Smith')).toEqual('Adam Smith');
        })
    })
})

describe('project-1', () => {
    describe('getGreeting', () => {
        it('returns length of name', () => {
            expect(helpers.getGreeting('Adam')).toHaveLength(11);
        })
        it('returns the string as intended', () => {
            expect(helpers.getGreeting('Adam')).toEqual('Hello Adam!');
        })
    })
})

describe('project-1', () => {
    describe('getRectangleArea', () => {
        it('returns NaN if argument is non-numberic', () => {
            expect(helpers.getRectangleArea("string")).toBeNaN();
            expect(helpers.getRectangleArea(undefined)).toBeNaN();
        })
        it('returns num if the argument is true', () => {
            expect(helpers.getRectangleArea(3,true)).toEqual(3);
        })
        it('returns a 0 if the argument is false', () => {
            expect(helpers.getRectangleArea(3, false)).toEqual(0);
        })
        it('returns a number based off of 2 arguments multiplying, length * width', () => {})
    })
})

describe('project-1', () => {
    describe('getTriangleArea', () => {
        it('returns NaN if argument is non-numberic', () => {
            expect(helpers.getTriangleArea("string")).toBeNaN();
            expect(helpers.getTriangleArea(undefined)).toBeNaN();
        })
        it('returns num if the argument is true', () => {
            expect(helpers.getTriangleArea(3, true)).toEqual(1.5);
        })
        it('returns a 0 if the argument is false', () => {
            expect(helpers.getTriangleArea(3,false)).toEqual(0);
        })
        it('returns the prouct of base * height* 1.5', () => {})
    })
})

describe('project-1', () => {
    describe('getCircleArea', () => {
        it('returns NaN if argument is non-numberic', () => {
            expect(helpers.getCircleArea("string")).toBeNaN();
            expect(helpers.getCircleArea(undefined)).toBeNaN();
        })
        it('returns pi if the argument is true', () => {
            expect(helpers.getCircleArea(true)).toEqual(3.141592653589793);
        })
        it('returns a 0 if the argument is false', () => {
            expect(helpers.getCircleArea(false)).toEqual(0);
        })
        it('return a number multiplied by Pi', () => {})

    })
})

describe('project-1', () => {
    describe('getRectangularPrismVolume', () => {
        it('returns NaN if argument is non-numberic', () => {
            expect(helpers.getRectangularPrismVolume("string")).toBeNaN();
            expect(helpers.getRectangularPrismVolume(undefined)).toBeNaN();
        })
        it('returns 6 if the argument is true', () => {
            expect(helpers.getRectangularPrismVolume(2,3,true)).toEqual(6);
        })
        it('returns a 0 if the argument is false', () => {
            expect(helpers.getRectangularPrismVolume(2,3,false)).toEqual(0);
        })
        it('return the volume of a rectangular prims by multiplying width, height and length', () => {})
    })
})

