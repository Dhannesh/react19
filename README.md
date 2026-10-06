# React 19 Feature

1. React Compiler : It automatically manages component memoization at build time. You no longer need to manually write <b>useMemo</b>, <b>useCallback</b>, or wrap components in memo to prevent unnecessary re-renders. The compiler handles this for you under the hood while maintaining standard JavaScript rules.

## Problem: 1

Changes in Heading will render all its components ProductList and FeaturedProductList

## Solution: React Compiler

`npx react-compiler-healthcheck`
`npm i -D eslint-plugin-react-compiler`
`npm i -D babel-plugin-react-compiler`

## useActionState

`const [state,formAction,isPending] = useActionState(fn,initalState,permalink?)`

- action: a function (previousState, formData) => newState. It can be async.
- initialState: the value of state before the action has run.
- permalink (optional): a URL used for progressive enhancement with server components, so the form can work before JavaScript loads.

Returns:

- state: the latest value returned by the action
- formAction: the function you pass to <form action={...}>
- isPending: true while the action is running
