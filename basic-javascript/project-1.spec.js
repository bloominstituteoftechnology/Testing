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
  });;
  
  it('subtractFive', () => {
    const expected = 995;
    const actual = helpers.subtractFive(1000);    
    expect(actual).toEqual(expected);
  });
  
  it('areSameLength', () => {
    const strings = helpers.areSameLength('potatoes', 'potatoes');
    const expected = true;
    expect(strings).toEqual(expected);
  });
  
  it('areEqual', () => {
    const expected = true;
    const actual = helpers.areEqual(5, 5);
    expect(actual).toEqual(expected);
  });
  
  it('lessThanNinety', () => {
    const expected = true;
    const actual = helpers.lessThanNinety(89.9999) ;
    expect(actual).toEqual(expected);
  });
});



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
  });

  it('add', () => {
    const expected = 19;
    const actual = helpers.add(9, 10);
    expect(actual).toEqual(expected);
  });
  
  it('subtract', () => {
    const expected = 0;
    const actual = helpers.subtract(2, 2);
    expect(actual).toEqual(expected);
  });
  
  it('divide', () => {
    const expected = 2;
    const actual = helpers.divide(4, 2);
    expect(actual).toEqual(expected);
  });
  
  it('multiply', () => {
    const expected = 8;
    const actual = helpers.multiply(4, 2);
    expect(actual).toEqual(expected);
  });
});



/*
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,

  const expected = ;
  const actual = helpers.;
  expect(actual).toEqual(expected);
*/

describe('11-15', () => {
  it('getRemainder', () => {
    const expected = 1;
    const actual = helpers.getRemainder(5, 2);
    expect(actual).toEqual(expected);
  });

  it('isEven', () => {
    const expected = true;
    const actual = helpers.isEven(4);
    expect(actual).toEqual(expected);
  });
  
  it('isOdd', () => {
    const expected = true;
    const actual = helpers.isOdd(5);
    expect(actual).toEqual(expected);
  });
  
  it('square', () => {
    const expected = 4;
    const actual = helpers.square(2);
    expect(actual).toEqual(expected);
  });
  
  it('cube', () => {
    const expected = 1;
    const actual = helpers.cube(1);
    expect(actual).toEqual(expected);
  });
});



/*
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,

  const expected = ;
  const actual = helpers.;
  expect(actual).toEqual(expected);
*/

describe('16-20', () => {
  it('raiseToPower', () => {
    const expected = 16;
    const actual = helpers.raiseToPower(4, 2);
    expect(actual).toEqual(expected);
  });

  it('roundNumber', () => {
    const expected = 5;
    const actual = helpers.roundNumber(4.9);
    expect(actual).toEqual(expected);
  });
  
  it('roundUp', () => {
    const expected = 5;
    const actual = helpers.roundUp(4.2);
    expect(actual).toEqual(expected);
  });
  
  it('addExclamationPoint', () => {
    const expected = 'when pigs fly!';
    const actual = helpers.addExclamationPoint('when pigs fly');
    expect(actual).toEqual(expected);
  });
  
  it('combineNames', () => {
    const expected = 'Spongebob Squarepants';
    const actual = helpers.combineNames('Spongebob', 'Squarepants');
    expect(actual).toEqual(expected);
  });
});



/*
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume

  const expected = ;
  const actual = helpers.;
  expect(actual).toEqual(expected);
*/

describe.only('21-25', () => {
  it('getGreeting', () => {
    const expected = 'Hello Bob!';
    const actual = helpers.getGreeting('Bob');
    expect(actual).toEqual(expected);
  });

  it('getRectangleArea', () => {
    const expected = 15;
    const actual = helpers.getRectangleArea(5, 3);
    expect(actual).toEqual(expected);
  });
  
  it('getTriangleArea', () => {
    const expected = 2;
    const actual = helpers.getTriangleArea(2,2);
    expect(actual).toEqual(expected);
  });
  
  it('getCircleArea', () => {
    const expected = Math.PI * 4;
    const actual = helpers.getCircleArea(2);
    expect(actual).toEqual(expected);
  });
  
  it('getRectangularPrismVolume', () => {
    const expected = 24;
    const actual = helpers.getRectangularPrismVolume(2,3,4);
    expect(actual).toEqual(expected);
  });
});
