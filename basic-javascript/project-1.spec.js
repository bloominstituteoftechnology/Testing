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