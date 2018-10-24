const helpers = require('./project-1');

// start testing!
describe('project-1.js', () => {

    it('should multiply by 10', () => {
        const actual = helpers.multiplyByTen(10)
        expect(actual).toBe(100)
    })

    it('should subtract 5', () => {
        const actual = helpers.subtractFive(20)
        expect(actual).toBe(15);
    })

    it('should see if they are the same length', () => {
        expect(helpers.areSameLength("hhh", "fff")).toEqual(true)
    })

    it('should say if they are equal', () => {
        expect(helpers.areEqual(5, 3)).toEqual(false)
    })

    it('should say whether it is less than 90', () => {
        expect(helpers.lessThanNinety(54)).toBe(true);
    })

    it('should add two numbers', () => {
        expect(helpers.add(4, 5)).toBe(9);
    })
    
    it('should subtract two numbers', () => {
        expect(helpers.subtract(4, 1)).toBe(3);
    })

    it('should divide two numbers', () => {
        expect(helpers.divide(10, 5)).toBe(2)
    })

    it('should multiply two numbers', () => {
        expect(helpers.multiply(10, 5)).toBe(50)
    })

    it('should get remainder of two numbers', () => {
        expect(helpers.getRemainder(10, 3)).toBe(1);
    })

    it('should tell if a number is even or not', () => {
        expect(helpers.isEven(10)).toBe(true)
    })

    it('should tell if a number is odd or not', () => {
        expect(helpers.isOdd(10)).toBe(false)
    })

    it('should square the number', () => {
        expect(helpers.square(10)).toBe(100);
    })

    it('should cube the number', () => {
        expect(helpers.cube(3)).toBe(27);
    })

    it('should raise first param to power of second', () => {
        expect(helpers.raiseToPower(4, 4)).toBe(256)
    })

    it('shoulde round the number', () => {
        expect(helpers.roundNumber(5.4)).toBe(5);
    })

    it('should round to next whole number', () => {
        expect(helpers.roundUp(5.1)).toBe(6)
    })

    it('should add an exclamation to a string', () => {
        expect(helpers.addExclamationPoint('hi')).toBe('hi!')
    })

    it('should combine two names into one full name', () => {
        expect(helpers.combineNames('travis', 'russell')).toBe('travis russell')
    })

    it('should greet the parameter', () => {
        expect(helpers.getGreeting('travis')).toBe('Hello travis!')
    })

    it('should get area of a rectangle', () => {
        expect(helpers.getRectangleArea(10, 3)).toBe(30)
    })

    it('should get area of a triangle', () => {
        expect(helpers.getTriangleArea(2, 5)).toBe(5)
    })

    it('should get the area of a circle', () => {
        expect(helpers.getCircleArea(5)).toEqual(78.53981633974483)
    })

    it('should get prism volume', () => {
        expect(helpers.getRectangularPrismVolume(3, 4, 5)).toBe(60)
    })
})