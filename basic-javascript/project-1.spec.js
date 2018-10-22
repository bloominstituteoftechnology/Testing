const helpers = require('./project-1');

describe('project-1.js', () => {
  describe('multiplyByTen', () => {
    it('multiply a number by ten', () => {
      const expected = 100;
      const actual = helpers.multiplyByTen(10);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.multiplyByTen();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.multiplyByTen("5");
      expect(actual).toEqual(expected)
    })
  })
})