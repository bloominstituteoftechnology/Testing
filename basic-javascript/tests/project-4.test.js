const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const funcs = require('../src/project-4.js');
chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-4 Functions', () => {
    describe('`multiplyArguments`', () => {
      it('should return 0 when no arguments are passed', () => {
        const expected = 0;
        const actual = funcs.multiplyArguments();
        expect(actual).to.equal(expected);
      });
      it('should return the arguement only when only one arguement is passed', () => {
        const expected = 2;
        const actual = funcs.multiplyArguments(2);
        expect(actual).to.equal(expected);
      });
    });
    describe('`invokeCallback function`', () => {
        it('should invoke the callback exactly one time', () => {
          const spy = sinon.spy();
          const numbers = [1, 2, 3];
          funcs.sumArray(numbers, spy);
          expect(spy).to.have.been.calledOnce;
        });
        it('should calculate the sum of the elements of the array', () => {
            const spy = sinon.spy();
            const numbers = [2, 2, 3];
            const expected = 7;
            funcs.sumArray(numbers, spy);
            expect(spy).to.have.been.calledWith(expected);
          });
      });
      describe('`forEach function`', () => {
        it('should invoke the callback exactly one time', () => {
          const spy = sinon.spy();
          const numbers = [1, 2, 3, 4];
          funcs.forEach(numbers, spy);
          expect(spy.callCount).to.equal(4);
        });
        it('should calculate the sum of the elements of the array', () => {
            const spy = sinon.spy();
            const numbers = [2, 4, 6];
            
            funcs.forEach(numbers, spy);
            expect(spy.getCall(0)).to.have.been.calledWith(2);
          });
      });
});