const assert = require('chai').assert;
const funcs = require('../src/project-4.js');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-4 Functions', () => {

  describe('multiplyArguments', () => {
    const multiplyArguments = funcs.multiplyArguments;
    it('should be a function', () => {
      assert.isFunction(multiplyArguments);
    });
    it.skip('should return a `TYPE`', () => {
      assert.RETURN_TYPE(multiplyArguments(PARAMETERS))
    });
    it.skip('should return a `VALUE`', () => {
      assert.CHECK(multiplyArguments(PARAMETERS), VALUE)
    });
  });

  describe('invokeCallback', () => {
    const invokeCallback = funcs.invokeCallback;
    it('should be a function', () => {
      assert.isFunction(invokeCallback);
    });
    it.skip('should invoke callBack', () => {
      assert.INVOKE_CB(invokeCallback(PARAMETERS))
    });
    it.skip('should return a `VALUE`', () => {
      assert.CHECK(invokeCallback(PARAMETERS), VALUE)
    });
  });

  describe('sumArray', () => {
    const sumArray = funcs.sumArray;
    it('should be a function', () => {
      assert.isFunction(sumArray);
    });
    it.skip('should invoke callBack', () => {
      assert.INVOKE_CB(sumArray(PARAMETERS))
    });
    it.skip('should return a `VALUE`', () => {
      assert.CHECK(sumArray(PARAMETERS), VALUE)
    });
  });

  describe('forEach', () => {
    const forEach = funcs.forEach;
    it('should be a function', () => {
      assert.isFunction(forEach);
    });
    it.skip('should invoke callBack', () => {
      assert.INVOKE_CB(forEach(PARAMETERS))
    });
    it.skip('should return a `VALUE`', () => {
      assert.CHECK(forEach(PARAMETERS), VALUE)
    });
  });

  describe('map', () => {
    const map = funcs.map;
    it('should be a function', () => {
      assert.isFunction(map);
    });
    it.skip('should return a `TYPE`', () => {
      assert.RETURN_TYPE(map(PARAMETERS))
    });
    it.skip('should return a `VALUE`', () => {
      assert.CHECK(map(PARAMETERS), VALUE)
    });
  });

  describe('getUserConstructor', () => {
    const getUserConstructor = funcs.getUserConstructor;
    it('should be a function', () => {
      assert.isFunction(getUserConstructor);
    });
    it.skip('should return a `TYPE`', () => {
      assert.RETURN_TYPE(getUserConstructor(PARAMETERS))
    });
    it.skip('should return a `VALUE`', () => {
      assert.CHECK(getUserConstructor(PARAMETERS), VALUE)
    });
  });

  describe('addPrototypeMethod', () => {
    const addPrototypeMethod = funcs.addPrototypeMethod;
    it('should be a function', () => {
      assert.isFunction(addPrototypeMethod);
    });
    it.skip('should return a `TYPE`', () => {
      assert.RETURN_TYPE(addPrototypeMethod(PARAMETERS))
    });
    it.skip('should return a `VALUE`', () => {
      assert.CHECK(addPrototypeMethod(PARAMETERS), VALUE)
    });
  });

  describe('addReverseString', () => {
    const addReverseString = funcs.addReverseString;
    it('should be a function', () => {
      assert.isFunction(addReverseString);
    });
    it.skip('should return a `TYPE`', () => {
      assert.RETURN_TYPE(addReverseString(PARAMETERS))
    });
    it.skip('should return a `VALUE`', () => {
      assert.CHECK(addReverseString(PARAMETERS), VALUE)
    });
  });

  describe('nFactorial', () => {
    const nFactorial = funcs.nFactorial;
    it('should be a function', () => {
      assert.isFunction(nFactorial);
    });
    it.skip('should return a `TYPE`', () => {
      assert.RETURN_TYPE(nFactorial(PARAMETERS))
    });
    it.skip('should return a `VALUE`', () => {
      assert.CHECK(nFactorial(PARAMETERS), VALUE)
    });
  });

  describe('cacheFunction', () => {
    const cacheFunction = funcs.cacheFunction;
    it('should be a function', () => {
      assert.isFunction(cacheFunction);
    });
    it.skip('should return a `TYPE`', () => {
      assert.RETURN_TYPE(cacheFunction(PARAMETERS))
    });
    it.skip('should return a `VALUE`', () => {
      assert.CHECK(cacheFunction(PARAMETERS), VALUE)
    });
  });

});






















// // TEMPLATE
// describe('Project-# Functions', () => {
//
//   describe('NAME', () => {
//     const NAME = funcs.NAME;
//     it.skip('should be a function', () => {
//       assert.isFunction(NAME);
//     });
//     it.skip('should return a `TYPE`', () => {
//       assert.isTYPE(NAME(PARAMETERS))
//     });
//     it.skip('should return a `VALUE`', () => {
//       assert.equal(NAME(PARAMETERS), VALUE)
//     });
//   });
//
// });
