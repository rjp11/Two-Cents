import React, {Component} from 'react';
import axios from 'axios';


class CreateDestinationForm extends Component {
    state = {
        user_id: "",
        destination: "",
        notes: "",
        allDests: []
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    addDestinationHandler = () => {
        const data = {
            user_id: this.state.user_id,
            destination: this.state.destination,
            notes: this.state.notes
        };

        axios.post('/api/userDestinations/', data).then(data => console.log("Success!"));
    }

    // componentDidMount(){
    //     axios.get('http:localhost:3000/api/destinations').then((res) => {
    //         console.log(res.data);
    //         this.setState({
    //             allDests: res.data
    //         })
    //     });
    // }

    render() {
        const allDestinations = this.state.allDests.map(destination => {
            return ( <option key={destination.id} value={destination.name} />
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
                        <input list='destinations' 
                            className="form-control" 
                            placeholder="Destination"
                            name="destination"
                            value={this.state.destination}
                            onChange={this.handleInputChange}
                        />
                            <datalist id='destinations'>
                                { allDestinations }
                            </datalist>
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
                    <button type="submit" 
                        className="btn btn-default" 
                        onClick={this.addDestinationHandler}
                    >Submit</button>
                </form>
        )
    }
}

export default CreateDestinationForm;