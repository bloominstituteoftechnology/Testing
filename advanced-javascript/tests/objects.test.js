const chai = require('chai')
const expect = require('chai').expect;
const objectFunctions = require('../src/objects');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai)

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Test suite for Objects', () => {
    let testObj = {};
    beforeEach (() => {
        testObj = {a:1,b:2,c:3};
    });

    afterEach(() => {
        testObj = {};
    });

    describe('keys', () =>{
        const keys = objectFunctions.keys
        it('should be an array', () =>{
            expect(keys).to.be.a('function')
        })
        it('should give keys(testObj) as an array',()=>{
            expect(keys(testObj)).to.be.an('array')
        })
        it('should give keys(testObj).includes(a) as true',()=>{
            expect(keys(testObj).includes('a')).to.equal(true)
        })
        it('should give keys(testObj).includes(d) as false',()=>{
            expect(keys(testObj).includes('d')).to.equal(false)
        })
    });

    describe('values', () =>{
        const values = objectFunctions.values
        it('should be an array', () =>{
            expect(values).to.be.a('function')
        })
        it('should give values(testObj) as an array',()=>{
            expect(values(testObj)).to.be.an('array')
        })
        it('should give values(testObj).includes(1) as true',()=>{
            expect(values(testObj).includes(1)).to.equal(true)
        })
        it('should give values(testObj).includes(4) as false',()=>{
            expect(values(testObj).includes(4)).to.equal(false)
        })
    });

    describe('pairs', () =>{
        const pairs = objectFunctions.pairs
        it('should be an array', () =>{
            expect(pairs).to.be.a('function')
        })
        it('should give pairs(testObj) as an array',()=>{
            expect(pairs(testObj)).to.be.an('array')
        })
        it('should give pairs(testObj)[0][1] as 1',()=>{
            expect(pairs(testObj)[0][1]).to.equal(1)
        })
        it('should give pairs(testObj)[1][0] as b',()=>{
            expect(pairs(testObj)[1][0]).to.equal('b')
        })
    });

    describe('mapObject', () =>{
        const mapObject = objectFunctions.mapObject
        it('should be an array', () =>{
            expect(mapObject).to.be.a('function')
        })
        it('should give mapObject(obj,cb) as an object',()=>{
            cb=(value) => value+1;
            expect(mapObject(testObj,cb)).to.be.an('object')
        })
        it('should give mapObject(obj,cb) correct answers',()=>{
            cb=(value) => value+1;
            expect(mapObject(testObj,cb)['a']).to.equal(2)
        })
        it('should call cb correct number of times',()=>{
            cb=sinon.spy();
            mapObject(testObj,cb);
            expect(cb).to.have.callCount(3);
        })
    });

    describe('invert', () =>{
        const invert = objectFunctions.invert
        it('should be an array', () =>{
            expect(invert).to.be.a('function')
        })
        it('should give invert(obj) as an object',()=>{
            expect(invert(testObj)).to.be.an('object')
        })
        it('should give invert(obj) should give correct answers',()=>{
            expect(invert(testObj)[1]).to.equal('a')
        })
        it('should give invert(obj) should give correct answers',()=>{
            expect(invert(testObj)[2]).to.equal('b')
        })
    });

    describe('defaults', () =>{
        const defaults = objectFunctions.defaults
        let defaultProps = {e:4,d:7};
        it('should be an array', () =>{
            expect(defaults).to.be.a('function')
        })
        it('should give defaults(obj,defaultProps) as an object',()=>{
            expect(defaults(testObj,defaultProps)).to.be.an('object')
        })
        it('should give defaults(obj,defaultProps) correct answers',()=>{
            expect(defaults(testObj,defaultProps)['a']).to.equal(1)
        })
        it('should give defaults(obj,defaultProps) correct answers',()=>{
            expect(defaults(testObj,defaultProps)['e']).to.equal(4)
        })
        it('should give defaults(obj,defaultProps) correct answers',()=>{
            expect(defaults(testObj,defaultProps)['d']).to.equal(7)
        })
    });
})