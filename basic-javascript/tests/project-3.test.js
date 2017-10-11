const assert = require('chai').assert;
const funcs = require('../src/project-3');

describe('Project-4-tests', () => {
  describe('makeCat', () => {
    it('makeCat should be a function', () => {
      const makeCat = funcs.makeCat;
      assert.typeOf(makeCat, 'function');
    });
    it('should return an object', () => {
      const makeCat = funcs.makeCat;
      assert.typeOf(makeCat(), 'object');
    });
    it('should return Meow!', () => {
      const makeCat = funcs.makeCat;
      assert.equal(makeCat().meow(), 'Meow!');
    });
    it('should contain name property', () => {
      const makeCat = funcs.makeCat;
      assert.property(makeCat(), 'name');
    });
    it('should contain name property', () => {
      const makeCat = funcs.makeCat;
      assert.property(makeCat(), 'age');
    });
  });

  describe('addProperty', () => {
    it('addProperty should be a function', () => {
      const addProperty = funcs.addProperty;
      assert.typeOf(addProperty, 'function');
    });
    it('should return an object', () => {
      const addProperty = funcs.addProperty;
      assert.typeOf(addProperty({}), 'object');
    });
    it('should return an object', () => {
      const addProperty = funcs.addProperty;
      assert.property(addProperty({}, 'prop'), 'prop');
    });
  });
  describe('invokeMethod', () => {
    it('invokeMethod should be a function', () => {
      const invokeMethod = funcs.invokeMethod;
      assert.typeOf(invokeMethod, 'function');
    });
    it('should invoke the object method', () => {
      const obj = {
        sayHey() {
          return 'HEY!';
        }
      };
      const invokeMethod = funcs.invokeMethod;
      assert.equal(invokeMethod(obj, 'sayHey'), undefined);
    });
  });
  describe('multiplyMysteryNumberByFive', () => {
    it('multiplyMysteryNumberByFive should be a function', () => {
      const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
      assert.typeOf(multiplyMysteryNumberByFive, 'function');
    });
    it('should return the obj mystery number multiplied by five', () => {
      const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
      const obj = { mysteryNumber: 10 };
      assert.equal(multiplyMysteryNumberByFive(obj), 50);
    });
  });
  describe('deleteProperty', () => {
    const deleteProperty = funcs.deleteProperty;
    it('deleteProperty should be a function', () => {
      assert.typeOf(deleteProperty, 'function');
    });
    it('should delete the property from obj', () => {
      const obj = { prop: null };
      assert.notProperty(deleteProperty(obj, 'prop'), 'prop');
    });
  });
  describe('newUser', () => {
    const newUser = funcs.newUser;
    it('newUser should be a function', () => {
      assert.typeOf(newUser, 'function');
    });
    it('should return an object', () => {
      assert.typeOf(newUser(), 'object');
    });
    it('should have a property name', () => {
      assert.property(newUser(), 'name');
    });
    it('should have a property email', () => {
      assert.property(newUser(), 'email');
    });
    it('should have a property password', () => {
      assert.property(newUser(), 'password');
    });
  });
  describe('hasEmail', () => {
    const hasEmail = funcs.hasEmail;
    it('hasEmail should be a function', () => {
      assert.typeOf(hasEmail, 'function');
    });
    it('should return true if property email value exists', () => {
      const obj = { email: 'email@example.com' };
      assert.deepEqual(hasEmail(obj), true);
    });
    it('should return false if property email value does not exist', () => {
      const obj = { email: null };
      assert.deepEqual(hasEmail(obj), false);
    });
  });
  describe('hasProperty', () => {
    const hasProperty = funcs.hasProperty;
    it('hasProperty should be a function', () => {
      assert.typeOf(hasProperty, 'function');
    });
    it('should return true if object has property', () => {
      const obj = { prop: ' ' };
      assert.equal(hasProperty(obj, 'prop'), true);
    });
    it('should return false if object does not have property', () => {
      const obj = { };
      assert.equal(hasProperty(obj, 'prop'), false);
    });
  });
  describe('verifyPassword', () => {
    const verifyPassword = funcs.verifyPassword;
    const user = { password: 'password' };
    it('verifyPassword should be a function', () => {
      assert.typeOf(verifyPassword, 'function');
    });
    it('should return true if password matches user password', () => {
      assert.equal(verifyPassword(user, 'password'), true);
    });
    it('should return false if password does not match user password', () => {
      assert.equal(verifyPassword(user, 'wrong'), false);
    });
  });
  describe('addFriend', () => {
    const addFriend = funcs.addFriend;
    const user = {
      friends: ['Brandon', 'Jean']
    };
    it('addFriend should be a function', () => {
      assert.typeOf(addFriend, 'function');
    });
    it('should add friend to users friends array', () => {
      assert.deepEqual(addFriend(user, 'Bill').friends, ['Brandon', 'Jean', 'Bill']);
    });
  });
  describe('setUsersToPremium', () => {
    const setUsersToPremium = funcs.setUsersToPremium;
    const user = [{
      isPremium: false
    }];
    it('setUsersToPremium should be a function', () => {
      assert.typeOf(setUsersToPremium, 'function');
    });
    it('should set all users isPremium to true', () => {
      assert.equal(setUsersToPremium(user)[0].isPremium, true);
    });
  });
  describe('sumUserPostLikes', () => {
    const sumUserPostLikes = funcs.sumUserPostLikes;
    const user = {
      posts: [{ likes: 2 }, { likes: 2 }]
    };
    it('sumUsersPostLikes should be a function', () => {
      assert.typeOf(sumUserPostLikes, 'function');
    });
    it('should return some of all posts likes', () => {
      assert.equal(sumUserPostLikes(user), 4);
    });
  });
  describe('addCalculateDiscountPriceMethod', () => {
    const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
    it('addCalculateDiscountPriceMethod should be a function', () => {
      assert.typeOf(addCalculateDiscountPriceMethod, 'function');
    });
    it('should have a calculateDiscountPrice method', () => {
      assert.property(addCalculateDiscountPriceMethod({}), 'calculateDiscountPrice');
    });
  });
});

