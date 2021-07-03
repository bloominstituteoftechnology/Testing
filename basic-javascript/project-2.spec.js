const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe.only('project-2 test', () => {
  describe('getBiggest', () => {
    it('What is the biggest number', () => {
      // arrange
      const expected = -2;

      // act
      const actual = funcs.getBiggest(-2, -40);

      // assert
      expect(actual).toEqual(expected);
    })
  });

  describe('greeting', () => {
    it('returned Spanish greeting', () => {
      const expected = 'Guten Tag!';
      const actual = funcs.greeting('German');

      expect(actual).toEqual(expected);
    })
  });

  describe('isTenOrFive', () => {
    it('is 10 or 5', () => {
      const expected = true;

      expect(funcs.isTenOrFive(10)).toEqual(expected);
      expect(funcs.isTenOrFive(5)).toEqual(expected);


    })
    it('is not 10 or 5', () => {
      const expected = false;
      const actual = funcs.isTenOrFive(-5);

      expect(actual).toEqual(expected);
    })
  });

  describe('isInRange', () => {
    it('less than 50 and greater than 20', () => {
      const expected = true;
      const actual = funcs.isInRange(49);

      expect(actual).toEqual(expected);
    })
    it('not less than 50 and greater than 20', () => {
      const expected = false;
      const actual = funcs.isInRange(15);

      expect(actual).toEqual(expected);
    })
  });

  describe('isInteger', () => {
    it('it is an integer', () => {
      const expected = true;
      const actual = funcs.isInteger(50);

      expect(actual).toEqual(expected);
    })
    it('it is not an integer', () => {
      const expected = false;
      const actual = funcs.isInteger(25.50);

      expect(actual).toEqual(expected);
    })
  });

  describe('fizzBuzz', () => {
    it('executes fizz', () => {
      const expected = 'fizz'
      const actual = funcs.fizzBuzz(12);

      expect(actual).toEqual(expected);
    })
    it('executes buzz', () => {
      const expected = 'buzz'
      const actual = funcs.fizzBuzz(25);

      expect(actual).toEqual(expected);
    })
    it('executes fizzbuzz', () => {
      const expected = 'fizzbuzz'
      const actual = funcs.fizzBuzz(30);

      expect(actual).toEqual(expected);
    })
  });
});