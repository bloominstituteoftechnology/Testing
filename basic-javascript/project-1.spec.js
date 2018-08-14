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
});
