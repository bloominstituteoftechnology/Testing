const helpers = require('./project-1');

// start testing!
describe('project-1', () => {

  describe('multiplyByTen()', () => {
    it('should multiply the param by ten', () => {
      const expected = 100;
      const actual = helpers.multiplyByTen(10);
      expect(actual).toEqual(expected);
    });
    it('should return 0 if there is no param', () => {
      const param = helpers.multiplyByTen();
      expect(param).toBe(0);
    });
    it('should throw an error if the param is not a number', () => {
      expect(() => {
        helpers.multiplyByTen('ten');
      }).toThrow();
    });
  }); // multiplyByTen
  
  describe('subtractFive()', () => {
    it('should subtract five from the param', () => {
      const expected = 5;
      const actual = helpers.subtractFive(10);
      expect(actual).toEqual(expected);
    });
    it('should return 0 if there is no param', () => {
      const param = helpers.subtractFive();
      expect(param).toBe(0);
    });
    it('should throw an error if the param is not a number', () => {
      expect(() => {
        helpers.subtractFive('ten');
      }).toThrow();
    });
  }); // subtractFive

}); //project-1


