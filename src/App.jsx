import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Sign from './pages/Sign';
import Chat from './pages/Chat';
import Footer from './Layouts/Footer'

class App extends Component {
  render() {
    return (
      <>
          <Router>
        <Switch>
          <Route path="/login" component={Sign} />
          <Route path="/chat" component={Chat} />
          <Redirect to={'/login'} />
        </Switch>
    </Router>
    <Footer />
      </>
      );
  }
}

export default App;
