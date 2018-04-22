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
    allDests: [],
    destination: "",
    dest_concat: "",
    dest_notes: "",
    dest_image_url: ""
  }

  // Set State with Logged-in User's data
  getUserData = () => {
    axios.get('api/user_data').then((res) => { 
      this.setState({
          user_id: res.data.id,
          user_first_name: res.data.first_name,
          user_email: res.data.email
      })
    })
  }

  // Set state based on form input change
  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
        [name]: value
    });
  }
  
  // Retreive all destination to pass into the drop down on the create destination form
  getAllDestinations = () => {
    axios.get('/api/destinations').then((res) => {
      this.setState({
          allDests: res.data
      })
    });
  }

  // Set state, create User Destination Entry in DB on create destination submit 
  addDestinationHandler = () => {
    const data = {
        user_id: this.state.user_id,
        destination: this.state.destination,
        concat: this.state.concat,
        notes: this.state.notes,
        image_url: this.state.image_url
    };

    axios.post('/api/userDestinations/', data).then(data => console.log("Success!"));
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
                allDests={this.state.allDests}
                destination={this.state.destination}
                dest_notes={this.state.dest_notes}
                dest_image_url={this.state.dest_image_url} 
                handleInputChange={this.handleInputChange} 
                addDestinationHandler={this.addDestinationHandler} /> } 
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
