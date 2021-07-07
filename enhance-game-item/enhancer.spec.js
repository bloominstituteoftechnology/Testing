const funcs = require('./enhancer.js');

const defaultItem = { level: 0, durability: 100, fails: 0 };


describe('enhance function', () => {
    it('should increase level by 1', () => {
        const item = { ...defaultItem };

        const actual = funcs.enhance(item, true); //return an item
     
        expect(actual.level).toBe(1);
        expect(funcs.enhance(actual, true).level).toBe(2);
        expect(funcs.enhance(actual, true).level).toBe(3);
    })
    test('levels should change to Roman numerals after 15', () => {
        const item = { ...defaultItem, level: 15 }

        const actual = funcs.enhance(item, true);

        expect(actual.level).toBe('I');
        expect(funcs.enhance(actual, true).level).toBe('II');
    })
    it('should not increase past V', () => {
        const item = { ...defaultItem, level: 'V' };

        const actual = funcs.enhance(item, true);
     
        expect(actual.level).toBe('V');
    })
    it('should reset the fail count to 0', () => {
        const item = { ...defaultItem, fails: 15 }

        const actual = funcs.enhance(item, true);

        expect(actual.fails).toBe(0);
    })
    it('should fail if passed false', () => {
        const item = { ...defaultItem };

        const actual = funcs.enhance(item, false);

        expect(actual.fails).toBe(1);
    })
});

describe('fail function', () => {
    it('should decrease durability by 5 on failure', () => {
        const item = { ...defaultItem };
   
        const actual = funcs.fail(item);

        expect(actual.durability).toBe(95);
        expect(funcs.fail(actual).durability).toBe(90);
    })
    it('should not decrease durability below 0', () => {
        const item = { ...defaultItem, durability: 10 };
   
        const actual = funcs.fail(item);

        expect(actual.durability).toBe(5);
        expect(funcs.fail(actual).durability).toBe(0);
        expect(funcs.fail(actual).durability).toBe(0);
    })
    it('should increase the fail count by 1', () => {
        const item = { ...defaultItem, fails: 10}

        const actual = funcs.fail(item);

        expect(actual.fails).toBe(11);
        expect(funcs.fail(actual).fails).toBe(12);
    })
    it('should increase the fail count by 2 for level I', () => {
        const item = { ...defaultItem, level: 15 }

        const actual = funcs.enhance(item, true);
        expect(actual.level).toBe('I');
        expect(actual.fails).toBe(0);

        const actual2 = funcs.fail(actual);
        expect(actual2.level).toBe('I');
        expect(actual2.fails).toBe(2);
    })
    it('should increase the fail count by 3 for level II', () => {
        const item = { ...defaultItem, level: 'II' }
        expect(item.level).toBe('II');

        const actual = funcs.fail(item);
        expect(actual.level).toBe('II');
        expect(actual.fails).toBe(3);
    })
    it('should increase the fail count by 5 for level IV', () => {
        const item = { ...defaultItem, level: 'IV' }
        expect(item.level).toBe('IV');

        const actual = funcs.fail(item);
        expect(actual.level).toBe('IV');
        expect(actual.fails).toBe(5);
    })
});

describe('repair function', () => {
    it('should increase durability by 10', () => {
        const item = { ...defaultItem, durability: 25 };
   
        const actual = funcs.repair(item);

        expect(actual.durability).toBe(35);
        expect(funcs.repair(actual).durability).toBe(45);
    })
    it('should not increase durability past 100', () => {
        const item = { ...defaultItem, durability: 90 };
   
        const actual = funcs.repair(item);
        expect(actual.durability).toBe(100);
        expect(funcs.repair(actual).durability).toBe(100);

        const actual2 = funcs.fail(actual);
        expect(actual2.durability).toBe(95);

        const actual3 = funcs.repair(actual2);
        expect(actual3.durability).toBe(95);
    })
});