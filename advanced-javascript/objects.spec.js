const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});
});

describe('object operations', () => {

  test('should return keys of an object', () => {
    const testObj = {'user1': 1, 'user2': 2, 'user3': 3};
    const result = objectFunctions.keys(testObj);

    expect(result).toEqual(['user1', 'user2', 'user3']); // testing deep equality only, not reference
  });

  test('should return values of an object', () => {
    const testObj = {'user1': 1, 'user2': 2, 'user3': 3};
    const result = objectFunctions.values(testObj);

    expect(result).toEqual([1, 2, 3]);
  });

  // test('for each object key, should map key to callback function', () => {
  //   const testObj = {'user1': 1, 'user2': 2, 'user3': 3};
  //   const cb = Object.keys(testObj);
  //   const result = objectFunctions.mapObject(testObj, cb);
  //
  //   expect(result).toEqual(['user1', 'user2', 'user3']);
  // });

  // test('should return array with key/value pairs of an object', () => {
  //   const testObj = {'user1': 1, 'user2': 2, 'user3': 3};
  //   const result = objectFunctions.pairs(testObj);
  //
  //   expect(result).toEqual(['user1': 1, 'user2': 2, 'user3': 3]);
  // });

  test('should invert the key/value pairs of an object', () => {
    const testObj = {1: 'user1', 2: 'user2', 3: 'user3'};
    const result = objectFunctions.invert(testObj);

    expect(result).toEqual({'user1': '1', 'user2': '2', 'user3': '3'});
  });

  test('should provide default values for a property that an object does not currently have', () => {
    const testObj = {'name': 'test', 'user1': 1, 'user2': 2, 'user3': 3};
    const defaultProps = {name: 'Evan'};
    const result = objectFunctions.defaults(testObj, defaultProps);

    const testObjNoName = {'user1': 1, 'user2': 2, 'user3': 3};
    const resultWithName = objectFunctions.defaults(testObjNoName, defaultProps);

    expect(result).toEqual({'name': 'test', 'user1': 1, 'user2': 2, 'user3': 3}); // defaultProps should not be passed here since 'name' exists
    expect(resultWithName).toEqual({'name': 'Evan', 'user1': 1, 'user2': 2, 'user3': 3}); // defaultProps now passes the name to the returned object
  });

});
