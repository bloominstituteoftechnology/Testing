const helpers = require('./project-1');

// start testing!
it('multiply by ten', () => {
    expect(helpers.multiplyByTen(1)).toEqual(10);
    expect(helpers.multiplyByTen(12)).toEqual(120);
})

it('subtracts five', () => {
    expect(helpers.subtractFive(20)).toEqual(15);
    expect(helpers.subtractFive(2)).toEqual(-3);
})

it('strings are same length', () => {
    expect(helpers.areSameLength('love', 'more')).toEqual(true);
    expect(helpers.areSameLength('rare', 'amazing')).toEqual(false);
})

it('numbers are equal', () => {
    expect(helpers.areEqual(2, 2)).toEqual(true);
    expect(helpers.areEqual(-2, 2)).toEqual(false);
})

it('number is less than 90', () => {
    expect(helpers.lessThanNinety(20)).toEqual(true);
    expect(helpers.lessThanNinety(102)).toEqual(false);
})

it('number is greater than 50', () => {
    expect(helpers.greaterThanFifty(20)).toEqual(false);
    expect(helpers.greaterThanFifty(1023)).toEqual(true);
})

it('adds two numbers', () => {
    expect(helpers.add(2, 5)).toEqual(7);
    expect(helpers.add(3, -4)).toEqual(-1);
})

it('subtracts two numbers', () => {
    expect(helpers.subtract(-10,  2)).toEqual(-12);
    expect(helpers.subtract(5, - 10)).toEqual(15);
})

it('divides two numbers', () => {
    expect(helpers.divide(20, 4)).toEqual(5)
    expect(helpers.divide(12, 10)).toEqual(1.2)
})

it('multiplies two numbers', () => {
    expect(helpers.multiply(20, 100)).toEqual(2000);
    expect(helpers.multiply(-20, 20)).toEqual(-400);
})

it('gets remainder', () => {
    expect(helpers.getRemainder(12, 8)).toEqual(4)
})

it('number is even', () => {
    expect(helpers.isEven(24)).toEqual(true);
    expect(helpers.isEven(11)).toEqual(false);
})

it('number is odd', () => {
    expect(helpers.isOdd(7)).toEqual(true);
    expect(helpers.isOdd(8)).toEqual(false);
})

it('square of a number', () => {
    expect(helpers.square(3)).toEqual(9)
})

it('cube of a number', () => {
    expect(helpers.cube(3)).toEqual(27);
})

it(' raise to a power', () => {
    expect(helpers.raiseToPower(10, 3)).toEqual(1000);
})

it('round a number', () => {
    expect(helpers.roundNumber(3.2)).toEqual(3);
})

it('rounds number up', () => {
    expect(helpers.roundUp(8.1)).toEqual(9);
})

it('add exclamation point to string', () => {
    expect(helpers.addExclamationPoint('I want to be the best')).toEqual('I want to be the best!')
})

it('combines names', () => {
    expect(helpers.getGreeting('Randy')).toEqual('Hello Randy!');
})

it('gets the area of a rectangle', () => {
    expect(helpers.getRectangleArea(20, 10)).toEqual(200);
})

it('gets the area of a triangle', () => {
    expect(helpers.getTriangleArea(25, 10)).toEqual(125)
})

it('gets the area of a circle', () => {
    expect(helpers.getCircleArea(180)).toEqual(101787.6019763093)
})

it('gets rectangular prism volume', () => {
    expect(helpers.getRectangularPrismVolume(20,20,20)).toEqual(8000)
})