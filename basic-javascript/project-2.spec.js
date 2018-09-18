const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
it('should greet the user with a language', () => {
    const expected = 'Guten Tag!';
    const actual = funcs.greeting('GERMAN');

    expect(actual).toBe(expected);
    expect(funcs.greeting('spanish')).toBe('Hola!');
    expect(funcs.greeting("eng")).toBe('Hello!');
})