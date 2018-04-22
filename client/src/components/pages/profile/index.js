import React, {Component} from 'react';
import ProfileWrapper from '../../global/profileWrapper';
import ProfileCard from '../../global/profileCards';
import axios from 'axios';

class ProfilePage extends Component {
    state = {
        user_destinations : [],
    }
    
    componentDidMount = () => {
        let userID = this.props.user_id;
        axios.get(`/api/destinations/${userID}`).then((res) => {
            this.setState({
                user_destinations: res.data
            })
        });
    }
   
    render() {
        return(
            <div>
                <h1>User #{this.props.user_id}'s Pages</h1>
                <ProfileWrapper>
                    {this.state.user_destinations.map(destination => (
                        <ProfileCard
                            key={destination.id}
                            id={destination.id}
                            destination={destination.destination}
                            img = {destination.image_url}
                        />
                    ))}
                </ProfileWrapper>
            </div>
        )
    }
}

export default ProfilePage;