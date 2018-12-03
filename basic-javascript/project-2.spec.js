const { getBiggest, } = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('get biggest', () => {
  test('returns a number', ()=>{
    //Arrange: Setup the world
      const inputX = 9;
      const inputY = 12;
    //Act: Execute the code youre testing
      const result = getBiggest(inputX, inputY);
    //Assert: Check that it works
      expect(typeof result === 'number').toBeTruthy();
    });
})
