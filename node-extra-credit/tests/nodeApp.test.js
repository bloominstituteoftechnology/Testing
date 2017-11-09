const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const expect = chai.expect;
chai.use(sinonChai);

const nodeFuncs = require('../src/nodeApp.js');

// for the extra credit you have two functions to provide test coverage for.
// you'll check to see what the return data is coming back from your getter fn. eg. type, array of objects and length of the array etc.
// you'll then check the people setter to see if it actually does what it's supposed to with the people passed in.

// this isn't a real live api, you'd normally have to deal with some async actions etc. for this, you'll simply be updating a static array of users.

// have fun!
describe('nodeApp', () => {
  describe('peopleGetter', () => {
    const peopleGetter = nodeFuncs.peopleGetter;
    it('should be a function', () => {
      expect(peopleGetter).to.be.a('function');
    });
    it('should return the users array', () => {
      expect(peopleGetter().length).to.be.eq(10);
    });
  });
  describe('peopleSetter', () => {
    const peopleSetter = nodeFuncs.peopleSetter;
    it('should be a function', () => {
      expect(peopleSetter).to.be.a('function');
    });
    it('should return the users array', () => {
      const user = {
        id: 11,
        first_name: 'Mark',
        last_name: 'Oliver',
        email: 'mark.c.oliver@gmail.com'
      };
      expect(peopleSetter(user).length).to.be.eq(11);
    });
  });
});
