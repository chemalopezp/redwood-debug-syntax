Initial setup

```
yarn create redwood-app redwood-debug-syntax --typescript
yarn rw g scaffold UserExample

```

Create user example fragment

```
// web/src/fragments/UserExampleFragment
export const USER_EXAMPLE_FRAGMENT = gql`
  fragment UserExampleFields on UserExample {
    id
    email
    name
  }
`
```

Use it on the userExample cell

```
// web/src/components/UserExampleCell/UserExampleCell.tsx
import { USER_EXAMPLE_FRAGMENT } from 'src/fragments/UserExampleFragment'

export const QUERY = gql`
  ${USER_EXAMPLE_FRAGMENT}
  query FindUserExampleById($id: Int!) {
    userExample: userExample(id: $id) {
      ...UserExampleFields
    }
  }
````

Now generating types will through a syntax error
```
(base) ➜  redwood-debug-syntax git:(main) ✗ yarn rw g types
Generating...

/Users/chema/redwood-debug-syntax/node_modules/graphql/error/syntaxError.js:15
  return new _GraphQLError.GraphQLError(`Syntax Error: ${description}`, {
         ^

GraphQLError: Syntax Error: Unexpected <EOF>.
    at syntaxError (/Users/chema/redwood-debug-syntax/node_modules/graphql/error/syntaxError.js:15:10)
    at Parser.unexpected (/Users/chema/redwood-debug-syntax/node_modules/graphql/language/parser.js:1458:41)
    at Parser.parseDefinition (/Users/chema/redwood-debug-syntax/node_modules/graphql/language/parser.js:212:16)
    at Parser.many (/Users/chema/redwood-debug-syntax/node_modules/graphql/language/parser.js:1511:26)
    at Parser.parseDocument (/Users/chema/redwood-debug-syntax/node_modules/graphql/language/parser.js:122:25)
    at parse (/Users/chema/redwood-debug-syntax/node_modules/graphql/language/parser.js:32:17)
    at parseGqlQueryToAst (/Users/chema/redwood-debug-syntax/node_modules/@redwoodjs/internal/dist/gql.js:18:34)
    at generateMirrorCell (/Users/chema/redwood-debug-syntax/node_modules/@redwoodjs/internal/dist/generate/typeDefinitions.js:113:48)
    at /Users/chema/redwood-debug-syntax/node_modules/@redwoodjs/internal/dist/generate/typeDefinitions.js:90:86
    at Array.map (<anonymous>) {
  path: undefined,
  locations: [ { line: 2, column: 3 } ],
  extensions: [Object: null prototype] {}
}

Node.js v18.17.1
```
