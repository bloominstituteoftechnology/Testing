const oF = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
test('keys', () => {
  expect(
    oF.keys({
      name: 'Carlo',
      lastName: 'Clamucha'
    })
  ).toEqual(['name', 'lastName']);
});

test('values', () => {
  expect(
    oF.values({
      name: 'Carlo',
      lastName: 'Clamucha'
    })
  ).toEqual(['Carlo', 'Clamucha']);
});

test('map', () => {
  expect(
    oF.mapObject(
      {
        name: 'Carlo',
        lastName: 'Clamucha'
      },
      item => {
        return item;
      }
    )
  ).toEqual({
    name: 'Carlo',
    lastName: 'Clamucha'
  });
});

test('pairs', () => {
  expect(oF.pairs({ name: 'Carlo', lastName: 'Clamucha' })).toEqual([
    ['name', 'Carlo'],
    ['lastName', 'Clamucha']
  ]);
});

test('invert', () => {
  expect(
    oF.invert({
      name: 'Carlo',
      lastName: 'Clamucha'
    })
  ).toEqual({ Carlo: 'name', Clamucha: 'lastName' });
});

test('defaults', () => {
  expect(
    oF.defaults(
      { name: 'Carlo', lastName: 'Clamucha' },
      {
        name: 'Test',
        lastName: 'Test1'
      }
    )
  ).toEqual({ name: 'Carlo', lastName: 'Clamucha' });
});
