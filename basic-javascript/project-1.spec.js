const helpers = require('./project-1');

// start testing!
describe('multiplyByTen(num)', () => {
    it('should multiply num by ten', function() {
        expect(helpers.multiplyByTen(4)).toEqual(40);
    })
});

describe('subtractFive(num)', function() {
    it('should subtract five from number passed', function() {
        expect(helpers.subtractFive(25)).toBe(20);
    })
})

describe('areSameLength(str1, str2)', function() {
    it('string lengths should be equal', function () {
        expect(helpers.areSameLength('lambda', 'school')).toBe(true);
        expect(helpers.areSameLength('javascript', 'node')).toBe(false);
    })
})

describe('areEqual(x, y)', function() {
    it('x should equal y', function() {
        expect(helpers.areEqual(4,4)).toBe(true);
        expect(helpers.areEqual(4,9)).toBe(false);
        expect(helpers.areEqual(4,undefined)).toBe(false);
    })
})
  
describe('lessThanNinety(num)', function() {
    it('should return true if less than 90', function () {
        expect(helpers.lessThanNinety(78)).toBe(true);
        expect(helpers.lessThanNinety(98)).toBe(false);
        expect(helpers.lessThanNinety(90)).toBe(false);
        expect(helpers.lessThanNinety(undefined)).toBe(false);
    })
})
  
describe('greaterThanFifty(num)', () => {
    it('should return true if num is greater than fifty', () => {
        expect(helpers.greaterThanFifty(79)).toBe(true);
        expect(helpers.greaterThanFifty(48)).toBe(false);
        expect(helpers.greaterThanFifty(50)).toBe(false);
        expect(helpers.greaterThanFifty(undefined)).toBe(false);
    })
})

describe('add(x, y)', () => {
    it('should add x and y', () => {
        expect(helpers.add(3, 7)).toBe(10);
    })
})

describe('subtract(x, y)', () => {
    it('should subtract y from x', () => {
        expect(helpers.subtract(34, 23)).toBe(11);
        expect(helpers.subtract(-20, 20)).toBe(-40);
    })
})