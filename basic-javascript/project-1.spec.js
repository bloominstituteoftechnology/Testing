const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
  describe('multiplyByTen', () => {
    it('returns Nan when given s non numeric value', () => {
      // arrange
      expect(helpers.multiplyByTen(undefined)).toBeNaN();
      expect(helpers.multiplyByTen(true)).toBeNaN();
      expect(helpers.multiplyByTen(false)).toBeNaN();
      expect(helpers.multiplyByTen('two')).toBeNaN();
    });
    it('mutiplies by ten', () => {
      expect(helpers.multiplyByTen(2)).toBe(20)
    })
  });
});