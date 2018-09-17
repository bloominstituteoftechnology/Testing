const helpers = require('../project-1');

it('should multiply a whole number by ten', () => {
    expect(helpers.multiplyByTen(5)).toBe(50);
});

it('should substract five', () => {
    expect(helpers.subtractFive(5)).toBe(0);
});

it('both strings need to be the same length', () => {
    expect(helpers.areSameLength('hola', 'jalo')).toBe(true);
});

it('is true if integer is less than 90', () => {
    expect(helpers.lessThanNinety(50)).toBe(true);
});

it('is true if integer is greater than 50', () => {
    expect(helpers.greaterThanFifty(51)).toBe(true);
});

it('should add both numbers',  () => {
    expect(helpers.add(50, 51)).toBe(101);
});

it('should substract x - y',  () => {
    expect(helpers.subtract(50, 51)).toBe(-1);
});

it('should divide x / y',  () => {
    expect(helpers.divide(50, 50)).toBe(1);
});

it('should multiply x * y',  () => {
    expect(helpers.multiply(50, 50)).toBe(2500);
});

it('should get the remainder of x % y',  () => {
    expect(helpers.getRemainder(10, 3)).toBe(1);
});

it('if x is even then true',  () => {
    expect(helpers.isEven(2)).toBe(true);
});

it('if x is odd then true',  () => {
    expect(helpers.isOdd(2)).toBe(false);
});

it('should be a number square',  () => {
    expect(helpers.square(2)).toBe(4);
    expect(helpers.square(4)).toBe(16);
});

it('should be a number cube',  () => {
    expect(helpers.cube(4)).toBe(64);
});

it('should be a raise to the power of the exponent provided',  () => {
    expect(helpers.raiseToPower(2, 4)).toBe(16);
});

it('should round a decimal number',  () => {
    expect(helpers.roundNumber(2.566)).toBe(3);
    expect(helpers.roundNumber(2.466)).toBe(2);
});

it('should add an ! at the end of the string',  () => {
    expect(helpers.addExclamationPoint(2)).toBe('2!');
    expect(helpers.addExclamationPoint('fernando')).toBe('fernando!');
});

it('should combine names into a single string',  () => {
    expect(helpers.combineNames(2, 4)).toBe('2 4');
    expect(helpers.combineNames('fernando', 'salazar')).toBe('fernando salazar');
});

it('should greet using the provided parameter',  () => {
    expect(helpers.getGreeting('Emilia')).toBe('Hello Emilia!');
});

it('should return the area of a rectangle',  () => {
    expect(helpers.getRectangleArea(3, 4)).toBe(12);
    expect(helpers.getRectangleArea(3.2, 4.5)).toBe(14.4);
});

it('should return the area of a triangle',  () => {
    expect(helpers.getTriangleArea(3, 4)).toBe(6);
    expect(helpers.getTriangleArea(3.2, 4.5)).toBe(7.2);
});

it('should return the area of a circle',  () => {
    expect(helpers.getCircleArea(3)).toBe(28.274333882308138);
});

it('should return the volume of a rectangular prism',  () => {
    expect(helpers.getRectangularPrismVolume(3, 2, 5)).toBe(30);
});
