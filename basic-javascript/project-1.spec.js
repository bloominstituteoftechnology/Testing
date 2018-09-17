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
    test('add(): test absence of arg', () => {
      let x, y=30;
      expect(add(x, y)).toBe(y);
    });
    test('add()', () => {
      expect(add(70, 'yo!')).toBe('70yo!');
    });
  });

  describe('subtract() should return difference of 2 numbers', () => {
    test('subtract()', () => {
      expect(subtract(70, 1)).toBe(69);
    });
    test('subtract()', () => {
      expect(subtract(70, 'yo!')).toBe(NaN);
    });
  });

  describe('divide() should return quotient of 2 numbers', () => {
    test('divide()', () => {
      expect(divide(70, 10)).toBe(7);
    });
    test('divide()', () => {
      expect(divide(70, 'yo!')).toBe(NaN);
    });
    test('divide()', () => {
      expect(divide(70, -1)).toBe(-70);
    });
    test('divide()', () => {
      expect(divide(70, '-1')).toBe(-70);
    });
    test('divide()', () => {
      expect(divide(70, '-one')).toBe(NaN);
    });
  });

  describe('multiply() should return product of 2 numbers', () => {
    test('multiply()', () => {
      expect(multiply(70, 1)).toBe(70);
    });
    test('multiply()', () => {
      expect(multiply(70, '-1')).toBe(-70);
    });
    test('multiply()', () => {
      expect(multiply(70, 'yo!')).toBe(NaN);
    });
  });

  describe('getRemainder() should return remainder of 2 numbers', () => {
    test('getRemainder()', () => {
      expect(getRemainder(70, 10)).toBe(0);
    });
    test('getRemainder()', () => {
      expect(getRemainder(70, 'yo!')).toBe(NaN);
    });
  });

  describe('getRemainder() should return remainder of 2 numbers', () => {
    test('getRemainder()', () => {
      expect(getRemainder(70, 10)).toBe(0);
    });
    test('getRemainder()', () => {
      expect(getRemainder(70, 'yo!')).toBe(NaN);
    });
  });

  describe('isEven() should return bool', () => {
    test('isEven()', () => {
      expect(isEven(71)).toBeFalsy();
    });
    test('isEven()', () => {
      expect(isEven(40)).toBeTruthy();
    });
    test('isEven()', () => {
      expect(isEven('yo!')).toBeFalsy();
    });
  });

  describe('isOdd() should return bool', () => {
    test('isOdd()', () => {
      expect(isOdd(70, 10)).toBeFalsy();
    });
    test('isOdd()', () => {
      expect(isOdd('yo!')).toBeTruthy();
    });
  });

  describe('square() should return the square of a number', () => {
    test('square()', () => {
      expect(square(7)).toBe(49);
    });
    test('square()', () => {
      expect(square('yo!')).toBeFalsy();
    });
    test('square()', () => {
      expect(square('42')).toBeTruthy();
    });
    test('square()', () => {
      expect(square(1.1)).toBeCloseTo(1.21, 3);
    });
  });

  describe('cube() should return cube of number', () => {
    test('cube()', () => {
      expect(cube(7)).toBeCloseTo(343);
    });
    test('cube()', () => {
      expect(cube('yo!')).toBeFalsy();
    });
  });

  describe('raiseToPower() should exponentiate', () => {
    test('raiseToPower()', () => {
      expect(raiseToPower(7,1)).toBe(7);
    });
    test('raiseToPower()', () => {
      expect(raiseToPower('yo!')).toBeFalsy();
    });
    test('raiseToPower()', () => {
      expect(raiseToPower('7', 1)).toBeTruthy();
    });
    test('raiseToPower()', () => {
      expect(raiseToPower(7, 3)).toBe(343);
    });
    test('raiseToPower()', () => {
      expect(raiseToPower(7, -3)).toBeCloseTo(0.0029, 4);
    });
  });

  describe('addExclamationPoint() adds ! to arg', () => {
    test('addExclamationPoint()', () => {
      expect(addExclamationPoint(7)).toBe('7!');
    });
    test('addExclamationPoint()', () => {
      expect(addExclamationPoint('yo!')).toBe('yo!!');
    });
  });

})