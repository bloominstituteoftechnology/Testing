const helpers = require('./project-1');

// start testing!
describe('multiplyByTen', () => {
    it('should take a number and multiply it by 10', () => {
        expect(helpers.multiplyByTen(0)).toBe(0)
        expect(helpers.multiplyByTen(5)).toBe(50)
        expect(helpers.multiplyByTen(12)).toBe(120)
        expect(helpers.multiplyByTen(-20)).toBe(-200)
        expect(helpers.multiplyByTen(-.2)).toBe(-2)
    })      
    it('returns NaN when given a non-numeric value', () => {
        expect(helpers.multiplyByTen(undefined)).toBeNaN()
        expect(helpers.multiplyByTen('seven')).toBeNaN()        
        expect(helpers.multiplyByTen([7,5,12,18])).toBeNaN()
        expect(helpers.multiplyByTen({ key: "value" })).toBeNaN()
    })
    it('treats boolean true as 1 and boolean false as 0 when multiplying by 10', () => {
        expect(helpers.multiplyByTen(true)).toBe(10)
        expect(helpers.multiplyByTen(false)).toBe(0)
        expect(helpers.multiplyByTen(-true)).toBe(-10)
        expect(helpers.multiplyByTen(-false)).toBe(-0)
    })
})



describe('subtract five', () => {
    it('should take a number and subtract 5', () => {
        expect(helpers.subtractFive(5)).toBe(0)
        expect(helpers.subtractFive(-7)).toBe(-12)
        expect(helpers.subtractFive(25)).toBe(20)
        expect(helpers.subtractFive(.7)).toBe(-4.3)
        expect(helpers.subtractFive(-(-5))).toBe(0)
        expect(helpers.subtractFive(10.12)).toBe(5.119999999999999)
    })
    it('should return NaN when given a non-numeric value', () => {
        expect(helpers.subtractFive(NaN)).toBeNaN()
        expect(helpers.subtractFive('sven')).toBeNaN()
        expect(helpers.subtractFive([1,2,5,24])).toBeNaN()
        expect(helpers.subtractFive({ key: "value" })).toBeNaN()
        expect(helpers.subtractFive(NaN)).toBeNaN()
    })
    it('should treat boolean true as 1 and boolean false as 0 when subracting by 5', () => {
        expect(helpers.subtractFive(true)).toBe(-4)
        expect(helpers.subtractFive(false)).toBe(-5)
        expect(helpers.subtractFive(-true)).toBe(-6)
        expect(helpers.subtractFive(-false)).toBe(-5)        
    })
})
describe('areSameLength', () => {
    it('should return false when given a non-string value', () => {
        expect(helpers.areSameLength([1, 2, 3], [5, 7, 9])).toBe(false);
        expect(helpers.areSameLength([1, 2], [5, 8, 9, 12])).toBe(false);
        expect(helpers.areSameLength(5, 2)).toBe(false);
        expect(helpers.areSameLength({ key: "value"}, { key: "value"})).toBe(false);
        expect(helpers.areSameLength(true)).toBe(false)

    })
    it('should compare two strings and return true if they are the same length', () => {
        expect(helpers.areSameLength('', '')).toBe(true)
        expect(helpers.areSameLength('seventy', 'five')).toBe(false)
    })

})
