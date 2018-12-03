const helpers = require('./project-1');

// start testing!

test('It multiplies by 10 correctly', () => {
    const input = 2;
    const expected = 20;
    const actual = helpers.multiplyByTen(input);
    expect(actual).toBe(expected);
});

test('It subtracts 5 correctly', () => {
    const input = 10;
    const expected = 5;
    const actual = helpers.subtractFive(input);
    expect(actual).toBe(expected);
});

test('It accurately measures and compares the string lengths', () => {
    const input1 = 'daniel';
    const input2 = 'doniel';
    const expected = true;
    const actual = helpers.areSameLength(input1, input2);
    expect(actual).toBe(expected);
});

test('It accurately checks if inputs are equal and same type', () => {
    const input1 = 'daniel';
    const input2 = 'daniel';
    const expected = true;
    const actual = helpers.areEqual(input1, input2);
    expect(actual).toBe(expected);
});

test('It accurately checks if input is less than 90', () => {
    const input = 89;
    const expected = true;
    const actual = helpers.lessThanNinety(input);
    expect(actual).toBe(expected);
});

test('It accurately checks if input is greater than 50', () => {
    const input = 51;
    const expected = true;
    const actual = helpers.lessThanNinety(input);
    expect(actual).toBe(expected);
});

test('It correctly adds two inputs', () => {
    const input1 = 2;
    const input2 = 2;
    const expected = 4;
    const actual = helpers.add(input1, input2);
    expect(actual).toBe(expected);
});

test('It correctly subtracts input2 from input1', () => {
    const input1 = 5;
    const input2 = 3;
    const expected = 2;
    const actual = helpers.subtract(input1, input2);
    expect(actual).toBe(expected);
});

test('It correctly divides input1 by input2', () => {
    const input1 = 9;
    const input2 = 3;
    const expected = 3;
    const actual = helpers.divide(input1, input2);
    expect(actual).toBe(expected);
});

test('It correctly multiplies both inputs', () => {
    const input1 = 2;
    const input2 = 3;
    const expected = 6;
    const actual = helpers.multiply(input1, input2);
    expect(actual).toBe(expected);
});

test('It correctly returns remainder of input1 divided by input2', () => {
    const input1 = 10;
    const input2 = 3;
    const expected = 1;
    const actual = helpers.getRemainder(input1, input2);
    expect(actual).toBe(expected);
});

test('It returns true if input is even', () => {
    const input = 4;
    const expected = true;
    const actual = helpers.isEven(input);
    expect(actual).toBe(expected);
});

test('It returns true if input is odd', () => {
    const input = 5;
    const expected = true;
    const actual = helpers.isOdd(input);
    expect(actual).toBe(expected);
});

test('It correctly squares the input', () => {
    const input = 4;
    const expected = 16;
    const actual = helpers.square(input);
    expect(actual).toBe(expected);
});

test('It correctly cubes the input', () => {
    const input = 2;
    const expected = 8;
    const actual = helpers.cube(input);
    expect(actual).toBe(expected);
});

