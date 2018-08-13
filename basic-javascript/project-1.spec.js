const helpers = require('./project-1');

// start testing!

describe('it multiplies by ten', () => {
    it('returns ten times 1 is ten', () => {
        expect(helpers.multiplyByTen(1)).toEqual(10)
    })
    it('returns Falsy when passed undefined', () => {
        expect(helpers.multiplyByTen(undefined)).toBeFalsy()
    })
    it('returns 0 or less when passed 0 or less', () => {
        expect(helpers.multiplyByTen(0)).toBeLessThanOrEqual(0)
    })
})

describe('subtract five', () => {
    subtractFive = helpers.subtractFive
    it('returns 10 when passed 15', () => {
        expect(subtractFive(15)).toEqual(10)
    })
    it('returns falsy when passed undefined', () => {
        expect(subtractFive(undefined)).toBeFalsy()
    })
    it('returns 0 when passed 5', () => {
        expect(subtractFive(5)).toStrictEqual(0)
    })
})

describe('String one and two are the same length', () => {
    areSameLength = helpers.areSameLength
    it('returns falsy when passed two different length strings', () => {
        expect(areSameLength('hello', 'hello1')).toBeFalsy()
    })
    it('returns true when passed two string of the same length', () => {
        expect(areSameLength('astounding', 'amazing123')).toBeTruthy()
    })
    it('returns falsy when an integer', () => {
        expect(areSameLength('hello', 2)).toBeFalsy()
    })
})

describe('Two digits are equal', () => {
    areEqual = helpers.areEqual
    it('returns truthy when two ints are equal', () => {
        expect(areEqual(5, 5)).toBeTruthy()
    })
    it('returns falsy when two ints are not equal', () => {
        expect(areEqual(5,4)).toBeFalsy()
    })
    it('returns falsy when unequal strings are entered', () => {
        expect(areEqual('hello', 10)).toBeFalsy()
    })
    it('returns true when two equal strings are entered', () => {
        expect(areEqual('hello', 'hello')).toBeTruthy()
    })
    it('returns falsy when two floats are not equal', () => {
        expect(areEqual(5.321,5.123)).toBeFalsy()
    })
})

describe('Less than Ninety', () => {
    lessThanNinety = helpers.lessThanNinety
    it('returns true when number is less than 90', () => {
        expect(lessThanNinety(1)).toBeTruthy()
        expect(lessThanNinety(50)).toBeTruthy()
        expect(lessThanNinety(89)).toBeTruthy()
    })
    it('returns falsy when greater than 90 or equal to 90', () => {
        expect(lessThanNinety(90)).toBeFalsy()
        expect(lessThanNinety(91)).toBeFalsy()
        expect(lessThanNinety(Number.MAX_VALUE)).toBeFalsy()
    })
    it('returns falsy when strings are entered', () => {
        expect(lessThanNinety('hello')).toBeFalsy()
    })
    it('returns false when string length greater than 90 is entered', () => {
        expect(lessThanNinety('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).toBeFalsy()
    })
})

describe('greaterThanFifty', () => {
    greaterThanFifty = helpers.greaterThanFifty
    it('returns true when number is greater than 50', () => {
        expect(greaterThanFifty(51)).toBeTruthy()
        expect(greaterThanFifty(100)).toBeTruthy()
        expect(greaterThanFifty(Number.MAX_VALUE)).toBeTruthy()
    })
    it('returns falsy when less than or = 50', () => {
        expect(greaterThanFifty(50)).toBeFalsy()
        expect(greaterThanFifty(49)).toBeFalsy()
        expect(greaterThanFifty(0)).toBeFalsy()
        expect(greaterThanFifty(-100)).toBeFalsy()
    })
    it('returns falsy when strings are entered', () => {
        expect(greaterThanFifty('hello')).toBeFalsy()
    })
})

describe('add', () => {
    add = helpers.add
    it('returns correct number when adding', () => {
        expect(add(5,1)).toEqual(6)
        expect(add(100,100)).toEqual(200)
        expect(add(-100,100)).toEqual(0)
    })
    it('returns concatenated strings', () => {
        expect(add('Hello', ' there')).toMatch('Hello there')
        expect(add('abcd',' ')).toEqual('abcd ')
    })
    it('caps out at 1.7976931348623157e+308', () => {
        expect(add(Number.MAX_VALUE, 1000)).toEqual(1.7976931348623157e+308)
    })
})

describe('subtract', () => {
    subtract = helpers.subtract
    it('returns correct number when subtracting', () => {
        expect(subtract(5,1)).toEqual(4)
        expect(subtract(100,100)).toEqual(0)
        expect(subtract(-100,100)).toEqual(-200)
    })
    it('returns falsy when passed strings', () => {
        expect(subtract('Hello', ' there')).toBeFalsy()
        expect(subtract('abcd','a')).toBeFalsy()
    })
    it('bottoms out at -1.7976931348623157e+308', () => {
        expect(subtract(1000, Number.MAX_VALUE)).toEqual(-1.7976931348623157e+308)
    })
})

describe('divide', () => {
    divide = helpers.divide
    it('returns correct number when dividing', () => {
        expect(divide(5,1)).toEqual(5)
        expect(divide(100,10)).toEqual(10)
        expect(divide(1000,5)).toEqual(200)
    })
    it('accounts for floating point decimals', () => {
        expect(divide(10.5, 5)).toBeGreaterThanOrEqual(2)
        expect(divide(2.5,2)).toEqual(1.25)
    })
    it('errors when dividing by 0', () => {
        expect(divide(10, 0)).toEqual(Infinity)
    })
})

describe('multiply', () => {
    multiply = helpers.multiply
    it('returns correct number when multiplying', () => {
        expect(multiply(5,1)).toEqual(5)
        expect(multiply(100,10)).toEqual(1000)
        expect(multiply(1000,0)).toEqual(0)
    })
    it('accounts for floating point decimals', () => {
        expect(multiply(10.5, 2)).toBeGreaterThanOrEqual(21)
        expect(multiply(2.5,2)).toEqual(5)
    })
    it('returns Falsy with strings', () => {
        expect(multiply('hello', 'there')).toBeFalsy()
    })
})

describe('getRemainder', () => {
    getRemainder = helpers.getRemainder
    it('returns correct remainder', () => {
        expect(getRemainder(55,1)).toEqual(0)
        expect(getRemainder(102,10)).toEqual(2)
        expect(getRemainder(37,6)).toEqual(1)
    })
    it('returns Falsy with strings', () => {
        expect(getRemainder('hello', 'there')).toBeFalsy()
    })
})

describe('isEven', () => {
    isEven = helpers.isEven
    it('returns true for evens', () => {
        expect(isEven(4)).toBeTruthy()
    })
    it('returns true for 0', () => {
        expect(isEven(0)).toBeTruthy()
    })
    it('returns falsy on floating point nums', () => {
        expect(isEven(10.2)).toBeFalsy()
    })
    it('returns Falsy with strings', () => {
        expect(isEven('hello')).toBeFalsy()
    })
})

describe('isEven', () => {
    isEven = helpers.isEven
    it('returns true for evens', () => {
        expect(isEven(4)).toBeTruthy()
    })
    it('returns true for 0', () => {
        expect(isEven(0)).toBeTruthy()
    })
    it('returns false for odds', () => {
        expect(isEven(1)).toBeFalsy()
    })
    it('Returns false on floating point nums', () => {
        expect(isEven(4.4)).toBeFalsy()
    })
    it('returns Falsy with strings', () => {
        expect(isEven('even')).toBeFalsy()
    })
})

describe('isOdd', () => {
    isOdd = helpers.isOdd
    it('returns true for odds', () => {
        expect(isOdd(3)).toBeTruthy()
    })
    it('returns false for 0', () => {
        expect(isOdd(0)).toBeFalsy()
    })
    it('returns falsy on evens', () => {
        expect(isOdd(10)).toBeFalsy()
    })
    it('returns Falsy with strings', () => {
        expect(isOdd('hello')).toBeFalsy()
    })
})

describe('square', () => {
    square = helpers.square
    it('returns correct value', () => {
        expect(square(5)).toEqual(25)
    })
    it('returns 0 for 0', () => {
        expect(square(0)).toEqual(0)
    })
    it('negates a square root (within 5 decimal places)', () => {
        expect(square(Math.sqrt(5))).toBeCloseTo(5,5)
    })
    it('returns Falsy with strings', () => {
        expect(square('hello')).toBeFalsy()
    })
})

describe('cube', () => {
    cube = helpers.cube
    it('returns correct value', () => {
        expect(cube(5)).toEqual(125)
    })
    it('returns 0 for 0', () => {
        expect(cube(0)).toEqual(0)
    })
    it('caps out at 1.7976931348623157e+308', () => {
        expect(cube(Number.MAX_VALUE)).toEqual(Infinity)
    })
})

describe('raiseToPower', () => {
    raiseToPower = helpers.raiseToPower
    it('returns correct value', () => {
        expect(raiseToPower(5, 2)).toEqual(25)
        expect(raiseToPower(2, 10)).toEqual(1024)
        expect(raiseToPower(-1, 5)).toEqual(-1)
    })
    it('returns 1 when raised to 0', () => {
        expect(raiseToPower(-15, 0)).toEqual(1)
    })
    it('returns that number when raised to 1', () => {
        expect(raiseToPower(-15, 1)).toEqual(-15)
        expect(raiseToPower(6, 1)).toEqual(6)
        expect(raiseToPower(54321, 1)).toEqual(54321)
    })
})

it('rounds a number effectively', () => {
    expect(helpers.roundNumber(10.5)).toEqual(11)
})

it('rounds up a floating point number', () => {
    expect(helpers.roundUp(10.1)).toEqual(11)
})

it('adds an exclamation point', () => {
    expect(helpers.addExclamationPoint('Yo')).toMatch('Yo!')
    expect(helpers.addExclamationPoint(5)).toMatch('5!')
})

it('combines names', () => {
    expect(helpers.combineNames('Mac', '\'N Cheese')).toMatch('Mac \'N Cheese')
    expect(helpers.combineNames('John', 'Lennon')).toMatch('John Lennon')
})

it('outputs a greeting', () => {
    expect(helpers.getGreeting('Alex')).toMatch('Hello Alex!')
})

it('computes a rectanglular area', () => {
    expect(helpers.getRectangleArea(2,5)).toEqual(10)
})

it('computes a triangular area', () => {
    expect(helpers.getTriangleArea(5,10)).toEqual(25)
})

it('Gets a circles area', () => {
    expect(helpers.getCircleArea(2)).toBeCloseTo(12.56637)
})

it('gets the volume of a rectangular prism', () => {
    expect(helpers.getRectangularPrismVolume(2,4,4)).toEqual(32)
})