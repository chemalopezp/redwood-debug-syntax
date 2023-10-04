import type { FindUserExampleById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UserExample from 'src/components/UserExample/UserExample'
import { USER_EXAMPLE_FRAGMENT } from 'src/fragments/userExampleFragment'

export const QUERY = () => gql`
  ${USER_EXAMPLE_FRAGMENT}
  query FindUserExampleById($id: Int!) {
    userExample: userExample(id: $id) {
      ...UserExampleFields
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>UserExample not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  userExample,
}: CellSuccessProps<FindUserExampleById>) => {
  return <UserExample userExample={userExample} />
}
