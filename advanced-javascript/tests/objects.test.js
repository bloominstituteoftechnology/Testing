const assert = require('chai').expect;
const objectFunctions = require('../src/objects');

describe('Objects', () => {
    let testObject = {}; 
    beforeEach(() => {
        testObject.name = 'Ethan';
        testObject.age = 27;
        testObject.occupation = 'Sailor';
    });

    afterEach(() => {
        testObject = {};
    });

    describe('Keys', () => {
        const keys = objectFunctions.keys; 
        it.skip('should exist and be a function', () => {});
        it.skip('should return an array', () => {
            const myArrayOfKeys = Object.keys(testObject);
            const 
        });
    });
    afterEach(() => {
        myTestArray = [];
    });
});