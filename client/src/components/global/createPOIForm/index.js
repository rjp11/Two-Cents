import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';

class CreatePOIForm extends Component {
    state = {
        destination: "",
        poi_type: "",
        poi_name: "",
        poi_address: "",
        poi_description: "",
        poi_image_url: "",
        user_destinations: []
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
            [name]: value
        });
    }

    // Set state, create User POI enrty in DB on create POI submit
    addPOIHandler = () => {
        const data = {
            user_id: this.props.user_id,
            destination: this.state.destination,
            poi_type: this.state.poi_type,
            poi_name: this.state.poi_name,
            poi_address: this.state.poi_address,
            poi_description: this.state.poi_description,
            poi_image_url: this.state.poi_image_url
        };

        axios.post('/api/poi/', data).then(data => console.log("Success!"));
    }    

    componentDidMount = () => {
        this.props.getUserDestinations()
    }
    
    render() {
        const allDestinations = this.props.user_destinations.map(destination => {
            return ( <option key={destination.id} value={destination.destination}>{destination.destination}</option>
            )
        });

        return (
            <div>
                <Route render = {({history}) => (
                    <form>
                        <div className="form-group">
                            <select className="form-control" 
                                name="destination"
                                value={this.state.destination}
                                onChange={this.handleInputChange}
                            >
                                <option value="" disabled="disabled">Select one of your destinations</option>
                                { allDestinations }
                            </select>
                        </div>
                        <div className="form-group">
                            <select className="form-control" 
                                placeholder="Location Type"
                                name="poi_type"
                                value={this.state.poi_type}
                                onChange={this.handleInputChange}
                            >
                                <option value="" disabled="disabled">Select type of location</option>
                                <option value="Casual Eats">Casual Eating</option>
                                <option value="Fine Dining">Fine Dining</option>
                                <option value="Lodging">Lodging</option>
                                <option value="Lounging">Lounging</option>
                                <option value="Shopping">Shopping</option>
                                <option value="Enriching">Enriching</option>
                                <option value='Strolling'>Strolling</option>
                            </select>    
                        </div>
                        <div className="form-group">
                            <input type="text" 
                                className="form-control" 
                                placeholder="Location Name"
                                name="poi_name"
                                value={this.state.poi_name}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" 
                                className="form-control" 
                                placeholder="Share some thoughts"
                                name="poi_description"
                                value={this.state.poi_description}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" 
                                className="form-control" 
                                placeholder="Image Link"
                                name="poi_image_url"
                                value={this.state.poi_image_url}
                                onChange={this.handleInputChange}
                            />
                        </div>


                        <button type="submit" 
                            className="btn btn-default"
                            onClick={ () => {history.push(`/profile`)
                                this.addPOIHandler()}}
                        >Submit</button>
                    </form>
                )}/>
            </div> 
        )
    }
}

export default CreatePOIForm;