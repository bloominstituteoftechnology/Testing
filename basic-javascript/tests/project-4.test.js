const expect = require('chai').expect;
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const funcs = require('../src/project-4.js');

chai.use(sinonChai);

describe('Project-4 Functions', () => {
  describe('`multiplyArguments`', () => {
    it('should be a function', () => {
      expect(funcs.multiplyArguments).to.be.a('function');
    });
    it('should return the product of the arguments', () => {
      expect(funcs.multiplyArguments(5, 7)).to.equal(35);
    });
    it('should return a number', () => {
      expect(funcs.multiplyArguments(5, 7)).to.be.a('number');
    });
  });

  describe('`invokeCallback`', () => {
    it('should be a function', () => {
      expect(funcs.invokeCallback).to.be.a('function');
    });
    it('should invoke a callback function', () => {
      const callBack = sinon.spy();
      const newCbInvoker = funcs.invokeCallback;
      newCbInvoker(callBack);
      newCbInvoker(callBack);
      expect(callBack).to.have.callCount(2);
    });
  });

  describe('`sumArray`', () => {
    it('should be a function', () => {
      expect(funcs.sumArray).to.be.a('function');
    });
    it('should pass the sum of the values in the array to the callback function', () => {
      const callBack = sinon.spy();
      funcs.sumArray([1, 2, 3], callBack);
      expect(callBack).to.have.been.calledWith(6);
    });
  });

  describe('`forEach`', () => {
    it('should be a function', () => {
      expect(funcs.forEach).to.be.a('function');
    });
    it('should pass each value in the array to the callback function', () => {
      const callBack = sinon.spy();
      const nums = [5, 10, 15];
      funcs.forEach(nums, callBack);
      expect(callBack).to.have.been.calledWith(5);
      expect(callBack).to.have.been.calledWith(10);
      expect(callBack).to.have.been.calledWith(15);
    });
  });

  describe('`map`', () => {
    it('should be a function', () => {
      expect(funcs.map).to.be.a('function');
    });
    it('should pass each value in the array to the callback function', () => {
      const callBack = sinon.spy();
      const nums = [5, 10, 15];
      funcs.map(nums, callBack);
      expect(callBack).to.have.been.calledWith(5);
      expect(callBack).to.have.been.calledWith(10);
      expect(callBack).to.have.been.calledWith(15);
    });
    it('should return an array with correctly mapped values', () => {
      const nums = [5, 10, 15];
      const add1 = num => num + 1;
      expect(funcs.map(nums, add1)).to.eql([6, 11, 16]);
    });
  });

  describe('`getUserConstructor`', () => {
    it('should be a function', () => {
      expect(funcs.getUserConstructor).to.be.a('function');
    });
    it('should return a function', () => {
      const bob = {
        username: 'bob_mcgee',
        name: 'bob',
        email: 'bob@gmail.com',
        password: 'hunter2'
      };
      expect(funcs.getUserConstructor(bob)).to.be.a('function');
    });
  });

  describe('`addPrototypeMethod`', () => {
    it('should be a function', () => {
      expect(funcs.addPrototypeMethod).to.be.a('function');
    });
    it('should add the sayHi method to the prototype', () => {
      funcs.addPrototypeMethod(Object);
      expect(Object.prototype.sayHi).to.be.a('function');
    });
  });

  describe('`addReverseString`', () => {
    it('should be a function', () => {
      expect(funcs.addReverseString).to.be.a('function');
    });
    it('should add the reverse method to the String prototype', () => {
      funcs.addReverseString();
      expect(String.prototype.reverse).to.be.a('function');
    });
    it('should implement the reverse method correctly', () => {
      funcs.addReverseString();
      expect('olleh'.reverse()).to.be.equal('hello');
    });
  });

  describe('`nFactorial`', () => {
    it('should be a function', () => {
      expect(funcs.nFactorial).to.be.a('function');
    });
    it('should return 120 if given 5', () => {
      expect(funcs.nFactorial(5)).to.equal(120);
    });
    it('should return a number', () => {
      expect(funcs.nFactorial(5)).to.be.a('number');
    });
  });

  describe('`cacheFunction`', () => {
    it('should be a function', () => {
      expect(funcs.cacheFunction).to.be.a('function');
    });
    it('should return the correct value', () => {
      const add1 = num => num + 1;
      const cache = funcs.cacheFunction(add1);
      expect(cache(5)).to.equal(6);
    });
    it('should return a function', () => {
      const add1 = num => num + 1;
      expect(funcs.cacheFunction(add1)).to.be.a('function');
    });
  });
});
