const assert = require('chai').assert;
const funcs = require('../src/project-3');

// // To handle invokeMethod
// // const sinon = require('sinon');
// // const sinonChai = require('sinon-chai');
// var chai = require("chai");
// var sinon = require("sinon");
// sinon.assert.expose(chai.assert, { prefix: "" });
// // https://github.com/domenic/sinon-chai

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-3 Functions', () => {

  describe('makeCat', () => {
    const makeCat = funcs.makeCat;
    it('should be a function', () => {
      assert.isFunction(makeCat);
    });
    it('should return an `Object`', () => {
      assert.isObject(makeCat('Eddie Spagetti', 4))
    });
    it('new cat Object includes `{name: \'Eddie Spagetti\'}`', () => {
      assert.include(makeCat('Eddie Spagetti', 4),
        {name: 'Eddie Spagetti'});
    });
    it('new cat Object includes `{age: 4}`', () => {
      assert.include(makeCat('Eddie Spagetti', 4), {age: 4});
      assert.propertyVal(makeCat('Eddie Spagetti', 4), 'age', 4);
    });
    it('new cat Object includes `[Function: meow]]`', () => {
      assert.property(makeCat('nyan', 2), 'meow');
      assert.isFunction(makeCat('nyan', 2).meow);
      // assert.propertyVal(makeCat('nyan', 2), 'meow', Function); // <~~~~ ????????????????????/
      // assert.propertyVal(makeCat('nyan', 2), 'meow', [Function: meow]); // <~~~~ ????????????????????/
      // assert.propertyVal(makeCat('nyan', 2), 'meow', 'Function'); // <~~~~ ????????????????????/
      // assert.propertyVal(makeCat('nyan', 2), 'meow', [Function: Function]); // <~~~~ ????????????????????/

    });
  });

  describe('addProperty', () => {
    const addProperty = funcs.addProperty;
    it('should be a function', () => {
      assert.isFunction(addProperty);
    });
    it('should return an `Object`', () => {
      assert.isObject(addProperty({}, 1));
    });
    it('should be able to have properties added to it', () => {
      assert.isExtensible(addProperty(new Object, 1));
      assert.isExtensible(addProperty(new Array, 1));
    });
    it('should return the added property', () => {
      assert.property(addProperty({}, 1), 1);
      assert.propertyVal(addProperty({}, 1), 1, null);
      // console.log(addProperty({}, 1));
      // console.log('\n\n\n');
    });
  });

  // NOT RETURNING ANYTHING, JUST SIDE EFFECT
  describe('invokeMethod', () => {
    const invokeMethod = funcs.invokeMethod;
    it('should be a function', () => {
      assert.isFunction(invokeMethod);
    });
    it('should invoke the method', () => { // NOT MY BEST WORK...
      const arr = [ 1, 2, 3, 4 ];
      const method = 'pop';
      assert.operator(arr, '!==', invokeMethod(arr, method));
      // pop().should.have.been.calledWith("invokeMethod(arr, method)"); // HMMMMM?
    });
    // it.skip('should return a `VALUE`', () => {
    //   assert.isVALUE(invokeMethod(PARAMETERS), VALUE)
    // });
  });

  describe('multiplyMysteryNumberByFive', () => {
    const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
    it('should be a function', () => {
      assert.isFunction(multiplyMysteryNumberByFive);
    });
    it('should return a `Number`', () => {
      assert.isNumber(multiplyMysteryNumberByFive({mysteryNumber: 10}));
    });
    it('should return a value of `50`', () => {
      assert.equal(multiplyMysteryNumberByFive({mysteryNumber: 10}), 50);
    });
  });

  describe('deleteProperty', () => {
    const deleteProperty = funcs.deleteProperty;
    it('should be a function', () => {
      assert.isFunction(deleteProperty);
    });
    it('should return an `Object`', () => {
      assert.isObject(deleteProperty({1: 2, 3: 4}, 1));
    });
    it('should NOT have property `1`', () => {
      assert.notProperty(deleteProperty({1: 'a', 2: 'b'}, 1), 1);
    });
  });

  describe('newUser', () => {
    const newUser = funcs.newUser;
    it('should be a function', () => {
      assert.isFunction(newUser);
    });
    it('should return an `Object`', () => {
      assert.isObject(newUser('Frank', 'frank@bank.crank', 'sc00byd00'));
    });
    it('should return all `{Key: Value} pairs`', () => {
      assert.property(newUser('Frank', 'frank@bank.crank', 'sc00byd00'), 'name');
      assert.propertyVal(newUser('Frank', 'frank@bank.crank', 'sc00byd00'), 'name', 'Frank');
      assert.property(newUser('Frank', 'frank@bank.crank', 'sc00byd00'), 'email');
      assert.propertyVal(newUser('Frank', 'frank@bank.crank', 'sc00byd00'), 'email', 'frank@bank.crank');
      assert.property(newUser('Frank', 'frank@bank.crank', 'sc00byd00'), 'password');
      assert.propertyVal(newUser('Frank', 'frank@bank.crank', 'sc00byd00'), 'password', 'sc00byd00');
    });
  });

  describe('hasEmail', () => {
    const hasEmail = funcs.hasEmail;
    it('should be a function', () => {
      assert.isFunction(hasEmail);
    });
    it('should return a `Boolean`', () => {
      const user = {};
      assert.isBoolean(hasEmail(user));
    });
    it('should return `false`', () => {
      const user = {};
      assert.isFalse(hasEmail(user))
    });
    it('should return `true`', () => {
      const user = {email: 'x@x.x'};
      assert.isTrue(hasEmail(user))
    });
  });

  describe('hasProperty', () => {
    const hasProperty = funcs.hasProperty;
    it('should be a function', () => {
      assert.isFunction(hasProperty);
    });
    it('should return a `Boolean`', () => {
      assert.isBoolean(hasProperty({email: 'x@x.x'}, 'email'));
    });
    it('should return `false`', () => {
      assert.isFalse(hasProperty({email: 'x@x.x'}, 'password'));
    });
    it('should return `true`', () => {
      assert.isTrue(hasProperty({email: 'x@x.x'}, 'email'));
    });
  });

  describe('verifyPassword', () => {
    const verifyPassword = funcs.verifyPassword;
    it('should be a function', () => {
      assert.isFunction(verifyPassword);
    });
    it('should return a `Boolean`', () => {
      assert.isBoolean(verifyPassword({password: 'sc00byd00'}, 'sc00byd00'));
    });
    it('should return `false`', () => {
      assert.isFalse(verifyPassword({password: 'sc00byd00'}, 'd00bysc00'));
    });
    it('should return `true`', () => {
      assert.isTrue(verifyPassword({password: 'sc00byd00'}, 'sc00byd00'));
    });
  });

  describe('updatePassword', () => {
    const updatePassword = funcs.updatePassword;
    it('should be a function', () => {
      assert.isFunction(updatePassword);
    });
    it('should return an `Object`', () => {
      assert.isObject(updatePassword({password: 'sc00byd00'}, 'sc00bysn@cks'));
    });
    it('should change the old password to the new password', () => {
      const newPword = updatePassword({password: 'sc00byd00'}, 'sc00bysn@cks');
      const samePword = {password: 'sc00bysn@cks'};
      assert.operator(newPword.password, '===', samePword.password);
    });
    // REDUNDANT
    it('should have a password value of `sc00bysn@cks`', () => {
      const newPword = updatePassword({password: 'sc00byd00'}, 'sc00bysn@cks');
      assert.propertyVal(newPword, 'password', 'sc00bysn@cks');
    });
  });

  describe('addFriend', () => {
    const addFriend = funcs.addFriend;
    const addedFriend = addFriend({friends: [ 'Fred', 'Ted', 'Bob', 'Alice' ]}, 'Lois');
    it('should be a function', () => {
      assert.isFunction(addFriend);
    });
    it('should return an `Object`', () => {
      assert.isObject(addedFriend);
    });
    it('should return the object with the new friend added to the friends array', () => {
      assert.includeOrderedMembers(addedFriend.friends, [ 'Fred', 'Ted', 'Bob', 'Alice', 'Lois' ]);
    });
  });

  describe('setUsersToPremium', () => {
    const setUsersToPremium = funcs.setUsersToPremium;
    const noPremium = setUsersToPremium([ {isPremium: false}, {isPremium: false}, {isPremium: false} ]);
    it('should be a function', () => {
      assert.isFunction(setUsersToPremium);
    });
    it('should return an `Array`', () => {
      assert.isArray(noPremium);
    });
    it('should return a `VALUE`', () => {
      for (let i = 0; i < noPremium.length; i++) {
      assert.propertyVal(noPremium[i], 'isPremium', true);
    }});
  });

  describe('sumUserPostLikes', () => {
    const sumUserPostLikes = funcs.sumUserPostLikes;
    const userPosts = sumUserPostLikes({posts: [
                                          {likes: 3},
                                          {likes: 2},
                                          {likes: 15},
                                          {likes: 117},
                                          {likes: 1},
                                          {likes: 0}
                                        ]});
    it('should be a function', () => {
      assert.isFunction(sumUserPostLikes);
    });
    it('should return a `Number`', () => {
      assert.isNumber(userPosts);
    });
    it('should return `138`', () => {
      assert.equal(userPosts, 138);
    });
  });

  describe('addCalculateDiscountPriceMethod', () => {
    const addCalculateDiscountPriceMethod = funcs.addCalculateDiscountPriceMethod;
    const storeItem = { price: 25, discountPercentage: .15 };
    const applyDiscountToItem = addCalculateDiscountPriceMethod(storeItem);
    const retrieveNewPrice = applyDiscountToItem.calculateDiscountPrice();
    it('should be a function', () => {
      assert.isFunction(addCalculateDiscountPriceMethod);
    });
    it('should return an `Object`', () => {
      assert.isObject(addCalculateDiscountPriceMethod({}));
    });
    it('should return a store item with the discounted price', () => {
      assert.equal(retrieveNewPrice, 21.25);
    });
  });

});


// // TEMPLATE
// describe('Project-# Functions', () => {
//
//   describe('NAME', () => {
//     const NAME = funcs.NAME;
//     it.skip('should be a function', () => {
//       assert.isFunction(NAME);
//     });
//     it.skip('should return a `TYPE`', () => {
//       assert.isTYPE(NAME(PARAMETERS))
//     });
//     it.skip('should return a `VALUE`', () => {
//       assert.equal(NAME(PARAMETERS), VALUE)
//     });
//   });
//
// });
