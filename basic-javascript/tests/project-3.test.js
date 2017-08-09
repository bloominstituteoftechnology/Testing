const assert = require('chai').assert;
const sinon = require('sinon');
const funcs = require('../src/project-3');

describe('Project-3 Functions', () => {

  describe('`makeCat(name, age)`', () => {
    it('it should be a function', () => {
      const makeCat = funcs.makeCat;
      assert.typeOf(makeCat, 'function');
    });
    it('object should have an age property set to age', () => {
      const makeCat = funcs.makeCat;
      assert.strictEqual(makeCat(`Beans`, 22).age, 22);
    });
    it('object should have a method called meow that returns `Meow!`', () => {
      const makeCat = funcs.makeCat;
      assert.strictEqual(makeCat(`Kitty`, 22).meow(), 'Meow!');
    });
  });

  describe('`addProperty(object, property)`', () => {
    it('it should be a function', () => {
      const addProperty = funcs.addProperty;
      assert.typeOf(addProperty, 'function');
    });
    it('addProperty(obj, prop) should return true', () => {
      const object = {
        x: 1,
        y: 2
      };
      const updatedObject = {
        x: 1,
        y: 2,
        z: null
      };
      const addProperty = funcs.addProperty;
      assert.deepEqual(addProperty(object, 'z'), updatedObject);
    });
  });

  describe('`invokeMethod(object, method)`', () => {
    const invokeMethod = funcs.invokeMethod;
    it('it should be a function', () => {
      assert.typeOf(invokeMethod, 'function');
    });
    it('object should invoke method', () => {
      const object = {
        i: 0,
        incrementI() {
          this.i++;
        }
      };
      invokeMethod(object, 'incrementI');
      assert.strictEqual(object.i, 1);
    });
  });

  describe('`multiplyMysteryNumberByFive(object)`', () => {
    const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
    it('it should be a function', () => {
      assert.typeOf(multiplyMysteryNumberByFive, 'function');
    });
    it('it should multiply the mystery number by 5', () => {
      const object = {
        mysteryNumber: 5
      };
      assert.strictEqual(multiplyMysteryNumberByFive(object), 25);
    });
  });

  describe('`deleteProperty(object, property)`', () => {
    const deleteProperty = funcs.deleteProperty;
    it('it should be a function', () => {
      assert.typeOf(deleteProperty, 'function');
    });
    it('', () => {
      const object = {
        x: 0,
        y: 1
      };
      const objectNoProp = {
        x: 0,
      };
      deleteProperty(object, 'y');
      assert.deepEqual(object, objectNoProp);
    });
  });

  describe('`newUser(name, email, password)`', () => {
    const newUser = funcs.newUser;
    it('it should be a function', () => {
      assert.typeOf(newUser, 'function');
    });
    it('newUser should create an object with the name, email, and password', () => {
      const name = 'Fred';
      const password = 'passfred';
      const email = 'fred@fredmail.com';
      const objectUser = {
        name,
        password,
        email
      };
      assert.deepEqual(newUser(name, email, password), objectUser);
    });
  });

    describe('`hasEmail(user)`', () => {
      const hasEmail = funcs.hasEmail;
      it('it should be a function', () => {
        assert.typeOf(hasEmail, 'function');
      });
      it('should contain the property email', () => {
        const objUser = {
          email: 'random@random.com'
        };
        assert.isTrue(hasEmail(objUser));
      });
      it('should not contain the property email', () => {
        const objUser = {
          friend: 'Bob'
        };
        assert.isNotTrue(hasEmail(objUser));
      });
    });

    describe('`hasProperty(object, property)`', () => {
      const hasProperty = funcs.hasProperty;
      it('it should be a function', () => {
        assert.typeOf(hasProperty, 'function');
      });
      it('object should contain property', () => {
        const object = {
          username: 'splatooner'
        };
        assert.isTrue(hasProperty(object, 'username'));
      });
      it('object should not contain property', () => {
        const object = {
          username: 'splatooner'
        };
        assert.isFalse(hasProperty(object, 'name'));
      });
    });

    describe('`verifyPassword(user, password)`', () => {
      const verifyPassword = funcs.verifyPassword;
      it('it should be a function', () => {
        assert.typeOf(verifyPassword, 'function');
      });
      it('should return true for verified password', () => {
        const user = {
          password: 'userpassword'
        };
        assert.isTrue(verifyPassword(user, 'userpassword'));
      });
      it('should return false for verified password', () => {
        const user = {
          password: 'pass123'
        };
        assert.isFalse(verifyPassword(user, 'wrongpw'));
      });
    });

    describe('`updatePassword(user, newPassword)`', () => {
      const updatePassword = funcs.updatePassword;
      it('it should be a function', () => {
        assert.typeOf(updatePassword, 'function');
      });
      it('should upated password to new password', () => {
        const newPass = 'updatedPass';
        const user = {
          password: 'firstPass'
        };
        const updatedUser = {
          password: newPass
        };
        assert.deepEqual(updatePassword(user, newPass), updatedUser);
      });
    });

    describe('`addFriend(user, newFriend)`', () => {
      const addFriend = funcs.addFriend;
      it('it should be a function', () => {
        assert.typeOf(addFriend, 'function');
      });
      it('should add friend to user', () => {
        const newFriend = 'Bobby';
        const user = {
          friends: ['Donald', 'Charles', 'Fredrick']
        };
        const updatedUser = {
          friends: ['Donald', 'Charles', 'Fredrick', 'Bobby']
        };
        assert.deepEqual(addFriend(user, newFriend), updatedUser);
      });
    });

    describe('`setUsersToPremium(users)`', () => {
      const setUsersToPremium = funcs.setUsersToPremium;
      it('it should be a function', () => {
        assert.typeOf(setUsersToPremium, 'function');
      });
      it('should set property isPremium to true on all users', () => {
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
        assert.deepEqual(setUsersToPremium(users), updatedUsers);
      });
    });

    describe('`sumUserPostLikes(user)`', () => {
      const sumUserPostLikes = funcs.sumUserPostLikes;
      it('it should be a function', () => {
        assert.typeOf(sumUserPostLikes, 'function');
      });
      it('should sum up the amount of likes', () => {
        const user = {
          posts: [
            { likes: 22 },
            { likes: 23 },
            { likes: 24 },
            { likes: 25 },
          ]
        };
        assert.strictEqual(sumUserPostLikes(user), 94);
      });
    });

    describe('`addCalculateDiscountPriceMethod(storeItem)`', () => {
      const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
      const storeItem = {
        price: 80,
        discountPercentage: 0.1
      };
      const storeItem2 = {
        price: 5,
        discountPercentage: 0.5
      };
      it('it should be a function', () => {
        assert.typeOf(addCalculateDiscountPriceMethod, 'function');
      });
      it('should calculateDiscountPrice method to storeItem', () => {
        assert.exists(addCalculateDiscountPriceMethod(storeItem).calculateDiscountPrice);
        assert.exists(addCalculateDiscountPriceMethod(storeItem2).calculateDiscountPrice);
      });
      it('should return the discounted price from the new calculateDiscountPrice method', () => {
        assert.strictEqual(addCalculateDiscountPriceMethod(storeItem).calculateDiscountPrice(), 72);
        assert.strictEqual(addCalculateDiscountPriceMethod(storeItem2).calculateDiscountPrice(), 2.5);
      });
    });
});
