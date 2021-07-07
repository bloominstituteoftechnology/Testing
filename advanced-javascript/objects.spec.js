const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should be an object', () => {});
});

describe('objects', () => {
  const dummyObject = {
    alfa: "amazing",
    bravo: "beautiful",
    charlie: "cheerful"
  };

  describe('keys',()=>{
    const tf = objectFunctions.keys;
    it('Returns an array',()=>{
      const expected = 'object';
      const actual = typeof tf({...dummyObject});
      expect(actual).toBe(expected);
      expect(actual).toHaveProperty('length');
    });
    it(`Returns ["alfa","bravo","charlie"] given ${dummyObject}`,()=>{
      const expected = ["alfa","bravo","charlie"];
      const actual = tf({...dummyObject});
      expect(actual).toEqual(expected);
    });
  });

  describe('values',()=>{
    const tf = objectFunctions.values;
    it('Returns an array',()=>{
      const expected = 'object';
      const actual = typeof tf({...dummyObject});
      expect(actual).toBe(expected);
      expect(actual).toHaveProperty('length');
    });
    it(`Returns ["amazing","beautiful","cheerful"] given ${dummyObject}`,()=>{
      const expected = ["amazing","beautiful","cheerful"];
      const actual = tf({...dummyObject});
      expect(actual).toEqual(expected);
    });
  });

  describe('mapObject',()=>{
    const tf = objectFunctions.mapObject;
    const exclaimValues = value => value + '!';
    it('Returns an object',()=>{
      const expected = 'object';
      const actual = typeof tf({...dummyObject},exclaimValues);
      expect(actual).toBe(expected);
    });
    it(`Returns { alfa: "amazing!", bravo: "beautiful!", charlie: "cheerful!" } given ${dummyObject}`,()=>{
      const expected = { alfa: "amazing!", bravo: "beautiful!", charlie: "cheerful!" };
      const actual = tf({...dummyObject},exclaimValues);
      expect(actual).toEqual(expected);
    });
  });

  describe('pairs',()=>{
    const tf = objectFunctions.pairs;
    it('Returns an array',()=>{
      const expected = 'object';
      const actual = typeof tf({...dummyObject});
      expect(actual).toBe(expected);
      expect(actual).toHaveProperty('length');
    });
    it(`Returns [ ["alfa", "amazing!"], ["bravo", "beautiful!"], ["charlie", "cheerful!"] ] given ${dummyObject}`,()=>{
      const expected = [ ["alfa", "amazing"], ["bravo", "beautiful"], ["charlie", "cheerful"] ];
      const actual = tf({...dummyObject});
      expect(actual).toEqual(expected);
    });
  });

  describe('invert',()=>{
    const tf = objectFunctions.invert;
    it('Returns an object',()=>{
      const expected = 'object';
      const actual = typeof tf({...dummyObject});
      expect(actual).toBe(expected);
    });
    it(`Returns { "amazing" : "alfa", "beautiful" : "bravo", "cheerful" : "charlie" } given ${dummyObject}`,()=>{
      const expected = { "amazing" : "alfa", "beautiful" : "bravo", "cheerful" : "charlie" };
      const actual = tf({...dummyObject});
      expect(actual).toEqual(expected);
    });
  });

  describe('defaults',()=>{
    const tf = objectFunctions.defaults;
    const defaultDummy = {
      "alfa": "amazing",
      "bravo": "beautiful",
      "charlie": "cheerful",
      "delta": "delightful"
    };
    it('Returns an object',()=>{
      const expected = 'object';
      const actual = typeof tf({...dummyObject},{...defaultDummy});
      expect(actual).toBe(expected);
    });
    it(`Returns { "alfa": "amazing", "bravo": "beautiful", "charlie": "cheerful", "delta": "delightful" } given ${dummyObject}`,()=>{
      const expected = { "alfa": "amazing", "bravo": "beautiful", "charlie": "cheerful", "delta": "delightful" };
      const actual = tf({...dummyObject},{...defaultDummy});
      expect(actual).toEqual(expected);
    });
  });
});
