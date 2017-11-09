const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-3');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-3 Functions', () => {
    describe('`makeCat`', () => {
      it('should be a function', () => {
        const makeCat = funcs.makeCat;
        assert.typeOf(makeCat, 'function');
      });
      it('should return age of 10 if arguements num is 10', () => {
        const makeCat = funcs.makeCat;
        let str = "Blue";
        let num = 10;
        const expectedVal = num;
        expect(makeCat(str, num).age).to.equal(expectedVal);
      });
    });
    describe('`addProperty`', () => {
        it('should be a function', () => {
          const addProperty = funcs.addProperty;
          assert.typeOf(addProperty, 'function');
        });
        it('should return null if arguments are object and a property age', () => {
          const addProperty = funcs.addProperty;
          let obj = {};
          let prop = 'age';
          const expectedVal =  null;
          expect(addProperty(obj, prop).age).to.equal(expectedVal);
        });
    });
    describe('`invokeMethod`', () => {
        it('should be a function', () => {
          const invokeMethod = funcs.invokeMethod;
          assert.typeOf(invokeMethod, 'function');
        });
        it('should return null if arguments are object and a property age', () => {
          const invokeMethod = funcs.invokeMethod;
          let obj = {};
          let func = function (){ return "Hello"};
       
          expect(invokeMethod(obj, func)).contains(func);
        });
    });
    
  
});