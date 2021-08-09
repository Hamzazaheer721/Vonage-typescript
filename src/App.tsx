import { ApolloProvider } from '@apollo/client'
import { useEffect } from 'react'
import { client } from './config/apollo'
import RouterComponent from './routes'

const token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVmOTc0NzZiLThlMjctNDFkOS05ZTRmLTk0OTYxMzg1OWE3MCIsInNhbHV0YXRpb24iOm51bGwsImZpcnN0TmFtZSI6IkhhbXphIiwibGFzdE5hbWUiOiJaYWhlZXIiLCJlbWFpbCI6ImhhbXphemFoZWVyNzIxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaW1hZ2VVcmwiOm51bGwsImNvbXBhbnkiOm51bGwsImNvdW50cnkiOm51bGwsImlzVmVyaWZpZWQiOnRydWUsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODQ4NTQ0MCwiZXhwIjoxNjI4NzQ0NjQwfQ.LGyC4k8eN9hD1JihT3hG8PSfiRu9dXnX0-k1cXyBlzQ'
function App() {
  useEffect(() => {
    localStorage.setItem('token', token)
  }, [])
  return (
    <ApolloProvider client={client}>
      <RouterComponent />
    </ApolloProvider>
  )
}

export default App
