const helpers = require('./project-1');

// start testing!
test('multiplies number by ten', () => {
    const expected = 100;
    const actual = helpers.multiplyByTen(10);
    expect(actual).toEqual(expected)
})

test('subtracts 5', () => {
    const expected = 5;
    const actual = helpers.subtractFive(10);
    expect(actual).toEqual(expected);
})

test('should be same length', () => {
    const expected = true;
    const actual = helpers.areSameLength('boot', 'toob')
    expect(actual).toEqual(expected)
})

test('are equal', () => {
    const expected = true;
    const actual = helpers.areEqual(4, 4)
    expect(actual).toEqual(expected)
})

test('should be less than 90', () => { 
    const actual = helpers.lessThanNinety(85);
    expect(actual).toBeTruthy();
})
test('should be more than 90', () => { 
    const actual = helpers.greaterThanFifty(63);
    expect(actual).toBeTruthy();
})
test('properly adds two numbers', () => {
    const expected = 4;
    const actual = helpers.add(2,2)
    expect(actual).toEqual(expected)
})
test('properly subtracts two numbers', () => {
    const expected = 6;
    const actual = helpers.subtract(8,2)
    expect(actual).toEqual(expected)
})
test('properly divides two numbers', () => {
    const expected = 4;
    const actual = helpers.divide(16,4)
    expect(actual).toEqual(expected)
})
test('properly multiplies two numbers', () => {
    const expected = 4;
    const actual = helpers.multiply(2,2)
    expect(actual).toEqual(expected)
})

