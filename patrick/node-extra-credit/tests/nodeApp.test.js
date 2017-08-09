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
    const peopleGetter = nodeFuncs.peopleGetter;
    it('should be a `Function`', () => {
      expect(peopleGetter).to.be.a('function');
    });
    it('should return an `Array`', () => {
      expect(peopleGetter()).to.be.an('array');
    });
    it('should return `1` from users[0].id', () => {
      expect(peopleGetter()[0].id).to.equal( 1 );
    });

  });

  describe('`peopleSetter`', () => {
    const peopleSetter = nodeFuncs.peopleSetter,
          anObj = { id: 10,
                  first_name: 'Culver',
                  last_name: 'Hairsnape',
                  email: 'chairsnape9@go.com' };
    it('should be a `Function`', () => {
      expect(peopleSetter).to.be.a('function');
    });
    it('should return an `Array`', () => {
      expect(peopleSetter(anObj)).to.be.an('array');
    });
  });

});
