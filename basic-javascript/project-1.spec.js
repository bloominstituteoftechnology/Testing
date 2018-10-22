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
  describe('subtractFive()', () => {
    it('subtracts a number by 5', () => {
      const expected = 5;
      const actual = helpers.subtractFive(10);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.subtractFive();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.subtractFive("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('areSameLength()', () => {
    it('checks the length of both strings and outputs boolean', () => {
      const expected = false;
      const actual = helpers.areSameLength("green", "blue");
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.areSameLength();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.areSameLength("5");
      expect(actual).toEqual(expected)
    })
  })
})