/* eslint-disable prefer-destructuring */

// const chai = require('chai');
const assert = require('chai').assert;
// const spies = require('chai-spies');
const funcs = require('../src/project-2');

// chai.use(spies);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {

    describe('`getBiggest`', () => {
        const getBiggest = funcs.getBiggest;
        it('should be a function', () => {
            assert.typeOf(getBiggest, 'function');
        });
        it('should return the biggest number', () => {
            const resp = getBiggest(5, 4);
            assert.equal(resp, 5, 'should return 5');
        });
        it('should return second arg. if are equal', () => {
            const resp = getBiggest(2, 2);
            assert.equal(resp, 2, 'should return 2');
        });
    });

    describe('`greeting`', () => {
        const greeting = funcs.greeting;
        it('should be a function', () => {
            assert.typeOf(greeting, 'function');
        });
        it('should return German greeting', () => {
            const resp = greeting('German');
            assert.equal(resp, 'Guten Tag!', 'should return Guten Tag!');
        });
        it('should return Spanish greeting', () => {
            const resp = greeting('Spanish');
            assert.equal(resp, 'Hola!', 'should return Hola!');
        });
        it('should return a hello greeting', () => {
            const resp = greeting('XXXXXXX');
            assert.equal(resp, 'Hello!', 'should return Hello!');
        });
    });

});