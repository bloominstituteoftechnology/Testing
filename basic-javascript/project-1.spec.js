const {
    multiplyByTen,
    subtractFive,
    areSameLength,
    areEqual,
    lessThanNinety,
    greaterThanFifty,
    add,
    subtract,
    divide,
    multiply,
    getRemainder,
    isEven,
    isOdd,
    square,
    cube,
    raiseToPower,
    roundNumber,
    roundUp,
    addExclamationPoint,
    combineNames,
    getGreeting,
    getRectangleArea,
    getTriangleArea,
    getCircleArea,
    getRectangularPrismVolume
  } = require('./project-1');

// start testing!

describe('multiplyByTen(num)', () => {
    it('multiplies by ten', () => {
        expect(multiplyByTen(5)).toBe(50);
        expect(multiplyByTen(10)).toBe(100);
    })
})

describe('subtractFive(num)', () => {
    it('reduces by 5', () => {
        expect(subtractFive(5)).toBe(0);
    })
})

describe('areSameLength(str1, str2)', () => {
    it('returns true if they are the same length', () => {
        expect(areSameLength('hello', 'world')).toBe(true);
        expect(areSameLength('yo', 'whatup')).toBe(false);
    })
})

describe('areEqual(x, y)', () => {
    it('returns true if they are equal', () => {
        expect(areEqual(10, 10)).toBe(true);
        expect(areEqual(10, 100)).toBe(false);
        expect(areEqual(10, '10')).toBe(false);
    })
})