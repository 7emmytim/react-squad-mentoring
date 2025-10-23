// What is a generator?
// they are fns in js that gives the ability to pause and resume steps

// Technical definition of a generator in JavaScript: generators are pull streams

// What is a stream?
// describes data over time
// Two kinds of streams:
// push and pull

// What is a push stream?
// a push stream is a kind of stream whereby you don't get to decide when the data comes in.

// What are some examples for push streams?
// sockets, video steams, server sent events

// a pull stream is a kind of stream whereby you have control or decide when the data comes in.

// Lazy vs. eager. What does that mean?
// lazy -> computation happens when needed
// eager -> computation happens immediately.

// What is a generator (continued) - example for a pull stream.

function* myGenerator() {
  yield "hello";
  const x = yield 5;
  const z = yield x + 4;
  yield z;
}

const gen = myGenerator();

console.log(gen.next()); // { done: false, value: "hello" } ✅
console.log(gen.next()); // { done: false, value: 5 } ✅
console.log(gen.next(3)); // { done: false, value: 7 } // ✅
console.log(gen.next(7)); // { done: false, value: 7 } // ✅
console.log(gen.next()); // { done: true, value: undefined } ✅

// Sagas:
// What are the building blocks of a saga?
// 1. effects - actions (put, take ...)
// 2. sagas - they are generators used to run side effects.
// 3. middleware - used to compose together a set of effects.

// Example effect
// Let's say I take the `call` effect and console.log it out like this:
import { call } from "redux-saga/effects";

const identity = (x) => x;
console.log(call(identity));

// {
//     "@redux-saga I/O": true,
//      type: "CALL",
//      payload: { parameter: "ACTION_NAME" },
//      combinator: false
// }
