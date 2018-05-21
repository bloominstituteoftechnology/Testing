const funcs = require('../basic-javascript/project-1.js');

// write your tests here multiplybyTen

//testing tester test code
// it('Testing the test', () => {});

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

it('Should subtract to 3', () => {
  expect(funcs.subtract(10, 7)).toBe(3)
})

it('Should divide to 2', () => {
  expect(funcs.divide(10, 5)).toBe(2)
})

it('Should multiply to 15', () => {
  expect(funcs.multiply(5, 3)).toBe(15)
})

it('Should get remainder of 2', () => {
  expect(funcs.getRemainder(5, 3)).toBe(2)
})

it('Should check if number is even', () => {
  expect(funcs.isEven(4)).toBeTruthy()
  expect(funcs.isEven(5)).toBeFalsy()
})

it('Should check if number is odd', () => {
  expect(funcs.isOdd(6)).toBeFalsy()
  expect(funcs.isOdd(3)).toBeTruthy()
})

it('Number should be squared', () => {
  expect(funcs.square(3)).toBe(9)
})

it('Number should be cubed', () => {
  expect(funcs.cube(3)).toBe(27)
})

it('Number should be rounded', () => {
  expect(funcs.roundNumber(6.3)).toBe(6)
})

it('Number should be rounded up', () => {
  expect(funcs.roundUp(4.2)).toBe(5)
})

it('Should have exclaimation point', () => {
  expect(funcs.addExclamationPoint('Fumo')).toBe('Fumo!')
})

it('Should have first and last name combined', () => {
  expect(funcs.combineNames('Hideo', 'Kojima')).toBe('Hideo Kojima')
})

it('Should have Hello added to name', () => {
  expect(funcs.getGreeting('Kojima')).toBe('Hello Kojima!')
})

it('Should get area of rectangle', () => {
  expect(funcs.getRectangleArea(30, 40)).toBe(1200)
})

it('Should get area of circle', () => {
  expect(funcs.getCircleArea(5)).toBe(78.53981633974483)
  expect(funcs.getCircleArea(0)).toBe(0)
})

it('Should get volume of rectangular prism', () => {
  expect(funcs.getRectangularPrismVolume(5, 2, 3)).toBe(30)
});

