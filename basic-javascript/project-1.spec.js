const helpers = require('./project-1');

// start testing!

test('multiply by Ten', () => {
    const input = 5;
    const expected = 50;
    expect(helpers.multiplyByTen(input)).toEqual(expected);
});

test('subtract by five', () => {
    const input = 10;
    const expected = 5;
    expect(helpers.subtractFive(input)).toEqual(expected);
});

test('are by same length', () => {
    const input = 'toy';
    const expected = 'dog';
    expect(helpers.areSameLength(input, expected)).toBeTruthy();
});

test('are equal', () => {
    const input = 10;
    const expected = 10;
    expect(helpers.areEqual(input, expected)).toBeTruthy();
});

test('less than ninety', () => {
    const input = 100;
    const expected = false;
    expect(helpers.lessThanNinety(input, expected)).toBe(expected);
});

test('greater than fifty', () => {
    const input = 100;
    const expected = true;
    expect(helpers.greaterThanFifty(input, expected)).toBe(expected);
});

test('add', () => {
    const input = 2;
    const inputTwo = 3;
    const expected = 5;
    expect(helpers.add(input, inputTwo)).toBe(expected);
});

test('subtract', () => {
    const input = 3;
    const inputTwo = 2;
    const expected = 1;
    expect(helpers.subtract(input, inputTwo)).toBe(expected);
});

test('divide', () => {
    const input = 6;
    const inputTwo = 2;
    const expected = 3;
    expect(helpers.divide(input, inputTwo)).toBe(expected);
});

test('multiply', () => {
    const input = 6;
    const inputTwo = 2;
    const expected = 12;
    expect(helpers.multiply(input, inputTwo)).toBe(expected);
});

test('get Remainder', () => {
    const input = 6;
    const inputTwo = 3;
    const expected = 0;
    expect(helpers.getRemainder(input, inputTwo)).toBe(expected);
});

test('is Even', () => {
    const input = 6;
    const expected = true;
    expect(helpers.isEven(input)).toBe(expected);
});

test('is Odd', () => {
    const input = 7;
    const expected = true;
    expect(helpers.isOdd(input)).toBe(expected);
});

test('square', () => {
    const input = 3;
    const expected = 9;
    expect(helpers.square(input)).toBe(expected);
});

test('cube', () => {
    const input = 3;
    const expected = 27;
    expect(helpers.cube(input)).toBe(expected);
});

test('raise To Power', () => {
    const input = 3;
    const inputTwo = 3;
    const expected = 27;
    expect(helpers.raiseToPower(input, inputTwo)).toBe(expected);
});

test('round Number', () => {
    const input = 3.7;
    const expected = 4;
    expect(helpers.roundNumber(input)).toBe(expected);
});

test('roundUp', () => {
    const input = 2.3;
    const expected = 3;
    expect(helpers.roundUp(input)).toBe(expected);
});

test('add Exclamation Point', () => {
    const input = 'heyo';
    const expected = 'heyo!';
    expect(helpers.addExclamationPoint(input)).toBe(expected);
});

test('combineNames', () => {
    const input = 'mike';
    const inputTwo = 'smith';
    const expected = 'mike smith';
    expect(helpers.combineNames(input, inputTwo)).toBe(expected);
});

test('getGreeting', () => {
    const input = 'mike';
    const expected = 'Hello mike!';
    expect(helpers.getGreeting(input)).toBe(expected);
});

test('get Rectangle Area', () => {
    const input = 3;
    const inputTwo = 2;
    const expected = 6;
    expect(helpers.getRectangleArea(input, inputTwo)).toBe(expected);
});

test('get Triangle Area', () => {
    const input = 3;
    const inputTwo = 2;
    const expected = 3;
    expect(helpers.getTriangleArea(input, inputTwo)).toBe(expected);
});

test('get Circle Area', () => {
    const input = 4;
    const expected = 50.26548245743669;
    expect(helpers.getCircleArea(input)).toBe(expected);
});

test('get Circle Area', () => {
    const input = 4;
    const inputTwo = 2;
    const inputThree = 3;
    const expected = 24;
    expect(helpers.getRectangularPrismVolume(input, inputTwo, inputThree)).toBe(expected);
});