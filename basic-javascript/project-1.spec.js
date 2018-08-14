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
});
