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


  describe('test for subtractFive', () => {

    test('subtractFive', () => {
      expect(subtractFive(10)).toBe(5);
    });

  })

  describe('test for areSameLength', () => {

    test('areSameLength', () => {
      expect(areSameLength('wat', 'what')).toBeFalsy();
    });

  })

  describe('test for areEqual', () => {
    // What is params are objects or arrays?
    test('areEqual', () => {
      expect(areEqual('what', 'what')).toBeTruthy();
    });
    test('areEqual', () => {
      expect(areEqual(1, 0+1)).toBeTruthy();
    });
    // test('areEqual', () => {
    //   let ob1 = {keyster: 1};
    //   let ob2 = { keyster: 1 };
    //   expect(areEqual(ob1, ob2)).toBeTruthy();
    // });
  })

  describe('lessThanNinety should return true if a number is less than 90',()=>{
    test('lessThanNinety', ()=>{
      expect(lessThanNinety(70)).toBeTruthy();
    });
    test('lessThanNinety', () => {
      expect(lessThanNinety(90)).toBeFalsy();
    })
    test('lessThanNinety', () => {
      expect(lessThanNinety(1000)).toBeFalsy();
    })
    test('lessThanNinety', () => {
      expect(lessThanNinety('42')).toBeTruthy();
    })

  });

  describe('greaterThanFifty should return true if a number is > 50', () => {
    test('greaterThanFifty', () => {
      expect(greaterThanFifty(70)).toBeTruthy();
    });
    test('greaterThanFifty', () => {
      expect(greaterThanFifty(-90)).toBeFalsy();
    })
    test('lessThanNinety', () => {
      expect(greaterThanFifty('144')).toBeTruthy();
    })
    test('greaterThanFifty', () => {
      expect(greaterThanFifty('string')).toBeFalsy();
    })
    test('greaterThanFifty', () => {
      expect(greaterThanFifty('90.6')).toBeTruthy();
    })
  });

  describe('add() should return sum of 2 numbers', () => {
    test('add()', () => {
      expect(add(70, 1)).toBe(71);
    });
  
  });

})