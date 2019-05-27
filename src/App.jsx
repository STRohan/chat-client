import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Sign from './pages/Sign';
import ChatPage from './pages/ChatPage';
import Footer from './Layouts/Footer'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws';


const client = new ApolloClient({
  link: new HttpLink({ uri: `http://localhost:4000/graphql` }),
  cache: new InMemoryCache()
}) ;


const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: 'http://192.168.1.92:4000/graphql'
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true
  }
});
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
