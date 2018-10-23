const helpers = require('./project-2');
describe.only('project-2.js', () => {
  describe('getBiggest()', () => {
    it('should return largest number from two', () => {
      expect(helpers.getBiggest(1, 5)).toEqual(5);
    });
    it('should return "invalid entry" if nothing was entered', () => {
      expect(helpers.getBiggest()).toEqual("invalid entry");
    });
    it('should return "invalid entry" if a string was entered', () => {
      expect(helpers.getBiggest("5")).toEqual("invalid entry");
    });
  });
  describe('isTenOrFive()', () => {
    it('should return true if it was 10 or 5"', () => {
      expect(helpers.isTenOrFive(5)).toEqual(true);
    });
    it('should return false if nothing was entered', () => {
      expect(helpers.isTenOrFive()).toEqual(false);
    });
  });
  describe('isInRange()', () => {
    it('should return true if the number is in the range of 21 to 49', () => {
      expect(helpers.isInRange(5)).toEqual(false);
    });
    it('should return false if nothing was entered', () => {
      expect(helpers.isInRange()).toEqual(false);
    });
    it('should return false if anything other than a string was entered', () => {
      expect(helpers.isInRange('green')).toEqual(false);
    });
  });
  describe('isInteger()', () => {
    it('should return true if input was an integer', () => {
      expect(helpers.isInteger(5)).toEqual(true);
    });
    it('should return false if nothing was entered', () => {
      expect(helpers.isInteger()).toEqual(false);
    });
    it('should return false if anything other than a string was entered', () => {
      expect(helpers.isInteger('green')).toEqual(false);
    });
  });
  describe('fizzBuzz()', () => {
    it('should return "buzz" if input is 5', () => {
      expect(helpers.fizzBuzz(5)).toEqual('buzz');
    });
    it('should return nothing if nothing was entered', () => {
      expect(helpers.fizzBuzz()).toEqual();
    });
    it('should return input if anything other than a number was entered', () => {
      expect(helpers.fizzBuzz('green')).toEqual('green');
    });
  });
  describe('isPrime()', () => {
    it('should return true if input is prime', () => {
      expect(helpers.isPrime(5)).toEqual(true);
    });
    it('should return nothing if nothing was entered', () => {
      expect(helpers.isPrime()).toEqual(true);
    });
    it('should return true if anything other than a number was entered', () => {
      expect(helpers.isPrime('green')).toEqual(true);
    });
  });
  describe('returnFirst()', () => {
    it('should return first item in array', () => {
      expect(helpers.returnFirst([5, 'b', 'c', 5])).toEqual(5);
    });
    it('should return null if nothing was entered', () => {
      expect(helpers.returnFirst()).toEqual(null);
    });
    it('should return first letter in a string', () => {
      expect(helpers.returnFirst('green')).toEqual('g');
    });
  });
  describe('returnLast()', () => {
    it('should return last item in array', () => {
      expect(helpers.returnLast([5, 'b', 'c', 5])).toEqual(5);
    });
    it('should return null if nothing was entered', () => {
      expect(helpers.returnLast()).toEqual(null);
    });
    it('should return first letter in a string', () => {
      expect(helpers.returnLast('green')).toEqual('n');
    });
  });
  describe('getArrayLength()', () => {
    it('should return length of array', () => {
      expect(helpers.getArrayLength([5, 'b', 'c', 5])).toEqual(4);
    });
    it('should return null if nothing was entered', () => {
      expect(helpers.getArrayLength()).toEqual(null);
    });
    it('should return first letter in a string', () => {
      expect(helpers.getArrayLength('green')).toEqual(5);
    });
  });
  describe('incrementByOne()', () => {
    it('should increment through the array one at a time.', () => {
      expect(helpers.incrementByOne([5, 'b', 'c', 5])).toEqual([6, NaN, NaN, 6]);
    });
    it('should return undefined if nothing was entered', () => {
      expect(helpers.incrementByOne()).toEqual(undefined);
    });
    it('should return the string', () => {
      expect(helpers.incrementByOne('green')).toEqual("green");
    });
  });
  describe('addItemToArray()', () => {
    it('should add items to an array', () => {
      expect(helpers.addItemToArray(["test", 1], 'stuff')).toEqual(["test", 1, "stuff"]);
    });
    it('should return undefined if nothing was entered', () => {
      expect(helpers.addItemToArray()).toEqual(null);
    });
    it('should return null if just a string was entered', () => {
      expect(helpers.addItemToArray('green')).toEqual(null);
    });
  });
});