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
                <div className='form-panel'>
                    <h1 className='sans-serif text-center'>Search for a Destination!</h1>
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
        )
    }
}

export default SearchDestination;