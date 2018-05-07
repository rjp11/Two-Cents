import React, {Component} from 'react';
import ProfileCard from '../../global/profileCards';

class ProfilePage extends Component {
    
    componentDidMount () {
        this.props.getUserDestinations()
    }
   
    render() {
        return(
            <div className='content'>
                <div className='row'>
                    <div className='col-lg-2 text-center destination-text'>
                        <p>{this.props.user_first_name.toUpperCase()}'s DESTINATIONS</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-2'>
                    </div>
                    <div className='col-lg-8'>
                        {this.props.user_destinations.map(destination => (
                            <div key={destination.id} className='row'>
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
                </div>
            </div>
        )
    }
}

export default ProfilePage;