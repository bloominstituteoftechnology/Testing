const funcs = require('./project-1');

// write your tests here
it('multiplyByTen', () => {
    expect(funcs.multiplyByTen(8)).toBe(80)
})

it('subtractFive', () => {
    expect(funcs.subtractFive(8)).toBe(3)
})

it('areSameLength', () => {
    expect(funcs.areSameLength('kenzie', 'amanda')).toBeTruthy()
})

it('areEqual', () => {
    expect(funcs.areEqual(8, 4 * 2)).toBeTruthy()
})

it('lessThanNinety', () => {
    expect(funcs.lessThanNinety(88)).toBeTruthy()
})

it('greaterThanFifty', () => {
    expect(funcs.greaterThanFifty(88)).toBeTruthy()
})

it('add', () => {
    expect(funcs.add(2, 6)).toBe(2 + 6)
})

it('subtract', () => {
    expect(funcs.subtract(10, 2)).toBe(10 - 2)
})

it('divide', () => {
    expect(funcs.divide(16, 2)).toBe(16 / 2)
})

it('multiply', () => {
    expect(funcs.multiply(2 * 4)).toBe(2 * 4)
})

it('getRemainder', () => {
    expect(funcs.getRemainder(4, 2)).toBe(4 % 2)
})

it('isEven', () => {
    expect(funcs.isEven(8)).toBeTruthy()
})

