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
});
