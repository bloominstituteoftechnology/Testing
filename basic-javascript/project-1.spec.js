const helpers = require('./project-1');

// start testing!
describe("math number functions", () => {

    test("multiplies by ten", () => {
        const input = 7;
        const result = helpers.multiplyByTen(input);
        expect(result).toBe(10 * input);
    });

    test("subtracts five", () => {
        const input = 1273455;
        const result = helpers.subtractFive(input);
        expect(result).toBe(input - 5);
    });

    test("are equal", () => {
        const input = 654875920;
        const input2 = "qwo3ijb ";
        expect(helpers.areEqual(input, input)).toBe(true);
        expect(helpers.areEqual(input, input2)).toBe(false);
    });

    test("less than ninety", () => {
        expect(helpers.lessThanNinety(89)).toBe(true);
        expect(helpers.lessThanNinety(1285291409285901294810958230598120493)).toBe(false);
    });

    test("greater than fifty", () => {
        expect(helpers.greaterThanFifty(50.00000000000001)).toBe(true);
        expect(helpers.greaterThanFifty(-1285291409285901294810958230598120493)).toBe(false);
    });

    test("addition", () => {
        const input1 = 1298763409248012988440759845629;
        const input2 = 1287085509143;
        expect(helpers.add(input1, input2)).toBe(input1 + input2);
    });

    test("subtraction", () => {
        const input1 = 1298763409248012988440759845629;
        const input2 = 1287085509143;
        expect(helpers.subtract(input1, input2)).toBe(input1 - input2);
    });

    test("division", () => {
        const input1 = 1298763409248012988440759845629;
        const input2 = 1287085509143;
        expect(helpers.divide(input1, input2)).toBe(input1 / input2);
    });

    test("multiplication", () => {
        const input1 = 1298763409248012988440759845629;
        const input2 = 1287085509143;
        expect(helpers.multiply(input1, input2)).toBe(input1 * input2);
    });

    test("modulo", () => {
        const input1 = 1298763409248012988440759845629;
        const input2 = 1287085509143;
        expect(helpers.getRemainder(input1, input2)).toBe(input1 % input2);
    });

    test("addition", () => {
        const input1 = 1298763409248012988440759845629;
        const input2 = 1287085509143;
        expect(helpers.add(input1, input2)).toBe(input1 + input2);
    });

    test("is even", () => {
        const input1 = 1298763409248012988440759845629;
        const input2 = 1287085509142;
        expect(helpers.isEven(input1)).toBe(false);
        expect(helpers.isEven(input2)).toBe(true);
    });

    test("is odd", () => {
        const input1 = 1298763409248012988440759845629;
        const input2 = 1287085509142;
        expect(helpers.isOdd(input1)).toBe(true);
        expect(helpers.isOdd(input2)).toBe(false);
    });

    test("squaring", () => {
        const input = 127962858023;
        expect(helpers.square(input)).toBe(Math.pow(input, 2));
    });

    test("cubing", () => {
        const input = 127962858023;
        expect(helpers.cube(input)).toBe(Math.pow(input, 3));
    });

    test("exponents", () => {
        const input = 127962858023;
        const ex = 87;
        expect(helpers.raiseToPower(input, ex)).toBe(Math.pow(input, ex));
    });

    test("rounding", () => {
        const input = -4.7;
        const expected = -5;
        expect(helpers.roundNumber(input)).toBe(expected);
    });

    test("rounding up", () => {
        const input = -4.7;
        const expected = -4;
        expect(helpers.roundUp(input)).toBe(expected);
    })
    
});

describe("string functions", () => {

    test("compares lengths of strings", () => {
        const input1 = "asdfjkl;";
        const input2 = "boewijab";
        const input3 = "oibjwe";
        const input4 = { name: "asdfjkl;" };

        expect(helpers.areSameLength(input1, input2)).toBe(true);
        expect(helpers.areSameLength(input1, input3)).toBe(false);
        expect(helpers.areSameLength(input2, input3)).toBe(false);

        expect(() => helpers.areSameLength(input1, input4)).toThrow();
    });

    test("Adding exclamation mark", () => {
        const input = "12gaojbl23n5[093ug";
        expect(helpers.addExclamationPoint(input)).toBe(`${input}!`);
    });

    test("making full name", () => {
        const input1 = "McKay";
        const input2 = "Bonham";
        const expected = "McKay Bonham";
        expect(helpers.combineNames(input1, input2)).toBe(expected);
    });

    test("making greeting", () => {
        const input = "McKay";
        const expected = "Hello McKay!";
        expect(helpers.getGreeting(input)).toBe(expected);
    });

});

describe("geometry", () => {

    test("rectangle area", () => {
        const input1 = 52.2310269;
        const input2 = 16987.25;
        expect(helpers.getRectangleArea(input1, input2)).toBe(input1 * input2);
    });

    test("triangle area", () => {
        const input1 = 52.2310269;
        const input2 = 16987.25;
        expect(helpers.getTriangleArea(input1, input2)).toBe(input1 * input2 / 2);
    });

    test("circle area", () => {
        const input = 52.2310269;
        expect(helpers.getCircleArea(input)).toBe(Math.PI * Math.pow(input, 2));
    });

    test("box volume", () => {
        const input1 = 52.2310269;
        const input2 = 6987.25;
        const input3 = 2183.97523;
        expect(helpers.getRectangularPrismVolume(input1, input2, input3)).toBe(input1 * input2 * input3);
    });

});