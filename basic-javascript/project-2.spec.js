const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe.only('project-2.spec.js', () => {
  
  describe('getBiggest()', () => {
    it('should return biggest value between x and y', () => {
      const expected = 5;
      expect(funcs.getBiggest(2,5)).toBe(expected);      
    });

    it('should return an error if x or y is not a number/missing/undefined', () => {
      const expected = 'Please enter an x-value and a y-value that is a number';
      expect(funcs.getBiggest([], {})).toBe(expected);
      expect(funcs.getBiggest([], undefined)).toBe(expected);
      expect(funcs.getBiggest([], null)).toBe(expected);
    });

    it('should return the: same-value message if x and y are the same', () => {
      const expected = 'Same Value';
      expect(funcs.getBiggest(5,5)).toBe(expected);
      expect(funcs.getBiggest(4.01,4.01)).toBe(expected);
    });
  });

  // describe('greeting()', () => {
  //   it('should return correct greeting from specified language', () => {
  //     const expected = 'Guten Tag!';

  //     expect(funcs.greeting('German')).toBe(expected);
  //     expect(funcs.greeting('Spanish')).toBe('Hola!');
  //   });

  //   it('should return an error if the language does not exist', () => {
  //     const expected = 'Please enter either: German, or Spanish';

  //     expect(funcs.greeting('French')).toBe(expected);
  //   });
  // })

  describe('isTenOrFive()', () => {
    it('should return true, if number is 10 or 5', () => {
      const expected = true;
      expect(funcs.isTenOrFive(10)).toBe(expected);
      expect(funcs.isTenOrFive(5)).toBe(expected);
    });

    it('should return an error if typeof num is not a number', () => {
      const expected = 'Please enter a number';
      expect(funcs.isTenOrFive('5', '10')).toBe(expected);
      expect(funcs.isTenOrFive()).toBe(expected);
    });
  });

  describe('isInRange()', () => {
    it('should return true if 20 < num < 50', () => {
      const expected = true;
      expect(funcs.isInRange(45)).toBe(expected);
    });

    it('should return false if num is NOT in between 20 and 50', () => {
      const expected = false;
      expect(funcs.isInRange(1)).toBe(expected);
      expect(funcs.isInRange(50.0000000000001)).toBe(expected);
    });

    it('should return an error if typeof num is not a number, or is missing', () => {
      const expected = 'Please enter a number';
      expect(funcs.isInRange('oof')).toBe(expected);
      expect(funcs.isInRange({})).toBe(expected);
    });

  });


});