import React, {Component} from 'react';

class CreatePOIForm extends Component {

    componentDidMount = () => {
        this.props.getUserDestinations()
    }
    
    render() {
        const allDestinations = this.props.user_destinations.map(destination => {
            return ( <option key={destination.id} value={destination.destination}>{destination.destination}</option>
            )
        });

        return (
                <form>
                    <div className="form-group">
                        <select className="form-control" 
                                name="destination"
                                value={this.props.destination}
                                onChange={this.props.handleInputChange}
                        >
                            <option value="" disabled="disabled">Select one of your Destinations</option>
                            { allDestinations }
                        </select>
                    </div>
                    <div className="form-group">
                        <select className="form-control" 
                        placeholder="Location Type"
                        name="poi_type"
                        value={this.props.poi_type}
                        onChange={this.props.handleInputChange}
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
                            value={this.props.poi_name}
                            onChange={this.props.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            placeholder="Location Description"
                            name="poi_description"
                            value={this.props.poi_description}
                            onChange={this.props.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            placeholder="Image Link"
                            name="poi_image_url"
                            value={this.props.poi_image_url}
                            onChange={this.props.handleInputChange}
                        />
                    </div>


                    <button type="submit" 
                        className="btn btn-default"
                        onClick={this.props.addPOIHandler}
                    >Submit</button>
                </form>
        )
    }
}

export default CreatePOIForm;