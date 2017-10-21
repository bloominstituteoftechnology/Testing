const expect = require('chai').expect;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    const getBiggest = funcs.getBiggest;
    it('should be a function', () => {
      expect(getBiggest).to.be.a('function');
    });
    it('should return a number', () => {
      expect(getBiggest(10, 5)).to.be.a('number');
    });
    it('should return the larger of two numbers', () => {
      expect(getBiggest(22, 9)).to.equal(22);
      expect(getBiggest(5, 10)).to.equal(10);
    });
  });

  describe('`greeting`', () => {
    const greeting = funcs.greeting;
    it('should be a function', () => {
      expect(greeting).to.be.a('function');
    });
    it('should return a string', () => {
      expect(greeting()).to.be.a('string');
    });
    it('should return the correct greeting based on the language passed in', () => {
      expect(greeting('German')).to.equal('Guten Tag!');
      expect(greeting('Spanish')).to.equal('Hola!');
    });
    it('should default to "Hello!" if an unknown language or no language is passed', () => {
      expect(greeting('Japanese')).to.equal('Hello!');
    });
  });

  describe('`isTenOrFive`', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('should be a function', () => {
      expect(isTenOrFive).to.be.a('function');
    });
    it('should return a boolean', () => {
      expect(isTenOrFive(11)).to.be.a('boolean');
    });
    it('should return only true if a number is 10 or 5', () => {
      expect(isTenOrFive(10)).to.be.true;
      expect(isTenOrFive(5)).to.be.true;
      expect(isTenOrFive(12)).to.be.false;
    });
  });

  describe('`isInRange`', () => {
    const isInRange = funcs.isInRange;
    it('should be a function', () => {
      expect(isInRange).to.be.a('function');
    });
    it('should return a boolean', () => {
      expect(isInRange(11)).to.be.a('boolean');
    });
    it('should only return true if a number is between 20 and 50', () => {
      expect(isInRange(24)).to.be.true;
      expect(isInRange(15)).to.be.false;
      expect(isInRange(65)).to.be.false;
    });
  });

  describe('`isInteger`', () => {
    const isInteger = funcs.isInteger;
    it('should be a function', () => {
      expect(isInteger).to.be.a('function');
    });
    it('should return a boolean', () => {
      expect(isInteger(11)).to.be.a('boolean');
    });
    it('should only return true if number is an integer', () => {
      expect(isInteger(2)).to.be.true;
      expect(isInteger(2.12)).to.be.false;
    });
  });

  describe('`fizzBuzz`', () => {
    const fizzBuzz = funcs.fizzBuzz;
    it('should be a function', () => {
      expect(fizzBuzz).to.be.a('function');
    });
    it('should return a string or a number', () => {
      expect(fizzBuzz(5)).to.be.a('string');
      expect(fizzBuzz(8)).to.be.a('number');
    });
    it('should return fizz if number is divisible by 3', () => {
      expect(fizzBuzz(6)).to.equal('fizz');
      expect(fizzBuzz(7)).to.not.equal('fizz');
    });
    it('should return buzz if number is divisible by 5', () => {
      expect(fizzBuzz(10)).to.equal('buzz');
      expect(fizzBuzz(11)).to.not.equal('buzz');
    });
    it('should return fizzbuzz if number is divisible by 3 and 5', () => {
      expect(fizzBuzz(15)).to.equal('fizzbuzz');
      expect(fizzBuzz(10)).to.not.equal('fizzbuzz');
    });
    it('should return the given number if not divisible by 3 and/or 5', () => {
      expect(fizzBuzz(11)).to.equal(11);
    });
  });

  describe('`isPrime`', () => {
    const isPrime = funcs.isPrime;
    it('should be a function', () => {
      expect(isPrime).to.be.a('function');
    });
    it('should return a boolean', () => {
      expect(isPrime(11)).to.be.a('boolean');
    });
    it('should only return true if a number is prime', () => {
      expect(isPrime(11)).to.be.true;
      expect(isPrime(12)).to.be.false;
    });
    it('should return false for numbers less than or equal to 1 ', () => {
      expect(isPrime(-5)).to.be.false;
      expect(isPrime(0)).to.be.false;
      expect(isPrime(1)).to.be.false;
    });
  });

  describe('`returnFirst`', () => {
    const returnFirst = funcs.returnFirst;
    it('should be a function', () => {
      expect(returnFirst).to.be.a('function');
    });
    it('shoule return the first item of an array', () => {
      const arr1 = [1, 2, 3, 4];
      const arr2 = ['d2', 'C3PO', 'BB8'];
      expect(returnFirst(arr1)).to.equal(1);
      expect(returnFirst(arr2)).to.equal('d2');
    });
  });

  describe('`returnLast`', () => {
    const returnLast = funcs.returnLast;
    it('should be a function', () => {
      expect(returnLast).to.be.a('function');
    });
    it('shoule return the last item of an array', () => {
      const arr1 = [1, 2, 3, 4];
      const arr2 = ['d2', 'C3PO', 'BB8'];
      expect(returnLast(arr1)).to.equal(4);
      expect(returnLast(arr2)).to.equal('BB8');
    });
  });

  describe('`getArrayLength`', () => {
    const getArrayLength = funcs.getArrayLength;
    it('should be a function', () => {
      expect(getArrayLength).to.be.a('function');
    });
    it('should return a number', () => {
      expect(getArrayLength([1, 2, 3])).to.be.a('number');
    });
    it('should return the correct length of an array', () => {
      expect(getArrayLength([1, 2, 3])).to.equal(3);
    });
  });

  describe('`incrementByOne`', () => {
    const incrementByOne = funcs.incrementByOne;
    it('should be a function', () => {
      expect(incrementByOne).to.be.a('function');
    });
    it('should return an array', () => {
      expect(incrementByOne([1, 2, 3])).to.be.an('array');
    });
    it('should increment each item in the array by one', () => {
      expect(incrementByOne([1, 2, 3])).to.deep.equal([2, 3, 4]);
    });
  });

  describe('`addItemToArray`', () => {
    const addItemToArray = funcs.addItemToArray;
    it('should be a function', () => {
      expect(addItemToArray).to.be.a('function');
    });
    it('should return an array', () => {
      expect(addItemToArray([1, 2, 3], 4)).to.be.an('array');
    });
    it('should add an item to an array', () => {
      expect(addItemToArray([1, 2, 3], 4)).to.deep.equal([1, 2, 3, 4]);
    });
  });

  describe('`addItemToFront`', () => {
    const addItemToFront = funcs.addItemToFront;
    it('should be a function', () => {
      expect(addItemToFront).to.be.a('function');
    });
    it('should return an array', () => {
      expect(addItemToFront([1, 2, 3], 4)).to.be.an('array');
    });
    it('should add an item to an array', () => {
      expect(addItemToFront([1, 2, 3], 4)).to.deep.equal([4, 1, 2, 3]);
    });
  });

  describe('`wordsToSentence`', () => {
    const wordsToSentence = funcs.wordsToSentence;
    it('should be a function', () => {
      expect(wordsToSentence).to.be.a('function');
    });
    it('should return a string', () => {
      expect(wordsToSentence(['Cogito', 'ergo', 'sum.'])).to.be.a('string');
    });
    it('should join an array of words into a sentence', () => {
      expect(wordsToSentence(['I', 'like', 'turtles.'])).to.equal(
        'I like turtles.',
      );
    });
  });

  describe('`contains`', () => {
    const contains = funcs.contains;
    it('should be a function', () => {
      expect(contains).to.be.a('function');
    });
    it('should return a boolean', () => {
      expect(contains([1, 2, 3], 2)).to.be.a('boolean');
    });
    it('should only return true if the array contains the item', () => {
      const arr = [1, 2, 3, 4];
      expect(contains(arr, 2)).to.be.true;
      expect(contains(arr, 5)).to.be.false;
    });
  });

  describe('`addNumbers`', () => {
    const addNumbers = funcs.addNumbers;
    it('should be a function', () => {
      expect(addNumbers).to.be.a('function');
    });
    it('should return a number', () => {
      expect(addNumbers([1, 2, 3])).to.be.a('number');
    });
    it('should return the sum of the numbers in the array', () => {
      expect(addNumbers([1, 2, 3])).to.equal(6);
    });
  });

  describe('`averageTestScores`', () => {
    const averageTestScore = funcs.averageTestScore;
    it('should be a function', () => {
      expect(averageTestScore).to.be.a('function');
    });
    it('should return a number', () => {
      expect(averageTestScore([1, 2, 3])).to.be.a('number');
    });
    it('should return the average of an array of numbers', () => {
      expect(averageTestScore([100, 95, 85, 11])).to.equal(72.75);
    });
  });

  describe('`largestNumber`', () => {
    const largestNumber = funcs.largestNumber;
    it('should be a function', () => {
      expect(largestNumber).to.be.a('function');
    });
    it('should return a number', () => {
      expect(largestNumber([1, 2, 3])).to.be.a('number');
    });
    it('should return the largest number in an array', () => {
      expect(largestNumber([1, 2, 3])).to.equal(3);
    });
  });
});
