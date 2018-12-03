const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('getBiggest', () => {
    const y = 3;
    const x = 3;

    test('returns x when biggest', () => {
        expect(funcs.getBiggest(x, 2)).toBe(x)
    })

    test('returns y when biggest', () => {
        expect(funcs.getBiggest(2, y)).toBe(y)
    })

    test('returns y when same values', () => {
        expect(funcs.getBiggest(3, y)).toBe(y)
    })
})

describe('greeting', () => {

    test('expected return for german', () => {
        expect(funcs.greeting('German')).toBe('Guten Tag!')
    })

    test('expected return for spanish', () => {
        expect(funcs.greeting('Spanish')).toBe('Hola!')
    })

    test('expected default return', () => {
        expect(funcs.greeting()).toBe('Hello!')
    })
})

describe('isTenOrFive', () => {

    test('returns expected for num value 5', () => {
        expect(funcs.isTenOrFive(5)).toBe(true)
    })

    test('returns expected for num value 10', () => {
        expect(funcs.isTenOrFive(10)).toBe(true)
    })

    test('returns false when not 5 or 10', () => {
        expect(funcs.isTenOrFive(1)).toBe(false)
    })
})