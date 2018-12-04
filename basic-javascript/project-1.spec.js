// https://github.com/LambdaSchool/Testing/pull/370

const helpers = require('./project-1');

// start testing!
test('not sure what i am doing yet', () => {

});

describe('project-1 testing', () => { 
    it('should multiply by ten', () => {
        expect(helpers.multiplyByTen(10)).toEqual(100);
        // make sure input is a number
        // make sure output is a nuber
    });

    it('should subtract five', () => {
        expect(helpers.subtractFive(10)).toEqual(5);
        // make sure input is a number
        // make sure output is a nuber
    });

    it('are same length', () => {
        expect(helpers.areSameLength('bob', 'sam')).toBe(true);
        // make sure input is a string
        // make sure output is a boolean
    });

    it('are two numbers equal', () => {
        expect(helpers.areEqual(5, 4)).toBe(false);
        // make sure input is a number
        // make sure output is a boolean
    });

    it('check if the number is less then 90', () => {
        expect(helpers.lessThanNinety(89)).toBe(true);
        expect(helpers.lessThanNinety(91)).toBe(false);
        // make sure input is a number
        // make sure output is a boolean
    });

    it('check if the number is greater than fifty', () => {
        expect(helpers.greaterThanFifty(54)).toBe(true);
        expect(helpers.greaterThanFifty(42)).toBe(false);
        // make sure input is a number
        // make sure output is a boolean
    });

    it('adds two numbers together', () => {
        expect(helpers.add(2,2)).toBe(4);
        // make sure input is two numbers
        // make sure outout is a number
    });

    it('subtracts one number from another', () => {
        expect(helpers.subtract(4, 2)).toBe(2);
        // make sure input is two numbers
        // make sure output is a number
    });

    it('divides two number', () => {
        expect(helpers.divide(4, 2)).toBe(2);
        // make sure input is two numbers
        // make sure output is a number
    });

    it('multiply two numbers', () => {
        expect(helpers.multiply(3, 2)).toBe(6);
        // make sure input is two numbers
        // make sure output is a number
    });

    it('get the remainder of two numbers divided', () => {
        expect(helpers.getRemainder(6, 4)).toBe(2);
        // make sure input is two numbers
        // make sure output is a number
    });

    it('check if a number is even', () => {
        expect(helpers.isEven(10)).toBe(true);
        expect(helpers.isEven(7)).toBe(false);
        // make sure input is a number
        // make sure output is a boolean
    });

    it('check if a number is odd', () => {
        expect(helpers.isOdd(7)).toBe(true);
        expect(helpers.isOdd(8)).toBe(false);
        // make sure input is a number
        // make sure output is a boolean
    });

    it('multiply a number by itself', () => {
        expect(helpers.square(3)).toBe(9);
        // make sure input is a number
        // make sure output is a number
    });

    it('multiply a number times its self three times', () => {
        expect(helpers.cube(3)).toBe(27);
        // make sure input is a number
        // make sure output is number
    });

    it('multiply a number to the power of another', () => {
        expect(helpers.raiseToPower(2, 5)).toBe(32);
    });

    it('take a float and round to a integer', () => {
        expect(helpers.roundNumber(2.2)).toBe(2);
        expect(helpers.roundNumber(2.7)).toBe(3);
        expect(helpers.roundNumber(2)).toBe(2);
        // make sure input is a number
        // make sure output is number
    });

    it('take a float and round it up to the nearest integer', () => {
        expect(helpers.roundUp(2.2)).toBe(3);
        // make sure input is a number
        // make sure output is number
    });

    it('add an exclamation mark to a sentance', () => {
        expect(helpers.addExclamationPoint('hello')).toBe('hello!');
        // make sure input is a string
        // make sure output is a string
        // make sure there is only one exclamation mark
    });

    it('take a first name and combine it with a last name', () => {
        expect(helpers.combineNames('Sean', 'One')).toBe('Sean One');
        expect(helpers.combineNames('Sean ', 'One')).toBe('Sean  One');
        // make sure both inputs are strings
        // remove extra spaces from inputed strings
        // make sure output is a single string
    });

    it('greet someone by name', () => {
        expect(helpers.getGreeting('Sean')).toBe("Hello Sean!");
        // make sure input is string
        // remove any extra spaces from input string if needed
        // make sure output is a string
    });

    it('multiply length by width', () => {
        expect(helpers.getRectangleArea(4, 5)).toBe(20);
        // make sure input is two numbers
        // make sure output is a number
    });

    it('get the area of a triangle', () => {
        expect(helpers.getTriangleArea(3, 5)).toBe(7.5);
        // make sure input is two numbers
        // make sure output is a number
    });

    it('get area of a cirlce based on the radius', () => {
        expect(helpers.getCircleArea(3)).toBe(28.27);
        // make sure input is a number
        // make sure output is a number
    });

    it('get the volume of a rectangular prism', () => {
        expect(helpers.getRectangularPrismVolume(2, 3, 4)).toBe(24);
        // make sure input is three numbers
        // make sure output is a number
    });

});