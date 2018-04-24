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
    dest_image_url: "",
    pois: [],
    poi_type: "",
    poi_name: "",
    poi_address: "",
    poi_description: "",
    poi_image_url: "",
    user_destinations: []
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
      image_url: this.state.dest_image_url
    };

    axios.post('/api/userDestinations/', data).then(data => console.log("Success!"));
  }

  // Set state, create User POI enrty in DB on create POI submit
  addPOIHandler = () => {
    const data = {
      user_id: this.state.user_id,
      destination: this.state.destination,
      poi_type: this.state.poi_type,
      poi_name: this.state.poi_name,
      poi_address: this.state.poi_address,
      poi_description: this.state.poi_description,
      poi_image_url: this.state.poi_image_url
    };

    axios.post('/api/poi/', data).then(data => console.log("Success!"));
  }

  // Retrieve all POIs user has saved for that destination
  getUserPOIs = () => {
    let userID = this.state.user_id;
    let destination = this.state.destination;

    axios.get(`/api/poi/${userID}/${destination}`).then((res) => {
      this.setState({
        pois: res.data
      })
    });
  }

  getUserDestinations = () => {
    let userID = this.state.user_id;
    axios.get(`/api/destinations/${userID}`).then((res) => {
      this.setState({
        user_destinations: res.data
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
                user_first_name={ this.state.user_first_name }
                logout = { this.logout }/>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/userSearch' component={UserSearch} />
          <Route exact path='/create/destination' 
                render={ (props) => <CreatePage {...props} 
                user_id={ this.state.user_id }
                getAllDestinations={ this.getAllDestinations }
                allDests={ this.state.allDests }
                destination={ this.state.destination }
                dest_notes={ this.state.dest_notes }
                dest_image_url={ this.state.dest_image_url } 
                handleInputChange={ this.handleInputChange } 
                addDestinationHandler={ this.addDestinationHandler } /> } 
          />
          <Route exact path='/create/poi' 
                render={ (props) => <CreatePOI {...props}
                user_id={ this.state.user_id }
                destination= { this.state.destination }
                poi_type= { this.state.poi_type }
                poi_name = { this.state.poi_name }
                poi_address = { this.state.poi_address }
                poi_description = { this.state.poi_description }
                poi_image_url = { this.state.image_url }
                getUserDestinations = {this.getUserDestinations } 
                handleInputChange= { this.handleInputChange } 
                addPOIHandler = { this.addPOIHandler }
                user_destinations = { this.state.user_destinations } /> }
                />
          <Route path='/destination/:id'
                render={ (props) => <DestinationPage {...props}
                user_id={ this.state.user_id }
                pois = { this.state.pois } 
                getUserPOIs={ this.getUserPOIs} /> }
              />
          <Route exact path='/signup' component={SignUpPage} />
          <Route exact path='/profile' 
                render={ (props) => <ProfilePage {...props} 
                user_id={ this.state.user_id }
                user_destinations={ this.state.user_destinations }
                getUserDestinations={ this.getUserDestinations } /> }
          />
        </div>
      </Router>
    );
  }
}

export default App;
