const helpers = require('./project-1');

// start testing!
describe('multiplyByTen', () => {
  test('Return a pos number multiplied by 10', () => {
    expect(helpers.multiplyByTen(10)).toBe(100);
  });
  test('Return a neg number multiplied by 10', () => {
    expect(helpers.multiplyByTen(-400)).toBe(-4000);
  });
  test('multiply by 0', () => {
    expect(helpers.multiplyByTen(0)).toBe(0);
  })
});

describe('subtractFive', () => {
  test('against positive number', () => {
    expect(helpers.subtractFive(100)).toBe(95);
  });
  test('against negative number', () => {
    expect(helpers.subtractFive(-100)).toBe(-105);
  });
});

describe('areSameLength', () => {
  test('not same length', () => {
    expect(helpers.areSameLength('dog', 'kitty')).toBe(false);
  });
  test('same length', () => {
    expect(helpers.areSameLength('dog', 'hog')).toBe(true);
  });
});

describe('areEqual', () => {
  test('strings !==', () => {
    expect(helpers.areEqual('dog','dot')).toBe(false);
  })
  test('strings ===', () => {
    expect(helpers.areEqual('dog',"dog")).toBe(true);
  })
  test('Different types', () => {
    expect(helpers.areEqual(5, "5")).toBe(false);
  })

})
