const chai = require('chai');
const { peopleGetter, peopleSetter } = require('../src/nodeApp.js');

const assert = chai.assert;
const expect = chai.expect;

describe('Node App', () => {
  describe('peopleGetter', () => {
    const users = peopleGetter();
    it('should return an array of user data', () => {
      assert.isArray(users);
      assert.equal(users.length, 10);
    });
    it('should return an array of objects with id, first_name, last_name, and email properties', () => {
      users.forEach(user => {
        assert.isObject(user);
        assert.property(user, 'id');
        assert.property(user, 'first_name');
        assert.property(user, 'last_name');
        assert.property(user, 'email');
      });
    });
  });
  describe('peopleSetter', () =>  {
    let users = peopleGetter();
    const user = {
      id: 11,
      first_name: 'darth',
      last_name: 'mitten',
      email: 'darthmitten@duckduckgo.com'
    }
    it('should return users data with an added user', () => {
      assert.equal(users.length, 10);
      users = peopleSetter(user);
      assert.equal(users.length, 11);
      users = peopleSetter(user);
      assert.equal(users.length, 12);
    });
    it('should add an object to the array with the given property values', () => {
      users.forEach(user => {
        assert.isObject(user);
        assert.property(user, 'id');
        assert.property(user, 'first_name');
        assert.property(user, 'last_name');
        assert.property(user, 'email');
      });
      assert.propertyVal(users[11], 'id', 11);
      assert.propertyVal(users[11], 'first_name', 'darth');
      assert.propertyVal(users[11], 'last_name', 'mitten');
      assert.propertyVal(users[11], 'email', 'darthmitten@duckduckgo.com');
    });
  });
});
