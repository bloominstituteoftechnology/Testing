const helpers = require('./project-1');

// start testing!
it('should multiply a number by ten', () => {
    expect(helpers.multiplyByTen(4)).toBe(40)
    expect(helpers.multiplyByTen(-7)).toBe(-70)
});

it('should subtract 5 from a given number', () => {
    expect(helpers.subtractFive(10)).toBe(5)
    expect(helpers.subtractFive(7.75)).toBe(2.75)
});

it('should check if two strings are the same length', () => {
    expect(helpers.areSameLength('hello', 'howdy')).toBe(true)
    expect(helpers.areSameLength('hello', false)).toBe(true)
    expect(helpers.areSameLength('hi', 12)).toBe(true)
});

it('should check if two values have deep equality', () => {
    expect(helpers.areEqual('5', 5)).toBe(false)
    expect(helpers.areEqual('true', true)).toBe(false)
    expect(helpers.areEqual('Hello World', 'Hello World')).toBeTruthy();
});

it('should check if a number is less than 90', () => {
    for (let i = 0; i < 90; i++) {
        expect(helpers.lessThanNinety(i)).toBe(true)
    }
    expect(helpers.lessThanNinety(90)).toBeFalsy();
});

it('should check if a number is greater than 50', () => {
    for (let i = 51; i < 100; i++) {
        expect(helpers.greaterThanFifty(i)).toBe(true)
    }
    expect(helpers.greaterThanFifty(25)).toBe(false)
});

it('should add two whole numbers', () => {
    const value = helpers.add(25, 9)
    expect(value).toBe(34)
});

it('should subtract two whole numbers', () => {
    expect(helpers.subtract(25, 9)).toBe(16)
    expect(helpers.subtract(25, 9)).toBeLessThan(20)
});

it('should multiply two numbers', () => {
    expect(helpers.multiply(2, 9)).toBe(18)
});

it('should divide two numbers', () => {
    expect(helpers.divide(27, 9)).toBe(3)
    expect(helpers.divide(30, 9)).toBeCloseTo(3.33)
    expect(helpers.divide(30, -9)).toBeCloseTo(-3.33)
});

it('should get the remainder of two divisible numbers', () => {
    expect(helpers.getRemainder(27, 9)).toBe(0)
    expect(helpers.getRemainder(28, 9)).toBe(1)
    expect(helpers.getRemainder(29, 9)).toBe(2)
});

it('should determine if a number is even', () => {
    expect(helpers.isEven(27)).toBeFalsy()
    expect(helpers.isEven(null)).toBeFalsy()
    expect(helpers.isEven(undefined)).toBeFalsy()
    expect(helpers.isEven('string')).toBeFalsy()
});

it('should determine if a number is odd', () => {
    expect(helpers.isOdd(27)).toBeTruthy()
    expect(helpers.isOdd(26)).toBeFalsy()
});

it('should return a number squared', () => {
    expect(helpers.square(2)).toBe(4)
    expect(helpers.square(4)).toBe(16)
});

it('should return a number cubed', () => {
    expect(helpers.cube(2)).toBe(8)
    expect(helpers.cube(4)).not.toBe(16)
});

it('should return a number raised to the power of an exponent', () => {
    expect(helpers.raiseToPower(2, 2)).toBe(4)
    expect(helpers.raiseToPower(4, 2)).toBe(16)
});

it('should round a decimal to the nearest whole number', () => {
    expect(helpers.roundNumber(5.55)).toBe(6)
    expect(helpers.roundNumber(5.49)).toBe(5)
});

it('should round up a decimal to the next whole number', () => {
    expect(helpers.roundUp(5.55)).toBe(6)
    expect(helpers.roundUp(5.49)).toBe(6)
    expect(helpers.roundUp(5.01)).toBe(6)
});

it('should add an exclamation point to a string', () => {
    expect(helpers.addExclamationPoint(5.55)).toBe('5.55!')
    expect(helpers.addExclamationPoint(undefined)).toBe('undefined!')
});

it('should combine a first and a last name', () => {
    expect(helpers.combineNames('John', undefined)).toBe('John')
    expect(helpers.combineNames(null, 'Smith')).toBe('Smith')
    expect(helpers.combineNames(5, 'Smith')).toBe('Smith')
});

it('should return a greeting with a name', () => {
    expect(helpers.combineNames('John')).toBe('John')
    expect(helpers.combineNames(45)).toBe(false)
    expect(helpers.combineNames(null)).toBe(false)
});

it('should return the area of a rectangle', () => {
    expect(helpers.getRectangleArea(5, 5)).toBe(25)
    expect(helpers.getRectangleArea('5', 5)).toBe(false)
    expect(helpers.getRectangleArea(4.31, 2.678)).toBeCloseTo(11.54)
});

it('should return the area of a triangle', () => {
    expect(helpers.getTriangleArea(5, 5)).toBe(12.5)
    expect(helpers.getTriangleArea('5', 5)).toBe(false)
    expect(helpers.getTriangleArea(4.31, 2.678)).toBeCloseTo(5.77)
});

it('should return the area of a circle', () => {
    expect(helpers.getCircleArea(5)).toBeCloseTo(78.54)
    expect(helpers.getCircleArea('5')).toBe(false)
});

it('should return the volume of a prism', () => {
    expect(helpers.getRectangularPrismVolume(5, 5, 6)).toBe(150)
    expect(helpers.getRectangularPrismVolume('5', 5, 6)).toBe(false)
});