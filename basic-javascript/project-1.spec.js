const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
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
    getRectangularPrismVolume,
  } = helpers;

  describe('multiplyByTen', () => {
    
    it('should return a number multiplies by 10', () => {
      const expected = multiplyByTen(1);
      expect(expected).toEqual(10);
    });

    it('should return NaN when passed a non-numeric value', () => {
      expect(multiplyByTen('foo')).toEqual(NaN);
      // expect(multiplyByTen(true)).toEqual(NaN); // 1
      // expect(multiplyByTen(false)).toEqual(NaN); // 0
      expect(multiplyByTen(undefined)).toEqual(NaN);
      // expect(multiplyByTen(null)).toEqual(NaN); // 0
      expect(multiplyByTen({})).toEqual(NaN);
      // expect(multiplyByTen([])).toEqual(NaN); // 0
    });
  });

  describe('subtractFive', () => {
    it('should add five to any number passed', () => {
      expect(subtractFive(5)).toEqual(0);
    });

    it('should return NaN if passed a non-numeric value', () => {
      expect(subtractFive('foo')).toEqual(NaN);
      expect(subtractFive(undefined)).toEqual(NaN);
      expect(subtractFive({})).toEqual(NaN);
    });
  });

  describe('areSameLength', () => {
    it('should return true if lengths are the same', () => {
      expect(areSameLength('hello', 'hello')).toBeTruthy();
    });

    it('should return false if lengths are not the same', () => {
      expect(areSameLength('hello', 'goodbye')).toBeFalsy();
    });
  });

  describe('areEqual', () => {
    it('should return true if both values are equal', () => {
      expect(areEqual(1, 1)).toBeTruthy();
    });

    it('should return false if both values are not equal', () => {
      expect(areEqual(1, 2)).toBeFalsy();
    });
  });

  describe('lessThanNinety', () => {
    it('should return true if value is less than ninety', () => {
      expect(lessThanNinety(89)).toBeTruthy();
    });

    it('should return false if value is greater than or equal to ninety', () => {
      expect(lessThanNinety(90)).toBeFalsy();
      expect(lessThanNinety(91)).toBeFalsy();
    });
  });

  describe('greaterThanFifty', () => {
    it('should return true if value is greater than 50', () => {
      expect(greaterThanFifty(51)).toBeTruthy();
    });

    it('should return false if value is less than or equal to 50', () => {
      expect(greaterThanFifty(50)).toBeFalsy();
      expect(greaterThanFifty(49)).toBeFalsy();
    });
  });

  describe('add', () => {
    it('should return the total of two numbers passed', () => {
      expect(add(1, 1)).toEqual(2);
    });

    it('should return NaN if a non-numeric value is passed', () => {
      // expect(add('foo', 1)).toBeNaN(); // foo1
      // expect(add([], 1)).toBeNaN(); // 1
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers passed', () => {
      expect(subtract(1, 1)).toEqual(0);
    });
  });

  describe('divide', () => {
    it('should return the quotient of two numbers passed', () => {
      expect(divide(10, 2)).toEqual(5);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers passed', () => {
      expect(multiply(5, 5)).toEqual(25);
    });
  });

  describe('getRemainder', () => {
    it('should return the remainder of two numbers divided', () => {
      expect(getRemainder(5, 2)).toEqual(1);
    });
  });

  describe('isEven', () => {
    it('should return true if a number is even', () => {
      expect(isEven(2)).toBeTruthy();
    });

    it('should return false if number is odd', () => {
      expect(isEven(1)).toBeFalsy();
    });
  });

  describe('isOdd', () => {
    it('should return true if number is odd', () => {
      expect(isOdd(1)).toBeTruthy();
    });

    it('should return false if number is even', () => {
      expect(isOdd(2)).toBeFalsy();
    });
  });

  describe('square', () => {
    it('should return the value of a number squared', () => {
      expect(square(2)).toEqual(4);;
    });
  });

  describe('cube', () => {
    it('should return the value of a number cubed', () => {
      expect(cube(2)).toEqual(8);;
    });
  });

  describe('raiseToPower', () => {
    it('should multiply a number by the Nth power passed', () => {
      expect(raiseToPower(2, 5)).toEqual(32);
    });
  });

  describe('roundNumber', () => {
    it('should round a number do the nearest whole number', () => {
      expect(roundNumber(2.1)).toEqual(2);
      expect(roundNumber(2.5)).toEqual(3);
      expect(roundNumber(2.9)).toEqual(3);
    });
  });

  describe('roundUp', () => {
    it('should round a number up to the nearest whole number', () => {
      expect(roundUp(2.1)).toEqual(3);
      expect(roundUp(2)).toEqual(2);
    });
  });

  describe('addExclamationPoint', () => {
    it('should add an exclamation to the end of a string', () => {
      expect(addExclamationPoint('Hello')).toEqual('Hello!');
    });
  });

  describe('combineNames', () => {
    it('should join two strings together', () => {
      expect(combineNames('Brandon', 'Benefield')).toEqual('Brandon Benefield');
    });
  });

  describe('getGreeting', () => {
    it('should return a friendly greeting', () => {
      expect(getGreeting('Brandon')).toEqual('Hello Brandon!');
    });
  });

  describe('getRectangleArea', () => {
    it('should return the area', () => {
      expect(getRectangleArea(5, 10)).toEqual(50);
    });
  });

  describe('getTriangleArea', () => {
    it('should return the triangle area', () => {
      expect(getTriangleArea(5, 10)).toEqual(25);
    });
  });

  describe('getCircleArea', () => {
    it('should return the circular area', () => {
      expect(getCircleArea(5)).toEqual(78.53981633974483);
    });
  });

  describe('getRectangularPrismVolume', () => {
    it('should return the volume', () => {
      expect(getRectangularPrismVolume(1, 2, 3)).toEqual(6);
    });
  });
});



































































