import React, {Component} from 'react';
import ProfileWrapper from '../../global/profileWrapper';
import ProfileCard from '../../global/profileCards';

class ProfilePage extends Component {
    
    componentDidMount = () => {
        this.props.getUserDestinations()
    }
   
    render() {
        return(
            <div>
                <h1>User #{this.props.user_id}'s Pages</h1>
                <ProfileWrapper>
                    {this.props.user_destinations.map(destination => (
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