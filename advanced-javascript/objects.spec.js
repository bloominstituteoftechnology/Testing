const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});
});

// keys,
it('should list the keys of a given object', () => {
  // arrange
  const keys = objectFunctions.keys;
  // act
  const obj = keys({ people: 'Americans', population: '> 300 million'})
  // assert
  expect(obj).toEqual(['people', 'population'])
});

// values,
it('should list the values of a given object', () => {
  // arrange
  const values = objectFunctions.values;
  // act
  const obj = values({ people: 'Americans', population: '> 300 million'});
  // assert
  expect(obj).toEqual(['Americans', '> 300 million']);
});

// mapObject,
it('should run a map on each object value using a callback function', () => {
  // arrange
  const mapObject = objectFunctions.mapObject;
  function cb(string) {
    return string + '_';
  }
  // act
  const obj = mapObject({ people: 'Americans', population: '> 300 million'}, cb)
  // assert
  expect(obj).toEqual({ people: 'Americans_', population: '> 300 million_'})
});

// pairs,
it('should return an array of each key/value pair in an array', () => {
  // arrange
  const pairs = objectFunctions.pairs;
  // act
  const obj = pairs({ people: 'Americans', population: '> 300 million'});
  // assert
  expect(obj).toEqual([["people", "Americans"], ["population", "> 300 million"]]);
});

// invert,
it('invert object key/values', () => {
  // arrange
  const invert = objectFunctions.invert;
  // act
  const obj = invert({ people: 'Americans', population: '> 300 million'});
  // assert
  expect(obj).toEqual({Americans: 'people', '> 300 million': 'population'})
});

// defaults
it('', () => {
  // arrange
  const defaults = objectFunctions.defaults;
  // act
  const obj = defaults({population: '> 300 million'}, { people: 'Americans', population: '> 300 million'});
  // assert
  expect(obj).toEqual({ people: 'Americans', population: '> 300 million'});
});