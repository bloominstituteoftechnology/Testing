// var funcs = require('./project-4.js');
const chai = require('chai');
const spies = require('chai-spies');
const sinonChai = require("sinon-chai");
const sinon = require("sinon");
const should = require ('chai').should;
const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-4.js');
const recursiveMethods = require('../src/recursion');
const closureMethods = require('../src/closure');
require("chai").use(require("sinon-chai"));
/* eslint-disable no-undef */

describe('multiplyArguments()', function() {
	it('should return the product of all the arguments', function() {
		var product = funcs.multiplyArguments(5, 5);
		var product2 = funcs.multiplyArguments();
		var product3 = funcs.multiplyArguments(3, 3, 3, 3);
		var product4 = funcs.multiplyArguments(1);
		var product5 = funcs.multiplyArguments(10, 0, 10);
		expect(product).to.equal(25);
		expect(product2).to.equal(0);
		expect(product3).to.equal(81);
		expect(product4).to.equal(1);
		expect(product5).to.equal(0);
	});
});

describe('invokeCallback(cb)', function() {
  it.skip('should call the callback that is passed in', () => {
  	const cb = jest.fn();
		var spy = sinon.spy();
  	// expect((cb).mock.calls.length).to.be(0);
    funcs.invokeCallback();
    assert(cb.calledOnce);
  });
});

describe('sumArray(cb)', function() {
	it('should pass the sum of all array numbers to cb', function(done) {
		funcs.sumArray([1, 2, 3, 4, 5], function(sum) {
			expect(sum).to.equal(15);
			done();
		});
	});
});

describe('forEach(arr, cb)', function() {
	it('should pass all array items one by one to cb', function() {
		var nums = [];
		funcs.forEach([1, 2, 3, 4, 5], function(num) {
			nums.push(num);
		});
		expect(nums).to.deep.equal([1, 2, 3, 4, 5]);
	});
});

describe('map(arr, cb)', function() {
	it('should return an array of all the processed array elements', function() {
		var squares = funcs.map([1, 2, 3, 4, 5], function(num) {
			return num * num;
		});
		expect(squares).to.deep.equal([1, 4, 9, 16, 25]);
	});
});

describe('getUserConstructor()', function() {
	it('should return a user constructor that correctly builds user objects', function() {
		var User = funcs.getUserConstructor();
		var user = new User({username: 'SunJieMing', name: 'Ben', email: 'ben@lambdaschool.com', password: 'LS Rocks!' });
		expect(user.username).to.include('SunJieMing');
		expect(user.name).to.include('Ben');
		expect(user.email).to.include('ben@lambdaschool.com');
		expect(user.password).to.include('LS Rocks!');
	});
});

describe('addPrototypeMethod(Constructor)', function() {
	it('should add the method sayHi to the constructor', function() {
		function Test() {
			this.test = true;
		}
		funcs.addPrototypeMethod(Test);
		var test = new Test();
		expect(test.sayHi()).to.equal('Hello World!');
	});
});

describe('addReverseString(StringPrototype)', function(){
	it('should add a reverse string method to the String prototype that returns a reversed version of the string', function() {
		funcs.addReverseString();
		var str = 'Hello';
		expect(str.reverse()).to.include('olleH');
	});
});

describe('nFactorial(n)', function() {
	it('should return the factorial of n', function() {
		expect(funcs.nFactorial(5)).to.equal(120);
		expect(funcs.nFactorial(15)).to.equal(1307674368000);
	});
});

describe('cacheFunction(cb)', function() {
    it('should return the callback function', function() {
      expect(funcs.cacheFunction()).to.be.a('function');
    });
    it('should return the callback function result whenever the cached function is invoked', () => {
      const foobar = x => (x * x);
      const cachedFunction = funcs.cacheFunction(foobar);
      expect(cachedFunction(5)).to.deep.equal(25);
    });

		it('should cache function results and not rerun the original callback if the same arguments are presented', () => {
      const foobar = jest.fn();
      const cachedFunction = closureMethods.cacheFunction(foobar);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(10);
      cachedFunction(10);
      cachedFunction(10);
      cachedFunction(10);
      cachedFunction(10);
      //expect(foobar).to.have.been.called(2);
    });
  });
// });


/* eslint-enable no-undef */
