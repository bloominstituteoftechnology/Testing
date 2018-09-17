const helpers = require('./project-1');

// start testing!
it('should multiply a number by ten', () => {
    expect(helpers.multiplyByTen(4)).toBe(40)
    expect(helpers.multiplyByTen(-7)).toBe(-70)
});

it('should subtract 5 from a given number', () => {
    expect(helpers.subtractFive(10)).toBe(5)
    expect(helpers.subtractFive(7.75)).toBe(2.75)
});

it('should check if two strings are the same length', () => {
    expect(helpers.areSameLength('hello', 'howdy')).toBe(true)
    expect(helpers.areSameLength('hello', false)).toBe(true)
    expect(helpers.areSameLength('hi', 12)).toBe(true)
});