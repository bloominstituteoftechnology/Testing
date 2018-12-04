const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2', () => {
    describe('getBiggest function', () => {
        it('If x is bigger than y, it should return x', () => {
            expect(funcs.getBiggest(5,1)).toBe(5);
        })
        it('If y is bigger than x, it should return y', () => {
            expect(funcs.getBiggest(1,5)).toBe(5);
        })
        it('If x is equal to y, it should return y', () => {
            expect(funcs.getBiggest(5,5)).toBe(5);
        })
        it('If x or y is NaN, it shold return null', () => {
            expect(funcs.getBiggest('5',5)).toBe(null);
        })
    })

    describe('gretting Function', () => {
        it('language other than German and Spanish, it should return Hello!', () => {
            expect(funcs.greeting('english')).toBe('Hello!');
        })
        it('If Spanish was enter, it should return Hola!', () => {
            expect(funcs.greeting('Spanish')).toBe('Hola!');
        })
        it('If spanish was enter, it should return Hola!', () => {
            expect(funcs.greeting('spanish')).toBe('Hola!');
        })
        it('If German was enter, it should return Guten Tag!', () => {
            expect(funcs.greeting('German')).toBe('Guten Tag!');
        })
        it('If german was enter, it should return Guten Tag!', () => {
            expect(funcs.greeting('german')).toBe('Guten Tag!');
        })
    })

    describe('isTenOrFive Function', () => {
        it('If number equal five, it should return true', () => {
            expect(funcs.isTenOrFive(5)).toBe(true);
        })
        it('If number equal ten, it should return true', () => {
            expect(funcs.isTenOrFive(10)).toBe(true);
        })
        it('If number equal to number other than ten, it should return false', () => {
            expect(funcs.isTenOrFive(15)).toBe(false);
        })
        it('if number is equal to string or anything other than number, it should return null', () => {
            expect(funcs.isTenOrFive('15')).toBe(null);
            expect(funcs.isTenOrFive({})).toBe(null);
            expect(funcs.isTenOrFive('sfs/./')).toBe(null);
            expect(funcs.isTenOrFive()).toBe(null);
        })
    })

    describe('isInRange Function', () => {
        it('If number is greater than 20, and less than 50, it should return true', () => {
            expect(funcs.isInRange(48)).toBe(true);
        })
        it('If number is greter than 20, and greter than 50, it should return false', () => {
            expect(funcs.isInRange(51)).toBe(false);
        })
        it('If number is least than 20, and less than 50, it should return false', () => {
            expect(funcs.isInRange(19)).toBe(false);
        })
        it('If number is equal to 20, it should return false', () => {
            expect(funcs.isInRange(20)).toBe(false);
        })
        it('If number is equal to 50, it should return false', () => {
            expect(funcs.isInRange(50)).toBe(false);
        })
        it('If number is other than number, such as string, it should return null', () => {
            expect(funcs.isInRange('sss')).toBe(null);
            expect(funcs.isInRange()).toBe(null);
        })
    })
})