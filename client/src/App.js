import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/global/nav';

import Home from './components/pages/home';
import LogIn from './components/pages/login';
import UserSearch from './components/pages/userSearch';
import CreatePage from './components/pages/createPage';
import CreatePOI from './components/pages/createPOI';
import DestinationPage from './components/pages/destinationPage';
import SignUpPage from './components/pages/signUpPage';
import ProfilePage from './components/pages/profile';

class App extends Component {
  state = {
    user_id: 1
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/userSearch' component={UserSearch} />
          <Route exact path='/create/destination' component={CreatePage} />
          <Route exact path='/create/poi' component={CreatePOI} />
          <Route path='/destination/:id' component={DestinationPage} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route exact path='/profile' 
                render={(props) => <ProfilePage {...props} user_id={this.state.user_id} /> }
          />
        </div>
      </Router>
    );
  }
}

export default App;
