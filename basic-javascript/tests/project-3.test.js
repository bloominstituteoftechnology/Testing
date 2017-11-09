const assert = require('chai').assert;
const funcs = require('../src/project-3');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project-3 Functions', () => {
  describe('`makeCat`', () => {
    it('should be a function', () => {
      const makeCat = funcs.makeCat;
      assert.isFunction(makeCat);
    });
    it('should return an object', () => {
      const makeCat = funcs.makeCat;
      assert.isObject(makeCat('ryku', 7));
    });
    it('should return a new cat', () => {
      const makeCat = funcs.makeCat;
      assert.include(makeCat('ryku', 7), {
        name: 'ryku',
        age: 7
      });
      assert.strictEqual(makeCat('ryku', 7).meow(), 'Meow!');
    });
  });

  describe('`addProperty`', () => {
    it('should be a function', () => {
      const addProperty = funcs.addProperty;
      assert.isFunction(addProperty);
    });
    it('should return an object', () => {
      const addProperty = funcs.addProperty;
      assert.isObject(addProperty({ a: 1 }, 'test'));
    });
    it('should add property', () => {
      const addProperty = funcs.addProperty;
      assert.include(addProperty({ val: 34 }, 'newProp'), {
        val: 34,
        newProp: null
      });
      assert.property(addProperty({}, 'id'), 'id');
    });
  });

  describe('`invokeMethod`', () => {
    it('should be a function', () => {
      const invokeMethod = funcs.invokeMethod;
      assert.isFunction(invokeMethod);
    });
    it('should invokeMethod', () => {
      const invokeMethod = funcs.invokeMethod;
      const object = {
        count: 0,
        incrementCount() {
          this.count += 1;
        }
      };
      invokeMethod(object, 'incrementCount');
      assert.strictEqual(object.count, 1);
    });
  });

  describe('`multiplyMysteryNumberByFive`', () => {
    it('should be a function', () => {
      const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
      assert.isFunction(multiplyMysteryNumberByFive);
    });
    it('should return a number', () => {
      const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
      assert.isNaN(multiplyMysteryNumberByFive({ mysteryNumber: "test" }));
    });
    it('should multiply mystery number by five', () => {
      const multiplyMysteryNumberByFive = funcs.multiplyMysteryNumberByFive;
      assert.strictEqual(multiplyMysteryNumberByFive({ mysteryNumber: 4 }), 20);
    });
  });

  describe('`deleteProperty`', () => {
    it('should be a function', () => {
      const deleteProperty = funcs.deleteProperty;
      assert.isFunction(deleteProperty);
    });
    it('should return an object', () => {
      const deleteProperty = funcs.deleteProperty;
      assert.isObject(deleteProperty({ a: 1 }, 'a'));
    });
    it('should remove property', () => {
      const deleteProperty = funcs.deleteProperty;
      assert.notProperty(deleteProperty({ a: 2, b: 3 }, 'a'), 'a');
    });
  });

  describe('`newUser`', () => {
    it('should be a function', () => {
      const newUser = funcs.newUser;
      assert.isFunction(newUser);
    });
    it('should return an object', () => {
      const newUser = funcs.newUser;
      assert.isObject(newUser('Ben', '123@gmail.com', 'qwerty'));
    });
    it('should create the user object', () => {
      const newUser = funcs.newUser;
      assert.include(newUser('Ben', '123@gmail.com', 'qwerty'), {
        name: 'Ben',
        email: '123@gmail.com',
        password: 'qwerty',
      });
    });
  });

  describe('`hasEmail`', () => {
    it('should be a function', () => {
      const hasEmail = funcs.hasEmail;
      assert.isFunction(hasEmail);
    });
    it('should return a boolean', () => {
      const hasEmail = funcs.hasEmail;
      assert.isBoolean(hasEmail({ email: '123@gmail.com' }));
    });
    it('should check if user has email', () => {
      const hasEmail = funcs.hasEmail;
      assert.isTrue(hasEmail({ email: '123@gmail.com' }));
      assert.isFalse(hasEmail({ email: null }));
    });
  });

  describe('`hasProperty`', () => {
    it('should be a function', () => {
      const hasProperty = funcs.hasProperty;
      assert.isFunction(hasProperty);
    });
    it('should return a boolean', () => {
      const hasProperty = funcs.hasProperty;
      assert.isBoolean(hasProperty({ email: '123@gmail.com' }, 'email'));
    });
    it('should check if user has email', () => {
      const hasProperty = funcs.hasProperty;
      assert.isFalse(hasProperty({ prop: 'value' }, 'id'));
      assert.isTrue(hasProperty({ prop: 43 }, 'prop'));
    });
  });
});
