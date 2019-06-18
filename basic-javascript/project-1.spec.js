const helpers = require('./project-1');

// start testing!
describe('project.js', () => {
    it('should multiply by 10', () => {
        expect(helpers.multiplyByTen(2)).toBe(20);
    });

    it('should subtract by 5', () => {
        expect(helpers.subtractFive(10)).toBe(5);
    });

    it('should be the same string langth', () => {
        expect(helpers.areSameLength('help', 'fire')).toBeTruthy();
    });

    it('should be equal', () => {
        expect(helpers.areEqual(4, 4)).toBeTruthy();
    });

    it('should be less than Ninety', () => {
        expect(helpers.lessThanNinety(89)).toBeTruthy();
    });

    it('should be greater than Fifty', () => {
        expect(helpers.greaterThanFifty(100)).toBeTruthy();
    });

    it('should add two numbers', () => {
        expect(helpers.add(2, 9)).toBe(11);
    });

    it('should subtract two numbers', () => {
        expect(helpers.subtract(2, 9)).toBe(-7);
    });

    it('should multiply two numbers', () => {
        expect(helpers.multiply(2, 9)).toBe(18);
    });

    it('should divide two numbers', () => {
        expect(helpers.divide(18, 2)).toBe(9);
    });

    it('should divide two numbers and return the remainder', () => {
        expect(helpers.getRemainder(15, 7)).toBe(1);
    });

    it('should check to see if the number is even', () => {
        expect(helpers.isEven(2)).toBeTruthy();
    });

    it('should check to see if the number is odd', () => {
        expect(helpers.isOdd(1)).toBeTruthy();
    });

    it('should square the number', () => {
        expect(helpers.square(6)).toBe(36);
    });

    it('should cube the number', () =>{
        expect(helpers.cube(5)).toBe(125);
    });

    it('should raise to power', () => {
        expect(helpers.raiseToPower(5, 5)).toBe(3125);
    });

    it('should round the number given', () => {
        expect(helpers.roundNumber(5.05)).toBe(5);
    });

    it('should round the number up', () => {
        expect(helpers.roundUp(-7.004)).toBe(-7);
    });

    it('should add (!) at the end of the string', () => {
        expect(helpers.addExclamationPoint('help me')).toBe('help me!');
    });

    it('should combine the first name and last name', () => {
        expect(helpers.combineNames('Charles', 'Rogers')).toBe('Charles Rogers');
    });

    it('should place the name in the string', () => {
        expect(helpers.getGreeting('Charles')).toBe('Hello Charles!');
    });

    it('should get the area of the Rectangle', () => {
        expect(helpers.getRectangleArea(5, 9)).toBe(45);
    });

    it('should get the area of the Triangle', () => {
        expect(helpers.getTriangleArea(5, 8)).toBe(20);
    });

    it('should get the area of the circle', () => {
        expect(helpers.getCircleArea(2)).toBe(12.566370614359172);
    });

    it('should get the Volume of a prism', () => {
        expect(helpers.getRectangularPrismVolume(2, 4, 4)).toBe(32);
    });

})