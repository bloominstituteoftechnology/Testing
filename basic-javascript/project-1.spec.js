const helpers = require('./project-1');

describe('math helpers', () => {
  it('runs the tests', () => {
    expect(true).toBe(true);
  });

  describe('multiply by 10', () => {
    it('should multiply the number by 10', () => {
      expect(helpers.multiplyByTen(2)).toEqual(20);
      expect(helpers.multiplyByTen(0)).toEqual(0);
      expect(helpers.multiplyByTen(-3)).toEqual(-30);
    });

    it('should throw an error when the value passed is undefined', () => {
      const product = () => helpers.multiplyByTen();
      expect(product).toThrow();
    });

    it('should throw an error when the value passed is NaN', () => {
      const product = () => helpers.multiplyByTen(NaN);
      expect(product).toThrow();
    });

    it('should throw an error when the value passed is anything but a number', () => {
      const product1 = () => helpers.multiplyByTen('a');
      expect(product1).toThrow();
      const product2 = () => helpers.multiplyByTen([1, 2, 3]);
      expect(product2).toThrow();
    });

    it('should throw an error when the product is larger than the max safe number', () => {
      // arrange / setup
      const max = Number.MAX_SAFE_INTEGER / 10 + 1;
      // act / execute the System Under Test (SUT)
      const product = () => helpers.multiplyByTen(max); // throws have to be wrapped in functions
      // const product = helpers.multiplyByTen(max);
      // assert : check your assumptions
      expect(product).toThrow();
    });

    it('should throw an error when the product is smaller than the min safe number', () => {
      const min = Number.MIN_SAFE_INTEGER / 10 - 1;
      const product = () => helpers.multiplyByTen(min);
      expect(product).toThrow();
    });

    it('should throw an error when more than one argument is passed in', () => {
      const product = () => helpers.multiplyByTen(1, 2);
      expect(product).toThrow();
    });
  });

  describe('subtract 5', () => {
    it('should subtract 5 from the number', () => {
      expect(helpers.subtractFive(6)).toEqual(1);
      expect(helpers.subtractFive(-3)).toEqual(-8);
    });

    it('should throw an error when the value passed is undefined', () => {
      const difference = () => helpers.subtractFive();
      expect(difference).toThrow();
    });

    it('should throw an error when the value passed is NaN', () => {
      const difference = () => helpers.subtractFive(NaN);
      expect(difference).toThrow();
    });

    it('should throw an error when the value passed is anything but a number', () => {
      const difference1 = () => helpers.subtractFive('a');
      expect(difference1).toThrow();
      const difference2 = () => helpers.subtractFive([1, 2, 3]);
      expect(difference2).toThrow();
    });

    it('should throw an error when the difference is smaller than the min safe number', () => {
      const min = Number.MIN_SAFE_INTEGER + 4;
      const difference = () => helpers.subtractFive(min);
      expect(difference).toThrow();
    });
  });

  describe('strings are same length', () => {
    it('should have two strings to compare', () => {
      const strCheckUndefined = () => helpers.areSameLength('');
      expect(strCheckUndefined).toThrow();
      const strCheckObj = () => helpers.areSameLength({}, '');
      expect(strCheckObj).toThrow();
    });
    it('should return false if the lengths are different', () => {
      expect(helpers.areSameLength('', ' ')).toBe(false);
      expect(helpers.areSameLength('hi', ' ')).toBe(false);
    });
    it('should return true if the lengths are the same', () => {
      expect(helpers.areSameLength('', '')).toBe(true);
      expect(helpers.areSameLength('hi', '  ')).toBe(true);
      expect(helpers.areSameLength('hi there', 'hi there')).toBe(true);
    });
  });

  describe('a number is less than 90', () => {
    it('should return false if the number is greater or equal to 90', () => {
      expect(helpers.lessThanNinety(90)).toBe(false);
      expect(helpers.lessThanNinety(120)).toBe(false);
    });
    it('should return false a non-number is entered', () => {
      expect(helpers.lessThanNinety('a')).toBe(false);
      expect(helpers.lessThanNinety(NaN)).toBe(false);
      expect(helpers.lessThanNinety([])).toBe(false);
    });
    it('should return true if the less than 90', () => {
      expect(helpers.lessThanNinety(0)).toBe(true);
      expect(helpers.lessThanNinety(-3)).toBe(true);
      expect(helpers.lessThanNinety(89)).toBe(true);
    });
  });

  describe('a number is less than 90', () => {
    it('should return false if the number is greater or equal to 90', () => {
      expect(helpers.lessThanNinety(90)).toBe(false);
      expect(helpers.lessThanNinety(120)).toBe(false);
    });
    it('should return false a non-number is entered', () => {
      expect(helpers.lessThanNinety('a')).toBe(false);
      expect(helpers.lessThanNinety(NaN)).toBe(false);
      expect(helpers.lessThanNinety([])).toBe(false);
    });
    it('should return true if the less than 90', () => {
      expect(helpers.lessThanNinety(0)).toBe(true);
      expect(helpers.lessThanNinety(-3)).toBe(true);
      expect(helpers.lessThanNinety(89)).toBe(true);
    });
  });

  describe('a number is grater than 50', () => {
    it('should return false if the number is greater or equal to 50', () => {
      expect(helpers.greaterThanFifty(50)).toBe(false);
      expect(helpers.greaterThanFifty(-200)).toBe(false);
    });
    it('should return false a non-number is entered', () => {
      expect(helpers.greaterThanFifty('a')).toBe(false);
      expect(helpers.greaterThanFifty(NaN)).toBe(false);
      expect(helpers.greaterThanFifty({})).toBe(false);
    });
    it('should return true if the less than 50', () => {
      expect(helpers.greaterThanFifty(51)).toBe(true);
      expect(helpers.greaterThanFifty(200)).toBe(true);
    });
  });

  describe('add two numbers', () => {
    it('should add two numbers', () => {
      expect(helpers.add(6, 2)).toEqual(8);
      expect(helpers.add(-3, -2)).toEqual(-5);
      expect(helpers.add(-3, 10)).toEqual(7);
    });

    it('should throw an error when the value passed is undefined', () => {
      const sum = () => helpers.add();
      expect(sum).toThrow();
    });

    it('should throw an error when the value passed is NaN', () => {
      const sum = () => helpers.add(NaN);
      expect(sum).toThrow();
    });

    it('should throw an error when the value passed is anything but a number', () => {
      const sum1 = () => helpers.add('a');
      expect(sum1).toThrow();
      const sum2 = () => helpers.add([1, 2, 3]);
      expect(sum2).toThrow();
    });

    it('should throw an error when the sum is greater than the max safe number', () => {
      const max = Number.MAX_SAFE_INTEGER;
      const sum = () => helpers.add(max, 1);
      expect(sum).toThrow();
    });
  });

  describe('subtract two numbers', () => {
    it('should subtract two numbers', () => {
      expect(helpers.subtract(6, 2)).toEqual(4);
      expect(helpers.subtract(-3, -2)).toEqual(-1);
      expect(helpers.subtract(-3, 10)).toEqual(-13);
    });

    it('should throw an error when the value passed is undefined', () => {
      const difference = () => helpers.subtract();
      expect(difference).toThrow();
    });

    it('should throw an error when the value passed is NaN', () => {
      const difference = () => helpers.subtract(NaN);
      expect(difference).toThrow();
    });

    it('should throw an error when the value passed is anything but a number', () => {
      const difference1 = () => helpers.subtract('a');
      expect(difference1).toThrow();
      const difference2 = () => helpers.subtract([1, 2, 3]);
      expect(difference2).toThrow();
    });

    it('should throw an error when the difference is less than the min safe number', () => {
      const min = Number.MIN_SAFE_INTEGER;
      const difference = () => helpers.subtract(min, 1);
      expect(difference).toThrow();
    });
  });

  describe('divide two numbers', () => {
    it('should divide two numbers', () => {
      expect(helpers.divide(6, 2)).toEqual(3);
      expect(helpers.divide(-3, -2)).toEqual(1.5);
      expect(helpers.divide(-3, 10)).toEqual(-0.3);
    });

    it('should throw an error when the value passed is undefined', () => {
      const quotient = () => helpers.divide();
      expect(quotient).toThrow();
    });

    it('should throw an error when the value passed is NaN', () => {
      const quotient = () => helpers.divide(NaN);
      expect(quotient).toThrow();
    });

    it('should throw an error when the value passed is anything but a number', () => {
      const quotient1 = () => helpers.divide('a');
      expect(quotient1).toThrow();
      const quotient2 = () => helpers.divide([1, 2, 3]);
      expect(quotient2).toThrow();
    });

    it('should throw an error when the divisor is 0', () => {
      const quotient = () => helpers.divide(2, 0);
      expect(quotient).toThrow();
    });
  });

  describe('multiply two numbers', () => {
    it('should multiply two numbers', () => {
      expect(helpers.multiply(6, 2)).toEqual(12);
      expect(helpers.multiply(-3, -2)).toEqual(6);
      expect(helpers.multiply(-3, 10)).toEqual(-30);
    });

    it('should throw an error when the value passed is undefined', () => {
      const product = () => helpers.multiply();
      expect(product).toThrow();
    });

    it('should throw an error when the value passed is NaN', () => {
      const product = () => helpers.multiply(NaN);
      expect(product).toThrow();
    });

    it('should throw an error when the value passed is anything but a number', () => {
      const product1 = () => helpers.multiply('a');
      expect(product1).toThrow();
      const product2 = () => helpers.multiply([1, 2, 3]);
      expect(product2).toThrow();
    });

    it('should throw an error when the product is greater than the max safe number', () => {
      const max = Number.MAX_SAFE_INTEGER;
      const prodcut = () => helpers.multiply(max, 2);
      expect(prodcut).toThrow();
    });
  });

  describe('get remainder when divide two numbers', () => {
    it('should divide two numbers and get remainder', () => {
      expect(helpers.getRemainder(6, 2)).toEqual(0);
      expect(helpers.getRemainder(-3, -2)).toEqual(-1);
      expect(helpers.getRemainder(-3, 10)).toEqual(-3);
    });

    it('should throw an error when the value passed is undefined', () => {
      const product = () => helpers.getRemainder();
      expect(product).toThrow();
    });

    it('should throw an error when the value passed is NaN', () => {
      const product = () => helpers.getRemainder(NaN);
      expect(product).toThrow();
    });

    it('should throw an error when the value passed is anything but a number', () => {
      const product1 = () => helpers.getRemainder('a');
      expect(product1).toThrow();
      const product2 = () => helpers.getRemainder([1, 2, 3]);
      expect(product2).toThrow();
    });
  });

  describe('check to see if a number is even', () => {
    it('should check to see if the number is even', () => {
      expect(helpers.isEven(0)).toEqual(true);
      expect(helpers.isEven(-2)).toEqual(true);
      expect(helpers.isEven(4)).toEqual(true);
      expect(helpers.isEven(5)).toEqual(false);
    });

    it('should throw an error when the value passed is undefined', () => {
      const even = () => helpers.isEven();
      expect(even).toThrow();
    });

    it('should throw an error when the value passed is NaN', () => {
      const even = () => helpers.isEven(NaN);
      expect(even).toThrow();
    });

    it('should throw an error when the value passed is anything but a number', () => {
      const even1 = () => helpers.isEven('a');
      expect(even1).toThrow();
      const even2 = () => helpers.isEven([1, 2, 3]);
      expect(even2).toThrow();
    });
  });

  describe('check to see if a number is odd', () => {
    it('should check to see if the number is odd', () => {
      expect(helpers.isOdd(0)).toEqual(false);
      expect(helpers.isOdd(-2)).toEqual(false);
      expect(helpers.isOdd(4)).toEqual(false);
      expect(helpers.isOdd(5)).toEqual(true);
    });

    it('should throw an error when the value passed is undefined', () => {
      const odd = () => helpers.isOdd();
      expect(odd).toThrow();
    });

    it('should throw an error when the value passed is NaN', () => {
      const odd = () => helpers.isOdd(NaN);
      expect(odd).toThrow();
    });

    it('should throw an error when the value passed is anything but a number', () => {
      const odd1 = () => helpers.isOdd('a');
      expect(odd1).toThrow();
      const odd2 = () => helpers.isOdd([1, 2, 3]);
      expect(odd2).toThrow();
    });
  });

  describe('square a number', () => {
    it('should check to see if the number is squared', () => {
      expect(helpers.square(0)).toEqual(0);
      expect(helpers.square(-2)).toEqual(4);
      expect(helpers.square(4)).toEqual(16);
      expect(helpers.square(5)).toEqual(25);
    });

    it('should throw an error when the value passed is undefined', () => {
      const square = () => helpers.square();
      expect(square).toThrow();
    });

    it('should throw an error when the value passed is NaN', () => {
      const square = () => helpers.square(NaN);
      expect(square).toThrow();
    });

    it('should throw an error when the value passed is too big', () => {
      const num = Math.sqrt(Number.MAX_SAFE_INTEGER);
      const square = () => helpers.square(num + 1);
      expect(square).toThrow();
    });

    it('should throw an error when the value passed is anything but a number', () => {
      const square1 = () => helpers.square('a');
      expect(square1).toThrow();
      const square2 = () => helpers.square([1, 2, 3]);
      expect(square2).toThrow();
    });
  });

  describe('cube a number', () => {
    it('should check to see if the number is cubed', () => {
      expect(helpers.cube(0)).toEqual(0);
      expect(helpers.cube(-2)).toEqual(-8);
      expect(helpers.cube(4)).toEqual(64);
      expect(helpers.cube(5)).toEqual(125);
    });

    it('should throw an error when the value passed is undefined', () => {
      const cube = () => helpers.cube();
      expect(cube).toThrow();
    });

    it('should throw an error when the value passed is NaN', () => {
      const cube = () => helpers.cube(NaN);
      expect(cube).toThrow();
    });

    it('should throw an error when the value passed is too big', () => {
      const num = Math.cbrt(Number.MAX_SAFE_INTEGER);
      const cube = () => helpers.cube(num + 111);
      expect(cube).toThrow();
    });

    it('should throw an error when the value passed is anything but a number', () => {
      const cube1 = () => helpers.cube('a');
      expect(cube1).toThrow();
      const cube2 = () => helpers.cube([1, 2, 3]);
      expect(cube2).toThrow();
    });
  });

  describe('raise a number to a power', () => {
    it('should check to see if the number is raised to the power', () => {
      expect(helpers.raiseToPower(0, 0)).toEqual(1);
      expect(helpers.raiseToPower(-2, 3)).toEqual(-8);
      expect(helpers.raiseToPower(4, 0.5)).toEqual(2);
      expect(helpers.raiseToPower(5, 5)).toEqual(3125);
    });

    it('should throw an error when the value passed is undefined', () => {
      const raiseToPower = () => helpers.raiseToPower();
      expect(raiseToPower).toThrow();
    });

    it('should throw an error when the value passed is NaN', () => {
      const raiseToPower = () => helpers.raiseToPower(NaN, NaN);
      expect(raiseToPower).toThrow();
    });

    it('should throw an error when the value passed is too big', () => {
      const num = Number.MAX_SAFE_INTEGER + 1;
      const raiseToPower = () => helpers.raiseToPower(num, 2);
      expect(raiseToPower).toThrow();
    });

    it('should throw an error when the value passed is anything but a number', () => {
      const raiseToPower1 = () => helpers.raiseToPower('a', 2);
      expect(raiseToPower1).toThrow();
      const raiseToPower2 = () => helpers.raiseToPower([1, 2, 3], 3);
      expect(raiseToPower2).toThrow();
    });
  });
});
