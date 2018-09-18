const enhancer = require('./enhancer.js');

describe('enhancer', () => {
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
      // arrange
      const item = {
        level: 0,
      };

      // act
      const actual = enhancer.enhance(item);

      // assert
      expect(actual.level).toBe(1);
      expect(enhancer.enhance(actual).level).toBe(2);
      expect(enhancer.enhance(actual).level).toBe(3);
    });
  });

  describe('fail function', () => {
    it('should decrease durability by 10 on failure', () => {
      // arrange
      const item = {
        durability: 100,
      };

      // act
      const actual = enhancer.fail(item);

      // assert
      expect(actual.durability).toBe(90);
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
