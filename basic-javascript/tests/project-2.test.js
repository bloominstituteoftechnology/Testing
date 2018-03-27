/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

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
} = funcs;

describe('Project-2 tests', () => {
  describe('`getBiggest`', () => {
    it('should be a function', () => {
      assert.typeOf(getBiggest(2, 4), 'number');
    }) 
  })

  describe('`greeting`', () => {
    it('should be a function', () => {
      assert.typeOf(greeting('German'), 'string');
    })
    it('should output German', () => {
      assert.equal(greeting('German'), 'Guten Tag!');
    })
  })

  describe('`isTenOrFive`', () => {
    it('isTenOrFive shouold be a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    })
    it('should return true', () => {
      assert.typeOf(isTenOrFive(10), 'boolean');
    })
    it('should return false', () => {
      assert.typeOf(isTenOrFive(2), 'boolean');
    });
  });

  describe('`isInRange`', () => {
    it('isInRange should be a function', () => {
      assert.typeOf(isInRange, 'function');
    })
    it('should return true', () => {
      assert.typeOf(isInRange(10), 'boolean');
    })
    it('should return false', () => {
      assert.typeOf(isInRange(60), 'boolean');
    });
  });

  describe('`isInteger`', () => {
    it('isInteger should be a function', () => {
      assert.typeOf(isInteger, 'function');
    })
    it('should return true', () => {
      assert.typeOf(isInteger(5), 'boolean');
    })
    it('should return false', () => {
      assert.typeOf(isInteger(3.14), 'boolean');
    });
  });

  describe('`fizzBuzz`', () => {
    it('should be a function', () => {
      assert.typeOf(fizzBuzz, 'function')
    })
    it('should respond with fizzbuzz', () => {
      assert.equal(fizzBuzz(15), 'fizzbuzz');
    });
  });

  describe('`isPrime`', () => {
    it('should be a function', () => {
      assert.typeOf(isPrime, 'function');
    });
  });

  describe('`returnFirst`', () => {
    it('should be a function', () => {
      assert.typeOf(returnFirst, 'function');
    });
  });

  describe('`returnLast`', () => {
    it('should be a function', () => {
      assert.typeOf(returnLast, 'function');
    });
  });

  describe('`getArrayLength`', () => {
    it('should be a function', () => {
      assert.typeOf(getArrayLength, 'function');
    });
  });

  describe('`incrementByOne`', () => {
    it('should be a function', () => {
      assert.typeOf(incrementByOne, 'function');
    });
  });

  describe('`addItemToArray`', () => {
    it('should be a function', () => {
      assert.typeOf(addItemToArray, 'function');
    });
  });

  describe('`addItemToFront`', () => {
    it('should be a function', () => {
      assert.typeOf(addItemToFront, 'function');
    });
  });

  describe('`wordsToSentence`', () => {
    it('should be a function', () => {
      assert.typeOf(wordsToSentence, 'function');
    });
  });

  describe('`contains`', () => {
    it('should be a function', () => {
      assert.typeOf(contains, 'function');
    });
  });

  describe('`addNumbers`', () => {
    it('should be a function', () => {
      assert.typeOf(addNumbers, 'function');
    });
  });

  describe('`averageTestScore`', () => {
    it('should be a function', () => {
      assert.typeOf(averageTestScore, 'function');
    });
  });

  describe('`largestNumber`', () => {
    it('should be a function', () => {
      assert.typeOf(largestNumber, 'function');
    });
  });
  
});
