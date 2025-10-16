// What are the 7 primitives in JavaScript?
const number = 7;
const string = "hello"
const boolean = false
const undefined_ = undefined
const n = null
const bigInt = 2n
const sym = Symbol("")


// Objects are NOT primitives.
// What are objects then? Composite data types.
const obj = {key: 'foo'}
const arr = []
const map = new Map()

// What is the difference between primitives and composite data types?
// 1. Composite data types are stored by reference. Primitives are stored by value.
// 2. Composite data types are built from primitives. (They act as containers.)
// While primitives themselves are the fundamental building blocks and con NOT
// contain other values.

// There are two ways to create functions in JavaScript, show me both.
function func() {}
// const func = () => {}

// Create a function caled `sum` that takes two numbers and adds them.
const sum = (a, b) => a + b;

// Create a another function called `sumCurried`, but this time it is curried.
const sumCurried = a => b => a + b;;


// Create a function `increment` that takes in a number and increments it by one.
// Do that using your `sumCurried` function.

// What techniques are you using here? 👇
const increment = sumCurried(1);

// 1. Partial application - when part of the arguments is supplied to a function,
// hereby creating another function that can accept more arguments.
// 2. Point-free style - when you define a function WITHOUT referencing its arguments.

// Create the `increment` function again, using `sumCurried` BUT make it pointed.
// So NOT point-free style.
const incrementPointed = (a) => sumCurried(1)(a)

// Composition.
// Create a function called `compose2` that takes in two functions and composes
// them in mathematical order.
const compose2 = (fn1, fn2) => x => fn1(fn2(x))

// Now create a function `compose` that takes in an arbitrary amount of
// functions and composes them in mathematical order.

const compose = (...fns) => (x) => fns.reduceRight((y, f) =>  f(y), x);

// What is a closure? (And show me one)

const closure = () => {
    let x = 5
    return (y) => x + y
}

// Create two functions:
// 1. `map`: should be curried, take in a function, and then an array, and
// then maps the function over the array.


// 2. `filter`: should be curried, take in a predicate, and then an array,
// and then filters the array based on the predicate.


const curriedMap = fn => arr => arr.map(fn)
const curriedFilter = predicate => arr => arr.filter(predicate)

// Create a custom curried `reduce` function. `reduce` should work like your
// custom `map` and `filter` functions worked. Make it point-free.

const curriedReduce = fn => x => arr => arr.reduce(fn, x);

// Create a function that takes in a number and returns `true` if the number
// is even and `false` if the number is odd.

// Create a function that takes in a number and doubles it.

const isEven = num => num % 2 === 0
const doubleNumber = num => num * 2


// Create a function called `pipe` that takes an arbitrary amount of functions,
// and composes them in reverse mathematical order.

const pipe = (...fns) => y => fns.reduce((x, f) =>  f(x), y)

// Create a function that takes in an array of numbers and filters all the even
// numbers (so it rejects the odd numbers), then doubles all the even numbers
// and lastly, sums up the result. Break down your functions to their most basic
// abstractions then compose them point-free.
// filter -> double -> sum

const filteredArr = curriedFilter(isEven)
const mappedArr = curriedMap(doubleNumber)
const sumNums = curriedReduce((a, b) => a + b)(0)
// sumNums([1, 2, 3, 4]); // 10
// Right now: function

const pipedFn = pipe(filteredArr, mappedArr, sumNums);
const returnVal = pipedFn([1, 2, 5, 6])

console.log(returnVal)

// You are currying reduce MANUALLY, by specifying each argument
// on its own and returing a new function:
// const reduce = fn => x => arr ...
// Buuut, you COULD auto-curry it if you a had `curry` function:

// const reduce = curry((fn, x, arr) => arr.reduce(fn, x));
// sum earlier
// reduce(sum, 0); // => sumNums