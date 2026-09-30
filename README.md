# React 19 Feature

1. React Compiler : It automatically manages component memoization at build time. You no longer need to manually write <b>useMemo</b>, <b>useCallback</b>, or wrap components in memo to prevent unnecessary re-renders. The compiler handles this for you under the hood while maintaining standard JavaScript rules.

## Problem: 1

Changes in Heading will render all its components ProductList and FeaturedProductList

## Solution: React Compiler

`npx react-compiler-healthcheck`
`npm i -D eslint-plugin-react-compiler`
`npm i -D babel-plugin-react-compiler`
