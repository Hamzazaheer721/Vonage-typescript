import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

export const CLIENT_ROOT: string = process.env.REACT_APP_BACKEND_SITE_URL || 'https://korber.work-space.app/graphql'

const apolloLink = createHttpLink({
  uri: CLIENT_ROOT,
})

const authlink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: authlink.concat(apolloLink),
  cache: new InMemoryCache(),
})
