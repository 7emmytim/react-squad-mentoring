// ********** 5 Questions Every Unit Test Must Answer **********
// Design aid, Feature documentation (for developers),
// Test your developer understanding, QA, Continuous Delivery Aid

// The Science of TDD
// TDD can; reduce bug density, encourage more modular designs, reduce code complexity

// Write Tests First -> test-first vs test-after
// Before you implement, write the test

// What your unit test should do
// Design aid: written during design phase, prior to implementation.
// Feature documentation & test of developer understanding:
// The test should provide a clear description of the feature being tested.
// QA/Continuous Delivery: The tests should halt the delivery
// pipeline on failure and produce a good bug report when they fail.

// a good bug report
// what were you testing, what should it do, output, expected output
// equal() answers two important questions; actual vs expected output

// What unit are you testing?
// What should the feature in that unit do?
// Actual output
// Expected output
// How can the test be reproduced?

// ********** 5 Common Misconceptions About TDD & Unit Tests **********
// 1. TDD is too Time Consuming. The Business Team Would Never Approve
// 2. You Can’t Write Tests Until You Know the Design, &
// You Can’t Know the Design Until You Implement the Code
// 3. You Have to Write All Tests Before You Start the Code
// 4. Red, Green, and ALWAYS Refactor?
// 5. Everything Needs Unit Tests

// ********** The Outrageous Cost of Skipping TDD & Code Reviews **********
// TDD is the process of writing automated tests to ensure that code works before
// writing the implementation.
// write a test, watch it fail (red) -> This proves that the
// test won’t produce a false positive,
// and that the added code is what makes the test pass.
// write the implementation, watch the test pass (green),
// and refactor if needed

// ********** TDD the RITE Way **********
// Readable
// Isolated OR Integrated
// Thorough
// Explicit
// equality assertions over fancy assertion types

// ********** Mocking is a Code Smell **********
// A code smell is a surface indication that usually
// corresponds to a deeper problem in the system
// What is a mock?
// A mock is a test double that stands in for real
// implementation code during the unit testing process
// What is test coverage?
// Code coverage refers to the amount of code covered by test cases
// What is tight coupling?

// integration test -> multiple fns or side effects
// Mock the db or setup and tear down
// mocking is a code smell for tight coupling
// fnal test tests from the user's perspective
// vitest + rtl + happy dom
// vi.ffn
// mock fn stores call args, returns, instances
// getByRole getByText
// msw (mock server worker)

// 12 Principles
// behaviour sensitive
// structure insensitive
// Readable
// writable
// fast
// automated
// isolated
// composable
// specific
// deterministic
// predictive
// inspiring
