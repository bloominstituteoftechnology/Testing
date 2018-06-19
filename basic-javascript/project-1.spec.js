const helpers = require('./project-1');

// start testing!
describe.skip('project-1', () => {
    describe('multiplyByTen', () => {
        it('returns NaN when given a non numeric value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('two')).toBeNaN();
            expect(helpers.multiplyByTen(false)).toEqual(0);
        })
        it('should return the given number muliplied by 10', () => {
            expect(helpers.multiplyByTen(10)).toEqual(100);
            expect(helpers.multiplyByTen(-10)).toEqual(-100);
            expect(helpers.multiplyByTen(0)).toEqual(0);
        });
    })
})

describe.skip('project-1', () => {
    describe('subtractFive', () => {
        it('returns NaN when given a non numeric value', () => {
            expect(helpers.subtractFive(undefined)).toBeNaN();
            expect(helpers.subtractFive('two')).toBeNaN();
        })
        it('should return the given number subtracted by five', () => {
            expect(helpers.subtractFive(10)).toEqual(5);
            expect(helpers.subtractFive(-10)).toEqual(-15);
            expect(helpers.subtractFive(0)).toEqual(-5);
            
        });
    })
})

describe.skip('project-1', () => {
    describe('isEven', () => {
        it('should return true for even numbers', () => {
            expect(helpers.isEven(4)).toBeTruthy();
            expect(helpers.isEven(0)).toBeTruthy();
        });
        it('should return false for false numbers', () => {
            expect(helpers.isEven(3)).toBeFalsy();
            expect(helpers.isEven(-1)).toBeFalsy();
        });
    });

});

describe('project-1', () => {
    describe('areSameLength', () => {
        it('should return true for even numbers', () => {
            expect(helpers.areSameLength("The", "The")).toBeTruthy();
            expect(helpers.areSameLength("Two", "Cat")).toBeTruthy();
        });
        it('should return false for false numbers', () => {
            expect(helpers.areSameLength("At", "I")).toBeFalsy();
            expect(helpers.areSameLength("", " ")).toBeFalsy();
        });
    });

});

describe('project-1', () => {
    describe('areEqual', () => {
        it('should return true for even numbers', () => {
            expect(helpers.areEqual("The", "The")).toBeTruthy();
            expect(helpers.areEqual(5, 5)).toBeTruthy();
            expect(helpers.areEqual(" ", " ")).toBeTruthy();
        });
        it('should return false for false numbers', () => {
            expect(helpers.areEqual("At", "at")).toBeFalsy();
            expect(helpers.areEqual( 5, "five" )).toBeFalsy();
            expect(helpers.areEqual("", " ")).toBeFalsy();
        });
    });

});


