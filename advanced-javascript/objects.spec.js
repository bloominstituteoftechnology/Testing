const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/


// keys
describe('keys', () => {
  const obj1 = {
    key1: 1,
    key2: 2,
    key3: 3
  };
  
  const objKeys = objectFunctions.keys(obj1);
  expect(objKeys).toEqual(["key1", "key2", "key3"]);
});

// values
describe('values', () => {
  const obj1 = {
    key1: 1,
    key2: 2,
    key3: 3
  };
  
  const objValues = objectFunctions.values(obj1);
  expect(objValues).toEqual([1, 2, 3]);
});

// mapObject
describe('mapObject', () => {
  const obj1 = {
    key1: 1,
    key2: 2,
    key3: 3
  };
  
  const cb1 = (n) => {
    let m = n + 5;
    return m;
  };
  
  const objMapObject = objectFunctions.mapObject(obj1, cb1)
  expect(objMapObject).toEqual({ "key1": 6, "key2": 7, "key3": 8 });
});

// pairs
describe('pairs', () => {
  const obj1 = {
    key1: 1,
    key2: 2,
    key3: 3
  };
  
  const objPairs = objectFunctions.pairs(obj1);
  expect(objPairs).toEqual([["key1", 1], ["key2", 2], ["key3", 3]]);
});


// invert
describe('invert', () => {
  const obj1 = {
    key1: 1,
    key2: 2,
    key3: 3
  };
  
  const objInvert = objectFunctions.invert(obj1);
  expect(objInvert).toEqual({ 1: "key1", 2: "key2", 3: "key3" });
});

// defaults - WIP
describe('default', () => {

  const obj1 = {
    key1: 1,
    key2: 2,
    key3: 3
  };

  const defaultProps = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
  };

  const objDefaults = objectFunctions.defaults(obj1, defaultProps);
  expect(objDefaults).toEqual();
});

