const helpers = require('./project-1');

// Some things to test:
// 
// Type Handling (string, number, boolean, etc)


/// --- Project One Tests ---
describe('project-1.js', () => {
    // -- Multiply by 10 --
    describe('Multiply by 10', () => {
        // Return Value After Expected Input
        it('Should return the provided number multiplied by 10', () => {
            let expected = 420;
            const actual = helpers.multiplyByTen(42);
            expect(actual).toBe(expected);
        })

        // Return Value After Empty Input
        it('Should return 0 if no input is provided', () => {
            let expected = 0;
            const actual = helpers.multiplyByTen();
            expect(actual).toBe(expected);
        })

        // Return Values After Unexpected Inputs
        describe('Unexpected Inputs', () => {
            // Return Value After Boolean Input
            it('Should throw an error if a boolean is provided', () => {
                const actual = () => { helpers.multiplyByTen(true) };
                expect(actual).toThrow();
            })
            // Return Value After String Input
            it('Should throw an error if a string is provided', () => {
                const actual = () => { helpers.multiplyByTen('test') };
                expect(actual).toThrow();
            })
            // Return Value After Array Input
            it('Should throw an error if an array is provided', () => {
                const actual = () => { helpers.multiplyByTen([42]) };
                expect(actual).toThrow();
            })
            // Return Value After Object Input
            it('Should throw an error if an object is provided', () => {
                const actual = () => { helpers.multiplyByTen({number: 42}) };
                expect(actual).toThrow();
            })
            // Return Value After Function Input
            it('Should throw an error if a function is provided', () => {
                const actual = () => { helpers.multiplyByTen(() => 42) };
                expect(actual).toThrow();
            })           
        });
    })

    // -- Subtract by 5 --
    describe('Subtract by 5', () => {
        // Return Value After Expected Input
        it('Should return the provided number minus 5', () => {
            let expected = 37;
            const actual = helpers.subtractFive(42);
            expect(actual).toBe(expected);
        })

        // Return Value After Empty Input
        it('Should return 0 if no input is provided', () => {
            let expected = 0;
            const actual = helpers.subtractFive();
            expect(actual).toBe(expected);
        })

        // Return Values After Unexpected Inputs
        describe('Unexpected Inputs', () => {
            // Return Value After Boolean Input
            it('Should throw an error if a boolean is provided', () => {
                const actual = () => { helpers.subtractFive(true) };
                expect(actual).toThrow();
            })
            // Return Value After String Input
            it('Should throw an error if a string is provided', () => {
                const actual = () => { helpers.subtractFive('test') };
                expect(actual).toThrow();
            })
            // Return Value After Array Input
            it('Should throw an error if an array is provided', () => {
                const actual = () => { helpers.subtractFive([42]) };
                expect(actual).toThrow();
            })
            // Return Value After Object Input
            it('Should throw an error if an object is provided', () => {
                const actual = () => { helpers.subtractFive({number: 42}) };
                expect(actual).toThrow();
            })
            // Return Value After Function Input
            it('Should throw an error if a function is provided', () => {
                const actual = () => { helpers.subtractFive(() => 42) };
                expect(actual).toThrow();
            })           
        });
    })

    // -- Are Same Length? --
    describe('Are Same Length?', () => {
        // Return Value After Expected Inputs
        // Return Value if Inputs Lengths are Equal
        it('Should return true if the provided strings are the same length', () => {
            let expected = true;
            const actual = helpers.areSameLength('Pikachu! I choose you!','Nidoran! I choose you!');
            expect(actual).toBe(expected);
        })

        // Return Value After Helper Length
        it('Should return false if the provided strings are not the same length', () => {
            let expected = false;
            const actual = helpers.areSameLength('Pikachu! I choose you!','Nidoran-- Go!');
            expect(actual).toBe(expected);
        })

        // Return Value After Empty Input
        it('Should return false if no input is provided', () => {
            let expected = false;
            const actual = helpers.areSameLength();
            expect(actual).toBe(expected);
        })

        it('Should return false if only one input is provided', () => {
            let expected = false;
            const actual = helpers.areSameLength('Nidoran! I choose you!');
            expect(actual).toBe(expected);
        })

        // Return Values After Unexpected Inputs (String 1)
        describe('Unexpected String 1 Input', () => {
            // Return Value After Boolean Input
            it('Should throw an error if a boolean is provided', () => {
                const actual = () => { helpers.areSameLength('Pikachu! I choose you!', true) };
                expect(actual).toThrow();
            })
            // Return Value After Number Input
            it('Should throw an error if a number is provided', () => {
                const actual = () => { helpers.areSameLength('Pikachu! I choose you!', 42) };
                expect(actual).toThrow();
            })
            // Return Value After Array Input
            it('Should throw an error if an array is provided', () => {
                const actual = () => { helpers.areSameLength('Pikachu! I choose you!', ['Nidoran! I choose you!']) };
                expect(actual).toThrow();
            })
            // Return Value After Object Input
            it('Should throw an error if an object is provided', () => {
                const actual = () => { helpers.areSameLength('Pikachu! I choose you!', {string: 'Nidoran! I choose you!'}) };
                expect(actual).toThrow();
            })
            // Return Value After Function Input
            it('Should throw an error if a function is provided', () => {
                const actual = () => { helpers.areSameLength('Pikachu! I choose you!', () => 'Nidoran! I choose you!') };
                expect(actual).toThrow();
            })           
    })

        // Return Values After Unexpected Inputs (String 2)
        describe('Unexpected String 2 Input', () => {
            // Return Value After Boolean Input
            it('Should throw an error if a boolean is provided', () => {
                const actual = () => { helpers.areSameLength(true, 'Nidoran! I choose you!') };
                expect(actual).toThrow();
            })
            // Return Value After Number Input
            it('Should throw an error if a number is provided', () => {
                const actual = () => { helpers.areSameLength(42, 'Nidoran! I choose you!') };
                expect(actual).toThrow();
            })
            // Return Value After Array Input
            it('Should throw an error if an array is provided', () => {
                const actual = () => { helpers.areSameLength(['Nidoran! I choose you!'], 'Nidoran! I choose you!') };
                expect(actual).toThrow();
            })
            // Return Value After Object Input
            it('Should throw an error if an object is provided', () => {
                const actual = () => { helpers.areSameLength({string: 'Nidoran! I choose you!'}, 'Nidoran! I choose you!') };
                expect(actual).toThrow();
            })
            // Return Value After Function Input
            it('Should throw an error if a function is provided', () => {
                const actual = () => { helpers.areSameLength(() => 'Pikachu! I choose you!', 'Nidoran! I choose you!') };
                expect(actual).toThrow();
            })           
    })
    
})

 // -- Are Equal? --
 describe('Are Equal?', () => {
    // Return Value After Expected Inputs
    // Return Value if Inputs are Equal
    it('Should return true if the provided values are equal (number test)', () => {
        let expected = true;
        const actual = helpers.areEqual(42, 42);
        expect(actual).toBe(expected);
    })

    // Return Value After Helper Length
    it('Should return false if the provided strings are not equal', () => {
        let expected = false;
        const actual = helpers.areEqual(42, '42');
        expect(actual).toBe(expected);
    })

    // Return Value After Empty Input
    it('Should return false if no input is provided', () => {
        let expected = false;
        const actual = helpers.areEqual();
        expect(actual).toBe(expected);
    })

    it('Should return false if only one input is provided', () => {
        let expected = false;
        const actual = helpers.areEqual('Nidoran! I choose you!');
        expect(actual).toBe(expected);
    })

})

    // -- Less Than 90 --
    describe('Less Than 90', () => {
        // Return Value After Expected Input
        it('Should return true if the provided number is less than 90', () => {
            let expected = true;
            const actual = helpers.lessThanNinety(42);
            expect(actual).toBe(expected);
        })

        it('Should return false if the provided number is greater than or equal to 90', () => {
            let expected = false;
            const actual = helpers.lessThanNinety(126);
            expect(actual).toBe(expected);
        })

        // Return Value After Empty Input
        it('Should return false if no input is provided', () => {
            let expected = false;
            const actual = helpers.lessThanNinety();
            expect(actual).toBe(expected);
        })

        // Return Values After Unexpected Inputs
        describe('Unexpected Inputs', () => {
            // Return Value After Boolean Input
            it('Should throw an error if a boolean is provided', () => {
                const actual = () => { helpers.lessThanNinety(true) };
                expect(actual).toThrow();
            })
            // Return Value After String Input
            it('Should throw an error if a string is provided', () => {
                const actual = () => { helpers.lessThanNinety('test') };
                expect(actual).toThrow();
            })
            // Return Value After Array Input
            it('Should throw an error if an array is provided', () => {
                const actual = () => { helpers.lessThanNinety([42]) };
                expect(actual).toThrow();
            })
            // Return Value After Object Input
            it('Should throw an error if an object is provided', () => {
                const actual = () => { helpers.lessThanNinety({number: 42}) };
                expect(actual).toThrow();
            })
            // Return Value After Function Input
            it('Should throw an error if a function is provided', () => {
                const actual = () => { helpers.lessThanNinety(() => 42) };
                expect(actual).toThrow();
            })           
        });
    })

    // -- Less Than 90 --
    describe('Greater Than 50', () => {
        // Return Value After Expected Input
        it('Should return true if the provided number is greater than 50', () => {
            let expected = true;
            const actual = helpers.greaterThanFifty(84);
            expect(actual).toBe(expected);
        })

        it('Should return false if the provided number is less than or equal to 50', () => {
            let expected = false;
            const actual = helpers.greaterThanFifty(42);
            expect(actual).toBe(expected);
        })

        // Return Value After Empty Input
        it('Should return false if no input is provided', () => {
            let expected = false;
            const actual = helpers.greaterThanFifty();
            expect(actual).toBe(expected);
        })

        // Return Values After Unexpected Inputs
        describe('Unexpected Inputs', () => {
            // Return Value After Boolean Input
            it('Should throw an error if a boolean is provided', () => {
                const actual = () => { helpers.greaterThanFifty(true) };
                expect(actual).toThrow();
            })
            // Return Value After String Input
            it('Should throw an error if a string is provided', () => {
                const actual = () => { helpers.greaterThanFifty('test') };
                expect(actual).toThrow();
            })
            // Return Value After Array Input
            it('Should throw an error if an array is provided', () => {
                const actual = () => { helpers.greaterThanFifty([42]) };
                expect(actual).toThrow();
            })
            // Return Value After Object Input
            it('Should throw an error if an object is provided', () => {
                const actual = () => { helpers.greaterThanFifty({number: 42}) };
                expect(actual).toThrow();
            })
            // Return Value After Function Input
            it('Should throw an error if a function is provided', () => {
                const actual = () => { helpers.greaterThanFifty(() => 42) };
                expect(actual).toThrow();
            })           
        });
    })

    // -- Add --
    describe('Add', () => {
        // Return Value After Expected Input
        it('Should return the sum of the provided numbers', () => {
            let expected = 42;
            const actual = helpers.add(40, 2);
            expect(actual).toBe(expected);
        })

        // Return Value After Empty Input
        it('Should return 0 if no input is provided', () => {
            let expected = 0;
            const actual = helpers.add();
            expect(actual).toBe(expected);
        })

        // Return Values After Unexpected Inputs (x)
        describe('Unexpected Inputs (x)', () => {
            // Return Value After Boolean Input
            it('Should throw an error if a boolean is provided', () => {
                const actual = () => { helpers.add(true, 2) };
                expect(actual).toThrow();
            })
            // Return Value After String Input
            it('Should throw an error if a string is provided', () => {
                const actual = () => { helpers.add('test', 2) };
                expect(actual).toThrow();
            })
            // Return Value After Array Input
            it('Should throw an error if an array is provided', () => {
                const actual = () => { helpers.add([42], 2) };
                expect(actual).toThrow();
            })
            // Return Value After Object Input
            it('Should throw an error if an object is provided', () => {
                const actual = () => { helpers.add({number: 42}, 2) };
                expect(actual).toThrow();
            })
            // Return Value After Function Input
            it('Should throw an error if a function is provided', () => {
                const actual = () => { helpers.add(() => 42, 2) };
                expect(actual).toThrow();
            })           
        });
    
        // Return Values After Unexpected Inputs (y)
        describe('Unexpected Inputs (y)', () => {
            // Return Value After Boolean Input
            it('Should throw an error if a boolean is provided', () => {
                const actual = () => { helpers.add(40, true) };
                expect(actual).toThrow();
            })
            // Return Value After String Input
            it('Should throw an error if a string is provided', () => {
                const actual = () => { helpers.add(40, 'test') };
                expect(actual).toThrow();
            })
            // Return Value After Array Input
            it('Should throw an error if an array is provided', () => {
                const actual = () => { helpers.add(40, [42]) };
                expect(actual).toThrow();
            })
            // Return Value After Object Input
            it('Should throw an error if an object is provided', () => {
                const actual = () => { helpers.add(40, {number: 42}) };
                expect(actual).toThrow();
            })
            // Return Value After Function Input
            it('Should throw an error if a function is provided', () => {
                const actual = () => { helpers.add(40, () => 42) };
                expect(actual).toThrow();
            })           
        });
    })

    // -- Subtract --
    describe('Subtract', () => {
        // Return Value After Expected Input
        it('Should return the result of the second number subtracted from the first number.', () => {
            let expected = 42;
            const actual = helpers.subtract(44, 2);
            expect(actual).toBe(expected);
        })

        // Return Value After Empty Input
        it('Should return 0 if no input is provided', () => {
            let expected = 0;
            const actual = helpers.subtract();
            expect(actual).toBe(expected);
        })

        // Return Values After Unexpected Inputs (x)
        describe('Unexpected Inputs (x)', () => {
            // Return Value After Boolean Input
            it('Should throw an error if a boolean is provided', () => {
                const actual = () => { helpers.subtract(true, 2) };
                expect(actual).toThrow();
            })
            // Return Value After String Input
            it('Should throw an error if a string is provided', () => {
                const actual = () => { helpers.subtract('test', 2) };
                expect(actual).toThrow();
            })
            // Return Value After Array Input
            it('Should throw an error if an array is provided', () => {
                const actual = () => { helpers.subtract([42], 2) };
                expect(actual).toThrow();
            })
            // Return Value After Object Input
            it('Should throw an error if an object is provided', () => {
                const actual = () => { helpers.subtract({number: 42}, 2) };
                expect(actual).toThrow();
            })
            // Return Value After Function Input
            it('Should throw an error if a function is provided', () => {
                const actual = () => { helpers.subtract(() => 42, 2) };
                expect(actual).toThrow();
            })           
        });
    
        // Return Values After Unexpected Inputs (y)
        describe('Unexpected Inputs (y)', () => {
            // Return Value After Boolean Input
            it('Should throw an error if a boolean is provided', () => {
                const actual = () => { helpers.subtract(40, true) };
                expect(actual).toThrow();
            })
            // Return Value After String Input
            it('Should throw an error if a string is provided', () => {
                const actual = () => { helpers.subtract(40, 'test') };
                expect(actual).toThrow();
            })
            // Return Value After Array Input
            it('Should throw an error if an array is provided', () => {
                const actual = () => { helpers.subtract(40, [42]) };
                expect(actual).toThrow();
            })
            // Return Value After Object Input
            it('Should throw an error if an object is provided', () => {
                const actual = () => { helpers.subtract(40, {number: 42}) };
                expect(actual).toThrow();
            })
            // Return Value After Function Input
            it('Should throw an error if a function is provided', () => {
                const actual = () => { helpers.subtract(40, () => 42) };
                expect(actual).toThrow();
            })           
        });
    })


    // -- Divide --
    describe('Divide', () => {
        // Return Value After Expected Input
        it('Should return the result of a quotient of the first and second numbers provided.', () => {
            let expected = 42;
            const actual = helpers.divide(84, 2);
            expect(actual).toBe(expected);
        })

        it('Should throw an error if 0 is provided as the denominator', () => {
            const actual = () => helpers.divide(42, 0);
            expect(actual).toThrow();
        })

        // Return Value After Empty Input
        it('Should return 0 if no input is provided', () => {
            let expected = 0;
            const actual = helpers.divide();
            expect(actual).toBe(expected);
        })

        // Return Values After Unexpected Inputs (x)
        describe('Unexpected Inputs (x)', () => {
            // Return Value After Boolean Input
            it('Should throw an error if a boolean is provided', () => {
                const actual = () => { helpers.divide(true, 2) };
                expect(actual).toThrow();
            })
            // Return Value After String Input
            it('Should throw an error if a string is provided', () => {
                const actual = () => { helpers.divide('test', 2) };
                expect(actual).toThrow();
            })
            // Return Value After Array Input
            it('Should throw an error if an array is provided', () => {
                const actual = () => { helpers.divide([42], 2) };
                expect(actual).toThrow();
            })
            // Return Value After Object Input
            it('Should throw an error if an object is provided', () => {
                const actual = () => { helpers.divide({number: 42}, 2) };
                expect(actual).toThrow();
            })
            // Return Value After Function Input
            it('Should throw an error if a function is provided', () => {
                const actual = () => { helpers.divide(() => 42, 2) };
                expect(actual).toThrow();
            })           
        });
    
        // Return Values After Unexpected Inputs (y)
        describe('Unexpected Inputs (y)', () => {
            // Return Value After Boolean Input
            it('Should throw an error if a boolean is provided', () => {
                const actual = () => { helpers.divide(40, true) };
                expect(actual).toThrow();
            })
            // Return Value After String Input
            it('Should throw an error if a string is provided', () => {
                const actual = () => { helpers.divide(40, 'test') };
                expect(actual).toThrow();
            })
            // Return Value After Array Input
            it('Should throw an error if an array is provided', () => {
                const actual = () => { helpers.divide(40, [42]) };
                expect(actual).toThrow();
            })
            // Return Value After Object Input
            it('Should throw an error if an object is provided', () => {
                const actual = () => { helpers.divide(40, {number: 42}) };
                expect(actual).toThrow();
            })
            // Return Value After Function Input
            it('Should throw an error if a function is provided', () => {
                const actual = () => { helpers.divide(40, () => 42) };
                expect(actual).toThrow();
            })           
        });
    })


    // -- Multiply --
    describe('Multiply', () => {
        // Return Value After Expected Input
        it('Should return the product of two provided numbers.', () => {
            let expected = 42;
            const actual = helpers.multiply(21, 2);
            expect(actual).toBe(expected);
        })

        // Return Value After Empty Input
        it('Should return 0 if no input is provided', () => {
            let expected = 0;
            const actual = helpers.multiply();
            expect(actual).toBe(expected);
        })

        // Return Values After Unexpected Inputs (x)
        describe('Unexpected Inputs (x)', () => {
            // Return Value After Boolean Input
            it('Should throw an error if a boolean is provided', () => {
                const actual = () => { helpers.multiply(true, 2) };
                expect(actual).toThrow();
            })
            // Return Value After String Input
            it('Should throw an error if a string is provided', () => {
                const actual = () => { helpers.multiply('test', 2) };
                expect(actual).toThrow();
            })
            // Return Value After Array Input
            it('Should throw an error if an array is provided', () => {
                const actual = () => { helpers.multiply([42], 2) };
                expect(actual).toThrow();
            })
            // Return Value After Object Input
            it('Should throw an error if an object is provided', () => {
                const actual = () => { helpers.multiply({number: 42}, 2) };
                expect(actual).toThrow();
            })
            // Return Value After Function Input
            it('Should throw an error if a function is provided', () => {
                const actual = () => { helpers.multiply(() => 42, 2) };
                expect(actual).toThrow();
            })           
        });
    
        // Return Values After Unexpected Inputs (y)
        describe('Unexpected Inputs (y)', () => {
            // Return Value After Boolean Input
            it('Should throw an error if a boolean is provided', () => {
                const actual = () => { helpers.multiply(40, true) };
                expect(actual).toThrow();
            })
            // Return Value After String Input
            it('Should throw an error if a string is provided', () => {
                const actual = () => { helpers.multiply(40, 'test') };
                expect(actual).toThrow();
            })
            // Return Value After Array Input
            it('Should throw an error if an array is provided', () => {
                const actual = () => { helpers.multiply(40, [42]) };
                expect(actual).toThrow();
            })
            // Return Value After Object Input
            it('Should throw an error if an object is provided', () => {
                const actual = () => { helpers.multiply(40, {number: 42}) };
                expect(actual).toThrow();
            })
            // Return Value After Function Input
            it('Should throw an error if a function is provided', () => {
                const actual = () => { helpers.multiply(40, () => 42) };
                expect(actual).toThrow();
            })           
        });
    })

        // -- Get Remainder --
        describe('Get Remainder', () => {
            // Return Value After Expected Input
            it('Should return the remainder of a quotient of two provided numbers.', () => {
                let expected = 1;
                const actual = helpers.getRemainder(43, 2);
                expect(actual).toBe(expected);
            })
    
            // Return Value After Empty Input
            it('Should return 0 if no input is provided', () => {
                let expected = 0;
                const actual = helpers.getRemainder();
                expect(actual).toBe(expected);
            })
    
            // Return Values After Unexpected Inputs (x)
            describe('Unexpected Inputs (x)', () => {
                // Return Value After Boolean Input
                it('Should throw an error if a boolean is provided', () => {
                    const actual = () => { helpers.getRemainder(true, 2) };
                    expect(actual).toThrow();
                })
                // Return Value After String Input
                it('Should throw an error if a string is provided', () => {
                    const actual = () => { helpers.getRemainder('test', 2) };
                    expect(actual).toThrow();
                })
                // Return Value After Array Input
                it('Should throw an error if an array is provided', () => {
                    const actual = () => { helpers.getRemainder([42], 2) };
                    expect(actual).toThrow();
                })
                // Return Value After Object Input
                it('Should throw an error if an object is provided', () => {
                    const actual = () => { helpers.getRemainder({number: 42}, 2) };
                    expect(actual).toThrow();
                })
                // Return Value After Function Input
                it('Should throw an error if a function is provided', () => {
                    const actual = () => { helpers.getRemainder(() => 42, 2) };
                    expect(actual).toThrow();
                })           
            });
        
            // Return Values After Unexpected Inputs (y)
            describe('Unexpected Inputs (y)', () => {
                // Return Value After Boolean Input
                it('Should throw an error if a boolean is provided', () => {
                    const actual = () => { helpers.getRemainder(40, true) };
                    expect(actual).toThrow();
                })
                // Return Value After String Input
                it('Should throw an error if a string is provided', () => {
                    const actual = () => { helpers.getRemainder(40, 'test') };
                    expect(actual).toThrow();
                })
                // Return Value After Array Input
                it('Should throw an error if an array is provided', () => {
                    const actual = () => { helpers.getRemainder(40, [42]) };
                    expect(actual).toThrow();
                })
                // Return Value After Object Input
                it('Should throw an error if an object is provided', () => {
                    const actual = () => { helpers.getRemainder(40, {number: 42}) };
                    expect(actual).toThrow();
                })
                // Return Value After Function Input
                it('Should throw an error if a function is provided', () => {
                    const actual = () => { helpers.getRemainder(40, () => 42) };
                    expect(actual).toThrow();
                })           
            });
        })
})


    // // -- Multiply by 10 --
    // describe('Multiply by 10', () => {
    //     // Return Value After Expected Input
    //     it('Should return the provided number multiplied by 10', () => {
    //         let expected = 420;
    //         const actual = helpers.multiplyByTen(42);
    //         expect(actual).toBe(expected);
    //     })

    //     // Return Value After Empty Input
    //     it('Should return 0 if no input is provided', () => {
    //         let expected = 0;
    //         const actual = helpers.multiplyByTen();
    //         expect(actual).toBe(expected);
    //     })

    //     // Return Values After Unexpected Inputs
    //     describe('Unexpected Inputs', () => {
    //         // Return Value After Boolean Input
    //         it('Should throw an error if a boolean is provided', () => {
    //             const actual = () => { helpers.multiplyByTen(true) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After String Input
    //         it('Should throw an error if a string is provided', () => {
    //             const actual = () => { helpers.multiplyByTen('test') };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Array Input
    //         it('Should throw an error if an array is provided', () => {
    //             const actual = () => { helpers.multiplyByTen([42]) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Object Input
    //         it('Should throw an error if an object is provided', () => {
    //             const actual = () => { helpers.multiplyByTen({number: 42}) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Function Input
    //         it('Should throw an error if a function is provided', () => {
    //             const actual = () => { helpers.multiplyByTen(() => 42) };
    //             expect(actual).toThrow();
    //         })           
    //     });
    // })

    //         // -- Multiply by 10 --
    // describe('Multiply by 10', () => {
    //     // Return Value After Expected Input
    //     it('Should return the provided number multiplied by 10', () => {
    //         let expected = 420;
    //         const actual = helpers.multiplyByTen(42);
    //         expect(actual).toBe(expected);
    //     })

    //     // Return Value After Empty Input
    //     it('Should return 0 if no input is provided', () => {
    //         let expected = 0;
    //         const actual = helpers.multiplyByTen();
    //         expect(actual).toBe(expected);
    //     })

    //     // Return Values After Unexpected Inputs
    //     describe('Unexpected Inputs', () => {
    //         // Return Value After Boolean Input
    //         it('Should throw an error if a boolean is provided', () => {
    //             const actual = () => { helpers.multiplyByTen(true) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After String Input
    //         it('Should throw an error if a string is provided', () => {
    //             const actual = () => { helpers.multiplyByTen('test') };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Array Input
    //         it('Should throw an error if an array is provided', () => {
    //             const actual = () => { helpers.multiplyByTen([42]) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Object Input
    //         it('Should throw an error if an object is provided', () => {
    //             const actual = () => { helpers.multiplyByTen({number: 42}) };
    //             expect(actual).toThrow();
    //         })
    //         // Return Value After Function Input
    //         it('Should throw an error if a function is provided', () => {
    //             const actual = () => { helpers.multiplyByTen(() => 42) };
    //             expect(actual).toThrow();
    //         })           
    //     });
    // })