const {
  multiplyByTen,
  getGreeting,
  getTriangleArea,
  addExclamationPoint
} = require('./project-1');

describe('project-1()', () => {
  describe('multiplyByTen()', () => {
    it('should multiply nums by 10', () => {
      expect(multiplyByTen(4)).toBe(40);
    });
    it('should multiply nums by 10', () => {
      expect(multiplyByTen(10)).toBe(100);
    });
  });

  describe('getGreeting()', () => {
    it('Should return Hello <name>!', () => {
      expect(getGreeting('John')).toBe('Hello John!');
    });
    it('Should return Hello <name>!', () => {
      expect(getGreeting('Jane')).toBe('Hello Jane!');
    });
  });

  describe('getTriangleArea()', () => {
    it('Should return triangle area', () => {
      expect(getTriangleArea(2, 4)).toBe(4);
    });
    it('Should return triangle area', () => {
      expect(getTriangleArea(10, 2)).toBe(10);
    });
  });

  describe('addExclamationPoint()', () => {
    it('Should return str+!', () => {
      expect(addExclamationPoint('hello')).toBe('hello!');
    });
    it('Should return str+!', () => {
      expect(addExclamationPoint('goodbye')).toBe('goodbye!');
    });
  });
});
