import { ApolloProvider } from '@apollo/client'
import { client } from './config/apollo'
import RouterComponent from './routes'

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterComponent />
    </ApolloProvider>

  )
}

export default App
