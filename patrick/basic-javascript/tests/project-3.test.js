const assert = require('chai').assert;
const funcs = require('../src/project-3');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-3 Functions', () => {

  describe('makeCat', () => {
    it('should be a function', () => {
      const makeCat = funcs.makeCat;
      assert.typeOf(makeCat, 'function');
      assert.isFunction(makeCat);
    });
    it('should return a `object`', () => {
      const makeCat = funcs.makeCat;
      assert.isObject(makeCat('Eddie Spagetti', 4))
    });
    it('new cat Object includes `{name: \'Eddie Spagetti\'}`', () => {
      const makeCat = funcs.makeCat;
      assert.include(makeCat('Eddie Spagetti', 4),
        {name: 'Eddie Spagetti'})
    });
    it('new cat Object includes `{age: 4}`', () => {
      const makeCat = funcs.makeCat;
      assert.include(makeCat('Eddie Spagetti', 4),
        {age: 4})
    });
    it('new cat Object includes `{meow}`', () => {
      const makeCat = funcs.makeCat;
      assert.property(makeCat('nyan', 52), 'meow')
      assert.isFunction(makeCat('nyan', 52).meow)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      const NAME = funcs.NAME;
      assert.typeOf(NAME, 'function');
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      const NAME = funcs.NAME;
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      const NAME = funcs.NAME;
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      const NAME = funcs.NAME;
      assert.typeOf(NAME, 'function');
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      const NAME = funcs.NAME;
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      const NAME = funcs.NAME;
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      const NAME = funcs.NAME;
      assert.typeOf(NAME, 'function');
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      const NAME = funcs.NAME;
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      const NAME = funcs.NAME;
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      const NAME = funcs.NAME;
      assert.typeOf(NAME, 'function');
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      const NAME = funcs.NAME;
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      const NAME = funcs.NAME;
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      const NAME = funcs.NAME;
      assert.typeOf(NAME, 'function');
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      const NAME = funcs.NAME;
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      const NAME = funcs.NAME;
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      const NAME = funcs.NAME;
      assert.typeOf(NAME, 'function');
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      const NAME = funcs.NAME;
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      const NAME = funcs.NAME;
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      const NAME = funcs.NAME;
      assert.typeOf(NAME, 'function');
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      const NAME = funcs.NAME;
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      const NAME = funcs.NAME;
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      const NAME = funcs.NAME;
      assert.typeOf(NAME, 'function');
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      const NAME = funcs.NAME;
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      const NAME = funcs.NAME;
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      const NAME = funcs.NAME;
      assert.typeOf(NAME, 'function');
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      const NAME = funcs.NAME;
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      const NAME = funcs.NAME;
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      const NAME = funcs.NAME;
      assert.typeOf(NAME, 'function');
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      const NAME = funcs.NAME;
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      const NAME = funcs.NAME;
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      const NAME = funcs.NAME;
      assert.typeOf(NAME, 'function');
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      const NAME = funcs.NAME;
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      const NAME = funcs.NAME;
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      const NAME = funcs.NAME;
      assert.typeOf(NAME, 'function');
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      const NAME = funcs.NAME;
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      const NAME = funcs.NAME;
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });

  describe('NAME', () => {
    it.skip('should be a function', () => {
      const NAME = funcs.NAME;
      assert.typeOf(NAME, 'function');
      assert.isFunction(NAME);
    });
    it.skip('should return a `TYPE`', () => {
      const NAME = funcs.NAME;
      assert.isTYPE(NAME(PARAMETERS), TYPE)
    });
    it.skip('should return a `VALUE`', () => {
      const NAME = funcs.NAME;
      assert.isVALUE(NAME(PARAMETERS), VALUE)
    });
  });


});

// // TEMPLATE
// describe('Project-# Functions', () => {
//
//   describe('NAME', () => {
//     it.skip('should be a function', () => {
//       const NAME = funcs.NAME;
//       assert.typeOf(NAME, 'function');
//       assert.isFunction(NAME);
//     });
//     it.skip('should return a `TYPE`', () => {
//       const NAME = funcs.NAME;
//       assert.isTYPE(NAME(PARAMETERS), TYPE)
//     });
//     it.skip('should return a `VALUE`', () => {
//       const NAME = funcs.NAME;
//       assert.isVALUE(NAME(PARAMETERS), VALUE)
//     });
//   });
//
// });
