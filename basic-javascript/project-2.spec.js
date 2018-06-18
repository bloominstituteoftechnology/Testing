const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('getBiggest', () => {
    let testFunction = funcs.getBiggest
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction(10, 20)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns 9 given 9 + 2', () => {
        let actual = testFunction(9, 2)
        let expected = 9
        expect(actual).toBe(expected)
    })
    it('returns 20 given 9 + 20', () => {
        let actual = testFunction(9, 20)
        let expected = 20
        expect(actual).toBe(expected)
    })
})

describe('greeting', () => {
    let testFunction = funcs.greeting
    it('returns a string', () => {
        // arrange
        let expected = "string"
        // act
        let actual = typeof testFunction('German')
        // assert
        expect(actual).toBe(expected)
    })
    it('returns Guten Tag! if passed German', () => {
        let actual = testFunction('German')
        let expected = 'Guten Tag!'
        expect(actual).toBe(expected)
    })
    it('returns Hola! if passed Spanish', () => {
        let actual = testFunction('Spanish')
        let expected = 'Hola!'
        expect(actual).toBe(expected)
    })
})

describe('isTenOrFive', () => {
    let testFunction = funcs.isTenOrFive
    it('returns a boolean', () => {
        // arrange
        let expected = "boolean"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns true if passed 10', () => {
        let actual = testFunction(10)
        let expected = true
        expect(actual).toBe(expected)
    })
    it('returns true given 5', () => {
        let actual = testFunction(5)
        let expected = true
        expect(actual).toBe(expected)
    })
    it('returns false given number != 5 || 10', () => {
        let actual = testFunction(7)
        let expected = false
        expect(actual).toBe(expected)
    })
})

describe('isInRange', () => {
    let testFunction = funcs.isInRange
    it('returns a boolean', () => {
        // arrange
        let expected = "boolean"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns true if passed number < 50 && > 20', () => {
        let actual = testFunction(30)
        let expected = true
        expect(actual).toBe(expected)
    })
    it('returns false given number >= 50 || <= 20', () => {
        let actual = testFunction(5)
        let expected = false
        expect(actual).toBe(expected)
    })
})

describe('isInteger', () => {
    let testFunction = funcs.isInteger
    it('returns a boolean', () => {
        // arrange
        let expected = "boolean"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns true if passed int', () => {
        let actual = testFunction(30)
        let expected = true
        expect(actual).toBe(expected)
    })
    it('returns false given a decimal', () => {
        let actual = testFunction(5.5)
        let expected = false
        expect(actual).toBe(expected)
    })
    it('returns false given a string', () => {
        let actual = testFunction("asdf")
        let expected = false
        expect(actual).toBe(expected)
    })
})

describe('fizzBuzz', () => {
    let testFunction = funcs.fizzBuzz
    it('returns a boolean', () => {
        // arrange
        let expected = "string"
        // act
        let actual = typeof testFunction(10)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns "fizzbuzz" if passed number w/ number %5 && %3 === 0', () => {
        let actual = testFunction(30)
        let expected = 'fizzbuzz'
        expect(actual).toBe(expected)
    })
    it('returns "buzz" if passed number w/ number %5 === 0', () => {
        let actual = testFunction(5)
        let expected = 'buzz'
        expect(actual).toBe(expected)
    })
    it('returns "fizz" if passed number w/ number %5 === 0', () => {
        let actual = testFunction(3)
        let expected = 'fizz'
        expect(actual).toBe(expected)
    })
})

describe('isPrime', () => {
    let testFunction = funcs.isPrime
    it('returns a boolean', () => {
        // arrange
        let expected = "boolean"
        // act
        let actual = typeof testFunction(10, 20)
        // assert
        expect(actual).toBe(expected)
    })
    it('returns false given num <= 1', () => {
        let actual = testFunction(0)
        let expected = false
        expect(actual).toBe(expected)
    })
    it('returns true given 7', () => {
        let actual = testFunction(7)
        let expected = true
        expect(actual).toBe(expected)
    })
})

describe('returnFirst', () => {
    let testFunction = funcs.returnFirst
    it('expecting value toBeDefined', () => {
        // act
        let actual = testFunction([10, 20])
        // assert
        expect(actual).toBeDefined()
    })
    it('returns 1 given [10]', () => {
        let actual = testFunction([10])
        let expected = 10
        expect(actual).toBe(expected)
    })
    it('returns "blabla" given ["blabla",74,2]', () => {
        let actual = testFunction(["blabla", 74, 2])
        let expected = "blabla"
        expect(actual).toBe(expected)
    })
})

describe('getArrayLength', () => {
    let testFunction = funcs.getArrayLength
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction([])
        // assert
        expect(actual).toBe(expected)
    })
    it('returns 1 given [10]', () => {
        let actual = testFunction([10])
        let expected = 1
        expect(actual).toBe(expected)
    })
    it('returns 3 given ["blabla",74,2]', () => {
        let actual = testFunction(["blabla", 74, 2])
        let expected = 3
        expect(actual).toBe(expected)
    })
})

describe('getArrayLength', () => {
    let testFunction = funcs.getArrayLength
    it('returns a number', () => {
        // arrange
        let expected = "number"
        // act
        let actual = typeof testFunction([])
        // assert
        expect(actual).toBe(expected)
    })
    it('returns 1 given [10]', () => {
        let actual = testFunction([10])
        let expected = 1
        expect(actual).toBe(expected)
    })
    it('returns 3 given ["blabla",74,2]', () => {
        let actual = testFunction(["blabla", 74, 2])
        let expected = 3
        expect(actual).toBe(expected)
    })
})

describe('incrementByOne', () => {
    let testFunction = funcs.incrementByOne
    // Testing for array output
    it('returns an array', () => {
        // arrange
        let expected = "object"
        // act
        let actual = typeof testFunction([])
        // assert
        expect(actual).toBe(expected)
    })
    it('returns an array #2', () => {
        // act
        let actual = testFunction([])
        // assert
        expect(actual).toHaveLength(0)
    })
    it('returns array w/ each value incremented by one', () => {
        let actual = testFunction([10, 11, 12])
        let expected = [11, 12, 13]
        expect(actual).toEqual(expected)
    })
})

describe('addItemToArray', () => {
    let testFunction = funcs.addItemToArray
    // Testing for array output
    it('returns an array', () => {
        // arrange
        let expected = "object"
        // act
        let actual = typeof testFunction([])
        // assert
        expect(actual).toBe(expected)
    })
    it('returns an array #2', () => {
        // act
        let actual = testFunction([], 13)
        // assert
        expect(actual).toHaveLength(1)
    })
    it('returns array w/ item added', () => {
        let actual = testFunction([10, 11, 12], 13)
        let expected = [10, 11, 12, 13]
        expect(actual).toEqual(expected)
    })
})

describe('addItemToFront', () => {
    let testFunction = funcs.addItemToFront
    // Testing for array output
    it('returns an array', () => {
        // arrange
        let expected = "object"
        // act
        let actual = typeof testFunction([])
        // assert
        expect(actual).toBe(expected)
    })
    it('returns an array #2', () => {
        // act
        let actual = testFunction([], 13)
        // assert
        expect(actual).toHaveLength(1)
    })
    it('returns array w/ item in front', () => {
        let actual = testFunction([10, 11, 12], 13)
        let expected = [13, 10, 11, 12]
        expect(actual).toEqual(expected)
    })
})

describe('addItemToFront', () => {
    let testFunction = funcs.addItemToFront
    // Testing for array output
    it('returns a string', () => {
        // arrange
        let expected = "string"
        // act
        let actual = typeof testFunction(['bla'])
        // assert
        expect(actual).toBe(expected)
    })
    it('returns array w/ item in front', () => {
        let actual = testFunction([10, 11, 12], 13)
        let expected = [13, 10, 11, 12]
        expect(actual).toEqual(expected)
    })
})