const chai = require('chai');
const nodeFuncs = require('../src/nodeApp.js');

const expect = chai.expect;

// for the extra credit you have two functions to provide test coverage for.
// you'll check to see what the return data is coming back from your getter fn. eg. type, array of objects and length of the array etc.
// you'll then check the people setter to see if it actually does what it's supposed to with the people passed in.

// this isn't a real live api, you'd normally have to deal with some async actions etc. for this, you'll simply be updating a static array of users.

// have fun!
describe('peopleGetter', () => {
  it('should be a function', () => {
    const peopleGetter = nodeFuncs.peopleGetter;
    expect(peopleGetter).to.be.a('function');
  });
  it('should return an array of users', () => {
    const peopleGetter = nodeFuncs.peopleGetter;
    const people = peopleGetter();
    expect(people).to.be.an('array');
  });
});
describe('peopleSetter', () => {
  it('should be a function', () => {
    const peopleSetter = nodeFuncs.peopleSetter;
    expect(peopleSetter).to.be.a('function');
  });
  it('should add a user to the data', () => {
    const peopleSetter = nodeFuncs.peopleSetter;
    const peopleGetter = nodeFuncs.peopleGetter;
    const currentUsers = peopleGetter();

    const user = {
      id: currentUsers.length + 1,
      first_name: 'Christian',
      last_name: 'Franco',
      email: 'contact@francoslab.com'
    };
    const newUsers = peopleSetter(user);
    expect(newUsers.length).to.be.equal(currentUsers.length + 1);
  });
});
