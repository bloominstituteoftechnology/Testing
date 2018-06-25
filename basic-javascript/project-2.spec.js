const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2', () => {
    describe('getBiggest', () => {
        it('returns only the biggest number', ()=> {
        expect(funcs.getBiggest(1,2)).toBe(2);
        expect(funcs.getBiggest(0,-3)).toBe(0);
        expect(funcs.getBiggest(undefined, 10)).toBe(10);
        expect(funcs.getBiggest(true, false)).toBe(true);
    });
});


});