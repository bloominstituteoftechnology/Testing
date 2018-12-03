const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
  describe('multiplyByTen', () => {
    it('should multiply by ten', () => {
      const timesTenExpected = 100;
      const timesTenResult = helpers.multiplyByTen(10);
      expect(timesTenResult).toEqual(timesTenExpected);
    });
  });

  describe('subtractFive', () => {
    it('should subtract five', () => {
      const minusFiveExpected = 20;
      const minusFiveResult = helpers.subtractFive(25);
      expect(minusFiveResult).toEqual(minusFiveExpected);
    });
  });
});
