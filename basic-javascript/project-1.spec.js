const {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
} = require('./project-1');

// start testing!
describe('Multiply by ten', ()=>{
it('multiplys a number by ten', ()=>{
  expect(2+2).toBe(4)

}) 

  test('multiply 5 by 10', () => {

    const input = 5;

    const expected = 50;

    const result = multiplyByTen(input)

    expect(result).toBe(50)
  })
})
