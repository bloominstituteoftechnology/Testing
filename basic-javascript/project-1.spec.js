const helpers = require('./project-1');

// start testing!
const helpers = require('./project-1');

// start testing!
describe('tests the functions in project-1.js', () => {
    it('should multiply by ten', () => {
        expect(helpers.multiplyByTen(10)).toBe(100);
    })
    it('should subract five', () => {
        expect(helpers.subtractFive(10)).toBe(5);
    })
    it('should be the same length', () => {
        expect(helpers.areSameLength('hello', 'hello')).toBe(true);
    })
    it('should be equal', () => {
        expect(helpers.areEqual(1, 1)).toBe(true);
    })
    it('should be less than 90', () => {
        expect(helpers.lessThanNinety(89)).toBe(true);
    })
    it('should be greater than 50', () => {
        expect(helpers.greaterThanFifty(100)).toBe(true);
    })
    it('should add two numbers', () => {
        expect(helpers.add(1, 1)).toBe(2);
    })
    it('should subtract two numbers', () => {
        expect(helpers.subtract(2, 1)).toBe(1);
    })
    it('should divide two numbers', () => {
        expect(helpers.divide(10, 2)).toBe(5);
    })
    it('should multiply two numbers', () => {
        expect(helpers.multiply(5, 5)).toBe(25);
    })
    it('should get remainder', () => {
        expect(helpers.getRemainder(100, 99)).toBe(1);
    })
    it('should determine if even', () => {
        expect(helpers.isEven(10)).toBe(true);
    })
    it('should determine if odd', () => {
        expect(helpers.isOdd(3)).toBe(true);
    })
    it('should square the number', () => {
        expect(helpers.square(8)).toBe(64);
    })
    it('should cube the number', () => {
        expect(helpers.cube(3)).toBe(27);
    })
    it('should raise number to power', () => {
        expect(helpers.raiseToPower(8, 2)).toBe(64);
    })
    it('should round the number', () => {
        expect(helpers.roundNumber(3.2)).toBe(3);
    })
    it('should round the number up', () => {
        expect(helpers.roundUp(3.2)).toBe(4);
    })
    it('should add exclamation point', () => {
        expect(helpers.addExclamationPoint("hello")).toBe("hello!");
    })
    it('should combine names', () => {
        expect(helpers.combineNames("Sean", "Valdivia")).toBe("Sean Valdivia");
    })
    it('should return greeting with name', () => {
        expect(helpers.getGreeting("Sean")).toBe("Hello Sean!");
    })
    it('should get the rectangle area', () => {
        expect(helpers.getRectangleArea(4, 4)).toBe(16);
    })
    it('should get the triangle area', () => {
        expect(helpers.getTriangleArea(8, 8)).toBe(32);
    })
    it('should get the circle area', () => {
        expect(helpers.getCircleArea(8)).toBe(201.06192982974676);
    })
    it('should get rectangular prism volume', () => {
        expect(helpers.getRectangularPrismVolume(3, 3, 3)).toBe(27);
    })
})