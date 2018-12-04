const funcs = require('./project-2');

describe('project-2', () => {
  describe('getBiggest', () => {
    it('returns the largest of two values given', () => {
      const getBiggestExpected = 99;
      const getBiggestResult = funcs.getBiggest(1, 99);
      expect(getBiggestResult).toEqual(getBiggestExpected);
    });
  });

  describe('greeting', () => {
    it('determines which language a user desires for greeting', () => {
      expect(funcs.greeting('German')).toBeTruthy;
    });

    it('returns null upon non-text entry', () => {
      expect(funcs.greeting(1)).toBe('Please enter a language');
    });
  });

  describe('isTenOrFive', () => {
    it('determines if a number entered is either ten or five', () => {
      expect(funcs.isTenOrFive(10)).toBeLessThanOrEqual;
    });

    it('returns null if a non-number is entered', () => {
      expect(funcs.isTenOrFive('ten')).toBeNull;
    });
  });

  describe('isInRange', () => {
    it('determines if a given value is greater than 20', () => {
      expect(funcs.isInRange(21)).toBe(true);
    });

    it('determines if a given value is less than 50', () => {
      expect(funcs.isInRange(51)).toBe(false);
    });
  });

  describe('isInteger', () => {
    it('determines if a number is, in fact, an integer', () => {
      expect(funcs.isInteger(23)).toBe(true);
    });

    it('returns null if input is not a number', () => {
      expect(funcs.isInteger('twenty-three')).toBe(null);
    });
  });
  //end test suite
});
