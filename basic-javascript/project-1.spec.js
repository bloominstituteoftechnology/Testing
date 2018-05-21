const funcs = require('./project-1');
// write your tests here

describe('default', () => {
    it('run the tests', () => {});
})

describe('projecct 1 testing', () => {
    it('should multiple by 10', () => {
        const multiplyByTen = funcs.multiplyByTen;

        const oneHundred = multiplyByTen(10);
        const oneFifty = multiplyByTen(15);
        const twenty = multiplyByTen(2);

        expect(oneHundred).toBe(100);
        expect(oneFifty).toBe(150);
        expect(twenty).toBe(20);

    })

    it('should subtract 5', () => {
        const subtractFive = funcs.subtractFive;

        const five = subtractFive(10);
        const ten = subtractFive(15);
        const twenty = subtractFive(25);

        expect(five).toBe(5);
        expect(ten).toBe(10);
        expect(twenty).toBe(20);
    })

    it('should checck if two strings have the same length', () => {
        const areSameLength = funcs.areSameLength;

        const city = "New York";
        const state = "New York";
        const country = "America";

        expect(city,state).toBe(true);
        expect(city,country).toBe(false);
        expect(state,city).toBe(true);
    })
});