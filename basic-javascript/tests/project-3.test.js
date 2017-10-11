const expect = require('chai').expect;
const funcs = require('../src/project-3');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-3 Functions', () => {
  describe('`makeCat`', () => {
    const makeCat = funcs.makeCat;
    const cat = makeCat('Bilbo', 111);
    it('should be a function', () => {
      expect(makeCat).to.be.a('function');
    });
    it('should create a new cat object with name and age properties when called', () => {
      expect(cat).to.be.an('object');
      expect(cat).to.have.property('name', 'Bilbo');
      expect(cat).to.have.property('age', 111);
    });
    it('should have a meow method', () => {
      expect(cat).to.have.property('meow');
      expect(cat.meow()).to.equal('Meow!');
    });
  });

  describe('`addProperty`', () => {});

  describe('`invokeMethod', () => {});

  describe('`multiplyMysteryNumberByFive', () => {});

  describe('`deleteProperty`', () => {});

  describe('`newUser`', () => {});

  describe('`hasEmail`', () => {});

  describe('`hasProperty`', () => {});

  describe('`verifyPassword`', () => {});

  describe('`updatePassword`', () => {});

  describe('`addFriend`', () => {});

  describe('`setUsersToPremium`', () => {});

  describe('`sumUserPostLikes`', () => {});

  describe('`addCalculateDiscountPriceMethod`', () => {});
});
