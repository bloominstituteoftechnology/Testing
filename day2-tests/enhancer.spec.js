const enhancer = require('./enhancer.js');

describe.only('enhancer', () => {
  beforeAll(() => {
    // connect to the database server
    console.log('before each ran');
  });

  beforeEach(() => {
    // create the tables the tests need
  });

  afterEach(() => {
    // drop all the tables
  });

  afterAll(() => {
    // disconnect from the database server
  });

  describe('enhance function', () => {
    it('should increase level by 1', () => {
      const item = {
        level: 0,
        durability: 100,
        fail: 0,
      };

      const actual = enhancer.enhance(item);

      expect(actual).toEqual({ level: 1, durability: 100, fail: 0 });
      expect(enhancer.enhance(actual).level).toBe(2);
    });

    it('should only increase to level 20', () => {
      const item = {
        level: 'IV',
        durability: 100,
        fail: 0,
      };

      const actual = enhancer.enhance(item);

      expect(actual.level).toBe('V');
      expect(enhancer.enhance(actual).level).toBe('V');
    });

    it('should return Roman numerals after 15', () => {
      const item = {
        level: 15,
        durability: 100,
        fail: 0,
      };

      const actual = enhancer.enhance(item);

      expect(actual.level).toBe('I');
      expect(enhancer.enhance(actual).level).toBe('II');
    });

    it('can succeed or fail', () => {
      const item = {
        level: 'I',
        durability: 100,
        fail: 0,
      };

      const truetest = enhancer.fail(item);
      const falsetest = enhancer.enhance(item);

      expect(truetest.fail).toBe(2);
      expect(falsetest.fail).toBe(0);
    });

    it('resets fail count to 0 when succeeds', () => {
      const item = {
        level: 15,
        durability: 100,
        fail: 3,
      };

      const actual = enhancer.enhance(item);

      expect(actual.fail).toBe(0);
    });
  });

  describe.only('fail function', () => {
    it('increases the fail count by 1 for level 1-15', () => {
      const item = {
        level: 15,
        durability: 100,
        fail: 0,
      };

      const actual = enhancer.fail(item);

      expect(actual.fail).toBe(1);
      expect(enhancer.fail(actual).fail).toBe(2);
    });

    it('increases the fail count by 2 for level I', () => {
      const item = {
        level: 'I',
        durability: 100,
        fail: 0,
      };

      const actual = enhancer.fail(item);

      expect(actual.fail).toBe(2);
      expect(enhancer.fail(actual).fail).toBe(4);
    });

    it('should decrease durability by 5 on failure', () => {
      const item = {
        level: 0,
        durability: 100,
        fail: 0,
      };

      const actual = enhancer.fail(item);

      expect(actual.durability).toBe(95);
    });
  });
});

describe('async', () => {
  it('async using callback', done => {
    setTimeout(done, 500);
    // axios.get('fsfsf').then(res => {
    //   /// so stuff

    //   done();
    // })
  });
  it('async returning the promise', () => {
    return new Promise(resolve => setTimeout(resolve, 500));
    // return axios.get('fsfsf').then(res => {
    //   /// so stuff
    // })
  });

  it('async using async/await', async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    // const res = await axios.get('fsfsf');
    // so stuff with res
  });
});
