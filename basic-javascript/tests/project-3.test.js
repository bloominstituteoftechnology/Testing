const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const assert = require('chai').assert;

chai.use(sinonChai);
const funcs = require('../src/project-3');


// whoops.. there is no test suite for this file. You'll simply just have to create one :/
/* eslint-disable no-undef */
const {
  makeCat,
  addProperty,
  invokeMethod,
  multiplyMysteryNumberByFive,
  deleteProperty,
  newUser,
  hasEmail,
  hasProperty,
  verifyPassword,
  updatePassword,
  addFriend,
  setUsersToPremium,
  sumUserPostLikes,
  addCalculateDiscountPriceMethod
} = require('../src/project-3');

describe('Project 3', () => {
  describe('makeCat(name, age)', () => {
    it('should be a function', () => {
      // const makeCat = funcs.makeCat;
      assert.typeOf(makeCat, 'function');
    });
    it('should create a new cat with the name and age properties set', () => {
      // const makeCat = funcs.makeCat;
      assert.typeOf({ name: 'Snowball' }, 'object');
      assert.typeOf({ age: '1' }, 'object');
      // expect(makeCat('Snowball').name.to.be('Snowball');
      // expect(makeCat('Snowball').age.to.be(1);
      // expect(makeCat('Snowball II').name.to.be('Snowball II');
      // expect(makeCat('Snowball II').age.to.be(5);
    });
    it('should add a method called meow to the new cat object', () => {
      //
      // expect(makeCat('Snowball III', 2).meow().to.be('Meow!');
    });
  });

  describe('addProperty(object, property)', () => {
    it('should add the property to the object with a value of null', () => {
      const object = {
        x: 1,
        y: 2
      };
      const updatedObject = {
        x: 1,
        y: 2,
        z: null
      };
      // expect(addProperty(object, 'z')).toEqual(updatedObject);
    });
  });

  describe('invokeMethod(object, method)', () => {
    it('should invoke the method on the object', () => {
      const object = {
        x: 0,
        incrementX() {
          this.x++;
        }
      };
      invokeMethod(object, 'incrementX');
      assert.equal(1, object.x);
    });
  });

  describe('multiplyMysteryNumberByFive(mysteryNumberObject)', () => {
    it('should return the mysteryNumber property multiplied by five', () => {
      const mysteryBox = {
        mysteryNumber: 999
      };
      assert.equal(4995, multiplyMysteryNumberByFive(mysteryBox));
      mysteryBox.mysteryNumber = -5;
      assert.equal(-25, multiplyMysteryNumberByFive(mysteryBox));
    });
  });

  describe('deleteProperty(object, property)', () => {
    it('should delete the property from the object', () => {
      const updatedObject = {
        x: 1,
        y: 2
      };
      const object = {
        x: 1,
        y: 2,
        z: null
      };
      // expect(deleteProperty(object, 'z')).toEqual(updatedObject);
    });
  });

  describe('newUser(name, email, password)', () => {
    it('should return a new user object with a name, email, and password property that match the arguments', () => {
      const user1 = {
        name: 'Ben',
        email: 'ben@lambdaschool.com',
        password: 'correcthorsebatterystaple'
      };
      assert.isOk(newUser(user1.name, user1.email, user1.password), user1);
      const user2 = {
        name: 'Austen',
        email: 'austen@lambdaschool.com',
        password: 'password'
      };
      assert.isOk(newUser(user2.name, user1.email, user1.password), user2);
      // expect(newUser(user2.name, user2.email, user2.password)).toEqual(user2);
    });
  });

  describe('hasEmail(user)', () => {
    it('should return true if the user object has a value for its email property', () => {
      assert.isTrue(hasEmail({ username: 'SunJieMing', email: 'ben@lambdaschool.com' }), 'true');
      assert.isTrue(hasEmail({ username: 'SunJieMing', email: 'ben@lambdaschool.com' }), 'true');
      assert.isFalse(hasEmail({ username: 'Austen', email: '' }), false);
      assert.isFalse(hasEmail({ username: 'Ryan' }), false);
    });
  });

  describe('hasProperty(object, property)', () => {
    it('should return true if the object has the property that is passed in', () => {
      const obj = {
        x: true
      };
      assert.isTrue(hasProperty(obj, 'x'), true);
      assert.isFalse(hasProperty(obj, 'y'), false);
    });
  });

  describe('verifyPassword(user, password)', () => {
    it('should return true if passwords match', () => {
      const user = {
        password: 'I love js!'
      };
      const password = 'I love js!';
      assert.isTrue(verifyPassword(user, password), true);
    });
    it('should return false if passwords do not match', () => {
      const user = {
        password: 'I love js!'
      };
      const password = 'Hack this guy!';
      assert.isFalse(verifyPassword(user, password), false);
    });
  });

  describe('updatePassword(user, password)', () => {
    it('should return the user object with the updated password', () => {
      const user = {
        password: 'I love js!'
      };
      const password = 'I love js even more!';
      // assert.isOk(updatePassword(user, password).password), (password);
    });
  });

  describe('addFriend(user, newFriend)', () => {
    it('should add a new friend to the end of the friends array property', () => {
      const user = {
        friends: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young']
      };
      const newFriend = 'Shay';
      // assert.isOk(addFriend(user, 'Shay').friends.pop()), ('Shay');
    });
  });

  describe('setUsersToPremium(users)', () => {
    it('should return the users array with each user\'s isPremium property set to true', () => {
      const users = [
        { isPremium: false },
        { isPremium: false },
        { isPremium: false },
        { isPremium: false },
        { isPremium: false },
      ];
      const updatedUsers = [
        { isPremium: true },
        { isPremium: true },
        { isPremium: true },
        { isPremium: true },
        { isPremium: true },
      ];
      assert.isArray(setUsersToPremium(updatedUsers), true);
      assert.isOk(setUsersToPremium(updatedUsers), true);
    });
  });

  describe('sumUserPostLikes(user)', () => {
    it.skip('should be a function', () => {
      it('should return the sum of likes for all user posts', () => {
        const user = {
          username: 'SunJieMing',
          password: 'JavaScript is awesome!',
          posts: [
            {
              id: '1',
              title: 'JS adventures!',
              likes: 10
            },
            {
              id: '2',
              title: 'LambdaSchool forever!',
              likes: 100
            },
            {
              id: '3',
              title: 'What is a JavaScript?',
              likes: 35
            },
            {
              id: '4',
              title: 'JS Objects for dummies',
              likes: 42
            },
            {
              id: '5',
              title: 'Online Education',
              likes: 99
            }
          ]
        };
        assert.isOk(sumUserPostLikes(user), 286);
      });
    });

    describe('addCalculateDiscountPriceMethod(storeItem)', () => {
      const storeItem = {
        price: 80,
        discountPercentage: 0.1
      };
      const storeItem2 = {
        price: 5,
        discountPercentage: 0.5
      };
      /* it.skip('should be a function', () => {
        assert.typeOf(addCalculateDiscountPriceMethod(storeItem), 'function');
      }); */

      it('should add the method \'calculateDiscountPrice\' to the store item object', () => {
        // assert.isDefined(addCalculateDiscountPriceMethod(storeItem).calculateDiscountPrice);
      });
      // assert.isDefined(addCalculateDiscountPriceMethod(storeItem2).calculateDiscountPrice);// expect(addCalculateDiscountPriceMethod(storeItem2).calculateDiscountPrice).toBeDefined();
      it('should return the discount price from the new \'calculateDiscountPrice\' method', () => {
      // assert.isEqual(72, addCalculateDiscountPriceMethod(storeItem).calculateDiscountPrice);
      });
      // expect(addCalculateDiscountPriceMethod(storeItem).calculateDiscountPrice()).toBe(72);
    // assert.isEqual(2.5, addCalculateDiscountPriceMethod(storeItem2).calculateDiscountPrice);
      // expect(addCalculateDiscountPriceMethod(storeItem2).calculateDiscountPrice()).toBe(2.5); */
    });
  });
});
