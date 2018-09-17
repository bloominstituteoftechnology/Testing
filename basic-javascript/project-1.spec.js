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
describe('Testing block for helper methods',()=>{

  describe('test for multiplyByTen', ()=>{

    test('multiplyByTen', () => {
      expect(multiplyByTen(0.3)).toBe(3);
    });

    test('multiplyByTen', () => {
      expect(multiplyByTen(1)).toBe(10);
    })

    test('multiplyByTen', () => {
      expect(multiplyByTen(0)).toBe(0);
    })
  })


  describe('test for multiplyByTen', () => {

    test('subtractFive', () => {
      expect(subtractFive(10)).toBe(5);
    });

  })

  describe('test for multiplyByTen', () => {

    test('areSameLength', () => {
      expect(areSameLength('wat', 'what')).toBe(false);
    });

  })



})