const funcs = require('./project-1');

// write your tests here

describe('multiplyByTen', () => {
    let testFunction = funcs.multiplyByTen
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns 50 if given 5', () => {
        let expected = 50
        let actual = testFunction(5)
        expect(actual).toBe(expected)
    })
    it('return -50 if given -5', () => {
        let expected = -50
        let actual = testFunction(-5)
        expect(actual).toBe(expected)
    })
    it('return 0 if given 0', () => {
        let expected = 0
        let actual = testFunction(0)
        expect(actual).toBe(expected)
    })
})

describe('subtractFive', () => {
    let testFunction = funcs.subtractFive
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns 0 if given 5', () => {
        let expected = 0
        let actual = testFunction(5)
        expect(actual).toBe(expected)
    })
    it('return -5 if given 0', () => {
        let expected = -5
        let actual = testFunction(0)
        expect(actual).toBe(expected)
    })
    it('return -10 if given -5', () => {
        let expected = -10
        let actual = testFunction(-5)
        expect(actual).toBe(expected)
    })
})

describe('areSameLength', () => {
    let testFunction = funcs.areSameLength
    it('returns a boolean', () => {
        let expected = "boolean"
        let actual = typeof testFunction("blabla", "blubbblubb")
        expect(actual).toBe(expected)
    })
    it('return true if both str have same length', () => {
        let expected = true
        let actual = testFunction("blabla", "blabla")
        expect(actual).toBe(expected)
    })
    it('return false if str have different length', () => {
        let expected = false
        let actual = testFunction("blablaa", "blabla")
        expect(actual).toBe(expected)
    })
})

describe('areEqual', () => {
    let testFunction = funcs.areEqual
    it('returns a boolean', () => {
        let expected = "boolean"
        let actual = typeof testFunction("blabla", "blubbblubb")
        expect(actual).toBe(expected)
    })
    it('return true if both arguments are equal', () => {
        let expected = true
        let actual = testFunction(51, 51)
        expect(actual).toBe(expected)
    })
    it('return false if arguments are inequal', () => {
        let expected = false
        let actual = testFunction("blablaa", "blabla")
        expect(actual).toBe(expected)
    })
})

describe('lessThanNinety', () => {
    let testFunction = funcs.lessThanNinety
    it('returns a boolean', () => {
        let expected = "boolean"
        let actual = typeof testFunction("blabla", "blubbblubb")
        expect(actual).toBe(expected)
    })
    it('return true if n < 90', () => {
        let expected = true
        let actual = testFunction(89)
        expect(actual).toBe(expected)
    })
    it('return false if n >= 90', () => {
        let expected = false
        let actual = testFunction(90)
        expect(actual).toBe(expected)
    })
    it('return false if n=! typeof number', () => {
        let expected = false
        let actual = testFunction(NaN)
        expect(actual).toBe(expected)
    })
})

describe('greaterThanFifty', () => {
    let testFunction = funcs.greaterThanFifty
    it('returns a boolean', () => {
        let expected = "boolean"
        let actual = typeof testFunction("blabla", "blubbblubb")
        expect(actual).toBe(expected)
    })
    it('return true if n > 50', () => {
        let expected = true
        let actual = testFunction(51)
        expect(actual).toBe(expected)
    })
    it('return false if n <= 50', () => {
        let expected = false
        let actual = testFunction(50)
        expect(actual).toBe(expected)
    })
    it('return false if n=! typeof number', () => {
        let expected = false
        let actual = testFunction(NaN)
        expect(actual).toBe(expected)
    })
})

describe('add', () => {
    let testFunction = funcs.add
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns number > 0 if given 2 positive arguments', () => {
        let actual = testFunction(5, 2)
        expect(actual).toBeGreaterThan(0)
    })
    it('return number < 0 if given 2 negative arguments', () => {
        let actual = testFunction(-5, -10)
        expect(actual).toBeLessThan(0)
    })
    it('return number < 0 if negative argument > positive argument', () => {
        let actual = testFunction(4, -5)
        expect(actual).toBeLessThan(0)
    })
    it('return number > 0 if negative argument < positive argument', () => {
        let actual = testFunction(6, -5)
        expect(actual).toBeGreaterThan(0)
    })
    it('return 4 given arg 2 + arg 2 ', () => {
        let actual = testFunction(2, 2)
        let expected = 4
        expect(actual).toBe(expected)
    })
})

describe('subtract', () => {
    let testFunction = funcs.subtract
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns number < 0 if 2 argument > 1st argument', () => {
        let actual = testFunction(5, 10)
        expect(actual).toBeLessThan(0)
    })
    it('return number > 0 if given 2 negative arguments && argument 2 > argument 1', () => {
        let actual = testFunction(-5, -10)
        expect(actual).toBeGreaterThan(0)
    })
    it('return number < 0 if given 2 negative arguments && argument 2 < argument 1', () => {
        let actual = testFunction(-10, -5)
        expect(actual).toBeLessThan(0)
    })
    it('return number > 0 if negative argument < positive argument', () => {
        let actual = testFunction(6, -5)
        expect(actual).toBeGreaterThan(0)
    })
    it('return 4 given arg 6 + arg 2 ', () => {
        let actual = testFunction(6, 2)
        let expected = 4
        expect(actual).toBe(expected)
    })
    it('return 4 given arg -2 + arg -6 ', () => {
        let actual = testFunction(-2, -6)
        let expected = 4
        expect(actual).toBe(expected)
    })
})

describe('divide', () => {
    let testFunction = funcs.divide
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns 2 given arg 4 + arg 2', () => {
        let actual = testFunction(4, 2)
        let expected = 2
        expect(actual).toBe(expected)
    })
    it('return number < 0 if given 1 negative argument', () => {
        let actual = testFunction(5, -10)
        expect(actual).toBeLessThan(0)
    })
    it('return number > 0 if given 2 negative arguments', () => {
        let actual = testFunction(-10, -5)
        expect(actual).toBeGreaterThan(0)
    })
})

describe('multiply', () => {
    let testFunction = funcs.multiply
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns 8 given arg 4 + arg 2', () => {
        let actual = testFunction(4, 2)
        let expected = 8
        expect(actual).toBe(expected)
    })
    it('return number < 0 if given 1 negative argument', () => {
        let actual = testFunction(5, -10)
        expect(actual).toBeLessThan(0)
    })
    it('return number > 0 if given 2 negative arguments', () => {
        let actual = testFunction(-10, -5)
        expect(actual).toBeGreaterThan(0)
    })
})

describe('Remainder', () => {
    let testFunction = funcs.getRemainder
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns 2 given arg 22 + arg 10', () => {
        let actual = testFunction(22, 10)
        let expected = 2
        expect(actual).toBe(expected)
    })
    it('return number = 0 if arg 1 / arg 2 = 0', () => {
        let actual = testFunction(10, 2)
        expect(actual).toBe(0)
    })
    it('return number === arg1  if arg2 > arg1', () => {
        let actual = testFunction(20, 25)
        let expected = 20
        expect(actual).toBe(expected)
    })
})

describe('isEven', () => {
    let testFunction = funcs.isEven
    it('returns a boolean', () => {
        let expected = "boolean"
        let actual = typeof testFunction("blabla", "blubbblubb")
        expect(actual).toBe(expected)
    })
    it('return true if arg 1 % arg 2 === 0', () => {
        let expected = true
        let actual = testFunction(2, 2)
        expect(actual).toBe(expected)
    })
    it('return false if arg 1 % arg 2 != 0', () => {
        let expected = false
        let actual = testFunction(3, 2)
        expect(actual).toBe(expected)
    })
})


describe('isOdd', () => {
    let testFunction = funcs.isOdd
    it('returns a boolean', () => {
        let expected = "boolean"
        let actual = typeof testFunction("blabla", "blubbblubb")
        expect(actual).toBe(expected)
    })
    it('return false if arg 1 % arg 2 === 0', () => {
        let expected = false
        let actual = testFunction(2, 2)
        expect(actual).toBe(expected)
    })
    it('return true if arg 1 % arg 2 != 0', () => {
        let expected = true
        let actual = testFunction(3, 2)
        expect(actual).toBe(expected)
    })
})

describe('square', () => {
    let testFunction = funcs.square
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns 9 given arg 3', () => {
        let actual = testFunction(3)
        let expected = 9
        expect(actual).toBe(expected)
    })
    it('return number > 0', () => {
        let actual = testFunction(4)
        expect(actual).toBeGreaterThan(0)
    })
})

describe('cube', () => {
    let testFunction = funcs.cube
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns 27 given arg 3', () => {
        let actual = testFunction(3)
        let expected = 27
        expect(actual).toBe(expected)
    })
    it('return number > 0', () => {
        let actual = testFunction(4)
        expect(actual).toBeGreaterThan(0)
    })
})

describe('raiseToPower', () => {
    let testFunction = funcs.raiseToPower
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns 9', () => {
        let actual = testFunction(3, 2)
        let expected = 9
        expect(actual).toBe(expected)
    })
    it('return number > 0', () => {
        let actual = testFunction(4, 2)
        expect(actual).toBeGreaterThan(0)
    })
    it('return Nan if either arg is undefined', () => {
        let actual = testFunction(4)
        let expected = NaN
        expect(actual).toBe(expected)
    })
})

describe('roundNumber', () => {
    let testFunction = funcs.roundNumber
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns 9 given 9.2', () => {
        let actual = testFunction(9.2)
        let expected = 9
        expect(actual).toBe(expected)
    })
    it('returns 10 given 9.5', () => {
        let actual = testFunction(9.5)
        let expected = 10
        expect(actual).toBe(expected)
    })
})

describe('roundUp', () => {
    let testFunction = funcs.roundUp
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns 10 given 9.2', () => {
        let actual = testFunction(9.2)
        let expected = 10
        expect(actual).toBe(expected)
    })
    it('returns 10 given 9.5', () => {
        let actual = testFunction(9.5)
        let expected = 10
        expect(actual).toBe(expected)
    })
    it('returns 10 given 10', () => {
        let actual = testFunction(9.5)
        let expected = 10
        expect(actual).toBe(expected)
    })
})

describe('addExclamationPoint', () => {
    let testFunction = funcs.addExclamationPoint
    it('returns a string', () => {
        // arrange
        let expected = "string"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('has exclamation mark at the end given string', () => {
        let actual = testFunction('yeeeeehaaaaa')
        let expected = 'yeeeeehaaaaa!'
        expect(actual).toBe(expected)
    })
})

describe('combineNames', () => {
    let testFunction = funcs.combineNames
    it('returns a string', () => {
        // arrange
        let expected = "string"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('Returns first + lastName', () => {
        let actual = testFunction('Peter', 'Chow')
        let expected = 'Peter Chow'
        expect(actual).toBe(expected)
    })
})

describe('getGreeting', () => {
    let testFunction = funcs.getGreeting
    it('returns a string', () => {
        // arrange
        let expected = "string"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('Returns a personal greeting', () => {
        let firstName = 'Peter'
        let actual = testFunction(firstName)
        let expected = `Hello ${firstName}!`
        expect(actual).toBe(expected)
    })
})

describe('getRectangleArea', () => {
    let testFunction = funcs.getRectangleArea
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns 21 given 3 + 7', () => {
        let actual = testFunction(3, 7)
        let expected = 21
        expect(actual).toBe(expected)
    })
})

describe('getTriangleArea', () => {
    let testFunction = funcs.getTriangleArea
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns 10.5 given 3 + 7', () => {
        let actual = testFunction(3, 7)
        let expected = 10.5
        expect(actual).toBe(expected)
    })
})

describe('getCircleArea', () => {
    let testFunction = funcs.getCircleArea
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns 28.274333882308138 given 3', () => {
        let actual = testFunction(3)
        let expected = 28.274333882308138
        expect(actual).toBe(expected)
    })
    it('returns number > 0', () => {
        let actual = testFunction(3)
        expect(actual).toBeGreaterThan(0)
    })
})

describe('getRectangularPrismVolume', () => {
    let testFunction = funcs.getRectangularPrismVolume
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns 18 given 3 + 3 2', () => {
        let actual = testFunction(3, 3, 2)
        let expected = 18
        expect(actual).toBe(expected)
    })
    it('returns number > 0', () => {
        let actual = testFunction(3, 2, 5)
        expect(actual).toBeGreaterThan(0)
    })
})