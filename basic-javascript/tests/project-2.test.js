/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

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
    });

});