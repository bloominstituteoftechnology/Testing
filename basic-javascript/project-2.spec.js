const funcs = require('./project-2');

// getBiggest Function Test Suite
describe('getBiggest test suite', () => {
    test('getBiggest works properly', () => {
        const input1 = 8
        const input2 = 3
        const expected = 8
        const actual = funcs.getBiggest(input1, input2)
        expect(expected).toBe(actual)
    })
})

// greeting Function Test Suite
describe('greeting test suite', () => {
    test('greeting in german', () => {
        const input1 = 'German'
        const expected = 'Guten Tag!'
        const actual = funcs.greeting(input1)
        expect(expected).toBe(actual)
    })

    test('greeting in spanish', () => {
        const input2 = 'Spanish'
        const expected = 'Hola!'
        const actual = funcs.greeting(input2)
        expect(expected).toBe(actual)
    })

    test('default greeting', () => {
        const input3 = 'Anything'
        const expected = 'Hello!'
        const actual = funcs.greeting(input3)
        expect(expected).toBe(actual)
    })
})

// isInRange Function Test Suite
describe('isInRange test suite', () => {
    test('isInRange works properly', () => {
        const input1 = 49
        const expected = true
        const actual = funcs.isInRange(input1)
        expect(expected).toBe(actual)
    })
})

// isInteger Function Test Suite
describe('isInteger test suite', () => {
    test('isInteger works properly', () => {
        const input1 = 4
        const expected = true
        const actual = funcs.isInteger(input1)
        expect(expected).toBe(actual)
    })
})
