const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {

    describe('`getBiggest`', () => {
        it('should be a function', () => {
            const getBiggest = funcs.getBiggest;
            assert.typeOf(funcs.getBiggest, 'function');
        });
        it('should return a number', () => {
            const biggest = funcs.getBiggest(2,3);
            assert.typeOf(biggest, 'number');
        });
        it('should return the bigger number',() => {
            const getBiggest = funcs.getBiggest;
            assert.equal(getBiggest(2,3), 3);
            assert.equal(getBiggest(5,9), 9);
        })
    });

    describe('`greeting`', () => {
        it('should be a function', () => {
            const greeting = funcs.greeting;
            assert.typeOf(greeting, 'function');
        });
        it('should return a string', () => {
            const greeting = funcs.greeting;
            assert.typeOf(greeting('German'), 'string');
        });
        it('should return the proper greeting', () => {
            const greeting = funcs.greeting;
            assert.equal(greeting('German'), 'Guten Tag!');
            assert.equal(greeting('Spanish'), 'Hola!');
            assert.equal(greeting('English'), 'Hello!');
        });
    });

    describe('`isTenOrFive`', () => {
        it('should be a function', () => {
            const isTenOrFive = funcs.isTenOrFive;
            assert.typeOf(isTenOrFive, 'function');
        });
        it('should return a boolean', () => {
            const tenOrFive = funcs.isTenOrFive(5);
            assert.typeOf(tenOrFive, 'boolean');
        });
        it('should return true if ten or five', () => {
            const isTenOrFive = funcs.isTenOrFive;
            assert.equal(isTenOrFive(10), true);
            assert.equal(isTenOrFive(5), true);
        });
    });

    describe('`isInRange`', () => {
        it('should be a function', () => {
            const isInRange = funcs.isInRange;
            assert.typeOf(isInRange, 'function');
        });
        it('should return a boolean', () => {
            const withinRange = funcs.isInRange(23);
            assert.typeOf(withinRange, 'boolean');
        });
        it('should return true if input is within range', () => {
            const isInRange = funcs.isInRange;
            assert.equal(isInRange(30), true);
            assert.equal(isInRange(45), true);
        });
    });

    describe('`isInteger`', () => {
        it('should be a function', () => {
            const isInteger = funcs.isInteger;
            assert.typeOf(isInteger, 'function');
        });
        it('should return a boolean', () => {
            const newInteger = funcs.isInteger(10);
            assert.typeOf(newInteger, 'boolean');
        });
        it('should return true if input is an integer', () => {
            const isInteger = funcs.isInteger;
            assert.equal(isInteger(5), true);
            assert.equal(isInteger(3), true);
        });
    });




});
