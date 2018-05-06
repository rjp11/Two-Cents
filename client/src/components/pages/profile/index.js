import React, {Component} from 'react';
import ProfileCard from '../../global/profileCards';

class ProfilePage extends Component {
    
    componentDidMount () {
        this.props.getUserDestinations()
    }
   
    render() {
        return(
            <div className='content'>
                <h1>{this.props.user_first_name}'s Pages</h1>
                
                    {this.props.user_destinations.map(destination => (
                        <div className='row'>
                            <ProfileCard
                                key={destination.id}
                                id={destination.id}
                                destination={destination.destination}
                                img = {destination.image_url}
                                setDestination = {this.props.setDestination}
                            />
                        </div>
                    ))}
            </div>
        )
    }
}

export default ProfilePage;