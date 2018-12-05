const helpers = require('./project-1');

// start testing!

it('should run project1 tests', () => {
  expect(helpers.multiplyByTen(2)).toBe(20);
  expect(helpers.multiplyByTen('sister')).toBe(false);
  expect(helpers.multiplyByTen('5')).toBe(50);
  expect(helpers.multiplyByTen(true)).toBe(false);

  expect(helpers.subtractFive(7)).toBe(2);
  expect(helpers.subtractFive('9')).toBe(4);
  expect(helpers.subtractFive('brother')).toBe(false);
  expect(helpers.subtractFive(true)).toBe(false);

  expect(helpers.areSameLength('sister', 'mother')).toBe(true);
  expect(helpers.areSameLength('sister', 'brother')).toBe(false);
  expect(helpers.areSameLength(1, 'I')).toBe(true);
  expect(helpers.areSameLength(false, 'false')).toBe(true);

  expect(helpers.areEqual(1, '1')).toBe(true);
  expect(helpers.areEqual(true, 'true')).toBe(true);
  expect(helpers.areEqual((2*'one'), (0/2))).toBe(false);

  expect(helpers.lessThanNinety('50')).toBe(true);
  expect(helpers.lessThanNinety(87)).toBe(true);
  expect(helpers.lessThanNinety('fifty')).toBe(false);
  expect(helpers.lessThanNinety(true)).toBe(false);

  expect(helpers.greaterThanFifty(60)).toBe(true);
  expect(helpers.greaterThanFifty('80')).toBe(true);
  expect(helpers.greaterThanFifty('ninety')).toBe(false);
  expect(helpers.greaterThanFifty(true)).toBe(false);

  expect(helpers.add(1, 2)).toBe(3);
  expect(helpers.add('1', 7)).toBe(8);
  expect(helpers.add(true, '5')).toBe(5);
  expect(helpers.add('hello', true)).toBe(false);

  expect(helpers.subtract(5, '2')).toBe(3);
  expect(helpers.subtract('3', 9)).toBe(-6);
  expect(helpers.subtract('love', 'hate')).toBe(false);
  expect(helpers.subtract('money', 2000)).toBe(false);
  expect(helpers.subtract(2000, 'money')).toBe(2000);

  expect(helpers.divide(6, '3')).toBe(2);
  expect(helpers.divide(2, 4)).toBeCloseTo(.5, 5);
  expect(helpers.divide('6', true)).toBe(6);
  expect(helpers.divide(true, '6')).toBe(false);
  expect(helpers.divide('mother', 6)).toBe(false);

  expect(helpers.multiply('5', 2)).toBe(10);
  expect(helpers.multiply(1, 5)).toBe(5);
  expect(helpers.multiply(5, 'five')).toBe(false);
  expect(helpers.multiply(true, '6')).toBe(false);

  expect(helpers.getRemainder(4, 2)).toBe(0);
  expect(helpers.getRemainder('12', '5')).toBe(2);
  expect(helpers.getRemainder(true, 6)).toBe(false);
  expect(helpers.getRemainder('Sam', '3')).toBe(false);

  expect(helpers.isEven(6)).toBe(true);
  expect(helpers.isEven('8')).toBe(true);
  expect(helpers.isEven('ten')).toBe(false);
  expect(helpers.isEven(true)).toBe(false);

  expect(helpers.isOdd(7)).toBe(true);
  expect(helpers.isOdd('7')).toBe(true);
  expect(helpers.isOdd('nine')).toBe(false);
  expect(helpers.isOdd(true)).toBe(false);

  expect(helpers.square(6)).toBe(36);
  expect(helpers.square('8')).toBe(64);
  expect(helpers.square('ten')).toBe(false);
  expect(helpers.square(true)).toBe(false);

  expect(helpers.cube(2)).toBe(8);
  expect(helpers.cube('2')).toBe(8);
  expect(helpers.cube('two')).toBe(false);
  expect(helpers.cube(true)).toBe(false);

  expect(helpers.raiseToPower(2, 3)).toBe(8);
  expect(helpers.raiseToPower('2', 2)).toBe(4);
  expect(helpers.raiseToPower('two', 2)).toBe(false);
  expect(helpers.raiseToPower('2', true)).toBe(false);

  expect(helpers.roundNumber(2.3)).toBe(2);
  expect(helpers.roundNumber('2.8')).toBe(3);
  expect(helpers.roundNumber('five point five')).toBe(false);
  expect(helpers.roundNumber(true)).toBe(false);

  expect(helpers.roundUp(2.3)).toBe(3);
  expect(helpers.roundUp('3.3')).toBe(4);
  expect(helpers.roundUp('five point five')).toBe(false);
  expect(helpers.roundUp(true)).toBe(false);

  expect(helpers.addExclamationPoint('Hello')).toBe('Hello!');
  expect(helpers.addExclamationPoint(2)).toBe('2!');
  expect(helpers.addExclamationPoint(true)).toBe('true!');
  expect(helpers.addExclamationPoint({greeting: 'Hello'})).toBe(false);

  expect(helpers.combineNames('Jordan', 'Massingill')).toBe('Jordan Massingill');
  expect(helpers.combineNames(true, 'Massingill')).toBe('true Massingill');
  expect(helpers.combineNames('Jordan', 5)).toBe('Jordan 5');
  expect(helpers.combineNames({first_name:'Jordan', lase_name:'Massingill'})).toBe(false);

  expect(helpers.getGreeting('Jordan')).toBe('Hello, Jordan!');
  expect(helpers.getGreeting(false)).toBe('Hello, false!');
  expect(helpers.getGreeting(6)).toBe('Hello, 6!');
  expect(helpers.getGreeting({first_name: 'Jordan'})).toBe(false);

  expect(helpers.getRectangleArea('5', 2)).toBe(10);
  expect(helpers.getRectangleArea(1, 5)).toBe(5);
  expect(helpers.getRectangleArea(5, 'five')).toBe(false);
  expect(helpers.getRectangleArea(true, '6')).toBe(false);

  expect(helpers.getTriangleArea(2, 2)).toBeCloseTo(2, 5);
  expect(helpers.getTriangleArea('2', 2)).toBeCloseTo(2, 5);
  expect(helpers.getTriangleArea('two', 2)).toBe(false);
  expect(helpers.getTriangleArea(true, 2)).toBe(false);

  expect(getCircleArea(5)).toBeCloseTo(79.54, 10);
  expect(getCircleArea('5')).toBeCloseTo(79.54, 10);
  expect(getCircleArea('five')).toBe(false);
  expect(getCircleArea(true)).toBe(false);

  expect(getRectangularPrismVolume(2, 1, 3)).toBe(6);
  expect(getRectangularPrismVolume(2, '1', 3)).toBe(6);
  expect(getRectangularPrismVolume(2, 'one', 3)).toBe(false);
  expect(getRectangularPrismVolume(2, 1, true)).toBe(false);

})
