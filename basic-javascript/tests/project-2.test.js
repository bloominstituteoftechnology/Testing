/* eslint-disable prefer-destructuring */

const assert = require("chai").assert;
const funcs = require("../src/project-2");
const chai = require("chai");
const expect = require("chai").expect;
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe("Project-2 Functions", () => {
  describe("getBiggest", () => {
    it("should be a function", () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, "function");
    });
    it("should return the larger of the two inputs", () => {
      const getBiggest = funcs.getBiggest;
      expect(getBiggest(5,3)).to.equal(5);
      expect(getBiggest(23,234)).to.equal(234);
      expect(getBiggest(0,1)).to.equal(1);
    });
  });
  describe("greeting", () => {
    it("should be a function", () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, "function");
    });
    it("should return a greeting (string) in the language provided", () => {
        const greeting = funcs.greeting;
        expect(greeting('German')).to.equal('Guten Tag!');
        expect(greeting('Spanish')).to.equal('Hola!');
        expect(greeting('Fijian')).to.equal('Hello!');
      });
  });
  
  describe("isTenOrFive", () => {
    it("should be a function", () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, "function");
    });
    it("should return true if the input is 10 or 5, else false", () => {
        const isTenOrFive = funcs.isTenOrFive;
        expect(isTenOrFive(5)).to.equal(true);
        expect(isTenOrFive(23)).to.equal(false);
        expect(isTenOrFive(10)).to.equal(true);
      });
  });
  describe("isInRange", () => {
    it("should be a function", () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, "function");
    });
    it("should return true if the input value is between 20 and 50 exclusive, else return false", () => {
        const isInRange = funcs.isInRange;
        expect(isInRange(20)).to.equal(false);
        expect(isInRange(21)).to.equal(true);
        expect(isInRange(50)).to.equal(false);
      });
    
  });
  describe("isInteger", () => {
    it("should be a function", () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, "function");
    });
    it("should return true if the input value is and integer, else false", () => {
        const isInteger = funcs.isInteger;
        expect(isInteger(20.23124)).to.equal(false);
        expect(isInteger(21)).to.equal(true);
        expect(isInteger(50.2421341)).to.equal(false);
      });
    
  });
  describe("fizzBuzz", () => {
    it("should be a function", () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, "function");
    });
    it("should return 'fizzbuzz' if divisible by 5 AND 3, 'fizz' if divisible by 3 only, and 'buzz' if divisible by 5 only, else input number is returned", () => {
        const fizzBuzz = funcs.fizzBuzz;
        expect(fizzBuzz(30)).to.equal('fizzbuzz');
        expect(fizzBuzz(25)).to.equal('buzz');
        expect(fizzBuzz(24)).to.equal('fizz');
      });
    
  });
  describe("isPrime", () => {
    it("should be a function", () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, "function");
    });
    it("should return true if the input value is primes, else false", () => {
        const isPrime = funcs.isPrime;
        expect(isPrime(24)).to.equal(false);
        expect(isPrime(23)).to.equal(true);
        expect(isPrime(16)).to.equal(false);
      });
    
  });
  describe("returnFirst", () => {
    it("should be a function", () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, "function");
    });
    it('should return the first element in the input array', () => {
        const returnFirst = funcs.returnFirst;
        expect(returnFirst([1,4,3,6,5])).to.equal(1);
        expect(returnFirst(['bubbles', 'cotton candy'])).to.equal('bubbles');
        expect(returnFirst([null, 'Hello', 4])).to.equal(null);
    })
    
  });
  describe("returnLast", () => {
    it("should be a function", () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, "function");
    });
    it('should return the last element in the input array', () => {
        const returnLast = funcs.returnLast;
        expect(returnLast([1,4,3,6,5])).to.equal(5);
        expect(returnLast(['bubbles', 'cotton candy'])).to.equal('cotton candy');
        expect(returnLast([null, 'Hello', 4])).to.equal(4);
    })
    
  });
  describe("getArrayLength", () => {
    it("should be a function", () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, "function");
    });
    it("should return the length of the input array", () => {
        const getArrayLength = funcs.getArrayLength;
        expect(getArrayLength([4,2,7,5,6,9,7,3])).to.equal(8);
        expect(getArrayLength(['4,2,7,5,6,9,7,3', 'Hello', 'my', 'old', 'friend'])).to.equal(5);
        expect(getArrayLength([])).to.equal(0);
    })
    
  });
  describe("incrementByOne", () => {
    it("should be a function", () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, "function");
    });
    
    
  });
  describe("addItemToArray", () => {
    it("should be a function", () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, "function");
    });
    
  });
  describe("addItemToFront", () => {
    it("should be a function", () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, "function");
    });
    
  });
  describe("wordsToSentence", () => {
    it("should be a function", () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, "function");
    });
    
  });
  describe("contains", () => {
    it("should be a function", () => {
      const contains = funcs.contains;
      assert.typeOf(contains, "function");
    });
    
  });
  describe("addNumbers", () => {
    it("should be a function", () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, "function");
    });
    
  });
  describe("averageTestScore", () => {
    it("should be a function", () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, "function");
    });
    
  });
  describe("largestNumber", () => {
    it("should be a function", () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, "function");
    });
    
  });
  describe("getBiggest", () => {
    it("should be a function", () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, "function");
    });
    
  });
});
