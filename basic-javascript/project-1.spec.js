const helpers = require('./project-1');

describe('multiplyByTen', () => {
    it('takes a number and multiply it by 10', () => {
        expect(helpers.multiplyByTen(0)).toBe(0);
        expect(helpers.multiplyByTen(1)).toBe(10);
        expect(helpers.multiplyByTen(5)).toBe(50);
        expect(helpers.multiplyByTen(10)).toBe(100);
        expect(helpers.multiplyByTen(.5)).toBe(5);
        expect(helpers.multiplyByTen(-5)).toBe(-50);
    });

    it('returns NaN when given a non-numeric value', () => {
        expect(helpers.multiplyByTen(undefined)).toBeNaN();
        expect(helpers.multiplyByTen('ten')).toBeNaN();
        expect(helpers.multiplyByTen([-5, 10, 576])).toBeNaN();
        expect(helpers.multiplyByTen({key: "value"})).toBeNaN();
    });

    it("treats 'true' as 1 and 'false' as 0 when multiplied by 10", () => {
        expect(helpers.multiplyByTen(true)).toBe(10);
        expect(helpers.multiplyByTen(false)).toBe(0);
        expect(helpers.multiplyByTen(true + false)).toBe(10);
        expect(helpers.multiplyByTen(-true)).toBe(-10);
        expect(helpers.multiplyByTen(-false)).toBe(-0);
        expect(helpers.multiplyByTen(null)).toBe(0);
    });
});

describe('subtract five', () => {
    it('should take a number and subtract 5', () => {
        expect(helpers.subtractFive(5)).toBe(0);
        expect(helpers.subtractFive(-10)).toBe(-15);
        expect(helpers.subtractFive(35)).toBe(30);
        expect(helpers.subtractFive(.5)).toBe(-4.5);
        expect(helpers.subtractFive(-5)).toBe(-10);
        expect(helpers.subtractFive(10.55)).toBe(5.55);
    });

    it('should return NaN when given a non-numeric value', () => {
        expect(helpers.multiplyByTen(undefined)).toBeNaN();
        expect(helpers.subtractFive('ten')).toBeNaN();
        expect(helpers.subtractFive([-5, 10, 576])).toBeNaN();
        expect(helpers.subtractFive({key: "value"})).toBeNaN();
    });

    it("treats 'true' as 1 and 'false' as 0 when multiplied by 10", () => {
        expect(helpers.subtractFive(true)).toBe(-4);
        expect(helpers.subtractFive(false)).toBe(-5);
        expect(helpers.subtractFive(true + false)).toBe(-4);
        expect(helpers.subtractFive(-true)).toBe(-6);
        expect(helpers.subtractFive(-false)).toBe(-5);
        expect(helpers.subtractFive(null)).toBe(-5);
    });
})