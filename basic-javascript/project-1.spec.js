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
        expect(helpers.lessThanNinety(8)).toBeTruthy();
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
        expect(helpers.getRemainder(15,7)).toBe(1);
    });


})