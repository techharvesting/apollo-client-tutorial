import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Hello from './Hello';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:3001/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Hello/>
    </ApolloProvider>
  );
}

export default App;
