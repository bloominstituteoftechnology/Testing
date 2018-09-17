const helpers = require('./project-1');

// start testing!
it('should add two whole numbers', ()=> {
    expect(helpers.add(3, 4)).toBe(7);
    expect(helpers.add(0, 0)).toBe(0);
    expect(helpers.add(3, -4)).toBe(-1);
    expect(helpers.add(0, 4)).toBe(4);
})

it('should multiply by ten', ()=> {
    expect(helpers.multiplyByTen(3.5)).toBe(35);
    expect(helpers.multiplyByTen(5)).toBe(50);
    expect(helpers.multiplyByTen(10)).toBe(100);
    expect(helpers.multiplyByTen(0)).toBe(0);
})

it('should subtract five', ()=> {
    expect(helpers.subtractFive(3)).toBe(-2);
    expect(helpers.subtractFive(100)).toBe(95);
    expect(helpers.subtractFive(0)).toBe(-5);
    expect(helpers.subtractFive(5)).toBe(0);
})

it('should compare for equal length', ()=> {
    expect(helpers.areSameLength("12345", "1234")).toBe(false);
    expect(helpers.areSameLength("12345", "12345")).toBe(true);
    expect(helpers.areSameLength("cat", "dog")).toBe(true);
    expect(helpers.areSameLength("1", "")).toBe(false);
})

it('should compare for equal value', ()=> {
    expect(helpers.areEqual(3, 3)).toBe(true);
    expect(helpers.areEqual("3", 3)).toBe(false);
    expect(helpers.areEqual("cat", "cat")).toBe(true);
})