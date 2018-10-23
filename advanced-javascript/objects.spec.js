const objectFunctions = require('./objects');
const testObject = {'test': 'object'};

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  it('should recognize an object', () => {
    expect(typeof testObject).toBe(typeof {});
  });
  describe('keys()', () => {
    it('should return the keys of an object', () => {
      
    expect(objectFunctions.keys(testObject)).toEqual(['test']);
    })
  })
  describe('values()', () => {
    it('should return the values of an object', () => {
      expect(objectFunctions.values(testObject)).toEqual(['object']);
    })
  })
  describe('async tests', () => {
    it('using a callback', done => {
        setTimeout(() => {
            done();
        }, 2000);
    });
    it('using promises', () => {
        return new Promise(resolve => {
            setTimeout(resolve, 250)
        })
    })
    it('using async/await', async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
    })
})
});
