import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/global/nav';

import Home from './components/pages/home';
import LogIn from './components/pages/login';
import UserSearch from './components/pages/userSearch';
import CreatePage from './components/pages/createPage';
import DestinationPage from './components/pages/destinationPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/userSearch' component={UserSearch} />
          <Route exact path='/createPage' component={CreatePage} />
          <Route path='/destination/:id' component={DestinationPage} />
        </div>
      </Router>
    );
  }
}

export default App;
