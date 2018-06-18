const helpers = require('./project-1');

// start testing!
describe('multiplyByTen', () => {
    it('multiplies by 10', () => {
        expect(helpers.multiplyByTen(5)).toBe(50);
        expect(helpers.multiplyByTen(6)).toBe(60);
        expect(helpers.multiplyByTen(60)).toBe(600);
    });
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.multiplyByTen(undefined)).toBeNaN();
        expect(helpers.multiplyByTen('two')).toBeNaN();
    });
});

describe('subtractFive', () => { 
    it('subtracts by 5', () => {
        expect(helpers.subtractFive(5)).toBe(0);
        expect(helpers.subtractFive(6)).toBe(1);
        expect(helpers.subtractFive(60)).toBe(55);
    });
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.multiplyByTen(undefined)).toBeNaN();
        expect(helpers.multiplyByTen('two')).toBeNaN();
    });
});

describe('areSameLength', () => { 
    it('returns true when strings are same length', () => {
        expect(helpers.areSameLength('abcd', 'ghjh')).toBe(true);
        expect(helpers.areSameLength('f5hgf', 'fkmd4')).toBe(true);
        expect(helpers.areSameLength('g', 'T')).toBe(true);
    });
    it('returns false when strings are different lengths', () => {
        expect(helpers.areSameLength('abcdf', 'ghjh')).toBe(false);
        expect(helpers.areSameLength('f5hgf', 'fkmd4r')).toBe(false);
        expect(helpers.areSameLength('gf', 't')).toBe(false);
    });
});

describe('areSameLength', () => { 
    it('returns true when strings are same length', () => {
        expect(helpers.areSameLength('abcd', 'ghjh')).toBe(true);
        expect(helpers.areSameLength('f5hgf', 'fkmd4')).toBe(true);
        expect(helpers.areSameLength('g', 'T')).toBe(true);
    });
    it('returns false when strings are different lengths', () => {
        expect(helpers.areSameLength('abcdf', 'ghjh')).toBe(false);
        expect(helpers.areSameLength('f5hgf', 'fkmd4r')).toBe(false);
        expect(helpers.areSameLength('gf', 't')).toBe(false);
    });
});