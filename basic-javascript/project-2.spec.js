const {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
} = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('suite for project-2 methods', ()=>{

  describe('getBiggest',()=>{
    test('getBiggest', () => {
      expect(getBiggest(3, 5)).toBe(5);
    });
  });


  describe('greeting', () => {
    test('greeting', () => {
      expect(greeting('German')).toBe('Guten Tag!');
    });
    test('greeting', () => {
      expect(greeting('spanish')).toBe('Hola!');
    });
  });

  describe('isTenOrFive', () => {
    test('isTenOrFive', () => {
      expect(isTenOrFive(5)).toBeTruthy();
    });
    test('isTenOrFive', () => {
      expect(isTenOrFive(10)).toBeTruthy();
    });
    test('isTenOrFive', () => {
      expect(isTenOrFive(42)).toBeFalsy();
    });
  });

  describe('isInRange returns true if num is <50 && >20', () => {
    test('isInRange', () => {
      expect(isInRange(121)).toBeFalsy();
    });
    test('isInRange', () => {
      expect(isInRange('spanish')).toBeFalsy();
    });
    test('isInRange', () => {
      expect(isInRange('42')).toBeTruthy();
    });
  });

  describe('isInteger returns bool if arg is an integer', () => {
    test('isInteger', () => {
      expect(isInteger(121)).toBeTruthy();
    });
    test('isInteger', () => {
      expect(isInteger('spanish')).toBeFalsy();
    });
    test('isInteger', () => {
      expect(isInteger('42')).toBeFalsy();
    });
  });

  describe('isInteger returns bool if arg is an integer', () => {
    test('isInteger', () => {
      expect(isInteger(121)).toBeTruthy();
    });
    test('isInteger', () => {
      expect(isInteger('spanish')).toBeFalsy();
    });
    test('isInteger', () => {
      expect(isInteger('42')).toBeFalsy();
    });
  });
})
