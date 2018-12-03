const helpers = require('./project-1');

// start testing!
describe('multiplyByTen', () => {
  test('multiply by 10', () => {
    const input = 10;
    const expected = 100;

    const actual = helpers.multiplyByTen(input);

    expect(actual).toBe(expected);
  });
});

test('subtract by 5', () => {
  const input = 25;
  const expected = 20;

  const actual = helpers.subtractFive(input);

  expect(actual).toBe(expected);
});
