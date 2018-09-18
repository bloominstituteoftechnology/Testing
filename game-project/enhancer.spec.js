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

      const maxItem = {
        level: 'V',
      }

      const romanItem = {
        level: 'I',
      }

      // act
      const actual = enhancer.enhance(item);

      // assert
      expect(actual.level).toBe(1);
      expect(enhancer.enhance(actual).level).toBe(2);
      expect(enhancer.enhance(actual).level).toBe(3);
      expect(enhancer.enhance(maxItem).level).toBe('V');
      expect(enhancer.enhance(romanItem).level).toBe('II');

    });
  });

  describe('fail function', () => {
    const item = {
      durability: 100,
      failCount: 0,
      level: 7,
    };
    const maxItem={
      durability: 100,
      failCount: 5,
      level: 'V'
    }
    const romanItem={
      durability: 90,
      failCount: 0,
      level: 'II',
    }
    const actual = enhancer.fail(item);
    const maxActual = enhancer.fail(maxItem);
    const romanActual = enhancer.fail(romanItem);
    it('should decrease durability by 10 on failure', () => {
      // arrange
      // act
      // assert
      expect(actual.durability).toBe(95);
      expect(maxActual.durability).toBe(95);
      expect(romanActual.durability).toBe(85);
    });
    it('should increase failCount based on item.level', () => {
      // arrange
      // act
      // assert
      expect(actual.failCount).toBe(1);
      expect(maxActual.failCount).toBe(5);
      expect(romanActual.failCount).toBe(3);
    });
  });
  describe('succeed function', () => {
    it('should reset fail count to 0', () => {
      const item = {
        failCount: 5,
      }
      const actual = enhancer.succeed(item);
      expect(actual.failCount).toBe(0);
    });
  });

  describe('repair function', () => {
    it('should add durability in units of 10 up to 100', () => {
      const item = {
        durability: 40,
      }

      const maxItem = {
        durability: 100
      }

      const actual = enhancer.repair(item);
      const maxActual = enhancer.repair(maxItem);

      expect(actual.durability).toBe(50);
      expect(enhancer.repair(actual).durability).toBe(60);
      expect(maxActual.durability).toBe(100);
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