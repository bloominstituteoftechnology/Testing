const helpers = require('./project-1');

// start testing!
describe('multiplybyTen', () => {
    it('should multiply a number by 10', () => {
        expect(helpers.multiplyByTen(4)).toEqual(40);
    })
})

describe('subtractFive', () => {
    it('should subtract a number by 5', () => {
        expect(helpers.subtractFive(10)).toEqual(5);
    })
})

describe('areSameLength', () => {
    it('should check if streams are same length', () => {
        expect(helpers.areSameLength('hello', 'hello')).toBe(true);
        expect(helpers.areSameLength('hello', 'goodbye')).toBe(false);
    })
})

describe('areEqual', () => {
    it('should check if numbers are same', () => {
        expect(helpers.areEqual(4, 4)).toBe(true);
        expect(helpers.areEqual(4, 3)).toBe(false);
    })
})

describe('lessThanNinety', () => {
    it('should check if number is less than 90 ', () => {
        expect(helpers.lessThanNinety(20)).toBe(true);
        expect(helpers.lessThanNinety(91)).toBe(false)
    })
})

describe('greaterThanFifty', () => {
    it('should check if number is greater than 50', () => {
        expect(helpers.greaterThanFifty(51)).toBe(true)
        expect(helpers.greaterThanFifty(-49)).toBe(false)
    })
})

describe('add', () => {
    it('should add two numbers together', () => {
        expect(helpers.add(4, 4)).toEqual(8)
    })
})

describe('subtract', () => {
    it('should add two numbers', () => {
        expect(helpers.subtract(4, 4)).toBe(0);
    })
})

describe('divide', () => {
    it('should divide two numbers', () => {
        expect(helpers.divide(6, 2)).toBe(3)
    })
    it('should return false if y is 0', () => {
        expect(helpers.divide(6, 0)).toEqual(false)
    })
})

describe('multiply', () => {
    it('should multiply two numbers', () => {
        expect(helpers.multiply(5, 5)).toBe(25)
    })
})

describe('getRemainder', () => {
    it('should get remainder of two numbers', () => {
        expect(helpers.getRemainder(5, 4)).toBe(1)
    })

    it('should return false is y is 0', () => {
        expect(helpers.getRemainder(4, 0)).toEqual(false)
    })
})

describe('isEven', () => {
    it('should return true if number / 2 === 0', () => {
        expect(helpers.isEven(20)).toEqual(true)
        expect(helpers.isEven(21)).toEqual(false)
    })
})

describe('isOdd', () => {
    it('should return false if number / 2 === 0', () => {
        expect(helpers.isOdd(5)).toEqual(true)
        expect(helpers.isOdd(4)).toEqual(false)
    })
})

describe('square', () => {
    it('should return number * number', () => {
        expect(helpers.square(4)).toBe(16)
    })
})

describe('cube', () => {
    it('should return number^3', () => {
        expect(helpers.cube(3)).toBe(27)
    })
})

describe('raiseToPower', () => {
    it('should multiply x to the power of y', () => {
        expect(helpers.raiseToPower(2, 3)).toBe(8)
    })
})

describe('roundNumber', () => {
    it('should round decimal to the nearest number', () => {
        expect(helpers.roundNumber(3.6)).toBe(4)
    })
})

describe('roundUp', () => {
    it('should round up to nearest whole number', () => {
        expect(helpers.roundUp(5.3)).toBe(6)
    })
})

describe('addExclamationPoint', () => {
    it('should add exclamation point to end of string', () => {
        expect(helpers.addExclamationPoint('hello')).toBe('hello!')
        expect(helpers.addExclamationPoint(1)).toBe('1!')
    })
})

describe('combineNames', () => {
    it('should combine two strings with space between', () => {
        expect(helpers.combineNames('Hello', 'Bob')).toBe('Hello Bob')
    })
})

describe('getGreeting', () => {
    it('should return hello plus inserted string', () => {
        expect(helpers.getGreeting('Jim')).toBe('Hello Jim!')
    })
})

describe('getRectangleArea', () => {
    it('should return x * y', () => {
        expect(helpers.getRectangleArea(4, 5)).toBe(20)
    })
})

describe('getTriangleArea', () => {
    it('should return .5 x base x height', () => {
        expect(helpers.getTriangleArea(4, 4)).toBe(8)
    })
})

describe('getCircleArea', () => {
    it('should return radius of circle', () => {
        expect(helpers.getCircleArea(5)).toBe(78.53981633974483)
    })
})

describe('getRectangularPrismVolume', () => {
    it('should return w * h * l', () => {
        expect(helpers.getRectangularPrismVolume(4,4,4)).toBe(64)
    })
})