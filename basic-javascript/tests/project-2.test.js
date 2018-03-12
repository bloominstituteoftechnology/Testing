/* eslint-disable*/

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
  describe('getBiggest', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.getBiggest, 'function');
    });
    it('should return the larger of two numbers', () => {
      assert(funcs.getBiggest(2, 3), 3);
    });
    it('should return the number if the numbers are the same', () => {
      assert(funcs.getBiggest(2, 2), 2);
    });
  });

  describe('greeting', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.greeting, 'function');
    });
    it('should return greeting in appropriate language', () => {
      assert(funcs.greeting('German'), 'Guten Tag!');
    });
    it('should return greeting in appropriate language', () => {
      assert(funcs.greeting('Spanish'), 'Hola!');
    });
    it('should return greeting in appropriate language', () => {
      assert(funcs.greeting('jkasdlflkjsad'), 'Hello!');
    });
  });

  describe('isTenOrFive', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.isTenOrFive, 'function');
    });
    it('should return true if the number is 10 or 5', () => {
      assert(funcs.isTenOrFive(10), true);
      assert(funcs.isTenOrFive(5), true);
    });
    it('should return false if the number is not equal to 10 or 5', () => {
      assert.strictEqual(funcs.isTenOrFive(2), false);
    });
  });

  describe('isInRange', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.isInRange, 'function');
    });
    it('should return true if the number is between 20 and 50 exclusive', () => {
      assert(funcs.isInRange(Math.floor(Math.random() * (49 - 21) + 21)));
    });
    it('should return false if the number is less than or equal to 20 or greater than or equal to 50', () => {
      assert.strictEqual(funcs.isInRange(Math.floor(Math.random() * (200 - 50) + 50)), false);
      assert.strictEqual(funcs.isInRange(Math.floor(Math.random() * 20)), false);
    });
    it('should return false if the number is negative', () => {
      assert.strictEqual(funcs.isInRange(-1), false);
    });
  });

  describe('isInteger', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.isInteger, 'function');
    });
    it('should return true if the number is an integer', () => {
      assert(funcs.isInteger(4), true);
    });
    it('should return false if the number is a decimal', () => {
      assert.strictEqual(funcs.isInteger(3.14), false);
    });
    it('should return false if the number is a fraction', () => {
      assert.strictEqual(funcs.isInteger(1/2), false);
    });
   });

  describe('fizzBuzz', () => {
    it('should be a function', () => {
	  assert.typeOf(funcs.fizzBuzz, 'function');
	});
	it('should return buzz if number is divisible by five', () => {
	  assert(funcs.fizzBuzz(5), 'buzz');
	});
	it ('should return fizz if number is divisible by three', () => {
	  assert(funcs.fizzBuzz(3), 'fizz');
	});
	it('should return fizzbuzz if number is divisible by both three and five', () => {
	  assert(funcs.fizzBuzz(15), 'fizzbuzz');
	});
	it ('should return the number if it isn\'t divisible by three or five', () => {
	  assert(funcs.fizzBuzz(7), 7);
	});
  });

  describe('isPrime', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.isPrime, 'function');
    });
    it('should return false if the number is negative', () => {
      assert.strictEqual(funcs.isPrime(-1), false);
    });
    it('should return false if the number is 1 or 0', () => {
      assert.strictEqual(funcs.isPrime(1), false);
      assert.strictEqual(funcs.isPrime(0), false);
    });
    it('should return false if the number is not prime', () => {
      assert.strictEqual(funcs.isPrime(21), false);
    });
    it('should return true if the number is prime', () => {
      assert(funcs.isPrime(13), true);
    });
  });

  describe('returnFirst', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.returnFirst, 'function');
    });
    it('should return the first item in the array', () => {
      assert(funcs.returnFirst([1, 2, 3, 4]), 1);
    });
  });

  describe('returnLast', () => {
  	it('should be a function', () => {
  		assert.typeOf(funcs.returnLast, 'function');
  	});
  	it('should return the last item in the array', () => {
  		assert(funcs.returnLast([1, 2, 3, 4]), 4);
  	});
  });

  describe('getArrayLength', () => {
  	it('should be a function', () => {
  		assert.typeOf(funcs.getArrayLength, 'function');
  	});
  	it('should return the length of the array', () => {
  		assert(funcs.getArrayLength([1, 2, 3, 4]), 4);
  	});
  });

  describe('incrementByOne', () => {
  	it('should be a function', () => {
  		assert.typeOf(funcs.incrementByOne, 'function');
  	});
  	it('should increment each item in the array by 1', () => {
  		assert(funcs.incrementByOne([1, 2, 3, 4]), [2, 3, 4, 5]);
  	});
  });

  describe('addItemToArray', () => {
  	it('should be a function', () => {
  		assert.typeOf(funcs.addItemToArray, 'function');
  	});
  	it('should properly add an item to the end of the array', () => {
  		assert(funcs.addItemToArray([1, 2, 3], 4), [1, 2, 3, 4]);
  	});
  });

  describe('addItemToFront', () => {
  	it('should be a function', () => {
  		assert.typeOf(funcs.addItemToFront, 'function');
  	});
  	it('should properly add an item to the beginning of the array', () => {
  		assert(funcs.addItemToFront([2, 3, 4], 1), [1, 2, 3, 4]);
  	});
  });

  describe('wordsToSentence', () => {
  	it('should be a function', () => {
  		assert.typeOf(funcs.wordsToSentence, 'function');
  	});
  	it('should add multiple words to make a sentence', () => {
  		assert(funcs.wordsToSentence(['the', 'dog', 'barked']), 'the dog barked');
  	});
  	it('should return a string', () => {
  		assert.typeOf(funcs.wordsToSentence(['the', 'dog', 'barked']), 'string');
  	});
  });

  describe('contains', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.contains, 'function');
    });
    it('should return true if the item is included in the array', () => {
      assert(funcs.contains(['a', 'b', 'c'], 'c'), true);
    });
    it('should return false if the item is not included in the array', () => {
      assert.strictEqual(funcs.contains([1, 2, 3], 'blue'), false);
    });
  });

  describe('addNumbers', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.addNumbers, 'function');
    });
    it('should find the sum of all the elemnents in an array', () => {
      assert(funcs.addNumbers([1, 2, 3]), 6);
    });
  });

  describe('averageTestScore', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.averageTestScore, 'function');
    });
    it('should find the average of all the numbers in the array', () => {
      assert(funcs.averageTestScore([80, 80, 70, 70, 100]), 80);
    });
  });

  describe('largestNumber', () => {
    it('should be a function', () => {
      assert.typeOf(funcs.largestNumber, 'function');
    });
    it('should return the largest number in the array', () => {
      assert(funcs.largestNumber([1, 2, 3, 4]), 4);
    });
  });
});


