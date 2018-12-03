const aF = require('./arrays.js');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

test('each', () => {
  expect(
    aF.each(['carlo', 'test'], (item, index) => {
      return item;
    })
  ).toBe();
});

test('map', () => {
  expect(
    aF.map(['carlo', 'test'], item => {
      return item;
    })
  ).toEqual(['carlo', 'test']);
});

test('reduce', () => {
  expect(
    aF.reduce(['carlo', 'test'], item => {
      return item;
    })
  ).toEqual('carlo');
});

test('find', () => {
  expect(
    aF.find(['carlo', 'test'], item => {
      return item === 'carlo' ? item : null;
    })
  ).toBe('carlo');
});

test('filter', () => {
  expect(
    aF.filter(['carlo', 'test'], item => {
      return item === 'carlo' ? item : null;
    })
  ).toEqual(['carlo']);
});

test('flatten', () => {
  expect(aF.flatten(['carlo', 'test'])).toEqual(['carlo', 'test']);
});
