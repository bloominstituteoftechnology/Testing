const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe("getBiggest", () => {
  

    test("should return a bigger number when argument with two numbers are sent", () => {
      expect(funcs.getBiggest(2,5)).toBe(5);
      expect(funcs.getBiggest(10, 4)).toBe(10);
    });


    it('should return null when any of the arguments are not strings', () => {
      expect(funcs.getBiggest('1', 1)).toBe(null);
      expect(funcs.getBiggest([], 'a')).toBe(null);
      expect(funcs.getBiggest('1', {})).toBe(null);
    });
  });

  describe("greeting", () => {
  

    test("German", () => {
      expect(funcs.greeting("German")).toBe('Guten Tag!');
    });
    test("Default", () => {
      expect(funcs.greeting("KR")).toBe('Hello!');
    });
  });

  test("ten or Five 10", () => {
    expect(funcs.isTenOrFive(10)).toBe(true);
  });

  test("isInRange 50/20, 10", () => {
    expect(funcs.isInRange(10)).toBe(false);
  });



  test('is Integer', () => {
  
    expect(funcs.isInteger(2)).toBeTruthy();
  });
  
  test('fizzbuzz', () => {
    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
  });
  
  test('is Prime', () => {
    expect(funcs.isPrime(11)).toBeTruthy();
  });
  
  test('returnfirst', () => {
    expect(funcs.returnFirst(['carlo', 'test'])).toEqual('carlo');
  });
  
  test('return last', () => {
    expect(funcs.returnLast(['carlo', 'test'])).toEqual('test');
  });
  
  test('get arr length', () => {
    expect(funcs.getArrayLength(['carlo'])).toEqual(1);
  });
  
  test('incrementbyone', () => {
    expect(funcs.incrementByOne([1, 2])).toEqual([2, 3]);
  });
  
  test('add item to array', () => {
    expect(funcs.addItemToArray(['carlo'], 'test')).toEqual(['carlo', 'test']);
  });
  
  test('add item to front', () => {
    expect(funcs.addItemToFront(['carlo'], 'test')).toEqual(['test', 'carlo']);
  });
  
  test('words to sentence', () => {
    expect(funcs.wordsToSentence(['sup', 'dude'])).toEqual('sup dude');
  });
  
  test('contains', () => {
    expect(funcs.contains(['carlo', 'test'], 'carlo')).toBeTruthy();
  });
  
  test('add numbers', () => {
    expect(funcs.addNumbers([2, 3, 4])).toEqual(9);
  });
  
  test('average test score', () => {
    expect(funcs.averageTestScore([90, 95, 92.5])).toEqual(92.5);
  });
  
  test('largest numbers', () => {
    expect(funcs.largestNumber([30, 20, 100])).toEqual(100);
  });

