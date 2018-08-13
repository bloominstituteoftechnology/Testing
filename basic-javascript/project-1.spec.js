const helpers = require('./project-1');

it('should multiply the number passed by 10', () => {
    expect(helpers.multiplyByTen(4)).toEqual(40);
    expect(helpers.multiplyByTen(6)).toEqual(60);
    expect(helpers.multiplyByTen(10)).toEqual(100);
});

it('should subtract the number passed by 5', () => {
    expect(helpers.subtractFive(5)).toEqual(0);
    expect(helpers.subtractFive(100)).toEqual(95);
    expect(helpers.subtractFive(30)).toEqual(25);
})

it('should return true if the two values provided are the same length, otherwise false', () => {
    expect(helpers.areSameLength('hello', 'test5')).toEqual(true);
    expect(helpers.areSameLength('hell', 'test5')).toEqual(false);
    expect(helpers.areSameLength(5, 'test5ssssss')).toEqual(false);
})

it('should return true if the two values provided are equal', () => {
    expect(helpers.areEqual(5, 5)).toEqual(true);
    expect(helpers.areEqual('hello', 'hello')).toEqual(true);
    expect(helpers.areEqual(5, 6)).toEqual(false);
})

it('should return true if value provided is less than 90, otherwise false', () => {
    expect(helpers.lessThanNinety(50)).toEqual(true);
    expect(helpers.lessThanNinety(90)).toEqual(false);
    expect(helpers.lessThanNinety(-20)).toEqual(true);
})

it('should return true if value provided is greater than 50, otherwise false', () => {
    expect(helpers.greaterThanFifty(50)).toEqual(false);
    expect(helpers.greaterThanFifty(51)).toEqual(true);
    expect(helpers.greaterThanFifty(90)).toEqual(true);
})

it('should add the two numbers passed and return the value', () => {
    expect(helpers.add(5, 5)).toEqual(10);
    expect(helpers.add(10, 5)).toEqual(15);
    expect(helpers.add(-5, 5)).toEqual(0);
})

it('should subtract the two numbers passed and return the value', () => {
    expect(helpers.subtract(5, 5)).toEqual(0);
    expect(helpers.subtract(10, 5)).toEqual(5);
    expect(helpers.subtract(-5, 5)).toEqual(-10);
})

it('should divide the two numbers passed and return the value', () => {
    expect(helpers.divide(5, 5)).toEqual(1);
    expect(helpers.divide(10, 5)).toEqual(2);
    expect(helpers.divide(20, 5)).toEqual(4);
})

it('should multiply the two numbers passed and return the value', () => {
    expect(helpers.multiply(5, 5)).toEqual(25);
    expect(helpers.multiply(10, 5)).toEqual(50);
    expect(helpers.multiply(20, -5)).toEqual(-100);
})

it('should return the remainder of the two numbers passed', () => {
    expect(helpers.getRemainder(5, 4)).toEqual(1);
    expect(helpers.getRemainder(10, 9)).toEqual(1);
    expect(helpers.getRemainder(103, 100)).toEqual(3);
})

it('should return true if the value provided is even, otherwise false', () => {
    expect(helpers.isEven(5)).toEqual(false);
    expect(helpers.isEven(6)).toEqual(true);
    expect(helpers.isEven(-100)).toEqual(true);
})

it('should return true if the value provided is odd, otherwise false', () => {
    expect(helpers.isOdd(5)).toEqual(true);
    expect(helpers.isOdd(6)).toEqual(false);
    expect(helpers.isOdd(-100)).toEqual(false);
})

it('should return the squared value of the number passed', () => {
    expect(helpers.square(5)).toEqual(25);
    expect(helpers.square(10)).toEqual(100);
    expect(helpers.square(24)).toEqual(576);
})

it('should return the cubed value of the number passed', () => {
    expect(helpers.cube(5)).toEqual(125);
    expect(helpers.cube(10)).toEqual(1000);
    expect(helpers.cube(24)).toEqual(13824);
})

it('should return the result of the number raised by the nth power', () => {
    expect(helpers.raiseToPower(5, 2)).toEqual(25);
    expect(helpers.raiseToPower(5, 4)).toEqual(625);
    expect(helpers.raiseToPower(1, 10)).toEqual(1);
})

it('should round the number passed and return the value', () => {
    expect(helpers.roundNumber(2.5)).toEqual(3);
    expect(helpers.roundNumber(4.4)).toEqual(4);
    expect(helpers.roundNumber(1000.4)).toEqual(1000);
})

it('should round the number upwards and return the value', () => {
    expect(helpers.roundUp(2.2)).toEqual(3);
    expect(helpers.roundUp(1000.1)).toEqual(1001);
    expect(helpers.roundUp(504.9)).toEqual(505);
})

it('should return an exclamation point after the value passed', () => {
    expect(helpers.addExclamationPoint('Hello, Bob')).toEqual('Hello, Bob!');
    expect(helpers.addExclamationPoint('Hello')).toEqual('Hello!');
    expect(helpers.addExclamationPoint('H')).toEqual('H!');
})

it('should concatenate the 2 values passed with a spcee between them and return the new value', () => {
    expect(helpers.combineNames('John', 'Doe')).toEqual('John Doe');
    expect(helpers.combineNames('Dan', 'Abraham')).toEqual('Dan Abraham');
    expect(helpers.combineNames('Brandon', 'Aguirre')).toEqual('Brandon Aguirre');
})

it('should return hello plus the value passed in and an exclamation mark at the end', () => {
    expect(helpers.getGreeting('Brandon')).toEqual('Hello Brandon!');
    expect(helpers.getGreeting('John')).toEqual('Hello John!');
    expect(helpers.getGreeting('Dan')).toEqual('Hello Dan!');
})

it('should multiply the two numbers passed and return the value to give us the area of a rectangle', () => {
    expect(helpers.getRectangleArea(5, 4)).toEqual(20);
    expect(helpers.getRectangleArea(100, 4)).toEqual(400);
    expect(helpers.getRectangleArea(22, 4)).toEqual(88);
})

it('should multiply 0.5 times the two numbers passed and return the value to give us the area of a triangle', () => {
    expect(helpers.getTriangleArea(5, 5)).toEqual(12.5);
    expect(helpers.getTriangleArea(10, 5)).toEqual(25);
    expect(helpers.getTriangleArea(5, 20)).toEqual(50);
})

it('should multiply pi times the number passed and return the value to give us the area of a circle', () => {
    expect(helpers.getCircleArea(5)).toEqual(78.53981633974483);
    expect(helpers.getCircleArea(10)).toEqual(314.1592653589793);
    expect(helpers.getCircleArea(100)).toEqual(31415.926535897932);
})


