const helpers = require('./project-1');

// start testing!

describe('project-1.js', () => {
 
  // multiplyByTen
  test("should provide correct value when multiplying by 10", () => {
    const expected = 50;
    const actual = helpers.multiplyByTen(5);
    expect(actual).toEqual(expected);
  });

  // subtractFive
  test("should provide correct value when subtracting by 5", () => {
    const expected = 20;
    const actual = helpers.subtractFive(25);
    expect(actual).toEqual(expected);
  });

  // areSameLength
  test("should return true when both inputs are in fact the same length", () => {
    const expected = true;
    const actual = helpers.areSameLength("car", "and");
    expect(actual).toEqual(expected);
  });

}); 