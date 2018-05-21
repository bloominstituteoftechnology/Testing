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

it('isOdd', () => {
    expect(funcs.isOdd(9)).toBeTruthy()
})

it('square', () => {
    expect(funcs.square(8, 8)).toBe(8 * 8)
})

it('cube', () => {
    expect(funcs.cube(8, 8, 8)).toBe(8 * 8 * 8)
})

it('raiseToPower', () => {
    expect(funcs.raiseToPower(8, 8)).toBe(8 ** 8)
})

it('roundNumber', () => {
    expect(funcs.roundNumber(7.8)).toBe(8)
})

it('roundUp', () => {
    expect(funcs.roundUp(7.2)).toBe(8)
})

it('addExclamationPoint', () => {
    expect(funcs.addExclamationPoint('Loo')).toBe('Loo!')
})

it('combineNames', () => {
    expect(funcs.combineNames('Chris', 'Loo')).toBe('Chris Loo')
})

it('getGreeting', () => {
    expect(funcs.getGreeting('Kenzie')).toBe('Hello Kenzie!')
})

it('getRectangleArea', () => {
    expect(funcs.getRectangleArea(2, 4)).toBe(2 * 4)
})

it('getTriangleArea', () => {
    expect(funcs.getTriangleArea(2, 4)).toBe(0.5 * 2 * 4)
})

it('getCircleArea', () => {
    expect(funcs.getCircleArea(8)).toBe(Math.PI * 64)
})

it('getRectanglePrismVolume', () => {
    expect(funcs.getRectanglePrismVolume())
})