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


// areEqual Function Test Suite
describe('areEqual function', () => {
    test('areEqual works properly', () => {
        const input1 = 1
        const input2 = 1
        const result = helpers.areEqual(input1, input2)
        expect(result).toBe(true)
    })
})


// lessThanNinety Function Test Suite
describe('lessThanNinety function', () => {
    test('lessThanNinety works properly', () => {
        const input1 = 89
        const result = helpers.lessThanNinety(input1)
        expect(result).toBe(true)
    })
})

// greaterThanFifty Function Test Suite
describe('greaterThanFifty function', () => {
    test('greaterThanFifty works properly', () => {
        const input1 = 51
        const result = helpers.greaterThanFifty(input1)
        expect(result).toBe(true)
    })
})

// add Function Test Suite
describe('add function', () => {
    test('add works properly', () => {
        const input1 = 51
        const input2 = 1
        const expected = 52
        const actual = helpers.add(input1, input2)
        expect(expected).toBe(actual)
    })
})

// subtract Function Test Suite
describe('subtract function', () => {
    test('subtract works properly', () => {
        const input1 = 4
        const input2 = 3
        const expected = 1
        const actual = helpers.subtract(input1, input2)
        expect(expected).toBe(actual)
    })
})

// divide Function Test Suite
describe('divide function', () => {
    test('divide works properly', () => {
        const input1 = 15
        const input2 = 3
        const expected = 5
        const actual = helpers.divide(input1, input2)
        expect(expected).toBe(actual)
    })
})

// multiply Function Test Suite
describe('multiply function', () => {
    test('multiply works properly', () => {
        const input1 = 5
        const input2 = 3
        const expected = 15
        const actual = helpers.multiply(input1, input2)
        expect(expected).toBe(actual)
    })
})

// getRemainder Function Test Suite
describe('getRemainder function', () => {
    test('getRemainder works properly', () => {
        const input1 = 12
        const input2 = 5
        const expected = 2
        const actual = helpers.getRemainder(input1, input2)
        expect(expected).toBe(actual)
    })
})


// isEven Function Test Suite
describe('isEven function', () => {
    test('isEven works properly', () => {
        const input1 = 10
        const result = helpers.isEven(input1)
        expect(result).toBe(true)
    })
})

// isOdd Function Test Suite
describe('isOdd function', () => {
    test('isOdd works properly', () => {
        const input1 = 9
        const result = helpers.isOdd(input1)
        expect(result).toBe(true)
    })
})

// square Function Test Suite
describe('square function', () => {
    test('square works properly', () => {
        const input1 = 2
        const expected = 4
        const actual = helpers.square(input1)
        expect(expected).toBe(actual)
    })
})

// cube Function Test Suite
describe('cube function', () => {
    test('cube works properly', () => {
        const input1 = 2
        const expected = 8
        const actual = helpers.cube(input1)
        expect(expected).toBe(actual)
    })
})

// raiseToPower Function Test Suite
describe('raiseToPower function', () => {
    test('raiseToPower works properly', () => {
        const num = 2
        const exponent = 3
        const expected = 8
        const actual = helpers.raiseToPower(num, exponent)
        expect(expected).toBe(actual)
    })
})

// roundNumber Function Test Suite
describe('roundNumber function', () => {
    test('roundNumber works properly', () => {
        const input = 0.7
        const expected = 1
        const actual = helpers.roundNumber(input)
        expect(expected).toBe(actual)
    })
})

// roundUp Function Test Suite
describe('roundUp function', () => {
    test('roundUp works properly', () => {
        const input = 0.3
        const expected = 1
        const actual = helpers.roundUp(input)
        expect(expected).toBe(actual)
    })
})
