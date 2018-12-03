const f = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

test('getBiggest', () => {
    expect(f.getBiggest(2, 3)).toBe(3);
});

test('greeting', () => {
    expect(f.greeting('German')).toBe('Guten Tag!');
});

test('isTenOrFive', () => {
    expect(f.isTenOrFive(10)).toBeTruthy();
});

test('isInRange', () => {
    expect(f.isInRange(30)).toBeTruthy();
});

test('is Integer', () => {
    expect(f.isInteger(2)).toBeTruthy();
});

test('fizzbuzz', () => {
    expect(f.fizzBuzz(15)).toBe('fizzbuzz');
});

test('is Prime', () => {
    expect(f.isPrime(11)).toBeTruthy();
});

test('returnfirst', () => {
    expect(f.returnFirst(['brandon', 'test'])).toEqual('brandon');
});

test('return last', () => {
    expect(f.returnLast(['brandon', 'test'])).toEqual('test');
});

test('get arr length', () => {
    expect(f.getArrayLength(['brandon'])).toEqual(1);
});

test('incrementbyone', () => {
    expect(f.incrementByOne([1, 2])).toEqual([2, 3]);
});

test('add item to array', () => {
    expect(f.addItemToArray(['brandon'], 'test')).toEqual(['brandon', 'test']);
});

test('add item to front', () => {
    expect(f.addItemToFront(['brandon'], 'test')).toEqual(['test', 'carlo']);
});

test('words to sentence', () => {
    expect(f.wordsToSentence(['hey', 'dude'])).toEqual('hey dude');
});

test('contains', () => {
    expect(f.contains(['brandon', 'test'], 'brandon')).toBeTruthy();
});

test('add numbers', () => {
    expect(f.addNumbers([2, 3, 4])).toEqual(9);
});

test('average test score', () => {
    expect(f.averageTestScore([90, 95, 92.5])).toEqual(92.5);
});

test('largest numbers', () => {
    expect(f.largestNumber([30, 20, 100])).toEqual(100);
});