const helpers = require('./project-1');

// start testing!

/* 
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
*/

it('multiplyByTen()', () => {
  const expected = 1000;
  const actual = helpers.multiplyByTen(100);    
  expect(actual).toEqual(expected);
});

it('subtractFive', () => {
  const expected = 995;
  const actual = helpers.subtractFive(1000);    
  expect(actual).toEqual(expected);
})

it('areSameLength', () => {})

it('areEqual', () => {})

it('lessThanNinety', () => {})


/*
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
*/


// it('greaterThanFifty', () => {})

// it('add', () => {})

// it('subtract', () => {})

// it('divide', () => {})

// it('multiply', () => {})


// /*
//   getRemainder,
//   isEven,
//   isOdd,
//   square,
//   cube,
// */

// it('getRemainder', () => {})

// it('isEven', () => {})

// it('isOdd', () => {})

// it('square', () => {})

// it('cube', () => {})


// /*
//   raiseToPower,
//   roundNumber,
//   roundUp,
//   addExclamationPoint,
//   combineNames,
// */


// it('raiseToPower', () => {})

// it('roundNumber', () => {})

// it('roundUp', () => {})

// it('addExclamationPoint', () => {})

// it('combineNames', () => {})


// /*
//   getGreeting,
//   getRectangleArea,
//   getTriangleArea,
//   getCircleArea,
//   getRectangularPrismVolume
// */


// it('getGreeting', () => {})

// it('getRectangleArea', () => {})

// it('getTriangleArea', () => {})

// it('getCircleArea', () => {})

// it('getRectangularPrismVolume', () => {})