import React, {Component} from 'react';
import ProfileWrapper from '../../global/profileWrapper';
import ProfileCard from '../../global/profileCards';
import axios from 'axios';

class ProfilePage extends Component {
    state = {
        user_id: 1,
        user_destinations : [],
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
        return(
            <div>
                <h1>User #1's Pages</h1>
                <ProfileWrapper>
                    {this.state.user_destinations.map(destination => (
                        <ProfileCard
                            key={destination.id}
                            id={destination.id}
                            destination={destination.destination}
                        />
                    ))}
                </ProfileWrapper>
            </div>
        )
    }
}

export default ProfilePage;