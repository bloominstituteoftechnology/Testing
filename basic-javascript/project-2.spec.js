const funcs = require('./project-2');

// start testing!
test('Jest runs', () => {

});

describe('project-2', () => {

    describe('getBiggest', () => {
        it('return larger number', () => {
            expect(funcs.getBiggest(10,5)).toEqual(10)
        })
    })

    describe('greeting', () => {
        it('return greeting in given language', () => {
            expect(funcs.greeting('German')).toEqual('Guten Tag!')
        })
    })

    describe('isTenOrFive', () => {
        it('returns true if number is 10 or 5', () => {
            expect(funcs.isTenOrFive(10)).toBeTruthy()
        })
    })

    describe('isInRange', () => {
        it('returns true if number is between 20 and 50', () => {
            expect(funcs.isInRange(30)).toBeTruthy()
        })
    })

    describe('isInteger', () => {
        it('returns true if number is a whole number', () => {
            expect(funcs.isInteger(30)).toBeTruthy()
        })
    })
})
