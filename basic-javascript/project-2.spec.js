const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/


describe('project-1', () => {

    describe('getBiggest', () => {
        it('should return the bigger of the two given numbers', () => {
            expect(funcs.getBiggest(10, 20)).toBe(20)
            expect(funcs.getBiggest(-3, -5)).toBe(-3);
            expect(funcs.getBiggest('test', -5)).toBe(-5);
            expect(funcs.getBiggest(undefined, -5)).toBe(-5);
        })
    })

    describe('greeting', () => {
        it('should return a greeting that corresponds to given language', () => {
            expect(funcs.greeting('German')).toBe('Guten Tag!')
            expect(funcs.greeting('Spanish')).toBe('Hola!')
            expect(funcs.greeting(undefined)).toBe('Hello!')
        })
    })

    describe('isTenOrFive', () => {
        it('should return true if given number is 10 or 5', () => {
            expect(funcs.isTenOrFive(5)).toBeTruthy();
            expect(funcs.isTenOrFive(10)).toBeTruthy();
            expect(funcs.isTenOrFive('5')).toBe(undefined)
        })
        it('should return undefined if for non-numeric inputs', () => {
            expect(funcs.isTenOrFive('5')).toBe(undefined)
        })
    })

    describe('isInRange', () => {
        it('should return true if given number is within the range of 20-50', () => {
            expect(funcs.isInRange(55)).toBeFalsy()
            expect(funcs.isInRange(50)).toBeFalsy()
            expect(funcs.isInRange(49)).toBeTruthy()
        })
        it('should return undefined if for non-numeric inputs', () => {
            expect(funcs.isInRange('test')).toBe(undefined)
        })
    })

});