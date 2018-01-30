/* eslint-disable */

const expect = require('chai').expect;
const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {
  describe('getBiggest', () => {
		it('should be a function', () => {
			expect(funcs.getBiggest).to.be.a('function');
		});
		it('should return 10 if passed 10 and 5', () => {
			expect(funcs.getBiggest(10, 5)).to.equal(10);
		});
		it('should return 10 if passed 5 and 10', () => {
			expect(funcs.getBiggest(5, 10)).to.equal(10);
		});
	});
	
	describe('greeting', () => {
		it('should be a function', () => {
			expect(funcs.greeting).to.be.a('function');
		});
		it('should return Guten Tag! if passed German', () => {
			expect(funcs.greeting('German')).to.equal('Guten Tag!');
		});
		it('should return Hola! if passed Spanish', () => {
			expect(funcs.greeting('Spanish')).to.equal('Hola!');
		});
		it('should return Hello! if passed any other string', () => {
			expect(funcs.greeting('French')).to.equal('Hello!');
		});
	});

	describe('isTenOrFive', () => {
		it('should be a function', () => {
			expect(funcs.isTenOrFive).to.be.a('function');
		});
		it('should return true if passed 5', () => {
			expect(funcs.isTenOrFive(5)).to.equal(true);
		});
		it('should return true if passed 10', () => {
			expect(funcs.isTenOrFive(10)).to.equal(true);
		});
		it('should return false if not passed 5 or 10', () => {
			expect(funcs.isTenOrFive(5)).to.equal(true);
		});
	});

	describe('isInRange', () => {
		it('should be a function', () => {
			expect(funcs.isInRange).to.be.a('function');
		});
		it('should return true if passed 25', () => {
			expect(funcs.isInRange(25)).to.equal(true);
		});
		it('should return false if passed 5', () => {
			expect(funcs.isInRange(5)).to.equal(false);
		});
	});

	describe('isInteger', () => {
		it('should be a function', () => {
			expect(funcs.isInteger).to.be.a('function');
		});
		it('should return true if an integer is passed', () => {
			expect(funcs.isInteger(4)).to.equal(true);
		});
		it('should return false if passed a non integer', () => {
			expect(funcs.isInteger('string')).to.equal(false);
		});
	});

	describe('fizzBuzz', () => {
		it('should be a function', () => {
			expect(funcs.fizzBuzz).to.be.a('function');
		});
		it('should return fizz if passed 9', () => {
			expect(funcs.fizzBuzz(9)).to.equal('fizz');
		});
		it('should return buzz if passed 10', () => {
			expect(funcs.fizzBuzz(10)).to.equal('buzz');
		});
		it('should return fzzbuzz if passed 30', () => {
			expect(funcs.fizzBuzz(30)).to.equal('fizzbuzz');
		});
	});

	describe('isPrime', () => {
		it('should be a function', () => {
			expect(funcs.isPrime).to.be.a('function');
		});
		it('should return true if passed 3', () => {
			expect(funcs.isPrime(3)).to.equal(true);
		});
		it('should return false if passed 4', () => {
			expect(funcs.isPrime(4)).to.equal(false);
		});
	});

	describe('returnFirst', () => {
		it('should be a function', () => {
			expect(funcs.returnFirst).to.be.a('function');
		});
		it('should return 1 if passed [1, 2, 3]', () => {
			expect(funcs.returnFirst([1, 2, 3])).to.equal(1);
		});
		it('should return a number when passed an array', () => {
			expect(funcs.returnFirst([1, 2, 3])).to.be.a('number');
		});
	});

	describe('returnLast', () => {
		it('should be a function', () => {
			expect(funcs.returnLast).to.be.a('function');
		});
		it('should return 3 if passed [1, 2, 3]', () => {
			expect(funcs.returnLast([1, 2, 3])).to.equal(3);
		});
		it('should return a number when passed an array', () => {
			expect(funcs.returnFirst([1, 2, 3])).to.be.a('number');
		});
	});

	describe('getArrayLength', () => {
		it('should be a function', () => {
			expect(funcs.getArrayLength).to.be.a('function');
		});
		it('should return 3 if passed [1, 2, 3]', () => {
			expect(funcs.getArrayLength([1, 2, 3])).to.equal(3);
		});
		it('should return a number if passed an array', () => {
			expect(funcs.getArrayLength([1, 2, 3])).to.be.a('number');
		});
	});

	describe('incrementByOne', () => {
		it('should be a function', () => {
			expect(funcs.incrementByOne).to.be.a('function');
		});
		it('should return [2, 3, 4] if passed [1, 2, 3]', () => {
			expect(funcs.incrementByOne([1, 2, 3])).to.eql([2, 3, 4]);
		});
		it('should return an array if passed an array', () => {
			expect(funcs.incrementByOne([1, 2, 3])).to.be.a('array');
		});
	});

	describe('addItemToArray', () => {
		it('should be a function', () => {
			expect(funcs.addItemToArray).to.be.a('function');
		});
		it('should return [1, 2, 3] if passed [1, 2], 3', () => {
			expect(funcs.addItemToArray([1, 2], 3)).to.eql([1, 2, 3]);
		});
		it('should return an array if passed an array', () => {
			expect(funcs.addItemToArray([1, 2], 3)).to.be.a('array');
		});
	});

	describe('addItemToFront', () => {
		it('should be a function', () => {
			expect(funcs.addItemToFront).to.be.a('function');
		});
		it('should return [1, 2, 3] if passed [2, 3], 1', () => {
			expect(funcs.addItemToFront([2, 3], 1)).to.eql([1, 2, 3]);
		});
		it('should return an array when passed an array', () => {
			expect(funcs.addItemToFront([2, 3], 1)).to.be.a('array');
		});
	});

	describe('wordsToSentence', () => {
		it('should be a function', () => {
			expect(funcs.wordsToSentence).to.be.a('function');
		});
		it('should return hi patrick if passed ["hi", "patrick"]', () => {
			expect(funcs.wordsToSentence(['hi', 'patrick'])).to.equal('hi patrick');
		});
		it('should return a string when passed an array of strings', () => {
			expect(funcs.wordsToSentence(['hi', 'patrick'])).to.be.a('string');
		});
	});

	describe('contains', () => {
		it('should be a function', () => {
			expect(funcs.contains).to.be.a('function');
		});
		it('should return true when passed [1, 2, 3] and 1', () => {
			expect(funcs.contains([1, 2, 3], 1)).to.equal(true);
		});
		it('should return false when passed [1, 2, 3] and 4', () => {
			expect(funcs.contains([1, 2, 3], 4)).to.equal(false);
		});
	});

	describe('addNumbers', () => {
		it('should be a function', () => {
			expect(funcs.addNumbers).to.be.a('function');
		});
		it('sjould return 6 if passed [1, 2, 3]', () => {
			expect(funcs.addNumbers([1, 2, 3])).to.equal(6);
		});
		it('should return a number when passed an array', () => {
			expect(funcs.addNumbers([1, 2, 3])).to.be.a('number');
		});
	});

	describe('averageTestScore', () => {
		it('should be a function', () => {
			expect(funcs.averageTestScore).to.be.a('function');
		});
		it('should return 90 when passed [100, 90, 80]', () => {
			expect(funcs.averageTestScore([100, 90, 80])).to.equal(90);
		});
		it('should return a number when passed an array', () => {
			expect(funcs.averageTestScore([100, 90, 80])).to.be.a('number');
		});
	});

	describe('largestNumber', () => {
		it('should be a function', () => {
			expect(funcs.largestNumber).to.be.a('function');
		});
		it('should return 3 if passed [1, 2, 3]', () => {
			expect(funcs.largestNumber([1, 2, 3])).to.equal(3);
		});
		it('should return a number when passed an array', () => {
			expect(funcs.largestNumber([1, 2, 3])).to.be.a('number');
		});
	});

});