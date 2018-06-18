const helpers = require('./project-1');

// start testing!

describe('project-1', () => {
    describe('multiplyByTen', () => {
        it('return NaN when given a non numeric value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('ten')).toBeNan();
            expect(helpers.multiplyByTen(false)).toEqual(0);
            expect(helpers.multiplyByTen(true)).toEqual(10);
        });

        it('should return the given number multiplied by 10', () => {
            // arrange
            const expected = 30;
            // act
            const actual = helpers.multiplyByTen(3)
            // assert 
            expect(actual).toEqual(expected);
        });
    });

    describe('subtractFive', () => {
        it('returns NaN when not given a integer', () => {
            expect(helpers.subtractFive(undefined)).toBeNan();
        });
    });

});






