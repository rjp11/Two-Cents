import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';


class CreateDestinationForm extends Component {
    state = {
        destination: "",
        concat: "",
        notes: "",
        image_url: ""
    }

    componentDidMount = () => {
        this.props.getAllDestinations()
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
            [name]: value
        });
    }

    // Set state, create User Destination Entry in DB on create destination submit 
    addDestinationHandler = () => {
        const data = {
          user_id: this.props.user_id,
          destination: this.state.destination,
          concat: this.state.concat,
          notes: this.state.notes,
          image_url: this.state.image_url
        };
    
        axios.post('/api/userDestinations/', data).then(data => console.log("Success!"));
    }
    
    render() {
        const allDestinations = this.props.allDests.map(destination => {
            return ( <option key={destination.id} value={destination.name}>{destination.name}</option>
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
                            onChange={this.handleInputChange}>
                            
                            <option value="" disabled="disabled">Select a destination!</option>
                            { allDestinations }
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            placeholder="Destination Notes"
                            name="notes"
                            value={this.state.notes}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            placeholder="Cover Photo URL"
                            name="image_url"
                            value={this.state.image_url}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <button type="submit" 
                            className="btn btn-default" 
                            onClick={ () => {history.push(`/create/poi`);
                                this.addDestinationHandler()}}
                    >Submit</button>
                </form>) }/>
            </div>
        )
    }
}

export default CreateDestinationForm;