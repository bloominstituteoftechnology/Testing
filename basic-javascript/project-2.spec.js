const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("", () => {

    test("get biggest", () => {
        const input1 = 267987523;
        const input2 = 1276524;
        expect(funcs.getBiggest(input1, input2)).toBe(input1);
    });

    test("greeting", () => {
        const input = "Russian";
        const expected = "Zdrastvuytye!";
        expect(funcs.greeting(input)).toBe(expected);
    });

    test("is 10 or 5", () => {
        const ten = 10;
        const five = 5;
        const other = 12987623;
        expect(funcs.isTenOrFive(ten)).toBe(true);
        expect(funcs.isTenOrFive(five)).toBe(true);
        expect(funcs.isTenOrFive(other)).toBe(false);
    });

});