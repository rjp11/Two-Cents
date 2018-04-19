import React, {Component} from 'react';
import ProfileCards from '../profileCards';
import axios from 'axios';

class ProfileWrapper extends Component {
    state = {
        user_id: 1,
        user_destinations : []
    }
    
    componentDidMount = () => {
        let userID = this.state.user_id;
        axios.get(`/api/destinations/${userID}`).then((res) => {
            console.log(res.data);
            this.setState({
                user_destinations: res.data
            })
        });
    }

    render(){
        const allDestinations = this.state.user_destinations.map(destination => {
            return ( <option key={destination.id} value={destination.destination}>{destination.destination}</option>
            )
        });

        return(
            <div>
                <ProfileCards />

            </div>
        )
    }
}

export default ProfileWrapper;