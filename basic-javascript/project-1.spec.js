const helpers = require('./project-1');

// start testing!
it ('Should multiply a number by 10', () => {
    expect(helpers.multiplyByTen(1)).toBe(10);
    expect(helpers.multiplyByTen(0)).toBe(0);
    expect(helpers.multiplyByTen(10)).toBe(100);
});

it('Should subtract a number by 5', () => {
    expect(helpers.subtractFive(5)).toBe(0);
    expect(helpers.subtractFive(0)).toBe(-5);
    expect(helpers.subtractFive(10)).toBe(5);
});

it('Should return true if 2 strings are the same length', () => {
    expect(helpers.areSameLength("Hello", "World")).toBe(true);
    expect(helpers.areSameLength("best", "programmer")).toBe(false);
});

it('Should check if 2 values are strictly equal', () => {
    expect(helpers.areEqual("2", "2")).toBe(true);
    expect(helpers.areEqual("2", 2)).toBe(false);
    expect(helpers.areEqual(2, 2)).toBe(true);
    expect(helpers.areEqual(2, 3)).toBe(false);
});

it('Should check if a number is less than 90', () => {
    expect(helpers.lessThanNinety(89)).toBe(true);
    expect(helpers.lessThanNinety(90)).toBe(false);
    expect(helpers.lessThanNinety(0)).toBe(true);
    expect(helpers.lessThanNinety(-1)).toBe(true);
    expect(helpers.lessThanNinety("89")).toBe("Invalid argument: Not a number!");
});