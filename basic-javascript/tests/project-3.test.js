const assert = require('chai').assert;
const funcs = require('../src/project-3');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-2 Functions', () => {

  describe('`makeCat`', () => {
    it('Dumb Cat should be able to meow', () => {
      const makeCat = funcs.makeCat;
      const dumbCat = makeCat({
        name: 'Dumb Cat',
        age: 5,
      });
      const result = dumbCat.meow();
      assert.equal(result, 'Meow!');
    });
  });

  describe('`addProperty`', () => {
    it('should add null property', () => {
      const addProperty = funcs.addProperty;
      let dumbObject = {};
      addProperty(dumbObject, 'uselessFunction');
      const dumbProp = dumbObject.uselessFunction;
      assert.equal(dumbProp, null);
    });
  });

  describe('`invokeMethod`', () => {
    it('should invoke the object method', () => {
      const invokeMethod = funcs.invokeMethod;
      let dumbObject = {
        name: 'Dumb Object',
        brain: true,
        uselessFunction() {
          this.brain = false;
        }
      };
      invokeMethod(dumbObject, 'uselessFunction');
      assert.equal(dumbObject.brain, false);
    });
  });

  describe('`multiplyMysteryNumberByFive`', () => {
    it('should return 25', () => {
      const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
      const mysteryNumberObject = { mysteryNumber: 5 };
      const result = multiplyMysteryNumberByFive(mysteryNumberObject);
      assert.equal(result, 25);
    });
  });

  describe('`deleteProperty`', () => {
    it('should delete object property', () => {
      const deleteProperty = funcs.deleteProperty;
      let dumbObject = { uselessFunction: 'im not even a function. im a string.'};
      deleteProperty(dumbObject, 'uselessFunction');
      assert.equal(dumbObject.uselessFunction, null);
    });
  });
  
  describe('`newUser`', () => {
    it('should return a new user w/ the correct value for each key', () => {
      const newUser = funcs.newUser;
      const dumbUser = newUser('Idiot Jones', 'iamdumb@stupid.moron', 'password');
      assert.equal(dumbUser.name, 'Idiot Jones');
      assert.equal(dumbUser.email, 'iamdumb@stupid.moron');
      assert.equal(dumbUser.password, 'password');
    });
  });

  describe('`hasEmail`', () => {
    it('should return true if user has email and false if not', () => {
      const hasEmail = funcs.hasEmail;
      const dumbUser1 = {
        name: 'Moron Cliffmontisfield',
        password: 'password',
      };
      const dumbUser2 = {
        name: 'Idiot Jones',
        email: 'iamdumb@stupid.moron',
        password: 'password',
      };
      const result1 = hasEmail(dumbUser1);
      const result2 = hasEmail(dumbUser2);
      assert.equal(result1, false);
      assert.equal(result2, true);
    });
  });

  describe('`hasProperty`', () => {
    it('should delete object property', () => {
      const hasProperty = funcs.hasProperty;
      const dumbObject = { uselessFunction: 'im not even a function. im a string.'};
      const result1 = hasProperty(dumbObject, 'uselessFunction');
      const result2 = hasProperty(dumbObject, 'an array');
      assert.equal(result1, true);
      assert.equal(result2, false);
    });
  });

  describe('`verifyPassword`', () => {
    it('should verify password', () => {
      const verifyPassword = funcs.verifyPassword;
      const x = { password: '1'};
      const r1 = verifyPassword(x, '1');
      const r2 = verifyPassword(x, '2');
      assert.equal(r1, true);
      assert.equal(r2, false);
    });
  });

  describe('`updatePassword`', () => {
    it('should update password', () => {
      const updatePassword = funcs.updatePassword;
      const x = { password: '1'};
      const r1 = updatePassword(x, '2');
      assert.equal(x.password, '2');
    });
  });

  describe('`addFriend`', () => {
    it('should add friend', () => {
      const addFriend = funcs.addFriend;
      const x = { friends: ['y'] };
      addFriend(x, 'z');
      assert.includeOrderedMembers(x.friends, ['y', 'z']);
    });
  });
  describe('`setUsersToPremium`', () => {
    it('should set users to premium', () => {
      const setUsersToPremium = funcs.setUsersToPremium;
      const x = [
        {
          isPremium: false,
        },
        {
          isPremium: false,
        }
      ];
      setUsersToPremium(x);
      assert.equal(x[0].isPremium, true);
      assert.equal(x[1].isPremium, true);
    });
  });

  describe('`sumUserPostLikes`', () => {
    it('should sum post likes', () => {
      const sumUserPostLikes = funcs.sumUserPostLikes;
      const x = { posts: [ { likes: 1 } ] };
      const z = sumUserPostLikes(x);
      assert.equal(z, 1);
    });
  });
  
  describe('`addCalculateDiscountPriceMethod`', () => {
    it('should do what the name of the function says', () => {
      const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
      const x = { price: 10, discountPercentage: 0.5 };
      addCalculateDiscountPriceMethod(x);
      const z = x.calculateDiscountPrice();
      assert.equal(z, 5);
    });
  });

});