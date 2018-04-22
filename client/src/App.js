import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

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
    user_id: 1,
    user_first_name: "Ryan",
    user_email: "",
    allDests: []
  }

  getUserData = () => {
    axios.get('api/user_data').then((res) => { 
      this.setState({
          user_id: res.data.id,
          user_first_name: res.data.first_name,
          user_email: res.data.email
      })
    })
  }
  
  getAllDestinations = () => {
    axios.get('/api/destinations').then((res) => {
      console.log(res.data);
      this.setState({
          allDests: res.data
      })
    });
  }

  logout = () => {
    axios.get('/api/logout', function(req, res){
        console.log('LOGGED OUT!');
    })
}

  render() {
    return (
      <Router>
        <div>
          <Nav user_id={this.state.user_id}
                user_first_name={this.state.user_first_name}
                getUserData={this.getUserData}
                logout = {this.logout}/>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/userSearch' component={UserSearch} />
          <Route exact path='/create/destination' 
                render={ (props) => <CreatePage {...props} 
                user_id={this.state.user_id}
                getAllDestinations={this.getAllDestinations}
                allDests={this.state.allDests} /> } 
          />
          <Route exact path='/create/poi' component={CreatePOI} />
          <Route path='/destination/:id' component={DestinationPage} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route exact path='/profile' 
                render={ (props) => <ProfilePage {...props} 
                user_id={this.state.user_id} /> }
          />
        </div>
      </Router>
    );
  }
}

export default App;
