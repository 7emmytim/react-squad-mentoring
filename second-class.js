// data list principle
//

// There are three ways to create a promise (returning function), create an
// example for each:
const newPromise1 = new Promise((resolve) => resolve("hello"));
const newPromise2 = Promise.resolve("hello");
const newPromise3 = async () => "world";

// Create a function called `asyncPipe` that composes promise returning
// functions in reverse mathematical order.
const asyncPipe =
  (...fns) =>
  (x) =>
    fns.reduce(async (y, f) => f(await y), x);

// TypeScript Tax
// Code review: 80%
// TDD: 40% (- 80%)
// TypeScript (static types): 20%
// App: start with 1000 bugs
// Code review: 800 bugs caught, 200 left over
// TDD: 80 bugs caught, 120 left over
// TypeScript: 24 bugs caught, 96 left over
// Negative ROI
// TDD can catch bugs TS can't, but not vice.
// And that assumes most bugs caught by TS lowest bugs caught by TDD.

// React
// What is the display- / container- component pattern
// Isolate logic from UI
// Container (smart) component holds logic: hooks, side-effects, HOCs etc.
// Display (dumb) component: pure function that takes in props and returns JSX

// Higher-order components
// Create a higher-order component that is curried, and takes in a title,
// and then the component and injects the title as a `title` prop to the
// component.

const withTitle = (title) => (Component) => (props) =>
  <Component {...props} title={title} />;

// Missing introduction to React

// Why React?
// - Predictable renders via Unidirectional data flow with flux and immutability
// - JSX
// - Synthetic events
// - Hooks

// view -> action -> dispatched -> store -> view

// Why JSX?
// - HTML in Javascript (Declarative Markup, logic colocated with component)
// - Before JSX: separated by technology (HTML, CSS, JavaScript etc.),
//   with JSX: separate by concern (UI vs. state logic, vs side-effects)
// - Abstracts away DOM differences (works in Chrome, Firefox, Safari*)
// - Abstracts away platform differences (mobile, VR, PDFs, emails, ...)

// Redux
// What are the 6 building blocks of Redux?
// Store, reducer, action, selector, middleware, dispatch

// Create a reducer that handles two actions: increment, and incrementBy.
// Increment should just increment the count in the state by one. And
// incrementBy should incremented the count by the payload.

const increment = () => ({ type: "INCREMENT" });
const incrementBy = (payload) => ({ type: "INCREMENT_BY", payload });

const slice = "miscellaneous";

const reducer = (state = { value: 0 }, { type, payload }) => {
  switch (type) {
    case increment().type: {
      return { ...state, value: state.value + 1 };
    }

    case incrementBy().type: {
      return { ...state, value: state.value + payload };
    }

    default: {
      return state;
    }
  }
};

// const rootReducer = combineReducers({ slice: reducer });

// Write a selector that retruns the current count.
const selectCount = (store) => store[slice].value;
const count = useSelector(selectCount);

// Generators
// What is a generator?
