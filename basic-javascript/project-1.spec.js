const helpers = require('./project-1');

// start testing!
describe.only('project-1', () => {
    describe('multiplyByTen', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('two')).toBeNaN();
            expect(helpers.multiplyByTen(false)).toEqual(0);
            expect(helpers.multiplyByTen(true)).toEqual(10);
        })
        it('should return the given number multiplied by 10', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('subtractFive', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.subtractFive(undefined)).toBeNaN();
            expect(helpers.subtractFive('five')).toBeNaN();
            expect(helpers.subtractFive(false)).toEqual(-5);
            expect(helpers.subtractFive(true)).toEqual(-4);
        })
        it('should return the given number subtracted by 5', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('areSameLength', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.areSameLength(1, 13)).toBeTruthy();
            expect(helpers.areSameLength('1', 'Aa')).toBeFalsy();
            expect(helpers.areSameLength('1', '1')).toBeTruthy();
        })
        it('should return the same length', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('areEqual', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.areEqual(undefined, undefined)).toBeTruthy();
            expect(helpers.areEqual(1, 3)).toBeFalsy();
            expect(helpers.areEqual('x', 'y')).toBeFalsy();
            expect(helpers.areEqual('x', 'x')).toBeTruthy();
        })
        it('should return the given number that are equal', () => {
        })
    })
})

describe.only('project-1', () => {
    describe('lessThanNinety', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.lessThanNinety(undefined)).toBeFalsy();
            expect(helpers.lessThanNinety('paris')).toBeFalsy();
            expect(helpers.lessThanNinety(80)).toBeTruthy();
            expect(helpers.lessThanNinety(91)).toBeFalsy();
        })
    })
})

describe.only('project-1', () => {
    describe('greaterThanFifty', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.greaterThanFifty(undefined)).toBeFalsy();
            expect(helpers.greaterThanFifty('paris')).toBeFalsy();
            expect(helpers.greaterThanFifty(40)).toBeFalsy();
            expect(helpers.greaterThanFifty(91)).toBeTruthy();
        })
    })
})

describe.only('project-1', () => {
    describe('add', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.add(undefined, undefined)).toBeNaN();
            expect(helpers.add('paris', 'italy')).toEqual('parisitaly');
            expect(helpers.add(1, 3)).toEqual(4);
            expect(helpers.add(3, -5)).toEqual(-2);
        })
    })
})

describe.only('project-1', () => {
    describe('subtract', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.subtract(undefined, undefined)).toBeNaN();
            expect(helpers.subtract('paris', 'italy')).toBeNaN();
            expect(helpers.subtract(1, 3)).toEqual(-2);
            expect(helpers.subtract(5, 3)).toEqual(2);
        })
    })
})

describe.only('project-1', () => {
    describe('divide', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.divide(undefined, undefined)).toBeNaN();
            expect(helpers.divide('germany', 'london')).toBeNaN();
            expect(helpers.divide(4, -2)).toEqual(-2);
            expect(helpers.divide(8, 4)).toEqual(2);
        })
    })
})

describe.only('project-1', () => {
    describe('multiply', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.multiply(undefined, undefined)).toBeNaN();
            expect(helpers.multiply('swiss', 'sweden')).toBeNaN();
            expect(helpers.multiply(4, -2)).toEqual(-8);
            expect(helpers.multiply(8, 4)).toEqual(32);
        })
    })
})

describe.only('project-1', () => {
    describe('getRemainder', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.getRemainder(undefined, undefined)).toBeNaN();
            expect(helpers.getRemainder('spain', 'amsterdam')).toBeNaN();
            expect(helpers.getRemainder(6, -2)).toEqual(0);
            expect(helpers.getRemainder(8, 3)).toEqual(2);
        })
    })
})

describe.only('project-1', () => {
    describe('isEven', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.isEven(undefined)).toBeFalsy();
            expect(helpers.isEven('zurich', 'czech')).toBeFalsy();
            expect(helpers.isEven(7)).toBeFalsy();
            expect(helpers.isEven(8)).toBeTruthy();
        })
    })
})

describe.only('project-1', () => {
    describe('isOdd', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.isOdd(undefined)).toBeTruthy();
            expect(helpers.isOdd('zurich', 'czech')).toBeTruthy();
            expect(helpers.isOdd(10)).toBeFalsy();
            expect(helpers.isOdd(7)).toBeTruthy();
        })
    })
})

describe.only('project-1', () => {
    describe('square', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.square(undefined)).toBeFalsy();
            expect(helpers.square('finland', 'russia')).toBeNaN();
            expect(helpers.square(-10)).toEqual(100);
            expect(helpers.square(7)).toEqual(49);
        })
    })
})

describe.only('project-1', () => {
    describe('cube', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.cube(undefined)).toBeNaN();
            expect(helpers.cube('australia', 'new zealand')).toBeNaN();
            expect(helpers.cube(-3)).toEqual(-27);
            expect(helpers.cube(2)).toEqual(8);
        })
    })
})

describe.only('project-1', () => {
    describe('raiseToPower', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.raiseToPower(undefined, 1)).toBeFalsy();
            expect(helpers.raiseToPower('bahamas', 'jamaica')).toBeNaN();
            expect(helpers.raiseToPower(5, -3)).toEqual(.008);
            expect(helpers.raiseToPower(2, 2)).toEqual(4);
        })
    })
})

describe.only('project-1', () => {
    describe('roundNumber', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.roundNumber(undefined)).toBeNaN();
            expect(helpers.roundNumber('cayman', 'barbados')).toBeNaN();
            expect(helpers.roundNumber(-3.3)).toEqual(-3);
            expect(helpers.roundNumber(2.4)).toEqual(2);
        })
    })
})

describe.only('project-1', () => {
    describe('roundUp', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.roundUp(undefined)).toBeNaN();
            expect(helpers.roundUp('cayman', 'barbados')).toBeNaN();
            expect(helpers.roundUp(-3.7)).toEqual(-3);
            expect(helpers.roundUp(2.6)).toEqual(3);
        })
    })
})

describe.only('project-1', () => {
    describe('addExclamationPoint', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.addExclamationPoint(undefined)).toBe('undefined!');
            expect(helpers.addExclamationPoint(4)).toBe('4!');
            expect(helpers.addExclamationPoint('str')).toBe('str!');
        })
    })
})

describe.only('project-1', () => {
    describe('combineNames', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.combineNames(undefined, undefined)).toBe('undefined undefined');
            expect(helpers.combineNames(4, 6)).toBe('4 6');
            expect(helpers.combineNames('str', 'rts')).toBe('str rts');
        })
    })
})

describe.only('project-1', () => {
    describe('getGreeting', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.getGreeting(undefined)).toBe('Hello undefined!');
            expect(helpers.getGreeting(4)).toBe('Hello 4!');
            expect(helpers.getGreeting('flo')).toBe('Hello flo!');
        })
    })
})

describe.only('project-1', () => {
    describe('getRectangleArea', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.getRectangleArea(undefined)).toBeNaN();
            expect(helpers.getRectangleArea(4, 6)).toEqual(24);
            expect(helpers.getRectangleArea(2, 2)).toEqual(4);
        })
    })
})

describe.only('project-1', () => {
    describe('getTriangleArea', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.getTriangleArea(undefined)).toBeNaN();
            expect(helpers.getTriangleArea(4, 6)).toEqual(12);
            expect(helpers.getTriangleArea(2, 2)).toEqual(2);
        })
    })
})

describe.only('project-1', () => {
    describe('getCircleArea', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.getCircleArea(undefined)).toBeNaN();
            expect(helpers.getCircleArea(5)).toEqual(78.53981633974483);
            expect(helpers.getCircleArea(2)).toEqual(12.566370614359172);
        })
    })
})

describe.only('project-1', () => {
    describe('getRectangularPrismVolume', () => {
        it('returns NaN when there is a non numerical value', () => {
            expect(helpers.getRectangularPrismVolume(undefined)).toBeNaN();
            expect(helpers.getRectangularPrismVolume(-5, -2, -3)).toEqual(-30);
            expect(helpers.getRectangularPrismVolume(2, 2, 2)).toEqual(8);
        })
    })
})