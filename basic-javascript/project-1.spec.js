const helpers = require('./project-1');

// start testing!
it('should multiply a number by ten', () => {
    expect(helpers.multiplyByTen(2)).toBe(20);
    expect(helpers.multiplyByTen(30)).toBe(300);
});

it('should subtract 5 from a number', () => {
    expect(helpers.subtractFive(2)).toBe(-3);
    expect(helpers.subtractFive(30)).toBe(25);
});

it('should check if two strings are the same length', () => {
    expect(helpers.areSameLength('cat', 'rat')).toBeTruthy();
    expect(helpers.areSameLength('frog', 'tadpole')).toBeFalsy();
});

it('should check if two nums are equal', () => {
    expect(helpers.areEqual(11, 11)).toBeTruthy();
    expect(helpers.areEqual(11, 12)).toBeFalsy();
});

it('should check if a num is less than 90', () => {
    expect(helpers.lessThanNinety(45)).toBeTruthy();
    expect(helpers.lessThanNinety(90)).toBeFalsy();
});

it('should check if a num is greater than 50', () => {
    expect(helpers.greaterThanFifty(45)).toBeFalsy();
    expect(helpers.greaterThanFifty(90)).toBeTruthy();
});

it('should add two numbers', () => {
    expect(helpers.add(2,9)).toBe(11);
    expect(helpers.add(30,-5)).toBe(25);
});

it('should subtract the second number from the first', () => {
    expect(helpers.subtract(2, 5)).toBe(-3);
    expect(helpers.subtract(30, 9)).toBe(21);
});

it('should divide the first number by the second', () => {
    expect(helpers.divide(4, 2)).toBe(2);
    expect(helpers.divide(30, 5)).toBe(6);
});

it('should multiply two numbers together', () => {
    expect(helpers.multiply(2,6)).toBe(12);
    expect(helpers.multiply(30, -2)).toBe(-60);
});

it('should return the remainder of dividing two numbers', () => {
    expect(helpers.getRemainder(7, 5)).toBe(2);
    expect(helpers.getRemainder(30, 15)).toBe(0);
});

it('should return true if a num is even or else false', () => {
    expect(helpers.isEven(2)).toBeTruthy();
    expect(helpers.isEven(37)).toBeFalsy();
});

it('should return true if a num is odd or else false', () => {
    expect(helpers.isOdd(2)).toBeFalsy();
    expect(helpers.isOdd(11)).toBeTruthy();
});

it('should return the square of a number', () => {
    expect(helpers.square(2)).toBe(4);
    expect(helpers.square(-9)).toBe(81);
});

it('should return the cube of a number', () => {
    expect(helpers.cube(2)).toBe(8);
    expect(helpers.cube(-5)).toBe(-125);
});

it('should raise a number to the power of an exponent', () => {
    expect(helpers.raiseToPower(2, 4)).toBe(16);
    expect(helpers.raiseToPower(3, 3)).toBe(27);
});

it('should return the result of rounding a number', () => {
    expect(helpers.roundNumber(2.222)).toBe(2);
    expect(helpers.roundNumber(33.5)).toBe(34);
});