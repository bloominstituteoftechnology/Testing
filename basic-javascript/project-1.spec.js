const helpers = require('./project-1');

// start testing!

it('should multiply a number by 10', () => {
    expect(helpers.multiplyByTen(15)).toBe(150);
    expect(helpers.multiplyByTen(1000)).toBe(10000);
});

it('should subtract a number by 5', () => {
    expect(helpers.subtractFive(10)).toBe(5);
    expect(helpers.subtractFive(0)).toBe(-5);
});

it('should check if two strings have the same length', () => {
    expect(helpers.areSameLength('abccc', 'aacvd')).toBe(5 === 5);
});

it('should check if two variables are the same', () => {
    expect(helpers.areEqual(8, 9)).toBe(false);
    expect(helpers.areEqual('abc', 'abc')).toBe('abc' === 'abc');
});

it('should check if number is greater than 50', () => {
    expect(helpers.greaterThanFifty(49)).toBe(false);
    expect(helpers.greaterThanFifty(50)).toBe(false);
    expect(helpers.greaterThanFifty(1000)).toBe(true);
});

it('should add two numbers', () => {
    expect(helpers.add(3,8)).toBe(11);
    expect(helpers.add(2,1)).toBe(3);
});

it('should subtract two numbers', () => {
    expect(helpers.subtract(11,8)).toBe(3);
    expect(helpers.subtract(0,2)).toBe(-2);
});

it('should divide two numbers', () => {
    expect(helpers.divide(16,4)).toBe(4);
    expect(helpers.divide(2,1)).toBe(2);
});

it('should multiply two numbers', () => {
    expect(helpers.multiply(16,4)).toBe(64);
    expect(helpers.multiply(2,100)).toBe(200);
});

it('should get remainder of two numbers', () => {
    expect(helpers.getRemainder(16,4)).toBe(0);
    expect(helpers.getRemainder(3,2)).toBe(1);
});

it('should check if number is an even number', () => {
    expect(helpers.isEven(10)).toBe(true);
    expect(helpers.isEven(7)).toBe(false);
});

it('should check if number is an odd number', () => {
    expect(helpers.isOdd(1564)).toBe(false);
    expect(helpers.isOdd(132789)).toBe(true);
});

it('should square the given number', () => {
    expect(helpers.square(10)).toBe(100);
    expect(helpers.square(3)).toBe(9);
});

it('should cube the given number', () => {
    expect(helpers.cube(10)).toBe(1000);
    expect(helpers.cube(3)).toBe(27);
});

it('should raise a given number to the power of the given exponent', () => {
    expect(helpers.raiseToPower(10,3)).toBe(1000);
    expect(helpers.raiseToPower(3,5)).toBe(243);
});

it('should round the given number to the nearest integer', () => {
    expect(helpers.roundNumber(2.5)).toBe(3);
    expect(helpers.roundNumber(9.3)).toBe(9);
});

it('should round the given number up to the nearest integer', () => {
    expect(helpers.roundUp(10.1)).toBe(11);
    expect(helpers.roundUp(9.89)).toBe(10);
});

it('should add ! to the given string', () => {
    expect(helpers.addExclamationPoint('abc')).toBe('abc!');
    expect(helpers.addExclamationPoint('Luis')).toBe('Luis!');
});

it('should return full name based on given first name and last name', () => {
    expect(helpers.combineNames('Francis', 'Tse')).toBe('Francis Tse');
    expect(helpers.combineNames('Luis', 'Hernandez')).toBe('Luis Hernandez');
});

it('should greet someone based on name provided', () => {
    expect(helpers.getGreeting('Francis')).toBe('Hello Francis!');
    expect(helpers.getGreeting('Luis')).toBe('Hello Luis!');
});

it('get the area of a rectangle based on given length and width', () => {
    expect(helpers.getRectangleArea(4,6)).toBe(24);
    expect(helpers.getRectangleArea(10, 50)).toBe(500);
});

it('get the area of a triangle based on given base and height', () => {
    expect(helpers.getTriangleArea(4,6)).toBe(12);
    expect(helpers.getTriangleArea(10, 50)).toBe(250);
});

it('get the area of a circle based on given radius', () => {
    expect(helpers.getCircleArea(4)).toBeCloseTo(50, 0);
    expect(helpers.getCircleArea(10)).toBeCloseTo(314, 0);
});

it('get the volume of a rectangular prism based on given length, height, and width', () => {
    expect(helpers.getRectangularPrismVolume(4, 50, 10)).toBe(2000);
    expect(helpers.getRectangularPrismVolume(10, 10, 30)).toBe(3000);
});