const helpers = require('./project-1');

//tests
/**
 * @param {number} num
 * @returns {number}
 */
describe('multiplyByTen', () => {
    it('is defined', () => {
        expect(helpers.multiplyByTen).toBeDefined();
    })
    it('multiplies by ten', () => {
        expect(helpers.multiplyByTen(2)).toStrictEqual(20);
        expect(helpers.multiplyByTen(-3)).toStrictEqual(-30);
        expect(helpers.multiplyByTen('hi')).toBeNaN();
        expect(helpers.multiplyByTen(['a'])).toBeNaN();
    })
})

/**
 * @param {number} num
 * @returns {number}
 */
describe('subtractFive', () => {
    it('is defined', () => {
        expect(helpers.subtractFive).toBeDefined();
    })
    it('multiplies by ten', () => {
        expect(helpers.subtractFive(2)).toStrictEqual(-3);
        expect(helpers.subtractFive(-3)).toStrictEqual(-8);
        expect(helpers.subtractFive('hi')).toBeNaN();
    })
})

/**
 * @param {string} str1
 * @param {string} str2
 * @returns {bool}
 */
describe('areSameLength', () => {
    it('is defined', () => {
        expect(helpers.areSameLength).toBeDefined();
    })

    it('returns true if the strings are equal', () => {
        expect(helpers.areSameLength('foo', 'bar')).toBeTruthy();
    })
    it('returns false if the strings are equal', () => {
        expect(helpers.areSameLength('foo', 'bars')).toBeFalsy();
    })
})

/**
 * @param {string, number} x
 * @param {string, number} y
 * @returns {bool}
 */
describe('areEqual', () => {
    it('is defined', () => {
        expect(helpers.areEqual).toBeDefined()
    })
    it('returns true if x = y', () => {
        expect(helpers.areEqual(2, 2)).toBeTruthy()
        expect(helpers.areEqual(-2, -2)).toBeTruthy()
    })

    it('returns false if x !== y', () => {
        expect(helpers.areEqual(-2, 2)).toBeFalsy()
        expect(helpers.areEqual(-2, 122)).toBeFalsy()
        expect(helpers.areEqual('hi', 'there')).toBeFalsy()
    })
})

/**
 * @param {number} num
 * @returns {number}
 */
describe('lessThanNinety', () => {
    it('returns true if argument < 90', () => {
        expect(helpers.lessThanNinety(5)).toBe(true)
        expect(helpers.lessThanNinety(90)).toBe(false)
        expect(helpers.lessThanNinety(232)).toBe(false)
    })
})

/**
 * @param {number} num
 * @returns {number}
 */
describe('greaterThanFifty', () => {
    it('returns true if argument > 50', () => {
        expect(helpers.greaterThanFifty(25)).toBe(false)
        expect(helpers.greaterThanFifty(50)).toBe(false)
        expect(helpers.greaterThanFifty(80)).toBe(true)
    })
})

/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
describe('add', () => {
    it('returns the sum of the two arguments', () => {
        expect(helpers.add(5, 15)).toBe(20)
        expect(helpers.add(-10, -5)).toBe(-15)
    })
})

/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
describe('subtract', () => {
    it('returns the difference of the two arguments', () => {
        expect(helpers.subtract(25, 25)).toBe(0)
        expect(helpers.subtract(-1, -5)).toBe(4)
        expect(helpers.subtract(5, -4)).toBe(9)
        expect(helpers.subtract(0, 0)).toBe(0)
    })
})

/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
describe('divide', () => {
    it('returns the quotient of the two arguments', () => {
        expect(helpers.divide(15, 15)).toBe(1)
        expect(helpers.divide(12, 6)).toBe(2)
        expect(helpers.divide(11, 2)).toBe(5.5)
    })
})

/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
describe('multiply', () => {
    it('returns the product of the two arguments', () => {
        expect(helpers.multiply(4, 4)).toBe(16)
        expect(helpers.multiply(10, -15)).toBe(-150)
        expect(helpers.multiply(11, 0)).toBe(0)
    })
})

/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
describe('getRemainder', () => {
    it('returns the remainder', () => {
        expect(helpers.getRemainder(14, 14)).toBe(0)
        expect(helpers.getRemainder(11, 5)).toBe(1)
        expect(helpers.getRemainder(11, 3)).toBe(2)
    })
})

/**
 * @param {number} num
 * @returns {bool}
 */
describe('isEven', () => {
    it('returns true if the argument is even', () => {
        expect(helpers.isEven(4)).toBe(true)
        expect(helpers.isEven(15)).toBe(false)
        expect(helpers.isEven(0)).toBe(true)
    })
})

/**
 * @param {number} num
 * @returns {bool}
 */
describe('isOdd', () => {
    it('returns true if odd', () => {
        expect(helpers.isOdd(10)).toBe(false)
        expect(helpers.isOdd(3)).toBe(true)
        expect(helpers.isOdd(0)).toBe(false)
    })
})

/**
 * @param {number} num
 * @returns {number}
 */
describe('square', () => {
    it('returns the arugment squared', () => {
        expect(helpers.square(5)).toBe(25)
        expect(helpers.square(9)).toBe(81)
        expect(helpers.square(0)).toBe(0)
        expect(helpers.square(-10)).toBe(100)
    })
})

/**
 * @param {number} num
 * @returns {number}
 */
describe('cube', () => {
    it('returns the argument cubed', () => {
        expect(helpers.cube(3)).toBe(27)
        expect(helpers.cube(0)).toBe(0)
        expect(helpers.cube(-5)).toBe(-125)
    })
})

/**
 * @param {number} num
 * @param {number} exponent
 * @returns {number}
 */
describe('raiseToPower', () => {
    it("returns the argument after raising it to the exponent's power", () => {
        expect(helpers.raiseToPower(2, 2)).toBe(4)
        expect(helpers.raiseToPower(2, 3)).toBe(8)
        expect(helpers.raiseToPower(0, 3)).toBe(0)
        expect(helpers.raiseToPower(100, 1)).toBe(100)
        expect(helpers.raiseToPower(2, -2)).toBe(0.25)
    })
})

/**
 * @param {number} num
 * @returns {number}
 */
describe('roundNumber', () => {
    it('returns a rounded argument', () => {
        expect(helpers.roundNumber(1.6)).toBe(2)
        expect(helpers.roundNumber(9)).toBe(9)
        expect(helpers.roundNumber(0.2)).toBe(0)
        expect(helpers.roundNumber(3, 3)).not.toBeNaN()
    })
})

/**
 * @param {number} num
 * @returns {number}
 */
describe('roundUp', () => {
    it('returns the argument rounded up to the next integer', () => {
        expect(helpers.roundUp(1.5)).toBe(2)
        expect(helpers.roundUp(4)).toBe(4)
        expect(helpers.roundUp(0.3)).toBe(1)
        expect(helpers.roundUp(2, 2)).not.toBeNaN()
    })
})

describe('addExclamationPoint', () => {
    it('adds an ! at the end of the str', () => {
        expect(helpers.addExclamationPoint('help')).toBe('help!')
        expect(helpers.addExclamationPoint('I Love Lambda')).toBe('I Love Lambda!')
    })
})

/**
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string}
 */
describe('combineNames', () => {
    it('returns one string composed of the original strings with a space between them', () => {
        expect(helpers.combineNames('hello', 'newman')).toBe('hello newman')
        expect(helpers.combineNames('hello', 'jerry')).toBe('hello jerry')
    })
})

/**
 * @param {string} name
 * @returns {string}
 */
describe('getGreeting', () => {
    it('returns the string and input/name', () => {
        expect(helpers.getGreeting('Ryan')).toBe('Hello Ryan!')
        expect(helpers.getGreeting('Newman')).toBe('Hello Newman!')
    })
})

/**
 * @param {number} length
 * @param {number} width
 * @returns {number}
 */
describe('getRectangleArea', () => {
    it('should return the correct area', () => {
        expect(helpers.getRectangleArea(2, 8)).toBe(16)
        expect(helpers.getRectangleArea(3, 10)).toBe(30)
        expect(helpers.getRectangleArea(0, 2)).toBe(0)
        expect(helpers.getRectangleArea(3, 3)).not.toBeLessThan(0)
    })
})

/**
 * @param {number} base
 * @param {number} height
 * @returns {number}
 */
describe('getTriangleArea', () => {
    it('should return the correct area', () => {
        expect(helpers.getTriangleArea(4, 2)).toBe(4)
        expect(helpers.getTriangleArea(0, 2)).toBe(0)
    })
})

/**
 * @param {number} radius
 * @returns {number}
 */
describe('getCircleArea', () => {
    it('should return the correct area', () => {
        expect(helpers.getCircleArea(2)).toBe(Math.PI * 2 * 2)
        expect(helpers.getCircleArea(0)).toBe(0)
        expect(helpers.getCircleArea(2)).not.toBeLessThan(0)
    })
})

/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @returns {number}
 */
describe('getRectangularPrismVolume', () => {
    it('should return the correct volume', () => {
        expect(helpers.getRectangularPrismVolume(3, 2, 1)).toBe(6)
        expect(helpers.getRectangularPrismVolume(0, 2, 9)).toBe(0)
        expect(helpers.getRectangularPrismVolume(3, 4, 2)).not.toBeLessThan(0)
    })
})
