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
        expect(add('Hello', ' there')).toEqual('Hello there')
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
    // it('caps out at 1.7976931348623157e+308', () => {
    //     expect(subtract(Number.MAX_VALUE, 1000)).toEqual(1.7976931348623157e+308)
    // })
})

