# Testing Notes

## Review

- What should we test?
- What is TDD?
- What is Unit Testing?
- How does Jest know where the tests are?
- What is the best form of testing?
- Mention two benefits of automated testing.
- What is a matcher?
  - some examples.
- Difference between `.toEqual()` and `.toBe()`.
- Which Jest globals can be used to write the "test cases"?
- How can I tell Jest to re-run tests when files changes?
  - how does it know which files changed?
- How can I tell Jest to show me the test descriptions in the ouput?
- Is it recommended to have the tests fail before making them pass?
  - Why?
- What matcher can we use to test:
  - the length of an array.
  - that a value exist in an array.
  - that the result is falsy.
  - that the code throws an error.

## Drawbacks of Testing

- more code to write, and maintain.
- more tooling.
- additional dependencies.
- may provide a false sense of security.
- non trivial test failures may break the build.

## Grouping Related Tests

- "test suite" has "test cases".
- describe()

## Setup and Teardown Globals

- beforeAll
- beforeEach
- afterEach
- afterAll

## Skipping and Isolatiing Tests

- .skip()
- .only()

## Asynchoronous Tests

- Jest runner waits for the test to complete before running the next test.
- To let Jest know the test is over:
  - invoke a `done()` callback that is passed to the test.
  - return a promise from a test.
  - pass an `async` function to `it` or `test`. **Preferred and cleanest syntax**.

### Using the done() callback.

```js
it('async using callback', done => {
  setTimeout(done, 1000);
});
```

### Returning a promise.

```js
it('async using promise', () => {
  return new Promise(resolve => setTimeout(resolve, 1000));
});
```

### Using `async/await`.

```js
it('async using async/await', async () => {
  await new Promise(resolve => setTimeout(resolve, 3000));
});
```

## TDD

- Test Driven Development/Design.
- Write tests before code.
- Tests drive the design of the system.
- Some developers find the resulting code is cleaner and better architected.

### Red > Green > Refactor

- Write the test as if the functionality is already implemented.
- Write enough code to make the test pass.
- Refactor test of code for readability if needed.
- Repeat.

#### Enhancing Game Item

- item begins at 0.
- item fail count begins at 0.
- item durability begins at 100.
- repairing an item will restore it's durability 10 points at a time until 100.
- item can be enhanced up to 20.
- from 1 to 15 use Arabic numerals.
- from +16 up use Roman numerals (+16 = I, +17 = II, +18 = III, +19 = IV, +20 = V).
- an enhance attempt can succeed or fail.
- when an enhancement fails, the "fail count" of the item is increased according to these rules:
  - from 1 to 15 increase by 1.
  - at I, increase by 2.
  - at II, increase by 3.
  - at III, increase by 4.
  - at IV, increase by 5.
- when enhancement succeeds, the fail count is reset to 0 again.
- when enhancement fails, the durability is decreased by 5.
