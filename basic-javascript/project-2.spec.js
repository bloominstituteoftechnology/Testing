const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
it('getBiggest', () => {
    expect(funcs.getBiggest(6, 8)).toBe(8)
})

describe('greeting', () => {
    it('greeting in German', () => {
        expect(funcs.greeting('German')).toBe('Guten Tag!')
    })
    it('greeting in Spanish', () => {
        expect(funcs.greeting('Spanish')).toBe('Hola!')
    })
    it('greeting by Default', () => {
        expect(funcs.greeting('greeting')).toBe('Hello!')
    })
})

it('isTenOrFive', () => {
    expect(funcs.isTenOrFive(10)).toBe(true)
    expect(funcs.isTenOrFive(5)).toBe(true)
    expect(funcs.isTenOrFive(8)).toBe(false)
})

it('isInRange', () => {
    expect(funcs.isInRange(28)).toBe(true)
    expect(funcs.isInRange(8)).toBe(false)
})

