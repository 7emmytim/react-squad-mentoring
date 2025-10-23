// Promises -> a placeholder for a future value

const newPromise = new Promise((resolve, reject) => {
  resolve("Hello world");
});

// Promise constructor (Promise) vs promise instance (new Promise)
// Promise chaining (then, catch and finally) - They all return a new promise.

// then -> handles both fulfilment (first param) and rejection (second param)
const resolvingPromise = new Promise((resolve) => resolve("Hello, world!"));
// resolvingPromise.then(res => console.log(res))

// const rejectingPromise = new Promise((_, reject) => reject(new Error("Error!!!")))
// rejectingPromise.then(null, err => console.log(err))

// Since .then() is a higher order fn, you can call it point-free style
// resolvingPromise.then(console.log)

// catch -> handles rejected promises
// rejectingPromise.catch(console.log)

// finally -> executes whether promise is fulfilled or not
resolvingPromise.finally(() => console.log("Finally!!!"));

resolvingPromise.then((i) => "man").then((p) => console.log(p));

// Scenerios
// first 4
// second, 4
// keep in mind... 5
// caught through... 5
// this is the end 5

// 3 Promise States
// Pending (initial state pending fulfilment or rejection), Fulfilled, Rejected (encounters error)
// Settled -> either fulfilled or rejected
// const pendingPromise = new Promise((resolve, reject) => {
//     console.log('Promise state:', pendingPromise); // Output: Promise { <pending> }
//     setTimeout(() => {
//         resolve('Fulfilled!');
//         console.log('Promise state after resolve:', pendingPromise); // Output: Promise { 'Fulfilled!' }
//     }, 1000);
// });

// pendingPromise.then(value => {
//     console.log('Resolved with:', value); // Output: Resolved with: Fulfilled!
// });

// Evaluation strategies -> Lazy (when value is needed) vs Eager (computes value immediately)
// Promises are eager.

// Promise methods (resolve, reject, all, allSettled, any, race)
const promise1 = new Promise((resolve) => resolve("Hello, world!"));
const promise2 = Promise.resolve("Hello, world!");

// const promise3 = new Promise((_, reject) => reject(new Error('Something went wrong')));clear
// const promise4 = Promise.reject(new Error('Something went wrong'));

const wait = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

const promises = [wait(2000, "Hello"), wait(1000, "World")];

Promise.all(promises).then((results) => {
  console.log(results); // Output: ['Hello', 'World']
});

// async / await
// const fetchData = async () => {
//     return await fetch('https://api.example.com/data');
// }

// fetchData().catch(console.log)

// Top-Level await -> js environments that allow you use await in non-async fns
// const result = await Promise.resolve('Hello, world!');
// console.log(result)

// Awaiting Synchronous Values
async function awaitSynchronous() {
  const result = await "Hello, world!";
  return result;
}

awaitSynchronous().then(console.log);

// try...catch
// A way of handling errors when using async / await

// The Three Ways To Create A Promise Returning Functions
const asyncInc1 = (x) => new Promise((resolve) => resolve(x + 1));
const asyncInc2 = (x) => Promise.resolve(x + 1);
const asyncInc3 = async (x) => (await x) + 1;

// Unwrapping
// then method unwraps a value for another then method.
Promise.reject("Winner")
  .catch(console.log)
  .then((v) => console.log("ttt", v, "ttt"));

// Promises Cannot Be Aborted Or Cancelled
// AbortController

// ****************************
// asyncPipe - create a function called `asyncPipe` that composes promises in
// reverse mathematical order. And create `asyncInc` and `asyncDouble` to show
// that it works.
// `asyncInc` should take in a number, and then return a promise that resolves
// with the number incremented by one.
// `asyncDouble` should take in a number, and then return a promise that resolves
// with the number doubled.

const asyncPipe =
  (...fns) =>
  (y) =>
    fns.reduce((x, f) => f(x), y);
// const pipe = (f, g) => x => f(g(x))
const asyncInc = (num) => Promise.resolve(num + 1);
const asyncDouble = (num) => Promise.resolve(num * 2);

const compose = asyncPipe(asyncInc, asyncDouble);
compose(10).then(console.log);

// TypeScript Tax
// statically vs dynamically typed
// > 0 represents a positive impact
// < 0 represents a negative impact
// 3 - 5 represents relatively strong impact
// 2 points represents a moderate impact
// 1 point represents a relatively low impact
// Developer Tooling, refactoring
// Type correctness does not guarantee program correctness.
// If we can get type hints, autocomplete, and great bug reductions for native js using other tools,
// the only question that remains is, does the ts difference pay off the investment required to use it?
// TDD (40 - 80%), code review, design and spec review (80%), lint
// ts (20% bugs)

// hocs Are Misunderstood In React
// A hoc is a fn that takes a component and returns a new component.
// A higher-order fn is a fn that either receives or returns a fn or does both.

// Display-Container Components
// dumb-smart
// Why?
// 1. Makes all display components testable cos they are just pure fns
// 2. It simplifies code
// Tips & hints
// Any component that uses built in jsx (div, form, p ...) is likely a display component

// Why react?
// deterministic view renders via unidirectional data flow and immutability
// JSX
// Synthetic Events
// Component Lifecycle
// React Hooks
// Container vs Presentation Components
// HOCs

// When the Virtual DOM is updated, React compares it to the previous Virtual DOM to identify the minimal set of changes needed to update the real DOM. This process is called "reconciliation."

const curry =
  (f, array = []) =>
  (...args) =>
    ((a) => (a.length >= f.length ? f(...a) : curry(f, a)))([
      ...array,
      ...args,
    ]);

const curried = curry;

const a = Promise.resolve("Hello");
// const b = Promise.reject("Error1");
const c = Promise.resolve("World");
const d = new Promise((_, reject) => setTimeout(() => reject("Error!"), 400));

Promise.all([a, c, d]).then(console.log);

// Javascript generators explained
// Main use case is for sagas
// What is a generator? a pull stream
// what is a stream? it is data over time
// two types of streams -> push and pull
// push -> you are not in control when the data comes through
// (e.g. websockets, server-sent events, video streams)
// pull -> you decide when data comes through (e.g. fetch(), iterators and generators)
// Push: Data comes to you.
// Pull: You go get the data.
// lazy (data is evaluated when needed) vs eager (data is evaluated immediately)
// Array, promises and push streams are examples of eager
// How are promises eager?

console.log("hello");

const newPromise3 = new Promise(() => {
  console.log("inside");
});

console.log("outside");
// console.log(newPromise3())

// What is a generator?
// a generator is a special kind of function that can start and stop one or more times,
// and doesn't necessarily ever have to finish.
// Generators in js are special fns that can pause execution and resume later
// yield is a kind of intermediate return
function* myGenerator() {
  yield "Hello";
}

// why sagas?
// allows you isolate side effects. isolate async effects
// old code bases
// deterministic testing of I/O related logic

// what is redux saga?
// is a middleware that uses generators to;
// manage side effects and manipulate actions
// decouple your code
// define complex logic flows, sequences and data processes

// redux saga transforms impure fns like api requests into pure fns by delaying the computation
// it separates async logic and state mgt from ui
// building blocks of redux saga
// effect -> action creators
// sagas -> generator fns that manage side effects
// middleware -> responsible for the exec of the effects

// take, put, select, call

// console.log(take('increment'));
// {
//     "@redux-saga/IO": true,
//     combinator: true;
//     type: "TAKE",
//     payload: { pattern: 'increment' },
// }
