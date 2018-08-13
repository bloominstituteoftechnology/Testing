const helpers = require('./project-1');

// start testing!

it('it should multiply the number passed by ten', () => {
    expect(helpers.multiplyByTen(4)).toEqual(40);

})

it('it should subtract number passed by five', () => {
    expect(helpers.subtractFive(25)).toEqual(20);
})

it('it should return true if two passed strings length is the same', () => {
    expect(helpers.areSameLength('bye', 'you')).toEqual(true);
})

it('it should pass true is passed numbers are equal value', () => {
    expect(helpers.areEqual(4,5)).toEqual(false);
    expect(helpers.areEqual(4,4)).toEqual(true);
})

it('it should pass true if number is less than 90, otherwise false', () => {
    expect(helpers.lessThanNinety(89)).toEqual(true);

})

it('it should return true if number passed is greater than fifty', () => {
    expect(helpers.greaterThanFifty(60)).toEqual(true);
})

it('it should return sum or two numbers passed', () => {
    expect(helpers.add(2, 2)).toEqual(4);
})

it('it should subtract numbers passed returning the value', () => {
    expect(helpers.subtract(10, 9)).toEqual(1);
})

it('it should return value of dividing y into x', () => {
    expect(helpers.divide(10,5)).toEqual(2);
})

it('it should multiply two numbers passed', () => {
    expect(helpers.multiply(5, 5)).toEqual(25);
})

it('it should return remainder after dividing two numbers passed', () => {
    expect(helpers.getRemainder(10, 9)).toEqual(1);
})

it('it should return true if number is even', () => {
    expect(helpers.isEven(11)).toEqual(false);
})

it('it should return true if number passed is odd', () => {
    expect(helpers.isOdd(11)).toEqual(true);
})

it('it should return square value of number passed', () => {
    expect(helpers.square(5)).toEqual(25);
})

it('it should return cube value of number passed', () => {
    expect(helpers.cube(3)).toEqual(27);
})

it('it should return value of number passed raised to the power of exponent', () => {
    expect(helpers.raiseToPower(2,3)).toEqual(8);
})

it('it should round number passed to nearest integer', () => {
    expect(helpers.roundNumber(5.59)).toEqual(6);
})

it('it should round up to nearest integer of number passed', () => {
    expect(helpers.roundUp(5.12)).toEqual(6);
})

it('it should take string passed and add exclamation point', () => {
    expect(helpers.addExclamationPoint('hello')).toEqual('hello!')
})

it('it should combine names passed as one', () => {
    expect(helpers.combineNames('Joe', 'Stanfield')).toEqual('Joe Stanfield');
})

it('it should take name passed and return greeting', () => {
    expect(helpers.getGreeting('Joe')).toEqual('Hello Joe!');
})

it('should return area of length and width passed', () => {
    expect(helpers.getRectangleArea(10, 4)).toEqual(40);
})

it('it should get area of rectangle', () => {
    expect(helpers.getTriangleArea(2,2)).toEqual(2);
})

it('it should return area of circle given radius', () => {
    expect(helpers.getCircleArea(2)).toEqual(12.566370614359172
    );
})

it('it should return volume of rectangular prism given three numbers passed', () => {
    expect(helpers.getRectangularPrismVolume(2,2,2)).toEqual(8);
})






























