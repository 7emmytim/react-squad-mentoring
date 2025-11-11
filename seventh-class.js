// What is React Router v7 (formerkly known as Remix)?
// it is fullstack framework.
// Can you use React Router v7 also for a client-side only app? Or does
// it have to be fullstack?
// Yes you can!
// There are three modes for React Router v7. What are the three modes?
// framework, data mode and declarative mode
// We usually operate in framework mode

// How does data flow through a React Router app?
// data flow occurs around the loader, action and the component itself.
// loader fetches data -> feeds to the component -> action mutates data and updates the loader

// loader => component => action => loader ...
// Building blocks:
// 1. loader
// 2. component (route)
// 3. action
// 4. client loader
// 5. client action
// 6. middleware
// ---
// shouldRevalidate
// error boundary
// ---
// This cycle above is missing steps. What would the FULL cycle look like?

// middleware (before loader) => loader => middleware (after loader) =>
// => client middleware (before client loader) => client loader => client middleware (after client loader) => component
// => client middleware (before client action) => client action => client middleware (after client action)
// => middleware (before action) => action => middleware (after action) => middleware (before loader)

// auth middleware: check cookies for get requests, and checks DB for post requests
// organization middleware: which always hits the DB to check if the user is a member & what role they have
// loader / action with the specific functionality

// How do you do loading states with React Router?

const nav = useNavigation();
const isLoading = nav.state === "loading"; // idle, loading, submitting

// <Form />
// <Link />
// <form />
// <a />
// a form takes a method and it can submit mutiple form data
// By default the form does a get request.

// We have `<Form />`, but we also have `useFetcher()`. What is use fetcher for?
// And what's the difference to using `<Form />`?
// usefetcher => a use case would be for actions that you want to
// perform while retaining the current page (without a redirect)
// <Form /> would trigger a redirect. <Form replace />
// You could NOT use `useNavigation` with `useFetcher` to track the loading state.
// How would you do a loading spinner for example, for a `useFetcher`?

const fetcher = useFetcher();
// fetcher.formData.get('intent') === "intent-in-flight" => loading states
// fetcher.state

// How are route layouts structured?
// pages are defined by mapping route paths to route files with the route() from the react router module
// layouts can be assigned to a set of routs using layout(), it takes the layout file and the list of routes
// <Outlet /> tells where to render the child component within the layout
// root.tsx is the root of the entire app
// index() can also be used to define sub routes within specific base routes.

// In Next.js we have dynamic routes, for e.g. slugs etc. How do you do those?
// route("contacts/:contactId", "routes/contact.tsx")

// `shouldRevalidate`, error boundaries, what other APIs does React Router have?
// client error, hydration...
// - `entry` files
// - root file
// const meta = [
// { title: "", content: "" }
// ]
