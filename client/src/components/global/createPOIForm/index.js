import React, {Component} from 'react';
import axios from 'axios';

class CreatePOIForm extends Component {
    state = {
        user_id: 1,
        destination: "",
        poi_type: "",
        poi_name: "",
        poi_address: "",
        poi_description: "",
        image_url: "",
        user_destinations: []
    }
    
    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }
    
    addPOIHandler = () => {
        const data = {
            user_id: this.state.user_id,
            destination: this.state.destination,
            poi_type: this.state.poi_type,
            poi_name: this.state.poi_name,
            poi_address: this.state.poi_address,
            poi_description: this.state.poi_description,
            image_url: this.state.image_url
        };

        axios.post('/api/poi/', data).then(data => console.log("Success!"));
    }

    componentDidMount = () => {
        let userID = this.state.user_id;
        axios.get(`/api/destinations/${userID}`).then((res) => {
            this.setState({
                user_destinations: res.data
            })
        });
    }
    
    render() {
        const allDestinations = this.state.user_destinations.map(destination => {
            return ( <option key={destination.id} value={destination.destination}>{destination.destination}</option>
            )
        });

        return (
                <form>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            placeholder="User ID"
                            name="user_id"
                            value={this.state.user_id}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <select className="form-control" 
                                name="destination"
                                value={this.state.destination}
                                onChange={this.handleInputChange}
                        >
                            <option value="" disabled="disabled">Select one of your Destinations</option>
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
                            <option value="Casual Eats">Casual Eats</option>
                            <option value="Fine Dining">Fine Dining</option>
                            <option value="Lodging">Lodging</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Cultural Experience">Cultural Experience</option>
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
                            placeholder="Location Description"
                            name="poi_description"
                            value={this.state.poi_description}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                        className="form-control" 
                        placeholder="Image Link"
                        name="image_url"
                        value={this.state.image_url}
                        onChange={this.handleInputChange}
                        />
                    </div>


                    <button type="submit" 
                        className="btn btn-default"
                        onClick={this.addPOIHandler}
                    >Submit</button>
                </form>
        )
    }
}

export default CreatePOIForm;