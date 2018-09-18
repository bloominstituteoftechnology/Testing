const helpers = require('./project-1');

// start testing!
it('should multiply a number by 10', () => {
    expect(helpers.multiplyByTen(4)).toBe(40);
  });
it('should subtract a number by 5',()=>{
    expect(helpers.subtractFive(4)).toBe(-1);
})
it('should return a bool of whether lengths are equal',()=>{
    expect(helpers.areSameLength('words','words')).toBe(true);
    expect(helpers.areSameLength('words!','words')).toBe(false);
})
it('should return a bool on whether two numbers are equal',()=>{
    expect(helpers.areEqual(4,5)).toBe(false);
    expect(helpers.areEqual(4,4)).toBe(true);
})
it('should return a bool of whether or not a number is less than 90',()=>{
    expect(helpers.lessThanNinety(45)).toBe(true);
    expect(helpers.lessThanNinety(100)).toBe(false);
    expect(helpers.lessThanNinety(90)).toBe(false);
})
it('should return a bool on wehther a number is greater than 50',()=>{
    expect(helpers.greaterThanFifty(55)).toBe(true);
    expect(helpers.greaterThanFifty(50)).toBe(false);
    expect(helpers.greaterThanFifty(45)).toBe(false);
})
it ('should add two numbers together.',()=>{
    expect(helpers.add(3,5)).toBe(8);
})
it ('should subtract two numbers',()=>{
    expect(helpers.subtract(3,5)).toBe(-2);
})
it ('should divide two numbers',()=>{
    expect(helpers.divide(1,4)).toBe(0.25);
})
it ('should multiply two numbers',()=>{
    expect(helpers.multiply(2,4)).toBe(8);
})
it('should get remainder after division',()=>{
    expect(helpers.getRemainder(4,3)).toBe(1);
})
it('should return a bool determing whether a number is even or not',()=>{
    expect(helpers.isEven(2)).toBe(true);
    expect(helpers.isEven(3)).toBe(false);
})
it('should return a bool determing whether a number is odd or not',()=>{
    expect(helpers.isOdd(3)).toBe(true);
    expect(helpers.isOdd(4)).toBe(false);
})
it('should square a number',()=>{
    expect(helpers.square(2)).toBe(4);
    expect(helpers.square(3)).toBe(9)
})
it('should cube a number',()=>{
    expect(helpers.cube(2)).toBe(8);
    expect(helpers.cube(3)).toBe(27);
})
it('should raise num to the exponent power',()=>{
    expect(helpers.raiseToPower(2,3)).toBe(8);
    expect(helpers.raiseToPower(3,4)).toBe(81);
})
it('should round to closest number',()=>{
    expect(helpers.roundNumber(8.01)).toBe(8);
    expect(helpers.roundNumber(8.99)).toBe(9);
})
it('should round up a number',()=>{
    expect(helpers.roundUp(8.01)).toBe(9);
    expect(helpers.roundUp(8.99)).toBe(9);
})
it('should add an exclamation point to the end of a string',()=>{
    expect(helpers.addExclamationPoint('Dog')).toBe('Dog!');
    expect(helpers.addExclamationPoint('')).toBe('!');
})
it('should combine two strings into one string',()=>{
    expect(helpers.combineNames('Will','Kwon')).toBe('Will Kwon')
    expect(helpers.combineNames('Steve','Austin')).toBe('Steve Austin');
})
it ('should return a greeting of Hello with a name',()=>{
    expect(helpers.getGreeting('Will')).toBe('Hello Will!');
    expect(helpers.getGreeting('Dominique')).toBe('Hello Dominique!');
})
it('should return the area of a rectangle given length and width ',()=>{
    expect(helpers.getRectangleArea(3,5)).toBe(15);
    expect(helpers.getRectangleArea(3,9)).toBe(27);
})
it('should return the area of a triangle given base and height',()=>{
    expect(helpers.getTriangleArea(3,3)).toBe(4.5);
    expect(helpers.getTriangleArea(9,9)).toBe(40.5);
})
it('should return the area of a circle given radius',()=>{
    expect(helpers.getCircleArea(5)).toBeCloseTo(78.539);
    expect(helpers.getCircleArea(3)).toBeCloseTo(28.274);
})
it('should return the volume of a rectangular prism given length, width and height',()=>{
    expect(helpers.getRectangularPrismVolume(2,3,4)).toBe(24);
    expect(helpers.getRectangularPrismVolume(3,3,5)).toBe(45);
})