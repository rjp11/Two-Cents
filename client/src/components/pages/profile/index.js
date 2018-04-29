import React, {Component} from 'react';
import ProfileCard from '../../global/profileCards';

class ProfilePage extends Component {
    
    componentDidMount () {
        this.props.getUserDestinations()
    }
   
    render() {
        return(
            <div>
                <h1>User #{this.props.user_id}'s Pages</h1>
                <div className='row'>
                    {this.props.user_destinations.map(destination => (
                        <ProfileCard
                            key={destination.id}
                            id={destination.id}
                            destination={destination.destination}
                            img = {destination.image_url}
                            setDestination = {this.props.setDestination}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default ProfilePage;