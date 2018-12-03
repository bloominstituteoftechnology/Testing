const helpers = require('./project-1');

// MultiplyByTen Function Test Suite

describe('multiplyByTen function', () => {
    test('multiplies * 10 properly', () => {
        const input = 1
        const expected = 10
        const actual = helpers.multiplyByTen(input)
        expect(actual).toBe(expected)
    })

})

// subtractFive Function Test Suite
describe('subtractFive function', () => {
    test('subtractFive works properly', () => {
        const input = 5
        const expected = 0
        const actual = helpers.subtractFive(input)
        expect(expected).toBe(actual)
    })
})

// areSameLength Function Test Suite
describe('areSameLength function', () => {
    test('areSameLength works properly', () => {
        const input1 = 'four'
        const input2 = 'five'
        const result = helpers.areSameLength(input1, input2)
        expect(result).toBe(true)
    })
})

// areSameLength Function Test Suite
describe('areSameLength function', () => {
    test('areSameLength works properly', () => {
        const input1 = 'four'
        const input2 = 'five'
        const result = helpers.areSameLength(input1, input2)
        expect(result).toBe(true)
    })
})

// areEqual Function Test Suite
describe('areEqual function', () => {
    test('areEqual works properly', () => {
        const input1 = 1
        const input2 = 1
        const result = helpers.areEqual(input1, input2)
        expect(result).toBe(true)
    })
})

describe('lessThanNinety function', () => {
    test('lessThanNinety works properly', () => {
        const input1 = 89
        const result = helpers.lessThanNinety(input1)
        expect(result).toBe(true)
    })
})




