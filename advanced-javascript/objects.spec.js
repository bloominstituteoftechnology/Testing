const oF = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
test('keys', () => {
  expect(
    oF.keys({
      name: 'Brandon',
      lastName: 'Grych'
    })
  ).toEqual(['name', 'lastName']);
});

test('values', () => {
  expect(
    oF.values({
      name: 'Brandon',
      lastName: 'Grych'
    })
  ).toEqual(['Brandon', 'Grych']);
});

test('map', () => {
  expect(
    oF.mapObject(
      {
        name: 'Brandon',
        lastName: 'Grych'
      },
      item => {
        return item;
      }
    )
  ).toEqual({
    name: 'Brandon',
    lastName: 'Grych'
  });
});

test('pairs', () => {
  expect(oF.pairs({ name: 'Brandon', lastName: 'Grych' })).toEqual([
    ['name', 'Brandon'],
    ['lastName', 'Grych']
  ]);
});

test('invert', () => {
  expect(
    oF.invert({
      name: 'Brandon',
      lastName: 'Grych'
    })
  ).toEqual({ Brandon: 'name', Grych: 'lastName' });
});

test('defaults', () => {
  expect(
    oF.defaults(
      { name: 'Brandon', lastName: 'Grych' },
      {
        name: 'Test',
        lastName: 'Test1'
      }
    )
  ).toEqual({ name: 'Brandon', lastName: 'Grych' });
});