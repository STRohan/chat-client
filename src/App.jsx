import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Sign from './pages/Sign';
import ChatPage from './pages/ChatPage';
import Footer from './Layouts/Footer'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from 'apollo-utilities';
import { split } from 'apollo-link';

const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true
  }
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  cache,
  link,
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
})
// const cache = new InMemoryCache();
// const httpLink = new HttpLink({
//   uri: 'http://localhost:4000/graphql'
// });

// const client = new ApolloClient({
//   link: createHttpLink({ uri: 'http://api.githunt.com/graphql' }),
//   cache: new InMemoryCache()
// });

// const link = new WebSocketLink(client);
// // const cache = new InMemoryCache();
// const httpLink = new HttpLink({
//   uri: 'http://192.168.1.92:4000/graphql'
// });

// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:4000/graphql`,
//   options: {
//     reconnect: true
//   }
// });
class App extends Component {
  render() {
    return (
      <>
       <ApolloProvider client={client}>
          <Router>
        <Switch>
          <Route path="/login" component={Sign} />
          <Route path="/chat" component={ChatPage} />
          <Redirect to={'/login'} />
        </Switch>
    </Router>
    <Footer />
    </ApolloProvider>
      </>
      );
  }
}

export default App;
