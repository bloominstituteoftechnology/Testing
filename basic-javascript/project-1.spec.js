const { multiplyByTen, subtractFive, areSameLength, areEqual, lessThanNinety, greaterThanFifty, add, subtract, divide, multiply, getRemainder, isEven, isOdd, square, cube, raiseToPower, roundNumber, roundUp, addExclamationPoint, combineNames, getGreeting, getRectangleArea, getTriangleArea, getCircleArea, getRectangularPrismVolume } = require('./project-1');

// start testing!
test('multiply by ten', () => {
    const input = 10
    const expected = 100
    expect(multiplyByTen(input)).toEqual(expected)
})

test('substract five', () => {
    const input = 25
    const expected = 20
    expect(subtractFive(input)).toEqual(expected)
})
test('same length strings', () => {
    const input1 = 'jimmy'
    const input2 = 'timmy'
    expect(areSameLength(input1, input2)).toBeTruthy();
})
test('x and y are equal', () => {
    const inputX = 5
    const inputY = 5
    expect(areEqual(inputX, inputY)).toBeTruthy();
})
test('less than ninety', () => {
    const num = 45
    expect(lessThanNinety(num)).toEqual(true)
})
test('greaterThanFifty', () => {
    const num = 55
    expect(greaterThanFifty(num)).toBeTruthy()
})
test('add', () => {
    const numX = 2
    const numY = 10
    const expected = 12
    expect(add(numX, numY)).toEqual(expected)
})
test('subtract', () => {
    const numX = 2
    const numY = 8
    const expected = -6
    expect(subtract(numX, numY)).toEqual(expected)
})
test('divide', () => {
    const numX = 20
    const numY = 5
    const expected = 4
    expect(divide(numX, numY)).toEqual(expected)
})