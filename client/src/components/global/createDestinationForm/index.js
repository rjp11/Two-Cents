import React, {Component} from 'react';
import axios from 'axios';


class CreateDestinationForm extends Component {

    componentDidMount = () => {
        this.props.getAllDestinations
    }

    render() {
        const allDestinations = this.props.allDests.map(destination => {
            return ( <option key={destination.id} value={destination.name}>{destination.name}</option>
            )
        });

        return (
                <form>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            placeholder={this.props.user_id}
                            name="user_id"
                            value={this.props.user_id}
                            onChange={this.props.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <select className="form-control" 
                            name="destination"
                            value={this.props.destination}
                            onChange={this.props.handleInputChange}
                        >
                            <option value="" disabled="disabled">Select a destination!</option>
                            { allDestinations }
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            placeholder="Destination Notes"
                            name="notes"
                            value={this.props.notes}
                            onChange={this.props.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            placeholder="Cover Photo URL"
                            name="image_url"
                            value={this.props.image_url}
                            onChange={this.props.handleInputChange}
                        />
                    </div>
                    <button type="submit" 
                        className="btn btn-default" 
                        onClick={this.props.addDestinationHandler}
                    >Submit</button>
                </form>
        )
    }
}

export default CreateDestinationForm;