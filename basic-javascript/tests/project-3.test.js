const assert = require('chai').assert;
const funcs = require('../src/project-3');

const makeCat = funcs.makeCat;
const addProperty = funcs.addProperty;
const invokeMethod = funcs.invokeMethod;
const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
const deleteProperty = funcs.deleteProperty;
const newUser = funcs.newUser;
const hasEmail = funcs.hasEmail;
const hasProperty = funcs.hasProperty;
const verifyPassword = funcs.verifyPassword;
const updatePassword = funcs.updatePassword;
const addFriend = funcs.addFriend;
const setUsersToPremium = funcs.setUsersToPremium;
const sumUserPostLikes = funcs.sumUserPostLikes;
const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;

describe('Project-3 Functions', () => {
  describe('makeCat', () => {
    it('should be a function', () => {
      assert.typeOf(makeCat, 'function');
    });
    it('should return an object with properties name and age', () => {
      assert.isObject(makeCat('any', 5));
      assert.propertyVal(makeCat('gandalf', 86), 'name', 'gandalf');
      assert.propertyVal(makeCat('cat', 100), 'age', 100);
    });
  });
  describe('addProperty', () => {
    it('should be a function', () => {
      assert.typeOf(addProperty, 'function');
    });
    it('should add a property to the object and return the updated object', () => {
      const object = { name: 'mitten', age: 101 };
      addProperty(object, 'personality');
      assert.property(object, 'personality');
    });
  });
  describe('invokeMethod', () => {
    it('should be a function', () => {
      assert.typeOf(invokeMethod, 'function');
    });
  });
  describe('multiplyMysteryNumberByFive', () => {
    it('should be a function', () => {
      assert.typeOf(multiplyMysteryNumberByFive, 'function');
    });
    it('should multiply a mystery number by 5', () => {
      const object = {
        mysteryNumber: 10
      };
      const object2 = {
        mysteryNumber: 5
      };
      assert.equal(multiplyMysteryNumberByFive(object), 50);
      assert.equal(multiplyMysteryNumberByFive(object2), 25);
    });
  });
  describe('deleteProperty', () => {
    it('should be a function', () => {
      assert.typeOf(deleteProperty, 'function');
    });
    it('should delete the property on an object', () => {
      const object = {
        name: 'gandalf',
        personality: 'mean'
      };
      deleteProperty(object, 'personality');
      assert.notProperty(object, 'favDrink');
    });
  });
  describe('newUser', () => {
    it('should be a function', () => {
      assert.typeOf(newUser, 'function');
    });
    it('should return an object with the give name, email, and password properties', () => {
      const object = newUser('sara', 'krumsara@gmail.com', 'sarafritz');
      assert.propertyVal(object, 'name', 'sara');
      assert.propertyVal(object, 'email', 'krumsara@gmail.com');
      assert.propertyVal(object, 'password', 'sarafritz');
    });
  });
  describe('hasEmail', () => {
    it('should be a function', () => {
      assert.typeOf(hasEmail, 'function');
    });
    it('should return true if the user has an email property', () => {
      const object = {
        email: 'krumsara@gmail.com'
      };
      assert.isTrue(hasEmail(object));
    });
    it('should return false if the user does not have an email property', () => {
      const object = {};
      assert.isFalse(hasEmail(object));
    });
  });
  describe('hasProperty', () => {
    it('should be a function', () => {
      assert.typeOf(hasProperty, 'function');
    });
    it('should return true if the user has the property', () => {
      const object = {
        name: 'sara',
        email: 'krumsara@gmail.com'
      };
      assert.isTrue(hasProperty(object, 'name'));
    });
    it('should return false if the user does not have the property', () => {
      const object = {};
      assert.isFalse(hasProperty(object, 'name'));
    });
  });
  describe('verifyPassword', () => {
    it('should be a function', () => {
      assert.typeOf(verifyPassword, 'function');
    });
    it('should return true if the password matches the users password', () => {
      const object = {
        password: '123abc'
      };
      assert.isTrue(verifyPassword(object, '123abc'));
    });
    it('should return false if the password does not match the users password', () => {
      const object = {
        password: '123abc'
      };
      assert.isFalse(verifyPassword(object, '123abcd'));
    });
  });
  describe('updatePassword', () => {
    it('should be a function', () => {
      assert.typeOf(updatePassword, 'function');
    });
    it('should return the user with the password property updated', () => {
      const object = {
        password: '123abc'
      };
      const newObject = updatePassword(object, 'abc123');
      assert.equal(object.password, 'abc123');
      assert.equal(newObject.password, 'abc123');
    });
  });
  describe('addFriend', () => {
    it('should be a function', () => {
      assert.typeOf(addFriend, 'function');
    });
  });
  describe('setUsersToPremium', () => {
    it('should be a function', () => {
      assert.typeOf(setUsersToPremium, 'function');
    });
  });
  describe('sumUserPostLikes', () => {
    it('should be a function', () => {
      assert.typeOf(sumUserPostLikes, 'function');
    });
    it('should return the sum of the post likes for a user', () => {
      const user = {
        posts: [{ likes: 41 }, { likes: 12 }, { likes: 88 }]
      };
      let num = user.posts.reduce((acc, c) => acc + c.likes, 0);
      assert.equal(num, 141);
      user.posts[0].likes = 141;
      num = user.posts.reduce((acc, c) => acc + c.likes, 0);
      assert.equal(num, 241);
    });
  });
  describe('addCalculateDiscountPriceMethod', () => {
    const storeItem = {
      price: 50,
      discountPercentage: 0.5
    };
    addCalculateDiscountPriceMethod(storeItem);
    it('should be a function', () => {
      assert.typeOf(addCalculateDiscountPriceMethod, 'function');
    });
  });
});
