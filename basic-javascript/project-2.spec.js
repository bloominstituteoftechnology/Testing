const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

it('should return largest number', () => {
    const getBiggest = funcs.getBiggest;
    x = 25;
    y = 36;
    answer = getBiggest(x,y)
    expect(answer).toBe(y)
});

it('should return greeting', () => {
    const greeting = funcs.greeting;
    const Spanish = greeting('Spanish');
    const German = greeting('German');
    const Default = greeting();
    expect(Spanish).toBe('Hola!');
    expect(German).toBe('Guten Tag!');
    expect(Default).toBe('Hello!');
});

it('should be 10 or 5', () => {
    const isTenOrFive = funcs.isTenOrFive;
    num = (5 || 10);
    const answer = isTenOrFive(num);
    expect(answer).toBe(true);
});

it('should return a number between 50 and 20', () => {
    const isInRange = funcs.isInRange;
    const answer = isInRange(25);
    expect(answer).toBe(true);
});

it('should return the integer', () => {
    const isInteger = funcs.isInteger;
    const answer = isInteger(num);
    expect(answer).toBe(true);
});



