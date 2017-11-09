const assert = require('chai').assert;
const funcs = require('../src/project-3');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('makeCat', () => {
  it('should be a function', () => {
    const makeCat = funcs.makeCat;
    assert.typeOf(makeCat, 'function');
  });
});
describe('addProperty', () => {
  it('should be a function', () => {
    const addProperty = funcs.addProperty;
    assert.typeOf(addProperty, 'function');
  });
});
describe('invokeMethod', () => {
  it('should be a function', () => {
    const invokeMethod = funcs.invokeMethod;
    assert.typeOf(invokeMethod, 'function');
  });
});
describe('multiplyMysteryNumberByFive', () => {
  it('should be a function', () => {
    const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
    assert.typeOf(multiplyMysteryNumberByFive, 'function');
  });
});
describe('deleteProperty', () => {
  it('should be a function', () => {
    const deleteProperty = funcs.deleteProperty;
    assert.typeOf(deleteProperty, 'function');
  });
});
describe('newUser', () => {
  it('should be a function', () => {
    const newUser = funcs.newUser;
    assert.typeOf(newUser, 'function');
  });
});
describe('hasEmail', () => {
  it('should be a function', () => {
    const hasEmail = funcs.hasEmail;
    assert.typeOf(hasEmail, 'function');
  });
});
describe('hasProperty', () => {
  it('should be a function', () => {
    const hasProperty = funcs.hasProperty;
    assert.typeOf(hasProperty, 'function');
  });
});
describe('verifyPassword', () => {
  it('should be a function', () => {
    const verifyPassword = funcs.verifyPassword;
    assert.typeOf(verifyPassword, 'function');
  });
});
describe('updatePassword', () => {
  it('should be a function', () => {
    const updatePassword = funcs.updatePassword;
    assert.typeOf(updatePassword, 'function');
  });
});
describe('addFriend', () => {
  it('should be a function', () => {
    const addFriend = funcs.addFriend;
    assert.typeOf(addFriend, 'function');
  });
});
describe('setUsersToPremium', () => {
  it('should be a function', () => {
    const setUsersToPremium = funcs.setUsersToPremium;
    assert.typeOf(setUsersToPremium, 'function');
  });
});
describe('sumUserPostLikes', () => {
  it('should be a function', () => {
    const sumUserPostLikes = funcs.sumUserPostLikes;
    assert.typeOf(sumUserPostLikes, 'function');
  });
});
describe('addCalculateDiscountPriceMethod', () => {
  it('should be a function', () => {
    const addCalculateDiscountPriceMethod =
      funcs.addCalculateDiscountPriceMethod;
    assert.typeOf(addCalculateDiscountPriceMethod, 'function');
  });
});
