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
