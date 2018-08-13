const helpers = require('./project-1');

// start testing!
test('multiply input by 10', () => {
  expect(helpers.multiplyByTen(9)).toBe(90);
});

test('multiply input by 10', () => {
  expect(helpers.multiplyByTen(0)).toBe(0);
})

test('multiply input by 10', () => {
  expect(helpers.multiplyByTen(1000000)).toBe(10000000);
})

test('subtracts input by 5', () => {
  expect(helpers.subtractFive(10)).toBe(5);
})

test('subtracts input by 5', () => {
  expect(helpers.subtractFive(5)).toBe(0);
})

test('subtracts input by 5', () => {
  expect(helpers.subtractFive(0)).toBe(-5);
});
