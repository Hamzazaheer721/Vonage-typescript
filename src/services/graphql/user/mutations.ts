import { gql } from '@apollo/client'

const LOGIN = gql`
  mutation Login ($input : LoginInput) {
    login (input : $input) {
      id
      email
      firstName
      LastName
      ImageUrl
      token
      isAdmin
      isVerified
    }
  }
`

export default LOGIN;
