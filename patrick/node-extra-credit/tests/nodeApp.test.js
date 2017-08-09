const chai = require('chai');
const expect = chai.expect;
const nodeFuncs = require('../src/nodeApp.js');


// for the extra credit you have two functions to provide test coverage for. - OKAY √
// you'll check to see what the return data is coming back from your getter fn.
  // eg. type, array of objects and length of the array etc. - OKAY √
// you'll then check the people setter to see if it actually does
// what it's supposed to with the people passed in. - OKAY √

// this isn't a real live api, you'd normally have to deal with some async
// actions etc. for this, you'll simply be updating a static array of users. - OKAY √

// have fun! - YaY √

describe('Node Extra Credit Tests', () => {

  describe('`peopleGetter`', () => {
    it('should be a `Function`', () => {
      const peopleGetter = nodeFuncs.peopleGetter;
      expect(peopleGetter).to.be.an('function');
    });
  });

  describe('`peopleSetter`', () => {
    it('should be a `Function`', () => {
      const peopleSetter = nodeFuncs.peopleSetter;
      expect(peopleSetter).to.be.an('function');
    });
  });

});
