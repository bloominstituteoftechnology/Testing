const helpers = require('./project-1');

// start testing!

it('should multiply a number by 10', () => {
    expect(helpers.multiplyByTen(10)).toBe(100);
    expect(helpers.multiplyByTen(100)).toBe(1000);
});

it('should subtract a number by 5', () => {
    expect(helpers.subtractFive(6)).toBe(1);
    expect(helpers.subtractFive(5)).toBe(0);
});
 it('should check if two strings have equal lengths', () => {
    expect(helpers.areSameLength('abc', 'def')).toBe(true);
    expect(helpers.areSameLength('abcd', 'def')).toBe(false);
});
 it('should check if two numbers are the same', () => {
    expect(helpers.areEqual(8, 9)).toBe(false);
    expect(helpers.areEqual('8', '8')).toBe(true);
});
 it('should check if a number is greater than 50', () => {
    expect(helpers.greaterThanFifty(49)).toBe(false);
    expect(helpers.greaterThanFifty(50)).toBe(false);
    expect(helpers.greaterThanFifty(51)).toBe(true);
});
 it('should add two numbers and return its value', () => {
    expect(helpers.add(1,1)).toBe(2);
    expect(helpers.add(2,2)).toBe(4);
});
 it('should subtract two numbers and return its value', () => {
    expect(helpers.subtract(2,2)).toBe(0);
    expect(helpers.subtract(4,2)).toBe(2);
});
 it('should divide two numbers and return its value', () => {
    expect(helpers.divide(2,1)).toBe(2);
    expect(helpers.divide(10,2)).toBe(5);
});
 it('should multiply two numbers and return its value', () => {
    expect(helpers.multiply(2,4)).toBe(8);
    expect(helpers.multiply(3,3)).toBe(9);
});
 it('should get the remainder of two numbers', () => {
    expect(helpers.getRemainder(2,2)).toBe(0);
    expect(helpers.getRemainder(5,2)).toBe(1);
});
 it('should check if a number is an even number', () => {
    expect(helpers.isEven(2)).toBe(true);
    expect(helpers.isEven(1)).toBe(false);
});
 it('should check if a number is an odd number', () => {
    expect(helpers.isOdd(1)).toBe(true);
    expect(helpers.isOdd(2)).toBe(false);
});
 it('should square a number', () => {
    expect(helpers.square(3)).toBe(9);
    expect(helpers.square(5)).toBe(25);
});
 it('should cube a number', () => {
    expect(helpers.cube(2)).toBe(8);
    expect(helpers.cube(3)).toBe(27);
});
 it('should raise a number to the power of the given exponent', () => {
    expect(helpers.raiseToPower(2,5)).toBe(32);
    expect(helpers.raiseToPower(3,5)).toBe(243);
});
 it('should round a number to the nearest integer', () => {
    expect(helpers.roundNumber(.5)).toBe(1);
    expect(helpers.roundNumber(2.4)).toBe(2);
});
 it('should round a number up to the nearest integer', () => {
    expect(helpers.roundUp(.1)).toBe(1);
    expect(helpers.roundUp(1.4)).toBe(2);
});
 it('should add ! to a string', () => {
    expect(helpers.addExclamationPoint('abc')).toBe('abc!');
    expect(helpers.addExclamationPoint('Hello')).toBe('Hello!');
});
 it('should return a full name', () => {
    expect(helpers.combineNames('Mike', 'Jones')).toBe('Mike Jones');
    expect(helpers.combineNames('Chuck', 'Norris')).toBe('Chuck Norris');
});
 it('should greet someone with name added', () => {
    expect(helpers.getGreeting('Mike')).toBe('Hello Mike!');
    expect(helpers.getGreeting('Chuck')).toBe('Hello Chuck!');
});
 it('should return the area of a rectangle', () => {
    expect(helpers.getRectangleArea(2,4)).toBe(8);
    expect(helpers.getRectangleArea(3, 10)).toBe(30);
});
 it('should return the area of a triangle', () => {
    expect(helpers.getTriangleArea(4,5)).toBe(10);
    expect(helpers.getTriangleArea(10, 20)).toBe(100);
});
 it('should return the area of a circle based on the radius provided', () => {
    expect(helpers.getCircleArea(2)).toBeCloseTo(12.566370614359172);
    expect(helpers.getCircleArea(100)).toBeCloseTo(31415.93);
});
 it('should return the volume of a rectangular prism based on the length, height, and width provided', () => {
    expect(helpers.getRectangularPrismVolume(4, 2, 10)).toBe(80);
    expect(helpers.getRectangularPrismVolume(10, 5, 2)).toBe(100);
}); 