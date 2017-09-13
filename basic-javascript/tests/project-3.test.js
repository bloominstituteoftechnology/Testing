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
      assert.propertyVal(makeCat('mitten', 86), 'name', 'mitten');
      assert.propertyVal(makeCat('mitten', 91), 'age', 91);
    });
    it('meow method should return "Meow!"', () => {
      assert.equal(makeCat('any', 5).meow(), 'Meow!');
    });
  });
  describe('addProperty', () => {
    it('should be a function', () => {
      assert.typeOf(addProperty, 'function');
    });
    it('should add a property to the object and return the updated object', () => {
      const object = { name: 'mitten', age: 101 };
      addProperty(object, 'lives');
      assert.property(object, 'lives');
    });
  });
  describe('invokeMethod', () => {
    it('should be a function', () => {
      assert.typeOf(invokeMethod, 'function');
    });
    it('should invoke a method', () => {
      const object = {
        name: 'mitten',
        age: 101,
        grow() {
          this.age++;
        }
      };
      invokeMethod(object, 'grow');
      assert.equal(object.age, 102);
    });
  });
  describe('multiplyMysteryNumberByFive', () => {
    it('should be a function', () => {
      assert.typeOf(multiplyMysteryNumberByFive, 'function');
    });
    it('should multiply a mystery number by 5', () => {
      const object = {
        mysteryNumber: 4
      };
      const object2 = {
        mysteryNumber: 7
      };
      assert.equal(multiplyMysteryNumberByFive(object), 20);
      assert.equal(multiplyMysteryNumberByFive(object2), 35);
    });
  });
  describe('deleteProperty', () => {
    it('should be a function', () => {
      assert.typeOf(deleteProperty, 'function');
    });
    it('should delete the property on an object', () => {
      const object = {
        name: 'mitten',
        favDrink: 'milk'
      };
      deleteProperty(object, 'favDrink');
      assert.notProperty(object, 'favDrink');
    });
  });
  describe('newUser', () => {
    it('should be a function', () => {
      assert.typeOf(newUser, 'function');
    });
    it('should return an object with the give name, email, and password properties', () => {
      const object = newUser('mitten', 'mitten@kitten.com', 'catnip');
      assert.propertyVal(object, 'name', 'mitten');
      assert.propertyVal(object, 'email', 'mitten@kitten.com');
      assert.propertyVal(object, 'password', 'catnip');
    });
  });
  describe('hasEmail', () => {
    it('should be a function', () => {
      assert.typeOf(hasEmail, 'function');
    });
    it('should return true if the user has an email property', () => {
      const object = {
        email: 'kitten@mitten.com'
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
        name: 'kitten',
        email: 'kitten@mitten.com'
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
    it('should return the user with the new friend added to the friend property', () => {
      const object = {
        friends: ['Dave', 'Dan']
      };
      const newObject = addFriend(object, 'Dolly');
      assert.sameOrderedMembers(object.friends, ['Dave', 'Dan', 'Dolly']);
      assert.sameOrderedMembers(newObject.friends, ['Dave', 'Dan', 'Dolly']);
    });
  });
  describe('setUsersToPremium', () => {
    it('should be a function', () => {
      assert.typeOf(setUsersToPremium, 'function');
    });
    it('should return the users array with each user set to premium', () => {
      const users = [{ isPremium: false }, { isPremium: true }, { isPremium: false }];
      const newUsers = setUsersToPremium(users);
      users.forEach(user => assert.propertyVal(user, 'isPremium', true));
      newUsers.forEach(user => assert.propertyVal(user, 'isPremium', true));
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
      discountPercentage: 0.1
    };
    addCalculateDiscountPriceMethod(storeItem);
    it('should be a function', () => {
      assert.typeOf(addCalculateDiscountPriceMethod, 'function');
    });
    it('should add a property called calculateDiscountPrice', () => {
      assert.property(storeItem, 'calculateDiscountPrice');
    });
    it('should return the price of the item after discount', () => {
      assert.equal(addCalculateDiscountPriceMethod(storeItem).calculateDiscountPrice(), 45);
    });
  });
});
