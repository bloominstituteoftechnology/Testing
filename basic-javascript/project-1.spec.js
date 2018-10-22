const helpers = require('./project-1');

// start testing!

/* 
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
*/
describe('1-5', () => {
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
  
  it('areSameLength', () => {
    const strings = helpers.areSameLength('potatoes', 'potatoes');
    const expected = true;
    expect(strings).toEqual(expected);
  })
  
  it('areEqual', () => {
    const expected = true;
    const actual = helpers.areEqual(5, 5);
    expect(actual).toEqual(expected);
  })
  
  it('lessThanNinety', () => {
    const expected = true;
    const actual = helpers.lessThanNinety(89.9999) ;
    expect(actual).toEqual(expected);
  })
})



/*
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  
  const expected = ;
  const actual = helpers.;
  expect(actual).toEqual(expected);
*/

describe('6-10', () => {
  it('greaterThanFifty', () => {
    const expected = true;
    const actual = helpers.greaterThanFifty(50.000001);
    expect(actual).toEqual(expected);
  })

  it('add', () => {
    const expected = 19;
    const actual = helpers.add(9, 10);
    expect(actual).toEqual(expected);
  })
  
  it('subtract', () => {
    const expected = 0;
    const actual = helpers.subtract(2, 2);
    expect(actual).toEqual(expected);
  })
  
  it('divide', () => {
    const expected = 2;
    const actual = helpers.divide(4, 2);
    expect(actual).toEqual(expected);
  })
  
  it('multiply', () => {
    const expected = 8;
    const actual = helpers.multiply(4, 2);
    expect(actual).toEqual(expected);
  })
})



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