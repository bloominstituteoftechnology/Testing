const helpers = require('./project-1');

it('should return a number multiplied by ten', () => {
    expect(helpers.multiplyByTen(3)).toBe(30);
    expect(helpers.multiplyByTen(4)).toBe(40);
    expect(helpers.multiplyByTen(2)).toBe(20);
    expect(helpers.multiplyByTen('hello')).toBe(null)
});

it('should return a number minus five', () => {
    expect(helpers.subtractFive(5)).toBe(0);
    expect(helpers.subtractFive(14)).toBe(9);
    expect(helpers.subtractFive(0)).toBe(-5);
    expect(helpers.subtractFive('hello')).toBe(null);
});

it('should return whether two strings\' lengths are equal', () => {
    expect(helpers.areSameLength('str', 'str1')).toBe(false);
    expect(helpers.areSameLength('str', 'str')).toBe(true);
    expect(helpers.areSameLength('hello', 'mello')).toBe(true);
});

it('should check if two values are equal', () => {
    expect(helpers.areEqual(1, 1)).toBe(true);
    expect(helpers.areEqual(1, '1')).toBe(false);
    expect(helpers.areEqual(1, null)).toBe(false);
});

it('should return whether a number is less than ninety', () => {
    expect(helpers.lessThanNinety(40)).toBe(true);
    expect(helpers.lessThanNinety(100)).toBe(false);
});

it('should return whether a number is greater than fifty', () => {
    expect(helpers.greaterThanFifty(70)).toBe(true);
    expect(helpers.greaterThanFifty(undefined)).toBe(false);
    expect(helpers.greaterThanFifty(49.9999)).toBe(false);
});

it('should return the sum of two values', () => {
    expect(helpers.add(1, 3)).toBe(4);
    expect(helpers.add(1, -3)).toBe(-2);
    expect(helpers.add(1, undefined)).toBe(NaN);
});

it('should return the difference of two values', () => {
    expect(helpers.subtract(5, 4)).toBe(1);
    expect(helpers.subtract(500, 4)).toBe(496);
    expect(helpers.subtract(5, 40)).toBe(-35);
});

it('should return the division of two values', () => {
    expect(helpers.divide(4, 3)).toBeCloseTo(1.33);
    expect(helpers.divide(6, 0)).toBe(Infinity);
    expect(helpers.divide(8, 2)).toBe(4);
});

it('should return two values multiplied together', () => {
    expect(helpers.multiply(2, 2)).toBe(4);
    expect(helpers.multiply(2, 200)).toBe(400);
    expect(helpers.multiply(3, 5)).toBe(15);
});

it('should return division remainder of two values', () => {
    expect(helpers.getRemainder(6, 4)).toBe(2);
    expect(helpers.getRemainder(10, 3)).toBe(1);
    expect(helpers.getRemainder(15, 8)).toBe(7);
});

it('should return whether the value is even', () => {
    expect(helpers.isEven(5)).toBe(false);
    expect(helpers.isEven(2)).toBe(true);
    expect(helpers.isEven(undefined)).toBe(false);
});

it('should return whether the value is odd', () => {
    expect(helpers.isOdd(5)).toBe(true);
    expect(helpers.isOdd(2)).toBe(false);
    expect(helpers.isOdd(24)).toBe(false);
});

it('should return the square of the value', () => {
    expect(helpers.square(5)).toBe(25);
    expect(helpers.square(12)).toBe(144);
    expect(helpers.square(3)).toBe(9);
});

it('should return the cube of the value', () => {
    expect(helpers.cube(3)).toBe(27);
    expect(helpers.cube(4)).toBe(64);
    expect(helpers.cube(5)).toBe(125);
});

it('should return Math.pow(num, exponent)', () => {
    expect(helpers.raiseToPower(3, 2)).toBe(9);
    expect(helpers.raiseToPower(2, 4)).toBe(16);
    expect(helpers.raiseToPower(5, 3)).toBe(125);
});

it('should return the rounded number based on rounding rules', () => {
    expect(helpers.roundNumber(1.2)).toBe(1);
    expect(helpers.roundNumber(5.45)).toBe(5);
    expect(helpers.roundNumber(7.7)).toBe(8);
});

it('should return the number rounded up', () => {
    expect(helpers.roundUp(1.2)).toBe(2);
    expect(helpers.roundUp(5.45)).toBe(6);
    expect(helpers.roundUp(7.7)).toBe(8);
});

it('should return a string with an exclamation point added', () => {
    expect(helpers.addExclamationPoint('test')).toBe('test!');
    expect(helpers.addExclamationPoint('hello, world')).toBe('hello, world!');
    expect(helpers.addExclamationPoint('tonight')).toBe('tonight!');
});

it('should return first and last name combined', () => {
    expect(helpers.combineNames('Grant', 'Reighard')).toBe('Grant Reighard');
    expect(helpers.combineNames('Ashwin', 'Sundararajan')).toBe('Ashwin Sundararajan');
    expect(helpers.combineNames('John', 'O\'Rourke')).toBe('John O\'Rourke');
});

it('should return \'Hello name!\'', () => {
    expect(helpers.getGreeting('Grant')).toBe('Hello Grant!');
    expect(helpers.getGreeting('Ashwin')).toBe('Hello Ashwin!');
    expect(helpers.getGreeting('John')).toBe('Hello John!');
});

it('should return length times width', () => {
    expect(helpers.getRectangleArea(10, 20)).toBe(200);
    expect(helpers.getRectangleArea(5, 100)).toBe(500);
    expect(helpers.getRectangleArea(30, 20)).toBe(600);
});

it('should return half of base times height', () => {
    expect(helpers.getTriangleArea(5, 10)).toBe(25);
    expect(helpers.getTriangleArea(10, 10)).toBe(50);
    expect(helpers.getTriangleArea(20, 13)).toBe(130);
});

it('should return Pi times radius squared', () => {
    expect(helpers.getCircleArea(5)).toBeCloseTo(78.54);
    expect(helpers.getCircleArea(100)).toBeCloseTo(31415.93);
    expect(helpers.getCircleArea(20)).toBeCloseTo(1256.637);
});

it('should return length times width times height', () => {
    expect(helpers.getRectangularPrismVolume(10, 10, 10)).toBe(1000);
    expect(helpers.getRectangularPrismVolume(5, 10, 25)).toBe(1250);
    expect(helpers.getRectangularPrismVolume(3, 4, 5)).toBe(60);
    expect(helpers.getRectangularPrismVolume('test', 5, 6)).toBe(null);
});
