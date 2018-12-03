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

  describe('areSameLength', () => {
    it('should determine if lengths match', () => {
      const areSameLengthA = 'four';
      const areSameLengthB = 'four';
      expect(areSameLengthA.length).toEqual(areSameLengthB.length);
    });
  });

  describe('areEqual', () => {
    it('should determine if values match', () => {
      const areEqualA = 1;
      const areEqualB = 1;
      expect(areEqualA).toEqual(areEqualB);
    });
  });

  describe('lessThanNinety', () => {
    it('should determine if value is less than 90', () => {
      const lessThanNinety = 89;
      expect(lessThanNinety).toBeLessThan(90);
    });
  });

  describe('greaterThanFifty', () => {
    it('should determine if value is greater than 50', () => {
      const greaterThanFifty = 51;
      expect(greaterThanFifty).toBeGreaterThan(50);
    });
  });

  // describe('add', () => {
  //   it('should add two numbers together', () => {
  //     const addExpected = helpers.add(2, 3);
  //     expect(addExpected).toBe(5)
  //   });

  describe('add', () => {
    it('should add two values together', () => {
      const addExpected = helpers.add(2, 3);
      expect(addExpected).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should subtract a value from another', () => {
      const subtractExpected = helpers.subtract(10, 7);
      expect(subtractExpected).toBe(3);
    });
  });

  describe('divide', () => {
    it('should divide a value into another', () => {
      const divideExpected = helpers.divide(10, 2);
      expect(divideExpected).toBe(5);
    });
  });

  describe('multiply', () => {
    it('should multiply two values together', () => {
      const multiplyExpected = helpers.multiply(3, 4);
      expect(multiplyExpected).toBe(12);
    });
  });

  describe('getRemainder', () => {
    it('should get the remainder of two numbers divide into one another', () => {
      const getRemainderResult = helpers.getRemainder(10, 3);
      expect(getRemainderResult).toBe(1);
    });
  });

  describe('isEven', () => {
    it('determine if value is even', () => {
      const isEvenResult = helpers.isEven(10);
      expect(isEvenResult).toBe(true);
    });
  });

  describe('isOdd', () => {
    it('determine if value is odd', () => {
      const isOddResult = helpers.isOdd(11);
      expect(isOddResult).toBe(true);
    });
  });
});
