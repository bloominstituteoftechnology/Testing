
1. What should we test?
    
    Test that the system behaves correctly. Depends on what technology is used, whether backend or UI, different tests needed for different requirements. 

2. What is TDD? 

    Test Driven Development. First build tests and then build application

3. What is Unit Testing? 

    Testing by part, which makes sure every small functional part works as expected. 

4. How does Jest know where the tests are? 

    If file ends in .test.js or .specs.js or if files found in __tests__ folder

5. What is the best form of testing? 

    Manual testing. Testing as if you are from the user's point of view. 

7. Mention two benefits of automated testing.

    Saves time, and helps reduce the number of regressions caused by introducing new code. Makes you more confident in your code

8. What is a matcher? 

    Little helpers that help assert a comparison between two values.

9. Difference between .toEqual() and .toBe()

    toBe is shallow equality/reference, toEqual is checking for deep equality

10. Which jest globals can be used to write the test cases? 


11. How can I tell Jest to re-run tests when files change?

--watch command. Uses version control system such as GIT to see what has changed in the files, and only run the tests that have changed.  

12. How can I tell Jest to show me the test descriptions in the output? 

--verbose flag. 

13. Is it recommended to have  tests fail before making them pass? 

Yes, to prevent false positives and make sure you are testing the right thing. 

14. What matcher can we use to test: 
    -the length of an array
    - that a value exists in an array
    - that the result is falsy
    - that the code throws an error

A test suite has one or more test cases. Usually pertaining to the specific file that holds all the tests. 

Use only to only run the test with the only method. All others tests are skipped. 

Use describe to wrap it statements to organize testing quite into organized categories. 


