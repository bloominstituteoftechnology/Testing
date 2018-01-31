const expect = require('chai').expect;
const objectFunctions = require('../src/objects');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
chai.use(require('sinon-chai'));



// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Objects', () => {
    let testObject = {};
    beforeEach(() => {
        testObject.one = 1;
        testObject.two = 2;
        testObject.three = 3;
        testObject.four = 4
    });

    afterEach(() => {
        testObject = {};
    })

    describe('Keys', () => {
        const keys = objectFunctions.keys;
        it('should exist and be a function', () => {
            expect(objectFunctions.keys).to.be.a('function');
        });
        it('should return an array', () => {
            expect(objectFunctions.keys(testObject)).to.be.a('array');
        });
        it('should return an array of keys', () => {
            const myArrayOfKeys = Object.keys(testObject); // testing file's comparison 
            const testCall = keys(testObject); // function that we're testing
            expect(myArrayOfKeys).to.eql(testCall); // compare testing file's result with the result of function to test
        });
    });

    describe('Values', () => {
        const values = objectFunctions.values;
        it('should exist and be a function', () => {
            expect(objectFunctions.values).to.be.a('function');
        });
        it('should return an array', () => {
            expect(objectFunctions.values(testObject)).to.be.a('array');
        });
        it('should return an array of three values', () => {
            const myArrayOfKeys = Object.keys(testObject).map(key => {
                return testObject[key]
            });; // testing file's comparison 
            const testCall = values(testObject); // function that we're testing
            expect(myArrayOfKeys).to.eql(testCall); // compare testing file's result with the result of function to test
        });
    });

    describe('mapObject', () => {
        const mapObject = objectFunctions.mapObject;
        it('should exist and be a function', () => {
            expect(objectFunctions.mapObject).to.be.a('function');
        });
        it('should return key value pairs', () => {
            // console.log('mapobject', mapObject(testObject, callBack));
            const callBack = sinon.spy();
            const output = mapObject(testObject, callBack)
            expect(output).to.eql(testObject);
            expect(output.one).to.eql(testObject.one);
        });
        it('should invoke callback as many as there are items in the object', () => {
            const callBack = sinon.spy();
            const mapObject = objectFunctions.mapObject;
            mapObject(testObject, callBack);
            expect(callBack).to.have.callCount(4);
        });
    });

    describe('pairs', () => {
        const pairs = objectFunctions.pairs;
        it('should exist and be a function', () => {
            expect(objectFunctions.pairs).to.be.a('function');
        });
        it('should return an array', () => {
            expect(objectFunctions.pairs(testObject)).to.be.a('array');
        });
        it('should return key value pairs', () => {
            expect(pairs(testObject)).to.eql([['one', 1], ['two', 2], ['three', 3], ['four', 4]]);
            expect(pairs(testObject)).to.have.lengthOf(4);
        });

    });

    describe('invert', () => {
        const invert = objectFunctions.invert;
        it('should exist and be a function', () => {
            expect(objectFunctions.invert).to.be.a('function');
        });
        it('should return an object', () => {
            expect(objectFunctions.invert(testObject)).to.be.a('object');
        });
        it('should return key value pairs inverted', () => {
            const output = invert(testObject);
            console.log('output', output);
            expect(output['1']).to.eql('one');
            expect(output['2']).to.eql('two');
            expect(output['3']).to.eql('three');
            expect(output['4']).to.eql('four');
        });
    });

    describe('defaults', () => {
        const defaults = objectFunctions.defaults;
        it('should exist and be a function', () => {
            expect(objectFunctions.defaults).to.be.a('function');
        });
        it('should return an object', () => {

            expect(objectFunctions.defaults(testObject)).to.be.a('object');
        });
        it('should return key value pairs defaultsed', () => {
            expect(defaults(testObject)).to.eql([['four', 4], ['three', 3], ['two', 2], ['one', 1]]);
        });
    });

});


