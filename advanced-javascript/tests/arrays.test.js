const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

const expect = chai.expect;
chai.use(sinonChai);

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
// hint 3. - if the function you're testing requires a * callback *, make sure you use a spy like sinon

describe('Arrays', () => {
  let testArr = [];
    beforeEach (() => {
      testArr = [2,4,6];
    });

    afterEach(() => {
      testArr =[];
    });

  describe('`each`', () => {
    const each = arrayFunctions.each;
    it('should be a function', () => {
      expect(each).to.be.a('function');
    });
    // begin here
    it('should call cb correct number of times',()=>{
      cb=sinon.spy();
      each(testArr,cb);
      expect(cb).to.have.callCount(3);
  })
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(map).to.be.an('function');
    });
    it('should produce an array', () => {
      let cb=(value) => value+1;
      expect(map(testArr,cb)).to.be.an('array');
    });
    it('should give map(testArr,cb) correct answers',()=>{
      cb=(value) => value+1;
      expect(map(testArr,cb)[0]).to.equal(3)
    });
    it('should call cb correct number of times',()=>{
        cb=sinon.spy();
        map(testArr,cb);
        expect(cb).to.have.callCount(3);
    });
  });

  describe('`reduce`', () => {
    const reduce = arrayFunctions.reduce;
    it('should be a function', () => {
      expect(reduce).to.be.a('function');
    });
    it('should return correct sum for reduce an array', ()=>{
      let cb = (a,b) => a+b
      expect(reduce(testArr,cb)).to.equal(12);
      expect(reduce(testArr,cb)).to.be.a('number');
    })
    it('should call cb correct number of times',()=>{
      cb=sinon.spy();
      reduce(testArr,cb);
      expect(cb).to.have.callCount(2);
    });
  });

  describe('`find`', () => {
    const find = arrayFunctions.find;
    it('should be a function', () => {
      expect(find).to.be.an('function');
    });
    it('should give find(testArr,cb) correct answers',()=>{
      const cb = (element => {
        return element === 8
        });
        expect(find(testArr,cb)).to.equal(undefined);
    });
    it('should give find(testArr,cb) correct answers',()=>{
      const cb = (element => {
        return element === 2
        });
        expect(find(testArr,cb)).to.equal(2);
    });
  });

  describe('`filter`', () => {
    const filter = arrayFunctions.filter;
    it('should be a function', () => {
      expect(filter).to.be.a('function');
    });
    it('should produce an array', () => {
      let cb=(value) => {return value > 2};
      expect(filter(testArr,cb)).to.be.an('array');
    });
    it('should give filter(testArr,cb) correct answers',()=>{
      let cb=(value) => {return value > 2};
      expect(filter(testArr,cb)[0]).to.equal(4)
    });
    it('should call cb correct number of times',()=>{
        cb=sinon.spy();
        filter(testArr,cb);
        expect(cb).to.have.callCount(3);
    });
  });

  describe('`flatten`', () => {
    const flatten = arrayFunctions.flatten;
    it('should be a function', () => {
      expect(flatten).to.be.a('function');
    });
    it('should produce an array', () => {
      expect(flatten([2,3,[4,5]])).to.be.an('array');
    });
    it('should give flatten([2,3,[4,5]]) correct answers',()=>{
      expect(flatten([2,3,[4,5]])[3]).to.equal(5)
    });
  });
});
