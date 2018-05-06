import React, {Component} from 'react';
import {Route} from 'react-router-dom';

class SearchDestination extends Component {
    state = {
        search_destination: "",
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
    
    render() {
        const allDestinations = this.props.allDests.map(destination => {
            return ( <option key={destination.id} value={destination.name}>{destination.name}</option>
            )
        });
        
        return(
            <div className='col-lg-5'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>
                        Search for a Destination!
                    </div>
                    <div className='panel-body'>
                        <form>
                        <div className="form-group">
                        <select className="form-control" 
                            name="search_destination"
                            value={this.state.destination}
                            onChange={this.handleInputChange}>

                            <option value="" disabled="disabled">Select a destination!</option>
                            { allDestinations }
                        </select>
                        </div>
                            <button type="submit" className="btn btn-default">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchDestination;