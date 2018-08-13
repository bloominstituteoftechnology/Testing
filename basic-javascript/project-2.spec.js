const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('gets the biggest number', () => {
    it('returns the largest or two ints', () => {
        expect(funcs.getBiggest(10,5)).toEqual(10)
    })
    it('Accounts for floating point values', () => {
        expect(funcs.getBiggest(10.2,10.3)).toEqual(10.3)
    })
    it('handles undefined values', () => {
        expect(funcs.getBiggest(undefined, 5)).toEqual(undefined)
        expect(funcs.getBiggest(10, undefined)).toEqual(undefined)
    })
})

describe('Offers a greeting in Spanish, German or default (English)', () => {
    it('Hello in German', () => {
        expect(funcs.greeting('German')).toMatch('Guten Tag!')
    })
    it('Hello in Spanish', () => {
        expect(funcs.greeting('Spanish')).toMatch('Hola')
    })
    it('handles undefined values', () => {
        expect(funcs.greeting(undefined)).toMatch('Hello!')
    })
})

describe('Checks if num is 10 or 5', () => {
    it('Checks for 5', () => {
        expect(funcs.isTenOrFive(5)).toBeTruthy()
        expect(funcs.isTenOrFive(2)).toBeFalsy()
    })
    it('Checks for 10', () => {
        expect(funcs.isTenOrFive(10)).toBeTruthy()
        expect(funcs.isTenOrFive(2)).toBeFalsy()
    })
    it('handles undefined values', () => {
        expect(funcs.isTenOrFive(undefined)).toBeFalsy()
    })
})

describe('Checks if number is in range from 20 to 50', () => {
    it('Checks for 5', () => {
        expect(funcs.isTenOrFive(5)).toBeTruthy()
        expect(funcs.isTenOrFive(2)).toBeFalsy()
    })
    it('Checks for 10', () => {
        expect(funcs.isTenOrFive(10)).toBeTruthy()
        expect(funcs.isTenOrFive(2)).toBeFalsy()
    })
    it('handles undefined values', () => {
        expect(funcs.isTenOrFive(undefined)).toBeFalsy()
    })
})