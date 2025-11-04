// What is test?
// a test checks for code implementation whether it fails or passes

// How is a "test" or what commonly refer to as a test, different from
// manually testing an app?
// it is automated. we allow the machine or the code do the testing.

// Tests can have two results: fail or pass
// This means, there are really 4 possible outcomes of a test:
// 1. False positive - code fails but the test passes
// 2. True positive - code and the test both pass
// 3. False Negative - code passes but the test fails
// 4. True Negative - both the code and the test failed.

// Test coverage. What types of test coverage are there?
// 1. Code coverage - code coverage is the % of code that is executed while your test is running.
// 2. Test case coverage - the % of user requirements that is covered by your tests.
// You want to maximize case coverage and aim for 100% case coverage.

// What is a testing framework?
// it is a framework that provides functions/methods to help run test cases.
// Can you name a few and what they do?
// jest and vitest -> unit testing
// RITEway -> simpler and easier unit testing framework
// cypress and playwright -> e2e testing

// What are the different kinds of tests?
// 1. unit testing - takes units of the application (like functions, reducers, components)
// 2. integration/collaboration testing - tests for how multiple units work/collaborate together
// 3. functional testing - it is test from the user's view. it tests more like a modular form. (examples: authentication flow...)
// 4. e2e testing - it basically tests how the entire app work together. From the beginning to the end.
// 5. snapshot testing (optional) - it takes snapshots and compare them.

// What is a mock?
// A mock is a test double.
// (a mock is mostly used in integration testing.
// it is a way of faking a flow that is expected to happen in the function or component you are trying to test.)
// What are the different kinds of mocks?
// 1. function
// 2. module
// 3. spy

// Why mock?
// it is mostly used with integration tests.
// for example in cases of api calls,
// - it helps to save cost
// - it also helps to save time
// - it helps to isolate logic => it makes things testable (that would be hard to test without mocks), increases test coverage
// - it helps to make testing deterministic
// - help you to make tests more concise (avoid complicated setup and teardown logic)

// What is a snapshot test?
// 1. Create a serializable value
// 2. Save that value as an artifact
// 3. Compare the new artifact to the old saved (reference) artifact
// => E2E tests are good at telling you that something changed, but they are BAD
// at telling when something is broken or incorrect.
// function MyComponent() {
//   return <div>Hello, World!</div>;
// }

// // snapshot
// test('MyComponent matches snapshot', () => {
//   const component = captureSnapshot(<MyComponent />); // <div>Hello, World!</div> => saved in another file
//   expect(component).toMatchSnapshot();
// });

// What is TDD?
// test-driven development
// It defines the flow of writing tests before code implementation.
// What are the steps of TDD?
// write test and watch it fail (red)
// write your code to make the test pass (green)
// refactor if necessary (blue)

// Why TDD?
// it helps to reduce bug density (40% - 80% reduction)
// it helps to write more modular code => how? testing is most effective when what is being tested is modular.
// - Your code is not tightly coupled.
// it helps in documentation
// it helps to reduce code complexity
// it helps to prevent false positives by watching the test fail
// more code coverage because by definition everything is covered
// "watch script" reruns your tests when you save a file.
// - tight feedback loop
// - once you're good at TDD, you're also faster
// CI/CD - continuous integration and continuous deployment
// - every PR that's merged is deployed straight to production
// - SUUUPER risky without tests, but if you have good tests and good test coverage
// - less risky. Why less risky? Because if you repeat the scary things often
// - they bcome less scary.
// - You combine this with feature flags that allow you to selectively turn
// on/off features (with Posthog).
