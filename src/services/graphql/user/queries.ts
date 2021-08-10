import { gql } from '@apollo/client'

export const LOGIN = gql`
  query LOGIN($email: String!, $password: String) {
    login(email: $email, password: $password) {
      id
      email
      firstName
      lastName
      imageUrl
      token
      isAdmin
      isVerified
    }
  }
`;

export default LOGIN;
