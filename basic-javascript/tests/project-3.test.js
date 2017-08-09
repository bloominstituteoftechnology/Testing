const assert = require('chai').assert;
const funcs = require('../src/project-3');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project 3', () => {
  describe('makeCat', () => {
    it('should return an object', () => {
      const cat = funcs.makeCat('Fluffy', 1);
      assert.typeOf(cat, 'object');
    });
    it('should be of type function', () => {
      const cat = funcs.makeCat;
      assert.typeOf(cat, 'function');
    });
  });
  describe('addProperty', () => {
    it('should be of type function', () => {
      const addProp = funcs.addProperty;
      assert.typeOf(addProp, 'function');
    });
    it('should return an object', () => {
      const addProp = funcs.addProperty({prop1:'value1', prop2: 'value2'}, 'prop3');
      assert.typeOf(addProp, 'object');
    });
  });
  describe('invokeMethod', () => {
    it('should be of type function', () => {
      const invoke = funcs.invokeMethod;
      assert.typeOf(invoke, 'function');
    });
    it('should return a function', () => {
      const invoke = funcs.invokeMethod;
      const object = {x: 0, increment: () => {this.x++}};
      assert.typeOf(invoke, 'function');
    });
  });
  describe('multiplyMysteryNumber', () => {
    it('should be of type function', () => {
      const mystery = funcs.multiplyMysteryNumberByFive;
      assert.typeOf(mystery, 'function');
    });
    it('should return a number', () => {
      const mystery = funcs.multiplyMysteryNumberByFive;
      const object = {mysteryNumber: 5};
      assert.typeOf(mystery(object), 'number');
    });
  });
  describe('deleteProperty', () => {
    it('should be of type function', () => {
      const delProp = funcs.deleteProperty;
      assert.typeOf(delProp, 'function');
    });
    it('should return object', () => {
      const delProp = funcs.deleteProperty;
      const object = {prop1: 5, prop2: 'apple'};
      assert.typeOf(delProp(object, 'prop2'), 'object');
    });
  });
  describe('newUser', () => {
    it('should be of type function', () => {
      const newUser = funcs.newUser;
      assert.typeOf(newUser, 'function');
    });
    it('should return an object', () => {
      const newUser = funcs.newUser('Sarah', 'awesome@internet.com', 'password');
      assert.typeOf(newUser, 'object');
    });
  });
  describe('hasEmail', () => {
    it('should be of type function', () => {
      const email = funcs.hasEmail;
      assert.typeOf(email, 'function');
    });
    it('should return a boolean', () => {
      const email = funcs.hasEmail({});
      assert.typeOf(email, 'boolean');
    });
    it('should return a boolean', () => {
      const email = funcs.hasEmail({email: 'stuff'});
      const noEmail = funcs.hasEmail({});
      assert.equal(email, true);
      assert.equal(noEmail, false);
    });
  });
  describe('hasProperty', () => {
    it('should be of type function', () => {
      const prop = funcs.hasProperty;
      assert.typeOf(prop, 'function');
    });
    it('should return boolean', () => {
      const prop = funcs.hasProperty({});
      assert.typeOf(prop, 'boolean');
    });
    it('should determine if prop is present', () => {
      const prop = funcs.hasProperty({prop1: 5}, 'prop1');
      const noProp = funcs.hasProperty({}, 'prop1');
      assert.equal(prop, true);
      assert.equal(noProp, false);
    });
  });
  describe('verifyPassword', () => {
    it('should be of type function', () => {
      const verPass = funcs.verifyPassword;
      assert.typeOf(verPass, 'function');
    });
    it('should return a boolean', () => {
      const verPass = funcs.verifyPassword({password: 'pass'}, 'pass');
      assert.typeOf(verPass, 'boolean');
    });
    it('should handle truth and false in queries', () => {
      const verPass = funcs.verifyPassword({password: 'pass'}, 'pass');
      const verPassF = funcs.verifyPassword({password: 'pass'}, 'pear');
      assert.equal(verPass, true);
      assert.equal(verPassF, false);
    });
  });
  describe('updatePassword', () => {
    it('should be of type function', () => {
      const update = funcs.updatePassword;
      assert.typeOf(update, 'function');
    });
    it('should return an object', () => {
      const update = funcs.updatePassword({password: 'pass'}, 'word');
      assert.typeOf(update, 'object');
    });
  });
  describe('addFriend', () => {
    it('should be of type function', () => {
      const add = funcs.addFriend;
      assert.typeOf(add, 'function');
    });
    it('should return an object', () => {
      const add = funcs.addFriend({friends: []}, 'Sam');
      assert.typeOf(add, 'object');
    });
  });
  describe('setUsersToPremium', () => {
    it('should be of type function', () => {
      const set = funcs.setUsersToPremium;
      assert.typeOf(set, 'function');
    });
    it('should return an array', () => {
      const set = funcs.setUsersToPremium([{isPremium: false}, {isPremium: false}, {isPremium: false}]);
      assert.typeOf(set, 'array');
    });
  });
  describe('sumUserPostLikes', () => {
    it('should be of type function', () => {
      const likes = funcs.sumUserPostLikes;
      assert.typeOf(likes, 'function');
    });
    it('should return a number', () => {
      const likes = funcs.sumUserPostLikes({user: 'Sarah', posts: [{likes: 10}, {likes: 5}, {likes: 3}]});
      assert.typeOf(likes, 'number');
    });
  });
  describe('addCalculateDiscountPriceMethod', () => {
    it('should be of type function', () => {
      const add = funcs.addCalculateDiscountPriceMethod;
      assert.typeOf(add, 'function');
    });
    it('should return an object', () => {
      const add = funcs.addCalculateDiscountPriceMethod({price: 5, discountPercentage: 5});
      assert.typeOf(add, 'object');
    });
  });
});
