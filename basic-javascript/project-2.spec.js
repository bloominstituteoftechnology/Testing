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