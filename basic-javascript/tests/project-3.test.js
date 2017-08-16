const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const expect = chai.expect;
const assert = chai.assert;
const funcs = require('../src/project-3');

chai.use(sinonChai);

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-4 Objects', () => {
  describe('makeCat', () => {
    it('should be a function', () => {
      const makeCat = funcs.makeCat;
      assert.typeOf(makeCat, 'function');
    });
    it('should return an object', () => {
      const makeCat = funcs.makeCat('Scribbles', 3);
      assert.typeOf(makeCat, 'object');
    });
    it('should return a newCat using name and age inputs', () => {
      const makeCat = funcs.makeCat('Scribbles', 3);
      assert.equal(makeCat.name, 'Scribbles');
      assert.equal(makeCat.age, 3);
    });
    it('should return a newCat with a meow method', () => {
      const makeCat = funcs.makeCat('Scribbles', 3);
      assert.equal(makeCat.meow(), 'Meow!');
    });
  });

  describe('addProperty', () => {
    it('should be a function', () => {
      const addProperty = funcs.addProperty;
      assert.typeOf(addProperty, 'function');
    });
    it('should return an object', () => {
      const addProperty = funcs.addProperty;
      const obj = {};
      const prop = 'prop';
      assert.typeOf(addProperty(obj, prop), 'object');
    });
    it('should return an object', () => {
      const addProperty = funcs.addProperty;
      const obj = {};
      const prop = 'prop';
      assert.typeOf(addProperty(obj, prop), 'object');
    });
    it('should return the input object with the added property', () => {
      const addProperty = funcs.addProperty;
      const obj = {};
      const prop = 'prop';
      addProperty(obj, prop);
      assert.equal(Object.prototype.hasOwnProperty.call(obj, prop), true);
      assert.equal(Object.prototype.hasOwnProperty.call(obj, 'name'), false);
      assert.equal(Object.prototype.hasOwnProperty.call(obj, 'age'), false);
    });
  });

  describe('invokeMethod', () => {
    it('should be a function', () => {
      const invokeMethod = funcs.invokeMethod;
      assert.typeOf(invokeMethod, 'function');
    });
    it('should invoke a method', () => {
      const invokeMethod = funcs.invokeMethod;
      const obj = {};
      const callback = sinon.spy();
      obj.cb = callback;
      invokeMethod(obj, 'cb');
      invokeMethod(obj, 'cb');
      invokeMethod(obj, 'cb');
      expect(obj.cb).to.have.callCount(3);
    });
  });

  describe('multiplyMysteryNumberByFive', () => {
    it('should be a function', () => {
      const mysteryNumber = funcs.multiplyMysteryNumberByFive;
      assert.typeOf(mysteryNumber, 'function');
    });
    it('should return a number', () => {
      const mysteryNumber = funcs.multiplyMysteryNumberByFive;
      const obj = { mysteryNumber: 20 };
      assert.typeOf(mysteryNumber(obj), 'number');
    });
    it('should properly multiply the mystery number by five', () => {
      const mysteryNumber = funcs.multiplyMysteryNumberByFive;
      const obj = { mysteryNumber: 20 };
      assert.equal(mysteryNumber(obj), 100);
      obj.mysteryNumber = 100;
      assert.equal(mysteryNumber(obj), 500);
    });
  });

  describe('deleteProperty', () => {
    it('should be a function', () => {
      const deleteProperty = funcs.deleteProperty;
      assert.typeOf(deleteProperty, 'function');
    });
    it('should return an object', () => {
      const deleteProperty = funcs.deleteProperty;
      const obj = { prop: 'hi' };
      assert.typeOf(deleteProperty(obj, 'prop'), 'object');
    });
    it('should return the object passed in after deleting the named property', () => {
      const deleteProperty = funcs.deleteProperty;
      const obj = {};
      obj.name = 'Joe';
      obj.favFood = 'Deep-fried oreos';
      deleteProperty(obj, 'favFood');
      assert.equal(obj.name, 'Joe');
      assert.equal(obj.favFood, undefined);
    });
  });

  describe('newUser', () => {
    it('should be a function', () => {
      const newUser = funcs.newUser;
      assert.typeOf(newUser, 'function');
    });
    it('should return an object', () => {
      const newUser = funcs.newUser;
      assert.typeOf(newUser('Bob', 'bob@example.com', 'ilikecak3'), 'object');
    });
    it('should return an object with properties name, email, and password equal to the name, email, and password passed as arguments', () => {
      const newUser = funcs.newUser;
      const name = 'Podrick';
      const email = 'squirepodrick@houseofpayne.wes';
      const password = 'iheartsw0rdfighting';
      const podric = newUser(name, email, password);
      assert.equal(podric.name, name);
      assert.equal(podric.email, email);
      assert.equal(podric.password, password);
    });
  });

  describe('hasEmail', () => {
    it('should be a function', () => {
      const hasEmail = funcs.hasEmail;
      assert.typeOf(hasEmail, 'function');
    });
    it('should return a boolean', () => {
      const hasEmail = funcs.hasEmail;
      assert.typeOf(hasEmail({ email: 'mrpoopybutthole@rickmail.uni' }), 'boolean');
    });
    it('should properly evaluate if the user has an email', () => {
      const hasEmail = funcs.hasEmail;
      const user = { email: 'spamanon@spam.hi' };
      const user2 = { email: null };
      assert.equal(hasEmail(user), true);
      assert.equal(hasEmail(user2), false);
    });
  });

  describe('hasProperty', () => {
    it('should be a function', () => {
      const hasProperty = funcs.hasProperty;
      assert.typeOf(hasProperty, 'function');
    });
    it('should return a boolean', () => {
      const hasProperty = funcs.hasProperty;
      assert.typeOf(hasProperty({}, 'tictacs'), 'boolean');
    });
    it('should properly check the given object for a given property', () => {
      const hasProperty = funcs.hasProperty;
      const obj = { name: 'Jack', favFood: 'beans' };
      let prop = 'age';
      assert.equal(hasProperty(obj, prop), false);
      prop = 'name';
      assert.equal(hasProperty(obj, prop), true);
    });
  });

  describe('verifyPassword', () => {
    it('should be a function', () => {
      const verifyPassword = funcs.verifyPassword;
      assert.typeOf(verifyPassword, 'function');
    });
    it('should return a boolean', () => {
      const verifyPassword = funcs.verifyPassword;
      const user = { name: 'skoopdeville', password: 'imdabest' };
      assert.typeOf(verifyPassword(user, 'imdabest'), 'boolean');
    });
    it('should properly compare the given string to the user\'s password', () => {
      const verifyPassword = funcs.verifyPassword;
      const user = { name: 'skoopdeville', password: 'imdabest' };
      assert.equal(verifyPassword(user, 'imdabest'), true);
      assert.equal(verifyPassword(user, 'imdabestttt'), false);
    });
  });

  describe('updatePassword', () => {
    it('should be a function', () => {
      const updatePassword = funcs.updatePassword;
      assert.typeOf(updatePassword, 'function');
    });
    it('should return an object', () => {
      const updatePassword = funcs.updatePassword;
      const user = { password: 'supersecret' };
      assert.typeOf(updatePassword(user, 'notsosupersecret'), 'object');
    });
    it('should properly update the password property of the object', () => {
      const updatePassword = funcs.updatePassword;
      const user = { password: 'supersecret' };
      const newPass = 'evenmoreSecret';
      updatePassword(user, newPass);
      assert.equal(user.password, newPass);
    });
  });

  describe('addFriend', () => {
    it('should be a function', () => {
      const addFriend = funcs.addFriend;
      assert.typeOf(addFriend, 'function');
    });
    it('should return an object', () => {
      const addFriend = funcs.addFriend;
      const user = { friends: [] };
      assert.typeOf(addFriend(user, 'Ramona Flowers'), 'object');
    });
    it('should properly add the name to the user\'s friends', () => {
      const addFriend = funcs.addFriend;
      const user = { friends: ['Beer', 'Big Jon', 'Li\'l Jon', 'Crazy Eyes', 'Whiskey'] };
      const newFriend = 'Pizza';
      addFriend(user, newFriend);
      assert.equal(Array.prototype.includes.call(user.friends, newFriend), true);
    });
  });

  describe('setUsersToPremium', () => {
    it('should be a function', () => {
      const setUsersToPremium = funcs.setUsersToPremium;
      assert.typeOf(setUsersToPremium, 'function');
    });
    it('should return an array', () => {
      const setUsersToPremium = funcs.setUsersToPremium;
      const users = [{ isPremium: false }, { isPremium: false }];
      assert.typeOf(setUsersToPremium(users), 'array');
    });
    it('should update the premium status of all users', () => {
      const setUsersToPremium = funcs.setUsersToPremium;
      const users = [{ isPremium: false }, { isPremium: false }, { isPremium: true }, { isPremium: false }];
      setUsersToPremium(users);
      for (let i = 0; i < users.length; i++) {
        assert.equal(users[i].isPremium, true);
      }
    });
  });

  describe('sumUserPostLikes', () => {
    it('should be a function', () => {
      const sumUserPostLikes = funcs.sumUserPostLikes;
      assert.typeOf(sumUserPostLikes, 'function');
    });
    it('should return a number', () => {
      const sumUserPostLikes = funcs.sumUserPostLikes;
      const user = { posts: [{ likes: 0 }, { likes: 2 }, { likes: 27 }, { likes: 1 }] };
      assert.typeOf(sumUserPostLikes(user), 'number');
    });
    it('should properly add up all post likes for user', () => {
      const sumUserPostLikes = funcs.sumUserPostLikes;
      const user = { posts: [{ likes: 0 }, { likes: 2 }, { likes: 27 }, { likes: 1 }] };
      assert.equal(sumUserPostLikes(user), 30);
    });
  });

  describe('addCalculateDiscountPriceMethod', () => {
    it('should be a function', () => {
      const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
      assert.typeOf(addCalculateDiscountPriceMethod, 'function');
    });
    it('should return an object', () => {
      const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
      const storeItem = { price: 50.00, discountPercentage: 0.20 };
      assert.typeOf(addCalculateDiscountPriceMethod(storeItem), 'object');
    });
    it('should properly add calculateDiscountPrice property to given item', () => {
      const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
      const storeItem = { price: 50.00, discountPercentage: 0.20 };
      addCalculateDiscountPriceMethod(storeItem);
      assert.typeOf(storeItem.calculateDiscountPrice, 'function');
      assert.equal(Object.prototype.hasOwnProperty.call(storeItem, 'calculateDiscountPrice'), true);
    });
  });
});
