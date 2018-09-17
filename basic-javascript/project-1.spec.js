const helpers = require('./project-1');

//multiplyByTen

it('should multiply given num by 10', () => {
    expect(helpers.multiplyByTen(3)).toBe(30);
});

//subtractFive

it('should subtract 5 from the given num', () => {
    expect(helpers.subtractFive(10)).toBe(5);
    expect(helpers.subtractFive(0)).toBe(-5);
});

//areSameLength

it('should compare str1 and str2 to make sure they are same length', () => {
    expect(helpers.areSameLength('cat', 'dog')).toBeTruthy();
});

//areEqual

it('should check that x and y are equal', () => {
    expect(helpers.areEqual(6, 6)).toBeTruthy();
});

//lessThanNinety

it('should check that given num is less than 90', () => {
    expect(helpers.lessThanNinety(6)).toBeTruthy();
});

//greaterThanFifty

it('should check that given num is greater than 50', () => {
    expect(helpers.greaterThanFifty(60)).toBeTruthy();
});

//add

it('should check that sum of x and y is correct', () => {
    expect(helpers.add(2, 4)).toBe(6);
});

//subtract

it('should check that subtraction of y from x is correct', () => {
    expect(helpers.subtract(2, 4)).toBe(-2);
});

//divide

it('should check that subtraction of y from x is correct', () => {
    expect(helpers.divide(4, 2)).toBe(2);
});

//multiply

it('should check that multiplication of x and y is correct', () => {
    expect(helpers.multiply(4, 2)).toBe(8);
});

//getRemainder

it('should check that remainder x divided by y is correct', () => {
    expect(helpers.getRemainder(4, 2)).toBe(0);
});

//isEven

it('should check that given num is even', () => {
    expect(helpers.isEven(2)).toBeTruthy();
    expect(helpers.isEven(3)).toBeFalsy();
    expect(helpers.isEven(-2)).toBeTruthy();
    expect(helpers.isEven(-3)).toBeFalsy();
});

//isOdd

it('should check that given num is odd', () => {
    expect(helpers.isOdd(2)).toBeFalsy();
    expect(helpers.isOdd(3)).toBeTruthy();
    expect(helpers.isOdd(-2)).toBeFalsy();
    expect(helpers.isOdd(-3)).toBeTruthy();
});

//square

it('should check that given num squared is correct', () => {
    expect(helpers.square(2)).toBe(4);
    expect(helpers.square(-2)).toBe(4);
});

//cube

it('should check that given num cubed is correct', () => {
    expect(helpers.cube(2)).toBe(8);
    expect(helpers.cube(-2)).toBe(-8);
});

//raiseToPower

it('should check that given num raised to power of given exponent is correct', () => {
    expect(helpers.raiseToPower(2, 3)).toBe(8);
    expect(helpers.raiseToPower(-2, 3)).toBe(-8);
});

//roundNumber

it('should check that there are no floating points', () => {
    expect(helpers.roundNumber(3.48957)).toBe(3);
});

//roundUp

it('should check that given num, if floating point, is rounded up', () => {
    expect(helpers.roundUp(3.1565)).toBe(4);
});

//addExclamationPoint

it('it should check that ! is addded to given string', () => {
    expect(helpers.addExclamationPoint('cat')).toBe('cat!');
});