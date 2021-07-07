const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
  describe('multiplyByTen', () => {
    it('returns Nan when given a non numeric value', () => {
      expect(helpers.multiplyByTen(undefined)).toBeNaN();
      expect(helpers.multiplyByTen('two')).toBeNaN();
    });
    it('mutiplies by ten', () => {
      expect(helpers.multiplyByTen(2)).toBe(20);
      expect(helpers.multiplyByTen(0)).toEqual(0);
    });
  });
  describe('subtractFive', () => {
    it('should return the given number minus five', () => {
      expect(helpers.subtractFive(10)).toBe(5);
      expect(helpers.subtractFive(5)).toBe(0);
      expect(helpers.subtractFive(0)).toBe(-5);
    });
  });
});