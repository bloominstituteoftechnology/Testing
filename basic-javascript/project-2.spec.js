const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

// start testin

    it('can get the biggest number', () => {

        expect(funcs.getBiggest(4, 8)).toEqual(8);
        expect(funcs.getBiggest(-4, -8)).toEqual(-4);
        expect(funcs.getBiggest(48, 49)).toEqual(49);

    });

    it('convert greeting to english', () => {

        expect(funcs.greeting('German')).toMatch('Guten Tag!');
        expect(funcs.greeting('Spanish')).toMatch('Hola!');
        expect(funcs.greeting()).toMatch('Hello!');

    });

    it('is it ten or five', () => {
        expect(funcs.isTenOrFive(10)).toBeTruthy();
        expect(funcs.isTenOrFive(5)).toBeTruthy();
        expect(funcs.isTenOrFive(4)).toBeFalsy();
    })

    it('is it between 20 and 50', () => {
        expect(funcs.isInRange(49)).toBeTruthy();
        expect(funcs.isInRange(21)).toBeTruthy();
        expect(funcs.isInRange(19)).toBeFalsy();
        expect(funcs.isInRange(51)).toBeFalsy();
    })


    it('to fizz or notto buzz', () => {

        expect(funcs.fizzBuzz(30)).toMatch('fizzbuzz');
        expect(funcs.fizzBuzz(27)).toMatch('fizz');
        expect(funcs.fizzBuzz(25)).toMatch('buzz');
        expect(funcs.fizzBuzz(23)).toEqual(23);

    });

    it('is it prime or nah', () => {

        expect(funcs.isPrime(53)).toBeTruthy();
        expect(funcs.isPrime(49)).toBeFalsy();
        expect(funcs.isPrime(1)).toBeFalsy();
        expect(funcs.isPrime(-1)).toBeFalsy();

    });
  
    it('return the first item in the array', () => {

        expect(funcs.returnFirst(['twenty-one', 'twenty-two'])).toMatch('twenty-one');
        expect(funcs.returnFirst([16, 21])).toEqual(16);
        expect(funcs.returnFirst([21, 888])).toEqual(21);

    });

    it('return the last item in the array', () => {

        expect(funcs.returnLast(['twenty-one', 'twenty-two'])).toMatch('twenty-two');
        expect(funcs.returnLast([16, 21])).toEqual(21);
        expect(funcs.returnLast([21, 888])).toEqual(888);

    });
 
    it('can get the length of an array', () => {
// Why can't I use .toHaveLength()
        expect(funcs.getArrayLength(['Alice', 'Bob', 'Steve', 'Bon', 'Manuel'])).toEqual(5);
        expect(funcs.getArrayLength([16, 4, 22, 2, 15, 24, 11])).toEqual(7);
        expect(funcs.getArrayLength([900, 5, 22, 2, 15, 24, 11, 16, 4, 22, 2, 15, 24, 11])).toEqual(14);

    });

    it('can increment each number by one', () => {
      
        expect(funcs.incrementByOne([16, 4, 22, 2, 15, 24, 11])).toEqual([17, 5, 23, 3, 16, 25, 12]);
        
    });

    it('can add item to array', () => {

        expect(funcs.addItemToArray(['Bob', 'Steve', 'Bon'], 'Manuel')).toContain('Manuel');
        expect(funcs.addItemToArray(['Bob', 'Steve', 'Bon', 'Manuel'], 'Alice')).toContain('Alice');

    });

    it('can add item to front of array', () => {

        expect(funcs.addItemToFront(['Bob', 'Steve', 'Bon', 'Manuel'], 'Alice')).toEqual(['Alice', 'Bob', 'Steve', 'Bon', 'Manuel']);        

    });


    it('convert list of words into sentence', () => {

        expect(funcs.wordsToSentence(['Hi', 'my', 'name', 'is', 'Blake'])).toMatch('Hi my name is Blake');

    });

    it('does this contain that', () => {

        expect(funcs.contains(['Bob', 'Steve', 'Bon'], 'Manuel')).toBeFalsy();
        expect(funcs.contains(['Bob', 'Steve', 'Bon', 'Manuel'], 'Manuel')).toBeTruthy();

    });
  
    it('find the sum of an array of numbers', () => {

        expect(funcs.addNumbers([16, 4, 22, 2, 15, 24, 11])).toEqual(94);
        expect(funcs.addNumbers([900, 5, 22, 2, 15, 24, 11, 16, 4, 22, 2, 15, 24, 11])).toEqual(1073);

    });

    it('find average of an array of test', () => {

        expect(funcs.averageTestScore([86, 74, 62, 25, 95, 74, 61])).toEqual(68.14285714285714);
        expect(funcs.averageTestScore([90, 55, 88, 29, 51, 76, 91, 76, 44, 88, 62, 60, 74, 71])).toEqual(68.21428571428571);

    });

    it('find the larget number', () => {

        expect(funcs.largestNumber([16, 4, 22, 2, 15, 24, 11])).toEqual(24);
        expect(funcs.largestNumber([900, 5, 22, 2, 15, 24, 11, 16, 4, 22, 2, 15, 24, 11])).toEqual(900);

    });