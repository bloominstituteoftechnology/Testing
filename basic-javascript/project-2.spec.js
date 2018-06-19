const funcs = require('./project-2');



describe('getBiggest', () => {
    it('returns biggest number', () => {
        expect(funcs.getBiggest(3, 4)).toBe(4);
        expect(funcs.getBiggest(-3, 0)).toBe(0);
        expect(funcs.getBiggest(100, 100)).toBe(100);
    });
});

describe('greeting', () => {
    it('returns greeting in language case provided', () => {
        expect(funcs.greeting('German')).toBe('Guten Tag!');
        expect(funcs.greeting('')).toBe('Hello!');
        expect(funcs.greeting('Spanish')).toBe('Hola!');
        expect(funcs.greeting('language')).toBe('Hello!');
        expect(funcs.greeting('76')).toBe('Hello!');
        expect(funcs.greeting(76)).toBe('Hello!');
        expect(funcs.greeting(true)).toBe('Hello!');
        expect(funcs.greeting(null)).toBe('Hello!');
    });
});

describe('isTenOrFive', () => {
    it('should return true if number is 10 or 5', () => {
      expect(funcs.isTenOrFive(10)).toBeTruthy();
      expect(funcs.isTenOrFive(5)).toBeTruthy();
      expect(funcs.isTenOrFive(1)).toBeFalsy();
    });
    it('should return NaN for a non numeric value', () => {
        expect(funcs.isTenOrFive('two')).toBeFalsy();
        expect(funcs.isTenOrFive(undefined)).toBeFalsy();
    });
  });

  

// module.exports = {
//     getBiggest,
//     greeting,
//     isTenOrFive,
//     isInRange,
//     isInteger,
//     fizzBuzz,
//     isPrime,
//     returnFirst,
//     returnLast,
//     getArrayLength,
//     incrementByOne,
//     addItemToArray,
//     addItemToFront,
//     wordsToSentence,
//     contains,
//     addNumbers,
//     averageTestScore,
//     largestNumber
//   };
  