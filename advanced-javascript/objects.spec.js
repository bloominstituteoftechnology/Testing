const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Objects', () => {
describe('keys', () => {
  it('Return array of object keys', () => {	      
    const keys = objectFunctions.keys;

    const Ex1 = keys([2, 4, 6]);

    expect(Ex1).toEqual(['0', '1', '2']);
  });
});
//----------------------------------------------------------------------------------------------  

describe('values', () => {
  it('Return array of object values', () => {
    const values = objectFunctions.values;

    const Ex1 = values(['Clementine']);
    const Ex2 = values('pug');

    expect(Ex1).toEqual(['Clementine']);
    expect(Ex2).toEqual(['p', 'u', 'g']);
  });
});
//----------------------------------------------------------------------------------------------    

describe('mapObject', () => {
  it('Map over each key object; change value with callback function', () => {
    const mapObject = objectFunctions.mapObject;

    const Ex1 = mapObject([5], num => num * 2);
    const Ex2 = mapObject({ a: 'Comrade', b: 'pug' }, num => num.length);

    expect(Ex1).toEqual([10]);
    expect(Ex2).toEqual({ a: 7, b: 3 });
  });
});
//----------------------------------------------------------------------------------------------  

describe('pairs', () => {
  it('Return key value pair array', () => {
    const pairs = objectFunctions.pairs;

    const pugs = pairs({ 'Comrade': 'Pug', 'Clementine': 'Pug' });

    expect(pugs).toEqual([['Comrade', 'Pug'], ['Clementine', 'Pug']]);
  });
});
//----------------------------------------------------------------------------------------------   

describe('invert', () => {
  it('Replace keys with values; values with keys', () => {
    const invert = objectFunctions.invert;

    const pets = invert({ pet1: 'Comrade', pet2: 'Clementine', pet3: 'Chairman' });

    expect(pets).toEqual({ 'Comrade': 'pet1', 'Clementine': 'pet2', 'Chairman': 'pet3' });
  });
});
//----------------------------------------------------------------------------------------------  

describe('defaults', () => {
  it('default values', () => {
    const defaults = objectFunctions.defaults;

    const meals = defaults({ 2: 'Lunch', 3: 'Dinner' }, { 1: 'Breakfast' })

    expect(meals).toEqual({ 1: 'Breakfast', 2: 'Lunch', 3: 'Dinner' });
    });
  });
}) ;
  
