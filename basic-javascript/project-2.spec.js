const helpers = require('./project-2');

describe('find the higher number', () => {
  test('Should return the higher number', () => {
    expect(helpers.getBiggest(2, 9)).toBe(9);
    expect(helpers.getBiggest(10, 1)).toBe(10);
    expect(helpers.getBiggest(-10, 100)).toBe(100);
  })
  test('Should return false if either value is undefined', () => {
    expect(helpers.getBiggest(undefined)).toBe(false)
  })
})

describe('return greeting in correct language', () => {
  test('Should return a greeting in the selected language', () => {
    expect(helpers.greeting('German')).toBe('Guten Tag!');
    expect(helpers.greeting('Spanish')).toBe('Hola!');
    expect(helpers.greeting('enalfvish')).toBe('Hello!');
  })
  test('Should return false if the language is undefined', () => {
    expect(helpers.greeting(undefined)).toBe(false);
  })
})

describe('return true if the number is either 10 or 5', () => {
  test('Should return true if the number is 10 or 5, and false if it is neither', () => {
    expect(helpers.isTenOrFive(5)).toBe(true);
    expect(helpers.isTenOrFive(10)).toBe(true);
    expect(helpers.isTenOrFive(108)).toBe(false);
  })
  test('Should return false if the number is undefined', () => {
    expect(helpers.isTenOrFive(undefined)).toBe(false);
  })
})

describe('return true if the number is between 21 and 49', () => {
  test('Should return true if the number is between 21 and 49, and false if it is not', () => {
    expect(helpers.isInRange(5)).toBe(false);
    expect(helpers.isInRange(22)).toBe(true);
    expect(helpers.isInRange(50)).toBe(false);
  })
  test('Should return false if the number is undefined', () => {
    expect(helpers.isInRange(undefined)).toBe(false);
  })
})

describe('return true if the number is an integer', () => {
  test('Should return true if the number is an integer', () => {
    expect(helpers.isInteger(5.22)).toBe(false);
    expect(helpers.isInteger(22)).toBe(true);
    expect(helpers.isInteger(50.856123)).toBe(false);
  })
  test('Should return false if the number is undefined', () => {
    expect(helpers.isInteger(undefined)).toBe(false);
  })
})

describe('return fizzbuzz if number is divisible by 3 and 5, fizz if just 5, and buzz if just 3', () => {
  test('Should return fizzbuzz if the number is divisible by 3 and 5, fizz if it is divisible by 3 and not 5, and buzz if it is divisible by 5 and not 3. Else return the number', () => {
    expect(helpers.fizzBuzz(5)).toBe('buzz');
    expect(helpers.fizzBuzz(12)).toBe('fizz');
    expect(helpers.fizzBuzz(15)).toBe('fizzbuzz');
    expect(helpers.fizzBuzz(22)).toBe(22);
  })
  test('Should return false if the number is undefined', () => {
    expect(helpers.fizzBuzz(undefined)).toBe(false);
  })
})

describe('return true if the number is a prime number', () => {
  test('Should return true if the number is a prime number', () => {
    expect(helpers.isPrime(5)).toBe(true);
    expect(helpers.isPrime(22)).toBe(false);
    expect(helpers.isPrime(29)).toBe(true);
  })
  test('Should return false if the number is undefined', () => {
    expect(helpers.isPrime(undefined)).toBe(false);
  })
})

describe('return the first item in the array', () => {
  test('Should return the first item in the given array', () => {
    expect(helpers.returnFirst([3, 2, 5])).toBe(3);
    expect(helpers.returnFirst(['a', 'b', 'c'])).toBe('a');
  })
  test('Should return false if the array is undefined', () => {
    expect(helpers.returnFirst(undefined)).toBe(false);
  })
})

describe('return the last item in the array', () => {
  test('Should return the last item in the given array', () => {
    expect(helpers.returnLast([3, 2, 5])).toBe(5);
    expect(helpers.returnLast(['a', 'b', 'c'])).toBe('c');
  })
  test('Should return false if the array is undefined', () => {
    expect(helpers.returnLast(undefined)).toBe(false);
  })
})

describe('return the length of the array', () => {
  test('Should return the length of the given array', () => {
    expect(helpers.getArrayLength([3, 2, 5])).toBe(3);
    expect(helpers.getArrayLength(['a', 'b', 'c', 'd'])).toBe(4);
  })
  test('Should return false if the array is undefined', () => {
    expect(helpers.getArrayLength(undefined)).toBe(false);
  })
})

describe('return the array with each item incremented by 1', () => {
  test('Should return the given array with every item in it incremented by 1', () => {
    expect(helpers.incrementByOne([3, 2, 5])).toEqual([4, 3, 6]);
    expect(helpers.incrementByOne([-12, 54, 2])).toEqual([-11, 55, 3]);
  })
  test('Should return false if the array is undefined', () => {
    expect(helpers.incrementByOne(undefined)).toBe(false);
  })
})

describe('return the array with the item added to the end of it', () => {
  test('Should return the given array with the given item added to the end of it', () => {
    expect(helpers.addItemToArray([3, 2, 1, 5], 4)).toEqual([3, 2, 1, 5, 4]);
    expect(helpers.addItemToArray(['a', 'b'], 'c')).toEqual(['a', 'b', 'c'])
  })
  test('Should return false if the array is undefined', () => {
    expect(helpers.addItemToArray(undefined)).toBe(false);
  })
})

describe('return the array with the item added to the front of it', () => {
  test('Should return the given array with the given item added to the front of it', () => {
    expect(helpers.addItemToFront([3, 2, 1, 5], 4)).toEqual([4, 3, 2, 1, 5]);
    expect(helpers.addItemToFront(['a', 'b'], 'c')).toEqual(['c', 'a', 'b'])
  })
  test('Should return false if the array is undefined', () => {
    expect(helpers.addItemToFront(undefined)).toBe(false);
  })
})
