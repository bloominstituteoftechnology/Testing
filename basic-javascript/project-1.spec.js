const funcs = require('../basic-javascript/project-1.js');

// write your tests here multiplybyTen
it('Testing the test', () => {});

it('should multiply by ten', () => {
  //arrange
  const expected = 30;
  const multiplyby10 = funcs.multiplyByTen;

  //act
  const product = multiplyby10(3);

  //assert
  expect(product).toBe(expected);
});

//subtractFive
it('Should subtract five', () => {
  // long version for reference const expected = 25; const subtractFive =
  // funcs.subtractFive const subtraction = subtractFive(30);
  // expect(subtraction).toBe(expected); single line version
  expect(funcs.subtractFive(30)).toBe(25)
});

//areSameLength

it('Should be same length', () => {
  expect(funcs.areSameLength('a', 'b')).toBeTruthy()
  expect(funcs.areSameLength('a', 'bcd')).toBeFalsy()
})

it('Should be equal', () => {
  expect(funcs.areEqual(5, 3)).toBeFalsy()
  expect(funcs.areEqual(6, 6)).toBeTruthy()
})

it('Should be less than 90', () => {
  expect(funcs.lessThanNinety(40)).toBeTruthy()
  expect(funcs.lessThanNinety(100)).toBeFalsy()
})

it('Expected greater than 50', () => {
  expect(funcs.greaterThanFifty(70)).toBeTruthy()
  expect(funcs.greaterThanFifty(30)).toBeFalsy()
})

it('Should add up to 20', () => {
  expect(funcs.add(3, 5)).toBe(8)
})