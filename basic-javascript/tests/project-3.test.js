const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-3');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project 3 Functions', () => {
  describe('makeCat', () => {
    it('should be a funtion', () => {
      const makeCat = funcs.makeCat;
      expect(makeCat).to.be.a('function');
    });
    it('should return an object', () => {
      const makeCat = funcs.makeCat;
      expect(makeCat('Chris', 21)).to.be.an('object');
    });
    it('should return Meow when meow is invoked', () => {
      const makeCat = funcs.makeCat;
      const newCat = makeCat('Chris', 21);
      expect(newCat.meow()).to.equal('Meow!');
    });
  });
});
