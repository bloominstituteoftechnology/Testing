/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require ('../src/project-2');

describe('Project-2 Functions', () => {
    describe('getBiggest', () => {
        it('Should be a function', () => {
            assert.typeOf(funcs.getBiggest, 'function');
        });
        it('Should return 5', () => {
            assert(funcs.getBiggest(3,5), 5);
        });
        it('Should return 5', () => {
            assert(funcs.getBiggest(5,5), 5);
        });
        it('Should return 5', () => {
            assert(funcs.getBiggest(5, 3), 5);
        });
    });


    describe('greeting', () => {
        it('Should be a function', () => {
            assert.typeOf(funcs.greeting, 'function');
        });
        it('Should return Guten Tag!', () => {
            assert(funcs.greeting('German', 'Guten Tag!'));
        });
        it('Should return Hola!', () => {
            assert(funcs.greeting('Spanish', 'Hola!'));
        });
        it('Should return Guten Tag!', () => {
            assert(funcs.greeting('Random', 'Hello!'));
        });
    })



});