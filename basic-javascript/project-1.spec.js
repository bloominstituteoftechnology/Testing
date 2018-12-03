const helpers = require('./project-1');

// start testing!
describe('project-1.js', () => {
  describe('jest', () => {
    test('should run tests', () => {

    })
  })


  describe('multiplyByTen', () => {

    it('should mulitply number by ten', () => {
      const expected = 100;
   
      const actual =  helpers.multiplyByTen(10);
   
      expect(actual).toEqual(expected);
    });

    it('should return 0 when there is no value', () => {
      const product = helpers.multiplyByTen();
      expect(product).toBe(0);
    })

  })
  
})
 








 











