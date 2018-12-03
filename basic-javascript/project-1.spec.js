const { multiplyByTen, subtractFive } = require('./project-1');

// start testing!
test('multiply by then', () => {
    const input = 10
    const expected = 100
    expect(multiplyByTen(input)).toEqual(expected)
})

test('substract five', () => {
    const input = 25
    const expected = 20
    expect(subtractFive(input)).toEqual(expected)
})
