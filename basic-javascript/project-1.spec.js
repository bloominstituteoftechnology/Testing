const {
    multiplyByTen,
    subtractFive,
    areSameLength,
    areEqual,
    lessThanNinety,
    greaterThanFifty,
    add,
    subtract,
    divide,
    multiply,
    getRemainder,
    isEven,
    isOdd,
    square,
    cube,
    raiseToPower,
    roundNumber,
    roundUp,
    addExclamationPoint,
    combineNames,
    getGreeting,
    getRectangleArea,
    getTriangleArea,
    getCircleArea,
    getRectangularPrismVolume
} = require('./project-1');

// start testing!

test('multiply by Ten', () => {
    const input = 10;
    const expected = 100;
    expect(multiplyByTen(input)).toEqual(expected);
});

test('subtract by five', () => {
    const input = 10;
    const expected = 5;
    expect(subtractFive(input)).toEqual(expected);
});

test('are by same length', () => {
    const input = 'toy';
    const expected = 'dog';
    expect(areSameLength(input, expected)).toBeTruthy();
});

test('are equal', () => {
    const input = 20;
    const expected = 20;
    expect(areEqual(input, expected)).toBeTruthy();
});

test('less than ninety', () => {
    const input = 100;
    const expected = false;
    expect(lessThanNinety(input, expected)).toBe(expected);
});

test('greater than fifty', () => {
    const input = 100;
    const expected = true;
    expect(greaterThanFifty(input, expected)).toBe(expected);
});

test('add', () => {
    const input = 2;
    const inputTwo = 3;
    const expected = 5;
    expect(add(input, inputTwo)).toBe(expected);
});

test('subtract', () => {
    const input = 3;
    const inputTwo = 2;
    const expected = 1;
    expect(subtract(input, inputTwo)).toBe(expected);
});

test('divide', () => {
    const input = 6;
    const inputTwo = 2;
    const expected = 3;
    expect(divide(input, inputTwo)).toBe(expected);
});

test('multiply', () => {
    const input = 6;
    const inputTwo = 2;
    const expected = 12;
    expect(multiply(input, inputTwo)).toBe(expected);
});

test('get Remainder', () => {
    const input = 6;
    const inputTwo = 3;
    const expected = 0;
    expect(getRemainder(input, inputTwo)).toBe(expected);
});

test('is Even', () => {
    const input = 6;
    const expected = true;
    expect(isEven(input)).toBe(expected);
});

test('is Odd', () => {
    const input = 7;
    const expected = true;
    expect(isOdd(input)).toBe(expected);
});

test('square', () => {
    const input = 3;
    const expected = 9;
    expect(square(input)).toBe(expected);
});

test('cube', () => {
    const input = 3;
    const expected = 27;
    expect(cube(input)).toBe(expected);
});

test('raise To Power', () => {
    const input = 3;
    const inputTwo = 3;
    const expected = 27;
    expect(raiseToPower(input, inputTwo)).toBe(expected);
});

test('round Number', () => {
    const input = 3.7;
    const expected = 4;
    expect(roundNumber(input)).toBe(expected);
});

test('roundUp', () => {
    const input = 2.3;
    const expected = 3;
    expect(roundUp(input)).toBe(expected);
});

test('add Exclamation Point', () => {
    const input = 'heyy';
    const expected = 'heey!';
    expect(addExclamationPoint(input)).toBe(expected);
});

test('combineNames', () => {
    const input = 'Lennix';
    const inputTwo = 'Sployte';
    const expected = 'Lennix Sployte';
    expect(combineNames(input, inputTwo)).toBe(expected);
});

test('getGreeting', () => {
    const input = 'Lennix';
    const expected = 'Hello Lennix!';
    expect(getGreeting(input)).toBe(expected);
});

test('get Rectangle Area', () => {
    const input = 3;
    const inputTwo = 2;
    const expected = 6;
    expect(getRectangleArea(input, inputTwo)).toBe(expected);
});

test('get Triangle Area', () => {
    const input = 3;
    const inputTwo = 2;
    const expected = 3;
    expect(getTriangleArea(input, inputTwo)).toBe(expected);
});

test('get Circle Area', () => {
    const input = 4;
    const expected = 50.26548245743669;
    expect(getCircleArea(input)).toBe(expected);
});

test('get Circle Area', () => {
    const input = 4;
    const inputTwo = 2;
    const inputThree = 3;
    const expected = 24;
    expect(getRectangularPrismVolume(input, inputTwo, inputThree)).toBe(expected);
});