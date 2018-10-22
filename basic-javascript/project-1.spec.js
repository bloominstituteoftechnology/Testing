const helpers = require('./project-1');

// start testing!

test('should multiply provided number by 10', () => {
  const expected = 50;
  const actual = helpers.multiplyByTen(5);

  expect(actual).toEqual(expected);
})
