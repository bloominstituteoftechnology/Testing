const chai = require('chai');
const sinon = require('sinon');

const sinonChai = require('sinon-chai');

const expect = chai.expect;
const assert = require('chai').assert;

const funcs = require('../src/project-3');

chai.use(sinonChai);
// whoops.. there is no test suite for this file. You'll simply just have to create one :/

// npm run watch basic-javascript/tests/project-3.test.js

describe('Project-3 Functions', () => {
  describe('makeCat', () => {
    const makeCat = funcs.makeCat;
    it('should be a function', () => {
      assert.typeOf(makeCat, 'function');
    });
    it('should make a new cat object', () => {
      expect(makeCat('Killer', 2)).to.have.property('name');
    });
  });

  describe('addProperty', () => {
    const addProperty = funcs.addProperty;
    it('should be a function', () => {
      assert.typeOf(addProperty, 'function');
    });
    it('should return an object', () => {
      let frank = {};
      expect(addProperty(frank, 'tall')).to.deep.equal({tall : null});
    });
  });

  describe('invokeMethod', () => {
    const invokeMethod = funcs.invokeMethod;
    it('should be a function', () => {
      assert.typeOf(invokeMethod, 'function');
    });
    it('should immediately invoke a passed method', () => {
      const obj1 = {print : console.log('Hello World!')};
      const spy = sinon.spy(obj1, obj1.print);
      sinon.assert.called(spy);
    });
  });

  describe('multiplyMysteryNumberByFive', () => {
    const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
    it('should be a function', () => {
      assert.typeOf(multiplyMysteryNumberByFive, 'function');
    });
    it('should multiply a mystery number boy five', () => {
      let frank = {mysteryNumber : 5};
      expect(multiplyMysteryNumberByFive(frank)).to.equal(25);
    });
  });

  describe('deleteProperty', () => {
    const deleteProperty = funcs.deleteProperty;
    it('should be a function', () => {
      assert.typeOf(deleteProperty, 'function');
    });
    it('should delete a specific property on an object', () => {
      let frank = {name : 'frank', sports : true};
      let john = {sports : true};
      expect(deleteProperty(frank, 'name')).to.deep.equal(john);
    });
  });

  describe('newUser', () => {
    const newUser = funcs.newUser;
    it('should be a function', () => {
      assert.typeOf(newUser, 'function');
    });
    it('should return a new user object', () => {      
      expect(newUser('frank', 'example@example.com', 'abc123')).to.deep.equal({name : 'frank', email : 'example@example.com', password : 'abc123'});
    });
  });

  describe('hasEmail', () => {
    const hasEmail = funcs.hasEmail;
    it('should be a function', () => {
      assert.typeOf(hasEmail, 'function');
    });
    it('should tell whether or not a user has an email', () => {
      let frank = {name : 'frank', sports : true, email : 'example@example.com'};
      let john = {sports : true};
      expect(hasEmail(frank)).to.equal(true);
      expect(hasEmail(john)).to.equal(false);
    });
  });

  describe('hasProperty', () => {
    const hasProperty = funcs.hasProperty;
    it('should be a function', () => {
      assert.typeOf(hasProperty, 'function');
    });
    it('should tell whether or not a user has a property', () => {
      let frank = {name : 'frank', sports : true, email : 'example@example.com'};
      let john = {sports : true};
      expect(hasProperty(frank, 'name')).to.equal(true);
      expect(hasProperty(john, 'name')).to.equal(false);
    });
  });

  describe('verifyPassword', () => {
    const verifyPassword = funcs.verifyPassword;
    it('should be a function', () => {
      assert.typeOf(verifyPassword, 'function');
    });
    it('should say if the password passed as an argument is correct', () => {
      let frank = {name : 'frank', sports : true, email : 'example@example.com', password : 'Hello'};
      let john = {sports : true, password : 'Goodbye'};
      expect(verifyPassword(frank, 'Hello')).to.equal(true);
      expect(verifyPassword(john, 'Hello')).to.equal(false);
    });
  });

  describe('updatePassword', () => {
    const updatePassword = funcs.updatePassword;
    it('should be a function', () => {
      assert.typeOf(updatePassword, 'function');
    });
    it('should update a user\'s password', () => {
      let frank = {name : 'frank', sports : true, email : 'example@example.com', password : 'Hello'};
      let john = {sports : true, password : 'Goodbye'};
      expect(updatePassword(frank, 'JavaScript')).to.deep.equal({name : 'frank', sports : true, email : 'example@example.com', password : 'JavaScript'});
    });
  });

  describe('addFriend', () => {
    const addFriend = funcs.addFriend;
    it('should be a function', () => {
      assert.typeOf(addFriend, 'function');
    });
    it('should add a friend', () => {
      let john = {
        friends : ['bob']
      };
      expect(addFriend(john, 'jim')).to.deep.equal({
        friends : ['bob', 'jim']
      });
    });
  });

  describe('setUsersToPremium', () => {
    const setUsersToPremium = funcs.setUsersToPremium;
    it('should be a function', () => {
      assert.typeOf(setUsersToPremium, 'function');
    });
    it('should set all users to Premium status', () => {
      let users = [
        bob = {isPremium : false},
        jim = {isPremium : false}
      ];
      expect(setUsersToPremium(users)).to.deep.equal([
        bob = {isPremium : true},
        jim = {isPremium : true}
      ]);
    });
  });

  describe('sumUserPostLikes', () => {
    const sumUserPostLikes = funcs.sumUserPostLikes;
    it('should be a function', () => {
      assert.typeOf(sumUserPostLikes, 'function');
    });
    it('sum a user\'s post\'s likes', () => {
      let john = {
        posts : [
          one = { likes : 15 },
          two = { likes : 13 },
          three = { likes : 12 }
        ]
      };
      expect(sumUserPostLikes(john)).to.equal(40);
    });
  });

  describe('addCalculateDiscountPriceMethod', () => {
    const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
    it('should be a function', () => {
      assert.typeOf(addCalculateDiscountPriceMethod, 'function');
    });
    it('should discount a price', () => {
      
      expect(addCalculateDiscountPriceMethod()).to.equal();
    });
  });

});
