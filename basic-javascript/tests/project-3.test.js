const assert = require('chai').assert;
const funcs = require('../src/project-3');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-3 Functions', () => {
  describe('makeCat', () => {
    it('should be a function', () => {
      const makeCat = funcs.makeCat;
      assert.typeOf(makeCat, 'function')
    });
    it('should return an object', () => {
      const makeCat = funcs.makeCat;
      const newCat = makeCat('pebbles', 1);
      assert.typeOf(newCat, 'object');
    });
    it('should return a cat with name pebbles and age 1', () => {
      const makeCat = funcs.makeCat;
      const newCat = makeCat('pebbles', 1);
      assert.equal(newCat.name, 'pebbles');
      assert.equal(newCat.age, 1);
    });
    it('should have a `meow` method', () => {
      const makeCat = funcs.makeCat;
      const newCat = makeCat('pebbles', 1);
      assert.isOk(newCat.meow)
    });
    it('should meow', () => {
      const makeCat = funcs.makeCat;
      const newCat = makeCat('pebbles', 1);
      assert.equal(newCat.meow(), 'Meow!')
    });
  });

  describe('addProperty', () => {
    it('should be a function', () => {
      const addProperty = funcs.addProperty;
      assert.typeOf(addProperty, 'function');
    });
    it('should return an object', () => {
      const addProperty = funcs.addProperty;
      const object = {
        name: 'John'
      }
      const newProperty = addProperty(object, 'age')
      assert.typeOf(newProperty, 'object');
    });
    it('should add property to object, and set it to null', () => {
      const addProperty = funcs.addProperty;
      const object = {
        name: 'John'
      }
      const newProperty = addProperty(object, 'age')
      assert.equal(newProperty.age, null);
    });
  });

  describe('invokeMethod', () => {
    it('should be a function', () => {
      const invokeMethod = funcs.invokeMethod;
      assert.typeOf(invokeMethod, 'function');
    });
    it('should invoke method', () => {
      const invokeMethod = funcs.invokeMethod;
      const object = {
        name: 'John',
        sayHi() {
          return `${this.name} says hi!`;
        }
      };
      const result = invokeMethod(object, 'sayHi');
      assert.equal(result, 'John says hi!')
    });
  });

  describe('multiplyMysteryNumberByFive', () => {
    it('should be a function', () => {
      const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
      assert.typeOf(multiplyMysteryNumberByFive, 'function');
    });
    it('should return a number', () => {
      const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
      const mysteryNumberObject = {
        mysteryNumber: 10,
      }
      const result = multiplyMysteryNumberByFive(mysteryNumberObject);
      assert.typeOf(result, 'number');
    });

    it('should multiply mysteryNumber by 5', () => {
      const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
      const mysteryNumberObject = {
        mysteryNumber: 10,
      }
      const result = multiplyMysteryNumberByFive(mysteryNumberObject);
      assert.equal(result, 50)    ;
    });
  });

  describe('deleteProperty', () => {
    it('should be a function', () => {
      const deleteProperty = funcs.deleteProperty;
      assert.typeOf(deleteProperty, 'function');
    });
    it('should return an object', () => {
      const deleteProperty = funcs.deleteProperty;
      const object = {
        name: 'John',
        age: '32'
      }
      const result = deleteProperty(object, 'age');
      assert.typeOf(result, 'object');
    });
    it('should delete property from object', () => {
      const deleteProperty = funcs.deleteProperty;
      const object = {
        name: 'John',
        age: '32'
      }
      const result = deleteProperty(object, 'age');
      assert.isNotOk(result.age);
    });
  });

  describe('newUser', () => {
    it('should be a function', () => {
      const newUser = funcs.newUser;
      assert.typeOf(newUser, 'function');
    });
    it('return an object', () => {
      const newUser = funcs.newUser;
      const name = 'John';
      const email = 'john@lambdaschool.com';
      const password = 'iamawesome';
      const result = newUser(name, email, password);
      assert.typeOf(result, 'object');
    });
    it('should return a newUser', () => {
      const newUser = funcs.newUser;
      const name = 'John';
      const email = 'john@lambdaschool.com';
      const password = 'iamawesome';
      const expectedUser = {
        name,
        email,
        password,
      }
      const result = newUser(name, email, password);
      assert.include(result, expectedUser);
    });
  });

  describe('hasEmail', () => {
    it('should be a function', () => {
      const hasEmail = funcs.hasEmail;
      assert.isFunction(hasEmail);
    });
    it('should retuern a boolean', () => {
      const hasEmail = funcs.hasEmail;
      const objectEmail = { email: 'john@ls.com'};
      const result = hasEmail(objectEmail);
      assert.isBoolean(result);
    });
    it('should return true if user has email', () => {
      const hasEmail = funcs.hasEmail;
      const objectEmail = { email: 'john@ls.com'};
      const result = hasEmail(objectEmail);
      assert.isOk(result);
    });
    it('should return false if user does not have email', () => {
      const hasEmail = funcs.hasEmail;
      const objectNoEmail = {name: 'John'};
      const result = hasEmail(objectNoEmail);
      assert.isNotOk(result);
    });
  });

  describe('hasProperty', () => {
    const hasProperty = funcs.hasProperty;
    assert.isFunction(hasProperty);
  });
  it('should return a boolean', () => {
    const hasProperty = funcs.hasProperty;
    const object = { name: 'john', age: 22};
    const result = hasProperty(object, 'age');
    assert.isBoolean(result);
  });
  it('should return true if object has property', () => {
    const hasProperty = funcs.hasProperty;
    const object = { name: 'john', age: 22};
    const result = hasProperty(object, 'age');
    assert.isOk(result);
  });
  it('should return false if object doesn not have property', () => {
    const hasProperty = funcs.hasProperty;
    const object = { name: 'john', age: 22};
    const result = hasProperty(object, 'email');
    assert.isNotOk(result);
  });

  describe('verifyPassword', () => {
    it('should be a function', () => {
      const verifyPassword = funcs.verifyPassword;
      assert.isFunction(verifyPassword);
    });
    it('should return a boolean', () => {
      const verifyPassword = funcs.verifyPassword;
      const object = { password: 'iamawesome'};
      const password = 'iamawesome';
      const result = verifyPassword(object, password)
      assert.isBoolean(result);
    });
    it('should return true is passwords match', () => {
      const verifyPassword = funcs.verifyPassword;
      const object = { password: 'iamawesome'};
      const password = 'iamawesome';
      const result = verifyPassword(object, password);
      assert.isOk(result);
    });
    it('should return false if password do not match', () => {
      const verifyPassword = funcs.verifyPassword;
      const object = { password: 'iamawesome'};
      const password = 'iamnotawesome';
      const result = verifyPassword(object, password);
      assert.isNotOk(result);
    });
  });

  describe('updatePassword', () => {
    it('should be a function', () => {
      const updatePassword = funcs.updatePassword;
      assert.isFunction(updatePassword);
    });
    it('should return an object ', () => {
      const updatePassword = funcs.updatePassword;
      const user = { username: 'John', password: 'iamawesome'};
      const newPassword = 'iamjohn';
      const result = updatePassword(user, newPassword);
      assert.isObject(result);
    });
    it('should update the user\'s password', () => {
      const updatePassword = funcs.updatePassword;
      const user = { username: 'John', password: 'iamawesome'};
      const oldPassword = user.password;
      const newPassword = 'iamjohn';
      const result = updatePassword(user, newPassword);
      assert.notEqual(result.password, oldPassword);
    });
  });

  describe('addFriend', () => {
    it('should be a function', () => {
      const addFriend = funcs.addFriend;
      assert.isFunction(addFriend);
    });
    it('should return an object', () => {
      const addFriend = funcs.addFriend;
      const user = { name: 'john', friends: []};
      const newFriend = {name: 'stacy'};
      const result = addFriend(user, newFriend);
      assert.isObject(result);
    });
    it('should add friend to user', () => {
      const addFriend = funcs.addFriend;
      const user = { name: 'john', friends: []};
      const newFriend = {name: 'stacy'};
      const result = addFriend(user, newFriend);
      assert.isNotEmpty(result.friends);
      assert.equal(result.friends[0], newFriend);
    });
  });

  describe('setUsersToPremium', () => {
    it('should be a function', () => {
      const setUsersToPremium = funcs.setUsersToPremium;
      assert.isFunction(setUsersToPremium);
    });
    it('should return an array of users', () => {
      const setUsersToPremium = funcs.setUsersToPremium;
      const users = [
        {username: 'john', isPremium: false},
        {username: 'jane', isPremium: false},
        {username: 'stacy', isPremium: false}
      ]
      const result = setUsersToPremium(users)
      assert.isArray(result);
    });
    it('should set users to premium', () => {
      const setUsersToPremium = funcs.setUsersToPremium;
      const users = [
        {username: 'john', isPremium: false},
        {username: 'jane', isPremium: false},
        {username: 'stacy', isPremium: false}
      ]
      const result = setUsersToPremium(users)
      for (let i = 0; i < result.length; i++) {
        assert.isOk(result[i].isPremium);
      }
    });
  });

  describe('sumUserPostLikes', () => {
    it('should be a function', () => {
      const sumUserPostLikes = funcs.sumUserPostLikes;
      assert.isFunction(sumUserPostLikes);
    });
    it('should return a number', () => {
      const sumUserPostLikes = funcs.sumUserPostLikes;
      const user = {
        username: 'john',
        posts: [
          { postTitle: 'My Kitty', likes: 12},
          { postTitle: 'Last Summer', likes: 15},
          { postTitle: 'TBT', likes: 10},
          { postTitle: 'Take me Back', likes: 13}
        ]
      }
      const totalLikes = sumUserPostLikes(user);
      assert.isNumber(totalLikes);
    });
    it('should add all the likes from the user\'s posts', () => {
      const sumUserPostLikes = funcs.sumUserPostLikes;
      const user = {
        username: 'john',
        posts: [
          { postTitle: 'My Kitty', likes: 12},
          { postTitle: 'Last Summer', likes: 15},
          { postTitle: 'TBT', likes: 10},
          { postTitle: 'Take me Back', likes: 13}
        ]
      }
      const totalLikes = sumUserPostLikes(user);
      assert.equal(totalLikes, 50);
    });
  });

  describe('addCalculateDiscountPriceMethod', () => {
    it('should be a function', () => {
      const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
      assert.isFunction(addCalculateDiscountPriceMethod);
    });
    it('should return an object', () => {
      const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
      const storeItem = {
        item: 'cereal',
        price: 10,
        discountPercentage: .10,
      }
      const result = addCalculateDiscountPriceMethod(storeItem);
      assert.isObject(result);
    });
    it('should add \'addCalculateDiscountPriceMethod\'', () => {
      const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
      const storeItem = {
        item: 'cereal',
        price: 10,
        discountPercentage: .10,
      }
      const result = addCalculateDiscountPriceMethod(storeItem);
      assert.isOk(storeItem.calculateDiscountPrice);
    });
    it('should correctly calculate discount price', () => {
      const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
      const storeItem = {
        item: 'cereal',
        price: 10,
        discountPercentage: .10,
      }
      const result = addCalculateDiscountPriceMethod(storeItem);
      const discountPrice = result.calculateDiscountPrice();
      assert.equal(discountPrice, 9);
    });
  });
});
