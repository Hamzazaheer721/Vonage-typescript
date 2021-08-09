import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

export const CLIENT_ROOT: string = 'https://korber.work-space.app/graphql'
const token : string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVmOTc0NzZiLThlMjctNDFkOS05ZTRmLTk0OTYxMzg1OWE3MCIsInNhbHV0YXRpb24iOm51bGwsImZpcnN0TmFtZSI6IkhhbXphIiwibGFzdE5hbWUiOiJaYWhlZXIiLCJlbWFpbCI6ImhhbXphemFoZWVyNzIxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaW1hZ2VVcmwiOm51bGwsImNvbXBhbnkiOm51bGwsImNvdW50cnkiOm51bGwsImlzVmVyaWZpZWQiOnRydWUsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODQ4NTQ0MCwiZXhwIjoxNjI4NzQ0NjQwfQ.LGyC4k8eN9hD1JihT3hG8PSfiRu9dXnX0-k1cXyBlzQ';
const apolloLink = createHttpLink({
  uri: CLIENT_ROOT,
})

// eslint-disable-next-line no-unused-vars
const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: token ? `Bearer ${token}` : '',
  },
}));

export const client = new ApolloClient({
  link: authLink.concat(apolloLink),
  cache: new InMemoryCache(),
})
