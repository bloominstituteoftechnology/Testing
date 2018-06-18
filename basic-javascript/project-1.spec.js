const helpers = require('./project-1');

// start testing!
describe('multiplyByTen', () => {
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.multiplyByTen(undefined)).toBeNaN();
        expect(helpers.multiplyByTen('two')).toBeNaN();
        expect(helpers.multiplyByTen({ key: "value" })).toBeNaN();
    })
    it('returns the given number multiplied by 10', () => {
        expect(helpers.multiplyByTen(2)).toBe(20);
        expect(helpers.multiplyByTen(-2)).toBe(-20);
        expect(helpers.multiplyByTen(0)).toBe(0);
        expect(helpers.multiplyByTen(.5)).toBe(5);
    })
})

describe('subtractFive', () => {
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.subtractFive(undefined)).toBeNaN();
        expect(helpers.subtractFive('two')).toBeNaN();
        expect(helpers.subtractFive({ key: "value" })).toBeNaN();
    })
    it('returns the given number subtracted by 5', () => {
        expect(helpers.subtractFive(10)).toBe(5);
        expect(helpers.subtractFive(-2)).toBe(-7);
        expect(helpers.subtractFive(0)).toBe(-5);
        expect(helpers.subtractFive(.5)).toBe(-4.5);
    })
})

describe('areSameLength', () => {
    it('returns boolean when not a string', () => {
        expect(helpers.areSameLength('hello', 54343)).toBeFalsy();
    })
    it('should return boolean for equal comparison', () => {
        expect(helpers.areSameLength('kings', 'smile')).toBeTruthy();
        expect(helpers.areSameLength('12', '14')).toBeTruthy();
    });
    it('should return boolean for un-equal comparison', () => {
        expect(helpers.areSameLength('kings', 'greeting')).toBeFalsy();
    });
})

describe('areEqual', () => {
    it('returns boolean for un-equal comparison', () => {
        expect(helpers.areEqual('kings', 'king')).toBeFalsy();
        expect(helpers.areEqual('kings', '89980')).toBeFalsy();
        expect(helpers.areEqual('Kings', 'kings')).toBeFalsy();
    })  
    it('should return boolean for equal comparison', () => {
        expect(helpers.areEqual('kings', 'kings')).toBeTruthy();
        expect(helpers.areEqual('12', '12')).toBeTruthy();
        expect(helpers.areEqual(12, 12)).toBeTruthy();

    });
})

describe('lessThanNinety', () => {
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.lessThanNinety('two')).toBeFalsy();
    })
    it('should return boolean for a number smaller than 90', () => {
        expect(helpers.lessThanNinety(70)).toBeTruthy();
    });
    it('should return boolean for a number larger than 90', () => {
        expect(helpers.lessThanNinety(90)).toBeFalsy();
    });
})

describe('greaterThanFifty', () => {

})


// multiplyByTen,
// subtractFive,
// areSameLength,
// areEqual,
// lessThanNinety,
// greaterThanFifty,
// add,
// subtract,
// divide,
// multiply,
// getRemainder,
// isEven,
// isOdd,
// square,
// cube,
// raiseToPower,
// roundNumber,
// roundUp,
// addExclamationPoint,
// combineNames,
// getGreeting,
// getRectangleArea,
// getTriangleArea,
// getCircleArea,
// getRectangularPrismVolume