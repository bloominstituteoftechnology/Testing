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

describe('lessThanNinety(num)', () => {
    it('returns true if less than ninety', () => {
        expect(lessThanNinety(0)).toBe(true);
        expect(lessThanNinety(100)).toBe(false);
    })
})

describe('greaterThanFifty(num)', () => {
    it('returns true if greater than fifty', () => {
        expect(greaterThanFifty(100)).toBe(true);
        expect(greaterThanFifty(0)).toBe(false);
    })
})

describe('add(x, y)', () => {
    it('literally adds', () => {
        expect(add(1, 1)).toBe(2);
        expect(add(9, -10)).toBe(-1);
    })
})

describe('subtract(x, y)', () => {
    it('literally subtracts', () => {
        expect(subtract(1, 1)).toBe(0);
        expect(subtract(9, -10)).toBe(1);
    })
})

describe('divide(x, y)', () => {
    it('literally divides', () => {
        expect(divide(10, 5)).toBe(2);
    })
})

describe('multiply(x, y)', () => {
    it('literally multiplies', () => {
        expect(multiply(10, 5)).toBe(50);
    })
})

describe('getRemainder(x, y)', () => {
    it('returns the remainder', () => {
        expect(getRemainder(3, 2)).toBe(1);
        expect(getRemainder(4, 2)).toBe(0);
    })
})

describe('isEven(num)', () => {
    it('returns true if the number is even', () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(1)).toBe(false);
    })
})

describe('isOdd(num)', () => {
    it('returns true if the number is odd', () => {
        expect(isOdd(2)).toBe(false);
        expect(isOdd(1)).toBe(true);
    })
})

describe('square(num)', () => {
    it('returns the square of the number', () => {
        expect(square(2)).toBe(4)
    })
})

describe('cube(num)', () => {
    it('returns the cube of the number', () => {
        expect(cube(2)).toBe(8)
    })
})

describe('raiseToPower(num, exponent)', () => {
    it('raises the number to the exponent', () => {
        expect(raiseToPower(2, 2)).toBe(4);
    })
})

describe('roundNumber(num)', () => {
    it('returns an integer', () => {
        expect(roundNumber(1.6)).toBe(2);
    })
})

describe('roundUp(num)', () => {
    it('rounds up to an integer', () => {
        expect(roundUp(1.2)).toBe(2);
    })
})

describe('addExclamationPoint(str)', () => {
    it('returns a string with an exclamation point', () => {
        expect(addExclamationPoint('this assignment is ridiculous')).toBe('this assignment is ridiculous!')
    })
})

describe('combineNames(firstName, lastName)', () => {
    it('puts first and last names together', () => {
        expect(combineNames('Ian', 'Cameron')).toBe('Ian Cameron');
    })
})

describe('getGreeting(name)', () => {
    it('combines a greeting with a name', () => {
        expect(getGreeting('Ian')).toBe('Hello Ian!')
    })
})