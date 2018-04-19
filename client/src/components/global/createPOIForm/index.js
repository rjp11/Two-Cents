import React, {Component} from 'react';
import axios from 'axios';

class CreatePOIForm extends Component {
    state = {
        user_id: 0,
        destination: "",
        poi_type: "",
        poi_name: "",
        poi_address: "",
        poi_description: "",
        image_url: ""
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
    
    render() {
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
                        <input list="destinations" 
                                className="form-control" 
                                placeholder="Destination"
                                name="destination"
                                value={this.state.destination}
                                onChange={this.handleInputChange}
                        />
                            <datalist id="destinations">
                                <option value="Chicago"/>
                                <option value="Mallorca"/>
                                <option value="Sicily"/>
                            </datalist>
                    </div>
                    <div className="form-group">
                        <input list="locationTypes" 
                        className="form-control" 
                        placeholder="Location Type"
                        name="poi_type"
                        value={this.state.poi_type}
                        onChange={this.handleInputChange}
                        />
                            <datalist id="locationTypes">
                                <option value="Casual Eats" />
                                <option value="Fine Dining" />
                                <option value="Lodging" />
                                <option value="Shopping" />
                                <option value="Cultural Experience" />
                            </datalist>
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