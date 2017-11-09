const expect = require('chai').expect;
const funcs = require('../src/project-2');

describe('Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    it('should be a function', () => {
      expect(funcs.getBiggest).to.be.a('function');
    });
    it('should return 10 if given 5 and 10', () => {
      expect(funcs.getBiggest(5, 10)).to.equal(10);
    });
    it('should return a number', () => {
      expect(funcs.getBiggest(5, 10)).to.a('number');
    });
  });

  describe('`greeting`', () => {
    it('should be a function', () => {
      expect(funcs.greeting).to.be.a('function');
    });
    it('should return Hola! if given Spanish', () => {
      expect(funcs.greeting('Spanish')).to.equal('Hola!');
    });
    it('should return Guten Tag! if given German', () => {
      expect(funcs.greeting('German')).to.equal('Guten Tag!');
    });
    it('should return Hello! if given French', () => {
      expect(funcs.greeting('French')).to.equal('Hello!');
    });
    it('should return a string', () => {
      expect(funcs.greeting('Spanish')).to.a('string');
    });
  });

  describe('`isTenOrFive`', () => {
    it('should be a function', () => {
      expect(funcs.isTenOrFive).to.be.a('function');
    });
    it('should return true if given 5', () => {
      expect(funcs.isTenOrFive(5)).to.equal(true);
    });
    it('should return true if given 10', () => {
      expect(funcs.isTenOrFive(10)).to.equal(true);
    });
    it('should return false if given 6', () => {
      expect(funcs.isTenOrFive(6)).to.equal(false);
    });
    it('should return a boolean', () => {
      expect(funcs.isTenOrFive(5)).to.a('boolean');
    });
  });

  describe('`isInRange`', () => {
    it('should be a function', () => {
      expect(funcs.isInRange).to.be.a('function');
    });
    it('should return true if given 35', () => {
      expect(funcs.isInRange(35)).to.equal(true);
    });
    it('should return false if given 6', () => {
      expect(funcs.isInRange(6)).to.equal(false);
    });
    it('should return a boolean', () => {
      expect(funcs.isInRange(5)).to.a('boolean');
    });
  });

  describe('`isInteger`', () => {
    it('should be a function', () => {
      expect(funcs.isInteger).to.be.a('function');
    });
    it('should return true if given 5', () => {
      expect(funcs.isInteger(5)).to.equal(true);
    });
    it('should return false if given 5.5', () => {
      expect(funcs.isInteger(5.5)).to.equal(false);
    });
    it('should return a boolean', () => {
      expect(funcs.isInteger(5)).to.a('boolean');
    });
  });

  describe('`fizzBuzz`', () => {
    it('should be a function', () => {
      expect(funcs.fizzBuzz).to.be.a('function');
    });
    it('should return fizzbuzz if given 15', () => {
      expect(funcs.fizzBuzz(15)).to.equal('fizzbuzz');
    });
    it('should return buzz if given 10', () => {
      expect(funcs.fizzBuzz(10)).to.equal('buzz');
    });
    it('should return fizz if given 9', () => {
      expect(funcs.fizzBuzz(9)).to.equal('fizz');
    });
    it('should return 7 if given 7', () => {
      expect(funcs.fizzBuzz(7)).to.equal(7);
    });
  });

  describe('`isPrime`', () => {
    it('should be a function', () => {
      expect(funcs.isPrime).to.be.a('function');
    });
    it('should return true if given 5', () => {
      expect(funcs.isPrime(5)).to.equal(true);
    });
    it('should return false if given 9', () => {
      expect(funcs.isPrime(9)).to.equal(false);
    });
    it('should return a boolean', () => {
      expect(funcs.isPrime(5)).to.a('boolean');
    });
  });

  describe('`returnFirst`', () => {
    it('should be a function', () => {
      expect(funcs.returnFirst).to.be.a('function');
    });
    it('should return 5 if given [5, 6, 7]', () => {
      expect(funcs.returnFirst([5, 6, 7])).to.equal(5);
    });
  });

  describe('`returnLast`', () => {
    it('should be a function', () => {
      expect(funcs.returnLast).to.be.a('function');
    });
    it('should return 7 if given [5, 6, 7]', () => {
      expect(funcs.returnLast([5, 6, 7])).to.equal(7);
    });
  });

  describe('`getArrayLength`', () => {
    it('should be a function', () => {
      expect(funcs.getArrayLength).to.be.a('function');
    });
    it('should return 3 if given [5, 6, 7]', () => {
      expect(funcs.getArrayLength([5, 6, 7])).to.equal(3);
    });
    it('should return a number', () => {
      expect(funcs.getArrayLength([5, 6, 7])).to.a('number');
    });
  });

  describe('`incrementByOne`', () => {
    it('should be a function', () => {
      expect(funcs.incrementByOne).to.be.a('function');
    });
    it('should return [6, 7, 8] if given [5, 6, 7]', () => {
      expect(funcs.incrementByOne([5, 6, 7])).to.eql([6, 7, 8]);
    });
    it('should return an array', () => {
      expect(funcs.incrementByOne([5, 6, 7])).to.an('array');
    });
  });

  describe('`addItemToArray`', () => {
    it('should be a function', () => {
      expect(funcs.addItemToArray).to.be.a('function');
    });
    it('should return [6, 7, 8] if given [6, 7] and 8', () => {
      expect(funcs.addItemToArray([6, 7], 8)).to.eql([6, 7, 8]);
    });
    it('should return an array', () => {
      expect(funcs.addItemToArray([6, 7], 8)).to.an('array');
    });
  });

  describe('`addItemToFront`', () => {
    it('should be a function', () => {
      expect(funcs.addItemToFront).to.be.a('function');
    });
    it('should return [6, 7, 8] if given [7, 8] and 6', () => {
      expect(funcs.addItemToFront([7, 8], 6)).to.eql([6, 7, 8]);
    });
    it('should return an array', () => {
      expect(funcs.addItemToFront([7, 8], 6)).to.an('array');
    });
  });

  describe('`wordsToSentence`', () => {
    it('should be a function', () => {
      expect(funcs.wordsToSentence).to.be.a('function');
    });
    it('should return Hello World if given ["Hello", "World"]', () => {
      expect(funcs.wordsToSentence(['Hello', 'World'])).to.equal('Hello World');
    });
    it('should return a string', () => {
      expect(funcs.wordsToSentence(['Hello', 'World'])).to.a('string');
    });
  });

  describe('`contains`', () => {
    it('should be a function', () => {
      expect(funcs.contains).to.be.a('function');
    });
    it('should return true if given [5, 6, 7] and 5', () => {
      expect(funcs.contains([5, 6, 7], 5)).to.equal(true);
    });
    it('should return false if given [5, 6, 7] and 8', () => {
      expect(funcs.contains([5, 6, 7], 8)).to.equal(false);
    });
    it('should return a boolean', () => {
      expect(funcs.contains(5)).to.a('boolean');
    });
  });

  describe('`addNumbers`', () => {
    it('should be a function', () => {
      expect(funcs.addNumbers).to.be.a('function');
    });
    it('should return 6 if given [1, 2, 3]', () => {
      expect(funcs.addNumbers([1, 2, 3])).to.equal(6);
    });
    it('should return a number', () => {
      expect(funcs.addNumbers([1, 2, 3])).to.a('number');
    });
  });

  describe('`averageTestScore`', () => {
    it('should be a function', () => {
      expect(funcs.averageTestScore).to.be.a('function');
    });
    it('should return 80 if given [70, 80, 90]', () => {
      expect(funcs.averageTestScore([70, 80, 90])).to.equal(80);
    });
    it('should return a number', () => {
      expect(funcs.averageTestScore([70, 80, 90])).to.a('number');
    });
  });

  describe('`largestNumber`', () => {
    it('should be a function', () => {
      expect(funcs.largestNumber).to.be.a('function');
    });
    it('should return 15 if given [5, 15, 10]', () => {
      expect(funcs.largestNumber([5, 15, 10])).to.equal(15);
    });
    it('should return a number', () => {
      expect(funcs.largestNumber([5, 15, 10])).to.a('number');
    });
  });
});
