const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-3');
const cases = require('../src/project-3.js');

describe('Project-3 Functions', () => {
  describe('`makeCat`', () => {
    it('should be a function', () => {
      const makeCat = funcs.makeCat;
      assert.typeOf(makeCat, 'function');
    })
  });
  it('should have name Foofie', () => {
    const makeCat = cases.makeCat;
    const newCat = makeCat('Foofie', 3);
    expect(newCat.name).to.equal('Foofie');
  });
  it('should have age 3', () => {
    const makeCat = cases.makeCat;
    const newCat = makeCat('Foofie', 3);
    expect(newCat.age).to.equal(3);
  });
  it('should say meow is a function', () => {
    const makeCat = cases.makeCat;
    const newCat = makeCat('Foofie', 3);
    assert.typeOf(newCat.meow, 'function');
  });
  it('should return Meow! from meow()', () => {
    const makeCat = cases.makeCat;
    const newCat = makeCat('Foofie', 3);
    expect(newCat.meow()).to.equal('Meow!');
  });

});