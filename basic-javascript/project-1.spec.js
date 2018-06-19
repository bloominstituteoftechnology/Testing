const helpers = require('./project-1');


describe('multiplyByTen', () => {
    it('should return the given number multiplied by 10', () => {
        expect(helpers.multiplyByTen(undefined)).toBeNaN();
        expect(helpers.multiplyByTen('three')).toBeNaN();
    });
});


describe('subtractFive', () => {
    it('should subtract a number by five', () => { 
        // expect(helpers.subtractFive(undefined)).toBeNan();
        expect(helpers.subtractFive(10)).toBe(5);
        expect(helpers.subtractFive(20)).toBe(15);
        expect(helpers.subtractFive(45)).toBe(40);
    })
    
});


describe('areSameLength', () => {
    it('Should return strings that are the same length', () => {

        expect(helpers.areSameLength('seven','seven')).toBe(true);
        expect(helpers.areSameLength('two', 'two')).toBe(true);
        expect(helpers.areSameLength('six', 'six')).toBe(true);
        expect(helpers.areSameLength('three', 'three')).toBe(true);
    })

});

describe('areEqual', () => {
    it('Should return two numbers that are equal', () => {
        expect(helpers.areEqual(4, 4)).toBe(true);
        expect(helpers.areEqual(7, 7)).toBe(true);
        expect(helpers.areEqual(3, 3)).toBe(true);

    })
});

describe('lessThanNinety', () => {
    it('Should return a number less than 90 as true, or if more then false', () => {
        expect(helpers.lessThanNinety(89)).toBe(true);
        expect(helpers.lessThanNinety(61)).toBe(true);
        expect(helpers.lessThanNinety(100)).toBe(false);
        expect(helpers.lessThanNinety(91)).toBe(false);
        expect(helpers.lessThanNinety(92)).toBe(false);
        expect(helpers.lessThanNinety(14)).toBe(true)
    })
});

describe('greaterThanFifty', () => {
    it('Should return a number more than 50 as true, or else is false', () => {
        expect(helpers.greaterThanFifty(89)).toBe(true);
        expect(helpers.greaterThanFifty(61)).toBe(true);
        expect(helpers.greaterThanFifty(100)).toBe(true);
        expect(helpers.greaterThanFifty(91)).toBe(true);
        expect(helpers.greaterThanFifty(12)).toBe(false);
        expect(helpers.greaterThanFifty(14)).toBe(false);
        expect(helpers.greaterThanFifty(49)).toBe(false);
    });
});


describe('add', () => {
    it('Should return two numbers and add them', () => { 
        expect(helpers.add(5, 11)).toBe(16);
        expect(helpers.add(7, 17)).toBe(24);
        expect(helpers.add(22, 11)).toBe(33);
        expect(helpers.add(2, 33)).toBe(35);
    })
});

describe('subtract', () => {
    it('Should return two numbers and subtract them', () => {
        expect(helpers.subtract(4, 3)).toBe(1);
        expect(helpers.subtract(7, 3)).toBe(4);
        expect(helpers.subtract(14, 7)).toBe(7);
        expect(helpers.subtract(45, 4)).toBe(41);

    })
});

// start testing!



