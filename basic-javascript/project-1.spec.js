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

})