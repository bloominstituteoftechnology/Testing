const {multiplyByTen, subtractFive, areSameLength, areEqual, lessThanNinety } = require('./project-1');

// start testing!

describe('jest', ()=>{
  test('jest runs', () =>{

  });
});

describe('multiply by ten', () => {
  test('returns a number', ()=>{
    //Arrange: Setup the world
      const input = 9;
    //Act: Execute the code youre testing
      const result = multiplyByTen(input);
    //Assert: Check that it works
      expect(typeof result === 'number').toBeTruthy();
    });
})

describe('subtract by five', () => {
  test('returns a number', ()=>{
    //Arrange: Setup the world
      const input = 9;
    //Act: Execute the code youre testing
      const result = subtractFive(input);
    //Assert: Check that it works
      expect(typeof result === 'number').toBeTruthy();
    });
});

describe('Strings are the same length', () => {
  test('returns a boolean', ()=>{
    //Arrange: Setup the world
      const str1 = 'hello world';
      const str2 = 'hello world';
    //Act: Execute the code youre testing
      const result = areSameLength(str1, str2);
    //Assert: Check that it works
      expect(result).toBeDefined();
    });
});

describe('numbers are equal', () => {
  test('returns a boolean', ()=>{
    //Arrange: Setup the world
      const num1 = 1;
      const num2 = 7;
    //Act: Execute the code youre testing
      const result = areEqual(num1, num2);
    //Assert: Check that it works
      expect(result).toBeDefined();
    });
});

describe('Number is less than 90', () => {
  test('returns a boolean', ()=>{
    //Arrange: Setup the world
      const num = 1;
    //Act: Execute the code youre testing
      const result = lessThanNinety(num);
    //Assert: Check that it works
      expect(result).toBeDefined();
    });
});




